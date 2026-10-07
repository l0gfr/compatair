import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-prowin-as-1061",
  "slug": "ponceuse-orbitale-prowin-as-1061",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "ProWin AS-1061",
  "brand": "ProWin",
  "model": "AS-1061",
  "mpn": "AS-1061",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-prowin-as-1061.svg",
    "alt": "Repères techniques : ProWin AS-1061",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-1061",
    "label": "Référence AS-1061",
    "distinguishingAttributes": {
      "reference": "AS-1061",
      "Pad Size": "3\" (75mm) / Item No.: AS-3505",
      "Free Speed": "15,000 RPM"
    }
  },
  "editorial": {
    "overview": "ProWin AS-1061. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Pad Size : 3\" (75mm) / Item No.: AS-3505.",
      "Free Speed : 15,000 RPM.",
      "Overall Length : 118 mm.",
      "Air Inlet : 1/4\".",
      "Net Weight : 0.5 Kgs."
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
      "value": "3\" (75mm) / Item No.: AS-3505",
      "evidenceIds": [
        "october4-tools-prowin-painting-p65"
      ]
    },
    {
      "label": "Free Speed",
      "value": "15,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p65"
      ]
    },
    {
      "label": "Overall Length",
      "value": "118 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p65"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p65"
      ]
    },
    {
      "label": "Net Weight",
      "value": "0.5 Kgs",
      "evidenceIds": [
        "october4-tools-prowin-painting-p65"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p65"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p65",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=65",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 65",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p65"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p65"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p65"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
