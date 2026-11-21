# Résultats (data)

| modèle | backend | pr_auc | pr_auc_lo | pr_auc_hi | roc_auc | brier | f1 | precision_at_k | alert_lead_median_min | n_pos_test |
|---|---|---|---|---|---|---|---|---|---|---|
| B0 prévalence | prior | 0.020 | 0.020 | 0.080 | 0.500 | 0.109 | 0.039 | 0.000 | -27.500 | 1 |
| B1 règle de vélocité | logit(log n_posts) | 0.020 | 0.020 | 0.080 | 0.429 | 0.134 | 0.000 | 0.000 | nan | 1 |
| B2 logistique temporelle | sklearn-LogisticRegression | 0.031 | 0.026 | 0.118 | 0.602 | 0.109 | 0.000 | 0.000 | nan | 1 |
| M1 toutes variables | xgboost | 0.021 | 0.020 | 0.082 | 0.061 | 0.098 | 0.000 | 0.000 | nan | 1 |
| M2 toutes variables | lightgbm | 0.028 | 0.024 | 0.100 | 0.449 | 0.115 | 0.000 | 0.000 | nan | 1 |
| M1 sans graphe | xgboost | 0.024 | 0.022 | 0.087 | 0.265 | 0.136 | 0.000 | 0.000 | nan | 1 |
| M1 sans sémantique | xgboost | 0.020 | 0.020 | 0.080 | 0.020 | 0.087 | 0.000 | 0.000 | nan | 1 |
| M1 temporel seul | xgboost | 0.020 | 0.020 | 0.080 | 0.235 | 0.146 | 0.000 | 0.000 | nan | 1 |

Écart PR-AUC M1 - B1 : {'diff': 0.0012765957446808501, 'ci95': [0.0, 0.005454545454545455]}
