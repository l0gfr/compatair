import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-prowin-as-805",
  "slug": "ponceuse-pneumatique-prowin-as-805",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "ProWin AS-805",
  "brand": "ProWin",
  "model": "AS-805",
  "mpn": "AS-805",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-pneumatique-prowin-as-805.svg",
    "alt": "Repères techniques : ProWin AS-805",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-805",
    "label": "Référence AS-805",
    "distinguishingAttributes": {
      "reference": "AS-805",
      "Air Pressure": "90 PSI (6.2 bar)",
      "Net Weight": "2.8 kg, 6.17 lbs"
    }
  },
  "editorial": {
    "overview": "ProWin AS-805. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Air Pressure : 90 PSI (6.2 bar).",
      "Net Weight : 2.8 kg, 6.17 lbs.",
      "Overall Length : 445mm, 17-1/2\".",
      "Air Inlet : 1/4\"."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "La consommation publiée ne précise pas le régime (charge, maximum ou moyenne) et la pression exacte de mesure.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Air Pressure",
      "value": "90 PSI (6.2 bar)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Net Weight",
      "value": "2.8 kg, 6.17 lbs",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Overall Length",
      "value": "445mm, 17-1/2\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p74",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=74",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 74",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p74"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p74"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p74"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
