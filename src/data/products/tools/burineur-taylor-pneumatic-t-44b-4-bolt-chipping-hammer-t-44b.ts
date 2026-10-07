import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-taylor-pneumatic-t-44b-4-bolt-chipping-hammer-t-44b",
  "slug": "burineur-taylor-pneumatic-t-44b-4-bolt-chipping-hammer-t-44b",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Taylor Pneumatic T-#44B 4 Bolt Chipping Hammer (réf. T-#44B)",
  "brand": "Taylor Pneumatic",
  "model": "T-#44B 4 Bolt Chipping Hammer",
  "mpn": "T-#44B",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/burineur-taylor-pneumatic-t-44b-4-bolt-chipping-hammer-t-44b.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-#44B 4 Bolt Chipping Hammer (réf. T-#44B)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-44b-4-bolt-chipping-hammer",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-44b-4-bolt-chipping-hammer",
    "label": "Référence T-#44B",
    "distinguishingAttributes": {
      "reference": "T-#44B",
      "Shank Diameter": ".680 or .580 HEX",
      "Bore & Stroke": "1-1/8\" x 4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-#44B 4 Bolt Chipping Hammer (réf. T-#44B). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .680 or .580 HEX.",
      "Bore & Stroke : 1-1/8\" x 4\".",
      "Blows per Minute : 1500.",
      "Air Pressure : 90 PSI MAX.",
      "Length : 19.8\".",
      "Weight : 19.8 lbs.."
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
        "october4-tools-taylor-product-021-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "1-1/8\" x 4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-021-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "1500",
      "evidenceIds": [
        "october4-tools-taylor-product-021-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-021-p1"
      ]
    },
    {
      "label": "Length",
      "value": "19.8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-021-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "19.8 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-021-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-021-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-021-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-44b-4-bolt-chipping-hammer",
      "sourceLabel": "Taylor Pneumatic : T-#44B 4 Bolt Chipping Hammer",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 c8c9442c8afb19f6d628d7ce39ff3bc9409c0a0d05deb7ca7f81add8498c5a57. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-021-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-021-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-021-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
