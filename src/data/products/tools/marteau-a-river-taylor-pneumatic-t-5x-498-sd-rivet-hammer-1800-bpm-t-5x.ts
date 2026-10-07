import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "marteau-a-river-taylor-pneumatic-t-5x-498-sd-rivet-hammer-1800-bpm-t-5x",
  "slug": "marteau-a-river-taylor-pneumatic-t-5x-498-sd-rivet-hammer-1800-bpm-t-5x",
  "categoryId": "marteau-a-river",
  "category": "marteau-a-river",
  "label": "Taylor Pneumatic T-5X .498 SD Rivet Hammer 1800 Bpm (réf. T-5X)",
  "brand": "Taylor Pneumatic",
  "model": "T-5X .498 SD Rivet Hammer 1800 Bpm",
  "mpn": "T-5X",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/marteau-a-river-taylor-pneumatic-t-5x-498-sd-rivet-hammer-1800-bpm-t-5x.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-5X .498 SD Rivet Hammer 1800 Bpm (réf. T-5X)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-5x-498-shank-rivet-hammer-1800-bpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-5x-498-sd-rivet-hammer-1800-bpm",
    "label": "Référence T-5X",
    "distinguishingAttributes": {
      "reference": "T-5X",
      "Shank Diameter": ".498",
      "Bore & Stroke": "3/4\" x 2-11/16\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-5X .498 SD Rivet Hammer 1800 Bpm (réf. T-5X). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .498.",
      "Bore & Stroke : 3/4\" x 2-11/16\".",
      "Blows per Minute : 1800.",
      "Aluminum Rivet Capacity : 1/4\".",
      "Length : 8-15/16\".",
      "Weight : 4-3/4 lbs.."
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
        "october4-tools-taylor-product-026-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "3/4\" x 2-11/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-026-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "1800",
      "evidenceIds": [
        "october4-tools-taylor-product-026-p1"
      ]
    },
    {
      "label": "Aluminum Rivet Capacity",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-026-p1"
      ]
    },
    {
      "label": "Length",
      "value": "8-15/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-026-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "4-3/4 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-026-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-026-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-026-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-5x-498-shank-rivet-hammer-1800-bpm",
      "sourceLabel": "Taylor Pneumatic : T-5X .498 SD Rivet Hammer 1800 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 033926002b934f5463f819d67bff09133905128368c41bfb29d513c1f82dcd78. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-026-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-026-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-026-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
