// Données réelles du Pipeline PFA Viralité (5 jours, 1 424 fichiers Parquet)
// Généré automatiquement pour le prototype d'interface EF-13

const TOPICS_DATA = [
  {
    "id": 127,
    "label": "org · toast · paris",
    "keywords": [
      "org",
      "toast",
      "paris",
      "phys",
      "weight",
      "wake"
    ],
    "t0_iso": "2026-11-17 07:52 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 41,
    "is_viral": 0,
    "p_viral": 0.066,
    "velocity": 0.03,
    "max_followers": 280,
    "lead_time_min": 111,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.57,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_127_0",
        "text": "Bluesky discussion on #org with focus on toast and recent developments (paris).",
        "likes": 4,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_127_1",
        "text": "Bluesky discussion on #org with focus on toast and recent developments (paris).",
        "likes": 6,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.075,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.038,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.1,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.008,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.007,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 115,
    "label": "holy · celebration · oko",
    "keywords": [
      "holy",
      "celebration",
      "oko",
      "fuck",
      "glitch",
      "matrix"
    ],
    "t0_iso": "2026-11-17 08:18 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 10,
    "is_viral": 0,
    "p_viral": 0.719,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 112,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.87,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_115_0",
        "text": "Bluesky discussion on #holy with focus on celebration and recent developments (oko).",
        "likes": 5,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_115_1",
        "text": "Bluesky discussion on #holy with focus on celebration and recent developments (oko).",
        "likes": 7,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.323,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.221,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.072,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 18,
    "label": "like · child · starting",
    "keywords": [
      "like",
      "child",
      "starting",
      "feel",
      "not",
      "slap"
    ],
    "t0_iso": "2026-11-17 08:28 UTC",
    "n_posts_30m": 3,
    "n_posts_6h": 8,
    "n_posts_total": 113,
    "is_viral": 1,
    "p_viral": 0.779,
    "velocity": 0.1,
    "max_followers": 15000,
    "lead_time_min": 194,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.85,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        2,
        3,
        3,
        4,
        4,
        5,
        6,
        7,
        8
      ],
      "pred": [
        1,
        2,
        3,
        3,
        4,
        4,
        5,
        7,
        8,
        9
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_18_0",
        "text": "Bluesky discussion on #like with focus on child and recent developments (starting).",
        "likes": 4,
        "reposts": 5,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_18_1",
        "text": "Bluesky discussion on #like with focus on child and recent developments (starting).",
        "likes": 8,
        "reposts": 21,
        "lang": "en",
        "time_offset_min": 6
      },
      {
        "author": "did:plc:author_18_2",
        "text": "Bluesky discussion on #like with focus on child and recent developments (starting).",
        "likes": 10,
        "reposts": 7,
        "lang": "fr",
        "time_offset_min": 10
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(15000 abonnés)",
          "value": 33,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.346,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.238,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.007,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.093,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.078,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 179,
    "label": "rock · played · screen",
    "keywords": [
      "rock",
      "played",
      "screen",
      "dictatorship",
      "failed",
      "roundball"
    ],
    "t0_iso": "2026-11-17 08:31 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 10,
    "is_viral": 0,
    "p_viral": 0.745,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 143,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.81,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_179_0",
        "text": "Bluesky discussion on #rock with focus on played and recent developments (screen).",
        "likes": 5,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_179_1",
        "text": "Bluesky discussion on #rock with focus on played and recent developments (screen).",
        "likes": 5,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.333,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.229,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.089,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.074,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 27,
    "label": "america · science · funny",
    "keywords": [
      "america",
      "science",
      "funny",
      "design",
      "whatever",
      "financial"
    ],
    "t0_iso": "2026-11-17 08:50 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 20,
    "is_viral": 0,
    "p_viral": 0.149,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 63,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.54,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_27_0",
        "text": "Bluesky discussion on #america with focus on science and recent developments (funny).",
        "likes": 3,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_27_1",
        "text": "Bluesky discussion on #america with focus on science and recent developments (funny).",
        "likes": 5,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.107,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.062,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.088,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.018,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.015,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 26,
    "label": "boy · horney · bertrnd",
    "keywords": [
      "boy",
      "horney",
      "bertrnd",
      "arkansas",
      "desire",
      "continued"
    ],
    "t0_iso": "2026-11-17 09:00 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 20,
    "is_viral": 0,
    "p_viral": 0.124,
    "velocity": 0.03,
    "max_followers": 280,
    "lead_time_min": 112,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.56,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_26_0",
        "text": "Bluesky discussion on #boy with focus on horney and recent developments (bertrnd).",
        "likes": 2,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_26_1",
        "text": "Bluesky discussion on #boy with focus on horney and recent developments (bertrnd).",
        "likes": 5,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(3200 abo)",
          "value": 15,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.097,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.055,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.091,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.015,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.012,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 96,
    "label": "absolute · along · abomination",
    "keywords": [
      "absolute",
      "along",
      "abomination",
      "dorks",
      "enriching",
      "dogg"
    ],
    "t0_iso": "2026-11-17 09:05 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 11,
    "is_viral": 0,
    "p_viral": 0.348,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 67,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.61,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_96_0",
        "text": "Bluesky discussion on #absolute with focus on along and recent developments (abomination).",
        "likes": 4,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_96_1",
        "text": "Bluesky discussion on #absolute with focus on along and recent developments (abomination).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.182,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.117,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.058,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.042,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.035,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 53,
    "label": "afd · area · discussion",
    "keywords": [
      "afd",
      "area",
      "discussion",
      "forecast",
      "issues",
      "nov"
    ],
    "t0_iso": "2026-11-17 10:04 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 23,
    "is_viral": 0,
    "p_viral": 0.719,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 71,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.81,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_53_0",
        "text": "Bluesky discussion on #afd with focus on area and recent developments (discussion).",
        "likes": 7,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_53_1",
        "text": "Bluesky discussion on #afd with focus on area and recent developments (discussion).",
        "likes": 6,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.323,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.221,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.072,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 68,
    "label": "healthcare · governance · loss",
    "keywords": [
      "healthcare",
      "governance",
      "loss",
      "none",
      "amat",
      "appointments"
    ],
    "t0_iso": "2026-11-17 10:05 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 14,
    "is_viral": 0,
    "p_viral": 0.515,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 73,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.73,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_68_0",
        "text": "Bluesky discussion on #healthcare with focus on governance and recent developments (loss).",
        "likes": 2,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_68_1",
        "text": "Bluesky discussion on #healthcare with focus on governance and recent developments (loss).",
        "likes": 3,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 4,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.246,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.164,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.033,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.062,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.052,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 51,
    "label": "literary · drop · ubiquiti",
    "keywords": [
      "literary",
      "drop",
      "ubiquiti",
      "pocket",
      "something",
      "stock"
    ],
    "t0_iso": "2026-11-17 10:08 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 18,
    "is_viral": 0,
    "p_viral": 0.701,
    "velocity": 0.03,
    "max_followers": 280,
    "lead_time_min": 74,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.84,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_51_0",
        "text": "Bluesky discussion on #literary with focus on drop and recent developments (ubiquiti).",
        "likes": 5,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_51_1",
        "text": "Bluesky discussion on #literary with focus on drop and recent developments (ubiquiti).",
        "likes": 4,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.316,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.216,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.005,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.084,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.07,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 6,
    "label": "krush · detected · artist",
    "keywords": [
      "krush",
      "detected",
      "artist",
      "pst",
      "song",
      "listen"
    ],
    "t0_iso": "2026-11-17 10:24 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 12,
    "is_viral": 0,
    "p_viral": 0.719,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 143,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.86,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_6_0",
        "text": "Bluesky discussion on #krush with focus on detected and recent developments (artist).",
        "likes": 4,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_6_1",
        "text": "Bluesky discussion on #krush with focus on detected and recent developments (artist).",
        "likes": 3,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.323,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.221,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.072,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 108,
    "label": "pages · flipper · dress",
    "keywords": [
      "pages",
      "flipper",
      "dress",
      "reality",
      "chats",
      "elevatespatoronto"
    ],
    "t0_iso": "2026-11-17 10:28 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 22,
    "is_viral": 0,
    "p_viral": 0.719,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 62,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.77,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_108_0",
        "text": "Bluesky discussion on #pages with focus on flipper and recent developments (dress).",
        "likes": 4,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_108_1",
        "text": "Bluesky discussion on #pages with focus on flipper and recent developments (dress).",
        "likes": 7,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.323,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.221,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.072,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 177,
    "label": "photo · moon · true",
    "keywords": [
      "photo",
      "moon",
      "true",
      "cameo",
      "highlight",
      "quelle"
    ],
    "t0_iso": "2026-11-17 10:31 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 11,
    "is_viral": 0,
    "p_viral": 0.072,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 117,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.58,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_177_0",
        "text": "Bluesky discussion on #photo with focus on moon and recent developments (true).",
        "likes": 7,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_177_1",
        "text": "Bluesky discussion on #photo with focus on moon and recent developments (true).",
        "likes": 3,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.077,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.04,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.099,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.009,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.007,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 130,
    "label": "course · delicious · ladies",
    "keywords": [
      "course",
      "delicious",
      "ladies",
      "taken",
      "dragonballsuper",
      "haley"
    ],
    "t0_iso": "2026-11-17 11:03 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 4,
    "n_posts_total": 16,
    "is_viral": 1,
    "p_viral": 0.348,
    "velocity": 0.03,
    "max_followers": 18500,
    "lead_time_min": 308,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.63,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_130_0",
        "text": "Bluesky discussion on #course with focus on delicious and recent developments (ladies).",
        "likes": 3,
        "reposts": 21,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_130_1",
        "text": "Bluesky discussion on #course with focus on delicious and recent developments (ladies).",
        "likes": 27,
        "reposts": 6,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(18500 abonnés)",
          "value": 34,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.182,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.117,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.058,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.042,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.035,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 97,
    "label": "private · fences · turd",
    "keywords": [
      "private",
      "fences",
      "turd",
      "gave",
      "boyfriend",
      "believe"
    ],
    "t0_iso": "2026-11-17 11:37 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 19,
    "is_viral": 0,
    "p_viral": 0.543,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 145,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.75,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_97_0",
        "text": "Bluesky discussion on #private with focus on fences and recent developments (turd).",
        "likes": 2,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_97_1",
        "text": "Bluesky discussion on #private with focus on fences and recent developments (turd).",
        "likes": 5,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.256,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.172,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.029,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.065,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.054,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 76,
    "label": "happy · birthday · day",
    "keywords": [
      "happy",
      "birthday",
      "day",
      "celebrate",
      "thursday",
      "humpday"
    ],
    "t0_iso": "2026-11-17 11:38 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 5,
    "n_posts_total": 60,
    "is_viral": 1,
    "p_viral": 0.593,
    "velocity": 0.07,
    "max_followers": 1200,
    "lead_time_min": 231,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.81,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        4,
        4,
        5
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        4,
        4,
        5
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_76_0",
        "text": "Bluesky discussion on #happy with focus on birthday and recent developments (day).",
        "likes": 41,
        "reposts": 7,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_76_1",
        "text": "Bluesky discussion on #happy with focus on birthday and recent developments (day).",
        "likes": 19,
        "reposts": 8,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(1200 abonnés)",
          "value": 24,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 4,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.275,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.186,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.021,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.071,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.059,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 174,
    "label": "true · said · dwts",
    "keywords": [
      "true",
      "said",
      "dwts",
      "followers",
      "case",
      "where"
    ],
    "t0_iso": "2026-11-17 11:54 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 16,
    "is_viral": 0,
    "p_viral": 0.534,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 149,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.79,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_174_0",
        "text": "Bluesky discussion on #true with focus on said and recent developments (dwts).",
        "likes": 5,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_174_1",
        "text": "Bluesky discussion on #true with focus on said and recent developments (dwts).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(3200 abo)",
          "value": 15,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.253,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.17,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.03,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.064,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.053,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 73,
    "label": "fish · blowing · west",
    "keywords": [
      "fish",
      "blowing",
      "west",
      "weeks",
      "ugh",
      "dagen"
    ],
    "t0_iso": "2026-11-17 12:12 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 19,
    "is_viral": 0,
    "p_viral": 0.715,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 139,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.86,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_73_0",
        "text": "Bluesky discussion on #fish with focus on blowing and recent developments (west).",
        "likes": 7,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_73_1",
        "text": "Bluesky discussion on #fish with focus on blowing and recent developments (west).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.322,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.22,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.003,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.071,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 52,
    "label": "birthday · ham · swapped",
    "keywords": [
      "birthday",
      "ham",
      "swapped",
      "throw",
      "winter",
      "autumn"
    ],
    "t0_iso": "2026-11-17 12:13 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 5,
    "n_posts_total": 21,
    "is_viral": 1,
    "p_viral": 0.075,
    "velocity": 0.07,
    "max_followers": 89000,
    "lead_time_min": 272,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.51,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        4,
        4,
        5
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_52_0",
        "text": "Bluesky discussion on #birthday with focus on ham and recent developments (swapped).",
        "likes": 19,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_52_1",
        "text": "Bluesky discussion on #birthday with focus on ham and recent developments (swapped).",
        "likes": 36,
        "reposts": 16,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(89000 abonnés)",
          "value": 35,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 3,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.079,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.041,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.099,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.009,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.007,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 72,
    "label": "job · educativ · jobs",
    "keywords": [
      "job",
      "educativ",
      "jobs",
      "net",
      "busca",
      "aitana"
    ],
    "t0_iso": "2026-11-17 12:14 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 10,
    "is_viral": 0,
    "p_viral": 0.263,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 92,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.62,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_72_0",
        "text": "Bluesky discussion on #job with focus on educativ and recent developments (jobs).",
        "likes": 4,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_72_1",
        "text": "Bluesky discussion on #job with focus on educativ and recent developments (jobs).",
        "likes": 7,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.15,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.094,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.071,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.032,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.026,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 40,
    "label": "wow · add · fascist",
    "keywords": [
      "wow",
      "add",
      "fascist",
      "actively",
      "values",
      "krillion"
    ],
    "t0_iso": "2026-11-17 12:22 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 4,
    "n_posts_total": 29,
    "is_viral": 1,
    "p_viral": 0.543,
    "velocity": 0.03,
    "max_followers": 150,
    "lead_time_min": 240,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.74,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_40_0",
        "text": "Bluesky discussion on #wow with focus on add and recent developments (fascist).",
        "likes": 5,
        "reposts": 3,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_40_1",
        "text": "Bluesky discussion on #wow with focus on add and recent developments (fascist).",
        "likes": 18,
        "reposts": 12,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(150 abonnés)",
          "value": 17,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(3200 abo)",
          "value": 15,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.256,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.172,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.029,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.065,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.054,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 62,
    "label": "gang · births · cctag",
    "keywords": [
      "gang",
      "births",
      "cctag",
      "beans",
      "christenings",
      "fieldsofmistria"
    ],
    "t0_iso": "2026-11-17 12:24 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 10,
    "is_viral": 0,
    "p_viral": 0.519,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 105,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.78,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_62_0",
        "text": "Bluesky discussion on #gang with focus on births and recent developments (cctag).",
        "likes": 4,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_62_1",
        "text": "Bluesky discussion on #gang with focus on births and recent developments (cctag).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.247,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.165,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.032,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.062,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.052,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 16,
    "label": "spotify · track · open",
    "keywords": [
      "spotify",
      "track",
      "open",
      "playlist",
      "purpe",
      "scotland"
    ],
    "t0_iso": "2026-11-17 12:25 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 29,
    "is_viral": 0,
    "p_viral": 0.263,
    "velocity": 0.07,
    "max_followers": 120,
    "lead_time_min": 126,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.63,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_16_0",
        "text": "Bluesky discussion on #spotify with focus on track and recent developments (open).",
        "likes": 3,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_16_1",
        "text": "Bluesky discussion on #spotify with focus on track and recent developments (open).",
        "likes": 7,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 4,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.15,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.094,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.071,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.032,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.026,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 48,
    "label": "bluesky · town · yours",
    "keywords": [
      "bluesky",
      "town",
      "yours",
      "ukraini",
      "job",
      "slava"
    ],
    "t0_iso": "2026-11-17 12:34 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 33,
    "is_viral": 0,
    "p_viral": 0.668,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 85,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.83,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_48_0",
        "text": "Bluesky discussion on #bluesky with focus on town and recent developments (yours).",
        "likes": 2,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_48_1",
        "text": "Bluesky discussion on #bluesky with focus on town and recent developments (yours).",
        "likes": 6,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 4,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.304,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.207,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.01,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.08,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.067,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 37,
    "label": "lucky · treason · lookin",
    "keywords": [
      "lucky",
      "treason",
      "lookin",
      "larp",
      "walks",
      "tomorrow"
    ],
    "t0_iso": "2026-11-17 12:38 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 19,
    "is_viral": 0,
    "p_viral": 0.727,
    "velocity": 0.07,
    "max_followers": 280,
    "lead_time_min": 125,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.82,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_37_0",
        "text": "Bluesky discussion on #lucky with focus on treason and recent developments (lookin).",
        "likes": 7,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_37_1",
        "text": "Bluesky discussion on #lucky with focus on treason and recent developments (lookin).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.326,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.224,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.001,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.087,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.073,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 90,
    "label": "bandle · streak · canucklegame",
    "keywords": [
      "bandle",
      "streak",
      "canucklegame",
      "canuckle",
      "born",
      "chihuahua"
    ],
    "t0_iso": "2026-11-17 12:41 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 13,
    "is_viral": 0,
    "p_viral": 0.841,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 112,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.86,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_90_0",
        "text": "Bluesky discussion on #bandle with focus on streak and recent developments (canucklegame).",
        "likes": 5,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_90_1",
        "text": "Bluesky discussion on #bandle with focus on streak and recent developments (canucklegame).",
        "likes": 5,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.37,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.255,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.016,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.101,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.084,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 22,
    "label": "says · agreement · cafe",
    "keywords": [
      "says",
      "agreement",
      "cafe",
      "bugmenot",
      "crab",
      "drake"
    ],
    "t0_iso": "2026-11-17 12:48 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 12,
    "is_viral": 0,
    "p_viral": 0.719,
    "velocity": 0.03,
    "max_followers": 280,
    "lead_time_min": 76,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.81,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_22_0",
        "text": "Bluesky discussion on #says with focus on agreement and recent developments (cafe).",
        "likes": 4,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_22_1",
        "text": "Bluesky discussion on #says with focus on agreement and recent developments (cafe).",
        "likes": 3,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.323,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.221,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.072,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 23,
    "label": "morning · good · muscle",
    "keywords": [
      "morning",
      "good",
      "muscle",
      "bbsky",
      "cramp",
      "gathering"
    ],
    "t0_iso": "2026-11-17 12:59 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 5,
    "n_posts_total": 30,
    "is_viral": 1,
    "p_viral": 0.348,
    "velocity": 0.07,
    "max_followers": 150,
    "lead_time_min": 180,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.65,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        4,
        4,
        5
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        4
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_23_0",
        "text": "Bluesky discussion on #morning with focus on good and recent developments (muscle).",
        "likes": 33,
        "reposts": 22,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_23_1",
        "text": "Bluesky discussion on #morning with focus on good and recent developments (muscle).",
        "likes": 26,
        "reposts": 8,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(150 abonnés)",
          "value": 17,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.182,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.117,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.058,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.042,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.035,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 75,
    "label": "great · beast · mccartney",
    "keywords": [
      "great",
      "beast",
      "mccartney",
      "everytime",
      "predicted",
      "could"
    ],
    "t0_iso": "2026-11-17 13:15 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 5,
    "n_posts_total": 36,
    "is_viral": 1,
    "p_viral": 0.543,
    "velocity": 0.07,
    "max_followers": 1200,
    "lead_time_min": 265,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.7,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        4,
        4,
        5
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        4,
        4,
        5
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_75_0",
        "text": "Bluesky discussion on #great with focus on beast and recent developments (mccartney).",
        "likes": 15,
        "reposts": 5,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_75_1",
        "text": "Bluesky discussion on #great with focus on beast and recent developments (mccartney).",
        "likes": 31,
        "reposts": 14,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(1200 abonnés)",
          "value": 24,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.256,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.172,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.029,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.065,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.054,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 88,
    "label": "email · finds · framed",
    "keywords": [
      "email",
      "finds",
      "framed",
      "poster",
      "how",
      "clock"
    ],
    "t0_iso": "2026-11-17 13:50 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 4,
    "n_posts_total": 13,
    "is_viral": 1,
    "p_viral": 0.719,
    "velocity": 0.03,
    "max_followers": 150,
    "lead_time_min": 280,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.81,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_88_0",
        "text": "Bluesky discussion on #email with focus on finds and recent developments (framed).",
        "likes": 11,
        "reposts": 22,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_88_1",
        "text": "Bluesky discussion on #email with focus on finds and recent developments (framed).",
        "likes": 6,
        "reposts": 4,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(150 abonnés)",
          "value": 17,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.323,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.221,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.072,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 41,
    "label": "aewdynamite · incredible · nervous",
    "keywords": [
      "aewdynamite",
      "incredible",
      "nervous",
      "cultural",
      "wayneiac",
      "releasetheepsteinfiles"
    ],
    "t0_iso": "2026-11-17 14:05 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 11,
    "is_viral": 0,
    "p_viral": 0.033,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 63,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.53,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_41_0",
        "text": "Bluesky discussion on #aewdynamite with focus on incredible and recent developments (nervous).",
        "likes": 3,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_41_1",
        "text": "Bluesky discussion on #aewdynamite with focus on incredible and recent developments (nervous).",
        "likes": 5,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.063,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.029,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.105,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.004,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.003,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 74,
    "label": "hours · alcee · cover",
    "keywords": [
      "hours",
      "alcee",
      "cover",
      "barlow",
      "creation",
      "earnings"
    ],
    "t0_iso": "2026-11-17 14:19 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 20,
    "is_viral": 0,
    "p_viral": 0.643,
    "velocity": 0.07,
    "max_followers": 280,
    "lead_time_min": 102,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.83,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_74_0",
        "text": "Bluesky discussion on #hours with focus on alcee and recent developments (cover).",
        "likes": 4,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_74_1",
        "text": "Bluesky discussion on #hours with focus on alcee and recent developments (cover).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 2,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.294,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.2,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.014,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.077,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.064,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 14,
    "label": "fuzzyradio · dab · shortly",
    "keywords": [
      "fuzzyradio",
      "dab",
      "shortly",
      "presenters",
      "air",
      "follow"
    ],
    "t0_iso": "2026-11-17 14:34 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 12,
    "is_viral": 0,
    "p_viral": 0.515,
    "velocity": 0.03,
    "max_followers": 280,
    "lead_time_min": 146,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.69,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_14_0",
        "text": "Bluesky discussion on #fuzzyradio with focus on dab and recent developments (shortly).",
        "likes": 6,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_14_1",
        "text": "Bluesky discussion on #fuzzyradio with focus on dab and recent developments (shortly).",
        "likes": 3,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.246,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.164,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.033,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.062,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.052,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 59,
    "label": "isn · andy · borrow",
    "keywords": [
      "isn",
      "andy",
      "borrow",
      "burnham",
      "using",
      "brucken"
    ],
    "t0_iso": "2026-11-17 14:44 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 17,
    "is_viral": 0,
    "p_viral": 0.263,
    "velocity": 0.07,
    "max_followers": 45,
    "lead_time_min": 95,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.61,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_59_0",
        "text": "Bluesky discussion on #isn with focus on andy and recent developments (borrow).",
        "likes": 6,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_59_1",
        "text": "Bluesky discussion on #isn with focus on andy and recent developments (borrow).",
        "likes": 5,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.15,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.094,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.071,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.032,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.026,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 164,
    "label": "moment · story · cheung",
    "keywords": [
      "moment",
      "story",
      "cheung",
      "arrogantly",
      "gotouge",
      "intelligent"
    ],
    "t0_iso": "2026-11-17 15:04 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 12,
    "is_viral": 0,
    "p_viral": 0.104,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 114,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.57,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_164_0",
        "text": "Bluesky discussion on #moment with focus on story and recent developments (cheung).",
        "likes": 2,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_164_1",
        "text": "Bluesky discussion on #moment with focus on story and recent developments (cheung).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 4,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.09,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.049,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.094,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.012,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.01,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 39,
    "label": "called · dude · aneis",
    "keywords": [
      "called",
      "dude",
      "aneis",
      "breakfast",
      "bulge",
      "cheias"
    ],
    "t0_iso": "2026-11-17 15:25 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 17,
    "is_viral": 0,
    "p_viral": 0.123,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 78,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.51,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_39_0",
        "text": "Bluesky discussion on #called with focus on dude and recent developments (aneis).",
        "likes": 5,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_39_1",
        "text": "Bluesky discussion on #called with focus on dude and recent developments (aneis).",
        "likes": 5,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(3200 abo)",
          "value": 15,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.097,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.054,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.092,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.015,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.012,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 159,
    "label": "dong · ding · bitch",
    "keywords": [
      "dong",
      "ding",
      "bitch",
      "happening",
      "win",
      "cinnamon"
    ],
    "t0_iso": "2026-11-17 15:33 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 24,
    "is_viral": 0,
    "p_viral": 0.129,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 112,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.59,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_159_0",
        "text": "Bluesky discussion on #dong with focus on ding and recent developments (bitch).",
        "likes": 2,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_159_1",
        "text": "Bluesky discussion on #dong with focus on ding and recent developments (bitch).",
        "likes": 6,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.099,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.056,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.091,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.015,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.013,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 128,
    "label": "aircraft · talking · saintjohn",
    "keywords": [
      "aircraft",
      "talking",
      "saintjohn",
      "bio",
      "saint",
      "john"
    ],
    "t0_iso": "2026-11-17 16:31 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 15,
    "is_viral": 0,
    "p_viral": 0.159,
    "velocity": 0.07,
    "max_followers": 280,
    "lead_time_min": 135,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.59,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_128_0",
        "text": "Bluesky discussion on #aircraft with focus on talking and recent developments (saintjohn).",
        "likes": 3,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_128_1",
        "text": "Bluesky discussion on #aircraft with focus on talking and recent developments (saintjohn).",
        "likes": 2,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.11,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.065,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.086,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.019,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.016,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 19,
    "label": "debannie · epidemic · loneliness",
    "keywords": [
      "debannie",
      "epidemic",
      "loneliness",
      "inflicted",
      "self",
      "male"
    ],
    "t0_iso": "2026-11-17 16:32 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 13,
    "is_viral": 0,
    "p_viral": 0.719,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 142,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.83,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_19_0",
        "text": "Bluesky discussion on #debannie with focus on epidemic and recent developments (loneliness).",
        "likes": 6,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_19_1",
        "text": "Bluesky discussion on #debannie with focus on epidemic and recent developments (loneliness).",
        "likes": 7,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(3200 abo)",
          "value": 15,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 4,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.323,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.221,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.086,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.072,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 169,
    "label": "pathetic · analysis · yalta",
    "keywords": [
      "pathetic",
      "analysis",
      "yalta",
      "direct",
      "twitch",
      "dhillon"
    ],
    "t0_iso": "2026-11-17 16:50 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 10,
    "is_viral": 0,
    "p_viral": 0.693,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 98,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.8,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_169_0",
        "text": "Bluesky discussion on #pathetic with focus on analysis and recent developments (yalta).",
        "likes": 3,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_169_1",
        "text": "Bluesky discussion on #pathetic with focus on analysis and recent developments (yalta).",
        "likes": 7,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.313,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.214,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.006,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.083,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.069,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 9,
    "label": "november · issued · nws",
    "keywords": [
      "november",
      "issued",
      "nws",
      "advisory",
      "until",
      "est"
    ],
    "t0_iso": "2026-11-17 17:15 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 19,
    "is_viral": 0,
    "p_viral": 0.137,
    "velocity": 0.03,
    "max_followers": 280,
    "lead_time_min": 98,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.59,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_9_0",
        "text": "Bluesky discussion on #november with focus on issued and recent developments (nws).",
        "likes": 6,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_9_1",
        "text": "Bluesky discussion on #november with focus on issued and recent developments (nws).",
        "likes": 7,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.102,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.058,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.089,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.016,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.014,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 80,
    "label": "vhs · owned · film",
    "keywords": [
      "vhs",
      "owned",
      "film",
      "cave",
      "clowncongress",
      "digiranma"
    ],
    "t0_iso": "2026-11-17 17:33 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 4,
    "n_posts_total": 10,
    "is_viral": 1,
    "p_viral": 0.28,
    "velocity": 0.03,
    "max_followers": 18500,
    "lead_time_min": 259,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.63,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_80_0",
        "text": "Bluesky discussion on #vhs with focus on owned and recent developments (film).",
        "likes": 12,
        "reposts": 5,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_80_1",
        "text": "Bluesky discussion on #vhs with focus on owned and recent developments (film).",
        "likes": 37,
        "reposts": 3,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(18500 abonnés)",
          "value": 34,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.156,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.098,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.068,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.034,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.028,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 170,
    "label": "pretty · nominate · mario",
    "keywords": [
      "pretty",
      "nominate",
      "mario",
      "score",
      "communities",
      "dual"
    ],
    "t0_iso": "2026-11-17 17:37 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 4,
    "n_posts_total": 13,
    "is_viral": 1,
    "p_viral": 0.142,
    "velocity": 0.03,
    "max_followers": 89000,
    "lead_time_min": 191,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.61,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_170_0",
        "text": "Bluesky discussion on #pretty with focus on nominate and recent developments (mario).",
        "likes": 17,
        "reposts": 8,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_170_1",
        "text": "Bluesky discussion on #pretty with focus on nominate and recent developments (mario).",
        "likes": 39,
        "reposts": 12,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(89000 abonnés)",
          "value": 35,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 4,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.104,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.06,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.089,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.017,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.014,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 162,
    "label": "idea · hugo · oot",
    "keywords": [
      "idea",
      "hugo",
      "oot",
      "shot",
      "trying",
      "nauseating"
    ],
    "t0_iso": "2026-11-17 17:37 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 15,
    "is_viral": 0,
    "p_viral": 0.586,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 100,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.74,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_162_0",
        "text": "Bluesky discussion on #idea with focus on hugo and recent developments (oot).",
        "likes": 4,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_162_1",
        "text": "Bluesky discussion on #idea with focus on hugo and recent developments (oot).",
        "likes": 2,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(1100 abo)",
          "value": 13,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.273,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.184,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.022,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.07,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.059,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 187,
    "label": "album · apple · music",
    "keywords": [
      "album",
      "apple",
      "music",
      "mlb",
      "trum",
      "apnews"
    ],
    "t0_iso": "2026-11-17 17:42 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 14,
    "is_viral": 0,
    "p_viral": 0.92,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 65,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.96,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_187_0",
        "text": "Bluesky discussion on #album with focus on apple and recent developments (music).",
        "likes": 6,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_187_1",
        "text": "Bluesky discussion on #album with focus on apple and recent developments (music).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 4,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.4,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.278,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.028,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.11,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.092,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 161,
    "label": "shit · crap · claude",
    "keywords": [
      "shit",
      "crap",
      "claude",
      "brandy",
      "metro",
      "motown"
    ],
    "t0_iso": "2026-11-17 17:42 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 14,
    "is_viral": 0,
    "p_viral": 0.29,
    "velocity": 0.07,
    "max_followers": 120,
    "lead_time_min": 108,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.62,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_161_0",
        "text": "Bluesky discussion on #shit with focus on crap and recent developments (claude).",
        "likes": 3,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_161_1",
        "text": "Bluesky discussion on #shit with focus on crap and recent developments (claude).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.16,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.101,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.067,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.035,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.029,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 138,
    "label": "goodnight · williams · faggots",
    "keywords": [
      "goodnight",
      "williams",
      "faggots",
      "allergic",
      "fantasy",
      "poking"
    ],
    "t0_iso": "2026-11-17 18:21 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 4,
    "n_posts_total": 11,
    "is_viral": 1,
    "p_viral": 0.663,
    "velocity": 0.03,
    "max_followers": 89000,
    "lead_time_min": 274,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.82,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_138_0",
        "text": "Bluesky discussion on #goodnight with focus on williams and recent developments (faggots).",
        "likes": 4,
        "reposts": 21,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_138_1",
        "text": "Bluesky discussion on #goodnight with focus on williams and recent developments (faggots).",
        "likes": 24,
        "reposts": 5,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(89000 abonnés)",
          "value": 35,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.302,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.206,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.011,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.08,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.066,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 119,
    "label": "status · reason · test",
    "keywords": [
      "status",
      "reason",
      "test",
      "brasil",
      "grenoblequartierflaubert",
      "belledonnemassif"
    ],
    "t0_iso": "2026-11-17 18:27 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 12,
    "is_viral": 0,
    "p_viral": 0.307,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 136,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.61,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_119_0",
        "text": "Bluesky discussion on #status with focus on reason and recent developments (test).",
        "likes": 2,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_119_1",
        "text": "Bluesky discussion on #status with focus on reason and recent developments (test).",
        "likes": 3,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.167,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.106,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.064,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.037,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.031,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 172,
    "label": "wrong · could · possibly",
    "keywords": [
      "wrong",
      "could",
      "possibly",
      "fuck",
      "coloring",
      "clicked"
    ],
    "t0_iso": "2026-11-17 18:33 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 5,
    "n_posts_total": 18,
    "is_viral": 1,
    "p_viral": 0.783,
    "velocity": 0.07,
    "max_followers": 15000,
    "lead_time_min": 236,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.86,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        4,
        4,
        5
      ],
      "pred": [
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        6
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_172_0",
        "text": "Bluesky discussion on #wrong with focus on could and recent developments (possibly).",
        "likes": 24,
        "reposts": 15,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_172_1",
        "text": "Bluesky discussion on #wrong with focus on could and recent developments (possibly).",
        "likes": 38,
        "reposts": 21,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(15000 abonnés)",
          "value": 33,
          "group": 1,
          "is_bridge": true,
          "color": "#EF4444"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.348,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.239,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.007,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.094,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": 0.06,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.078,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 8,
    "label": "hampton · roads · virginia",
    "keywords": [
      "hampton",
      "roads",
      "virginia",
      "legion",
      "stupid",
      "radio"
    ],
    "t0_iso": "2026-11-17 19:57 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 11,
    "is_viral": 0,
    "p_viral": 0.727,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 138,
    "dominant_emotion": "Colère / Indignation",
    "emotion_score": 0.82,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_8_0",
        "text": "Bluesky discussion on #hampton with focus on roads and recent developments (virginia).",
        "likes": 3,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_8_1",
        "text": "Bluesky discussion on #hampton with focus on roads and recent developments (virginia).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.326,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.224,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.001,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.087,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.073,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 7,
    "label": "avg · cagewatchr · checked",
    "keywords": [
      "avg",
      "cagewatchr",
      "checked",
      "row",
      "pts",
      "approved"
    ],
    "t0_iso": "2026-11-17 21:01 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 10,
    "is_viral": 0,
    "p_viral": 0.745,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 76,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.81,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_7_0",
        "text": "Bluesky discussion on #avg with focus on cagewatchr and recent developments (checked).",
        "likes": 6,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_7_1",
        "text": "Bluesky discussion on #avg with focus on cagewatchr and recent developments (checked).",
        "likes": 7,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.333,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.229,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.002,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.089,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.074,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 173,
    "label": "speaking · blow · container",
    "keywords": [
      "speaking",
      "blow",
      "container",
      "blond",
      "dwp",
      "guillotine"
    ],
    "t0_iso": "2026-11-17 21:17 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 12,
    "is_viral": 0,
    "p_viral": 0.064,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 134,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.49,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_173_0",
        "text": "Bluesky discussion on #speaking with focus on blow and recent developments (container).",
        "likes": 5,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_173_1",
        "text": "Bluesky discussion on #speaking with focus on blow and recent developments (container).",
        "likes": 5,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.074,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.038,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.1,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.008,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.006,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 78,
    "label": "stupid · pillow · anybody",
    "keywords": [
      "stupid",
      "pillow",
      "anybody",
      "cheezer",
      "cutie",
      "nuking"
    ],
    "t0_iso": "2026-11-17 21:42 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 11,
    "is_viral": 0,
    "p_viral": 0.193,
    "velocity": 0.07,
    "max_followers": 280,
    "lead_time_min": 78,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.62,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_78_0",
        "text": "Bluesky discussion on #stupid with focus on pillow and recent developments (anybody).",
        "likes": 3,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_78_1",
        "text": "Bluesky discussion on #stupid with focus on pillow and recent developments (anybody).",
        "likes": 3,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(280 abonnés)",
          "value": 19,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(3200 abo)",
          "value": 15,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 2,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 2,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.123,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.074,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.081,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.023,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.019,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 154,
    "label": "money · lnp · allowence",
    "keywords": [
      "money",
      "lnp",
      "allowence",
      "barons",
      "governments",
      "interactions"
    ],
    "t0_iso": "2026-11-17 22:31 UTC",
    "n_posts_30m": 2,
    "n_posts_6h": 3,
    "n_posts_total": 15,
    "is_viral": 0,
    "p_viral": 0.735,
    "velocity": 0.07,
    "max_followers": 45,
    "lead_time_min": 86,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.78,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3
      ],
      "pred": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_154_0",
        "text": "Bluesky discussion on #money with focus on lnp and recent developments (allowence).",
        "likes": 2,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_154_1",
        "text": "Bluesky discussion on #money with focus on lnp and recent developments (allowence).",
        "likes": 2,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(80 abo)",
          "value": 8,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.329,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.226,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.0,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.088,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.073,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 98,
    "label": "gta · vii · music",
    "keywords": [
      "gta",
      "vii",
      "music",
      "admittedly",
      "jaw",
      "replace"
    ],
    "t0_iso": "2026-11-18 00:18 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 19,
    "is_viral": 0,
    "p_viral": 0.124,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 138,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.56,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_98_0",
        "text": "Bluesky discussion on #gta with focus on vii and recent developments (music).",
        "likes": 7,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_98_1",
        "text": "Bluesky discussion on #gta with focus on vii and recent developments (music).",
        "likes": 3,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(420 abo)",
          "value": 11,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 3,
          "to": 5,
          "arrows": "to",
          "width": 1
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.097,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.055,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.091,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.015,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.012,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 2,
    "label": "즐길 · 함께 · 없음",
    "keywords": [
      "즐길",
      "함께",
      "없음",
      "인원",
      "강원도",
      "경기도"
    ],
    "t0_iso": "2026-11-18 07:52 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 10,
    "is_viral": 0,
    "p_viral": 0.348,
    "velocity": 0.03,
    "max_followers": 120,
    "lead_time_min": 77,
    "dominant_emotion": "Joie / Enthousiasme",
    "emotion_score": 0.65,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_2_0",
        "text": "Bluesky discussion on #즐길 with focus on 함께 and recent developments (없음).",
        "likes": 4,
        "reposts": 1,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_2_1",
        "text": "Bluesky discussion on #즐길 with focus on 함께 and recent developments (없음).",
        "likes": 2,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(120 abonnés)",
          "value": 16,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(1100 abo)",
          "value": 13,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.182,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.117,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.058,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.042,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.035,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 171,
    "label": "score · final · november",
    "keywords": [
      "score",
      "final",
      "november",
      "maptap",
      "whoop",
      "wquers"
    ],
    "t0_iso": "2026-11-18 11:36 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 2,
    "n_posts_total": 11,
    "is_viral": 0,
    "p_viral": 0.837,
    "velocity": 0.03,
    "max_followers": 45,
    "lead_time_min": 76,
    "dominant_emotion": "Peur / Alerte",
    "emotion_score": 0.86,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_171_0",
        "text": "Bluesky discussion on #score with focus on final and recent developments (november).",
        "likes": 2,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_171_1",
        "text": "Bluesky discussion on #score with focus on final and recent developments (november).",
        "likes": 3,
        "reposts": 1,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(45 abonnés)",
          "value": 14,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(80 abo)",
          "value": 8,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(3200 abo)",
          "value": 15,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(150 abo)",
          "value": 9,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(1100 abo)",
          "value": 13,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(150 abo)",
          "value": 9,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 6,
          "arrows": "to",
          "width": 2
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.368,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.254,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": 0.016,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.1,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.084,
        "family": "H2 Graphe"
      }
    ]
  },
  {
    "id": 5,
    "label": "anal · xporn · tits",
    "keywords": [
      "anal",
      "xporn",
      "tits",
      "bigtits",
      "spicysky",
      "xhamster"
    ],
    "t0_iso": "2026-11-19 08:31 UTC",
    "n_posts_30m": 1,
    "n_posts_6h": 1,
    "n_posts_total": 16,
    "is_viral": 0,
    "p_viral": 0.199,
    "velocity": 0.03,
    "max_followers": 850,
    "lead_time_min": 142,
    "dominant_emotion": "Surprise / Rupture",
    "emotion_score": 0.58,
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
        90,
        120,
        180,
        240,
        300,
        360
      ],
      "real": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "pred": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "posts": [
      {
        "author": "did:plc:author_5_0",
        "text": "Bluesky discussion on #anal with focus on xporn and recent developments (tits).",
        "likes": 6,
        "reposts": 2,
        "lang": "fr",
        "time_offset_min": 2
      },
      {
        "author": "did:plc:author_5_1",
        "text": "Bluesky discussion on #anal with focus on xporn and recent developments (tits).",
        "likes": 5,
        "reposts": 2,
        "lang": "en",
        "time_offset_min": 6
      }
    ],
    "network": {
      "nodes": [
        {
          "id": 1,
          "label": "Relais Principal\n(850 abonnés)",
          "value": 23,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 2,
          "label": "Auteur #2\n(150 abo)",
          "value": 9,
          "group": 3,
          "is_bridge": true,
          "color": "#F59E0B"
        },
        {
          "id": 3,
          "label": "Auteur #3\n(420 abo)",
          "value": 11,
          "group": 1,
          "is_bridge": true,
          "color": "#3B82F6"
        },
        {
          "id": 4,
          "label": "Auteur #4\n(420 abo)",
          "value": 11,
          "group": 2,
          "is_bridge": false,
          "color": "#10B981"
        },
        {
          "id": 5,
          "label": "Auteur #5\n(3200 abo)",
          "value": 15,
          "group": 3,
          "is_bridge": false,
          "color": "#F59E0B"
        },
        {
          "id": 6,
          "label": "Auteur #6\n(80 abo)",
          "value": 8,
          "group": 1,
          "is_bridge": false,
          "color": "#3B82F6"
        }
      ],
      "edges": [
        {
          "from": 1,
          "to": 2,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 3,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 4,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 1,
          "to": 5,
          "arrows": "to",
          "width": 2
        },
        {
          "from": 5,
          "to": 6,
          "arrows": "to",
          "width": 1
        }
      ]
    },
    "shap": [
      {
        "feature": "f_g_log_followers_max",
        "name": "Audience max du relais",
        "value": 0.126,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_t_eng_per_post",
        "name": "Taux d'engagement / post",
        "value": 0.076,
        "family": "H1 Temps"
      },
      {
        "feature": "f_g_isolated_ratio",
        "name": "Ratio d'auteurs isolés",
        "value": -0.08,
        "family": "H2 Graphe"
      },
      {
        "feature": "f_s_emotion_lex",
        "name": "Intensité lexicale émotion",
        "value": 0.024,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_s_link_rate",
        "name": "Taux de liens externes",
        "value": -0.04,
        "family": "H3 Sémantique"
      },
      {
        "feature": "f_g_betweenness_max",
        "name": "Centralité d'intermédiarité",
        "value": 0.02,
        "family": "H2 Graphe"
      }
    ]
  }
];

const FEATURE_IMPORTANCE_DATA = [
  {
    "variable": "f_g_log_followers_max",
    "importance": 0.4001,
    "std": 0.0745,
    "family": "H2 Graphe"
  },
  {
    "variable": "f_t_eng_per_post",
    "importance": 0.2993,
    "std": 0.0783,
    "family": "H1 Temps"
  },
  {
    "variable": "f_g_isolated_ratio",
    "importance": 0.0714,
    "std": 0.111,
    "family": "H2 Graphe"
  },
  {
    "variable": "f_g_log_followers_mean",
    "importance": 0.0676,
    "std": 0.1217,
    "family": "H2 Graphe"
  },
  {
    "variable": "f_s_link_rate",
    "importance": 0.0503,
    "std": 0.102,
    "family": "H3 Sémantique"
  },
  {
    "variable": "f_g_betweenness_max",
    "importance": 0.05,
    "std": 0.1,
    "family": "H2 Graphe"
  },
  {
    "variable": "f_s_emotion_lex",
    "importance": 0.025,
    "std": 0.075,
    "family": "H3 Sémantique"
  },
  {
    "variable": "f_g_author_entropy",
    "importance": 0.0232,
    "std": 0.0757,
    "family": "H2 Graphe"
  },
  {
    "variable": "f_s_media_rate",
    "importance": 0.0148,
    "std": 0.0754,
    "family": "H3 Sémantique"
  },
  {
    "variable": "f_t_rate0",
    "importance": 0.0,
    "std": 0.0,
    "family": "H1 Temps"
  },
  {
    "variable": "f_t_rate2",
    "importance": 0.0,
    "std": 0.0,
    "family": "H1 Temps"
  },
  {
    "variable": "f_t_rate1",
    "importance": 0.0,
    "std": 0.0,
    "family": "H1 Temps"
  },
  {
    "variable": "f_t_early_eng_ratio",
    "importance": 0.0,
    "std": 0.0,
    "family": "H1 Temps"
  },
  {
    "variable": "f_t_n_reposts",
    "importance": 0.0,
    "std": 0.0,
    "family": "H1 Temps"
  },
  {
    "variable": "f_t_n_likes",
    "importance": 0.0,
    "std": 0.0,
    "family": "H1 Temps"
  }
];

const MODEL_BENCHMARK_DATA = [
  {
    "modele": "B0 prévalence",
    "backend": "prior",
    "n_variables": 28,
    "pr_auc": 0.207,
    "pr_auc_ci": "[0.103 ; 0.31]",
    "roc_auc": 0.5,
    "brier": 0.205,
    "f1": 0.343,
    "precision_k": 0.167,
    "n_alerts": 58,
    "lead_time": "-27.5"
  },
  {
    "modele": "B1 règle de vélocité",
    "backend": "logit(log n_posts)",
    "n_variables": 28,
    "pr_auc": 0.364,
    "pr_auc_ci": "[0.137 ; 0.596]",
    "roc_auc": 0.637,
    "brier": 0.226,
    "f1": 0.421,
    "precision_k": 0.667,
    "n_alerts": 7,
    "lead_time": "-27.5"
  },
  {
    "modele": "B2 logistique temporelle",
    "backend": "sklearn-LogisticRegression",
    "n_variables": 13,
    "pr_auc": 0.259,
    "pr_auc_ci": "[0.124 ; 0.492]",
    "roc_auc": 0.551,
    "brier": 0.228,
    "f1": 0.343,
    "precision_k": 0.333,
    "n_alerts": 58,
    "lead_time": "-27.5"
  },
  {
    "modele": "M1 toutes variables",
    "backend": "xgboost",
    "n_variables": 28,
    "pr_auc": 0.244,
    "pr_auc_ci": "[0.115 ; 0.485]",
    "roc_auc": 0.54,
    "brier": 0.29,
    "f1": 0.0,
    "precision_k": 0.333,
    "n_alerts": 1,
    "lead_time": "N/A"
  },
  {
    "modele": "M2 toutes variables",
    "backend": "lightgbm",
    "n_variables": 28,
    "pr_auc": 0.207,
    "pr_auc_ci": "[0.103 ; 0.31]",
    "roc_auc": 0.5,
    "brier": 0.205,
    "f1": 0.343,
    "precision_k": 0.167,
    "n_alerts": 58,
    "lead_time": "-27.5"
  },
  {
    "modele": "M1 sans graphe",
    "backend": "xgboost",
    "n_variables": 19,
    "pr_auc": 0.184,
    "pr_auc_ci": "[0.096 ; 0.328]",
    "roc_auc": 0.431,
    "brier": 0.303,
    "f1": 0.321,
    "precision_k": 0.0,
    "n_alerts": 44,
    "lead_time": "-27.5"
  },
  {
    "modele": "M1 sans sémantique",
    "backend": "xgboost",
    "n_variables": 22,
    "pr_auc": 0.318,
    "pr_auc_ci": "[0.159 ; 0.569]",
    "roc_auc": 0.648,
    "brier": 0.246,
    "f1": 0.0,
    "precision_k": 0.333,
    "n_alerts": 1,
    "lead_time": "N/A"
  },
  {
    "modele": "M1 temporel seul",
    "backend": "xgboost",
    "n_variables": 13,
    "pr_auc": 0.389,
    "pr_auc_ci": "[0.176 ; 0.654]",
    "roc_auc": 0.678,
    "brier": 0.203,
    "f1": 0.414,
    "precision_k": 0.5,
    "n_alerts": 17,
    "lead_time": "-27.5"
  }
];
