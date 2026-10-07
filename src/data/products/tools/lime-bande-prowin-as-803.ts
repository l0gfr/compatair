import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "lime-bande-prowin-as-803",
  "slug": "lime-bande-prowin-as-803",
  "categoryId": "lime-bande",
  "category": "lime-bande",
  "label": "ProWin AS-803",
  "brand": "ProWin",
  "model": "AS-803",
  "mpn": "AS-803",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/lime-bande-prowin-as-803.svg",
    "alt": "Repères techniques : ProWin AS-803",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-803",
    "label": "Référence AS-803",
    "distinguishingAttributes": {
      "reference": "AS-803",
      "Free Speed": "16,000 RPM",
      "Air Consumption": "388 L/min (13.7CFM)"
    }
  },
  "editorial": {
    "overview": "ProWin AS-803. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Free Speed : 16,000 RPM.",
      "Air Consumption : 388 L/min (13.7CFM).",
      "Overall Length : 360 mm.",
      "Net Weight : 1.10 kgs.",
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
      "label": "Free Speed",
      "value": "16,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Air Consumption",
      "value": "388 L/min (13.7CFM)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Overall Length",
      "value": "360 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Net Weight",
      "value": "1.10 kgs",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "388 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p69",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=69",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 69",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p69"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p69"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p69"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
