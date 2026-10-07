import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "lime-bande-prowin-as-901d",
  "slug": "lime-bande-prowin-as-901d",
  "categoryId": "lime-bande",
  "category": "lime-bande",
  "label": "ProWin AS-901D",
  "brand": "ProWin",
  "model": "AS-901D",
  "mpn": "AS-901D",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/lime-bande-prowin-as-901d.svg",
    "alt": "Repères techniques : ProWin AS-901D",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-901d",
    "label": "Référence AS-901D",
    "distinguishingAttributes": {
      "reference": "AS-901D",
      "Free Speed": "7,000 RPM",
      "Air Consumption": "300 L/min (10.6CFM)"
    }
  },
  "editorial": {
    "overview": "ProWin AS-901D. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Free Speed : 7,000 RPM.",
      "Air Consumption : 300 L/min (10.6CFM).",
      "Overall Length : 100 (W) × 115 (H) × 170 (L) mm.",
      "Net Weight : 1.1 Kgs.",
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
      "value": "7,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Air Consumption",
      "value": "300 L/min (10.6CFM)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Overall Length",
      "value": "100 (W) × 115 (H) × 170 (L) mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Net Weight",
      "value": "1.1 Kgs",
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
      "value": "300 L/min",
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
