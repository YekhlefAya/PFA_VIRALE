# Collecteur Bluesky — PFA « Prédiction de la viralité »

Architecture (cahier des charges v1.1) : **Jetstream → collecteur → Redis Streams → archiveur → Parquet horaire**.
Le serveur ne fait que collecter et archiver ; le traitement se fait sur vos PC.

- Garde les **posts racine** en français et en anglais, puis les **j'aime / republications** qui les visent (12 h).
- **Pseudonymisation à l'ingestion** : auteurs et posts sont remplacés par un HMAC salé. Aucun identifiant en clair.
- Récupère le **nombre d'abonnés** des auteurs (API publique) pour les variables d'influence (désactivable : `ENRICH=0`).
- Reprend seul après une coupure (curseur Jetstream stocké dans Redis ; redémarrage automatique Docker).
- Redis est plafonné à 700 Mo ; les données durables sont dans `data/` (Parquet, compression zstd).

## Étapes (une seule fois)

1. **Créer le serveur** (console Hetzner) : Ubuntu 24.04, le plus petit modèle avec 2 vCPU / 4 Go,
   ajoute ta clé SSH, **sans** l'option sauvegardes. Vérifie le prix affiché avant de valider. Note l'adresse IP.
2. **Te connecter** depuis ton PC : `ssh root@ADRESSE_IP`
3. **Installer Docker** (sur le serveur) : `curl -fsSL https://get.docker.com | sh`
4. **Copier ce dossier** (depuis ton PC, pas depuis le serveur) : `scp -r collecteur-bluesky root@ADRESSE_IP:~/collecteur`
5. **Créer le fichier de configuration** (sur le serveur) :
   `cd ~/collecteur && echo "PSEUDO_SALT=$(openssl rand -hex 16)" > .env && cat .env`
   → **copie cette ligne dans un endroit sûr sur ton PC** (sel de pseudonymisation, ne jamais le publier).
6. **Lancer** : `docker compose up -d --build` (le premier démarrage prend 1 à 2 minutes).

## Vérifier

```
docker compose ps                                   # 3 services « running »
docker compose logs --tail 30 collector archiver    # « Connecté à wss://... », puis un bilan chaque minute
docker compose exec archiver python check.py        # volumes, trous, taille, projection disque
docker compose exec redis redis-cli info memory | grep used_memory_human
```
Les premiers fichiers Parquet apparaissent après ~5 minutes (`ls data/raw/*/*`).

**Contrôle à J+2** : lance `check.py` et regarde (1) les minutes sans événement (< 5 %), (2) les Mo par jour et la
projection disque, (3) le nombre de posts par jour.

## Chaque semaine : récupérer les données sur ton PC

- Mac / Linux / WSL : `rsync -avz --exclude '*.tmp' root@ADRESSE_IP:~/collecteur/data/ ./data/`
- Windows (PowerShell) : `scp -r root@ADRESSE_IP:~/collecteur/data ./`
  (pour ne pas tout retélécharger : `scp -r "root@ADRESSE_IP:~/collecteur/data/raw/dt=2026-11-23" ./data/raw/`)

Puis `DATA_DIR=./data python check.py` pour contrôler la copie. Les fichiers `.parquet` ne sont écrits qu'une
fois complets. **Retire les doublons** au traitement (clé : `time_us, kind, author_hash, post_id`).

## Fin de la collecte

1. Télécharge **tout** `data/` et vérifie qu'il s'ouvre sur ton PC.
2. `docker compose down` (le serveur continue d'être facturé tant qu'il existe).
3. Console Hetzner → ton serveur → **Delete**. Une fois supprimé, tout ce qu'il contenait est perdu.

## Dépannage

| Symptôme | Piste |
|---|---|
| `PSEUDO_SALT manquant` | le fichier `.env` n'existe pas ou n'est pas dans `~/collecteur` |
| Pas de fichier Parquet après 10 min | `docker compose logs archiver collector` ; la ligne « Connecté à » doit apparaître |
| « Déconnexion ... » en boucle | le collecteur essaie les autres serveurs Jetstream tout seul ; sinon vérifie internet sur le serveur |
| Disque presque plein | télécharge les anciens jours puis supprime-les du serveur (`rm -rf data/raw/dt=AAAA-MM-JJ`) |
| Redis proche de 700 Mo | l'archiveur est arrêté : `docker compose restart archiver` |
| Pas d'abonnés dans `data/authors` | normal si `ENRICH=0` ou si l'API publique est indisponible ; la collecte continue |

## Colonnes du Parquet (`data/raw`)

`time_us` (microsecondes UTC), `kind` (post / like / repost), `author_hash`, `post_id` (pour un like ou une
republication : le post visé), `text`, `langs`, `has_media`, `has_link` (posts seulement).
`data/authors` : `author_hash, followers, follows, posts, fetched_us`.
