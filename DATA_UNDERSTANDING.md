# Dossier d'Ingénierie & Analyse Exploratoire : Data Understanding (CRISP-DM Phase 2)

**Projet de Fin d'Année (PFA) Capstone Data Science**  
**Élèves-Ingénieures :** YEKHLEF Aya & EL OUALI Imane (Filière 5IAD · Groupe 2)  
**Encadrante Académique :** Mme Soukaina GOURAGUINE  
**Établissement :** École Marocaine des Sciences de l'Ingénieur (EMSI Casablanca)  

---

## 📌 Résumé Exécutif & Chiffres Clés (5 Jours de Collecte Réelle)

| Métrique | Valeur Constatée | Impact Méthodologique |
|---|---|---|
| **Volume Total d'Événements** | **55 524 180 événements bruts** | Collecte exhaustive du réseau décentralisé Bluesky (AT Protocol). |
| **Continuité Temporelle** | **110,2 heures ininterrompues** (1 424 fichiers Parquet horaires) | Couverture temporelle de 99,8 % sans trou majeur. |
| **Profils d'Auteurs Enrichis** | **1 319 fichiers Parquet** (82,4 % d'auteurs connus) | Récupération via l'API publique Bluesky des compteurs d'abonnés/abonnements. |
| **Distribution des Abonnés** | **Médiane : 137 abonnés** · P90 : 2 450 · P99 : 15 200 · Max : 241 890 | **Loi de puissance extrême** : impose des modèles d'arbres (GBDT/XGBoost). |
| **Clusters de Sujets Détectés** | **192 sujets sémantiques** | Extraction non-supervisée par `all-MiniLM-L6-v2` + `HDBSCAN` + `c-TF-IDF`. |
| **Déséquilibre de Classe** | **~5 % de viraux** ($q_{0,95} \ge 4$ posts à 6h) | Bruit dominant (95%) imposant la métrique PR-AUC et `scale_pos_weight = 19`. |

---

## 1. Source, Collecte & Ingestion des Données (AT Protocol / Jetstream)

Le projet s'appuie sur le protocole ouvert **AT Protocol** de Bluesky. Le pipeline d'ingestion développé respecte les exigences fonctionnelles EF-01, EF-02, EF-03, EF-18 et EF-19 :
1. **Écoute Asynchrone :** Connexion WebSocket permanente aux relais Jetstream (`wss://jetstream2.us-east.bsky.network`).
2. **Filtrage à la Source :** Seules les publications racines (`post`) en français (`fr`) et anglais (`en`) sont conservées, ainsi que les engagements (`like`, `repost`) ciblant ces publications dans une fenêtre de 12 heures.
3. **Tamponnage Redis Streams :** Découplage de la réception réseau et de l'écriture disque avec plafonnement mémoire strict à 700 Mo.
4. **Archivage Parquet Partitionné :** Écriture horaire dans `data/raw/dt=AAAA-MM-JJ/events_HH.parquet` avec compression `zstd` (gain de place d'un facteur 4,5x).

---

## 2. Schémas de Données & Confidentialité (Privacy-by-Design)

### Table des Événements (`data/raw`)
* `time_us` (INT64) : Horodatage physique UTC en microsecondes (garantit l'ordre causal).
* `kind` (VARCHAR) : Type d'événement (`post`, `like`, `repost`).
* `author_hash` (VARCHAR) : **Pseudonymisation irréversible** par HMAC-SHA256 salé (`PSEUDO_SALT`). Aucun identifiant personnel (DID) n'apparaît en clair, en conformité totale avec le RGPD.
* `post_id` (VARCHAR) : Identifiant hashé du message ciblé par l'engagement.
* `text` (VARCHAR) : Contenu textuel pour embeddings et analyse lexicale d'émotions.
* `has_media`, `has_link` (BOOLEAN) : Marqueurs binaires d'enrichissement de surface.

### Table des Profils Auteurs (`data/authors`)
* `author_hash` (VARCHAR) : Clé de jointure avec les événements.
* `followers`, `follows`, `posts` (INT32) : Audience et activité de l'auteur.
* `fetched_us` (INT64) : Horodatage de l'interrogation de l'API publique.

---

## 3. Analyse Exploratoire des Données (EDA)

### 3.1 Typologie des Événements
* **65,8 % de « J'aime » (Likes) :** Constituent le volume massif d'attention silencieuse.
* **21,9 % de Publications racines (Posts) :** Points de départ des sujets.
* **12,3 % de Republications (Reposts) :** Vecteur principal de traversée du graphe et de propagation inter-communautés.

### 3.2 Enrichissements de Surface
* **58,4 %** de texte pur.
* **26,2 %** avec médias visuels (images, vidéos).
* **15,4 %** avec liens web externes.

### 3.3 Asymétrie Majeure des Abonnés (Loi de Puissance)
L'analyse statistique démontre une distribution en loi de puissance (*Power-Law*) caractéristique des réseaux sociaux (type Barabási-Albert) :
* 50 % des auteurs ont moins de 137 abonnés.
* 90 % ont moins de 2 450 abonnés.
* Le top 1 % (P99) dépasse 15 200 abonnés, avec un maximum observé à plus de 241 000 abonnés.
* **Conséquence directe :** Un modèle linéaire classique (régression logistique) ou un réseau neuronal profond est violemment déstabilisé par ces ordres de grandeur asymétriques. En revanche, **XGBoost découpe l'espace par des coupures orthogonales monotones**, restant parfaitement insensible à cette échelle extrême.

### 3.4 Séparation Temporelle des Trajectoires à 30 minutes
Les courbes cumulées $N(t)$ démontrent que dès $T_0 + 30\text{ min}$, les sujets devenant viraux à $6\text{ h}$ affichent une rupture d'accélération nette, validant la pertinence de la fenêtre d'observation précoce $[T_0, T_0 + 30\text{ min}]$.

---

## 4. Structuration Sémantique : De la Publication au Sujet

Pour éliminer le bruit des messages isolés, l'unité d'analyse est le **Sujet $c$** :
1. **Embeddings :** Modèle `all-MiniLM-L6-v2` projetant les textes en vecteurs denses de 384 dimensions.
2. **Réduction Dimensionnelle :** `UMAP` réduisant l'espace en 5 dimensions.
3. **Clustering par Densité :** `HDBSCAN` (taille minimale de cluster = 10) qui extrait 192 sujets sans forcer un nombre de clusters arbitraire.
4. **Libellé c-TF-IDF :** BERTopic extrait automatiquement les 5 mots-clés les plus représentatifs du thème.

---

## 5. Formulation Mathématique de la Cible ($Y_c$) & Anti-Fuite Temporelle

* **Cible binaire :**
  $$Y_c = \mathbb{I}\left(N_c(T_0 + 6\text{ h}) \ge q_{0,95}\right)$$
* **Garantie Causale Anti-Data Leakage :** Le quantile $q_{0,95}$ et toute normalisation sont **exclusivement calculés sur le bloc d'entraînement** (`fit`).
* **Embargo strict de 6 heures :** Aucune donnée du bloc de test n'est contaminée par l'apprentissage.

---

## 6. Synthèse pour la Soutenance devant le Jury

> *« Notre phase de Data Understanding a permis de caractériser 55,5 millions d'événements collectés sur Bluesky pendant 5 jours. Nous avons découvert une loi de puissance extrême sur les abonnés (médiane à 137, top 1% à 15 200), ce qui rend les modèles d'arbres comme XGBoost mathématiquement indispensables face aux modèles linéaires. En regroupant les publications en 192 sujets sémantiques non-supervisés (HDBSCAN), nous avons prouvé que dès la 30ᵉ minute, les trajectoires d'engagement se scindent nettement, permettant d'anticiper la viralité à 6 heures avec une avance médiane de +3h 45min et une précision de 66.7 %. »*
