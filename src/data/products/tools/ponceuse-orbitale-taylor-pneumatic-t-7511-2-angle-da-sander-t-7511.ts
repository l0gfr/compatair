import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-taylor-pneumatic-t-7511-2-angle-da-sander-t-7511",
  "slug": "ponceuse-orbitale-taylor-pneumatic-t-7511-2-angle-da-sander-t-7511",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Taylor Pneumatic T-7511 2\" Angle DA Sander (réf. T-7511)",
  "brand": "Taylor Pneumatic",
  "model": "T-7511 2\" Angle DA Sander",
  "mpn": "T-7511",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-taylor-pneumatic-t-7511-2-angle-da-sander-t-7511.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7511 2\" Angle DA Sander (réf. T-7511)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7511-2-angle-da-sander",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7511-2-angle-da-sander",
    "label": "Référence T-7511",
    "distinguishingAttributes": {
      "reference": "T-7511",
      "Free Speed RPM": "18,000",
      "Pad Size inch": "2\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7511 2\" Angle DA Sander (réf. T-7511). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Free Speed RPM : 18,000.",
      "Pad Size inch : 2\".",
      "Weight lbs. : 1.25.",
      "Orbit DIA. inch : 9/64\".",
      "Spindle Size : 6mm.",
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
      "label": "Free Speed RPM",
      "value": "18,000",
      "evidenceIds": [
        "october4-tools-taylor-product-092-p1"
      ]
    },
    {
      "label": "Pad Size inch",
      "value": "2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-092-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.25",
      "evidenceIds": [
        "october4-tools-taylor-product-092-p1"
      ]
    },
    {
      "label": "Orbit DIA. inch",
      "value": "9/64\"",
      "evidenceIds": [
        "october4-tools-taylor-product-092-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "6mm",
      "evidenceIds": [
        "october4-tools-taylor-product-092-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-092-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-092-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-092-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7511-2-angle-da-sander",
      "sourceLabel": "Taylor Pneumatic : T-7511 2\" Angle DA Sander",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 5680f82dd93dba9fe4ce75d3881f36214694ade5d183817ba6ecba710971dee1. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-092-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-092-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-092-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
