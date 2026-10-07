import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-taylor-pneumatic-t-24b-4-bolt-chipping-hammer-t-24b",
  "slug": "burineur-taylor-pneumatic-t-24b-4-bolt-chipping-hammer-t-24b",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Taylor Pneumatic T-#24B 4 Bolt Chipping Hammer (réf. T-#24B)",
  "brand": "Taylor Pneumatic",
  "model": "T-#24B 4 Bolt Chipping Hammer",
  "mpn": "T-#24B",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/burineur-taylor-pneumatic-t-24b-4-bolt-chipping-hammer-t-24b.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-#24B 4 Bolt Chipping Hammer (réf. T-#24B)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-24b-4-bolt-chipping-hammer",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-24b-4-bolt-chipping-hammer",
    "label": "Référence T-#24B",
    "distinguishingAttributes": {
      "reference": "T-#24B",
      "Shank Diameter": ".680 or .580 HEX",
      "Bore & Stroke": "1-1/8\" x 2\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-#24B 4 Bolt Chipping Hammer (réf. T-#24B). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .680 or .580 HEX.",
      "Bore & Stroke : 1-1/8\" x 2\".",
      "Blows per Minute : 2400.",
      "Air Pressure : 90 PSI MAX.",
      "Length : 14.4\".",
      "Weight : 17.5 lbs.."
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
      "value": ".680 or .580 HEX",
      "evidenceIds": [
        "october4-tools-taylor-product-011-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "1-1/8\" x 2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-011-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "2400",
      "evidenceIds": [
        "october4-tools-taylor-product-011-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-011-p1"
      ]
    },
    {
      "label": "Length",
      "value": "14.4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-011-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "17.5 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-011-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-011-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-011-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-24b-4-bolt-chipping-hammer",
      "sourceLabel": "Taylor Pneumatic : T-#24B 4 Bolt Chipping Hammer",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4f3bf49547f6e1d4186f10398e1bd76c88237e30e0222b72636e3a8822dca2c2. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-011-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-011-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-011-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
