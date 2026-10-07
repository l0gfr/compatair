import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-prowin-as-800",
  "slug": "ponceuse-pneumatique-prowin-as-800",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "ProWin AS-800",
  "brand": "ProWin",
  "model": "AS-800",
  "mpn": "AS-800",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-pneumatique-prowin-as-800.svg",
    "alt": "Repères techniques : ProWin AS-800",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-as-800",
    "label": "Référence AS-800",
    "distinguishingAttributes": {
      "reference": "AS-800",
      "Free Speed": "13,000 RPM",
      "Air Consumption": "359 L/min (12.7CFM)"
    }
  },
  "editorial": {
    "overview": "ProWin AS-800. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Free Speed : 13,000 RPM.",
      "Air Consumption : 359 L/min (12.7CFM).",
      "Overall Length : 200 mm.",
      "Net Weight : 0.83 kgs.",
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
      "value": "13,000 RPM",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Air Consumption",
      "value": "359 L/min (12.7CFM)",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Overall Length",
      "value": "200 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p69"
      ]
    },
    {
      "label": "Net Weight",
      "value": "0.83 kgs",
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
      "value": "359 L/min",
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
