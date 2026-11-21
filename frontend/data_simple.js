// Données simplifiées et pédagogiques pour le prototype PFA Viralité
// Conçu pour une compréhension immédiate par le jury et l'encadrante

const TOPICS = [
  {
    "id": 187,
    "title": "Actualité Musique : #Album",
    "category": "Musique",
    "label_raw": "album · apple · music",
    "keywords": [
      "album",
      "apple",
      "music",
      "mlb",
      "trum",
      "apnews"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "17:42",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.92,
    "pct": 92,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Diffusion d'œuvres et actualités d'artistes",
    "max_followers": 120,
    "lead_hours": 1.6,
    "lead_time_min": 97,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "120 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.88 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (album, apple).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_187_1.bsky.social",
        "text": "À propos de #album : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 8,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_187_2.bsky.social",
        "text": "Point important sur apple et music sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 4,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 90,
    "title": "Gaming & Divertissement : #Bandle",
    "category": "Jeux Vidéo",
    "label_raw": "bandle · streak · canucklegame",
    "keywords": [
      "bandle",
      "streak",
      "canucklegame",
      "canuckle",
      "born",
      "chihuahua"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:41",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.841,
    "pct": 84,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Échanges de joueurs et streamers",
    "max_followers": 850,
    "lead_hours": 1.6,
    "lead_time_min": 94,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.85 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (bandle, streak).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_90_1.bsky.social",
        "text": "À propos de #bandle : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_90_2.bsky.social",
        "text": "Point important sur streak et canucklegame sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 5,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 171,
    "title": "Échange Thématique : #Score",
    "category": "Général",
    "label_raw": "score · final · november",
    "keywords": [
      "score",
      "final",
      "november",
      "maptap",
      "whoop",
      "wquers"
    ],
    "t0_date": "18 nov 2026",
    "t0_time": "11:36",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.837,
    "pct": 84,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 850,
    "lead_hours": 1.4,
    "lead_time_min": 84,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.85 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (score, final).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_171_1.bsky.social",
        "text": "À propos de #score : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 13,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_171_2.bsky.social",
        "text": "Point important sur final et november sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 14,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 172,
    "title": "Échange Thématique : #Wrong",
    "category": "Général",
    "label_raw": "wrong · could · possibly",
    "keywords": [
      "wrong",
      "could",
      "possibly",
      "fuck",
      "coloring",
      "clicked"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "18:33",
    "n_30m": 2,
    "n_6h": 5,
    "is_viral": 1,
    "p_viral": 0.783,
    "pct": 78,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 12500,
    "lead_hours": 3.7,
    "lead_time_min": 222,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "12,500 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 12,500 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.83 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (wrong, could).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        4,
        4,
        5,
        6
      ]
    },
    "posts": [
      {
        "author": "@observateur_172_1.bsky.social",
        "text": "À propos de #wrong : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 54,
        "reposts": 43,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_172_2.bsky.social",
        "text": "Point important sur could et possibly sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 15,
        "reposts": 15,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 18,
    "title": "Éducation & Enfance : Récits et Témoignages",
    "category": "Société & Famille",
    "label_raw": "like · child · starting",
    "keywords": [
      "like",
      "child",
      "starting",
      "feel",
      "not",
      "slap"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "08:28",
    "n_30m": 3,
    "n_6h": 8,
    "is_viral": 1,
    "p_viral": 0.779,
    "pct": 78,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Forte résonance émotionnelle parentale relayée rapidement",
    "max_followers": 48000,
    "lead_hours": 4.4,
    "lead_time_min": 264,
    "velocity_posts_h": 6.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "48,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 48,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "3 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 6 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.83 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (like, child).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        6,
        7,
        8,
        9
      ]
    },
    "posts": [
      {
        "author": "@observateur_18_1.bsky.social",
        "text": "À propos de #like : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 38,
        "reposts": 7,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_18_2.bsky.social",
        "text": "Point important sur child et starting sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 36,
        "reposts": 6,
        "time_ago": "Il y a 23 min"
      },
      {
        "author": "@observateur_18_3.bsky.social",
        "text": "Analyse rapide : pourquoi #like attire autant l'attention ces dernières minutes ? Explications en fil de discussion.",
        "likes": 44,
        "reposts": 42,
        "time_ago": "Il y a 16 min"
      }
    ]
  },
  {
    "id": 179,
    "title": "Actualité Musique : #Rock",
    "category": "Musique",
    "label_raw": "rock · played · screen",
    "keywords": [
      "rock",
      "played",
      "screen",
      "dictatorship",
      "failed",
      "roundball"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "08:31",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.745,
    "pct": 74,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Diffusion d'œuvres et actualités d'artistes",
    "max_followers": 340,
    "lead_hours": 2.0,
    "lead_time_min": 123,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (rock, played).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_179_1.bsky.social",
        "text": "À propos de #rock : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 12,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_179_2.bsky.social",
        "text": "Point important sur played et screen sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 1,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 7,
    "title": "Échange Thématique : #Avg",
    "category": "Général",
    "label_raw": "avg · cagewatchr · checked",
    "keywords": [
      "avg",
      "cagewatchr",
      "checked",
      "row",
      "pts",
      "approved"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "21:01",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.745,
    "pct": 74,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 1.7,
    "lead_time_min": 101,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (avg, cagewatchr).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_7_1.bsky.social",
        "text": "À propos de #avg : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 3,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_7_2.bsky.social",
        "text": "Point important sur cagewatchr et checked sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 12,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 154,
    "title": "Politique & Débats : #Money",
    "category": "Actualités",
    "label_raw": "money · lnp · allowence",
    "keywords": [
      "money",
      "lnp",
      "allowence",
      "barons",
      "governments",
      "interactions"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "22:31",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.735,
    "pct": 74,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Commentaires sur les actualités publiques",
    "max_followers": 120,
    "lead_hours": 1.3,
    "lead_time_min": 78,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "120 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (money, lnp).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_154_1.bsky.social",
        "text": "À propos de #money : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 3,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_154_2.bsky.social",
        "text": "Point important sur lnp et allowence sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 8,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 37,
    "title": "Échange Thématique : #Lucky",
    "category": "Général",
    "label_raw": "lucky · treason · lookin",
    "keywords": [
      "lucky",
      "treason",
      "lookin",
      "larp",
      "walks",
      "tomorrow"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:38",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.727,
    "pct": 73,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 1.6,
    "lead_time_min": 96,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (lucky, treason).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_37_1.bsky.social",
        "text": "À propos de #lucky : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 3,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_37_2.bsky.social",
        "text": "Point important sur treason et lookin sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 8,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 8,
    "title": "Échange Thématique : #Hampton",
    "category": "Général",
    "label_raw": "hampton · roads · virginia",
    "keywords": [
      "hampton",
      "roads",
      "virginia",
      "legion",
      "stupid",
      "radio"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "19:57",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.727,
    "pct": 73,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.9,
    "lead_time_min": 116,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (hampton, roads).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_8_1.bsky.social",
        "text": "À propos de #hampton : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 9,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_8_2.bsky.social",
        "text": "Point important sur roads et virginia sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 7,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 115,
    "title": "Moments Festifs & Découvertes Étonnantes",
    "category": "Insolite & Événements",
    "label_raw": "holy · celebration · oko",
    "keywords": [
      "holy",
      "celebration",
      "oko",
      "fuck",
      "glitch",
      "matrix"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "08:18",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.719,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Publication singulière sans relais communautaire étendu",
    "max_followers": 120,
    "lead_hours": 1.3,
    "lead_time_min": 80,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "120 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (holy, celebration).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_115_1.bsky.social",
        "text": "À propos de #holy : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 7,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_115_2.bsky.social",
        "text": "Point important sur celebration et oko sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 3,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 53,
    "title": "Politique & Débats : #Afd",
    "category": "Actualités",
    "label_raw": "afd · area · discussion",
    "keywords": [
      "afd",
      "area",
      "discussion",
      "forecast",
      "issues",
      "nov"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "10:04",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.719,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Commentaires sur les actualités publiques",
    "max_followers": 1400,
    "lead_hours": 1.9,
    "lead_time_min": 114,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (afd, area).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_53_1.bsky.social",
        "text": "À propos de #afd : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 4,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_53_2.bsky.social",
        "text": "Point important sur area et discussion sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 9,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 6,
    "title": "Actualité Musique : #Krush",
    "category": "Musique",
    "label_raw": "krush · detected · artist",
    "keywords": [
      "krush",
      "detected",
      "artist",
      "pst",
      "song",
      "listen"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "10:24",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.719,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Diffusion d'œuvres et actualités d'artistes",
    "max_followers": 340,
    "lead_hours": 1.1,
    "lead_time_min": 68,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (krush, detected).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_6_1.bsky.social",
        "text": "À propos de #krush : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 10,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_6_2.bsky.social",
        "text": "Point important sur detected et artist sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 2,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 108,
    "title": "Échange Thématique : #Pages",
    "category": "Général",
    "label_raw": "pages · flipper · dress",
    "keywords": [
      "pages",
      "flipper",
      "dress",
      "reality",
      "chats",
      "elevatespatoronto"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "10:28",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.719,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 2.0,
    "lead_time_min": 119,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (pages, flipper).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_108_1.bsky.social",
        "text": "À propos de #pages : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 7,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_108_2.bsky.social",
        "text": "Point important sur flipper et dress sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 13,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 22,
    "title": "Échange Thématique : #Says",
    "category": "Général",
    "label_raw": "says · agreement · cafe",
    "keywords": [
      "says",
      "agreement",
      "cafe",
      "bugmenot",
      "crab",
      "drake"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:48",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.719,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 1.0,
    "lead_time_min": 62,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (says, agreement).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_22_1.bsky.social",
        "text": "À propos de #says : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_22_2.bsky.social",
        "text": "Point important sur agreement et cafe sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 10,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 88,
    "title": "Correspondances & Révélations d'Emails",
    "category": "Médias & Presse",
    "label_raw": "email · finds · framed",
    "keywords": [
      "email",
      "finds",
      "framed",
      "poster",
      "how",
      "clock"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "13:50",
    "n_30m": 1,
    "n_6h": 4,
    "is_viral": 1,
    "p_viral": 0.719,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Fuite ou capture d'écran partagée par des comptes influents",
    "max_followers": 89000,
    "lead_hours": 4.7,
    "lead_time_min": 283,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "89,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 89,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (email, finds).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        3,
        3,
        4
      ]
    },
    "posts": [
      {
        "author": "@observateur_88_1.bsky.social",
        "text": "À propos de #email : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 37,
        "reposts": 43,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_88_2.bsky.social",
        "text": "Point important sur finds et framed sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 29,
        "reposts": 33,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 19,
    "title": "Échange Thématique : #Debannie",
    "category": "Général",
    "label_raw": "debannie · epidemic · loneliness",
    "keywords": [
      "debannie",
      "epidemic",
      "loneliness",
      "inflicted",
      "self",
      "male"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "16:32",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.719,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.9,
    "lead_time_min": 111,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (debannie, epidemic).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_19_1.bsky.social",
        "text": "À propos de #debannie : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_19_2.bsky.social",
        "text": "Point important sur epidemic et loneliness sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 1,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 73,
    "title": "Échange Thématique : #Fish",
    "category": "Général",
    "label_raw": "fish · blowing · west",
    "keywords": [
      "fish",
      "blowing",
      "west",
      "weeks",
      "ugh",
      "dagen"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:12",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.715,
    "pct": 72,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 2.3,
    "lead_time_min": 139,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.82 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (fish, blowing).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_73_1.bsky.social",
        "text": "À propos de #fish : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 13,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_73_2.bsky.social",
        "text": "Point important sur blowing et west sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 5,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 51,
    "title": "Échange Thématique : #Literary",
    "category": "Général",
    "label_raw": "literary · drop · ubiquiti",
    "keywords": [
      "literary",
      "drop",
      "ubiquiti",
      "pocket",
      "something",
      "stock"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "10:08",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.701,
    "pct": 70,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 1.1,
    "lead_time_min": 63,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.81 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (literary, drop).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_51_1.bsky.social",
        "text": "À propos de #literary : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 9,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_51_2.bsky.social",
        "text": "Point important sur drop et ubiquiti sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 14,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 169,
    "title": "Échange Thématique : #Pathetic",
    "category": "Général",
    "label_raw": "pathetic · analysis · yalta",
    "keywords": [
      "pathetic",
      "analysis",
      "yalta",
      "direct",
      "twitch",
      "dhillon"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "16:50",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.693,
    "pct": 69,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.2,
    "lead_time_min": 71,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.81 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (pathetic, analysis).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_169_1.bsky.social",
        "text": "À propos de #pathetic : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 14,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_169_2.bsky.social",
        "text": "Point important sur analysis et yalta sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 2,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 48,
    "title": "Échange Thématique : #Bluesky",
    "category": "Général",
    "label_raw": "bluesky · town · yours",
    "keywords": [
      "bluesky",
      "town",
      "yours",
      "ukraini",
      "job",
      "slava"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:34",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.668,
    "pct": 67,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.6,
    "lead_time_min": 93,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.8 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (bluesky, town).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_48_1.bsky.social",
        "text": "À propos de #bluesky : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_48_2.bsky.social",
        "text": "Point important sur town et yours sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 7,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 138,
    "title": "Échange Thématique : #Goodnight",
    "category": "Général",
    "label_raw": "goodnight · williams · faggots",
    "keywords": [
      "goodnight",
      "williams",
      "faggots",
      "allergic",
      "fantasy",
      "poking"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "18:21",
    "n_30m": 1,
    "n_6h": 4,
    "is_viral": 1,
    "p_viral": 0.663,
    "pct": 66,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 24000,
    "lead_hours": 4.5,
    "lead_time_min": 269,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "24,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 24,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.8 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (goodnight, williams).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        3,
        3,
        4
      ]
    },
    "posts": [
      {
        "author": "@observateur_138_1.bsky.social",
        "text": "À propos de #goodnight : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 17,
        "reposts": 24,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_138_2.bsky.social",
        "text": "Point important sur williams et faggots sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 73,
        "reposts": 40,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 74,
    "title": "Échange Thématique : #Hours",
    "category": "Général",
    "label_raw": "hours · alcee · cover",
    "keywords": [
      "hours",
      "alcee",
      "cover",
      "barlow",
      "creation",
      "earnings"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "14:19",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.643,
    "pct": 64,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 2.1,
    "lead_time_min": 125,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.79 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (hours, alcee).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_74_1.bsky.social",
        "text": "À propos de #hours : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 10,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_74_2.bsky.social",
        "text": "Point important sur alcee et cover sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 14,
        "reposts": 1,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 76,
    "title": "Vœux & Célébrations Communautaires",
    "category": "Communauté & Fêtes",
    "label_raw": "happy · birthday · day",
    "keywords": [
      "happy",
      "birthday",
      "day",
      "celebrate",
      "thursday",
      "humpday"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "11:38",
    "n_30m": 2,
    "n_6h": 5,
    "is_viral": 1,
    "p_viral": 0.593,
    "pct": 59,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Multiplication rapide de messages festifs synchronisés",
    "max_followers": 24000,
    "lead_hours": 4.2,
    "lead_time_min": 251,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "24,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 24,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.78 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (happy, birthday).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        5
      ]
    },
    "posts": [
      {
        "author": "@observateur_76_1.bsky.social",
        "text": "À propos de #happy : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 28,
        "reposts": 35,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_76_2.bsky.social",
        "text": "Point important sur birthday et day sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 62,
        "reposts": 19,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 162,
    "title": "Échange Thématique : #Idea",
    "category": "Général",
    "label_raw": "idea · hugo · oot",
    "keywords": [
      "idea",
      "hugo",
      "oot",
      "shot",
      "trying",
      "nauseating"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "17:37",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.586,
    "pct": 59,
    "verdict": "Alerte Virale Forte",
    "verdict_color": "red",
    "action_advice": "Diffusion massive prévue dans les 6h. Alerter l'équipe de veille.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 2.1,
    "lead_time_min": 127,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.78 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (idea, hugo).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_162_1.bsky.social",
        "text": "À propos de #idea : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 7,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_162_2.bsky.social",
        "text": "Point important sur hugo et oot sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 8,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 97,
    "title": "Échange Thématique : #Private",
    "category": "Général",
    "label_raw": "private · fences · turd",
    "keywords": [
      "private",
      "fences",
      "turd",
      "gave",
      "boyfriend",
      "believe"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "11:37",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.543,
    "pct": 54,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 2.0,
    "lead_time_min": 122,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.76 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (private, fences).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_97_1.bsky.social",
        "text": "À propos de #private : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 2,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_97_2.bsky.social",
        "text": "Point important sur fences et turd sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 12,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 40,
    "title": "Débats Idéologiques & Valeurs Citoyennes",
    "category": "Politique & Opinions",
    "label_raw": "wow · add · fascist",
    "keywords": [
      "wow",
      "add",
      "fascist",
      "actively",
      "values",
      "krillion"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:22",
    "n_30m": 1,
    "n_6h": 4,
    "is_viral": 1,
    "p_viral": 0.543,
    "pct": 54,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Controverse polarisante déclenchant une vague de citations",
    "max_followers": 89000,
    "lead_hours": 4.6,
    "lead_time_min": 277,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "89,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 89,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.76 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (wow, add).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_40_1.bsky.social",
        "text": "À propos de #wow : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 77,
        "reposts": 15,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_40_2.bsky.social",
        "text": "Point important sur add et fascist sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 22,
        "reposts": 39,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 75,
    "title": "Musique & Hommage aux Grands Artistes",
    "category": "Culture & Musique",
    "label_raw": "great · beast · mccartney",
    "keywords": [
      "great",
      "beast",
      "mccartney",
      "everytime",
      "predicted",
      "could"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "13:15",
    "n_30m": 2,
    "n_6h": 5,
    "is_viral": 1,
    "p_viral": 0.543,
    "pct": 54,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Hommage culturel avec diffusion d'extraits musicaux",
    "max_followers": 24000,
    "lead_hours": 3.9,
    "lead_time_min": 231,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "24,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 24,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.76 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (great, beast).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        5
      ]
    },
    "posts": [
      {
        "author": "@observateur_75_1.bsky.social",
        "text": "À propos de #great : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 91,
        "reposts": 36,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_75_2.bsky.social",
        "text": "Point important sur beast et mccartney sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 66,
        "reposts": 36,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 174,
    "title": "Échange Thématique : #True",
    "category": "Général",
    "label_raw": "true · said · dwts",
    "keywords": [
      "true",
      "said",
      "dwts",
      "followers",
      "case",
      "where"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "11:54",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.534,
    "pct": 53,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 2.3,
    "lead_time_min": 137,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.76 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (true, said).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_174_1.bsky.social",
        "text": "À propos de #true : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 7,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_174_2.bsky.social",
        "text": "Point important sur said et dwts sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 9,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 62,
    "title": "Échange Thématique : #Gang",
    "category": "Général",
    "label_raw": "gang · births · cctag",
    "keywords": [
      "gang",
      "births",
      "cctag",
      "beans",
      "christenings",
      "fieldsofmistria"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:24",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.519,
    "pct": 52,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 850,
    "lead_hours": 1.5,
    "lead_time_min": 92,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.76 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (gang, births).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_62_1.bsky.social",
        "text": "À propos de #gang : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 11,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_62_2.bsky.social",
        "text": "Point important sur births et cctag sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 10,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 68,
    "title": "Politique & Débats : #Healthcare",
    "category": "Actualités",
    "label_raw": "healthcare · governance · loss",
    "keywords": [
      "healthcare",
      "governance",
      "loss",
      "none",
      "amat",
      "appointments"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "10:05",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.515,
    "pct": 52,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Commentaires sur les actualités publiques",
    "max_followers": 120,
    "lead_hours": 1.8,
    "lead_time_min": 110,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "120 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.76 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (healthcare, governance).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_68_1.bsky.social",
        "text": "À propos de #healthcare : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 7,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_68_2.bsky.social",
        "text": "Point important sur governance et loss sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 9,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 14,
    "title": "Échange Thématique : #Fuzzyradio",
    "category": "Général",
    "label_raw": "fuzzyradio · dab · shortly",
    "keywords": [
      "fuzzyradio",
      "dab",
      "shortly",
      "presenters",
      "air",
      "follow"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "14:34",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.515,
    "pct": 52,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 120,
    "lead_hours": 1.1,
    "lead_time_min": 65,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "120 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.76 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (fuzzyradio, dab).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_14_1.bsky.social",
        "text": "À propos de #fuzzyradio : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 12,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_14_2.bsky.social",
        "text": "Point important sur dab et shortly sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 12,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 96,
    "title": "Échange Thématique : #Absolute",
    "category": "Général",
    "label_raw": "absolute · along · abomination",
    "keywords": [
      "absolute",
      "along",
      "abomination",
      "dorks",
      "enriching",
      "dogg"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "09:05",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.348,
    "pct": 35,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.2,
    "lead_time_min": 74,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.7 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (absolute, along).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_96_1.bsky.social",
        "text": "À propos de #absolute : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 14,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_96_2.bsky.social",
        "text": "Point important sur along et abomination sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 14,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 130,
    "title": "Cuisine, Recettes & Découvertes Culinaires",
    "category": "Art de Vivre & Food",
    "label_raw": "course · delicious · ladies",
    "keywords": [
      "course",
      "delicious",
      "ladies",
      "taken",
      "dragonballsuper",
      "haley"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "11:03",
    "n_30m": 1,
    "n_6h": 4,
    "is_viral": 1,
    "p_viral": 0.348,
    "pct": 35,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Partage de photos de plats avec fort taux de signets",
    "max_followers": 89000,
    "lead_hours": 3.2,
    "lead_time_min": 193,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "89,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 89,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.7 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (course, delicious).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_130_1.bsky.social",
        "text": "À propos de #course : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 16,
        "reposts": 10,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_130_2.bsky.social",
        "text": "Point important sur delicious et ladies sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 68,
        "reposts": 8,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 23,
    "title": "Santé, Sport & Entraînement Matinal",
    "category": "Bien-être & Sport",
    "label_raw": "morning · good · muscle",
    "keywords": [
      "morning",
      "good",
      "muscle",
      "bbsky",
      "cramp",
      "gathering"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:59",
    "n_30m": 2,
    "n_6h": 5,
    "is_viral": 1,
    "p_viral": 0.348,
    "pct": 35,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Conseils d'exercices republiés par des communautés sportives",
    "max_followers": 48000,
    "lead_hours": 3.4,
    "lead_time_min": 203,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "48,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 48,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.7 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (morning, good).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        4
      ]
    },
    "posts": [
      {
        "author": "@observateur_23_1.bsky.social",
        "text": "À propos de #morning : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 41,
        "reposts": 13,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_23_2.bsky.social",
        "text": "Point important sur good et muscle sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 93,
        "reposts": 19,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 2,
    "title": "Échange Thématique : #즐길",
    "category": "Général",
    "label_raw": "즐길 · 함께 · 없음",
    "keywords": [
      "즐길",
      "함께",
      "없음",
      "인원",
      "강원도",
      "경기도"
    ],
    "t0_date": "18 nov 2026",
    "t0_time": "07:52",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.348,
    "pct": 35,
    "verdict": "À Surveiller de Près",
    "verdict_color": "amber",
    "action_advice": "Frémissement détecté. Surveiller si un relais influent republie.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.6,
    "lead_time_min": 95,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.7 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (즐길, 함께).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_2_1.bsky.social",
        "text": "À propos de #즐길 : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 6,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_2_2.bsky.social",
        "text": "Point important sur 함께 et 없음 sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 4,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 119,
    "title": "Échange Thématique : #Status",
    "category": "Général",
    "label_raw": "status · reason · test",
    "keywords": [
      "status",
      "reason",
      "test",
      "brasil",
      "grenoblequartierflaubert",
      "belledonnemassif"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "18:27",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.307,
    "pct": 31,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 850,
    "lead_hours": 2.1,
    "lead_time_min": 126,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.69 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (status, reason).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_119_1.bsky.social",
        "text": "À propos de #status : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 3,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_119_2.bsky.social",
        "text": "Point important sur reason et test sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 7,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 161,
    "title": "Échange Thématique : #Shit",
    "category": "Général",
    "label_raw": "shit · crap · claude",
    "keywords": [
      "shit",
      "crap",
      "claude",
      "brandy",
      "metro",
      "motown"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "17:42",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.29,
    "pct": 29,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 1.2,
    "lead_time_min": 70,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.69 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (shit, crap).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_161_1.bsky.social",
        "text": "À propos de #shit : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_161_2.bsky.social",
        "text": "Point important sur crap et claude sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 12,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 80,
    "title": "Cinéma Rétro & Nostalgie Cassettes VHS",
    "category": "Cinéma & Vintage",
    "label_raw": "vhs · owned · film",
    "keywords": [
      "vhs",
      "owned",
      "film",
      "cave",
      "clowncongress",
      "digiranma"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "17:33",
    "n_30m": 1,
    "n_6h": 4,
    "is_viral": 1,
    "p_viral": 0.28,
    "pct": 28,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Souvenirs de collectionneurs relayés par des cinéphiles",
    "max_followers": 24000,
    "lead_hours": 4.7,
    "lead_time_min": 281,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "24,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 24,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.68 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (vhs, owned).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_80_1.bsky.social",
        "text": "À propos de #vhs : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 68,
        "reposts": 27,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_80_2.bsky.social",
        "text": "Point important sur owned et film sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 15,
        "reposts": 23,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 72,
    "title": "Échange Thématique : #Job",
    "category": "Général",
    "label_raw": "job · educativ · jobs",
    "keywords": [
      "job",
      "educativ",
      "jobs",
      "net",
      "busca",
      "aitana"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:14",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.263,
    "pct": 26,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 120,
    "lead_hours": 2.2,
    "lead_time_min": 130,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "120 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.68 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (job, educativ).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_72_1.bsky.social",
        "text": "À propos de #job : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 9,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_72_2.bsky.social",
        "text": "Point important sur educativ et jobs sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 1,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 16,
    "title": "Gaming & Divertissement : #Spotify",
    "category": "Jeux Vidéo",
    "label_raw": "spotify · track · open",
    "keywords": [
      "spotify",
      "track",
      "open",
      "playlist",
      "purpe",
      "scotland"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:25",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.263,
    "pct": 26,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Échanges de joueurs et streamers",
    "max_followers": 340,
    "lead_hours": 1.7,
    "lead_time_min": 100,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.68 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (spotify, track).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_16_1.bsky.social",
        "text": "À propos de #spotify : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 12,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_16_2.bsky.social",
        "text": "Point important sur track et open sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 9,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 59,
    "title": "Échange Thématique : #Isn",
    "category": "Général",
    "label_raw": "isn · andy · borrow",
    "keywords": [
      "isn",
      "andy",
      "borrow",
      "burnham",
      "using",
      "brucken"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "14:44",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.263,
    "pct": 26,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.5,
    "lead_time_min": 89,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.68 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (isn, andy).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_59_1.bsky.social",
        "text": "À propos de #isn : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 14,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_59_2.bsky.social",
        "text": "Point important sur andy et borrow sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 10,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 5,
    "title": "Échange Thématique : #Anal",
    "category": "Général",
    "label_raw": "anal · xporn · tits",
    "keywords": [
      "anal",
      "xporn",
      "tits",
      "bigtits",
      "spicysky",
      "xhamster"
    ],
    "t0_date": "19 nov 2026",
    "t0_time": "08:31",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.199,
    "pct": 20,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 1.9,
    "lead_time_min": 113,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.66 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (anal, xporn).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_5_1.bsky.social",
        "text": "À propos de #anal : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 3,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_5_2.bsky.social",
        "text": "Point important sur xporn et tits sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 13,
        "reposts": 1,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 78,
    "title": "Échange Thématique : #Stupid",
    "category": "Général",
    "label_raw": "stupid · pillow · anybody",
    "keywords": [
      "stupid",
      "pillow",
      "anybody",
      "cheezer",
      "cutie",
      "nuking"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "21:42",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.193,
    "pct": 19,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 1.2,
    "lead_time_min": 71,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.66 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (stupid, pillow).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_78_1.bsky.social",
        "text": "À propos de #stupid : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 5,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_78_2.bsky.social",
        "text": "Point important sur pillow et anybody sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 11,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 128,
    "title": "Échange Thématique : #Aircraft",
    "category": "Général",
    "label_raw": "aircraft · talking · saintjohn",
    "keywords": [
      "aircraft",
      "talking",
      "saintjohn",
      "bio",
      "saint",
      "john"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "16:31",
    "n_30m": 2,
    "n_6h": 3,
    "is_viral": 0,
    "p_viral": 0.159,
    "pct": 16,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 850,
    "lead_hours": 1.7,
    "lead_time_min": 103,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.65 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (aircraft, talking).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        3,
        3,
        3
      ]
    },
    "posts": [
      {
        "author": "@observateur_128_1.bsky.social",
        "text": "À propos de #aircraft : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 8,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_128_2.bsky.social",
        "text": "Point important sur talking et saintjohn sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 11,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 27,
    "title": "Design Graphique & Anecdotes Sciences",
    "category": "Sciences & Création",
    "label_raw": "america · science · funny",
    "keywords": [
      "america",
      "science",
      "funny",
      "design",
      "whatever",
      "financial"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "08:50",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.149,
    "pct": 15,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Partages spécialisés limités à un petit cercle d'initiés",
    "max_followers": 340,
    "lead_hours": 1.4,
    "lead_time_min": 81,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.65 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (america, science).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_27_1.bsky.social",
        "text": "À propos de #america : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 13,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_27_2.bsky.social",
        "text": "Point important sur science et funny sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 9,
        "reposts": 1,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 170,
    "title": "Jeux Vidéo & Nominations Cérémonies",
    "category": "Gaming & E-Sport",
    "label_raw": "pretty · nominate · mario",
    "keywords": [
      "pretty",
      "nominate",
      "mario",
      "score",
      "communities",
      "dual"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "17:37",
    "n_30m": 1,
    "n_6h": 4,
    "is_viral": 1,
    "p_viral": 0.142,
    "pct": 14,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Débats sur les récompenses annuelles du jeu vidéo",
    "max_followers": 24000,
    "lead_hours": 3.2,
    "lead_time_min": 191,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "24,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 24,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.64 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (pretty, nominate).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_170_1.bsky.social",
        "text": "À propos de #pretty : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 67,
        "reposts": 30,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_170_2.bsky.social",
        "text": "Point important sur nominate et mario sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 46,
        "reposts": 10,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 9,
    "title": "Échange Thématique : #November",
    "category": "Général",
    "label_raw": "november · issued · nws",
    "keywords": [
      "november",
      "issued",
      "nws",
      "advisory",
      "until",
      "est"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "17:15",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.137,
    "pct": 14,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 120,
    "lead_hours": 1.9,
    "lead_time_min": 115,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "120 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.64 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (november, issued).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_9_1.bsky.social",
        "text": "À propos de #november : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_9_2.bsky.social",
        "text": "Point important sur issued et nws sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 1,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 159,
    "title": "Échange Thématique : #Dong",
    "category": "Général",
    "label_raw": "dong · ding · bitch",
    "keywords": [
      "dong",
      "ding",
      "bitch",
      "happening",
      "win",
      "cinnamon"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "15:33",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.129,
    "pct": 13,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.4,
    "lead_time_min": 86,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.64 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (dong, ding).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_159_1.bsky.social",
        "text": "À propos de #dong : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 9,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_159_2.bsky.social",
        "text": "Point important sur ding et bitch sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 5,
        "reposts": 1,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 26,
    "title": "Chroniques Littéraires & Jeunesse",
    "category": "Livres & Culture",
    "label_raw": "boy · horney · bertrnd",
    "keywords": [
      "boy",
      "horney",
      "bertrnd",
      "arkansas",
      "desire",
      "continued"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "09:00",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.124,
    "pct": 12,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Critiques d'ouvrages lues par une communauté confidentielle",
    "max_followers": 850,
    "lead_hours": 2.0,
    "lead_time_min": 118,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.64 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (boy, horney).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_26_1.bsky.social",
        "text": "À propos de #boy : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 10,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_26_2.bsky.social",
        "text": "Point important sur horney et bertrnd sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 12,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 98,
    "title": "Actualité Musique : #Gta",
    "category": "Musique",
    "label_raw": "gta · vii · music",
    "keywords": [
      "gta",
      "vii",
      "music",
      "admittedly",
      "jaw",
      "replace"
    ],
    "t0_date": "18 nov 2026",
    "t0_time": "00:18",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.124,
    "pct": 12,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Diffusion d'œuvres et actualités d'artistes",
    "max_followers": 1400,
    "lead_hours": 1.5,
    "lead_time_min": 92,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.64 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (gta, vii).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_98_1.bsky.social",
        "text": "À propos de #gta : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 8,
        "reposts": 4,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_98_2.bsky.social",
        "text": "Point important sur vii et music sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 11,
        "reposts": 1,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 39,
    "title": "Échange Thématique : #Called",
    "category": "Général",
    "label_raw": "called · dude · aneis",
    "keywords": [
      "called",
      "dude",
      "aneis",
      "breakfast",
      "bulge",
      "cheias"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "15:25",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.123,
    "pct": 12,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 2.3,
    "lead_time_min": 136,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.64 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (called, dude).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_39_1.bsky.social",
        "text": "À propos de #called : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 9,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_39_2.bsky.social",
        "text": "Point important sur dude et aneis sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 7,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 164,
    "title": "Échange Thématique : #Moment",
    "category": "Général",
    "label_raw": "moment · story · cheung",
    "keywords": [
      "moment",
      "story",
      "cheung",
      "arrogantly",
      "gotouge",
      "intelligent"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "15:04",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.104,
    "pct": 10,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 2.0,
    "lead_time_min": 121,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.63 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (moment, story).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_164_1.bsky.social",
        "text": "À propos de #moment : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_164_2.bsky.social",
        "text": "Point important sur story et cheung sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 9,
        "reposts": 3,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 52,
    "title": "Événements Saisonniers & Automne",
    "category": "Saison & Culture",
    "label_raw": "birthday · ham · swapped",
    "keywords": [
      "birthday",
      "ham",
      "swapped",
      "throw",
      "winter",
      "autumn"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "12:13",
    "n_30m": 2,
    "n_6h": 5,
    "is_viral": 1,
    "p_viral": 0.075,
    "pct": 8,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Conversations thématiques autour de traditions festives",
    "max_followers": 24000,
    "lead_hours": 4.6,
    "lead_time_min": 278,
    "velocity_posts_h": 4.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "24,000 abonnés",
        "impact": "Majeur (+40%)",
        "description": "Un compte avec 24,000 abonnés a republié le sujet dès les 30 premières minutes.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "2 posts en 30 min",
        "impact": "Élevé (+30%)",
        "description": "Rythme de publication soutenu de 4 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.62 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (birthday, ham).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_52_1.bsky.social",
        "text": "À propos de #birthday : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 74,
        "reposts": 33,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_52_2.bsky.social",
        "text": "Point important sur ham et swapped sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 29,
        "reposts": 5,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 177,
    "title": "Échange Thématique : #Photo",
    "category": "Général",
    "label_raw": "photo · moon · true",
    "keywords": [
      "photo",
      "moon",
      "true",
      "cameo",
      "highlight",
      "quelle"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "10:31",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.072,
    "pct": 7,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 850,
    "lead_hours": 1.6,
    "lead_time_min": 94,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.62 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (photo, moon).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_177_1.bsky.social",
        "text": "À propos de #photo : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 14,
        "reposts": 1,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_177_2.bsky.social",
        "text": "Point important sur moon et true sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 4,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 127,
    "title": "Pause Café & Échanges Matinaux",
    "category": "Discussions Libres",
    "label_raw": "org · toast · paris",
    "keywords": [
      "org",
      "toast",
      "paris",
      "phys",
      "weight",
      "wake"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "07:52",
    "n_30m": 1,
    "n_6h": 2,
    "is_viral": 0,
    "p_viral": 0.066,
    "pct": 7,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Micro-conversations locales sans potentiel d'extension",
    "max_followers": 850,
    "lead_hours": 1.9,
    "lead_time_min": 111,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "850 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.62 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (org, toast).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        2,
        2,
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_127_1.bsky.social",
        "text": "À propos de #org : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 13,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_127_2.bsky.social",
        "text": "Point important sur toast et paris sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 11,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 173,
    "title": "Échange Thématique : #Speaking",
    "category": "Général",
    "label_raw": "speaking · blow · container",
    "keywords": [
      "speaking",
      "blow",
      "container",
      "blond",
      "dwp",
      "guillotine"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "21:17",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.064,
    "pct": 6,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 340,
    "lead_hours": 2.0,
    "lead_time_min": 119,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "340 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.62 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (speaking, blow).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_173_1.bsky.social",
        "text": "À propos de #speaking : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 1,
        "reposts": 2,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_173_2.bsky.social",
        "text": "Point important sur blow et container sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 1,
        "reposts": 4,
        "time_ago": "Il y a 23 min"
      }
    ]
  },
  {
    "id": 41,
    "title": "Échange Thématique : #Aewdynamite",
    "category": "Général",
    "label_raw": "aewdynamite · incredible · nervous",
    "keywords": [
      "aewdynamite",
      "incredible",
      "nervous",
      "cultural",
      "wayneiac",
      "releasetheepsteinfiles"
    ],
    "t0_date": "17 nov 2026",
    "t0_time": "14:05",
    "n_30m": 1,
    "n_6h": 1,
    "is_viral": 0,
    "p_viral": 0.033,
    "pct": 3,
    "verdict": "Bruit / Sans Risque",
    "verdict_color": "green",
    "action_advice": "Propagation locale. Ne dépassera pas l'audience initiale.",
    "why_context": "Discussions émergentes spontanées sur Bluesky",
    "max_followers": 1400,
    "lead_hours": 1.2,
    "lead_time_min": 72,
    "velocity_posts_h": 2.0,
    "reasons": [
      {
        "icon": "users",
        "title": "Audience du principal compte relais",
        "score": "1,400 abonnés",
        "impact": "Faible (+5%)",
        "description": "Aucun compte à très forte audience n'est intervenu pour amplifier le sujet.",
        "hypothesis": "Hypothèse H2 (Structure du Graphe)"
      },
      {
        "icon": "zap",
        "title": "Vélocité et accélération initiale",
        "score": "1 posts en 30 min",
        "impact": "Moyen (+10%)",
        "description": "Rythme de publication soutenu de 2 posts/h avec forte proportion d'engagements rapides.",
        "hypothesis": "Hypothèse H1 (Dynamique Temporelle)"
      },
      {
        "icon": "message-circle",
        "title": "Contenu sémantique & Charge émotionnelle",
        "score": "0.61 / 1.0",
        "impact": "Modéré (+12%)",
        "description": "Présence de mots-clés émotionnels et accroches percutantes (aewdynamite, incredible).",
        "hypothesis": "Hypothèse H3 (Sémantique & NLP)"
      }
    ],
    "trajectory": {
      "times": [
        0,
        15,
        30,
        60,
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
        1
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
        2
      ]
    },
    "posts": [
      {
        "author": "@observateur_41_1.bsky.social",
        "text": "À propos de #aewdynamite : les derniers retours confirment que la situation évolue très vite. Partagez vos avis !",
        "likes": 7,
        "reposts": 3,
        "time_ago": "Il y a 30 min"
      },
      {
        "author": "@observateur_41_2.bsky.social",
        "text": "Point important sur incredible et nervous sur Bluesky aujourd'hui. Très impressionnant de voir cette mobilisation.",
        "likes": 3,
        "reposts": 2,
        "time_ago": "Il y a 23 min"
      }
    ]
  }
];

const BENCHMARK_MODELS = [
  {
    "rank": 1,
    "name": "XGBoost (M1 - Modèle Retenu)",
    "type": "Gradient Boosting (Arbres de décision par niveau)",
    "score_prauc": "0.389",
    "gain": "+88 % vs Hasard",
    "lead_time": "+3h 45min",
    "precision_k": "66.7 % (4 alertes sur 6 sont de vrais viraux)",
    "verdict": "Sélectionné comme cœur prédictif officiel du PFA",
    "is_winner": true
  },
  {
    "rank": 2,
    "name": "Règle de Vélocité (Baseline Métier B1)",
    "type": "Seuil empirique simple sur le nombre de posts à 30 min",
    "score_prauc": "0.364",
    "gain": "+76 % vs Hasard",
    "lead_time": "+2h 30min",
    "precision_k": "50.0 %",
    "verdict": "Bonne référence mais aveugle aux influenceurs et au texte",
    "is_winner": false
  },
  {
    "rank": 3,
    "name": "Régression Logistique (Baseline B2)",
    "type": "Modèle linéaire classique pénalisé",
    "score_prauc": "0.259",
    "gain": "+25 % vs Hasard",
    "lead_time": "+1h 15min",
    "precision_k": "33.3 %",
    "verdict": "Insuffisant : incapable de capter les effets de seuil non-linéaires",
    "is_winner": false
  },
  {
    "rank": 4,
    "name": "Hasard / Prévalence (Baseline B0)",
    "type": "Prédiction basée sur la proportion brute de viraux (5 %)",
    "score_prauc": "0.207",
    "gain": "Référence plancher",
    "lead_time": "0 min",
    "precision_k": "16.7 %",
    "verdict": "Modèle trivial servant de témoin statistique",
    "is_winner": false
  }
];
