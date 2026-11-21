# Résultats (synthétique (aucune conclusion scientifique))

| modèle | backend | pr_auc | pr_auc_lo | pr_auc_hi | roc_auc | brier | f1 | precision_at_k | alert_lead_median_min | n_pos_test |
|---|---|---|---|---|---|---|---|---|---|---|
| B0 prévalence | prior | 0.106 | 0.073 | 0.142 | 0.500 | 0.095 | 0.192 | 0.033 | 22.500 | 32 |
| B1 règle de vélocité | logit(log n_posts) | 0.408 | 0.251 | 0.567 | 0.804 | 0.172 | 0.318 | 0.300 | -7.500 | 32 |
| B2 logistique temporelle | sklearn-LogisticRegression | 0.469 | 0.317 | 0.660 | 0.821 | 0.131 | 0.256 | 0.567 | 7.500 | 32 |
| M1 toutes variables | sklearn-HistGradientBoosting (repli : xgboost absent) | 0.614 | 0.461 | 0.783 | 0.883 | 0.068 | 0.526 | 0.567 | 17.500 | 32 |
| M2 toutes variables | sklearn-HistGradientBoosting v2 (repli : lightgbm absent) | 0.677 | 0.521 | 0.836 | 0.913 | 0.062 | 0.620 | 0.667 | 17.500 | 32 |
| M1 sans graphe | sklearn-HistGradientBoosting (repli : xgboost absent) | 0.529 | 0.375 | 0.696 | 0.858 | 0.079 | 0.475 | 0.533 | 10.000 | 32 |
| M1 sans sémantique | sklearn-HistGradientBoosting (repli : xgboost absent) | 0.647 | 0.462 | 0.805 | 0.901 | 0.068 | 0.520 | 0.600 | 12.500 | 32 |
| M1 temporel seul | sklearn-HistGradientBoosting (repli : xgboost absent) | 0.428 | 0.266 | 0.596 | 0.841 | 0.094 | 0.327 | 0.400 | 22.500 | 32 |

Écart PR-AUC M1 - B1 : {'diff': 0.20660435929653886, 'ci95': [0.07768634466108917, 0.37212940668551164]}
