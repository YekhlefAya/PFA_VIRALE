"""Générateur de données synthétiques au schéma de la couche brute Bluesky.

Sert uniquement à tester la chaîne de bout en bout quand data/ n'est pas disponible. Aucune
conclusion scientifique ne doit être tirée des scores obtenus sur ces données : le lien entre
variables et viralité y est écrit à la main (variable latente z par sujet), il n'est pas observé.

Mécanisme : chaque sujet a une taille finale S = médiane * exp(sigma * z). Les dates des posts
suivent une loi gamma (pic à tp), donc la part vue dans les 30 premières minutes varie : la
vélocité seule est un prédicteur bruité. z influence aussi, modérément, la diversité des auteurs,
le nombre d'abonnés des premiers posteurs, le nombre de communautés touchées, le lexique
émotionnel et l'engagement (likes / reposts).
"""
from __future__ import annotations

import numpy as np
import pandas as pd

from .io import AUTHOR_COLS, EVENT_COLS

US_H = 3_600_000_000
T_START_US = 1_794_875_580_000_000  # 2026-11-17 00:33 UTC, début de la collecte réelle
FILLER = ["the", "and", "est", "pour", "avec", "this", "that", "des", "les", "une", "was", "just", "dans", "very"]
EMO = ["incroyable", "scandale", "wow", "omg", "terrible", "choc", "amazing", "horrible"]
URG = ["urgent", "breaking", "alerte", "flash"]


def _sigmoid(x):
    return 1.0 / (1.0 + np.exp(-x))


def _hex_ids(rng, n):
    return [f"{x:016x}" for x in rng.integers(0, 2**62, size=n)]


def _words(rng, n):
    cons, vow = list("bcdfgklmnprstvz"), list("aeiou")
    seen, out = set(), []
    while len(out) < n:
        w = "".join(rng.choice(cons) + rng.choice(vow) for _ in range(int(rng.integers(2, 4)))) + str(rng.choice(cons))
        if w not in seen:
            seen.add(w)
            out.append(w)
    return out


def generate(n_topics: int = 800, days: int = 14, median_size: float = 45.0, sigma: float = 0.9,
             noise_frac: float = 0.15, n_authors: int = 6000, n_comm: int = 20, seed: int = 0):
    """Renvoie (events, authors, truth). `truth` : post_id -> topic_true (-1 = bruit), pour contrôle."""
    rng = np.random.default_rng(seed)
    data_end = T_START_US + days * 24 * US_H

    # auteurs : abonnés log-normaux calés sur le rapport J2 (médiane ~137, P90 ~2450)
    a_hash = np.array(_hex_ids(rng, n_authors))
    followers = np.exp(rng.normal(4.92, 2.25, n_authors)).astype(int)
    comm = rng.integers(0, n_comm, n_authors)
    by_comm = [np.where(comm == c)[0] for c in range(n_comm)]
    big = np.where(followers > 3000)[0]

    vocab = _words(rng, n_topics * 8 + 2000)
    noise_vocab = vocab[n_topics * 8:]
    rows, truth = [], []

    for t in range(n_topics):
        z = rng.normal()
        S = max(12, int(rng.poisson(median_size * np.exp(sigma * z))))
        tp = rng.uniform(10, 90) * 60e6                         # pic d'activité (µs)
        t0 = T_START_US + int(rng.uniform(0, days * 24 - 7) * US_H)
        times = np.sort(t0 + rng.gamma(2.0, tp, S))
        times[0] = t0
        times = times[times < t0 + 7 * US_H]
        S = len(times)
        kws = vocab[t * 8:(t + 1) * 8]

        div = 0.30 + 0.65 * _sigmoid(1.5 * z)
        pool_n = max(2, int(S * div))
        k_comm = 1 + int(round(5 * _sigmoid(1.5 * z)))
        comms = rng.choice(n_comm, size=min(k_comm, n_comm), replace=False)
        cand = np.concatenate([by_comm[c] for c in comms])
        pool = rng.choice(cand, size=min(pool_n, len(cand)), replace=len(cand) < pool_n)
        p_big = 0.5 * _sigmoid(z - 0.5)
        auth_idx = rng.choice(pool, size=S)
        first = rng.random(S) < p_big * (np.arange(S) < 8)       # les premiers posteurs sont plus influents
        if len(big):
            auth_idx[first] = rng.choice(big, size=int(first.sum()))

        p_emo, p_urg, p_excl = 0.04 + 0.22 * _sigmoid(1.5 * z), 0.02 + 0.1 * _sigmoid(1.5 * z), 0.1 + 0.3 * _sigmoid(1.5 * z)
        like_rate = 0.3 + 2.0 * _sigmoid(1.2 * z)
        for j in range(S):
            words = list(rng.choice(kws, size=int(rng.integers(5, 8)), replace=False)) + \
                list(rng.choice(FILLER, size=int(rng.integers(2, 4))))
            if rng.random() < p_emo:
                words.append(str(rng.choice(EMO)))
            if rng.random() < p_urg:
                words.append(str(rng.choice(URG)))
            rng.shuffle(words)
            txt = " ".join(words) + ("!" if rng.random() < p_excl else "") + ("?" if rng.random() < 0.08 else "")
            link = rng.random() < 0.15
            if link:
                txt += " https://exemple.com/" + str(rng.integers(1, 99999))
            pid = f"{int(rng.integers(0, 2**62)):016x}"
            rows.append((int(times[j]), "post", a_hash[auth_idx[j]], pid, txt, str(rng.choice(["fr", "en"])),
                         bool(rng.random() < 0.15), link))
            truth.append((pid, t))
            for kind, rate in (("like", like_rate), ("repost", like_rate * 0.18)):
                for _ in range(rng.poisson(rate)):
                    te = int(times[j] + rng.exponential(25 * 60e6))
                    if te < data_end:
                        who = a_hash[rng.choice(cand)]
                        rows.append((te, kind, who, pid, None, None, None, None))

    n_noise = int(noise_frac * len(truth))
    for _ in range(n_noise):
        words = list(rng.choice(noise_vocab, size=int(rng.integers(4, 8)), replace=False)) + \
            list(rng.choice(FILLER, size=2))
        pid = f"{int(rng.integers(0, 2**62)):016x}"
        rows.append((int(rng.uniform(T_START_US, data_end)), "post", a_hash[rng.integers(0, n_authors)], pid,
                     " ".join(words), "fr", False, False))
        truth.append((pid, -1))

    events = pd.DataFrame(rows, columns=EVENT_COLS).sort_values("time_us", ignore_index=True)
    authors = pd.DataFrame({"author_hash": a_hash, "followers": followers,
                            "follows": rng.integers(10, 2000, n_authors), "posts": rng.integers(1, 5000, n_authors),
                            "fetched_us": T_START_US})
    return events, authors[AUTHOR_COLS], pd.DataFrame(truth, columns=["post_id", "topic_true"])
