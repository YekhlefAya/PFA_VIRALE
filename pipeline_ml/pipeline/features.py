"""Variables et cibles par sujet (prototype de features.py, EF-04 / EF-08 / EF-09).

Règle d'or (ENF-04) : les variables d'un sujet ne lisent que les publications et les
engagements d'horodatage <= T0 + 30 min. Seule la cible (n_posts_6h, t_peak_min) lit plus loin.
`build_topic_table` coupe les données à T0 + obs avant de calculer quoi que ce soit, et un test
(tests/test_pipeline.py) vérifie que supprimer tout ce qui suit la fenêtre ne change aucune variable.

Familles (préfixes de colonnes) : f_t_ temporelles, f_g_ graphe, f_s_ sémantiques.
Limites connues :
- f_s_emotion_lex est un proxy lexical (points d'exclamation + lexique), à remplacer par le
  classifieur d'émotions multilingue du CDC ;
- le nombre d'abonnés vient d'un instantané pris au moment de la collecte du profil.
"""
from __future__ import annotations

import re
from collections import Counter
from dataclasses import dataclass

import networkx as nx
import numpy as np
import pandas as pd

US_MIN = 60_000_000

URGENCY = ("urgent", "breaking", "alerte", "alert", "flash", "maintenant", "now")
EMOTION = ("incroyable", "choc", "choquant", "scandale", "horrible", "terrible", "amazing", "wow", "omg",
           "furieux", "angry", "shocking", "unbelievable", "tragique", "peur", "fear", "colère", "hate")
_URG_RE = re.compile(r"\b(" + "|".join(URGENCY) + r")\b", re.I)
_EMO_RE = re.compile(r"\b(" + "|".join(EMOTION) + r")\b", re.I)


@dataclass
class FeatureConfig:
    obs_min: int = 30          # fenêtre d'observation To
    bin_min: int = 5           # pas des séries (EF-04)
    horizon_h: float = 6.0     # horizon de prédiction Tp
    min_posts: int = 15        # taille minimale d'un sujet dans la fenêtre (CDC § 9.1)
    seed: int = 0


def _empty_eng(engagement: pd.DataFrame) -> pd.DataFrame:
    return engagement.iloc[0:0]


def topic_features(w: pd.DataFrame, ew: pd.DataFrame, E: np.ndarray, fol: pd.Series,
                   post_author: pd.Series, cfg: FeatureConfig, t0: int, text_col: str) -> dict:
    """Variables d'un sujet à partir de ses posts `w` et engagements `ew` DÉJÀ restreints à la fenêtre."""
    nb = cfg.obs_min // cfg.bin_min
    bin_us = cfg.bin_min * US_MIN
    n = len(w)
    f: dict = {}

    # --- temporelles -----------------------------------------------------------------------
    bins = np.minimum(((w["time_us"].to_numpy() - t0) // bin_us).astype(int), nb - 1)
    rates = np.bincount(bins, minlength=nb)[:nb].astype(float)
    for i, r in enumerate(rates):
        f[f"f_t_rate{i}"] = r
    f["f_t_n_posts"] = float(n)
    f["f_t_accel"] = float(np.polyfit(np.arange(nb), np.log1p(rates), 1)[0])
    f["f_t_rate_ratio"] = float((rates[nb // 2:].sum() + 1) / (rates[: nb // 2].sum() + 1))
    n_like = int((ew["kind"] == "like").sum()) if len(ew) else 0
    n_rep = int((ew["kind"] == "repost").sum()) if len(ew) else 0
    f["f_t_n_likes"], f["f_t_n_reposts"] = float(n_like), float(n_rep)
    f["f_t_early_eng_ratio"] = n_rep / (1.0 + n_like)
    f["f_t_eng_per_post"] = (n_like + n_rep) / n

    # --- graphe ----------------------------------------------------------------------------
    auth = w["author_hash"].to_numpy()
    counts = pd.Series(auth).value_counts().to_numpy().astype(float)
    p = counts / counts.sum()
    f["f_g_author_diversity"] = len(counts) / n
    f["f_g_author_entropy"] = float(-(p * np.log(p)).sum() / np.log(n)) if n > 1 else 0.0
    fl = fol.reindex(pd.unique(auth)).dropna().to_numpy(dtype=float)
    f["f_g_log_followers_mean"] = float(np.log1p(fl).mean()) if len(fl) else np.nan
    f["f_g_log_followers_max"] = float(np.log1p(fl).max()) if len(fl) else np.nan
    f["f_g_followers_known_ratio"] = len(fl) / len(counts)

    pairs: Counter = Counter()
    if len(ew):
        src = ew["author_hash"].to_numpy()
        dst = post_author.reindex(ew["post_id"].to_numpy()).to_numpy()
        for a, b in zip(src, dst):
            if isinstance(b, str) and a != b:
                pairs[(a, b) if a < b else (b, a)] += 1
    G = nx.Graph()
    G.add_weighted_edges_from((a, b, c) for (a, b), c in pairs.items())
    if G.number_of_edges() > 0:
        comms = nx.community.louvain_communities(G, weight="weight", seed=cfg.seed)
        k = 32 if G.number_of_nodes() > 32 else None
        bt = nx.betweenness_centrality(G, k=k, seed=cfg.seed)
        f["f_g_n_communities"] = float(len(comms))
        f["f_g_betweenness_max"] = float(max(bt.values()))
        f["f_g_n_nodes"] = float(G.number_of_nodes())
    else:
        f["f_g_n_communities"] = f["f_g_betweenness_max"] = f["f_g_n_nodes"] = 0.0
    f["f_g_isolated_ratio"] = 1.0 - len(set(auth) & set(G.nodes)) / len(counts)

    # --- sémantiques -----------------------------------------------------------------------
    c = E.mean(axis=0)
    c = c / (np.linalg.norm(c) + 1e-12)
    f["f_s_coherence"] = float((E @ c).mean())
    txt = w[text_col].fillna("").astype(str)
    excl = txt.str.count("!").clip(upper=3).to_numpy()
    emo = txt.apply(lambda s: len(_EMO_RE.findall(s))).clip(upper=3).to_numpy()
    f["f_s_emotion_lex"] = float(((excl + emo) / 6.0).mean())
    f["f_s_urgency_rate"] = float(txt.apply(lambda s: bool(_URG_RE.search(s))).mean())
    f["f_s_question_rate"] = float(txt.str.contains(r"\?", regex=True).mean())
    f["f_s_link_rate"] = float(w["has_link"].astype(bool).mean())
    f["f_s_media_rate"] = float(w["has_media"].astype(bool).mean())
    return f


def build_topic_table(posts: pd.DataFrame, engagement: pd.DataFrame, emb: np.ndarray,
                      authors: pd.DataFrame, cfg: FeatureConfig, data_end_us: int | None = None) -> pd.DataFrame:
    """Une ligne par sujet : variables f_* (fenêtre T0 + obs) et cibles brutes.

    posts       : colonnes time_us, author_hash, post_id, topic_id (-1 = bruit), has_media, has_link, texte
    engagement  : colonnes time_us, kind (like/repost), author_hash, post_id
    emb         : plongements alignés sur les lignes de `posts` (après reset_index)
    """
    obs_us, hor_us = cfg.obs_min * US_MIN, int(cfg.horizon_h * 60 * US_MIN)
    bin_us = cfg.bin_min * US_MIN
    n_hbins = int(cfg.horizon_h * 60 // cfg.bin_min)
    posts = posts.reset_index(drop=True)
    text_col = "text_clean" if "text_clean" in posts else "text"
    if data_end_us is None:
        data_end_us = int(max(posts["time_us"].max(), engagement["time_us"].max() if len(engagement) else 0))

    post_topic = pd.Series(posts["topic_id"].to_numpy(), index=posts["post_id"].to_numpy())
    post_author = pd.Series(posts["author_hash"].to_numpy(), index=posts["post_id"].to_numpy())
    post_id_set = set(posts["post_id"].to_numpy())
    eng = engagement[engagement["post_id"].isin(post_id_set)].copy() if len(engagement) else engagement.copy()
    eng["topic_id"] = eng["post_id"].map(post_topic)
    eng = eng.dropna(subset=["topic_id"]).sort_values("time_us", kind="stable")
    eng["topic_id"] = eng["topic_id"].astype(int)
    egroups = {t: g for t, g in eng.groupby("topic_id", sort=False)}

    fol = (authors.drop_duplicates("author_hash").set_index("author_hash")["followers"]
           if len(authors) else pd.Series(dtype=float))
    ps = posts.assign(_i=np.arange(len(posts)))
    ps = ps[ps["topic_id"] >= 0].sort_values("time_us", kind="stable")

    rows = []
    for tid, g in ps.groupby("topic_id", sort=False):
        times = g["time_us"].to_numpy()
        t0 = int(times[0])
        t_obs, t_hor = t0 + obs_us, t0 + hor_us
        n_w = int(np.searchsorted(times, t_obs, side="right"))
        if n_w < cfg.min_posts:
            continue
        w = g.iloc[:n_w]                                   # <-- tout ce qui suit n'utilise QUE w et ew
        e = egroups.get(tid)
        ew = _empty_eng(eng) if e is None else e.iloc[: int(np.searchsorted(e["time_us"].to_numpy(), t_obs, side="right"))]
        feats = topic_features(w, ew, emb[w["_i"].to_numpy()], fol, post_author, cfg, t0, text_col)

        n6 = int(np.searchsorted(times, t_hor, side="right"))      # cible : lit jusqu'à T0 + 6 h
        hb = np.minimum(((times[:n6] - t0) // bin_us).astype(int), n_hbins - 1)
        peak = int(np.bincount(hb, minlength=n_hbins).argmax())
        rows.append({"topic_id": int(tid), "t0_us": t0, "n_posts_total": len(times), **feats,
                     "n_posts_6h": n6, "t_peak_min": (peak + 0.5) * cfg.bin_min,
                     "horizon_complete": bool(t_hor <= data_end_us)})
    return pd.DataFrame(rows)


def feature_columns(df: pd.DataFrame, families=("t", "g", "s")) -> list[str]:
    return [c for c in df.columns if any(c.startswith(f"f_{f}_") for f in families)]
