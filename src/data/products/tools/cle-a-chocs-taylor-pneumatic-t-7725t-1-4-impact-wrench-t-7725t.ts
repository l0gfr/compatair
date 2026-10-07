import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-7725t-1-4-impact-wrench-t-7725t",
  "slug": "cle-a-chocs-taylor-pneumatic-t-7725t-1-4-impact-wrench-t-7725t",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-7725T 1/4\" Impact Wrench (réf. T-7725T)",
  "brand": "Taylor Pneumatic",
  "model": "T-7725T 1/4\" Impact Wrench",
  "mpn": "T-7725T",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-7725t-1-4-impact-wrench-t-7725t.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7725T 1/4\" Impact Wrench (réf. T-7725T)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7725t-1-4-impact-wrench",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7725t-1-4-impact-wrench",
    "label": "Référence T-7725T",
    "distinguishingAttributes": {
      "reference": "T-7725T",
      "SQ. Drive": "1/4\"",
      "Weight lbs.": "2.2"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7725T 1/4\" Impact Wrench (réf. T-7725T). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 1/4\".",
      "Weight lbs. : 2.2.",
      "Length in. : 5.",
      "Working Torque : 35.",
      "Max Torque : 40.",
      "Air Pressure : 90 PSI Max."
    ],
    "limitations": [
      "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
      "Les colonnes Average Air Cons. et Air Cons. @ Load sont distinguées dans la fiche, mais l’unité et le point de pression de mesure ne sont pas explicités.",
      "Air Pressure 90 PSI Max est un plafond de service ; il ne devient pas une pression de mesure par déduction.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "SQ. Drive",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-110-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.2",
      "evidenceIds": [
        "october4-tools-taylor-product-110-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "5",
      "evidenceIds": [
        "october4-tools-taylor-product-110-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "35",
      "evidenceIds": [
        "october4-tools-taylor-product-110-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "40",
      "evidenceIds": [
        "october4-tools-taylor-product-110-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-110-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-110-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-110-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7725t-1-4-impact-wrench",
      "sourceLabel": "Taylor Pneumatic : T-7725T 1/4\" Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 e56a2be94f66b12ff57badf22a7a087f8b4c875276e1d78b9bc102756f79e01d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-110-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-110-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-110-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
