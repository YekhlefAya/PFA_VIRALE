"""Contrôle de la collecte : volumes, trous, taille, projection disque.

Usage sur le serveur :   docker compose exec archiver python check.py
Usage sur ton PC     :   DATA_DIR=./data python check.py   (après téléchargement)
"""
import datetime as dt, os, shutil, sys

import numpy as np
import pyarrow.compute as pc
import pyarrow.dataset as ds

root = os.getenv("DATA_DIR", "/data")
raw = os.path.join(root, "raw")


def dir_size(path):
    return sum(os.path.getsize(os.path.join(a, f)) for a, _, fs in os.walk(path) for f in fs if f.endswith(".parquet"))


if not os.path.isdir(raw) or dir_size(raw) == 0:
    print("Aucun fichier Parquet pour l'instant (l'archiveur écrit toutes les 5 minutes).")
    sys.exit(0)

tbl = ds.dataset(raw, format="parquet").to_table(columns=["time_us", "kind"])
t = tbl["time_us"].to_numpy()
n = len(t)
kinds = {k["values"].as_py(): k["counts"].as_py() for k in pc.value_counts(tbl["kind"])}
t0, t1 = dt.datetime.fromtimestamp(t.min() / 1e6, dt.timezone.utc), dt.datetime.fromtimestamp(t.max() / 1e6, dt.timezone.utc)
span_h = max((t.max() - t.min()) / 3.6e9, 1e-9)
print(f"Période : {t0:%Y-%m-%d %H:%M} -> {t1:%Y-%m-%d %H:%M} UTC  ({span_h:.1f} h)")
print(f"Événements : {n:,}  |  " + "  ".join(f"{k}={v:,}" for k, v in sorted(kinds.items())))
if kinds.get("post"):
    print(f"Likes par post : {kinds.get('like', 0) / kinds['post']:.2f}   Reposts par post : {kinds.get('repost', 0) / kinds['post']:.2f}")

days, counts = np.unique(t // 86_400_000_000, return_counts=True)
print("\nPar jour (UTC) :")
for d, c in zip(days, counts):
    print(f"  {dt.datetime.fromtimestamp(int(d) * 86400, dt.timezone.utc):%Y-%m-%d}  {c:>12,}")

minutes = np.unique(t // 60_000_000)
expected = int(minutes[-1] - minutes[0] + 1)
missing = expected - len(minutes)
print(f"\nMinutes sans aucun événement : {missing} sur {expected} ({100 * missing / expected:.2f} %)")
gaps, run_start, prev = [], None, minutes[0]
for m in minutes[1:]:
    if m - prev > 3:                                    # trou d'au moins 3 minutes
        gaps.append((int(prev) + 1, int(m) - 1))
    prev = m
for a, b in gaps[:10]:
    print(f"  trou : {dt.datetime.fromtimestamp(a * 60, dt.timezone.utc):%Y-%m-%d %H:%M} -> "
          f"{dt.datetime.fromtimestamp(b * 60, dt.timezone.utc):%Y-%m-%d %H:%M}  ({b - a + 1} min)")
if len(gaps) > 10:
    print(f"  ... et {len(gaps) - 10} autres trous")

size = dir_size(raw)
per_day = size / (span_h / 24) if span_h > 1 else 0
total, used, free = shutil.disk_usage(root)
print(f"\nTaille des données brutes : {size / 1e6:,.0f} Mo  (~{per_day / 1e6:,.0f} Mo par jour)")
print(f"Disque : {free / 1e9:,.1f} Go libres sur {total / 1e9:,.1f} Go")
if per_day:
    print(f"Projection : 14 jours ≈ {14 * per_day / 1e9:,.1f} Go ; 21 jours ≈ {21 * per_day / 1e9:,.1f} Go"
          f"  (jours de marge restants : {free / per_day:,.0f})")
au = os.path.join(root, "authors")
if os.path.isdir(au) and dir_size(au):
    nau = ds.dataset(au, format="parquet").count_rows()
    print(f"Profils d'auteurs (abonnés) récupérés : {nau:,}")
