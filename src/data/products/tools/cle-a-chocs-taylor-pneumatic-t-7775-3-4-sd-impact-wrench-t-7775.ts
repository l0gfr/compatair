import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-7775-3-4-sd-impact-wrench-t-7775",
  "slug": "cle-a-chocs-taylor-pneumatic-t-7775-3-4-sd-impact-wrench-t-7775",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-7775 3/4\" SD Impact Wrench (réf. T-7775)",
  "brand": "Taylor Pneumatic",
  "model": "T-7775 3/4\" SD Impact Wrench",
  "mpn": "T-7775",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-7775-3-4-sd-impact-wrench-t-7775.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7775 3/4\" SD Impact Wrench (réf. T-7775)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7775-sd-impact-wrench",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7775-3-4-sd-impact-wrench",
    "label": "Référence T-7775",
    "distinguishingAttributes": {
      "reference": "T-7775",
      "SQ. Drive": "3/4\"",
      "Weight lbs.": "11.2"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7775 3/4\" SD Impact Wrench (réf. T-7775). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 3/4\".",
      "Weight lbs. : 11.2.",
      "Length in. : 11.8.",
      "Working Torque : 1300.",
      "Max Torque : 1500.",
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
      "value": "3/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-150-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "11.2",
      "evidenceIds": [
        "october4-tools-taylor-product-150-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "11.8",
      "evidenceIds": [
        "october4-tools-taylor-product-150-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "1300",
      "evidenceIds": [
        "october4-tools-taylor-product-150-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "1500",
      "evidenceIds": [
        "october4-tools-taylor-product-150-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-150-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-150-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-150-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7775-sd-impact-wrench",
      "sourceLabel": "Taylor Pneumatic : T-7775 3/4\" SD Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 59a82a0613b7c5046c49672193444a83d79066a718e3851c1718925ae17be36e. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-150-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-150-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-150-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
