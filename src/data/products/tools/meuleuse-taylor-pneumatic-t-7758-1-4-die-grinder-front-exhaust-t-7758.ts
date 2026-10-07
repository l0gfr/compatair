import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-7758-1-4-die-grinder-front-exhaust-t-7758",
  "slug": "meuleuse-taylor-pneumatic-t-7758-1-4-die-grinder-front-exhaust-t-7758",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-7758 1/4\" Die Grinder - Front Exhaust (réf. T-7758)",
  "brand": "Taylor Pneumatic",
  "model": "T-7758 1/4\" Die Grinder - Front Exhaust",
  "mpn": "T-7758",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-7758-1-4-die-grinder-front-exhaust-t-7758.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7758 1/4\" Die Grinder - Front Exhaust (réf. T-7758)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7758-1-4-die-grinder-front-exhaust",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7758-1-4-die-grinder-front-exhaust",
    "label": "Référence T-7758",
    "distinguishingAttributes": {
      "reference": "T-7758",
      "RPM": "25,000",
      "Collet": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7758 1/4\" Die Grinder - Front Exhaust (réf. T-7758). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 25,000.",
      "Collet : 1/4\".",
      "Length in. : 5.25\".",
      "Weight lbs. : .625 lbs..",
      "Horsepower : .25 HP.",
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
      "value": "25,000",
      "evidenceIds": [
        "october4-tools-taylor-product-129-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-129-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "5.25\"",
      "evidenceIds": [
        "october4-tools-taylor-product-129-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": ".625 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-129-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".25 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-129-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-129-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-129-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-129-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7758-1-4-die-grinder-front-exhaust",
      "sourceLabel": "Taylor Pneumatic : T-7758 1/4\" Die Grinder - Front Exhaust",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 21c058fd39b959a60d19e44b49687c8c077eaf425fddf3887ea631afa9695852. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-129-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-129-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-129-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
