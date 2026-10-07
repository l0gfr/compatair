import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-6799l-1-sd-hi-torque-straight-impact-wrench-t-6799l",
  "slug": "cle-a-chocs-taylor-pneumatic-t-6799l-1-sd-hi-torque-straight-impact-wrench-t-6799l",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-6799L 1\" SD HI-Torque Straight Impact Wrench (réf. T-6799L)",
  "brand": "Taylor Pneumatic",
  "model": "T-6799L 1\" SD HI-Torque Straight Impact Wrench",
  "mpn": "T-6799L",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-6799l-1-sd-hi-torque-straight-impact-wrench-t-6799l.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6799L 1\" SD HI-Torque Straight Impact Wrench (réf. T-6799L)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6799l-1-sd-hi-torque-straight-impact-wrench",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6799l-1-sd-hi-torque-straight-impact-wrench",
    "label": "Référence T-6799L",
    "distinguishingAttributes": {
      "reference": "T-6799L",
      "SQ. Drive": "1\"",
      "Weight lbs.": "36"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6799L 1\" SD HI-Torque Straight Impact Wrench (réf. T-6799L). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 1\".",
      "Weight lbs. : 36.",
      "Length in. : 22.5.",
      "Working Torque : 2500.",
      "Max Torque : 2750.",
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
        "october4-tools-taylor-product-047-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "36",
      "evidenceIds": [
        "october4-tools-taylor-product-047-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "22.5",
      "evidenceIds": [
        "october4-tools-taylor-product-047-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "2500",
      "evidenceIds": [
        "october4-tools-taylor-product-047-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "2750",
      "evidenceIds": [
        "october4-tools-taylor-product-047-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-047-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-047-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-047-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6799l-1-sd-hi-torque-straight-impact-wrench",
      "sourceLabel": "Taylor Pneumatic : T-6799L 1\" SD HI-Torque Straight Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 a41ba569b143e1b458b4fdeec6a5875859d1b1e7f0c5467342c5ee385cbfefac. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-047-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-047-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-047-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
