import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-prowin-as-362",
  "slug": "ponceuse-orbitale-prowin-as-362",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "ProWin AS-362",
  "brand": "ProWin",
  "model": "AS-362",
  "mpn": "AS-362",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-prowin-as-362.svg",
    "alt": "Repères techniques : ProWin AS-362",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-362",
    "label": "Référence AS-362",
    "distinguishingAttributes": {
      "reference": "AS-362",
      "Pad Size": "6\" (148mm) / Item No.: AS-6505",
      "Free Speed": "10,000 RPM"
    }
  },
  "editorial": {
    "overview": "ProWin AS-362. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Pad Size : 6\" (148mm) / Item No.: AS-6505.",
      "Free Speed : 10,000 RPM.",
      "Orbital Diameter : 5 mm (2.5mm is optional).",
      "Air Consumption : 425 L/min (15.3CFM).",
      "Net Weight : 0.81 kgs.",
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
      "value": "6\" (148mm) / Item No.: AS-6505",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    },
    {
      "label": "Free Speed",
      "value": "10,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    },
    {
      "label": "Orbital Diameter",
      "value": "5 mm (2.5mm is optional)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    },
    {
      "label": "Air Consumption",
      "value": "425 L/min (15.3CFM)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    },
    {
      "label": "Net Weight",
      "value": "0.81 kgs",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "425 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p71"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p71",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=71",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 71",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p71"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p71"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p71"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
