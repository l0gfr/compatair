import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-guardair-f5072aa",
  "slug": "soufflette-guardair-f5072aa",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Guardair F5072AA",
  "brand": "Guardair",
  "model": "F5072AA",
  "mpn": "F5072AA",
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
    "src": "/images/products/soufflette-guardair-f5072aa.svg",
    "alt": "Repères techniques : Guardair F5072AA",
    "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "guardair-f5072aa",
    "label": "Référence F5072AA",
    "distinguishingAttributes": {
      "reference": "F5072AA",
      "Description constructeur": "With 72\" Extension",
      "Entrée d’air FNPT": "3/4 in"
    }
  },
  "editorial": {
    "overview": "Guardair F5072AA. Demande au point documenté : 5 238,617 L/min à 6,895 bar.",
    "verifiedFacts": [
      "Description constructeur : With 72\" Extension.",
      "Entrée d’air FNPT : 3/4 in.",
      "Dimensions L × l × H : 84 x 10 x 12.5 in.",
      "Masse publiée : 6.1 lb."
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
        "october4-tools-guardair-catalog-p30"
      ]
    },
    {
      "label": "Entrée d’air FNPT",
      "value": "3/4 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p30"
      ]
    },
    {
      "label": "Dimensions L × l × H",
      "value": "84 x 10 x 12.5 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p30"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "6.1 lb",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p30"
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
      "id": "october4-tools-guardair-catalog-p30",
      "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf#page=30",
      "sourceLabel": "Guardair : Safety Air Guns & Pneumatic Vacuums, catalogue 2024/25, page PDF 30",
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
      "october4-tools-guardair-catalog-p30"
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
