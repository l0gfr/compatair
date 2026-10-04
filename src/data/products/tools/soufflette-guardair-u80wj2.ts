const product: unknown = {
  "id": "soufflette-guardair-u80wj2",
  "slug": "soufflette-guardair-u80wj2",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Guardair U80WJ2",
  "brand": "Guardair",
  "model": "U80WJ2",
  "mpn": "U80WJ2",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.894757,
    "typical": 6.894757,
    "max": 6.894757
  },
  "airflowLpm": {
    "min": 538.02,
    "typical": 538.02,
    "max": 538.02
  },
  "confidence": "B",
  "image": {
    "src": "/images/products/soufflette-guardair-u80wj2.svg",
    "alt": "Repères techniques : Guardair U80WJ2",
    "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "guardair-u80wj2",
    "label": "Référence U80WJ2",
    "distinguishingAttributes": {
      "reference": "U80WJ2",
      "Description constructeur": "Ultra WhisperJet",
      "Entrée d’air FNPT": "3/8 in"
    }
  },
  "editorial": {
    "overview": "Guardair U80WJ2. Demande au point documenté : 538,02 L/min à 6,895 bar.",
    "verifiedFacts": [
      "Description constructeur : Ultra WhisperJet.",
      "Entrée d’air FNPT : 3/8 in.",
      "Dimensions L × l × H : 5.3 x 1.2 x 6.6 in.",
      "Masse publiée : 0.8 lb."
    ],
    "limitations": [
      "Le point constructeur est utilisé sans facteur de marche implicite ; aucune consommation à une autre pression n’est calculée.",
      "Débit d’alimentation à 100 psi (conversion SI affichée en bar) ; aucun débit à une autre pression n’est extrapolé.",
      "La table actuelle donne Air Usage(cfm), distinct du débit d’air ambiant entraîné par le Venturi.",
      "Aucun facteur de marche ni équivalence en puissance moteur n’est introduit dans le verdict.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Description constructeur",
      "value": "Ultra WhisperJet",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p12"
      ]
    },
    {
      "label": "Entrée d’air FNPT",
      "value": "3/8 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p12"
      ]
    },
    {
      "label": "Dimensions L × l × H",
      "value": "5.3 x 1.2 x 6.6 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p12"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "0.8 lb",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p12"
      ]
    },
    {
      "label": "Consommation dans son unité originale",
      "value": "19 cfm",
      "evidenceIds": [
        "october4-tools-guardair-tech-current-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Note: All parameters measured at 100 psi inlet pressure.",
      "evidenceIds": [
        "october4-tools-guardair-tech-current-p1"
      ]
    },
    {
      "label": "Pression convertie en unité SI",
      "value": "100 psi ≈ 6,895 bar ; unité originale conservée",
      "evidenceIds": [
        "october4-tools-guardair-tech-current-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-guardair-catalog-p12",
      "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf#page=12",
      "sourceLabel": "Guardair : Safety Air Guns & Pneumatic Vacuums, catalogue 2024/25, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4eeb040d12835bc8cf95ad4c3cc055ba111a75cb75b1ba5e234080072caea265. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-guardair-tech-current-p1",
      "sourceUrl": "https://guardair.com/pages/tech-specs",
      "sourceLabel": "Guardair : Technical Specifications, convention de débit à 100 psi",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 45840892b6ec53836101259f9092073451902713eb1124df48264f6bce9ff713. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-guardair-catalog-p12"
    ],
    "workingPressureBar": [
      "october4-tools-guardair-tech-current-p1"
    ],
    "airflowLpm": [
      "october4-tools-guardair-tech-current-p1"
    ]
  },
  "notes": [
    "Demande au point documenté : 538,02 L/min à 6,895 bar."
  ]
};

export default product;
