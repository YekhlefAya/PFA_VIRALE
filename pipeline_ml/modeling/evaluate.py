"""Métriques du CDC § 9.5, avec intervalles de confiance par bootstrap."""
from __future__ import annotations

import numpy as np
from sklearn.metrics import (average_precision_score, brier_score_loss, f1_score, precision_recall_curve,
                             recall_score, roc_auc_score)


def precision_at_k(y, p, k: int) -> float:
    k = max(1, min(k, len(y)))
    return float(np.asarray(y)[np.argsort(-np.asarray(p), kind="stable")[:k]].mean())


def best_f1_threshold(y, p) -> float:
    """Seuil de décision qui maximise F1 (à choisir sur la VALIDATION, jamais sur le test)."""
    prec, rec, thr = precision_recall_curve(y, p)
    f1 = 2 * prec[:-1] * rec[:-1] / np.maximum(prec[:-1] + rec[:-1], 1e-12)
    return float(thr[int(np.argmax(f1))]) if len(thr) else 0.5


def bootstrap_ci(y, p, fn=average_precision_score, n_boot: int = 500, seed: int = 0):
    """IC à 95 % par rééchantillonnage ; les tirages sans positif ou sans négatif sont ignorés."""
    y, p = np.asarray(y), np.asarray(p)
    rng = np.random.default_rng(seed)
    vals = []
    for _ in range(n_boot):
        i = rng.integers(0, len(y), len(y))
        if 0 < y[i].sum() < len(i):
            vals.append(fn(y[i], p[i]))
    return (float(np.percentile(vals, 2.5)), float(np.percentile(vals, 97.5))) if vals else (np.nan, np.nan)


def paired_bootstrap_diff(y, p_a, p_b, fn=average_precision_score, n_boot: int = 500, seed: int = 0):
    """Écart fn(A) - fn(B) avec IC à 95 % (mêmes rééchantillons) : sert au critère OS3 (M1 > B1)."""
    y, p_a, p_b = np.asarray(y), np.asarray(p_a), np.asarray(p_b)
    rng = np.random.default_rng(seed)
    d = []
    for _ in range(n_boot):
        i = rng.integers(0, len(y), len(y))
        if 0 < y[i].sum() < len(i):
            d.append(fn(y[i], p_a[i]) - fn(y[i], p_b[i]))
    est = fn(y, p_a) - fn(y, p_b)
    return float(est), (float(np.percentile(d, 2.5)), float(np.percentile(d, 97.5))) if d else (np.nan, np.nan)


def evaluate(y, p, threshold: float, t_peak_min=None, obs_min: float = 30, n_boot: int = 500, seed: int = 0) -> dict:
    y, p = np.asarray(y).astype(int), np.asarray(p, dtype=float)
    lo, hi = bootstrap_ci(y, p, n_boot=n_boot, seed=seed)
    alert = p >= threshold
    res = {
        "pr_auc": float(average_precision_score(y, p)), "pr_auc_lo": lo, "pr_auc_hi": hi,
        "roc_auc": float(roc_auc_score(y, p)) if 0 < y.sum() < len(y) else np.nan,
        "brier": float(brier_score_loss(y, np.clip(p, 0, 1))),
        "f1": float(f1_score(y, alert, zero_division=0)),
        "recall": float(recall_score(y, alert, zero_division=0)),
        "precision_at_k": precision_at_k(y, p, max(5, int(round(0.1 * len(y))))),
        "threshold": float(threshold), "n_alerts": int(alert.sum()),
        "n_test": int(len(y)), "n_pos_test": int(y.sum()),
    }
    if t_peak_min is not None:                       # avance d'alerte : délai entre l'alerte (T0+obs) et le pic
        tp = np.asarray(t_peak_min, dtype=float)[alert & (y == 1)] - obs_min
        res["alert_lead_median_min"] = float(np.median(tp)) if len(tp) else np.nan
    return res
