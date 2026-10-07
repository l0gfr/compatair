import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-6739-3-8-impact-wrench-t-6739",
  "slug": "cle-a-chocs-taylor-pneumatic-t-6739-3-8-impact-wrench-t-6739",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-6739  3/8\" Impact Wrench (réf. T-6739)",
  "brand": "Taylor Pneumatic",
  "model": "T-6739  3/8\" Impact Wrench",
  "mpn": "T-6739",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-6739-3-8-impact-wrench-t-6739.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6739  3/8\" Impact Wrench (réf. T-6739)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6739-3-8-impact-wrench",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6739-3-8-impact-wrench",
    "label": "Référence T-6739",
    "distinguishingAttributes": {
      "reference": "T-6739",
      "SQ. Drive": "3/8\"",
      "Weight lbs.": "3.65"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6739  3/8\" Impact Wrench (réf. T-6739). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 3/8\".",
      "Weight lbs. : 3.65.",
      "Length in. : 6.5.",
      "Working Torque : 400.",
      "Max Torque : 500.",
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
      "value": "3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-034-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.65",
      "evidenceIds": [
        "october4-tools-taylor-product-034-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6.5",
      "evidenceIds": [
        "october4-tools-taylor-product-034-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "400",
      "evidenceIds": [
        "october4-tools-taylor-product-034-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "500",
      "evidenceIds": [
        "october4-tools-taylor-product-034-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-034-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-034-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-034-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6739-3-8-impact-wrench",
      "sourceLabel": "Taylor Pneumatic : T-6739  3/8\" Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 c4fd16e311f00a3d1d2112c20a4ea393fead2bba600a56f67c47ffa5501b5c15. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-034-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-034-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-034-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
