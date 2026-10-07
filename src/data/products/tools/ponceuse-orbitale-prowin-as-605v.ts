import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-prowin-as-605v",
  "slug": "ponceuse-orbitale-prowin-as-605v",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "ProWin AS-605V",
  "brand": "ProWin",
  "model": "AS-605V",
  "mpn": "AS-605V",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-prowin-as-605v.svg",
    "alt": "Repères techniques : ProWin AS-605V",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-605v",
    "label": "Référence AS-605V",
    "distinguishingAttributes": {
      "reference": "AS-605V",
      "Pad Size": "70 x 198 mm (3\" x 8\")",
      "Free Speed": "10,000 RPM"
    }
  },
  "editorial": {
    "overview": "ProWin AS-605V. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Pad Size : 70 x 198 mm (3\" x 8\").",
      "Free Speed : 10,000 RPM.",
      "Orbital Diameter : 3 mm (1/8\").",
      "Air Consumption : 300.15 l/min (10.6 CFM).",
      "Net Weight : 0.89 kgs (1.96 lbs).",
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
      "value": "70 x 198 mm (3\" x 8\")",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    },
    {
      "label": "Free Speed",
      "value": "10,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    },
    {
      "label": "Orbital Diameter",
      "value": "3 mm (1/8\")",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    },
    {
      "label": "Air Consumption",
      "value": "300.15 l/min (10.6 CFM)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    },
    {
      "label": "Net Weight",
      "value": "0.89 kgs (1.96 lbs)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "300.15 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p76"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p76",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=76",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 76",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p76"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p76"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p76"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
