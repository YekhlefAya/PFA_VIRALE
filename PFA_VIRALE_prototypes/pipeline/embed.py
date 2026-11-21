"""Plongements de textes (prototype de embed.py, EF-05).

Backend cible : paraphrase-multilingual-MiniLM-L12-v2 (sentence-transformers), tel que prévu au CDC.
Un modèle pré-entraîné est SANS ÉTAT vis-à-vis du corpus collecté : le plongement d'un post ne dépend
d'aucun autre post, donc aucune information future ne s'y glisse (ENF-04).

Repli automatique si sentence-transformers (ou le modèle) n'est pas disponible : hachage de mots +
projection aléatoire fixe (stateless lui aussi). Il est lexical, pas sémantique : il valide la chaîne,
il ne remplace pas MiniLM pour les résultats finaux.

Backend "tfidf" (TF-IDF + SVD) : conservé pour comparaison UNIQUEMENT. Il est ajusté sur tout le corpus ;
la cohérence d'un sujet calculée avec lui encode alors la taille finale du sujet (fuite temporelle,
mesurée : corrélation de rang 0,84 avec n_posts_6h sur données synthétiques). Ne pas l'utiliser pour
les variables du modèle.
"""
from __future__ import annotations

import numpy as np

SBERT_MODEL = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
TOKEN = r"(?u)\b[^\W\d_]{3,}\b"
STOP_FR = {"les", "des", "une", "est", "pour", "avec", "dans", "pas", "que", "qui", "sur", "par", "mais", "plus",
           "cette", "ces", "aux", "son", "ses", "elle", "nous", "vous", "ils", "elles", "tout", "tous", "comme", "sont"}


def _stateless_hash(texts, dim: int, seed: int) -> np.ndarray:
    """Hachage de mots (sans idf) + projection aléatoire fixe : aucune statistique du corpus n'est apprise."""
    from sklearn.feature_extraction.text import ENGLISH_STOP_WORDS, HashingVectorizer
    from sklearn.preprocessing import Normalizer
    from sklearn.random_projection import SparseRandomProjection

    stop = list(ENGLISH_STOP_WORDS | STOP_FR)
    X = HashingVectorizer(n_features=2**15, token_pattern=TOKEN, strip_accents="unicode", stop_words=stop,
                          alternate_sign=False, norm="l2", binary=True).transform(texts)
    Z = SparseRandomProjection(n_components=dim, dense_output=True, random_state=seed).fit_transform(X)
    return Normalizer(copy=False).fit_transform(Z).astype(np.float32)


def _tfidf_svd(texts, dim: int, seed: int) -> np.ndarray:
    from sklearn.decomposition import TruncatedSVD
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.preprocessing import Normalizer

    X = TfidfVectorizer(sublinear_tf=True, min_df=2, max_df=0.4, strip_accents="unicode",
                        token_pattern=TOKEN, dtype=np.float32).fit_transform(texts)
    k = max(2, min(dim, X.shape[1] - 1))
    Z = TruncatedSVD(n_components=k, n_iter=5, random_state=seed).fit_transform(X)
    return Normalizer(copy=False).fit_transform(Z).astype(np.float32)


def embed_texts(texts, backend: str = "auto", dim: int = 128, seed: int = 0):
    """Renvoie (matrice n × d normalisée, nom du backend réellement utilisé)."""
    texts = list(texts)
    if backend in ("auto", "sbert"):
        try:
            from sentence_transformers import SentenceTransformer

            model = SentenceTransformer(SBERT_MODEL)
            emb = model.encode(texts, batch_size=128, normalize_embeddings=True, show_progress_bar=False)
            return np.asarray(emb, dtype=np.float32), "sentence-transformers/MiniLM-L12"
        except Exception as ex:  # paquet absent, modèle non téléchargeable, etc.
            if backend == "sbert":
                raise
            return _stateless_hash(texts, dim, seed), f"hash+random-projection (repli : sbert indisponible, {type(ex).__name__})"
    if backend == "hash":
        return _stateless_hash(texts, dim, seed), "hash+random-projection"
    if backend == "tfidf":
        return _tfidf_svd(texts, dim, seed), "tfidf-svd (ajusté sur tout le corpus : NON causal)"
    raise ValueError(f"backend inconnu : {backend}")
