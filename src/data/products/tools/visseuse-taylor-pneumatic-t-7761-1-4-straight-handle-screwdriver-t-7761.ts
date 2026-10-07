import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-taylor-pneumatic-t-7761-1-4-straight-handle-screwdriver-t-7761",
  "slug": "visseuse-taylor-pneumatic-t-7761-1-4-straight-handle-screwdriver-t-7761",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Taylor Pneumatic T-7761 1/4\" Straight Handle Screwdriver (réf. T-7761)",
  "brand": "Taylor Pneumatic",
  "model": "T-7761 1/4\" Straight Handle Screwdriver",
  "mpn": "T-7761",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/visseuse-taylor-pneumatic-t-7761-1-4-straight-handle-screwdriver-t-7761.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7761 1/4\" Straight Handle Screwdriver (réf. T-7761)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7761-1-4-straight-handle-screwdriver",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7761-1-4-straight-handle-screwdriver",
    "label": "Référence T-7761",
    "distinguishingAttributes": {
      "reference": "T-7761",
      "RPM": "1600",
      "Hex Drive": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7761 1/4\" Straight Handle Screwdriver (réf. T-7761). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 1600.",
      "Hex Drive : 1/4\".",
      "Clutch Type : Internally Adjustable.",
      "Length in. : 8.875\".",
      "Weight lbs. : 1.25.",
      "Torque Range in.lbs. : 30 - 70."
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
      "value": "1600",
      "evidenceIds": [
        "october4-tools-taylor-product-132-p1"
      ]
    },
    {
      "label": "Hex Drive",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-132-p1"
      ]
    },
    {
      "label": "Clutch Type",
      "value": "Internally Adjustable",
      "evidenceIds": [
        "october4-tools-taylor-product-132-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "8.875\"",
      "evidenceIds": [
        "october4-tools-taylor-product-132-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.25",
      "evidenceIds": [
        "october4-tools-taylor-product-132-p1"
      ]
    },
    {
      "label": "Torque Range in.lbs.",
      "value": "30 - 70",
      "evidenceIds": [
        "october4-tools-taylor-product-132-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-132-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-132-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7761-1-4-straight-handle-screwdriver",
      "sourceLabel": "Taylor Pneumatic : T-7761 1/4\" Straight Handle Screwdriver",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 9785247322debd0357a5dfb1f2b24f197ba1d645788a80fb648ba71578a30db5. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-132-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-132-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-132-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
