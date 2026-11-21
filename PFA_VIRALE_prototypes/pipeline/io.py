"""Lecture / écriture de la couche brute.

Parquet quand pyarrow est installé (cas du dépôt réel), sinon CSV (repli pour les tests
et les environnements sans pyarrow). Les chemins suivent l'archiveur :
  <data_dir>/raw/dt=AAAA-MM-JJ/hour=HH/part-*.parquet
  <data_dir>/authors/dt=AAAA-MM-JJ/part-*.parquet
"""
from __future__ import annotations

import glob
import os

import pandas as pd

EVENT_COLS = ["time_us", "kind", "author_hash", "post_id", "text", "langs", "has_media", "has_link"]
AUTHOR_COLS = ["author_hash", "followers", "follows", "posts", "fetched_us"]


def has_pyarrow() -> bool:
    try:
        import pyarrow  # noqa: F401
        return True
    except ImportError:
        return False


def _read(path: str) -> pd.DataFrame:
    return pd.read_parquet(path) if path.endswith(".parquet") else pd.read_csv(path)


def _read_folder(folder: str, max_files: int | None = None, columns: list[str] | None = None) -> pd.DataFrame:
    files = sorted(glob.glob(os.path.join(folder, "**", "*.parquet"), recursive=True))
    is_parquet = bool(files)
    if not files:
        files = sorted(glob.glob(os.path.join(folder, "**", "*.csv"), recursive=True))
    if not files:
        raise FileNotFoundError(f"Aucun fichier .parquet ou .csv sous {folder}")
    if max_files is not None and max_files > 0:
        files = files[:max_files]
    
    if is_parquet and has_pyarrow():
        import pyarrow.dataset as ds
        dataset = ds.dataset(files, format="parquet")
        # Ensure requested columns exist in dataset schema
        avail = set(dataset.schema.names)
        cols = [c for c in columns if c in avail] if columns else None
        return dataset.to_table(columns=cols).to_pandas()
    return pd.concat([_read(f) for f in files], ignore_index=True)


def load_events(data_dir: str, max_files: int | None = None) -> pd.DataFrame:
    """Événements bruts (posts, likes, reposts). Les doublons sont retirés dans clean.py."""
    return _read_folder(os.path.join(data_dir, "raw"), max_files=max_files, columns=EVENT_COLS)


def load_authors(data_dir: str, max_files: int | None = None) -> pd.DataFrame:
    """Profils d'auteurs (abonnés...). Vide si l'enrichissement était désactivé."""
    try:
        return _read_folder(os.path.join(data_dir, "authors"), max_files=max_files, columns=AUTHOR_COLS)
    except FileNotFoundError:
        return pd.DataFrame(columns=AUTHOR_COLS)


def _write(df: pd.DataFrame, path: str) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if has_pyarrow():
        df.to_parquet(path.replace(".csv", ".parquet"), index=False)
    else:
        df.to_csv(path, index=False)


def write_partitioned(events: pd.DataFrame, authors: pd.DataFrame, data_dir: str) -> None:
    """Écrit events/authors au même format de partition que l'archiveur."""
    hours = pd.to_datetime(events["time_us"] // 1_000_000, unit="s", utc=True)
    for (day, hour), g in events.groupby([hours.dt.strftime("%Y-%m-%d"), hours.dt.strftime("%H")]):
        _write(g, os.path.join(data_dir, "raw", f"dt={day}", f"hour={hour}", "part-00001.csv"))
    if len(authors):
        _write(authors, os.path.join(data_dir, "authors", "part-00001.csv"))
