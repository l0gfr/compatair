import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9940ex-4-extended-angle-grinder-t-9940ex",
  "slug": "meuleuse-taylor-pneumatic-t-9940ex-4-extended-angle-grinder-t-9940ex",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9940EX 4\" Extended Angle Grinder (réf. T-9940EX)",
  "brand": "Taylor Pneumatic",
  "model": "T-9940EX 4\" Extended Angle Grinder",
  "mpn": "T-9940EX",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9940ex-4-extended-angle-grinder-t-9940ex.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9940EX 4\" Extended Angle Grinder (réf. T-9940EX)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9940ex-4-extended-angle-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9940ex-4-extended-angle-grinder",
    "label": "Référence T-9940EX",
    "distinguishingAttributes": {
      "reference": "T-9940EX",
      "RPM": "13,500",
      "Wheel Size": "4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9940EX 4\" Extended Angle Grinder (réf. T-9940EX). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 13,500.",
      "Wheel Size : 4\".",
      "Spindle Size : 3/8-24.",
      "Weight lbs. : 3.9.",
      "Length : 10.5\".",
      "HP : 1."
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
      "value": "13,500",
      "evidenceIds": [
        "october4-tools-taylor-product-224-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-224-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "3/8-24",
      "evidenceIds": [
        "october4-tools-taylor-product-224-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.9",
      "evidenceIds": [
        "october4-tools-taylor-product-224-p1"
      ]
    },
    {
      "label": "Length",
      "value": "10.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-224-p1"
      ]
    },
    {
      "label": "HP",
      "value": "1",
      "evidenceIds": [
        "october4-tools-taylor-product-224-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-224-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-224-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9940ex-4-extended-angle-grinder",
      "sourceLabel": "Taylor Pneumatic : T-9940EX 4\" Extended Angle Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 b0d88a851049b8c1cff6da9accac2f2801572b29843ea70a6e80a3e7d47f02c5. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-224-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-224-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-224-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
