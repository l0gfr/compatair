import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-prowin-as-210",
  "slug": "ponceuse-pneumatique-prowin-as-210",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "ProWin AS-210",
  "brand": "ProWin",
  "model": "AS-210",
  "mpn": "AS-210",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-pneumatique-prowin-as-210.svg",
    "alt": "Repères techniques : ProWin AS-210",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-210",
    "label": "Référence AS-210",
    "distinguishingAttributes": {
      "reference": "AS-210",
      "Pad Size": "7\" (178 mm) / Item No.: PR-307",
      "Free Speed": "4,500 RPM / AS-210"
    }
  },
  "editorial": {
    "overview": "ProWin AS-210. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Pad Size : 7\" (178 mm) / Item No.: PR-307.",
      "Free Speed : 4,500 RPM / AS-210.",
      "Spindle Size : 5/8\" x 11 T.",
      "Overall Length : 406 mm.",
      "Net Weight : 2.30 kgs.",
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
      "label": "Pad Size",
      "value": "7\" (178 mm) / Item No.: PR-307",
      "evidenceIds": [
        "october4-tools-prowin-painting-p68"
      ]
    },
    {
      "label": "Free Speed",
      "value": "4,500 RPM / AS-210",
      "evidenceIds": [
        "october4-tools-prowin-painting-p68"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/8\" x 11 T",
      "evidenceIds": [
        "october4-tools-prowin-painting-p68"
      ]
    },
    {
      "label": "Overall Length",
      "value": "406 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p68"
      ]
    },
    {
      "label": "Net Weight",
      "value": "2.30 kgs",
      "evidenceIds": [
        "october4-tools-prowin-painting-p68"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p68"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p68"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p68",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=68",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 68",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p68"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p68"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p68"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
