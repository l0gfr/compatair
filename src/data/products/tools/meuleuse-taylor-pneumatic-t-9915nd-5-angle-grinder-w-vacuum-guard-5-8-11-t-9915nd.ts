import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9915nd-5-angle-grinder-w-vacuum-guard-5-8-11-t-9915nd",
  "slug": "meuleuse-taylor-pneumatic-t-9915nd-5-angle-grinder-w-vacuum-guard-5-8-11-t-9915nd",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9915ND 5\" Angle Grinder w/Vacuum Guard 5/8-11 (réf. T-9915ND)",
  "brand": "Taylor Pneumatic",
  "model": "T-9915ND 5\" Angle Grinder w/Vacuum Guard 5/8-11",
  "mpn": "T-9915ND",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9915nd-5-angle-grinder-w-vacuum-guard-5-8-11-t-9915nd.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9915ND 5\" Angle Grinder w/Vacuum Guard 5/8-11 (réf. T-9915ND)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9915nd-5-angle-grinder-w-vacuum-guard-5-8-11",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9915nd-5-angle-grinder-w-vacuum-guard-5-8-11",
    "label": "Référence T-9915ND",
    "distinguishingAttributes": {
      "reference": "T-9915ND",
      "RPM": "11,000",
      "Wheel Size": "5\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9915ND 5\" Angle Grinder w/Vacuum Guard 5/8-11 (réf. T-9915ND). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 11,000.",
      "Wheel Size : 5\".",
      "Spindle Size : 5/8-11.",
      "Weight lbs. : 3.2.",
      "Length : 9.5\".",
      "HP : 1.3."
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
      "value": "11,000",
      "evidenceIds": [
        "october4-tools-taylor-product-215-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-215-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/8-11",
      "evidenceIds": [
        "october4-tools-taylor-product-215-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.2",
      "evidenceIds": [
        "october4-tools-taylor-product-215-p1"
      ]
    },
    {
      "label": "Length",
      "value": "9.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-215-p1"
      ]
    },
    {
      "label": "HP",
      "value": "1.3",
      "evidenceIds": [
        "october4-tools-taylor-product-215-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-215-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-215-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9915nd-5-angle-grinder-w-vacuum-guard-5-8-11",
      "sourceLabel": "Taylor Pneumatic : T-9915ND 5\" Angle Grinder w/Vacuum Guard 5/8-11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 d9b533880fa4c2bc22bdf65d6e7645a550b33139cb5cfd1155ec1e0aaf18486d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-215-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-215-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-215-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
