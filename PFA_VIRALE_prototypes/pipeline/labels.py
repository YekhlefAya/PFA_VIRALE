"""Cible de viralité et découpages temporels (prototype de labels.py, EF-09 ; protocole CDC § 9.3).

Y = 1 si N(T0 + 6 h) >= q0,95 ; le quantile est estimé sur l'ensemble d'ENTRAÎNEMENT seul (P3).
Embargo (P4) : un sujet dont l'étiquette court jusqu'à T0 + 6 h ne peut pas être d'entraînement
si cet horizon dépasse le début du bloc suivant. Conséquence : t0_train <= début_bloc - embargo.
"""
from __future__ import annotations

import numpy as np
import pandas as pd

HOUR_US = 3_600_000_000


def fit_viral_threshold(n_posts_6h, q: float = 0.95) -> float:
    return float(np.quantile(np.asarray(n_posts_6h, dtype=float), q))


def apply_labels(df: pd.DataFrame, threshold: float) -> pd.DataFrame:
    out = df.copy()
    out["is_viral"] = (out["n_posts_6h"] >= threshold).astype(int)
    return out


def temporal_split(df: pd.DataFrame, test_start_us: int, embargo_h: float = 6.0):
    """(train, test) : le train s'arrête embargo_h avant le test ; les sujets entre les deux sont écartés."""
    gap = int(embargo_h * HOUR_US)
    if len(df) and (test_start_us - df["t0_us"].min()) <= gap:
        gap = int((test_start_us - df["t0_us"].min()) * 0.5)
    return df[df["t0_us"] <= test_start_us - gap].copy(), df[df["t0_us"] >= test_start_us].copy()


def train_val_split(train: pd.DataFrame, val_frac: float = 0.25, embargo_h: float = 6.0):
    """(fit, val) : les derniers `val_frac` du temps servent de validation, avec embargo."""
    if len(train) == 0:
        return train.copy(), train.copy()
    cut = float(np.quantile(train["t0_us"].to_numpy(), 1.0 - val_frac))
    gap = int(embargo_h * HOUR_US)
    if (cut - train["t0_us"].min()) <= gap:
        gap = int((cut - train["t0_us"].min()) * 0.5)
    return train[train["t0_us"] <= cut - gap].copy(), train[train["t0_us"] >= cut].copy()
