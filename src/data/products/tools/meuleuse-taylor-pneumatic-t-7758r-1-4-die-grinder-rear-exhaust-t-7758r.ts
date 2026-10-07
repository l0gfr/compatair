import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-7758r-1-4-die-grinder-rear-exhaust-t-7758r",
  "slug": "meuleuse-taylor-pneumatic-t-7758r-1-4-die-grinder-rear-exhaust-t-7758r",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-7758R 1/4\" Die Grinder - Rear Exhaust (réf. T-7758R)",
  "brand": "Taylor Pneumatic",
  "model": "T-7758R 1/4\" Die Grinder - Rear Exhaust",
  "mpn": "T-7758R",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-7758r-1-4-die-grinder-rear-exhaust-t-7758r.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7758R 1/4\" Die Grinder - Rear Exhaust (réf. T-7758R)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-77578r-1-4-die-grinder-rear-exhaust",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7758r-1-4-die-grinder-rear-exhaust",
    "label": "Référence T-7758R",
    "distinguishingAttributes": {
      "reference": "T-7758R",
      "RPM": "25,000",
      "Collet": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7758R 1/4\" Die Grinder - Rear Exhaust (réf. T-7758R). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 25,000.",
      "Collet : 1/4\".",
      "Length in. : 6\".",
      "Weight lbs. : .8 lbs..",
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
        "october4-tools-taylor-product-124-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-124-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6\"",
      "evidenceIds": [
        "october4-tools-taylor-product-124-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": ".8 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-124-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".25 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-124-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-124-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-124-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-124-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-77578r-1-4-die-grinder-rear-exhaust",
      "sourceLabel": "Taylor Pneumatic : T-7758R 1/4\" Die Grinder - Rear Exhaust",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 7188f91a77fa32fc9fdebf3d4a94c18b3047ccb0f311859a8fe84d80bf39d0c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-124-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-124-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-124-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
