"""Références du CDC § 9.4 : B0 (prévalence), B1 (règle de vélocité), B2 (régression logistique temporelle)."""
from __future__ import annotations

import numpy as np
from sklearn.base import BaseEstimator, ClassifierMixin
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


class PriorClassifier(BaseEstimator, ClassifierMixin):
    """B0 : renvoie toujours la prévalence de l'entraînement (plancher de comparaison)."""

    def fit(self, X, y):
        self.classes_ = np.array([0, 1])
        self.p_ = float(np.mean(y))
        return self

    def predict_proba(self, X):
        return np.column_stack([np.full(len(X), 1 - self.p_), np.full(len(X), self.p_)])


class VelocityRule(BaseEstimator, ClassifierMixin):
    """B1 : score = nombre de posts dans la fenêtre (règle de seuil sur la taille observée, H1).

    Le classement est celui de la règle brute ; une calibration logistique à une variable
    (Platt) ne sert qu'à produire des probabilités pour le Brier et le seuil de décision.
    """

    def __init__(self, column: str = "f_t_n_posts"):
        self.column = column

    def fit(self, X, y):
        self.classes_ = np.array([0, 1])
        self.lr_ = LogisticRegression(class_weight="balanced").fit(self._z(X), y)
        return self

    def _z(self, X):
        return np.log1p(np.asarray(X[self.column], dtype=float)).reshape(-1, 1)

    def predict_proba(self, X):
        return self.lr_.predict_proba(self._z(X))


def make_b2(seed: int = 0):
    """B2 : régression logistique pondérée sur les variables temporelles (imputation médiane + standardisation)."""
    return make_pipeline(SimpleImputer(strategy="median"), StandardScaler(),
                         LogisticRegression(class_weight="balanced", max_iter=2000, random_state=seed))
