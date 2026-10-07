import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-guardair-900lj060aa",
  "slug": "soufflette-guardair-900lj060aa",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Guardair 900LJ060AA",
  "brand": "Guardair",
  "model": "900LJ060AA",
  "mpn": "900LJ060AA",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.894757,
    "typical": 6.894757,
    "max": 6.894757
  },
  "airflowLpm": {
    "min": 453.07,
    "typical": 453.07,
    "max": 453.07
  },
  "confidence": "B",
  "image": {
    "src": "/images/products/soufflette-guardair-900lj060aa.svg",
    "alt": "Repères techniques : Guardair 900LJ060AA",
    "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "guardair-900lj060aa",
    "label": "Référence 900LJ060AA",
    "distinguishingAttributes": {
      "reference": "900LJ060AA",
      "Description constructeur": "With 60\" Extension",
      "Entrée d’air FNPT": "1/4 in"
    }
  },
  "editorial": {
    "overview": "Guardair 900LJ060AA. Demande au point documenté : 453,07 L/min à 6,895 bar.",
    "verifiedFacts": [
      "Description constructeur : With 60\" Extension.",
      "Entrée d’air FNPT : 1/4 in.",
      "Dimensions L × l × H : 63.4 x 1 x 2.9 in.",
      "Masse publiée : 0.7 lb."
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
      "value": "With 60\" Extension",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p23"
      ]
    },
    {
      "label": "Entrée d’air FNPT",
      "value": "1/4 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p23"
      ]
    },
    {
      "label": "Dimensions L × l × H",
      "value": "63.4 x 1 x 2.9 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p23"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "0.7 lb",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p23"
      ]
    },
    {
      "label": "Consommation dans son unité originale",
      "value": "16 cfm",
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
      "id": "october4-tools-guardair-catalog-p23",
      "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf#page=23",
      "sourceLabel": "Guardair : Safety Air Guns & Pneumatic Vacuums, catalogue 2024/25, page PDF 23",
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
      "october4-tools-guardair-catalog-p23"
    ],
    "workingPressureBar": [
      "october4-tools-guardair-tech-current-p1"
    ],
    "airflowLpm": [
      "october4-tools-guardair-tech-current-p1"
    ]
  },
  "notes": [
    "Demande au point documenté : 453,07 L/min à 6,895 bar."
  ]
};

export default product;
