import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-7772-3-4-impact-wrench-t-7772",
  "slug": "cle-a-chocs-taylor-pneumatic-t-7772-3-4-impact-wrench-t-7772",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-7772 3/4\" Impact Wrench (réf. T-7772)",
  "brand": "Taylor Pneumatic",
  "model": "T-7772 3/4\" Impact Wrench",
  "mpn": "T-7772",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-7772-3-4-impact-wrench-t-7772.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7772 3/4\" Impact Wrench (réf. T-7772)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7772",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7772-3-4-impact-wrench",
    "label": "Référence T-7772",
    "distinguishingAttributes": {
      "reference": "T-7772",
      "SQ. Drive": "3/4\"",
      "Weight lbs.": "10.5"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7772 3/4\" Impact Wrench (réf. T-7772). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 3/4\".",
      "Weight lbs. : 10.5.",
      "Length in. : 8.75.",
      "Working Torque : 650.",
      "Max Torque : 700.",
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
        "october4-tools-taylor-product-146-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "10.5",
      "evidenceIds": [
        "october4-tools-taylor-product-146-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "8.75",
      "evidenceIds": [
        "october4-tools-taylor-product-146-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "650",
      "evidenceIds": [
        "october4-tools-taylor-product-146-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "700",
      "evidenceIds": [
        "october4-tools-taylor-product-146-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-146-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-146-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-146-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7772",
      "sourceLabel": "Taylor Pneumatic : T-7772 3/4\" Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 0dbe07e81817c3f205dd42b6f1fcdaf1d583bc3f67be3b0a7c3922356581d17a. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-146-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-146-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-146-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
