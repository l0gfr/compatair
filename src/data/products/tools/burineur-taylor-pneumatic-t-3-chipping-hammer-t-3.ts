import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-taylor-pneumatic-t-3-chipping-hammer-t-3",
  "slug": "burineur-taylor-pneumatic-t-3-chipping-hammer-t-3",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Taylor Pneumatic T-#3 Chipping Hammer (réf. T-#3)",
  "brand": "Taylor Pneumatic",
  "model": "T-#3 Chipping Hammer",
  "mpn": "T-#3",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/burineur-taylor-pneumatic-t-3-chipping-hammer-t-3.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-#3 Chipping Hammer (réf. T-#3)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-3-chipping-hammer",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-3-chipping-hammer",
    "label": "Référence T-#3",
    "distinguishingAttributes": {
      "reference": "T-#3",
      "Shank Diameter": ".680 or .580 HEX",
      "Bore & Stroke": "1-1/8\" x 3\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-#3 Chipping Hammer (réf. T-#3). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .680 or .580 HEX.",
      "Bore & Stroke : 1-1/8\" x 3\".",
      "Blows per Minute : 1900.",
      "Air Pressure : 90 PSI MAX.",
      "Length : 16.25\".",
      "Weight : 15.625 lbs.."
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
        "october4-tools-taylor-product-015-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "1-1/8\" x 3\"",
      "evidenceIds": [
        "october4-tools-taylor-product-015-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "1900",
      "evidenceIds": [
        "october4-tools-taylor-product-015-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-015-p1"
      ]
    },
    {
      "label": "Length",
      "value": "16.25\"",
      "evidenceIds": [
        "october4-tools-taylor-product-015-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "15.625 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-015-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-015-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-015-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-3-chipping-hammer",
      "sourceLabel": "Taylor Pneumatic : T-#3 Chipping Hammer",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 3191a0f8569ea8d2a3ac3df0aaf421a8281e7b3ceb36d52003a9b33d980c7fd7. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-015-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-015-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-015-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
