import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9757-hd-1-4-die-grinder-front-exhaust-t-9757",
  "slug": "meuleuse-taylor-pneumatic-t-9757-hd-1-4-die-grinder-front-exhaust-t-9757",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9757 HD 1/4\" Die Grinder - Front Exhaust (réf. T-9757)",
  "brand": "Taylor Pneumatic",
  "model": "T-9757 HD 1/4\" Die Grinder - Front Exhaust",
  "mpn": "T-9757",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9757-hd-1-4-die-grinder-front-exhaust-t-9757.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9757 HD 1/4\" Die Grinder - Front Exhaust (réf. T-9757)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9757-hd-1-4-die-grinder-front-exhaust",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9757-hd-1-4-die-grinder-front-exhaust",
    "label": "Référence T-9757",
    "distinguishingAttributes": {
      "reference": "T-9757",
      "RPM": "20,000",
      "Collet": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9757 HD 1/4\" Die Grinder - Front Exhaust (réf. T-9757). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 20,000.",
      "Collet : 1/4\".",
      "Length in. : 6.25\".",
      "Weight lbs. : 1.35 lbs..",
      "Horsepower : .6 HP.",
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
      "label": "RPM",
      "value": "20,000",
      "evidenceIds": [
        "october4-tools-taylor-product-204-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-204-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6.25\"",
      "evidenceIds": [
        "october4-tools-taylor-product-204-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.35 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-204-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".6 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-204-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-204-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-204-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-204-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9757-hd-1-4-die-grinder-front-exhaust",
      "sourceLabel": "Taylor Pneumatic : T-9757 HD 1/4\" Die Grinder - Front Exhaust",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 3c8c2a856faa3b482756f9f165391d1b1eb4525a1992b7a41d3aa9f715401af3. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-204-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-204-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-204-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
