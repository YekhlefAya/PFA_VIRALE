"""Nettoyage de la couche brute (prototype de clean.py, jalon J3).

- dédoublonnage sur la clé composite (time_us, kind, author_hash, post_id) : le rejeu de 10 s
  du collecteur et la reprise de l'archiveur peuvent créer des doublons ;
- normalisation des types (booléens relus depuis CSV/Parquet) ;
- texte : retrait des URL et des espaces superflus, posts trop courts écartés ;
- suppression des posts répétés à l'identique par un même auteur (spam / bots) ;
- likes et reposts orphelins (post visé absent) ou antérieurs au post : écartés.
"""
from __future__ import annotations

import re

import pandas as pd

KEY = ["time_us", "kind", "author_hash", "post_id"]
URL_RE = re.compile(r"https?://\S+|www\.\S+")
KINDS = ("post", "like", "repost")


def _to_bool(s: pd.Series) -> pd.Series:
    return s.astype(str).str.lower().isin(["true", "1"])


def clean_posts_and_eng(posts: pd.DataFrame, eng: pd.DataFrame, *, min_chars: int = 10, drop_author_text_dups: bool = True):
    """Nettoie séparément les posts et leurs engagements pour une empreinte mémoire minimale."""
    rep: dict = {"rows_in": int(len(posts) + len(eng))}
    posts = posts.copy()
    eng = eng.copy() if len(eng) else eng
    for c in ("has_media", "has_link"):
        posts[c] = _to_bool(posts[c]) if c in posts else False

    posts["time_us"] = pd.to_numeric(posts["time_us"], errors="coerce")
    posts = posts.dropna(subset=["time_us", "post_id", "author_hash"])
    posts["time_us"] = posts["time_us"].astype("int64")

    dup_id = posts.duplicated(subset=["post_id"], keep="first")
    rep["duplicates_removed"] = int(dup_id.sum())
    posts = posts[~dup_id]

    text = posts["text"].fillna("").astype(str)
    posts["text_clean"] = text.str.replace(URL_RE, " ", regex=True).str.replace(r"\s+", " ", regex=True).str.strip()
    short = posts["text_clean"].str.len() < min_chars
    rep["short_posts_removed"] = int(short.sum())
    posts = posts[~short]

    if drop_author_text_dups:
        spam = posts.duplicated(subset=["author_hash", "text_clean"], keep="first")
        rep["author_text_duplicates_removed"] = int(spam.sum())
        posts = posts[~spam]

    if len(eng):
        eng["time_us"] = pd.to_numeric(eng["time_us"], errors="coerce")
        eng = eng.dropna(subset=["time_us", "post_id", "author_hash", "kind"])
        eng["time_us"] = eng["time_us"].astype("int64")
        post_time = posts.set_index("post_id")["time_us"]
        eng["_post_t"] = eng["post_id"].map(post_time)
        orphan = eng["_post_t"].isna()
        rep["orphan_engagements_removed"] = int(orphan.sum())
        early = (~orphan) & (eng["time_us"] < eng["_post_t"])
        rep["engagements_before_post_removed"] = int(early.sum())
        eng = eng[~orphan & ~early].drop(columns="_post_t")
    else:
        rep["orphan_engagements_removed"] = 0
        rep["engagements_before_post_removed"] = 0

    posts = posts.sort_values("time_us", kind="stable", ignore_index=True)
    eng = eng.sort_values("time_us", kind="stable", ignore_index=True) if len(eng) else eng
    rep.update(posts=int(len(posts)), likes=int((eng["kind"] == "like").sum()) if len(eng) else 0,
               reposts=int((eng["kind"] == "repost").sum()) if len(eng) else 0,
               rows_out=int(len(posts) + len(eng)))
    return posts, eng, rep


def clean_events(events: pd.DataFrame, *, min_chars: int = 10, drop_author_text_dups: bool = True):
    """Renvoie (événements nettoyés triés par temps, rapport de nettoyage).

    Ajoute la colonne `text_clean` pour les posts. Les colonnes d'origine sont conservées.
    """
    rep: dict = {"rows_in": int(len(events))}
    df = events.copy()
    df["time_us"] = pd.to_numeric(df["time_us"], errors="coerce")
    df = df.dropna(subset=KEY)
    df = df[df["kind"].isin(KINDS)]
    df["time_us"] = df["time_us"].astype("int64")
    rep["invalid_rows"] = rep["rows_in"] - int(len(df))

    dup = df.duplicated(subset=KEY, keep="first")
    rep["duplicates_removed"] = int(dup.sum())
    df = df[~dup]

    for c in ("has_media", "has_link"):
        df[c] = _to_bool(df[c]) if c in df else False

    is_post = df["kind"] == "post"
    posts, eng = df[is_post].copy(), df[~is_post].copy()

    text = posts["text"].fillna("").astype(str)
    posts["text_clean"] = text.str.replace(URL_RE, " ", regex=True).str.replace(r"\s+", " ", regex=True).str.strip()
    short = posts["text_clean"].str.len() < min_chars
    rep["short_posts_removed"] = int(short.sum())
    posts = posts[~short]

    dup_id = posts.duplicated(subset=["post_id"], keep="first")
    posts = posts[~dup_id]
    if drop_author_text_dups:
        spam = posts.duplicated(subset=["author_hash", "text_clean"], keep="first")
        rep["author_text_duplicates_removed"] = int(spam.sum())
        posts = posts[~spam]

    post_time = posts.set_index("post_id")["time_us"]
    eng["_post_t"] = eng["post_id"].map(post_time)
    orphan = eng["_post_t"].isna()
    rep["orphan_engagements_removed"] = int(orphan.sum())
    early = (~orphan) & (eng["time_us"] < eng["_post_t"])
    rep["engagements_before_post_removed"] = int(early.sum())
    eng = eng[~orphan & ~early].drop(columns="_post_t")

    out = pd.concat([posts, eng], ignore_index=True).sort_values("time_us", kind="stable", ignore_index=True)
    rep.update(rows_out=int(len(out)), posts=int((out["kind"] == "post").sum()),
               likes=int((out["kind"] == "like").sum()), reposts=int((out["kind"] == "repost").sum()))
    return out, rep
