import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-guardair-inf5072ss",
  "slug": "soufflette-guardair-inf5072ss",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Guardair INF5072SS",
  "brand": "Guardair",
  "model": "INF5072SS",
  "mpn": "INF5072SS",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.894757,
    "typical": 6.894757,
    "max": 6.894757
  },
  "airflowLpm": {
    "min": 5238.617,
    "typical": 5238.617,
    "max": 5238.617
  },
  "confidence": "B",
  "image": {
    "src": "/images/products/soufflette-guardair-inf5072ss.svg",
    "alt": "Repères techniques : Guardair INF5072SS",
    "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "guardair-inf5072ss",
    "label": "Référence INF5072SS",
    "distinguishingAttributes": {
      "reference": "INF5072SS",
      "Description constructeur": "With 72\" Extension",
      "Entrée d’air FNPT": "3/4 in"
    }
  },
  "editorial": {
    "overview": "Guardair INF5072SS. Demande au point documenté : 5 238,617 L/min à 6,895 bar.",
    "verifiedFacts": [
      "Description constructeur : With 72\" Extension.",
      "Entrée d’air FNPT : 3/4 in.",
      "Dimensions L × l × H : 83 x 3.4 x 12.5 in.",
      "Masse publiée : 11.4 lb."
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
      "value": "With 72\" Extension",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Entrée d’air FNPT",
      "value": "3/4 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Dimensions L × l × H",
      "value": "83 x 3.4 x 12.5 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "11.4 lb",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Consommation dans son unité originale",
      "value": "185 cfm",
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
      "id": "october4-tools-guardair-catalog-p32",
      "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf#page=32",
      "sourceLabel": "Guardair : Safety Air Guns & Pneumatic Vacuums, catalogue 2024/25, page PDF 32",
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
      "october4-tools-guardair-catalog-p32"
    ],
    "workingPressureBar": [
      "october4-tools-guardair-tech-current-p1"
    ],
    "airflowLpm": [
      "october4-tools-guardair-tech-current-p1"
    ]
  },
  "notes": [
    "Demande au point documenté : 5 238,617 L/min à 6,895 bar."
  ]
};

export default product;
