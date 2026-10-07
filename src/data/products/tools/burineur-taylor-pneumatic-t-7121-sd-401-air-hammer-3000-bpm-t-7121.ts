import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-taylor-pneumatic-t-7121-sd-401-air-hammer-3000-bpm-t-7121",
  "slug": "burineur-taylor-pneumatic-t-7121-sd-401-air-hammer-3000-bpm-t-7121",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Taylor Pneumatic T-7121 SD .401 Air Hammer 3000 Bpm (réf. T-7121)",
  "brand": "Taylor Pneumatic",
  "model": "T-7121 SD .401 Air Hammer 3000 Bpm",
  "mpn": "T-7121",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/burineur-taylor-pneumatic-t-7121-sd-401-air-hammer-3000-bpm-t-7121.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7121 SD .401 Air Hammer 3000 Bpm (réf. T-7121)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7121-sd-401-air-hammer-3000-bpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7121-sd-401-air-hammer-3000-bpm",
    "label": "Référence T-7121",
    "distinguishingAttributes": {
      "reference": "T-7121",
      "Shank Diameter": ".401",
      "Bore & Stroke": "3/4\" x 2-9/32\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7121 SD .401 Air Hammer 3000 Bpm (réf. T-7121). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .401.",
      "Bore & Stroke : 3/4\" x 2-9/32\".",
      "Blows per Minute : 3000.",
      "Air Pressure : 90 PSI MAX.",
      "Length : 7.65\".",
      "Weight : 3.5 lbs.."
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
      "value": ".401",
      "evidenceIds": [
        "october4-tools-taylor-product-068-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "3/4\" x 2-9/32\"",
      "evidenceIds": [
        "october4-tools-taylor-product-068-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "3000",
      "evidenceIds": [
        "october4-tools-taylor-product-068-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-068-p1"
      ]
    },
    {
      "label": "Length",
      "value": "7.65\"",
      "evidenceIds": [
        "october4-tools-taylor-product-068-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "3.5 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-068-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-068-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-068-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7121-sd-401-air-hammer-3000-bpm",
      "sourceLabel": "Taylor Pneumatic : T-7121 SD .401 Air Hammer 3000 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 5a343707dd095c08ae8871e98b4205eda3794d7c280718ead47a6577deefdabc. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-068-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-068-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-068-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
