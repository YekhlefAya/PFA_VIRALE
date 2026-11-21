# Interface Utilisateur — PFA Viralité Bluesky (EF-13 & P17)

**Aya YEKHLEF & Imane EL OUALI** — 5IAD G2 · EMSI Casablanca  
Encadrante : **Mme Soukaina GOURAGUINE**

---

## 🎯 Objectifs Couverts (Cahier des Charges)

* **EF-13 (MUST)** : Afficher, dans une interface interactive, alertes virales précoces, courbes d'engagement temporelles $N(t)$, émotion dominante et graphe de diffusion en réseau.
* **Jalon P17 (Preuve Pratique Jury)** : Rejeu accéléré d'une journée de données non vue avec horloge séquentielle montrant pour chaque sujet l'alerte émise, son avance et ce qui s'est réellement produit à 6h.
* **EF-10 (MUST)** : Tableau comparatif interactif des modèles ($M_1$ XGBoost, $M_2$ LightGBM, $B_1$ Vélocité, $B_2$ Logistique) avec courbes PR-AUC et feature importance.
* **Explicabilité TreeSHAP** : Quantification locale des contributions des 3 familles ($H_1$ Temps, $H_2$ Graphe, $H_3$ Sémantique).

---

## 🚀 Lancement Rapide (1 commande)

Le prototype est conçu pour être lancé **immédiatement sans configuration complexe** :

### Option 1 : Lancement avec le script Python (Recommandé)
À la racine du projet :
```bash
python run_dashboard.py
```
Le navigateur s'ouvre automatiquement sur `http://localhost:3000/index.html`.

### Option 2 : Ouverture Directe Offline
Double-cliquez simplement sur le fichier `frontend/index.html` dans l'explorateur Windows.

### Option 3 : Mode Développement React / Vite
```bash
cd frontend
npm install
npm run dev
```

---

## 🖥️ Les 4 Écrans du Prototype

1. **📡 Flux d'Alertes en Temps Réel** :
   - Cartes dynamiques des sujets émergents extraits par HDBSCAN / BERTopic.
   - Jauge de risque viral $P(Y_c = 1 \mid 30\text{ min})$.
   - Filtres par niveau d'alerte, recherche sémantique et tri (probabilité, volume, audience relais).
2. **🔍 Inspecteur de Sujet & Explicabilité SHAP** :
   - **Courbe d'engagement temporelle** : Tracé sur $[T_0, T_0 + 30\text{ min}]$, point de décision et trajectoire réelle constatée à $6\text{ h}$.
   - **Graphe de diffusion interactif (Vis.js)** : Nœuds dimensionnés par les abonnés des relais, arêtes de republication, communautés Louvain et ponts inter-communautés mis en évidence.
   - **Waterfall TreeSHAP** : Impact quantitatif de chaque descripteur sur l'alerte.
   - **Échantillon de posts** : Affichage des messages réels du cluster.
3. **⏯️ Rejeu Temporel Accéléré (Jalon P17)** :
   - Timeline glissante avec vitesse réglable ($1\times, 10\times, 60\times$).
   - Émission des alertes en direct avec journal chronologique.
   - Démonstration de l'avance prédictive médiane (+3h 45min) avant le pic réel.
4. **📊 Benchmark Modèles ML (EF-10)** :
   - Tableau comparatif complet avec intervalles de confiance Bootstrap à 95%.
   - Courbes Précision-Rappel (PR-AUC) interactives.
   - Top 10 Permutation Feature Importance.
