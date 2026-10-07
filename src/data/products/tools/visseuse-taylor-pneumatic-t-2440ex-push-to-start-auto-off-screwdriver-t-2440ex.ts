import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-taylor-pneumatic-t-2440ex-push-to-start-auto-off-screwdriver-t-2440ex",
  "slug": "visseuse-taylor-pneumatic-t-2440ex-push-to-start-auto-off-screwdriver-t-2440ex",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Taylor Pneumatic T-2440EX Push to Start Auto Off Screwdriver (réf. T-2440EX)",
  "brand": "Taylor Pneumatic",
  "model": "T-2440EX Push to Start Auto Off Screwdriver",
  "mpn": "T-2440EX",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/visseuse-taylor-pneumatic-t-2440ex-push-to-start-auto-off-screwdriver-t-2440ex.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-2440EX Push to Start Auto Off Screwdriver (réf. T-2440EX)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-2440ex-push-to-start-auto-off-screwdriver",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-2440ex-push-to-start-auto-off-screwdriver",
    "label": "Référence T-2440EX",
    "distinguishingAttributes": {
      "reference": "T-2440EX",
      "RPM": "1000",
      "Hex Drive": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-2440EX Push to Start Auto Off Screwdriver (réf. T-2440EX). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 1000.",
      "Hex Drive : 1/4\".",
      "Clutch Type : Externally Adjustable.",
      "Length in. : 11.25\".",
      "Weight lbs. : 2.25.",
      "Torque Range in.lbs. : 17.78 - 42.67."
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
      "label": "RPM",
      "value": "1000",
      "evidenceIds": [
        "october4-tools-taylor-product-010-p1"
      ]
    },
    {
      "label": "Hex Drive",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-010-p1"
      ]
    },
    {
      "label": "Clutch Type",
      "value": "Externally Adjustable",
      "evidenceIds": [
        "october4-tools-taylor-product-010-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "11.25\"",
      "evidenceIds": [
        "october4-tools-taylor-product-010-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.25",
      "evidenceIds": [
        "october4-tools-taylor-product-010-p1"
      ]
    },
    {
      "label": "Torque Range in.lbs.",
      "value": "17.78 - 42.67",
      "evidenceIds": [
        "october4-tools-taylor-product-010-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-010-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-010-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-2440ex-push-to-start-auto-off-screwdriver",
      "sourceLabel": "Taylor Pneumatic : T-2440EX Push to Start Auto Off Screwdriver",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 66e91dc36ef11fc80040fbac2233a3130e707280a6f1c723cd76e9ac8d5bf410. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-010-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-010-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-010-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
