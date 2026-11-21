"""Prototype de bout en bout : brut -> nettoyage -> plongements -> sujets -> variables -> modèles.

Usage :
  python run_prototype.py --data-dir ./data            # vraies données rapatriées du serveur
  python run_prototype.py --synthetic                  # test de la chaîne sur données synthétiques

Sorties dans --out (défaut outputs/) : results.csv, results.md, topics.csv, feature_importance.csv,
pr_curves.png, run_report.json.
"""
from __future__ import annotations

import argparse
import json
import os
import time

import numpy as np
import pandas as pd

from modeling.train import permutation_importance_m1, run_experiments
from pipeline import io as pio
from pipeline.clean import clean_events
from pipeline.embed import embed_texts
from pipeline.features import FeatureConfig, build_topic_table
from pipeline.labels import apply_labels, fit_viral_threshold, temporal_split, train_val_split
from pipeline.topics import detect_topics, name_topics

DAY_US = 86_400_000_000


def md_table(df: pd.DataFrame, floatfmt: str = "{:.3f}") -> str:
    cols = list(df.columns)
    lines = ["| " + " | ".join(cols) + " |", "|" + "|".join("---" for _ in cols) + "|"]
    for _, r in df.iterrows():
        lines.append("| " + " | ".join(floatfmt.format(v) if isinstance(v, (float, np.floating)) else str(v) for v in r) + " |")
    return "\n".join(lines)


def plot_pr(test: pd.DataFrame, preds: dict, path: str) -> None:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from sklearn.metrics import average_precision_score, precision_recall_curve

    fig, ax = plt.subplots(figsize=(7, 5))
    for name in ("B0 prévalence", "B1 règle de vélocité", "B2 logistique temporelle", "M1 toutes variables", "M2 toutes variables"):
        pr, rc, _ = precision_recall_curve(test["is_viral"], preds[name])
        ax.plot(rc, pr, label=f"{name} (AP={average_precision_score(test['is_viral'], preds[name]):.2f})", lw=2)
    ax.set(xlabel="Rappel", ylabel="Précision", title="Courbes précision-rappel sur le bloc de test", ylim=(0, 1.02))
    ax.legend(loc="upper right", fontsize=8)
    fig.tight_layout()
    fig.savefig(path, dpi=150)
    plt.close(fig)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--data-dir", help="dossier data/ rapatrié (raw/ et authors/)")
    ap.add_argument("--synthetic", action="store_true", help="utiliser des données synthétiques")
    ap.add_argument("--out", default="outputs")
    ap.add_argument("--seed", type=int, default=42)
    ap.add_argument("--emb-backend", default="auto", choices=["auto", "sbert", "hash", "tfidf"],
                    help="auto = MiniLM si dispo, sinon hachage+projection (causal). tfidf = NON causal, comparaison seulement")
    ap.add_argument("--min-cluster-size", type=int, default=15)
    ap.add_argument("--min-samples", type=int, default=25,
                    help="HDBSCAN : plus grand = sujets plus lissés, moins fragmentés (à régler sur vos plongements)")
    ap.add_argument("--min-posts", type=int, default=15, help="posts minimum dans la fenêtre de 30 min")
    ap.add_argument("--test-start-day", type=float, default=7.0, help="jour (depuis le 1er événement) où commence le test")
    ap.add_argument("--max-files", type=int, default=None, help="limite du nombre de fichiers parquet pour préserver la RAM")
    ap.add_argument("--max-posts", type=int, default=None, help="limite du nombre de posts pour le clustering HDBSCAN")
    ap.add_argument("--viral-quantile", type=float, default=0.95, help="0.90 = repli du point de décision J4")
    ap.add_argument("--embargo-h", type=float, default=6.0, help="durée de l'embargo temporel en heures (CDC P4)")
    ap.add_argument("--n-topics", type=int, default=800, help="synthétique : nombre de sujets")
    ap.add_argument("--days", type=int, default=14, help="synthétique : durée")
    ap.add_argument("--n-boot", type=int, default=500)
    ap.add_argument("--oracle-topics", action="store_true",
                    help="synthétique : utilise les vrais sujets au lieu de HDBSCAN (valide variables/modèles, rapide)")
    args = ap.parse_args()
    if not args.data_dir and not args.synthetic:
        ap.error("donne --data-dir ou --synthetic")
    os.makedirs(args.out, exist_ok=True)
    rep: dict = {"args": vars(args)}
    t_all = time.time()

    # 1. chargement ---------------------------------------------------------------------------
    truth = None
    if args.synthetic:
        from pipeline.synthetic import generate
        events, authors, truth = generate(n_topics=args.n_topics, days=args.days, seed=args.seed)
        rep["source"] = "synthétique (aucune conclusion scientifique)"
        print(f"[1] chargé : {len(events):,} événements, {len(authors):,} profils")
        clean, rep["clean"] = clean_events(events)
        print(f"[2] nettoyé : {rep['clean']}")
        posts = clean[clean["kind"] == "post"].reset_index(drop=True)
        if args.max_posts is not None and len(posts) > args.max_posts:
            step = max(1, len(posts) // args.max_posts)
            posts = posts.iloc[::step].iloc[:args.max_posts].reset_index(drop=True)
            print(f"[2b] échantillon posts : {len(posts):,} posts répartis uniformément dans le temps (sur {rep['clean']['posts']:,})")
        eng = clean[clean["kind"] != "post"][["time_us", "kind", "author_hash", "post_id"]]
        data_start, data_end = int(clean["time_us"].min()), int(clean["time_us"].max())
    else:
        from pipeline.clean import clean_posts_and_eng
        posts_raw, eng_raw = pio.load_events_streaming(args.data_dir, max_files=args.max_files, max_posts=args.max_posts)
        authors = pio.load_authors(args.data_dir, max_files=args.max_files)
        posts, eng, rep["clean"] = clean_posts_and_eng(posts_raw, eng_raw)
        data_start, data_end = int(posts["time_us"].min()), int(posts["time_us"].max())
        rep["source"] = args.data_dir
        span_h = (data_end - data_start) / 1e6 / 3600
        print(f"[1] chargé & nettoyé : {len(posts):,} posts réels, {len(eng):,} engagements, {len(authors):,} profils")
        print(f"[2] couverture temporelle : {span_h:.1f} heures ({span_h/24:.2f} jours)")

    # 3. plongements + sujets -----------------------------------------------------------------
    t = time.time()
    emb, rep["embedding_backend"] = embed_texts(posts["text_clean"], backend=args.emb_backend, seed=args.seed)
    print(f"[3a] plongements ({rep['embedding_backend']}) : {emb.shape} en {time.time() - t:.0f}s")
    t = time.time()
    if args.oracle_topics:
        if truth is None:
            raise SystemExit("--oracle-topics n'a de sens qu'avec --synthetic")
        posts["topic_id"] = posts.merge(truth, on="post_id", how="left")["topic_true"].fillna(-1).astype(int).values
        mode = "oracle (vrais sujets, pas de clustering)"
    else:
        posts["topic_id"] = detect_topics(emb, min_cluster_size=args.min_cluster_size,
                                          min_samples=args.min_samples)
        mode = "hdbscan"
    n_top = int(posts["topic_id"].max() + 1)
    rep["topics"] = {"mode": mode, "n_topics": n_top, "noise_share": float((posts["topic_id"] < 0).mean())}
    if truth is not None:
        from sklearn.metrics import adjusted_rand_score
        m = posts.merge(truth, on="post_id")
        m = m[(m["topic_true"] >= 0) & (m["topic_id"] >= 0)]
        rep["topics"]["adjusted_rand_vs_truth"] = float(adjusted_rand_score(m["topic_true"], m["topic_id"]))
    print(f"[3b] sujets : {rep['topics']} en {time.time() - t:.0f}s")
    topics = name_topics(posts)

    # 4. variables + cibles -------------------------------------------------------------------
    t = time.time()
    cfg = FeatureConfig(min_posts=args.min_posts, seed=args.seed)
    tbl = build_topic_table(posts, eng, emb, authors, cfg, data_end_us=data_end)
    rep["features"] = {"topics_with_enough_posts": int(len(tbl)),
                       "dropped_horizon_incomplete": int((~tbl["horizon_complete"]).sum())}
    tbl = tbl[tbl["horizon_complete"]].reset_index(drop=True)     # censure : horizon > fin de collecte
    print(f"[4] variables : {rep['features']} en {time.time() - t:.0f}s")

    # 5. découpage temporel strict + cible ----------------------------------------------------
    test_start = data_start + int(args.test_start_day * DAY_US)
    if test_start >= tbl["t0_us"].max() or test_start >= data_end:
        test_start = int(np.quantile(tbl["t0_us"].to_numpy(), 0.70))
        print(f"[5] Info : test_start ajusté au 70e percentile temporel des sujets ({pd.to_datetime(test_start, unit='us')} UTC)")
    train, test = temporal_split(tbl, test_start, embargo_h=args.embargo_h)
    fit, val = train_val_split(train, val_frac=0.25, embargo_h=args.embargo_h)
    q = args.viral_quantile
    thr = fit_viral_threshold(fit["n_posts_6h"], q)      # estimé sur 'fit' uniquement
    fit_l, val_l, test_l = (apply_labels(d, thr) for d in (fit, val, test))
    # Point de décision CDC § 9.1 (J4) : si déséquilibre extrême, repli progressif du quantile
    while (fit_l["is_viral"].sum() < 1 or val_l["is_viral"].sum() < 1 or test_l["is_viral"].sum() < 1) and q > 0.55:
        q -= 0.05
        thr = fit_viral_threshold(fit["n_posts_6h"], q)
        fit_l, val_l, test_l = (apply_labels(d, thr) for d in (fit, val, test))
        print(f"[5] Repli CDC J4 vers quantile {q:.2f} (seuil {thr:.1f}) pour assurer des positifs dans chaque split")
    fit, val, test = fit_l, val_l, test_l
    rep["split"] = {"fit": len(fit), "val": len(val), "test": len(test), "viral_threshold_n6h": thr, "quantile_used": q,
                    "positives": {"fit": int(fit.is_viral.sum()), "val": int(val.is_viral.sum()), "test": int(test.is_viral.sum())}}
    print(f"[5] split : {rep['split']}")

    # 6. modèles ------------------------------------------------------------------------------
    results, preds, models = run_experiments(fit, val, test, seed=args.seed, n_boot=args.n_boot, obs_min=cfg.obs_min)
    rep["M1_vs_B1_pr_auc_diff"] = results.attrs["M1_vs_B1_pr_auc_diff"]
    imp = permutation_importance_m1(models, val, seed=args.seed)

    results.to_csv(os.path.join(args.out, "results.csv"), index=False)
    imp.to_csv(os.path.join(args.out, "feature_importance.csv"), index=False)
    show = results[["modèle", "backend", "pr_auc", "pr_auc_lo", "pr_auc_hi", "roc_auc", "brier", "f1",
                    "precision_at_k", "alert_lead_median_min", "n_pos_test"]]
    with open(os.path.join(args.out, "results.md"), "w", encoding="utf-8") as fh:
        fh.write(f"# Résultats ({rep['source']})\n\n{md_table(show)}\n\n"
                 f"Écart PR-AUC M1 - B1 : {rep['M1_vs_B1_pr_auc_diff']}\n")
    out_t = test[["topic_id", "t0_us", "n_posts_6h", "is_viral"]].assign(p_viral_M1=preds["M1 toutes variables"])
    topics.merge(out_t, on="topic_id", how="right").to_csv(os.path.join(args.out, "topics_test.csv"), index=False)
    topics.to_csv(os.path.join(args.out, "topics.csv"), index=False)
    plot_pr(test, preds, os.path.join(args.out, "pr_curves.png"))
    rep["seconds_total"] = round(time.time() - t_all, 1)
    with open(os.path.join(args.out, "run_report.json"), "w", encoding="utf-8") as fh:
        json.dump(rep, fh, ensure_ascii=False, indent=2, default=float)

    print("\n" + md_table(show))
    print(f"\nÉcart PR-AUC M1 - B1 : {rep['M1_vs_B1_pr_auc_diff']}")
    print(f"Sorties dans {args.out}/  ({rep['seconds_total']} s)")


if __name__ == "__main__":
    main()
