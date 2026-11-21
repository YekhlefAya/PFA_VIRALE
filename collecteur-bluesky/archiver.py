"""Archiveur : lit les flux Redis ('events', 'authors') et écrit des fichiers Parquet.

Couche brute, immuable, partitionnée par jour et par heure :
  /data/raw/dt=AAAA-MM-JJ/hour=HH/part-*.parquet
  /data/authors/dt=AAAA-MM-JJ/part-*.parquet
Un fichier n'est visible qu'une fois complet (écriture .tmp puis renommage).
Les entrées Redis ne sont supprimées qu'après écriture réussie : rien n'est perdu
si l'archiveur plante. En cas de reprise, quelques doublons sont possibles (à retirer
au traitement sur la clé time_us + kind + author_hash + post_id).
"""
import asyncio, datetime as dt, logging, os, signal, time

import pyarrow as pa
import pyarrow.parquet as pq
import redis.asyncio as aioredis

REDIS_URL = os.getenv("REDIS_URL", "redis://redis:6379/0")
DATA = os.getenv("DATA_DIR", "/data")
FLUSH_SECONDS = int(os.getenv("FLUSH_SECONDS", "300"))
MAX_ROWS = int(os.getenv("MAX_ROWS", "200000"))
GROUP, CONSUMER = "archiver", "a1"

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(message)s")
log = logging.getLogger("archiver")

EV_SCHEMA = pa.schema([("time_us", pa.int64()), ("kind", pa.string()), ("author_hash", pa.string()),
                       ("post_id", pa.string()), ("text", pa.string()), ("langs", pa.string()),
                       ("has_media", pa.bool_()), ("has_link", pa.bool_())])
AU_SCHEMA = pa.schema([("author_hash", pa.string()), ("followers", pa.int64()), ("follows", pa.int64()),
                       ("posts", pa.int64()), ("fetched_us", pa.int64())])
_seq = 0


def write_parquet(table, folder):
    global _seq
    os.makedirs(folder, exist_ok=True)
    _seq += 1
    path = os.path.join(folder, f"part-{int(time.time())}-{_seq:05d}.parquet")
    pq.write_table(table, path + ".tmp", compression="zstd")
    os.replace(path + ".tmp", path)


def write_events(rows):
    by_hour = {}
    for _, f in rows:
        t = int(f["t"])
        by_hour.setdefault(t // 3_600_000_000, []).append((t, f))
    for hour, items in by_hour.items():
        d = dt.datetime.fromtimestamp(hour * 3600, dt.timezone.utc)
        cols = {
            "time_us": [t for t, _ in items],
            "kind": [f.get("k") for _, f in items],
            "author_hash": [f.get("a") for _, f in items],
            "post_id": [f.get("p") for _, f in items],
            "text": [f.get("x") if f.get("k") == "post" else None for _, f in items],
            "langs": [f.get("l") or None for _, f in items],
            "has_media": [f.get("m") == "1" if f.get("k") == "post" else None for _, f in items],
            "has_link": [f.get("u") == "1" if f.get("k") == "post" else None for _, f in items],
        }
        folder = os.path.join(DATA, "raw", f"dt={d:%Y-%m-%d}", f"hour={d:%H}")
        write_parquet(pa.table(cols, schema=EV_SCHEMA), folder)


def write_authors(rows):
    by_day = {}
    for _, f in rows:
        by_day.setdefault(int(f["t"]) // 86_400_000_000, []).append(f)
    for day, items in by_day.items():
        d = dt.datetime.fromtimestamp(day * 86400, dt.timezone.utc)
        cols = {"author_hash": [f["a"] for f in items], "followers": [int(f["f"]) for f in items],
                "follows": [int(f["g"]) for f in items], "posts": [int(f["n"]) for f in items],
                "fetched_us": [int(f["t"]) for f in items]}
        write_parquet(pa.table(cols, schema=AU_SCHEMA), os.path.join(DATA, "authors", f"dt={d:%Y-%m-%d}"))


async def main():
    r = aioredis.from_url(REDIS_URL, decode_responses=True)
    for _ in range(60):
        try:
            await r.ping()
            break
        except Exception:
            await asyncio.sleep(2)
    for s in ("events", "authors"):
        try:
            await r.xgroup_create(s, GROUP, id="0", mkstream=True)
        except aioredis.ResponseError as ex:
            if "BUSYGROUP" not in str(ex):
                raise

    stop = asyncio.Event()
    loop = asyncio.get_running_loop()
    for sig in (signal.SIGTERM, signal.SIGINT):
        loop.add_signal_handler(sig, stop.set)

    buf = {"events": [], "authors": []}
    total = {"events": 0, "authors": 0}
    pending, last_flush = True, time.time()     # d'abord, on reprend les entrées lues mais non acquittées
    pend_id = {"events": "0", "authors": "0"}

    async def flush():
        n_ev, n_au = len(buf["events"]), len(buf["authors"])
        if not (n_ev or n_au):
            return
        try:
            if n_ev:
                write_events(buf["events"])
            if n_au:
                write_authors(buf["authors"])
            for s in ("events", "authors"):
                ids = [i for i, _ in buf[s]]
                for k in range(0, len(ids), 1000):
                    await r.xack(s, GROUP, *ids[k:k + 1000])
                    await r.xdel(s, *ids[k:k + 1000])
                total[s] += len(ids)
                buf[s] = []
            log.info("Écrit : %d événements, %d profils (cumul %d / %d)", n_ev, n_au, total["events"], total["authors"])
        except Exception as ex:
            log.error("Écriture impossible (%s) ; les données restent dans Redis, nouvel essai", ex)

    while not stop.is_set():
        try:
            ids = dict(pend_id) if pending else {"events": ">", "authors": ">"}
            res = await r.xreadgroup(GROUP, CONSUMER, ids, count=5000, block=None if pending else 2000)
            got = 0
            for stream, msgs in res or []:
                buf[stream].extend(msgs)
                got += len(msgs)
                if pending and msgs:
                    pend_id[stream] = msgs[-1][0]
            if pending and got == 0:
                pending = False
            if time.time() - last_flush >= FLUSH_SECONDS or sum(len(v) for v in buf.values()) >= MAX_ROWS:
                await flush()
                last_flush = time.time()
        except Exception as ex:
            log.warning("Lecture Redis : %s", ex)
            await asyncio.sleep(3)
    await flush()                                 # arrêt propre : on écrit ce qui reste
    log.info("Arrêt propre de l'archiveur")


if __name__ == "__main__":
    asyncio.run(main())
