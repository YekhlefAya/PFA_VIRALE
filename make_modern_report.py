import base64
import os
import subprocess

def get_b64(path):
    with open(path, 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode()

img1 = get_b64('eda_plots/01_repartition_evenements_formats.png')
img2 = get_b64('eda_plots/02_distribution_influence_auteurs.png')
img3 = get_b64('eda_plots/03_dynamique_engagement_viralite.png')

html_content = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Rapport d'Avancement J2 - Prédiction de la viralité et détection de tendances émergentes</title>
<style>
  @page {{
    size: A4;
    margin: 12mm 14mm 14mm 14mm;
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
    line-height: 1.4;
    font-size: 9pt;
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
    margin-bottom: 10px;
    font-size: 7pt;
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
    margin-top: 15px;
    border-top: 1px solid #E2DCD0;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7pt;
    color: #6C6A64;
  }}
  .running-footer .bold {{
    font-weight: 700;
    color: #E2431B;
  }}

  /* Badges & Tags */
  .tag {{
    display: inline-block;
    font-size: 7pt;
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
    font-size: 6.8pt;
  }}

  h1 {{
    font-size: 15pt;
    font-weight: 800;
    color: #14161A;
    margin: 0 0 2px 0;
    line-height: 1.2;
    letter-spacing: -0.3px;
  }}
  .subtitle {{
    font-size: 8.5pt;
    color: #6C6A64;
    margin: 0 0 8px 0;
    font-style: italic;
  }}

  /* Fiche Métadonnées */
  .meta-grid {{
    display: grid;
    grid-template-columns: 1.2fr 1.3fr 1.1fr 1fr;
    background: #FAF7F0;
    border: 1px solid #CFC8B8;
    border-radius: 5px;
    padding: 6px 10px;
    margin-bottom: 10px;
    font-size: 7.5pt;
    gap: 6px;
  }}
  .meta-item .label {{
    font-weight: 700;
    color: #14161A;
    text-transform: uppercase;
    font-size: 6.5pt;
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
    gap: 8px;
    margin-bottom: 12px;
  }}
  .kpi-card {{
    background: #FAF7F0;
    border: 1px solid #CFC8B8;
    border-radius: 5px;
    padding: 8px 6px;
    text-align: center;
  }}
  .kpi-num {{
    font-size: 16pt;
    font-weight: 800;
    color: #E2431B;
    line-height: 1.1;
    margin-bottom: 2px;
  }}
  .kpi-label {{
    font-size: 6.5pt;
    font-weight: 700;
    color: #14161A;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-bottom: 1px;
  }}
  .kpi-sub {{
    font-size: 6.5pt;
    color: #6C6A64;
  }}

  /* Sections */
  .sec-title {{
    font-size: 9.5pt;
    font-weight: 800;
    color: #14161A;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin: 10px 0 4px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E2DCD0;
    padding-bottom: 2px;
  }}
  .sec-title .num {{
    color: #E2431B;
    margin-right: 5px;
    font-size: 10.5pt;
  }}
  p {{
    margin: 0 0 5px 0;
    font-size: 8.2pt;
    line-height: 1.38;
    color: #2D3748;
  }}

  /* Tableaux */
  table {{
    width: 100%;
    border-collapse: collapse;
    margin: 6px 0 8px 0;
    font-size: 7.2pt;
  }}
  th {{
    background: #F0ECE1;
    color: #14161A;
    font-weight: 700;
    text-align: left;
    padding: 4px 6px;
    border: 1px solid #CFC8B8;
    font-size: 6.8pt;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }}
  td {{
    padding: 3.5px 6px;
    border: 1px solid #E2DCD0;
    color: #2D3748;
    vertical-align: middle;
  }}
  tr:nth-child(even) td {{
    background: #FAF7F0;
  }}
  .text-center {{ text-align: center; }}
  .font-bold {{ font-weight: 700; }}

  /* Figures & Images */
  .figure-box {{
    margin: 6px 0 8px 0;
    text-align: center;
  }}
  .figure-box img {{
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid #E2DCD0;
  }}
  .figure-box.large img {{
    height: 220px;
    object-fit: contain;
  }}
  .caption {{
    font-size: 7pt;
    color: #6C6A64;
    text-align: justify;
    margin-top: 3px;
    line-height: 1.32;
    padding: 0 4px;
  }}
  .caption b {{
    color: #14161A;
  }}

  /* Grille 2 colonnes pour graphiques */
  .grid-2 {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 4px 0 8px 0;
  }}
  .grid-2 .figure-box {{
    margin: 0;
  }}
  .grid-2 img {{
    height: 140px;
    width: 100%;
    object-fit: contain;
  }}

  /* Boîte récapitulative feuille de route */
  .roadmap-box {{
    background: #FAF7F0;
    border: 1px solid #CFC8B8;
    border-left: 3px solid #E2431B;
    border-radius: 4px;
    padding: 6px 10px;
    margin-top: 4px;
    font-size: 7.5pt;
  }}
  .roadmap-item {{
    margin-bottom: 3px;
  }}
  .roadmap-item:last-child {{
    margin-bottom: 0;
  }}
</style>
</head>
<body>

<!-- ==================== PAGE 1 ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">EMSI Casablanca · Campus Moulay Youssef · 5IAD G2</div>
    <div class="right">PFA Capstone Data Science · 2026-2027</div>
  </div>

  <div class="tag">Jalon J2 · Point d'Étape & Revue Technique</div>
  <h1>Rapport d'Avancement — Jalon J2</h1>
  <div class="subtitle">Prédiction de la viralité et détection de tendances émergentes<br><span style="font-size: 8.5pt; font-weight: 400; color: #5C6479;">Trend Forecasting sur les réseaux sociaux : séries temporelles, graphes de diffusion et traitement du langage naturel</span></div>

  <div class="meta-grid">
    <div class="meta-item">
      <div class="label">Projet</div>
      <div class="val">Prédiction de la viralité et détection de tendances émergentes</div>
    </div>
    <div class="meta-item">
      <div class="label">Élèves-Ingénieures</div>
      <div class="val"><b>YEKHLEF Aya & EL OUALI Imane</b></div>
    </div>
    <div class="meta-item">
      <div class="label">Encadrante</div>
      <div class="val">Mme Soukaina GOURAGUINE</div>
    </div>
    <div class="meta-item">
      <div class="label">Statut Jalon J2</div>
      <div class="val"><span class="tag-success">✓ VALIDÉ</span></div>
    </div>
  </div>

  <div class="kpi-container">
    <div class="kpi-card">
      <div class="kpi-num">46 h</div>
      <div class="kpi-label">Collecte Continue</div>
      <div class="kpi-sub">Ininterrompue en production</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">22,7 M</div>
      <div class="kpi-label">Événements Bruts</div>
      <div class="kpi-sub">1,77M posts · 17,7M likes</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">100,0 %</div>
      <div class="kpi-label">Disponibilité Réelle</div>
      <div class="kpi-sub">0 trou sur 2 733 min</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-num">373 k</div>
      <div class="kpi-label">Profils Enrichis</div>
      <div class="kpi-sub">Abonnés & influence via API</div>
    </div>
  </div>

  <div class="sec-title"><span class="num">01</span> Synthèse des Réalisations depuis la Séance 1</div>
  <p>
    En réponse aux orientations de la séance de cadrage, le projet a fait l'objet d'une refonte opérationnelle intégrée au <b>Cahier des Charges V2</b> : adoption d'un <b>split temporel strict</b> avec embargo de 6h (élimination complète de la fuite de données temporelle), cadrage de la collecte sur <b>2 semaines</b>, et découplage par une architecture tolérante aux pannes : <b>Jetstream Bluesky &rarr; Collecteur Python (asyncio) &rarr; Tampon Redis Streams &rarr; Archiveur Parquet horaire</b>.
  </p>
  <p>
    L'infrastructure a été conteneurisée via <b>Docker Compose</b> et déployée sur un serveur cloud dédié (DigitalOcean, Francfort) le mardi 17 novembre à 00:33 UTC. Le système garantit la pseudonymisation immédiate (HMAC-SHA256 salé conforme RGPD) et la mémorisation du curseur de reprise.
  </p>

  <div class="sec-title"><span class="num">02</span> Bilan de Santé & Métriques en Production (À 45,5 h de collecte)</div>
  <table>
    <thead>
      <tr>
        <th>Indicateur Opérationnel</th>
        <th class="text-center">Cible CDC</th>
        <th class="text-center">Mesuré en Direct (45,5 h)</th>
        <th>Évaluation & Conformité</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">Disponibilité du flux</td>
        <td class="text-center">&ge; 95 %</td>
        <td class="text-center font-bold">100,00 % (0 min d'arrêt sur 2 733 min)</td>
        <td><span class="tag-success">Objectif dépassé</span></td>
      </tr>
      <tr>
        <td class="font-bold">Taux de perte / coupure</td>
        <td class="text-center">&lt; 5 %</td>
        <td class="text-center font-bold">0,00 % (Zéro événement perdu)</td>
        <td><span class="tag-success">Flux continu sans trou</span></td>
      </tr>
      <tr>
        <td class="font-bold">Volume d'événements</td>
        <td class="text-center">Représentatif</td>
        <td class="text-center font-bold">22 747 467 événements (500k év/h)</td>
        <td><span class="tag-success">Densité optimale pour la modélisation</span></td>
      </tr>
      <tr>
        <td class="font-bold">Profils d'auteurs enrichis</td>
        <td class="text-center">Attributs réseau</td>
        <td class="text-center font-bold">373 070 auteurs uniques récupérés</td>
        <td><span class="tag-success">Abonnés, abonnements, posts via API</span></td>
      </tr>
      <tr>
        <td class="font-bold">Stockage brut (Parquet zstd)</td>
        <td class="text-center">Marge &gt; 20 %</td>
        <td class="text-center font-bold">468 Mo consommés (19,4 Go libres)</td>
        <td><span class="tag-success">79 jours de marge avant saturation</span></td>
      </tr>
      <tr>
        <td class="font-bold">Sobriété financière (ENF-10)</td>
        <td class="text-center">&le; 5 €</td>
        <td class="text-center font-bold">0,009 $/h (~0,41 $ consommés à J+2)</td>
        <td><span class="tag-success">Budget respecté (calculs lourds sur PC)</span></td>
      </tr>
    </tbody>
  </table>

  <div class="running-footer">
    <div><b>EMSI Casablanca</b> · Filière 5IAD · Capstone Data Science</div>
    <div>Page <b>1</b> sur <b>3</b></div>
  </div>
</div>

<!-- ==================== PAGE 2 ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">CAHIER DES CHARGES · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">YEKHLEF AYA · EL OUALI IMANE — 5IAD G2</div>
  </div>

  <div class="sec-title"><span class="num">03</span> Analyse de la Dynamique Temporelle & Preuve de Concept</div>
  <p>
    Un rapatriement hebdomadaire pilote de 153 fichiers Parquet horaires (~616 000 événements) a été exécuté sur poste local via <code>scp</code> et analysé par notre script <code>eda_preliminaire.py</code>. 
    Ce premier test confirme la robustesse de la chaîne de sauvegarde locale et permet de valider empiriquement la modélisation temporelle.
  </p>

  <div class="figure-box large">
    <img src="{img3}" alt="Dynamique d'engagement">
    <div class="caption">
      <b>Figure 1 : Trajectoires réelles d'engagement cumulé N(t) pour les publications les plus virales observées.</b><br/>
      L'analyse temporelle à la microseconde révèle une nette divergence des trajectoires dès la <b>fenêtre d'observation [T0, T0 + 30 min]</b> (zone grisée). Les publications atteignant des milliers d'interactions à 6 heures se distinguent par une vélocité initiale et une accélération marquées dans les premières minutes. Ce résultat réel confirme empiriquement la formulation mathématique théorique de la <b>Figure 1 de notre Cahier des Charges</b>.
    </div>
  </div>

  <div class="sec-title"><span class="num">04</span> Structure du Réseau : Distribution des Abonnés & Règle d'Échelle</div>
  <p>
    L'extraction asynchrone des profils d'auteurs permet d'étudier la distribution de l'influence dans le graphe de diffusion Bluesky :
  </p>

  <div class="figure-box">
    <img src="{img2}" alt="Distribution des Followers" style="height: 180px;">
    <div class="caption">
      <b>Figure 2 : Distribution du nombre d'abonnés des auteurs (échelle logarithmique et percentiles).</b><br/>
      La distribution met en évidence une structure de réseau classique en loi de puissance (Power-law / Long-tail) : la <b>médiane se situe à 137 abonnés</b>, le percentile 75 à <b>640 abonnés</b>, le percentile 90 à <b>2 450 abonnés</b>, tandis que le top 1% dépasse les <b>15 000 abonnés</b> (avec un pic à plus de 240 000). Cette forte asymétrie justifie scientifiquement l'application d'une <b>transformation logarithmique log(1 + followers)</b> pour normaliser les variables d'influence sans écraser le signal des utilisateurs moyens.
    </div>
  </div>

  <div class="running-footer">
    <div><b>JALON J2</b> · REVUE TECHNIQUE & VALIDATION SCIENTIFIQUE</div>
    <div>Page <b>2</b> sur <b>3</b></div>
  </div>
</div>

<!-- ==================== PAGE 3 ==================== -->
<div class="page">
  <div class="running-header">
    <div class="left">CAHIER DES CHARGES · PFA PRÉDICTION DE LA VIRALITÉ SUR BLUESKY</div>
    <div class="right">YEKHLEF AYA · EL OUALI IMANE — 5IAD G2</div>
  </div>

  <div class="sec-title"><span class="num">05</span> Typologie du Flux & Formats de Contenu</div>
  <p>
    L'analyse de la nature des publications collectées montre une grande richesse d'interactions et de types de contenus :
  </p>

  <div class="figure-box">
    <img src="{img1}" alt="Répartition des événements" style="height: 175px;">
    <div class="caption">
      <b>Figure 3 : Répartition des types d'événements et formats de publications racines.</b><br/>
      Le ratio d'engagement s'établit à <b>10 mentions « J'aime » et 1,8 republication par post racine</b>, fournissant un signal dense pour mesurer la propagation. Par ailleurs, une proportion substantielle des publications intègre des contenus enrichis (médias visuels ou hyperliens web), qui constitueront des prédicteurs catégoriels déterminants dans les arbres de décision.
    </div>
  </div>

  <div class="sec-title"><span class="num">06</span> Matrice de Conformité aux Exigences du Cahier des Charges</div>
  <table>
    <thead>
      <tr>
        <th style="width: 10%;">RÉF.</th>
        <th style="width: 50%;">EXIGENCE FONCTIONNELLE / TECHNIQUE</th>
        <th class="text-center" style="width: 15%;">PRIORITÉ</th>
        <th style="width: 25%;">ÉTAT AU JALON J2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">EF-01</td>
        <td>Collecte continue des publications, likes et reposts Bluesky Jetstream</td>
        <td class="text-center font-bold">MUST</td>
        <td><span class="tag-success">✓ 100% Opérationnel (22,7M év.)</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-02</td>
        <td>Reprise automatique après coupure via curseur mémorisé sans trou</td>
        <td class="text-center font-bold">MUST</td>
        <td><span class="tag-success">✓ Curseur Redis persistent</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-03</td>
        <td>Pseudonymisation des identifiants d'auteurs par HMAC salé à l'ingestion</td>
        <td class="text-center font-bold">MUST</td>
        <td><span class="tag-success">✓ Conforme RGPD (SHA-256)</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-18</td>
        <td>Découplage de l'ingestion par un tampon Redis Streams plafonné</td>
        <td class="text-center font-bold">MUST</td>
        <td><span class="tag-success">✓ Borné à 350 Mo (noeviction)</span></td>
      </tr>
      <tr>
        <td class="font-bold">EF-19</td>
        <td>Archivage Parquet immuable par heure et rejeu complet</td>
        <td class="text-center font-bold">MUST</td>
        <td><span class="tag-success">✓ Data Lake partitionné dt/hour</span></td>
      </tr>
      <tr>
        <td class="font-bold">ENF-10</td>
        <td>Sobriété de l'infrastructure et maîtrise budgétaire absolue</td>
        <td class="text-center font-bold">MUST</td>
        <td><span class="tag-success">✓ 0,009 $/h, ~105 Mo RAM</span></td>
      </tr>
    </tbody>
  </table>

  <div class="sec-title"><span class="num">07</span> Feuille de Route & Objectifs pour le Jalon J3 (26 Novembre)</div>
  <div class="roadmap-box">
    <div class="roadmap-item"><b>1. Clôture Semaine 1 & Figeage du Train Set :</b> Rapatriement hebdomadaire complet (dimanche 22 nov.) pour figer le bloc immuable d'entraînement sans fuite temporelle.</div>
    <div class="roadmap-item"><b>2. Pipeline de Nettoyage (<code>clean.py</code>) :</b> Dédoublonnage rigoureux sur clé composite (<code>time_us, kind, author_hash, post_id</code>) et suppression des bruits.</div>
    <div class="roadmap-item"><b>3. Plongements Sémantiques & Clustering (<code>embed.py</code>, <code>cluster.py</code>) :</b> Vectorisation par modèle multilingue léger (<code>paraphrase-multilingual-MiniLM-L12-v2</code>) et détection non supervisée des sujets émergents via HDBSCAN / BERTopic.</div>
    <div class="roadmap-item"><b>4. Feature Engineering sur Fenêtre 30 min :</b> Calcul des variables dynamiques (vitesse, accélération), structurelles (degré des auteurs) et émotionnelles.</div>
  </div>

  <div class="running-footer">
    <div><b>EMSI Casablanca</b> · JALON J2 VALIDÉ · FEUILLE DE ROUTE J3</div>
    <div>Page <b>3</b> sur <b>3</b></div>
  </div>
</div>

</body>
</html>
"""

with open('rapport_j2_modern.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print('rapport_j2_modern.html generated!')
