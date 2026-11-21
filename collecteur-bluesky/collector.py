"""Collecteur Bluesky (Jetstream) -> Redis Streams.

- Garde les posts racine (pas les réponses) dans les langues voulues, puis les
  "j'aime" et republications qui visent ces posts pendant TRACK_HOURS heures.
- Pseudonymisation à l'ingestion : auteurs et identifiants de posts sont remplacés
  par un HMAC salé (PSEUDO_SALT). Aucun identifiant en clair n'est écrit dans Redis.
- Reprise après coupure : le curseur Jetstream est mémorisé dans Redis.
- Optionnel (ENRICH=1) : nombre d'abonnés des auteurs, via l'API publique Bluesky.
"""
import asyncio, hashlib, hmac, itertools, json, logging, os, time
from collections import defaultdict

import httpx
import redis.asyncio as aioredis
import websockets

DEFAULT_URLS = ("wss://jetstream2.us-east.bsky.network/subscribe,"
                "wss://jetstream1.us-east.bsky.network/subscribe,"
                "wss://jetstream1.us-west.bsky.network/subscribe,"
                "wss://jetstream2.us-west.bsky.network/subscribe")
URLS = [u.strip() for u in os.getenv("JETSTREAM_URLS", DEFAULT_URLS).split(",") if u.strip()]
REDIS_URL = os.getenv("REDIS_URL", "redis://redis:6379/0")
SALT = os.getenv("PSEUDO_SALT", "").encode()
LANGS = {x for x in os.getenv("LANGS", "fr,en").split(",") if x}
TRACK_US = int(float(os.getenv("TRACK_HOURS", "12")) * 3600 * 1_000_000)
MAXLEN = int(os.getenv("STREAM_MAXLEN", "1000000"))
ENRICH = os.getenv("ENRICH", "1") == "1"
PROFILES_URL = os.getenv("PROFILES_URL", "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfiles")
FLUSH_EVERY = 0.5            # secondes entre deux écritures groupées dans Redis
REPLAY_US = 10_000_000       # on rejoue 10 s avant le curseur (doublons retirés plus tard)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(message)s")
log = logging.getLogger("collector")


def h(value: str) -> str:
    """Pseudonyme stable : HMAC-SHA256 salé, tronqué à 16 caractères hexadécimaux."""
    return hmac.new(SALT, value.encode(), hashlib.sha256).hexdigest()[:16]


def parse_post(rec):
    """Renvoie (texte, langues, has_media, has_link) ou None si le post est écarté."""
    if rec.get("reply"):                       # on ne garde que les posts racine
        return None
    langs = rec.get("langs") or []
    if LANGS and not (set(langs) & LANGS):
        return None
    etype = (rec.get("embed") or {}).get("$type", "")
    has_media = "images" in etype or "video" in etype
    has_link = "external" in etype
    if not has_link:
        for f in rec.get("facets") or []:
            for ft in f.get("features") or []:
                if str(ft.get("$type", "")).endswith("#link"):
                    has_link = True
    return rec.get("text", ""), ",".join(langs), has_media, has_link


async def enricher(r, queue):
    """Récupère le nombre d'abonnés des auteurs (par lots de 25) et le dépose dans le flux 'authors'."""
    async with httpx.AsyncClient(timeout=15) as http:
        while True:
            try:
                batch = {}
                did, ah = await queue.get()
                batch[did] = ah
                t0 = time.time()
                while len(batch) < 25 and time.time() - t0 < 3:
                    try:
                        did, ah = await asyncio.wait_for(queue.get(), timeout=max(0.05, 3 - (time.time() - t0)))
                        batch[did] = ah
                    except asyncio.TimeoutError:
                        break
                resp = await http.get(PROFILES_URL, params=[("actors", d) for d in batch])
                if resp.status_code == 429:
                    log.warning("API profils : trop de requêtes, pause de 30 s")
                    await asyncio.sleep(30)
                    continue
                resp.raise_for_status()
                pipe = r.pipeline(transaction=False)
                now = str(int(time.time() * 1_000_000))
                for p in resp.json().get("profiles", []):
                    ah = batch.get(p.get("did"))
                    if ah:
                        pipe.xadd("authors", {"a": ah, "f": str(p.get("followersCount", 0)),
                                              "g": str(p.get("followsCount", 0)),
                                              "n": str(p.get("postsCount", 0)), "t": now},
                                  maxlen=200_000, approximate=True)
                await pipe.execute()
                await asyncio.sleep(0.3)
            except Exception as ex:               # l'enrichissement ne doit jamais bloquer la collecte
                log.warning("Enrichissement : %s", ex)
                await asyncio.sleep(5)


async def main():
    if not SALT:
        raise SystemExit("PSEUDO_SALT manquant : définis-le dans le fichier .env (voir README).")
    r = aioredis.from_url(REDIS_URL, decode_responses=True)
    for _ in range(60):
        try:
            await r.ping()
            break
        except Exception:
            await asyncio.sleep(2)

    cur = await r.get("cursor")
    last_us = int(cur) if cur else 0
    tracked = {}                                       # post_id -> time_us
    if last_us:
        for pid, t in await r.zrangebyscore("tracked", last_us - TRACK_US, "+inf", withscores=True):
            tracked[pid] = int(t)
        log.info("Reprise depuis le curseur %s (%d posts suivis rechargés)", last_us, len(tracked))

    buf, newtr = [], {}
    stats = defaultdict(int)
    queue = asyncio.Queue(maxsize=20000)
    seen = set()
    if ENRICH:
        asyncio.create_task(enricher(r, queue))

    async def flush():
        """Écrit le tampon dans Redis. On échange d'abord les tampons pour ne rien perdre
        des messages qui arrivent pendant l'écriture ; en cas d'échec, on les remet."""
        nonlocal buf, newtr
        batch, buf = buf, []
        trk, newtr = newtr, {}
        cursor = last_us
        try:
            pipe = r.pipeline(transaction=False)
            for e in batch:
                pipe.xadd("events", e, maxlen=MAXLEN, approximate=True)
            if trk:
                pipe.zadd("tracked", trk)
            if cursor:
                pipe.set("cursor", cursor)
            await pipe.execute()
        except Exception as ex:
            buf = batch + buf
            newtr = {**trk, **newtr}
            log.warning("Écriture Redis impossible (%s) ; nouvel essai bientôt", ex)
            if len(buf) > 200_000:
                del buf[:50_000]
                log.error("Tampon local plein : 50 000 événements perdus")
            await asyncio.sleep(1)

    async def background():
        """Tâche périodique : écriture dans Redis toutes les 0,5 s, bilan et nettoyage chaque minute."""
        last_house = time.time()
        while True:
            await asyncio.sleep(FLUSH_EVERY)
            await flush()
            if time.time() - last_house > 60:
                last_house = time.time()
                old = last_us - TRACK_US
                for pid in [p for p, t in tracked.items() if t < old]:
                    del tracked[pid]
                if len(seen) > 500_000:
                    seen.clear()
                try:
                    await r.zremrangebyscore("tracked", "-inf", old)
                except Exception as ex:
                    log.warning("Nettoyage Redis : %s", ex)
                lag = max(0, int(time.time() - last_us / 1e6))
                log.info("posts=%d likes=%d reposts=%d suivis=%d tampon=%d retard=%ds",
                         stats["post"], stats["like"], stats["repost"], len(tracked), len(buf), lag)

    asyncio.create_task(background())
    for url in itertools.cycle(URLS):
        params = ["wantedCollections=app.bsky.feed.post",
                  "wantedCollections=app.bsky.feed.like",
                  "wantedCollections=app.bsky.feed.repost"]
        if last_us:
            params.append(f"cursor={max(last_us - REPLAY_US, 0)}")
        try:
            async with websockets.connect(url + "?" + "&".join(params), max_size=None,
                                          ping_interval=20, ping_timeout=30) as ws:
                log.info("Connecté à %s", url)
                async for msg in ws:
                    try:
                        e = json.loads(msg)
                    except ValueError:
                        continue
                    t = e.get("time_us", 0)
                    if t > last_us:
                        last_us = t
                    c = e.get("commit")
                    if e.get("kind") != "commit" or not c or c.get("operation") != "create":
                        continue
                    col, rec, did = c.get("collection"), c.get("record") or {}, e.get("did", "")
                    if col == "app.bsky.feed.post":
                        p = parse_post(rec)
                        if p:
                            pid, ah = h(f"at://{did}/app.bsky.feed.post/{c['rkey']}"), h(did)
                            buf.append({"t": str(t), "k": "post", "a": ah, "p": pid, "x": p[0], "l": p[1],
                                        "m": "1" if p[2] else "0", "u": "1" if p[3] else "0"})
                            tracked[pid] = t
                            newtr[pid] = t
                            stats["post"] += 1
                            if ENRICH and ah not in seen:
                                seen.add(ah)
                                try:
                                    queue.put_nowait((did, ah))
                                except asyncio.QueueFull:
                                    pass
                    elif col in ("app.bsky.feed.like", "app.bsky.feed.repost"):
                        subj = (rec.get("subject") or {}).get("uri")
                        if subj and subj.startswith("at://"):
                            pid = h(subj)
                            if pid in tracked:
                                kind = "like" if col.endswith(".like") else "repost"
                                buf.append({"t": str(t), "k": kind, "a": h(did), "p": pid})
                                stats[kind] += 1
        except Exception as ex:                        # coupure réseau, serveur Jetstream indisponible...
            log.warning("Déconnexion (%s) ; reconnexion dans 5 s", ex)
            await asyncio.sleep(5)


if __name__ == "__main__":
    asyncio.run(main())
