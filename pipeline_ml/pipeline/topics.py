"""Détection et nommage des sujets (prototype de cluster.py / topics.py, EF-06 et EF-07).

HDBSCAN (scikit-learn >= 1.3) sur les plongements, sans fixer le nombre de sujets ; le bruit
reçoit l'étiquette -1. Mots-clés par c-TF-IDF (idée de BERTopic), implémentés en sparse.

Limite assumée du prototype : le clustering est *hors ligne* sur tout le jeu fourni. La version
de production (ENF-04) doit rejouer les micro-lots de 10 min et n'utiliser que le passé.
Les variables (features.py) et les étiquettes, elles, respectent déjà la fenêtre T0 + 30 min.
"""
from __future__ import annotations

import numpy as np
import pandas as pd
import scipy.sparse as sp

from .embed import TOKEN


def detect_topics(emb: np.ndarray, *, min_cluster_size: int = 15, min_samples: int = 5, n_jobs: int = -1) -> np.ndarray:
    from sklearn.cluster import HDBSCAN

    model = HDBSCAN(min_cluster_size=min_cluster_size, min_samples=min_samples, metric="euclidean",
                    n_jobs=n_jobs, copy=True)
    return model.fit_predict(emb).astype(int)


def ctfidf_keywords(texts, labels, top_k: int = 6) -> dict[int, list[str]]:
    """Mots-clés par sujet : tf de classe × log(1 + A / f_terme), A = taille moyenne d'une classe."""
    from sklearn.feature_extraction.text import CountVectorizer

    labels = np.asarray(labels)
    docs = pd.Series(np.asarray(list(texts), dtype=object)).groupby(labels).agg(" ".join)
    docs = docs.drop(index=-1, errors="ignore")
    if docs.empty:
        return {}
    cv = CountVectorizer(token_pattern=TOKEN, strip_accents="unicode", lowercase=True)
    X = cv.fit_transform(docs.values).tocsr().astype(np.float64)
    vocab = np.asarray(cv.get_feature_names_out())
    row_sum = np.asarray(X.sum(axis=1)).ravel()
    freq = np.asarray(X.sum(axis=0)).ravel()
    idf = np.log(1.0 + row_sum.mean() / np.maximum(freq, 1.0))
    W = (sp.diags(1.0 / np.maximum(row_sum, 1.0)) @ X @ sp.diags(idf)).tocsr()
    out: dict[int, list[str]] = {}
    for i, tid in enumerate(docs.index):
        a, b = W.indptr[i], W.indptr[i + 1]
        idx, val = W.indices[a:b], W.data[a:b]
        out[int(tid)] = list(vocab[idx[np.argsort(-val)[:top_k]]])
    return out


def name_topics(posts: pd.DataFrame, text_col: str = "text_clean", top_k: int = 6) -> pd.DataFrame:
    """Table des sujets : topic_id, label (3 premiers mots-clés), keywords, t0_us, n_posts_total."""
    kw = ctfidf_keywords(posts[text_col].values, posts["topic_id"].values, top_k=top_k)
    g = posts[posts["topic_id"] >= 0].groupby("topic_id")["time_us"].agg(t0_us="min", n_posts_total="size")
    t = g.reset_index()
    t["keywords"] = t["topic_id"].map(lambda i: ", ".join(kw.get(int(i), [])))
    t["label"] = t["topic_id"].map(lambda i: " · ".join(kw.get(int(i), [])[:3]))
    return t[["topic_id", "label", "keywords", "t0_us", "n_posts_total"]]
