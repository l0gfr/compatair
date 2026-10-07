import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "marteau-a-river-taylor-pneumatic-t-7x-498-sd-rivet-hammer-900-bpm-t-7x",
  "slug": "marteau-a-river-taylor-pneumatic-t-7x-498-sd-rivet-hammer-900-bpm-t-7x",
  "categoryId": "marteau-a-river",
  "category": "marteau-a-river",
  "label": "Taylor Pneumatic T-7X .498 SD Rivet Hammer 900 Bpm (réf. T-7X)",
  "brand": "Taylor Pneumatic",
  "model": "T-7X .498 SD Rivet Hammer 900 Bpm",
  "mpn": "T-7X",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/marteau-a-river-taylor-pneumatic-t-7x-498-sd-rivet-hammer-900-bpm-t-7x.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7X .498 SD Rivet Hammer 900 Bpm (réf. T-7X)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7x-498-sd-rivet-hammer-1800-bpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7x-498-sd-rivet-hammer-900-bpm",
    "label": "Référence T-7X",
    "distinguishingAttributes": {
      "reference": "T-7X",
      "Shank Diameter": ".498",
      "Bore & Stroke": "3/4\" x 5-13/16\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7X .498 SD Rivet Hammer 900 Bpm (réf. T-7X). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .498.",
      "Bore & Stroke : 3/4\" x 5-13/16\".",
      "Blows per Minute : 900.",
      "Aluminum Rivet Capacity : 3/8\".",
      "Length : 11-15/16\".",
      "Weight : 6 lbs.."
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
      "label": "Shank Diameter",
      "value": ".498",
      "evidenceIds": [
        "october4-tools-taylor-product-170-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "3/4\" x 5-13/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-170-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "900",
      "evidenceIds": [
        "october4-tools-taylor-product-170-p1"
      ]
    },
    {
      "label": "Aluminum Rivet Capacity",
      "value": "3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-170-p1"
      ]
    },
    {
      "label": "Length",
      "value": "11-15/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-170-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "6 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-170-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-170-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-170-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7x-498-sd-rivet-hammer-1800-bpm",
      "sourceLabel": "Taylor Pneumatic : T-7X .498 SD Rivet Hammer 900 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4f5aabe6ca9f49e1fe9f908c3309d33444a2d1432e4ceab94975fe4273b4f7eb. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-170-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-170-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-170-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
