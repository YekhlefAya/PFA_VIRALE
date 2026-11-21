"""M1 (XGBoost) et M2 (LightGBM), avec repli scikit-learn si le paquet n'est pas installé.

Le nom du backend réellement utilisé est renvoyé et inscrit dans les résultats : un score obtenu
avec le repli ne doit pas être présenté comme un score XGBoost / LightGBM.
"""
from __future__ import annotations

from sklearn.ensemble import HistGradientBoostingClassifier


def make_m1(seed: int = 0, scale_pos_weight: float = 1.0):
    try:
        from xgboost import XGBClassifier

        return XGBClassifier(n_estimators=300, max_depth=4, learning_rate=0.05, subsample=0.8,
                             colsample_bytree=0.8, scale_pos_weight=scale_pos_weight, eval_metric="aucpr",
                             random_state=seed, n_jobs=2), "xgboost"
    except ImportError:
        model = HistGradientBoostingClassifier(max_depth=4, learning_rate=0.05, max_iter=300, min_samples_leaf=5,
                                               l2_regularization=1.0, class_weight="balanced", random_state=seed)
        return model, "sklearn-HistGradientBoosting (repli : xgboost absent)"


def make_m2(seed: int = 0, scale_pos_weight: float = 1.0):
    try:
        from lightgbm import LGBMClassifier

        return LGBMClassifier(n_estimators=300, num_leaves=15, learning_rate=0.05, subsample=0.8, subsample_freq=1,
                              colsample_bytree=0.8, scale_pos_weight=scale_pos_weight, random_state=seed,
                              n_jobs=2, verbose=-1), "lightgbm"
    except ImportError:
        model = HistGradientBoostingClassifier(max_leaf_nodes=15, learning_rate=0.08, max_iter=200,
                                               min_samples_leaf=5, class_weight="balanced", random_state=seed + 1)
        return model, "sklearn-HistGradientBoosting v2 (repli : lightgbm absent)"
