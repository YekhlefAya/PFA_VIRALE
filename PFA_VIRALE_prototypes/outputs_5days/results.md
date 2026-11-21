# Résultats (data)

| modèle | backend | pr_auc | pr_auc_lo | pr_auc_hi | roc_auc | brier | f1 | precision_at_k | alert_lead_median_min | n_pos_test |
|---|---|---|---|---|---|---|---|---|---|---|
| B0 prévalence | prior | 0.207 | 0.103 | 0.310 | 0.500 | 0.205 | 0.343 | 0.167 | -27.500 | 12 |
| B1 règle de vélocité | logit(log n_posts) | 0.364 | 0.137 | 0.596 | 0.637 | 0.226 | 0.421 | 0.667 | -27.500 | 12 |
| B2 logistique temporelle | sklearn-LogisticRegression | 0.259 | 0.124 | 0.492 | 0.551 | 0.228 | 0.343 | 0.333 | -27.500 | 12 |
| M1 toutes variables | xgboost | 0.244 | 0.115 | 0.485 | 0.540 | 0.290 | 0.000 | 0.333 | nan | 12 |
| M2 toutes variables | lightgbm | 0.207 | 0.103 | 0.310 | 0.500 | 0.205 | 0.343 | 0.167 | -27.500 | 12 |
| M1 sans graphe | xgboost | 0.184 | 0.096 | 0.328 | 0.431 | 0.303 | 0.321 | 0.000 | -27.500 | 12 |
| M1 sans sémantique | xgboost | 0.318 | 0.159 | 0.569 | 0.648 | 0.246 | 0.000 | 0.333 | nan | 12 |
| M1 temporel seul | xgboost | 0.389 | 0.176 | 0.654 | 0.678 | 0.203 | 0.414 | 0.500 | -27.500 | 12 |

Écart PR-AUC M1 - B1 : {'diff': -0.12001341607233668, 'ci95': [-0.36820592258682144, 0.16977749878487103]}
