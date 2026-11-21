"""Entraînement et comparaison des modèles (CDC EF-10) avec ablation par familles de variables (H2, H3).

Protocole : entraînement sur `fit`, seuil de décision choisi sur `val`, évaluation unique sur `test`.
Aucun réglage n'est fait sur le test. Les hyperparamètres sont fixes dans ce prototype ; le réglage
interne par validation à origine glissante (P5) est une étape suivante.
"""
from __future__ import annotations

import numpy as np
import pandas as pd

from pipeline.features import feature_columns

from .baselines import PriorClassifier, VelocityRule, make_b2
from .evaluate import best_f1_threshold, evaluate, paired_bootstrap_diff
from .models import make_m1, make_m2


def experiment_specs(fit: pd.DataFrame, seed: int):
    """(nom, constructeur(), colonnes). Le constructeur renvoie (modèle, nom de backend)."""
    spw = float((fit["is_viral"] == 0).sum() / max(1, (fit["is_viral"] == 1).sum()))
    all_c, t_c = feature_columns(fit), feature_columns(fit, ("t",))
    no_g, no_s = feature_columns(fit, ("t", "s")), feature_columns(fit, ("t", "g"))
    return [
        ("B0 prévalence", lambda: (PriorClassifier(), "prior"), all_c),
        ("B1 règle de vélocité", lambda: (VelocityRule(), "logit(log n_posts)"), all_c),
        ("B2 logistique temporelle", lambda: (make_b2(seed), "sklearn-LogisticRegression"), t_c),
        ("M1 toutes variables", lambda: make_m1(seed, spw), all_c),
        ("M2 toutes variables", lambda: make_m2(seed, spw), all_c),
        ("M1 sans graphe", lambda: make_m1(seed, spw), no_g),
        ("M1 sans sémantique", lambda: make_m1(seed, spw), no_s),
        ("M1 temporel seul", lambda: make_m1(seed, spw), t_c),
    ]


def run_experiments(fit: pd.DataFrame, val: pd.DataFrame, test: pd.DataFrame, *, seed: int = 0, n_boot: int = 500,
                    obs_min: float = 30):
    """Renvoie (tableau de résultats, dict des probabilités test par modèle, dict des modèles ajustés)."""
    for name, d in (("fit", fit), ("val", val), ("test", test)):
        if d["is_viral"].sum() < 1 or d["is_viral"].nunique() < 2:
            raise ValueError(f"Le bloc '{name}' n'a pas assez de positifs/négatifs ({int(d['is_viral'].sum())} positifs sur {len(d)}) : "
                             "plus de données, ou seuil de viralité à 10 % (point de décision J4).")
    rows, preds, models = [], {}, {}
    for name, build, cols in experiment_specs(fit, seed):
        model, backend = build()
        model.fit(fit[cols], fit["is_viral"])
        p_val = model.predict_proba(val[cols])[:, 1]
        thr = best_f1_threshold(val["is_viral"], p_val)
        p_test = model.predict_proba(test[cols])[:, 1]
        res = evaluate(test["is_viral"], p_test, thr, test["t_peak_min"], obs_min=obs_min, n_boot=n_boot, seed=seed)
        rows.append({"modèle": name, "backend": backend, "n_variables": len(cols), **res})
        preds[name], models[name] = p_test, (model, cols)
    table = pd.DataFrame(rows)

    # critère OS3 : M1 > B1 en PR-AUC, avec IC du bootstrap apparié
    est, (lo, hi) = paired_bootstrap_diff(test["is_viral"], preds["M1 toutes variables"], preds["B1 règle de vélocité"],
                                          n_boot=n_boot, seed=seed)
    table.attrs["M1_vs_B1_pr_auc_diff"] = {"diff": est, "ci95": [lo, hi]}
    return table, preds, models


def permutation_importance_m1(models: dict, val: pd.DataFrame, seed: int = 0, n_repeats: int = 10) -> pd.DataFrame:
    """Importance par permutation (PR-AUC) de M1 sur la VALIDATION (jamais sur le test)."""
    from sklearn.inspection import permutation_importance

    model, cols = models["M1 toutes variables"]
    r = permutation_importance(model, val[cols], val["is_viral"], scoring="average_precision",
                               n_repeats=n_repeats, random_state=seed)
    out = pd.DataFrame({"variable": cols, "importance": r.importances_mean, "std": r.importances_std})
    return out.sort_values("importance", ascending=False, ignore_index=True)
