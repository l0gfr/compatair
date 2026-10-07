import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-6796-1-sd-impact-wrench-t-6796",
  "slug": "cle-a-chocs-taylor-pneumatic-t-6796-1-sd-impact-wrench-t-6796",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-6796 1\" SD Impact Wrench (réf. T-6796)",
  "brand": "Taylor Pneumatic",
  "model": "T-6796 1\" SD Impact Wrench",
  "mpn": "T-6796",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-6796-1-sd-impact-wrench-t-6796.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6796 1\" SD Impact Wrench (réf. T-6796)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6796-1-sd-impact-wrench",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6796-1-sd-impact-wrench",
    "label": "Référence T-6796",
    "distinguishingAttributes": {
      "reference": "T-6796",
      "SQ. Drive": "1\"",
      "Weight lbs.": "21.8"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6796 1\" SD Impact Wrench (réf. T-6796). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 1\".",
      "Weight lbs. : 21.8.",
      "Length in. : 11.5.",
      "Working Torque : 1650.",
      "Max Torque : 1800.",
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
      "value": "1\"",
      "evidenceIds": [
        "october4-tools-taylor-product-043-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "21.8",
      "evidenceIds": [
        "october4-tools-taylor-product-043-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "11.5",
      "evidenceIds": [
        "october4-tools-taylor-product-043-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "1650",
      "evidenceIds": [
        "october4-tools-taylor-product-043-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "1800",
      "evidenceIds": [
        "october4-tools-taylor-product-043-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-043-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-043-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-043-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6796-1-sd-impact-wrench",
      "sourceLabel": "Taylor Pneumatic : T-6796 1\" SD Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 c0b65bb3b6b5dbae581f45101366addde15c3da31c0ac09b10eca022ebe73c1b. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-043-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-043-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-043-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
