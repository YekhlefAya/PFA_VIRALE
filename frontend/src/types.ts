export interface Topic {
  id: number;
  label: string;
  keywords: string[];
  t0_iso: string;
  n_posts_30m: number;
  n_posts_6h: number;
  n_posts_total: number;
  is_viral: number;
  p_viral: number;
  velocity: number;
  max_followers: number;
  lead_time_min: number;
  dominant_emotion: string;
  emotion_score: number;
  trajectory: {
    times: number[];
    real: number[];
    pred: number[];
  };
  posts: Array<{
    author: string;
    text: string;
    likes: number;
    reposts: number;
    lang: string;
    time_offset_min: number;
  }>;
  network: {
    nodes: Array<{
      id: number;
      label: string;
      value: number;
      group: number;
      is_bridge: boolean;
      color: string;
    }>;
    edges: Array<{
      from: number;
      to: number;
      arrows: string;
      width: number;
    }>;
  };
  shap: Array<{
    feature: string;
    name: string;
    value: number;
    family: string;
  }>;
}

export interface ModelMetric {
  modele: string;
  backend: string;
  n_variables: number;
  pr_auc: number;
  pr_auc_ci: string;
  roc_auc: number;
  brier: number;
  f1: number;
  precision_k: number;
  n_alerts: number;
  lead_time: string;
}
