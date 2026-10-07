import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9707-hd-7-angle-grinder-t-9707",
  "slug": "meuleuse-taylor-pneumatic-t-9707-hd-7-angle-grinder-t-9707",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9707 HD 7\" Angle Grinder (réf. T-9707)",
  "brand": "Taylor Pneumatic",
  "model": "T-9707 HD 7\" Angle Grinder",
  "mpn": "T-9707",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9707-hd-7-angle-grinder-t-9707.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9707 HD 7\" Angle Grinder (réf. T-9707)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9707-hd-7-angle-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9707-hd-7-angle-grinder",
    "label": "Référence T-9707",
    "distinguishingAttributes": {
      "reference": "T-9707",
      "RPM": "7,700",
      "Wheel Size": "7\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9707 HD 7\" Angle Grinder (réf. T-9707). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 7,700.",
      "Wheel Size : 7\".",
      "Spindle Size : 5/8-11.",
      "Weight lbs. : 7.",
      "Length : 11.25.",
      "HP : 1.9."
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
      "value": "7,700",
      "evidenceIds": [
        "october4-tools-taylor-product-200-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "7\"",
      "evidenceIds": [
        "october4-tools-taylor-product-200-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/8-11",
      "evidenceIds": [
        "october4-tools-taylor-product-200-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "7",
      "evidenceIds": [
        "october4-tools-taylor-product-200-p1"
      ]
    },
    {
      "label": "Length",
      "value": "11.25",
      "evidenceIds": [
        "october4-tools-taylor-product-200-p1"
      ]
    },
    {
      "label": "HP",
      "value": "1.9",
      "evidenceIds": [
        "october4-tools-taylor-product-200-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-200-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-200-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9707-hd-7-angle-grinder",
      "sourceLabel": "Taylor Pneumatic : T-9707 HD 7\" Angle Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 e70eb5f5e973113013216c6d48fe18659000f53a032be4809537a023cb01fbd6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-200-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-200-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-200-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
