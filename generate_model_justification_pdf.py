import base64
import os
import subprocess
import pathlib

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PLOTS_DIR = os.path.join(BASE_DIR, "eda_plots")

def get_b64(filename):
    p = os.path.join(PLOTS_DIR, filename)
    with open(p, 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode()

img1 = get_b64('01_repartition_evenements_formats.png')
img2 = get_b64('02_distribution_influence_auteurs.png')
img3 = get_b64('03_dynamique_engagement_viralite.png')

html_template = """<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Justification du Choix du Modèle de Machine Learning - PFA Viralité</title>
<style>
  @page {
    size: A4;
    margin: 10mm 12mm 12mm 12mm;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #14161A;
    background: #FFFFFF;
    line-height: 1.35;
    font-size: 7.8pt;
    margin: 0;
    padding: 0;
  }
  .page {
    page-break-after: always;
    position: relative;
    box-sizing: border-box;
  }
  .page:last-child {
    page-break-after: avoid;
  }

  /* En-tête courant */
  .running-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid #E2DCD0;
    padding-bottom: 4px;
    margin-bottom: 8px;
    font-size: 6.8pt;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .running-header .left {
    font-weight: 700;
    color: #14161A;
  }
  .running-header .right {
    color: #6C6A64;
    font-weight: 600;
  }

  /* Pied de page */
  .running-footer {
    margin-top: 10px;
    border-top: 1px solid #E2DCD0;
    padding-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.8pt;
    color: #6C6A64;
  }
  .running-footer .bold {
    font-weight: 700;
    color: #E2431B;
  }

  /* Badges & Tags */
  .tag {
    display: inline-block;
    font-size: 6.8pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #E2431B;
    background: #FDF2E9;
    padding: 2px 7px;
    border-radius: 4px;
    margin-bottom: 3px;
  }
  .tag-success {
    color: #237804;
    background: #F6FFED;
    border: 1px solid #B7EB8F;
    padding: 1px 6px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 6.5pt;
  }
  .tag-highlight {
    color: #0958d9;
    background: #e6f4ff;
    border: 1px solid #91caff;
    padding: 1px 6px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 6.5pt;
  }

  h1 {
    font-size: 13.5pt;
    font-weight: 800;
    color: #14161A;
    margin: 0 0 2px 0;
    line-height: 1.2;
    letter-spacing: -0.2px;
  }
  .subtitle {
    font-size: 8pt;
    color: #5C6479;
    margin: 0 0 7px 0;
  }

  /* Fiche Métadonnées */
  .meta-grid {
    display: grid;
    grid-template-columns: 1.2fr 1.3fr 1.1fr 1fr;
    background: #FAF7F0;
    border: 1px solid #CFC8B8;
    border-radius: 5px;
    padding: 5px 8px;
    margin-bottom: 8px;
    font-size: 7.2pt;
    gap: 6px;
  }
  .meta-item .label {
    font-weight: 700;
    color: #14161A;
    text-transform: uppercase;
    font-size: 6.2pt;
    letter-spacing: 0.4px;
    margin-bottom: 1px;
  }
  .meta-item .val {
    color: #2D3748;
  }

  /* KPI Cards */
  .kpi-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-bottom: 8px;
  }
  .kpi-card {
    background: #FAF7F0;
    border: 1px solid #CFC8B8;
    border-radius: 4px;
    padding: 6px 4px;
    text-align: center;
  }
  .kpi-num {
    font-size: 13pt;
    font-weight: 800;
    color: #E2431B;
    line-height: 1.1;
    margin-bottom: 1px;
  }
  .kpi-label {
    font-size: 6.2pt;
    font-weight: 700;
    color: #14161A;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  .kpi-sub {
    font-size: 6pt;
    color: #6C6A64;
  }

  /* Sections */
  .sec-title {
    font-size: 8.8pt;
    font-weight: 800;
    color: #14161A;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin: 7px 0 3px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E2DCD0;
    padding-bottom: 2px;
  }
  .sec-title .num {
    color: #E2431B;
    margin-right: 5px;
    font-size: 9.5pt;
  }
  p {
    margin: 0 0 4px 0;
    font-size: 7.6pt;
    line-height: 1.34;
    color: #2D3748;
    text-align: justify;
  }

  /* Blocs d'appel / Callout */
  .callout {
    background: #FAF7F0;
    border-left: 3px solid #E2431B;
    border-radius: 0 4px 4px 0;
    padding: 5px 8px;
    margin: 4px 0 6px 0;
    font-size: 7.3pt;
    color: #2D3748;
  }
  .callout.blue {
    border-left-color: #1677ff;
    background: #f0f7ff;
  }
  .callout.green {
    border-left-color: #52c41a;
    background: #f6ffed;
  }
  .callout b {
    color: #14161A;
  }

  /* Tableaux */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 4px 0 6px 0;
    font-size: 6.8pt;
  }
  th {
    background: #F0ECE1;
    color: #14161A;
    font-weight: 700;
    text-align: left;
    padding: 3.5px 5px;
    border: 1px solid #CFC8B8;
    font-size: 6.5pt;
    text-transform: uppercase;
    letter-spacing: 0.2px;
  }
  td {
    padding: 3px 5px;
    border: 1px solid #E2DCD0;
    color: #2D3748;
    vertical-align: middle;
  }
  tr:nth-child(even) td {
    background: #FAF7F0;
  }
  .text-center { text-align: center; }
  .font-bold { font-weight: 700; }

  /* Figures */
  .figure-box {
    margin: 4px 0 5px 0;
    text-align: center;
  }
  .figure-box img {
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid #E2DCD0;
  }
  .caption {
    font-size: 6.5pt;
    color: #6C6A64;
    text-align: justify;
    margin-top: 2px;
    line-height: 1.28;
    padding: 0 3px;
  }
  .caption b {
    color: #14161A;
  }

  /* Grille 2 colonnes */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 3px 0 5px 0;
  }
  .grid-2 .figure-box {
    margin: 0;
  }
  .grid-2 img {
    height: 125px;
    width: 100%;
    object-fit: contain;
  }

  .arg-card {
    background: #FFFFFF;
    border: 1px solid #E2DCD0;
    border-radius: 4px;
    padding: 5px 7px;
    margin-bottom: 4px;
  }
  .arg-card .title {
    font-size: 7.4pt;
    font-weight: 700;
    color: #14161A;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
  }
  .arg-card .badge-num {
    background: #E2431B;
    color: white;
    font-size: 5.8pt;
    padding: 1px 4px;
    border-radius: 2px;
    margin-right: 5px;
    font-weight: 800;
  }
</style>
</head>
<body>

<!-- ==================== PAGE 1 : CADRAGE & FORMULATION ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI Casablanca · Campus Moulay Youssef · Filière 5IAD G2</div>
    <div class="right">PFA Capstone Data Science · 2026-2027</div>
  </div>

  <div class="tag">Note d'Arbitrage Scientifique & Technique · Choix du Modèle ML</div>
  <h1>Justification du Choix du Modèle Machine Learning & Étude Comparative</h1>
  <div class="subtitle">Prédiction de la viralité et détection de tendances émergentes sur Bluesky (Trend Forecasting)<br>
  <b>Analyse multicritère, validation mathématique et benchmarking pour soutenance de PFA</b></div>

  <div class="meta-grid">
    <div class="meta-item">
      <div class="label">Projet & Cadre</div>
      <div class="val"><b>PFA Capstone Data Science</b></div>
    </div>
    <div class="meta-item">
      <div class="label">Élèves-Ingénieures</div>
      <div class="val"><b>YEKHLEF Aya & EL OUALI Imane</b></div>
    </div>
    <div class="meta-item">
      <div class="label">Encadrante Académique</div>
      <div class="val">Mme Soukaina GOURAGUINE</div>
    </div>
    <div class="meta-item">
      <div class="label">Modèle Retenu</div>
      <div class="val"><span class="tag-success">✓ XGBoost (M1)</span> <span class="tag-highlight">M2: LightGBM</span></div>
    </div>
  </div>

  <div class="kpi-container">
    <div class="kpi-card">
      <div class="kpi-num">30 min &rarr; 6 h</div>
      <div class="kpi-label">Horizon Prédictif</div>
      <div class="kpi-sub">Observation courte, avance utile</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">q<sub>0,95</sub> (5 %)</div>
      <div class="kpi-label">Seuil de Viralité</div>
      <div class="kpi-sub">Déséquilibre sévère de classe</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">3 Familles</div>
      <div class="kpi-label">Features Fusionnées</div>
      <div class="kpi-sub">Temps · Graphe · Sémantique</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">&lt; 10 ms</div>
      <div class="kpi-label">Latence Inférence</div>
      <div class="kpi-sub">Cible API CDC : p95 &lt; 500 ms</div>
    </div>
  </div>

  <div class="sec-title"><span class="num">01</span> Problématique Scientifique & Formulation Mathématique</div>
  <p>
    Dans le cadre du PFA sur le protocole ouvert Bluesky (AT Protocol / Jetstream), le système vise à anticiper la propagation à grande échelle d'un contenu avant son pic d'audience. Contrairement aux approches classiques limitées au message individuel, <b>l'unité d'analyse retenue est le sujet <i>c</i></b> (cluster sémantique non supervisé extrait par <code>Sentence-Transformers MiniLM</code>, regroupé par <code>HDBSCAN</code> et libellé par <code>BERTopic c-TF-IDF</code>).
  </p>
  <div class="callout">
    <b>Formulation Formelle du Problème :</b><br>
    Soit <i>T<sub>0</sub></i> l'horodatage de la première publication d'un sujet <i>c</i>, <i>T<sub>o</sub> = 30 min</i> la fenêtre d'observation initiale, et <i>T<sub>p</sub> = 6 h</i> l'horizon cible. Le modèle estime la probabilité <i>P(Y<sub>c</sub> = 1 | x<sub>c</sub>)</i> où :
    <br>&bull; <b>Cible binaire :</b> <i>Y<sub>c</sub> = 1</i> si le volume cumulé <i>N<sub>c</sub>(T<sub>0</sub> + 6 h) &ge; q<sub>0,95</sub></i> (seuil empirique du 95<sup>e</sup> percentile estimé <b>strictement sur le jeu d'entraînement</b> pour interdire toute fuite d'information temporelle), et <i>0</i> sinon.
    <br>&bull; <b>Vecteur d'entrée x<sub>c</sub> :</b> extrait uniquement sur l'intervalle <i>[T<sub>0</sub>, T<sub>0</sub> + 30 min]</i>.
  </div>

  <div class="sec-title"><span class="num">02</span> Les Trois Familles de Descripteurs & Hypothèses de Recherche</div>
  <p>
    Le vecteur de variables <b>x</b><sub><i>c</i></sub> intègre trois regards complémentaires pour dépasser la simple observation volumétrique :
  </p>
  <table>
    <thead>
      <tr>
        <th style="width: 18%;">Famille</th>
        <th style="width: 32%;">Variables Extraites sur [T₀, T₀ + 30 min]</th>
        <th style="width: 50%;">Hypothèse de Recherche Associée (CDC § 1.4)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">1. Dynamique Temporelle</td>
        <td>Taux par tranche de 5 min (6 pas), accélération (pente log), ratio précoce republications / (1 + j'aime).</td>
        <td><b>H1 :</b> La vélocité et l'accélération surpassent une simple règle de seuil empirique statique (baseline métier B1).</td>
      </tr>
      <tr>
        <td class="font-bold">2. Structure du Graphe</td>
        <td>Diversité des auteurs (entropie de Shannon), influence des relais (médiane et max abonnés via API publique), franchissement de communautés (modularité Louvain).</td>
        <td><b>H2 :</b> La diversité des relais et le décloisonnement inter-communautés apportent un pouvoir séparateur déterminant au-delà de la dynamique pure.</td>
      </tr>
      <tr>
        <td class="font-bold">3. Sémantique & NLP</td>
        <td>Score d'intensité émotionnelle multilingue (colère, surprise, joie, peur), marqueurs d'urgence / questions / liens / médias, cohérence au centroïde.</td>
        <td><b>H3 :</b> La charge émotionnelle et les accroches de surface fournissent un gain marginal mais significatif pour départager les sujets à dynamique similaire.</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title"><span class="num">03</span> Preuve Empirique Préliminaire : Séparation des Trajectoires à 30 min</div>
  <p>
    Les données réelles collectées sur Bluesky et traitées au Jalon J2 démontrent la pertinence du découpage temporel :
  </p>
  <div class="figure-box">
    <img src="IMG_DIFFUSION" alt="Dynamique d'engagement" style="height: 140px;">
    <div class="caption">
      <b>Figure 1 : Trajectoires observées d'engagement cumulé N(t) sur Bluesky (Échantillon réel J+2).</b>
      Dès la fin de la fenêtre d'observation de 30 minutes (zone grisée), les sujets devenant hautement viraux à 6 heures présentent une accélération marquée. La prédiction exige un modèle capable d'exploiter les interactions non-linéaires entre cette pente initiale, l'audience des relais et le contenu.
    </div>
  </div>

  <div class="running-footer">
    <div><b>EMSI Casablanca</b> · 5IAD G2 · YEKHLEF Aya & EL OUALI Imane</div>
    <div>Page <b>1</b> sur <b>4</b></div>
  </div>
</div>

<!-- ==================== PAGE 2 : MATRICE COMPARATIVE ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI CASABLANCA · 5IAD G2 · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">ÉTUDE COMPARATIVE DES MODÈLES CANDIDATS</div>
  </div>

  <div class="sec-title"><span class="num">04</span> Matrice Comparative Exhaustive des Modèles Candidats</div>
  <p>
    Pour fonder le choix algorithmique sur une base rigoureuse, six alternatives issues de la pratique industrielle et de la littérature scientifique ont été confrontées sur l'ensemble des contraintes du projet :
  </p>

  <table>
    <thead>
      <tr>
        <th style="width: 14%;">Critère</th>
        <th style="width: 13%;">B1 : Règle Vélocité</th>
        <th style="width: 14%;">B2 : Régression Logistique</th>
        <th style="width: 15%;">M3 : Processus Hawkes (SEISMIC)</th>
        <th style="width: 15%;">Deep Learning (GNN / LSTM)</th>
        <th style="width: 14%;">M2 : LightGBM</th>
        <th style="width: 15%; background: #E2431B; color: white;">M1 : XGBoost (Choisi)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">Famille Algorithmique</td>
        <td>Heuristique empirique</td>
        <td>Modèle linéaire pénalisé (L1/L2)</td>
        <td>Processus ponctuel auto-excitant</td>
        <td>Réseaux neuronaux profonds de cascade</td>
        <td>GBDT (Arbres par feuille : <i>leaf-wise</i>)</td>
        <td class="font-bold" style="background: #FDF2E9;">GBDT (Arbres par niveau : <i>depth-wise</i>)</td>
      </tr>
      <tr>
        <td class="font-bold">Données Tabulaires Multi-sources</td>
        <td>❌ 1 seule variable</td>
        <td>⚠️ Relations linéaires simples seulement</td>
        <td>⚠️ Adapté aux timestamps, aveugle au texte</td>
        <td>⚠️ Lourd, exige volumétrie colossale</td>
        <td>⭐⭐⭐ Excellent sur grand volume</td>
        <td class="font-bold" style="background: #FDF2E9;">⭐⭐⭐ État de l'art robuste sur tabulaire hétérogène</td>
      </tr>
      <tr>
        <td class="font-bold">Interactions Non-linéaires</td>
        <td>❌ Nulle</td>
        <td>❌ Nulle (exige feature engineering manuel)</td>
        <td>⚠️ Non linéaire via fonction de mémoire temporelle</td>
        <td>⭐⭐⭐ Forte capacité d'abstraction</td>
        <td>⭐⭐⭐ Forte capacité de capture</td>
        <td class="font-bold" style="background: #FDF2E9;">⭐⭐⭐ Découpage automatique des interactions d'ordre &ge; 2</td>
      </tr>
      <tr>
        <td class="font-bold">Déséquilibre de Classe (~5 % viraux)</td>
        <td>❌ Réglage manuel imprécis</td>
        <td>⚠️ Sensible (effondrement du rappel)</td>
        <td>❌ Non nativement conçu pour la classification</td>
        <td>⚠️ Instable, risque d'effondrement sur classe majoritaire</td>
        <td>⭐⭐ Native (<code>is_unbalance</code>, <code>scale_pos_weight</code>)</td>
        <td class="font-bold" style="background: #FDF2E9;">⭐⭐⭐ Optimal : <code>scale_pos_weight</code> + optimisation PR-AUC</td>
      </tr>
      <tr>
        <td class="font-bold">Sensibilité aux Outliers (Followers)</td>
        <td>❌ Très sensible</td>
        <td>❌ Forte distorsion sans normalisation fine</td>
        <td>⚠️ Dépend des hypothèses de loi a priori</td>
        <td>⚠️ Sensible aux échelles non bornées</td>
        <td>⭐⭐⭐ Invariance stricte par coupures d'arbres</td>
        <td class="font-bold" style="background: #FDF2E9;">⭐⭐⭐ Invariance stricte par coupures orthogonales monotones</td>
      </tr>
      <tr>
        <td class="font-bold">Explicabilité (CDC & Soutenance)</td>
        <td>Triviale mais simpliste</td>
        <td>⭐⭐ Directe par coefficients &beta;</td>
        <td>⚠️ Interprétabilité physique difficile à vulgariser</td>
        <td>❌ Boîte noire opaque (nécessite GNNExplainer lourd)</td>
        <td>⭐⭐⭐ TreeSHAP rapide</td>
        <td class="font-bold" style="background: #FDF2E9;">⭐⭐⭐ TreeSHAP exact : attribution locale & globale parfaite</td>
      </tr>
      <tr>
        <td class="font-bold">Latence d'Inférence (Cible &lt; 500 ms)</td>
        <td>&lt; 0.1 ms</td>
        <td>&lt; 1 ms</td>
        <td>⚠️ Lente (intégration numérique des noyaux)</td>
        <td>❌ Élevée sur CPU (&gt; 150 ms)</td>
        <td>⭐⭐⭐ &lt; 3 ms</td>
        <td class="font-bold" style="background: #FDF2E9;">⭐⭐⭐ &lt; 5 ms (ultra-rapide en micro-lot et API)</td>
      </tr>
      <tr>
        <td class="font-bold">Sobriété & Déploiement (1 vCPU / 1 Go)</td>
        <td>Excellente</td>
        <td>Excellente</td>
        <td>Moyenne (coûts d'optimisation MLE)</td>
        <td>❌ Inadapté (GPU indispensable)</td>
        <td>⭐⭐⭐ Très légère empreinte mémoire</td>
        <td class="font-bold" style="background: #FDF2E9;">⭐⭐⭐ Empreinte compacte, entraînement CPU rapide</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title"><span class="num">05</span> Confrontation des Alternatives Écartées</div>
  <div class="grid-2">
    <div class="arg-card">
      <div class="title"><span class="badge-num">&times;</span> Pourquoi la Régression Logistique (B2) est insuffisante ?</div>
      <p>
        Bien que rapide et facilement interprétable, le modèle linéaire fait l'hypothèse de séparabilité linéaire hyperplane. Or, la viralité procède de <b>seuils critiques synergiques</b> : une vélocité élevée ne produit de viralité pérenne que si elle est relayée par des comptes à forte audience ou traversant des ponts communautaires. La régression logistique échoue à capturer ce couplage sans enrichissement combinatoire manuel exhaustif. Elle sert de référence statistique plancher.
      </p>
    </div>
    <div class="arg-card">
      <div class="title"><span class="badge-num">&times;</span> Pourquoi le Deep Learning (GNN / Transformers) est inadapté ?</div>
      <p>
        Les modèles profonds de cascades (ex. <i>DeepHawkes</i>, <i>CasCN</i>) exigent des centaines de milliers de cascades complètes pour converger sans surapprendre. Ils requièrent des accélérateurs GPU exclus par notre contrainte de frugalité (ENF-10). En outre, leur nature de « boîte noire » complique l'évaluation des hypothèses H1, H2 et H3. Enfin, sur données tabulaires à signaux hétérogènes, les arbres boostés surpassent régulièrement les GNN.
      </p>
    </div>
  </div>

  <div class="arg-card" style="margin-top: 3px;">
    <div class="title"><span class="badge-num">&times;</span> Pourquoi les Processus de Hawkes (M3) sont relégués en extension facultative ?</div>
    <p>
      Les processus ponctuels auto-excitants (SEISMIC, TiDeH) modélisent élégamment les temps d'arrivée des partages individuels via une fonction d'intensité stochastique &lambda;(t). Cependant, ils sont conçus pour une cascade unique de retweets et peinent à intégrer des descripteurs textuels riches, des scores d'émotions et des graphes multi-auteurs au niveau agrégé d'un <b>sujet</b> émergent. Leur ajustement par maximum de vraisemblance est en outre numériquement instable sous forte charge.
    </p>
  </div>

  <div class="running-footer">
    <div><b>JALON TECHNIQUE</b> · MATRICE COMPARATIVE DES MODÈLES</div>
    <div>Page <b>2</b> sur <b>4</b></div>
  </div>
</div>

<!-- ==================== PAGE 3 : JUSTIFICATION DÉTAILLÉE XGBOOST ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI CASABLANCA · 5IAD G2 · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">DÉMONSTRATION DU CHOIX DE XGBOOST (M1)</div>
  </div>

  <div class="sec-title"><span class="num">06</span> Démonstration Approfondie du Choix de XGBoost (M1)</div>
  <p>
    L'adoption de <b>XGBoost (Extreme Gradient Boosting)</b> comme cœur prédictif (EF-10, architecture Figure 3 du CDC) est justifiée par cinq propriétés scientifiques et pratiques majeures :
  </p>

  <div class="arg-card">
    <div class="title"><span class="badge-num">1</span> Adéquation Parfaite aux Données Tabulaires et aux Interactions Non-Linéaires</div>
    <p>
      Le problème de prédiction de viralité repose sur la convergence de descripteurs hétérogènes (taux de publications continus, counts discrets d'abonnés, scores émotionnels flottants et tags binaires). XGBoost construit une suite d'arbres de régression corrigés par le gradient de la perte. Il segmente automatiquement l'espace par des coupures orthogonales optimales, capturant nativement des règles complexes telles que : <i>« SI accélération > &theta;₁ ET max_followers > &theta;₂ ALORS probabilité de viralité = 87 % »</i>, sans nécessiter de mise à l'échelle préalable.
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">2</span> Invariance aux Distributions en Loi de Puissance (Power-Law) des Abonnés</div>
    <p>
      Notre analyse EDA (Figure 2 ci-dessous) démontre que la distribution des abonnés des auteurs sur Bluesky suit une loi de puissance extrême : la médiane est de 137 abonnés alors que le top 1% dépasse 15 000 (pic à > 240 000). Les algorithmes basés sur la descente de gradient linéaire ou les réseaux de neurones sont extrêmement vulnérables à cette asymétrie. En revanche, <b>XGBoost est strictement invariant aux transformations monotones des variables explicatives</b> : une coupure sur la variable brute ou sur <code>log(1 + followers)</code> produit le même partitionnement de l'échantillon.
    </p>
  </div>

  <div class="grid-2">
    <div class="figure-box">
      <img src="IMG_FOLLOWERS" alt="Distribution des abonnés" style="height: 120px;">
      <div class="caption">
        <b>Figure 2 : Distribution des abonnés (Échelle Log10).</b>
        Structure de réseau asymétrique en loi de puissance parfaitement tolérée par les mécanismes de coupure de XGBoost.
      </div>
    </div>
    <div class="figure-box">
      <img src="IMG_FORMATS" alt="Répartition des formats" style="height: 120px;">
      <div class="caption">
        <b>Figure 3 : Formats et enrichissements médias.</b>
        Les prédicteurs catégoriels (médias visuels, liens web) sont directement intégrés par XGBoost sous forme de règles de branchement binaires.
      </div>
    </div>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">3</span> Gestion Native et Rigoureuse du Déséquilibre de Classes (Top 5% Viraux)</div>
    <p>
      Avec seulement 5 % de sujets viraux (<i>Y<sub>c</sub> = 1</i>), l'accuracy traditionnelle est une métrique trompeuse (un modèle prédisant constamment 0 afficherait 95 % d'exactitude). XGBoost permet :
      <br>&bull; L'ajustement dynamique de la pénalité sur les faux négatifs via l'hyperparamètre <code>scale_pos_weight = N_negatifs / N_positifs &asymp; 19</code>.
      <br>&bull; L'optimisation directe orientée vers la métrique <b>PR-AUC (Precision-Recall AUC)</b> exigée par le cahier des charges (§ 9.5).
      <br>&bull; L'application d'un paramètre <code>max_delta_step</code> qui stabilise la mise à jour des poids lors de déséquilibres extrêmes.
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">4</span> Explicabilité Exacte par TreeSHAP et Protocole d'Ablation (Validation H1, H2, H3)</div>
    <p>
      L'exigence académique fondamentale du PFA est de quantifier l'apport respectif des 3 familles de descripteurs. Grâce à l'algorithme <b>TreeSHAP</b> implémenté nativement pour les modèles d'arbres, XGBoost calcule les contributions de Shapley en temps polynomial <i>O(TLD²)</i> :
      <br>&bull; <b>Globalement :</b> classement rigoureux de l'importance des variables sans biais de corrélation (contrairement au <i>feature importance</i> classique par gain/Gini).
      <br>&bull; <b>Localement :</b> explication immédiate dans l'interface React pour chaque alerte émise (ex. : <i>« Ce sujet est qualifié viral à 84 % en raison de 60 % par l'accélération, 30 % par le franchissement de communauté et 10 % par le sentiment de surprise »</i>).
      <br>&bull; <b>Par ablation :</b> confirmation expérimentale des écarts de PR-AUC pour tester les hypothèses H1 (vitesse), H2 (graphe) et H3 (émotion).
    </p>
  </div>

  <div class="sec-title"><span class="num">07</span> Confrontation XGBoost vs LightGBM (M1 vs M2)</div>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Caractéristique</th>
        <th style="width: 37%;">M1 : XGBoost (Modèle Principal)</th>
        <th style="width: 38%;">M2 : LightGBM (Challenger de Validation)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">Mode de Croissance des Arbres</td>
        <td><b>Par niveau (<i>depth-wise / level-wise</i>) :</b> les arbres grandissent couche par couche, garantissant une profondeur symétrique et équilibrée.</td>
        <td><b>Par feuille (<i>leaf-wise</i>) :</b> l'algorithme divise la feuille avec la plus grande perte, produisant des arbres asymétriques très profonds.</td>
      </tr>
      <tr>
        <td class="font-bold">Contrôle du Surapprentissage</td>
        <td><b>Supérieur sur jeux de données moyens :</b> régularisation $L_1$ (<code>alpha</code>) et $L_2$ (<code>lambda</code>) stricte qui préserve la généralisation sur les micro-lots.</td>
        <td>Peut surajuster plus rapidement sur des volumes de taille moyenne si <code>num_leaves</code> et <code>min_data_in_leaf</code> ne sont pas sévèrement bridés.</td>
      </tr>
      <tr>
        <td class="font-bold">Rôle dans le Protocole PFA</td>
        <td><b>Modèle de référence en production :</b> exposé via l'API FastAPI et suivi dans MLflow.</td>
        <td><b>Contre-épreuve scientifique :</b> garantit que les performances mesurées sont intrinsèques aux variables et non dépendantes d'un biais d'implémentation.</td>
      </tr>
    </tbody>
  </table>

  <div class="running-footer">
    <div><b>JALON TECHNIQUE</b> · DÉMONSTRATION DU CHOIX DE XGBOOST</div>
    <div>Page <b>3</b> sur <b>4</b></div>
  </div>
</div>

<!-- ==================== PAGE 4 : PROTOCOLE & SYNTHÈSE SOUTENANCE ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI CASABLANCA · 5IAD G2 · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">PROTOCOLE DE VALIDATION & SYNTHÈSE SOUTENANCE</div>
  </div>

  <div class="sec-title"><span class="num">08</span> Protocole d'Évaluation Temporel & Prévention des Biais</div>
  <p>
    La fiabilité de l'évaluation d'un modèle de prédiction temporelle repose sur le respect intransigeant du principe de causalité physique. Le cahier des charges bannit formellement le découpage aléatoire (type 70/30) qui entraîne une <b>fuite de données temporelle (Data Leakage)</b> massive :
  </p>

  <div class="callout blue">
    <b>Les 4 Garde-fous Temporels Mis en Œuvre (CDC § 9.3) :</b><br>
    <b>1. Découpage temporel hebdomadaire glissant (<i>Walk-Forward Split</i>) :</b> Le modèle est entraîné sur la semaine <i>W<sub>k</sub></i> et évalué exclusivement sur la semaine future <i>W<sub>k+1</sub></i>.<br>
    <b>2. Embargo strict de 6 heures :</b> Un intervalle tampon de 6 heures est inséré entre la fin du bloc d'entraînement et le début du bloc de validation/test pour empêcher tout chevauchement des étiquettes de viralité.<br>
    <b>3. Estimation hors-test des seuils :</b> Le quantile <i>q<sub>0,95</sub></i> de viralité et toute normalisation sont calculés uniquement sur l'ensemble d'entraînement.<br>
    <b>4. Rejeu séquentiel par micro-lots :</b> Les variables sont reproduites par micro-lots de 10 minutes en ne sollicitant que les données antérieures à l'instant de décision <i>T<sub>0</sub> + 30 min</i>.
  </div>

  <div class="sec-title"><span class="num">09</span> Métriques de Validation Adaptées au Problème Métier</div>
  <table>
    <thead>
      <tr>
        <th style="width: 20%;">Métrique</th>
        <th style="width: 25%;">Usage dans le Projet</th>
        <th style="width: 55%;">Justification Technique & Sanction Décisionnelle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">PR-AUC (Precision-Recall)</td>
        <td>Métrique principale de sélection</td>
        <td>Indispensable sous fort déséquilibre (5 % de positifs) ; ne récompense pas les vrais négatifs triviaux et sanctionne les fausses alertes.</td>
      </tr>
      <tr>
        <td class="font-bold">Précision@k</td>
        <td>Pilotage des alertes opérationnelles</td>
        <td>Mesure la pertinence des <i>k</i> alertes prioritaires soumises au tableau de bord (qualité du flux de veille sans noyer l'utilisateur).</td>
      </tr>
      <tr>
        <td class="font-bold">Score de Brier & Calibration</td>
        <td>Fiabilité des probabilités</td>
        <td>Vérifie que la probabilité prédite correspond à la fréquence réelle observée (une probabilité de 80 % doit être virale 8 fois sur 10).</td>
      </tr>
      <tr>
        <td class="font-bold">Avance d'Alerte Médiane</td>
        <td>Indicateur de valeur métier</td>
        <td>Délai temporel moyen mesuré entre l'émission de la prédiction à <i>T₀ + 30 min</i> et le pic réel d'engagement du sujet.</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title"><span class="num">10</span> Fiche d'Argumentation & Réponses Clés pour la Soutenance devant le Jury</div>
  <p>
    Synthèse opérationnelle des réponses aux questions typiques du jury lors de la soutenance :
  </p>

  <div class="arg-card">
    <div class="title"><span class="badge-num">Q1</span> « Pourquoi avoir choisi XGBoost plutôt qu'un réseau de neurones profond (Deep Learning) ? »</div>
    <p>
      <b>Réponse des candidates :</b> <i>« Nos données d'entrée sont tabulaires et multi-sources (séries temporelles agrégées, métriques de graphes et indices sémantiques). La recherche actuelle (Grinsztajn et al., NeurIPS 2022) démontre que sur ce type de données, les arbres boostés surpassent systématiquement les réseaux profonds en précision et en stabilité. De plus, nos contraintes de frugalité (hébergement sur petit serveur et calcul CPU) rendent le Deep Learning inadapté. Enfin, XGBoost offre une explicabilité exacte via TreeSHAP, essentielle pour valider nos hypothèses scientifiques H1, H2 et H3. »</i>
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">Q2</span> « Comment gérez-vous le déséquilibre extrême des classes (seulement 5 % de viraux) ? »</div>
    <p>
      <b>Réponse des candidates :</b> <i>« Nous n'avons pas eu recours à des méthodes d'oversampling synthétique comme SMOTE qui créent des trajectoires temporelles irréalistes. Nous utilisons la pondération intégrée au gradient de XGBoost via <code>scale_pos_weight = 19</code>, nous calibrons le seuil de décision sur validation interne, et nous évaluons notre modèle avec la PR-AUC (Precision-Recall AUC) avec des intervalles de confiance calculés par bootstrap. »</i>
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">Q3</span> « Quel est l'intérêt d'avoir inclus LightGBM si XGBoost est votre modèle principal ? »</div>
    <p>
      <b>Réponse des candidates :</b> <i>« LightGBM constitue notre contre-épreuve méthodologique (M2). Il implémente une stratégie de croissance par feuille (leaf-wise) différente de la croissance par niveau de XGBoost. Comparer les deux modèles dans MLflow garantit que la qualité des prédictions provient de l'information contenue dans notre feature engineering et nos données Bluesky, et non d'une anomalie spécifique à un algorithme donné. »</i>
    </p>
  </div>

  <div class="callout green" style="margin-top: 6px;">
    <b>Conclusion & Décision d'Arbitrage :</b><br>
    Le choix de <b>XGBoost (M1)</b>, appuyé par <b>LightGBM (M2)</b>, allie robustesse mathématique, insensibilité aux lois en puissance, maîtrise native du déséquilibre et explicabilité TreeSHAP complète, dans le respect absolu des contraintes de frugalité et d'industrialisation du cahier des charges EMSI.
  </div>

  <div class="running-footer">
    <div><b>EMSI Casablanca</b> · Filière 5IAD · Capstone Data Science · YEKHLEF Aya & EL OUALI Imane</div>
    <div>Page <b>4</b> sur <b>4</b></div>
  </div>
</div>

</body>
</html>
"""

html_final = html_template.replace("IMG_FORMATS", img1).replace("IMG_FOLLOWERS", img2).replace("IMG_DIFFUSION", img3)

html_file = os.path.join(BASE_DIR, "justification_modele_ml.html")
pdf_file = os.path.join(BASE_DIR, "Justification_Modele_ML_XGBoost_YEKHLEF_ELOUALI.pdf")

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html_final)
print(f"Fichier HTML généré avec succès : {html_file}")

# Impression PDF avec Chrome headless
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
html_uri = pathlib.Path(html_file).resolve().as_uri()

cmd = [
    chrome_path,
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_file}",
    html_uri
]

res = subprocess.run(cmd, capture_output=True, text=True)
print("Code retour Chrome :", res.returncode)
if os.path.exists(pdf_file):
    size_kb = os.path.getsize(pdf_file) / 1024
    print(f"-> Fichier PDF généré avec succès : {pdf_file} ({size_kb:.1f} Ko)")
else:
    print("Erreur génération PDF, stderr :", res.stderr)
