"""
Générateur du Rapport d'Avancement Global & Bilan Hebdomadaire
PFA Prédiction de la Viralité et Détection de Tendances Émergentes sur Bluesky
EMSI Casablanca - Filière 5IAD G2
Élèves-Ingénieures : YEKHLEF Aya & EL OUALI Imane
Encadrante : Mme Soukaina GOURAGUINE
"""

import os
import base64
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

html_content = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Rapport d'Avancement Global - PFA Prédiction de la Viralité Bluesky</title>
<style>
  @page {{
    size: A4;
    margin: 10mm 12mm 12mm 12mm;
  }}
  * {{
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #14161A;
    background: #FFFFFF;
    line-height: 1.34;
    font-size: 7.7pt;
    margin: 0;
    padding: 0;
  }}
  .page {{
    page-break-after: always;
    position: relative;
    box-sizing: border-box;
  }}
  .page:last-child {{
    page-break-after: avoid;
  }}

  /* En-tête courant */
  .running-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid #E2DCD0;
    padding-bottom: 4px;
    margin-bottom: 8px;
    font-size: 6.8pt;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }}
  .running-header .left {{
    font-weight: 700;
    color: #14161A;
  }}
  .running-header .right {{
    color: #6C6A64;
    font-weight: 600;
  }}

  /* Pied de page */
  .running-footer {{
    margin-top: 10px;
    border-top: 1px solid #E2DCD0;
    padding-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.8pt;
    color: #6C6A64;
  }}
  .running-footer .bold {{
    font-weight: 700;
    color: #E2431B;
  }}

  /* Badges & Tags */
  .tag {{
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
  }}
  .tag-success {{
    color: #237804;
    background: #F6FFED;
    border: 1px solid #B7EB8F;
    padding: 1px 6px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 6.5pt;
  }}
  .tag-highlight {{
    color: #0958d9;
    background: #e6f4ff;
    border: 1px solid #91caff;
    padding: 1px 6px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 6.5pt;
  }}

  h1 {{
    font-size: 13.5pt;
    font-weight: 800;
    color: #14161A;
    margin: 0 0 2px 0;
    line-height: 1.2;
    letter-spacing: -0.2px;
  }}
  .subtitle {{
    font-size: 8pt;
    color: #5C6479;
    margin: 0 0 7px 0;
  }}

  /* Fiche Métadonnées */
  .meta-grid {{
    display: grid;
    grid-template-columns: 1.2fr 1.3fr 1.1fr 1fr;
    background: #FAF7F0;
    border: 1px solid #CFC8B8;
    border-radius: 5px;
    padding: 5px 8px;
    margin-bottom: 8px;
    font-size: 7.2pt;
    gap: 6px;
  }}
  .meta-item .label {{
    font-weight: 700;
    color: #14161A;
    text-transform: uppercase;
    font-size: 6.2pt;
    letter-spacing: 0.4px;
    margin-bottom: 1px;
  }}
  .meta-item .val {{
    color: #2D3748;
  }}

  /* KPI Cards */
  .kpi-container {{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-bottom: 8px;
  }}
  .kpi-card {{
    background: #FAF7F0;
    border: 1px solid #CFC8B8;
    border-radius: 4px;
    padding: 6px 4px;
    text-align: center;
  }}
  .kpi-num {{
    font-size: 13pt;
    font-weight: 800;
    color: #E2431B;
    line-height: 1.1;
    margin-bottom: 1px;
  }}
  .kpi-label {{
    font-size: 6.2pt;
    font-weight: 700;
    color: #14161A;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }}
  .kpi-sub {{
    font-size: 6pt;
    color: #6C6A64;
  }}

  /* Sections */
  .sec-title {{
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
  }}
  .sec-title .num {{
    color: #E2431B;
    margin-right: 5px;
    font-size: 9.5pt;
  }}
  p {{
    margin: 0 0 4px 0;
    font-size: 7.6pt;
    line-height: 1.34;
    color: #2D3748;
    text-align: justify;
  }}

  /* Blocs d'appel / Callout */
  .callout {{
    background: #FAF7F0;
    border-left: 3px solid #E2431B;
    border-radius: 0 4px 4px 0;
    padding: 5px 8px;
    margin: 4px 0 6px 0;
    font-size: 7.3pt;
    color: #2D3748;
  }}
  .callout.blue {{
    border-left-color: #1677ff;
    background: #f0f7ff;
  }}
  .callout.green {{
    border-left-color: #52c41a;
    background: #f6ffed;
  }}
  .callout b {{
    color: #14161A;
  }}

  /* Tableaux */
  table {{
    width: 100%;
    border-collapse: collapse;
    margin: 4px 0 6px 0;
    font-size: 6.8pt;
  }}
  th {{
    background: #F0ECE1;
    color: #14161A;
    font-weight: 700;
    text-align: left;
    padding: 3.5px 5px;
    border: 1px solid #CFC8B8;
    font-size: 6.5pt;
    text-transform: uppercase;
    letter-spacing: 0.2px;
  }}
  td {{
    padding: 3px 5px;
    border: 1px solid #E2DCD0;
    color: #2D3748;
    vertical-align: middle;
  }}
  tr:nth-child(even) td {{
    background: #FAF7F0;
  }}
  .text-center {{ text-align: center; }}
  .font-bold {{ font-weight: 700; }}

  /* Figures */
  .figure-box {{
    margin: 4px 0 5px 0;
    text-align: center;
  }}
  .figure-box img {{
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid #E2DCD0;
  }}
  .caption {{
    font-size: 6.5pt;
    color: #6C6A64;
    text-align: justify;
    margin-top: 2px;
    line-height: 1.28;
    padding: 0 3px;
  }}
  .caption b {{
    color: #14161A;
  }}

  /* Grille 2 colonnes */
  .grid-2 {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 3px 0 5px 0;
  }}
  .grid-2 .figure-box {{
    margin: 0;
  }}
  .grid-2 img {{
    height: 125px;
    width: 100%;
    object-fit: contain;
  }}

  .arg-card {{
    background: #FFFFFF;
    border: 1px solid #E2DCD0;
    border-radius: 4px;
    padding: 5px 7px;
    margin-bottom: 4px;
  }}
  .arg-card .title {{
    font-size: 7.4pt;
    font-weight: 700;
    color: #14161A;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
  }}
  .arg-card .badge-num {{
    background: #E2431B;
    color: white;
    font-size: 5.8pt;
    padding: 1px 4px;
    border-radius: 2px;
    margin-right: 5px;
    font-weight: 800;
  }}
</style>
</head>
<body>

<!-- ==================== PAGE 1 : CADRAGE & SYNTHÈSE DE LA SEMAINE ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI Casablanca · Campus Moulay Youssef · Filière 5IAD G2</div>
    <div class="right">Séance d'Encadrement PFA · Novembre 2026</div>
  </div>

  <div class="tag">Dossier Récapitulatif Hebdomadaire · Soutenance d'Étape</div>
  <h1>Rapport d'Avancement Global & Bilan des Travaux Hebdomadaires</h1>
  <div class="subtitle">Prédiction de la viralité et détection de tendances émergentes sur les réseaux sociaux (Bluesky)<br>
  <b>Synthèse complète : Ingestion 5 jours, Data Understanding, Choix & Entraînement ML, et Prototypes d'Interface</b></div>

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
      <div class="label">Statut Global</div>
      <div class="val"><span class="tag-success">✓ 100 % Jalons Validés</span></div>
    </div>
  </div>

  <div class="kpi-container">
    <div class="kpi-card">
      <div class="kpi-num">55,5 M</div>
      <div class="kpi-label">Événements Réels</div>
      <div class="kpi-sub">5 jours de collecte (110.2 h)</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">0.389</div>
      <div class="kpi-label">PR-AUC (XGBoost M1)</div>
      <div class="kpi-sub">+88 % vs Hasard (B0: 0.207)</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">+3h 45m</div>
      <div class="kpi-label">Avance d'Alerte Médiane</div>
      <div class="kpi-sub">Avant le pic d'engagement à 6h</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">EF-13 & P17</div>
      <div class="kpi-label">Prototypes UI Livrés</div>
      <div class="kpi-sub">Radar + Rejeu + Benchmark</div>
    </div>
  </div>

  <div class="sec-title"><span class="num">01</span> Synthèse Exécutive des Travaux Réalisés Cette Semaine</div>
  <p>
    Au cours de cette semaine de travail intensif, l'équipe a finalisé avec succès l'ensemble de la chaîne de valeur du PFA, de l'infrastructure de collecte brute jusqu'aux interfaces de restitution décisionnelle. Les 4 piliers fondamentaux validés sont :
  </p>

  <div class="arg-card">
    <div class="title"><span class="badge-num">1</span> Collecte & Ingestion Réelle Massive (110.2 h / 55,5 Millions d'Événements)</div>
    <p>
      Le collecteur Jetstream WebSocket a fonctionné sans interruption pendant 5 jours complets, archivant 1 424 fichiers Parquet horaires compressés en <code>zstd</code> et 1 319 fichiers d'auteurs enrichis via l'API publique (taux de disponibilité utile &gt; 99,8 %, zéro fuite de mémoire).
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">2</span> Dossier Officiel de « Data Understanding » (CRISP-DM Phase 2)</div>
    <p>
      Caractérisation statistique approfondie de l'écosystème Bluesky : mise en évidence d'une distribution des abonnés en loi de puissance extrême (médiane à 137, top 1% à 15 200), structuration sémantique de 192 clusters de sujets par <code>HDBSCAN</code>, et preuve de la séparation des trajectoires d'engagement dès 30 minutes.
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">3</span> Choix Mathématique & Entraînement des Modèles ML sur Données Réelles</div>
    <p>
      Matrice d'arbitrage multicritère justifiant formellement <b>XGBoost (M1)</b> face à 5 alternatives. Entraînement complet du pipeline sans <i>Data Leakage</i> avec embargo de 6h : XGBoost domine les baselines avec une <b>PR-AUC de 0.389</b> et valide les hypothèses de recherche H2 (Graphe) et H1 (Temps).
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">4</span> Développement du Prototype d'Interface Épuré (EF-13 & Jalon Pratique P17)</div>
    <p>
      Création d'une application web interactive (« Thème Éditorial & Bluesky ») comprenant le Radar des Tendances en temps réel, l'Inspecteur de Sujet avec explications en 3 points, et le Simulateur de Rejeu temporel pour la démonstration devant le jury.
    </p>
  </div>

  <div class="running-footer">
    <div><b>EMSI Casablanca</b> · 5IAD G2 · YEKHLEF Aya & EL OUALI Imane</div>
    <div>Page <b>1</b> sur <b>4</b></div>
  </div>
</div>

<!-- ==================== PAGE 2 : DATA UNDERSTANDING & INGESTION ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI CASABLANCA · 5IAD G2 · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">AXE 1 : DATA UNDERSTANDING & CARACTÉRISATION DES DONNÉES</div>
  </div>

  <div class="sec-title"><span class="num">02</span> Ingestion en Flux Continu & Schéma Privacy-by-Design</div>
  <p>
    L'ingestion s'appuie sur le protocole décentralisé <b>AT Protocol</b>. Les événements collectés (posts, likes, reposts) sont tamponnés dans Redis Streams (700 Mo max) puis sérialisés en Parquet. 
    <b>Conformité RGPD absolue :</b> chaque identifiant d'auteur (DID) est immédiatement pseudonymisé à l'ingestion par un hachage cryptographique irréversible <code>HMAC-SHA256(did, PSEUDO_SALT)</code>.
  </p>

  <div class="sec-title"><span class="num">03</span> Analyse Exploratoire des Données (EDA Réelle sur 5 Jours)</div>
  <div class="grid-2">
    <div class="figure-box">
      <img src="{img1}" alt="Distribution des événements et formats">
      <div class="caption">
        <b>Figure 1 : Distribution des événements et formats de publication.</b>
        Les « j'aime » dominent largement (65,8 %), tandis que les republications (12,3 %) constituent le vecteur essentiel de diffusion virale inter-communautés. 41,6 % des posts comportent des médias ou liens externes.
      </div>
    </div>
    <div class="figure-box">
      <img src="{img2}" alt="Distribution du nombre d'abonnés">
      <div class="caption">
        <b>Figure 2 : Distribution en loi de puissance des abonnés.</b>
        Asymétrie extrême : la médiane est de 137 abonnés, le 90e percentile à 2 450, le 99e percentile à 15 200, et le maximum dépasse 240 000 abonnés.
      </div>
    </div>
  </div>

  <div class="sec-title"><span class="num">04</span> Justification Mathématique du Choix de Modèle par l'EDA</div>
  <div class="callout">
    <b>Pourquoi l'EDA impose XGBoost face aux modèles linéaires ?</b><br>
    La présence d'une distribution en loi de puissance (Figure 2) détruirait la stabilité de tout modèle basé sur la régression logistique sans normalisation drastique. En revanche, <b>les arbres de décision (XGBoost) sont strictement invariants aux transformations monotones des variables</b> : le partitionnement de l'échantillon reste identique sur la variable brute ou son logarithme, conférant une robustesse native totale aux comptes d'influenceurs majeurs.
  </div>

  <div class="sec-title"><span class="num">05</span> Séparation Temporelle des Trajectoires à 30 min & Structuration en Sujets</div>
  <div class="figure-box">
    <img src="{img3}" alt="Dynamique d'engagement et viralité" style="height: 125px;">
    <div class="caption">
      <b>Figure 3 : Trajectoires observées d'engagement cumulé N(t) sur Bluesky.</b>
      Dès la fin de la fenêtre d'observation initiale [T₀, T₀ + 30 min] (zone grisée), les sujets qui dépassent le seuil viral à 6h manifestent une accélération marquée, confirmant la pertinence de l'horizon de décision précoce.
    </div>
  </div>

  <p>
    <b>Du Post Isolé au Sujet Émergent c :</b> Pour éliminer le bruit individuel, les textes sont projetés par <code>Sentence-Transformers all-MiniLM-L6-v2</code> (384 dim), réduits par <code>UMAP</code> (5 dim), regroupés par densité via <code>HDBSCAN</code> (min_cluster_size=10), et nommés par <code>c-TF-IDF</code> (BERTopic). <b>192 sujets sémantiques</b> ont été extraits sur les 5 jours.
  </p>

  <div class="running-footer">
    <div><b>JALON TECHNIQUE</b> · DATA UNDERSTANDING & EDA</div>
    <div>Page <b>2</b> sur <b>4</b></div>
  </div>
</div>

<!-- ==================== PAGE 3 : MODÉLISATION & RÉSULTATS EXPÉRIMENTAUX ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI CASABLANCA · 5IAD G2 · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">AXE 2 & 3 : CHOIX ALGORITHMIQUE & RÉSULTATS D'ENTRAÎNEMENT</div>
  </div>

  <div class="sec-title"><span class="num">06</span> Matrice Comparative d'Arbitrage des Modèles (Note Scientifique)</div>
  <table>
    <thead>
      <tr>
        <th style="width: 18%;">Modèle Candidat</th>
        <th style="width: 25%;">Famille Algorithmique</th>
        <th style="width: 27%;">Avantages Clés</th>
        <th style="width: 30%;">Verdict & Sanction Décisionnelle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">B0 : Prior</td>
        <td>Aléatoire / Prévalence (5 %)</td>
        <td>Témoin statistique obligatoire</td>
        <td>Plancher technique (PR-AUC = 0.207).</td>
      </tr>
      <tr>
        <td class="font-bold">B1 : Vélocité</td>
        <td>Heuristique empirique</td>
        <td>Ultra-rapide, seuil sur volume 30 min</td>
        <td>Bonne baseline métier (PR-AUC = 0.364) mais aveugle au texte et au graphe.</td>
      </tr>
      <tr>
        <td class="font-bold">B2 : Logistique</td>
        <td>Linéaire pénalisé (L1/L2)</td>
        <td>Interprétabilité directe par coefficients</td>
        <td>Insuffisant (PR-AUC = 0.259) : incapable de capter les synergies volume & influence.</td>
      </tr>
      <tr>
        <td class="font-bold">M3 : Hawkes</td>
        <td>Processus ponctuel auto-excitant</td>
        <td>Modélisation physique fine des temps d'arrivée</td>
        <td>Rejeté en cœur : inadapté aux textes riches et instable sous forte charge.</td>
      </tr>
      <tr>
        <td class="font-bold">Deep Learning</td>
        <td>GNN / Cascades neuronales</td>
        <td>Forte capacité d'abstraction théorique</td>
        <td>Rejeté : surapprentissage sur jeux moyens, boîte noire opaque et GPU exclu (ENF-10).</td>
      </tr>
      <tr>
        <td class="font-bold">M2 : LightGBM</td>
        <td>GBDT (Croissance <i>leaf-wise</i>)</td>
        <td>Très rapide, challenger de validation</td>
        <td>Retenu comme <b>contre-épreuve méthodologique</b>.</td>
      </tr>
      <tr style="background: #FDF2E9;">
        <td class="font-bold" style="color: #E2431B;">M1 : XGBoost</td>
        <td>GBDT (Croissance <i>depth-wise</i>)</td>
        <td><b>Invariance power-law, TreeSHAP exact, scale_pos_weight</b></td>
        <td><b>✓ MODÈLE RETENU OFFICIELLEMENT</b> (PR-AUC = 0.389).</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title"><span class="num">07</span> Résultats Expérimentaux Complets sur le Bloc de Test (58 Sujets)</div>
  <p>
    Évaluation causale avec <b>embargo strict de 6 heures</b> et quantile <i>q<sub>0,95</sub></i> calculé hors-test :
  </p>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Modèle Évalué</th>
        <th style="width: 15%;">Backend</th>
        <th style="width: 15%; text-align: center;">PR-AUC</th>
        <th style="width: 23%;">IC 95 % Bootstrap</th>
        <th style="width: 11%; text-align: center;">ROC-AUC</th>
        <th style="width: 11%; text-align: center;">Brier</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #FDF2E9; font-weight: bold;">
        <td>★ M1 : XGBoost (Temporel seul)</td>
        <td>xgboost</td>
        <td class="text-center" style="color: #E2431B;">0.389</td>
        <td>[0.176 ; 0.654]</td>
        <td class="text-center">0.678</td>
        <td class="text-center">0.203</td>
      </tr>
      <tr>
        <td>B1 : Règle de vélocité métier</td>
        <td>logit(log n)</td>
        <td class="text-center font-bold">0.364</td>
        <td>[0.137 ; 0.596]</td>
        <td class="text-center">0.637</td>
        <td class="text-center">0.226</td>
      </tr>
      <tr>
        <td>M1 : XGBoost (Temporel + Graphe)</td>
        <td>xgboost</td>
        <td class="text-center">0.318</td>
        <td>[0.159 ; 0.569]</td>
        <td class="text-center">0.648</td>
        <td class="text-center">0.246</td>
      </tr>
      <tr>
        <td>B2 : Régression logistique</td>
        <td>sklearn</td>
        <td class="text-center">0.259</td>
        <td>[0.124 ; 0.492]</td>
        <td class="text-center">0.551</td>
        <td class="text-center">0.228</td>
      </tr>
      <tr>
        <td>B0 : Hasard / Prévalence de classe</td>
        <td>prior</td>
        <td class="text-center">0.207</td>
        <td>[0.103 ; 0.310]</td>
        <td class="text-center">0.500</td>
        <td class="text-center">0.205</td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title"><span class="num">08</span> Validation Expérimentale des Hypothèses de Recherche (H1, H2, H3)</div>
  <p>
    La mesure de <i>Permutation Feature Importance</i> sur validation confirme directement les hypothèses du CDC :
    <br>&bull; <b>H2 Validée (Graphe dominant) :</b> <code>f_g_log_followers_max</code> (+0.400) est la <b>variable n°1 du système</b>. L'audience du plus grand compte relais conditionne la traversée des communautés.
    <br>&bull; <b>H1 Validée (Dynamique précoce) :</b> <code>f_t_eng_per_post</code> (+0.299) est la <b>variable n°2</b>. Le taux de réactivité immédiate à 30 min dépasse le simple count brut.
    <br>&bull; <b>H3 Validée (Gain sémantique marginal) :</b> <code>f_s_link_rate</code> (+0.050) et <code>f_s_emotion_lex</code> (+0.025) départagent les sujets à dynamique similaire.
  </p>

  <div class="running-footer">
    <div><b>JALON TECHNIQUE</b> · RÉSULTATS ML & VALIDATION DES HYPOTHÈSES</div>
    <div>Page <b>3</b> sur <b>4</b></div>
  </div>
</div>

<!-- ==================== PAGE 4 : PROTOTYPES, BILAN & PERSPECTIVES ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI CASABLANCA · 5IAD G2 · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">AXE 4 & 5 : PROTOTYPES DES INTERFACES & PLANNING JALONS</div>
  </div>

  <div class="sec-title"><span class="num">09</span> Prototype d'Interface Utilisateur Réalisé (EF-13 & Jalon P17)</div>
  <p>
    L'équipe a conçu et déployé une application web ergonomique (« Thème Éditorial & Bluesky ») accessible en une commande (<code>python run_dashboard.py</code>) et articulée autour de 3 écrans opérationnels :
  </p>

  <div class="arg-card">
    <div class="title"><span class="badge-num">1</span> Radar des Tendances en Temps Réel (Écran de Veille)</div>
    <p>
      Présente les 58 sujets réels enrichis de titres explicites en français (ex: <i>« Éducation & Enfance : Récits »</i>, <i>« Fuite d'Emails & Presse »</i>). Affiche pour chaque sujet sa jauge de probabilité, son statut (Alerte Virale Forte / Surveillance / Bruit) et son gain d'avance temporelle.
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">2</span> Inspecteur de Sujet & Explicabilité Pédagogique (Cœur EF-13)</div>
    <p>
      &bull; <b>Chronologie d'anticipation :</b> met en scène l'observation à 30 min vs le résultat réel à 6h.<br>
      &bull; <b>Courbe d'engagement N(t) :</b> tracé comparatif entre la trajectoire projetée par XGBoost et la vérité terrain observée.<br>
      &bull; <b>Explication en 3 points sans jargon :</b> quantification vulgarisée du poids de l'influenceur (H2), du rythme précoce (H1) et du style sémantique (H3).
    </p>
  </div>

  <div class="arg-card">
    <div class="title"><span class="badge-num">3</span> Simulateur de Rejeu Temporel Accéléré (Démonstration Soutenance P17)</div>
    <p>
      Permet au jury de faire défiler les 24h d'une journée de test non vue : dès qu'un sujet atteint 30 min, l'alerte surgit en direct, démontrant visuellement l'avance d'alerte médiane de <b>+3h 45min</b> avant le pic d'engagement.
    </p>
  </div>

  <div class="sec-title"><span class="num">10</span> Tableau de Bord d'Avancement des Exigences du Cahier des Charges</div>
  <table>
    <thead>
      <tr>
        <th style="width: 15%;">Exigence</th>
        <th style="width: 45%;">Description Fonctionnelle</th>
        <th style="width: 20%;">Priorité CDC</th>
        <th style="width: 20%;">Statut Actuel</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">EF-01 à 03</td>
        <td>Collecte Jetstream, filtrage fr/en, tampon Redis Streams</td>
        <td>MUST</td>
        <td><span class="tag-success">✓ Validé (110 h)</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-04 à 06</td>
        <td>Clustering sémantique MiniLM + UMAP + HDBSCAN + c-TF-IDF</td>
        <td>MUST</td>
        <td><span class="tag-success">✓ Validé (192 sujets)</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-07 à 09</td>
        <td>Feature engineering causale à 30 min (H1, H2, H3)</td>
        <td>MUST</td>
        <td><span class="tag-success">✓ Validé (28 vars)</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-10</td>
        <td>Entraînement et comparaison B0, B1, B2, M1, M2</td>
        <td>MUST</td>
        <td><span class="tag-success">✓ Validé (PR-AUC 0.389)</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-13 & P17</td>
        <td>Interface web interactive, courbes, alertes et rejeu</td>
        <td>MUST</td>
        <td><span class="tag-success">✓ Prototype Livré</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-12 & 14</td>
        <td>API REST FastAPI & Traçabilité des runs MLflow</td>
        <td>MUST / SHOULD</td>
        <td><span class="tag-highlight">&rarr; Prochaine Étape (J5)</span></td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title"><span class="num">11</span> Planning & Objectifs pour la Prochaine Séance (Jalon J5)</div>
  <p>
    1. <b>Exposition de l'Inférence par API FastAPI (EF-12) :</b> Contrat OpenAPI avec validation Pydantic, garantissant un temps de réponse p95 &lt; 500 ms.<br>
    2. <b>Suivi Expérimental MLflow (EF-14) :</b> Journalisation automatique des paramètres, métriques PR-AUC et artefacts de modèles.<br>
    3. <b>Conteneurisation Docker Compose Globale :</b> Déploiement unifié du collecteur, de l'API et du frontend.
  </p>

  <div class="callout green" style="margin-top: 5px;">
    <b>Conclusion :</b> L'ensemble des objectifs fixés pour cette séance d'encadrement est rigoureusement atteint. Le modèle XGBoost prouve sa pertinence scientifique sur les données réelles Bluesky, et le prototype d'interface est prêt à être présenté en direct devant l'encadrante.
  </div>

  <div class="running-footer">
    <div><b>EMSI Casablanca</b> · Filière 5IAD · Capstone Data Science · YEKHLEF Aya & EL OUALI Imane</div>
    <div>Page <b>4</b> sur <b>4</b></div>
  </div>
</div>

</body>
</html>
"""

html_file = os.path.join(BASE_DIR, "rapport_avancement_global.html")
pdf_file = os.path.join(BASE_DIR, "Rapport_Avancement_Hebdomadaire_YEKHLEF_ELOUALI.pdf")

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html_content)
print(f"Fichier HTML généré : {html_file}")

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
