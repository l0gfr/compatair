import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-7734l-1-2-impact-wrench-2-extended-anvil-t-7734l",
  "slug": "cle-a-chocs-taylor-pneumatic-t-7734l-1-2-impact-wrench-2-extended-anvil-t-7734l",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-7734L  1/2\" Impact Wrench 2\" Extended Anvil (réf. T-7734L)",
  "brand": "Taylor Pneumatic",
  "model": "T-7734L  1/2\" Impact Wrench 2\" Extended Anvil",
  "mpn": "T-7734L",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-7734l-1-2-impact-wrench-2-extended-anvil-t-7734l.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7734L  1/2\" Impact Wrench 2\" Extended Anvil (réf. T-7734L)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7734l-1-2-impact-wrench-2-extended-anvil",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7734l-1-2-impact-wrench-2-extended-anvil",
    "label": "Référence T-7734L",
    "distinguishingAttributes": {
      "reference": "T-7734L",
      "SQ. Drive": "1/2\"",
      "Weight lbs.": "5.25"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7734L  1/2\" Impact Wrench 2\" Extended Anvil (réf. T-7734L). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "SQ. Drive : 1/2\".",
      "Weight lbs. : 5.25.",
      "Length in. : 8.125.",
      "Working Torque : 275.",
      "Max Torque : 325.",
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
        "october4-tools-taylor-product-112-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "5.25",
      "evidenceIds": [
        "october4-tools-taylor-product-112-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "8.125",
      "evidenceIds": [
        "october4-tools-taylor-product-112-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "275",
      "evidenceIds": [
        "october4-tools-taylor-product-112-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "325",
      "evidenceIds": [
        "october4-tools-taylor-product-112-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-112-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-112-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-112-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7734l-1-2-impact-wrench-2-extended-anvil",
      "sourceLabel": "Taylor Pneumatic : T-7734L  1/2\" Impact Wrench 2\" Extended Anvil",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 a558618edf0f04ff629381c77a6ea1c5b1f22f9a1ff613dd197d6b9d315f1b20. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-112-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-112-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-112-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
