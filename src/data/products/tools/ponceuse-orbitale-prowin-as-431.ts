import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-prowin-as-431",
  "slug": "ponceuse-orbitale-prowin-as-431",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "ProWin AS-431",
  "brand": "ProWin",
  "model": "AS-431",
  "mpn": "AS-431",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-prowin-as-431.svg",
    "alt": "Repères techniques : ProWin AS-431",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-431",
    "label": "Référence AS-431",
    "distinguishingAttributes": {
      "reference": "AS-431",
      "Pad Size": "3\" (75mm) / Item No.: AS-3505",
      "Free Speed": "16,000 RPM"
    }
  },
  "editorial": {
    "overview": "ProWin AS-431. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Pad Size : 3\" (75mm) / Item No.: AS-3505.",
      "Free Speed : 16,000 RPM.",
      "Overall Length : 160 mm.",
      "Net Weight : 0.86 kgs.",
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
      "value": "3\" (75mm) / Item No.: AS-3505",
      "evidenceIds": [
        "october4-tools-prowin-painting-p66"
      ]
    },
    {
      "label": "Free Speed",
      "value": "16,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p66"
      ]
    },
    {
      "label": "Overall Length",
      "value": "160 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p66"
      ]
    },
    {
      "label": "Net Weight",
      "value": "0.86 kgs",
      "evidenceIds": [
        "october4-tools-prowin-painting-p66"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p66"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p66"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p66",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=66",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 66",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p66"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p66"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p66"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
