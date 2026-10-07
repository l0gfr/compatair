import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-7749l-1-2-sd-impact-wrench-2-extended-anvil-t-7749l",
  "slug": "cle-a-chocs-taylor-pneumatic-t-7749l-1-2-sd-impact-wrench-2-extended-anvil-t-7749l",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-7749L 1/2\" SD Impact Wrench 2\" Extended Anvil (réf. T-7749L)",
  "brand": "Taylor Pneumatic",
  "model": "T-7749L 1/2\" SD Impact Wrench 2\" Extended Anvil",
  "mpn": "T-7749L",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-7749l-1-2-sd-impact-wrench-2-extended-anvil-t-7749l.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7749L 1/2\" SD Impact Wrench 2\" Extended Anvil (réf. T-7749L)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7749l-1-2-sd-impact-wrench-2-extended-anvil",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7749l-1-2-sd-impact-wrench-2-extended-anvil",
    "label": "Référence T-7749L",
    "distinguishingAttributes": {
      "reference": "T-7749L",
      "SQ. Drive": "1/2\"",
      "Weight": "6 lbs."
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7749L 1/2\" SD Impact Wrench 2\" Extended Anvil (réf. T-7749L). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 1/2\".",
      "Weight : 6 lbs..",
      "Length : 8\".",
      "Working Torque : 450/550.",
      "Max Torque : 500/600.",
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
        "october4-tools-taylor-product-123-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "6 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-123-p1"
      ]
    },
    {
      "label": "Length",
      "value": "8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-123-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "450/550",
      "evidenceIds": [
        "october4-tools-taylor-product-123-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "500/600",
      "evidenceIds": [
        "october4-tools-taylor-product-123-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-123-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-123-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-123-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7749l-1-2-sd-impact-wrench-2-extended-anvil",
      "sourceLabel": "Taylor Pneumatic : T-7749L 1/2\" SD Impact Wrench 2\" Extended Anvil",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 1748734325033af7e2e9fa9702ac4d1dde8223baa1be1dd55f0be1738233e9b1. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-123-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-123-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-123-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
