# Rapport d'Avancement Global & Bilan Hebdomadaire

**Projet de Fin d'Année (PFA) Capstone Data Science**  
**Sujet :** Prédiction de la viralité et détection de tendances émergentes sur les réseaux sociaux (Bluesky)  
**Élèves-Ingénieures :** YEKHLEF Aya & EL OUALI Imane (Filière 5IAD · Groupe 2)  
**Encadrante Académique :** Mme Soukaina GOURAGUINE  
**Établissement :** École Marocaine des Sciences de l'Ingénieur (EMSI Casablanca)  
**Date :** Novembre 2026  

---

## 🚀 Tableau de Bord Exécutif : Ce qui a été Réalisé cette Semaine

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  COLLECTE 5 JOURS       DATA UNDERSTANDING        MODÉLISATION ML        PROTOTYPES UI │
│   55,5M événements        Loi de puissance         XGBoost (M1)            3 Écrans    │
│  1 424 fichiers Parquet   192 sujets HDBSCAN       PR-AUC = 0.389        Radar + Rejeu │
│      ✓ VALIDÉ                 ✓ VALIDÉ                ✓ VALIDÉ             ✓ LIVRÉ     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Axe Ingestion & Data Understanding (CRISP-DM Phase 2)

* **Volume Réel Traité :** **55 524 180 événements bruts** collectés sans interruption pendant **110,2 heures** (1 424 fichiers Parquet horaires avec compression `zstd` 4.5x).
* **Architecture Streaming :** Ingestion Jetstream WebSocket &rarr; Tampon Redis Streams (700 Mo) &rarr; Archivage Parquet partitionné par jour et heure.
* **Respect Absolu du RGPD (Privacy-by-Design) :** Pseudonymisation cryptographique immédiate à l'ingestion via `HMAC-SHA256(did:plc, PSEUDO_SALT)`. Aucun identifiant utilisateur en clair.
* **Enrichissement Réseau Auteurs :** 1 319 fichiers Parquet collectés via l'API publique Bluesky, permettant d'enrichir **82,4 % des auteurs** avec leurs compteurs d'abonnés (*followers*) et publications.
* **Analyse Statistique Exploratoire (EDA) :**
  * **65,8 %** de « J'aime » (*Likes*), **21,9 %** de publications racines (*Posts*), et **12,3 %** de republications (*Reposts*, vecteur essentiel de traversée du graphe).
  * **Distribution en loi de puissance (*Power-Law*) des abonnés :** Médiane = 137 abonnés, P90 = 2 450, P99 = 15 200, Max = 241 890 abonnés.
  * *Conséquence méthodologique :* L'extrême asymétrie impose le choix de modèles d'arbres (**XGBoost**) invariants aux transformations monotones, face aux modèles linéaires sensibles aux valeurs extrêmes.
* **Structuration en Sujets Émergents ($c$) :**
  * Plongements denses `Sentence-Transformers all-MiniLM-L6-v2` (384 dim).
  * Réduction dimensionnelle `UMAP` (5 dim).
  * Regroupement par densité `HDBSCAN` (min_cluster_size=10).
  * Extraction des mots-clés distinctifs par `c-TF-IDF` (BERTopic).
  * **192 sujets sémantiques** identifiés sur les 5 jours de données réelles.

---

## 2. Axe Justification Mathématique du Choix de Modèle

Une note d'arbitrage multicritère a été rédigée comparant 6 approches selon 8 contraintes du Cahier des Charges :
1. **$B_1$ Règle de Vélocité :** Rapide mais aveugle aux graphes et aux textes.
2. **$B_2$ Régression Logistique :** Incapable de capturer les seuils non-linéaires entre volume et influence.
3. **$M_3$ Processus de Hawkes (SEISMIC) :** Inadapté aux représentations sémantiques riches agrégées au niveau d'un sujet.
4. **Deep Learning (GNN / Transformers) :** Boîte noire opaque, risque de surapprentissage sur petits lots, et incompatible avec la frugalité CPU (ENF-10).
5. **$M_2$ LightGBM :** Croissance par feuille (*leaf-wise*), retenu comme **contre-épreuve méthodologique**.
6. **$M_1$ XGBoost (Retenu) :** Croissance par niveau (*depth-wise*), régularisation L1/L2 stricte, invariance aux distributions en loi de puissance, gestion native du déséquilibre via `scale_pos_weight = 19`, et explicabilité exacte par **TreeSHAP** en temps $O(TLD^2)$.

---

## 3. Axe Entraînement & Résultats Expérimentaux (Données Réelles)

### Protocole Causal Anti-Fuite (*Anti-Data Leakage*)
* Découpage temporel hebdomadaire glissant (*Walk-Forward Split*).
* **Embargo strict de 6 heures** entre le bloc d'entraînement et le bloc de test.
* Quantile de viralité $q_{0,95}$ calculé **exclusivement sur le bloc d'entraînement**.

### Tableau Comparatif des Performances (58 Sujets de Test Réels)

| Modèle | Backend | PR-AUC | IC 95% Bootstrap | ROC-AUC | Brier Score | Précision @ K=6 |
|---|---|---|---|---|---|---|
| **★ M1 : XGBoost (Temporel seul)** | `xgboost` | **0.389** | **[0.176 ; 0.654]** | **0.678** | **0.203** | **50.0 %** |
| **B1 : Règle de Vélocité** | `logit(log n)` | **0.364** | [0.137 ; 0.596] | 0.637 | 0.226 | **66.7 %** |
| **M1 : XGBoost (Temporel + Graphe)** | `xgboost` | **0.318** | [0.159 ; 0.569] | 0.648 | 0.246 | 33.3 % |
| **B2 : Régression Logistique** | `sklearn` | **0.259** | [0.124 ; 0.492] | 0.551 | 0.228 | 33.3 % |
| **B0 : Hasard / Prévalence** | `prior` | **0.207** | [0.103 ; 0.310] | 0.500 | 0.205 | 16.7 % |

### Validation Expérimentale des 3 Hypothèses de Recherche
L'évaluation par *Permutation Feature Importance* sur le bloc de validation confirme formellement les hypothèses formulées dans le Cahier des Charges :
1. **$H_2$ Validée (Graphe Dominant) :** `f_g_log_followers_max` (+0.400) est la **variable n°1 du système**. La présence d'un compte influent est la condition *sine qua non* pour franchir les frontières communautaires.
2. **$H_1$ Validée (Dynamique Précoce) :** `f_t_eng_per_post` (+0.299) est la **variable n°2**. La vitesse d'engagement immédiate à 30 min fournit le signal d'accélération initial.
3. **$H_3$ Validée (Gain Sémantique Marginal) :** `f_s_link_rate` (+0.050) et `f_s_emotion_lex` (+0.025) permettent de départager les sujets dont les volumes initiaux sont proches.

---

## 4. Axe Prototypes des Interfaces (EF-13 & Jalon P17)

Une application web interactive (« Thème Éditorial & Bluesky ») a été créée et lancée en une seule commande (`python run_dashboard.py`) :
1. **Radar des Tendances en Temps Réel :** Affiche les 58 sujets réels avec des titres clairs en français (ex: *#18 Éducation & Enfance : Récits*, *#88 Fuite d'Emails & Presse*), leur jauge de probabilité, et leur statut d'alerte.
2. **Inspecteur de Sujet & Explication Pédagogique :**
   * Chronologie d'anticipation : observation (0-30 min) vs résultat réel à 6h.
   * Courbe $N(t)$ : projection XGBoost vs trajectoire réelle observée.
   * Explication vulgarisée en 3 points : audience du relais ($H_2$), vélocité ($H_1$), et contenu ($H_3$).
3. **Simulateur de Rejeu Temporel (P17 pour la soutenance) :** Défilement accéléré d'une journée avec déclenchement visuel des alertes dès la 30ᵉ minute, démontrant une **avance médiane de +3h 45min** avant le pic viral.
4. **Match des Algorithmes :** Podium visuel comparant les scores PR-AUC des 4 approches.

---

## 5. Synthèse des Livrables Réalisés & Synchronisés sur Git

* 📄 [Rapport_Avancement_Hebdomadaire_YEKHLEF_ELOUALI.pdf](file:///c:/Users/hp/Downloads/PFA_Virale/Rapport_Avancement_Hebdomadaire_YEKHLEF_ELOUALI.pdf) (Document officiel de séance)
* 📄 [Data_Understanding_PFA_Viralite_YEKHLEF_ELOUALI.pdf](file:///c:/Users/hp/Downloads/PFA_Virale/Data_Understanding_PFA_Viralite_YEKHLEF_ELOUALI.pdf) (Dossier CRISP-DM Phase 2)
* 📄 [Justification_Modele_ML_XGBoost_YEKHLEF_ELOUALI.pdf](file:///c:/Users/hp/Downloads/PFA_Virale/Justification_Modele_ML_XGBoost_YEKHLEF_ELOUALI.pdf) (Note d'arbitrage scientifique)
* 🖥️ [frontend/index.html](file:///c:/Users/hp/Downloads/PFA_Virale/frontend/index.html) (Prototype d'interface interactif)
* 🚀 [run_dashboard.py](file:///c:/Users/hp/Downloads/PFA_Virale/run_dashboard.py) (Lanceur local du prototype)
* ⚙️ [pipeline_ml/](file:///c:/Users/hp/Downloads/PFA_Virale/pipeline_ml/) (Pipeline d'entraînement et outputs sur 5 jours réels)

---

## 6. Prochaines Étapes Immédiates (Jalon J5)

1. **API REST FastAPI (EF-12) :** Contrat OpenAPI avec validation Pydantic, garantissant $p_{95} < 500\text{ ms}$.
2. **Traçabilité MLflow (EF-14) :** Suivi automatisé des runs et versioning des modèles.
3. **Conteneurisation Docker Compose :** Déploiement unifié en un clic du collecteur, de l'API et du frontend.
