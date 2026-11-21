"""Script d'Analyse Exploratoire Préliminaire (EDA) - PFA Prédiction de la Viralité
Élèves-ingénieures : YEKHLEF Aya & EL OUALI Imane (5IAD · G2 · EMSI Casablanca)
Encadrante : Soukaina GOURAGUINE
Génère les graphiques d'analyse pour la séance d'encadrement (Jalon J2).
"""
import glob
import os
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# Config style graphique
plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['font.size'] = 11

os.makedirs('eda_plots', exist_ok=True)
print("=== ANALYSE EXPLORATOIRE DES DONNÉES BLUESKY (JALON J2) ===")

# 1. Chargement d'un échantillon représentatif d'événements
raw_files = sorted(glob.glob('data/raw/*/*/*.parquet'))
print(f"Chargement de {len(raw_files)} fichiers d'événements Parquet...")

# On charge les fichiers (par exemple les 25 premiers fichiers pour aller vite et avoir ~300k lignes)
sample_files = raw_files[:30]
df_events = pd.concat([pd.read_parquet(f) for f in sample_files], ignore_index=True)
print(f"Total événements analysés dans l'échantillon : {len(df_events):,}")

# --- FIGURE 1 : Répartition des événements & Médias ---
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Graphique 1.1 : Types d'événements
kind_counts = df_events['kind'].value_counts()
colors = ['#3498db', '#e74c3c', '#2ecc71']
axes[0].bar(kind_counts.index, kind_counts.values, color=colors, edgecolor='black', alpha=0.85)
axes[0].set_title("Répartition des types d'événements collectés", fontsize=13, fontweight='bold')
axes[0].set_ylabel("Nombre d'événements")
for i, v in enumerate(kind_counts.values):
    axes[0].text(i, v + max(kind_counts.values)*0.02, f"{v:,}\n({v/len(df_events)*100:.1f}%)", 
                 ha='center', fontweight='bold')

# Graphique 1.2 : Présence de Médias et Liens dans les posts racines
df_posts = df_events[df_events['kind'] == 'post'].copy()
has_media = df_posts['has_media'].fillna(False).astype(bool).sum()
has_link = df_posts['has_link'].fillna(False).astype(bool).sum()
text_only = len(df_posts) - (has_media | has_link).sum()

categories = ['Texte seul', 'Avec Média (Img/Vid)', 'Avec Lien Web']
counts = [text_only, has_media, has_link]
axes[1].pie(counts, labels=categories, autopct='%1.1f%%', startangle=140, 
            colors=['#95a5a6', '#9b59b6', '#f39c12'], explode=(0.02, 0.05, 0.05))
axes[1].set_title(f"Format des publications racines (Total : {len(df_posts):,})", fontsize=13, fontweight='bold')

plt.tight_layout()
fig.savefig('eda_plots/01_repartition_evenements_formats.png', dpi=300)
plt.close(fig)
print("-> Graphique 1 généré : eda_plots/01_repartition_evenements_formats.png")

# --- FIGURE 2 : Distribution des Abonnés (Influenceurs vs Comptes Ordinaires) ---
author_files = sorted(glob.glob('data/authors/*/*.parquet'))
print(f"Chargement des profils d'auteurs ({len(author_files)} fichiers)...")
df_authors = pd.concat([pd.read_parquet(f) for f in author_files[:30]], ignore_index=True)
df_authors = df_authors.drop_duplicates(subset=['author_hash'])
print(f"Total profils d'auteurs uniques analysés : {len(df_authors):,}")

fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Graphique 2.1 : Histogramme log-scale des followers
followers = df_authors['followers'].clip(lower=1)
axes[0].hist(np.log10(followers), bins=40, color='#16a085', edgecolor='black', alpha=0.8)
axes[0].set_title("Distribution du nombre d'abonnés (Échelle Log10)", fontsize=13, fontweight='bold')
axes[0].set_xlabel("Log10(Nombre d'abonnés)")
axes[0].set_ylabel("Nombre d'auteurs")
ticks = [0, 1, 2, 3, 4, 5]
axes[0].set_xticks(ticks)
axes[0].set_xticklabels(['1', '10', '100', '1k', '10k', '100k+'])

# Graphique 2.2 : Boxplot et percentiles clés
axes[1].boxplot(followers, vert=False, showfliers=False, patch_artist=True,
                boxprops=dict(facecolor='#1abc9c', color='black'),
                medianprops=dict(color='red', linewidth=2))
axes[1].set_title(f"Percentiles clés des abonnés (Médiane = {int(followers.median())})", fontsize=13, fontweight='bold')
axes[1].set_xlabel("Nombre d'abonnés (zoom hors valeurs extrêmes)")

p50, p75, p90, p99 = np.percentile(followers, [50, 75, 90, 99])
stats_text = f"Médiane (P50) : {int(p50):,} abonnés\nP75 : {int(p75):,} abonnés\nP90 : {int(p90):,} abonnés\nP99 (Top 1%) : {int(p99):,} abonnés\nMax : {int(followers.max()):,} abonnés"
axes[1].text(0.60, 0.45, stats_text, transform=axes[1].transAxes, fontsize=11,
             bbox=dict(boxstyle='round,pad=0.8', facecolor='white', edgecolor='#bdc3c7'))

plt.tight_layout()
fig.savefig('eda_plots/02_distribution_influence_auteurs.png', dpi=300)
plt.close(fig)
print("-> Graphique 2 généré : eda_plots/02_distribution_influence_auteurs.png")

# --- FIGURE 3 : Courbes réelles de diffusion / engagement cumulé (Figure 1 du CDC) ---
# Trouver les posts qui ont reçu le plus de likes/reposts dans cet échantillon
engagement_events = df_events[df_events['kind'].isin(['like', 'repost'])].copy()
top_posts = engagement_events['post_id'].value_counts().head(3)

print("Top 3 posts les plus viraux de l'échantillon :")
for pid, cnt in top_posts.items():
    print(f"  Post {pid[:10]}... : {cnt} interactions")

fig, ax = plt.subplots(figsize=(10, 6))

colors_curve = ['#e74c3c', '#2980b9', '#8e44ad']
for idx, (pid, total_inter) in enumerate(top_posts.items()):
    post_events = engagement_events[engagement_events['post_id'] == pid].sort_values('time_us')
    t0 = post_events['time_us'].iloc[0]
    # Temps écoulé en minutes
    minutes = (post_events['time_us'] - t0) / (60 * 1_000_000)
    cumulative_engagement = np.arange(1, len(minutes) + 1)
    ax.plot(minutes, cumulative_engagement, label=f"Post viral #{idx+1} (Total: {total_inter} actions)", 
            color=colors_curve[idx], linewidth=2.5)

# Zone d'observation des 30 premières minutes (Fenêtre d'observation du CDC)
ax.axvspan(0, 30, color='gray', alpha=0.18, label="Fenêtre d'observation (T0 -> T0+30 min)")
ax.axvline(30, color='black', linestyle='--', linewidth=1.5)
ax.text(31, ax.get_ylim()[1]*0.75, "Fin d'observation\n(30 min)\nPrédire la suite !", 
        fontweight='bold', color='#c0392b')

ax.set_title("Dynamique temporelle réelle de l'engagement (Bluesky)\nPreuve de faisabilité pour la prédiction de viralité", 
             fontsize=13, fontweight='bold')
ax.set_xlabel("Temps écoulé depuis la 1ère interaction (Minutes)")
ax.set_ylabel("Volume cumulé d'engagement N(t)")
ax.legend(loc='lower right', frameon=True)

plt.tight_layout()
fig.savefig('eda_plots/03_dynamique_engagement_viralite.png', dpi=300)
plt.close(fig)
print("-> Graphique 3 généré : eda_plots/03_dynamique_engagement_viralite.png")

print("=== ANALYSE TERMINÉE AVEC SUCCÈS ! ===")
