import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-prowin-as-601",
  "slug": "ponceuse-orbitale-prowin-as-601",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "ProWin AS-601",
  "brand": "ProWin",
  "model": "AS-601",
  "mpn": "AS-601",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-prowin-as-601.svg",
    "alt": "Repères techniques : ProWin AS-601",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-601",
    "label": "Référence AS-601",
    "distinguishingAttributes": {
      "reference": "AS-601",
      "Pad Size": "74 x 145mm",
      "Free Speed": "8,000 RPM"
    }
  },
  "editorial": {
    "overview": "ProWin AS-601. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Pad Size : 74 x 145mm.",
      "Free Speed : 8,000 RPM.",
      "Orbital Diameter : 5 mm.",
      "Air Consumption : 425 L/min (15.3CFM).",
      "Net Weight : 1.2 kgs.",
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
      "value": "74 x 145mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Free Speed",
      "value": "8,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Orbital Diameter",
      "value": "5 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Air Consumption",
      "value": "425 L/min (15.3CFM)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p74"
      ]
    },
    {
      "label": "Net Weight",
      "value": "1.2 kgs",
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
      "label": "Consommation publiée, hors calcul",
      "value": "425 L/min",
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
