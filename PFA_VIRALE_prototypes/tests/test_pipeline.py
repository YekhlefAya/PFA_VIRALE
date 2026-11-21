"""Tests du pipeline et des modèles (ENF-04 intégrité temporelle, ENF-06 qualité du code)."""
import os
import sys

import numpy as np
import pandas as pd
import pytest

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from modeling.evaluate import best_f1_threshold, bootstrap_ci, precision_at_k  # noqa: E402
from modeling.train import run_experiments  # noqa: E402
from pipeline import io as pio  # noqa: E402
from pipeline.clean import clean_events  # noqa: E402
from pipeline.features import US_MIN, FeatureConfig, build_topic_table, feature_columns  # noqa: E402
from pipeline.labels import HOUR_US, apply_labels, fit_viral_threshold, temporal_split, train_val_split  # noqa: E402
from pipeline.synthetic import generate  # noqa: E402
from pipeline.topics import ctfidf_keywords  # noqa: E402


@pytest.fixture(scope="module")
def synth():
    ev, au, tr = generate(n_topics=80, days=3, median_size=40, seed=2)
    cl, _ = clean_events(ev)
    posts = cl[cl.kind == "post"].reset_index(drop=True)
    posts["topic_id"] = posts.merge(tr, on="post_id", how="left")["topic_true"].fillna(-1).astype(int).values
    eng = cl[cl.kind != "post"][["time_us", "kind", "author_hash", "post_id"]]
    return posts, eng, au


def test_clean_dedup_orphans_and_spam():
    rows = [
        (1_000, "post", "a1", "p1", "bonjour tout le monde https://x.co/abc", "fr", False, True),
        (1_000, "post", "a1", "p1", "bonjour tout le monde https://x.co/abc", "fr", False, True),   # doublon exact
        (2_000, "post", "a2", "p2", "court", "fr", False, False),                                   # trop court
        (3_000, "post", "a1", "p3", "bonjour tout le monde", "fr", False, False),                   # même auteur, même texte
        (4_000, "like", "b1", "p1", None, None, None, None),                                        # valide
        (5_000, "like", "b2", "pX", None, None, None, None),                                        # orphelin
        (500, "like", "b3", "p1", None, None, None, None),                                          # avant le post
    ]
    ev = pd.DataFrame(rows, columns=pio.EVENT_COLS)
    out, rep = clean_events(ev)
    assert rep["duplicates_removed"] == 1
    assert rep["short_posts_removed"] == 1
    assert rep["author_text_duplicates_removed"] == 1
    assert rep["orphan_engagements_removed"] == 1
    assert rep["engagements_before_post_removed"] == 1
    assert (out["kind"] == "post").sum() == 1 and (out["kind"] == "like").sum() == 1
    assert "http" not in out.loc[out.kind == "post", "text_clean"].iloc[0]
    assert out["time_us"].is_monotonic_increasing


def test_io_roundtrip(tmp_path):
    ev, au, _ = generate(n_topics=10, days=2, median_size=15, seed=3)
    pio.write_partitioned(ev, au, str(tmp_path))
    back = pio.load_events(str(tmp_path))
    assert len(back) == len(ev)
    assert len(pio.load_authors(str(tmp_path))) == len(au)
    out, _ = clean_events(back)           # les booléens relus depuis le disque doivent rester exploitables
    assert out["has_link"].dtype == bool


def test_temporal_split_respects_embargo():
    df = pd.DataFrame({"t0_us": np.arange(0, 200) * HOUR_US})
    train, test = temporal_split(df, 100 * HOUR_US, embargo_h=6)
    assert train["t0_us"].max() + 6 * HOUR_US <= test["t0_us"].min()
    assert len(train) + len(test) < len(df)                   # les sujets de l'embargo sont écartés
    fit, val = train_val_split(train, val_frac=0.25, embargo_h=6)
    assert fit["t0_us"].max() + 6 * HOUR_US <= val["t0_us"].min()


def test_viral_threshold_and_labels():
    n6 = np.arange(1, 101)
    thr = fit_viral_threshold(n6, 0.95)
    assert thr == pytest.approx(np.quantile(n6, 0.95))
    lab = apply_labels(pd.DataFrame({"n_posts_6h": n6}), thr)
    assert lab["is_viral"].sum() == 5


def test_features_ignore_everything_after_observation_window(synth):
    """ENF-04 : supprimer tout ce qui suit T0 + 30 min ne doit modifier AUCUNE variable."""
    posts, eng, au = synth
    cfg = FeatureConfig(min_posts=5, seed=0)
    emb = np.random.default_rng(0).normal(size=(len(posts), 16)).astype(np.float32)
    end = int(posts["time_us"].max()) + 10**15
    full = build_topic_table(posts, eng, emb, au, cfg, data_end_us=end)
    assert len(full) > 10

    t_obs = posts[posts.topic_id >= 0].groupby("topic_id")["time_us"].min() + cfg.obs_min * US_MIN
    keep_p = (posts["time_us"] <= posts["topic_id"].map(t_obs).fillna(np.inf)).to_numpy()
    ptopic = pd.Series(posts["topic_id"].to_numpy(), index=posts["post_id"].to_numpy())
    keep_e = (eng["time_us"] <= eng["post_id"].map(ptopic).map(t_obs).fillna(np.inf)).to_numpy()
    trunc = build_topic_table(posts[keep_p], eng[keep_e], emb[keep_p], au, cfg, data_end_us=end)

    assert list(full["topic_id"]) == list(trunc["topic_id"])
    fc = feature_columns(full)
    pd.testing.assert_frame_equal(full[fc], trunc[fc])
    assert (full["n_posts_6h"].to_numpy() > trunc["n_posts_6h"].to_numpy()).any()   # la perturbation était réelle


def test_embedding_fallback_is_stateless():
    """ENF-04 : le plongement d'un post ne doit dépendre d'aucun autre post (sinon fuite du futur)."""
    from pipeline.embed import embed_texts

    texts = [f"mot{chr(97 + i)}abc incroyable sujet numéro {i}" for i in range(20)]
    a, _ = embed_texts(texts, backend="hash", dim=32)
    b, _ = embed_texts(texts[:5], backend="hash", dim=32)
    np.testing.assert_allclose(a[:5], b, atol=1e-6)


def test_ctfidf_names_topics_by_their_words():
    texts = ["chat miaou félin chat", "chat félin sieste miaou", "chien aboie os chien", "chien os promenade aboie"]
    kw = ctfidf_keywords(texts, np.array([0, 0, 1, 1]), top_k=3)
    assert "chat" in kw[0] and "chien" in kw[1]


def test_metrics():
    assert precision_at_k([1, 0, 1, 0], [0.9, 0.8, 0.7, 0.1], 2) == 0.5
    y, p = np.array([0, 0, 1, 1]), np.array([0.1, 0.2, 0.8, 0.9])
    assert ((p >= best_f1_threshold(y, p)).astype(int) == y).all()
    lo, hi = bootstrap_ci(np.array([0, 1] * 30), np.linspace(0, 1, 60), n_boot=50)
    assert 0 <= lo <= hi <= 1


def test_models_run_and_beat_prior_on_synthetic():
    ev, au, tr = generate(n_topics=450, days=14, seed=5)
    cl, _ = clean_events(ev)
    posts = cl[cl.kind == "post"].reset_index(drop=True)
    posts["topic_id"] = posts.merge(tr, on="post_id", how="left")["topic_true"].fillna(-1).astype(int).values
    eng = cl[cl.kind != "post"][["time_us", "kind", "author_hash", "post_id"]]
    emb = np.random.default_rng(0).normal(size=(len(posts), 16)).astype(np.float32)
    tbl = build_topic_table(posts, eng, emb, au, FeatureConfig(min_posts=8), data_end_us=int(cl.time_us.max()))
    tbl = tbl[tbl.horizon_complete]
    start = int(cl.time_us.min())
    train, test = temporal_split(tbl, start + 7 * 24 * HOUR_US)
    fit, val = train_val_split(train)
    thr = fit_viral_threshold(fit["n_posts_6h"], 0.90)
    fit, val, test = (apply_labels(d, thr) for d in (fit, val, test))
    table, preds, _ = run_experiments(fit, val, test, seed=0, n_boot=30)
    assert len(table) == 8 and table["pr_auc"].between(0, 1).all()
    pr = table.set_index("modèle")["pr_auc"]
    assert pr["M1 toutes variables"] > pr["B0 prévalence"]
    assert all(np.isfinite(p).all() for p in preds.values())
