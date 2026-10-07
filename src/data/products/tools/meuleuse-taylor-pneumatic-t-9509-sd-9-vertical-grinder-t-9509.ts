import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9509-sd-9-vertical-grinder-t-9509",
  "slug": "meuleuse-taylor-pneumatic-t-9509-sd-9-vertical-grinder-t-9509",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9509 SD 9\" Vertical Grinder (réf. T-9509)",
  "brand": "Taylor Pneumatic",
  "model": "T-9509 SD 9\" Vertical Grinder",
  "mpn": "T-9509",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9509-sd-9-vertical-grinder-t-9509.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9509 SD 9\" Vertical Grinder (réf. T-9509)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9509-sd-9-vertical-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9509-sd-9-vertical-grinder",
    "label": "Référence T-9509",
    "distinguishingAttributes": {
      "reference": "T-9509",
      "RPM": "6,000",
      "Wheel Size": "9\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9509 SD 9\" Vertical Grinder (réf. T-9509). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 6,000.",
      "Wheel Size : 9\".",
      "Spindle Size : 5/8-11.",
      "Weight lbs. : 12.2.",
      "Height : 7.75.",
      "HP : 3."
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
      "label": "RPM",
      "value": "6,000",
      "evidenceIds": [
        "october4-tools-taylor-product-196-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "9\"",
      "evidenceIds": [
        "october4-tools-taylor-product-196-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/8-11",
      "evidenceIds": [
        "october4-tools-taylor-product-196-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "12.2",
      "evidenceIds": [
        "october4-tools-taylor-product-196-p1"
      ]
    },
    {
      "label": "Height",
      "value": "7.75",
      "evidenceIds": [
        "october4-tools-taylor-product-196-p1"
      ]
    },
    {
      "label": "HP",
      "value": "3",
      "evidenceIds": [
        "october4-tools-taylor-product-196-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-196-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-196-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9509-sd-9-vertical-grinder",
      "sourceLabel": "Taylor Pneumatic : T-9509 SD 9\" Vertical Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4e2434de9ab95b255a37b44237d95348aec97c71895e9f6780187aa720d26933. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-196-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-196-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-196-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
