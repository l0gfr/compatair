import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-6775l-3-4-sd-impact-wrench-2-extended-anvil-t-6775l",
  "slug": "cle-a-chocs-taylor-pneumatic-t-6775l-3-4-sd-impact-wrench-2-extended-anvil-t-6775l",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-6775L 3/4\" SD Impact Wrench 2\" Extended Anvil (réf. T-6775L)",
  "brand": "Taylor Pneumatic",
  "model": "T-6775L 3/4\" SD Impact Wrench 2\" Extended Anvil",
  "mpn": "T-6775L",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-6775l-3-4-sd-impact-wrench-2-extended-anvil-t-6775l.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6775L 3/4\" SD Impact Wrench 2\" Extended Anvil (réf. T-6775L)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6775l-3-4-sd-impact-wrench-2-extended-anvil",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6775l-3-4-sd-impact-wrench-2-extended-anvil",
    "label": "Référence T-6775L",
    "distinguishingAttributes": {
      "reference": "T-6775L",
      "SQ. Drive": "3/4\"",
      "Weight lbs.": "11.2"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6775L 3/4\" SD Impact Wrench 2\" Extended Anvil (réf. T-6775L). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 3/4\".",
      "Weight lbs. : 11.2.",
      "Length in. : 11.25.",
      "Working Torque : 1200.",
      "Max Torque : 1400.",
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
        "october4-tools-taylor-product-039-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "11.2",
      "evidenceIds": [
        "october4-tools-taylor-product-039-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "11.25",
      "evidenceIds": [
        "october4-tools-taylor-product-039-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "1200",
      "evidenceIds": [
        "october4-tools-taylor-product-039-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "1400",
      "evidenceIds": [
        "october4-tools-taylor-product-039-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-039-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-039-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-039-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6775l-3-4-sd-impact-wrench-2-extended-anvil",
      "sourceLabel": "Taylor Pneumatic : T-6775L 3/4\" SD Impact Wrench 2\" Extended Anvil",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 5302c9032e05120a742ef7477f530caa299e082fbf46fb9a78ea23f2fcc40867. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-039-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-039-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-039-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
