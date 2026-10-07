import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-6231-1-2-hd-impact-wrench-t-6231",
  "slug": "cle-a-chocs-taylor-pneumatic-t-6231-1-2-hd-impact-wrench-t-6231",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-6231 1/2\" HD Impact Wrench (réf. T-6231)",
  "brand": "Taylor Pneumatic",
  "model": "T-6231 1/2\" HD Impact Wrench",
  "mpn": "T-6231",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-6231-1-2-hd-impact-wrench-t-6231.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6231 1/2\" HD Impact Wrench (réf. T-6231)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6231",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6231-1-2-hd-impact-wrench",
    "label": "Référence T-6231",
    "distinguishingAttributes": {
      "reference": "T-6231",
      "SQ. Drive": "1/2\"",
      "Weight lbs.": "5.625"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6231 1/2\" HD Impact Wrench (réf. T-6231). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 1/2\".",
      "Weight lbs. : 5.625.",
      "Length in. : 6.75.",
      "Working Torque : 550.",
      "Max Torque : 650.",
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
      "value": "1/2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "5.625",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6.75",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "550",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "650",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-028-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6231",
      "sourceLabel": "Taylor Pneumatic : T-6231 1/2\" HD Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 6edf5e7fe1836ad60a1334a75bdc2966563eb0cef977c71b760901c2c16a2261. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-028-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-028-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-028-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
