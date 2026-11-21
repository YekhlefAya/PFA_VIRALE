# Pipeline ML — Prédiction de la viralité et détection de tendances émergentes sur Bluesky (PFA EMSI)

Pipeline modulaire de Machine Learning pour les jalons J3 & J4 (clean → embed → topics → features → models),
conformes au CDC V2 (§ 9) : fenêtre d'observation 30 min, horizon 6 h, cible `N(T0+6h) ≥ seuil`,
découpage temporel avec embargo de 6 h, références B0–B2, modèles natifs M1 (XGBoost) et M2 (LightGBM), ablation, bootstrap.

```
pipeline/   io.py · clean.py · embed.py · topics.py · features.py · labels.py · synthetic.py
modeling/   baselines.py (B0, B1, B2) · models.py (M1 XGBoost, M2 LightGBM) · train.py · evaluate.py
tests/      test_pipeline.py            run_prototype.py (orchestration)
```

## Lancer

```bash
pip install -r requirements-pipeline.txt
python run_prototype.py --data-dir ./data            # vos données rapatriées (data/raw, data/authors)
python run_prototype.py --synthetic --oracle-topics --n-topics 1500 --min-posts 8 --viral-quantile 0.90
python -m pytest tests -q
```
Sorties (`outputs/`) : `results.csv|md` (tableau comparatif + IC 95 %), `pr_curves.png`,
`feature_importance.csv`, `topics.csv`, `run_report.json`.

## Ce que fait chaque étape

| Étape | Fichier | Contenu |
|---|---|---|
| Nettoyage | `clean.py` | dédoublonnage sur (time_us, kind, author_hash, post_id), URL retirées, posts courts et spam d'auteur écartés, likes orphelins ou antérieurs au post écartés |
| Plongements | `embed.py` | MiniLM multilingue si disponible, sinon hachage + projection aléatoire **sans état** |
| Sujets | `topics.py` | HDBSCAN (sans fixer le nombre de sujets), mots-clés c-TF-IDF |
| Variables | `features.py` | temporelles (6 taux de 5 min, accélération, ratio d'engagement), graphe (diversité, entropie, abonnés, communautés Louvain, intermédiarité), sémantiques (cohérence, émotion lexicale, liens, médias, urgence) — **uniquement sur [T0, T0+30 min]** |
| Cible / split | `labels.py` | q0,95 estimé sur l'entraînement seul ; embargo 6 h entre blocs ; sujets dont l'horizon dépasse la fin de collecte écartés (censure) |
| Modèles | `modeling/` | B0 prévalence, B1 vélocité, B2 logistique temporelle, M1, M2, ablations (sans graphe / sans sémantique / temporel seul), bootstrap apparié M1 − B1 |

## Limites à connaître (honnêteté scientifique)

1. **Aucune vraie donnée n'était disponible** (`data/` est ignoré par Git). Les scores obtenus avec `--synthetic`
   valident la *chaîne*, pas la science : le lien variables → viralité y est écrit à la main.
2. **Replis actifs si les paquets manquent** (le backend est écrit dans `results.csv`) : XGBoost → HistGradientBoosting,
   LightGBM → HistGradientBoosting (autres réglages), MiniLM → hachage + projection aléatoire. Les chiffres du
   repli ne sont pas des chiffres XGBoost / LightGBM / MiniLM.
3. **Fuite détectée et corrigée pendant le développement** : un TF-IDF + SVD ajusté sur tout le corpus donnait une
   « cohérence » corrélée à 0,84 avec la taille finale du sujet. Le repli est donc sans état ; le backend `tfidf`
   reste disponible mais est marqué NON causal. Test : `test_embedding_fallback_is_stateless`.
4. **Le clustering est hors ligne** (tout le jeu d'un coup) : ce n'est pas encore le rejeu par micro-lots de 10 min
   exigé par ENF-04. Les variables et la cible, elles, sont causales (test `test_features_ignore_everything_after_observation_window`).
   À l'échelle réelle (1,77 M posts en 46 h), HDBSCAN scikit-learn d'un seul bloc sera trop lent : prévoir des
   tranches temporelles ou une réduction de dimension (UMAP) avant.
5. `f_s_emotion_lex` est un proxy lexical, pas le classifieur d'émotions du CDC.
6. Abonnés : instantané pris à la collecte du profil, pas forcément à T0.
7. Hyperparamètres fixes (pas encore de réglage par validation à origine glissante, P5) ; pas de MLflow ni SHAP.
8. Seuil de décision F1 choisi sur la validation avec le modèle ajusté sur `fit` seulement ; avec peu de positifs
   (cf. point de décision J4 : ≥ 200 positifs) les IC sont très larges.
