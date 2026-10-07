import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-taylor-pneumatic-t-7763s-1-4-straight-handle-screwdriver-800-rpm-t-7763s",
  "slug": "visseuse-taylor-pneumatic-t-7763s-1-4-straight-handle-screwdriver-800-rpm-t-7763s",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Taylor Pneumatic T-7763S 1/4\" Straight Handle Screwdriver 800 RPM (réf. T-7763S)",
  "brand": "Taylor Pneumatic",
  "model": "T-7763S 1/4\" Straight Handle Screwdriver 800 RPM",
  "mpn": "T-7763S",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/visseuse-taylor-pneumatic-t-7763s-1-4-straight-handle-screwdriver-800-rpm-t-7763s.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7763S 1/4\" Straight Handle Screwdriver 800 RPM (réf. T-7763S)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7763s-1-4-straight-handle-screwdriver",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7763s-1-4-straight-handle-screwdriver-800-rpm",
    "label": "Référence T-7763S",
    "distinguishingAttributes": {
      "reference": "T-7763S",
      "RPM": "800",
      "Hex Drive": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7763S 1/4\" Straight Handle Screwdriver 800 RPM (réf. T-7763S). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 800.",
      "Hex Drive : 1/4\".",
      "Clutch Type : Internally Adjustable.",
      "Length in. : 11\".",
      "Weight lbs. : 2.65.",
      "Torque Range in.lbs. : 45-115."
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
      "value": "800",
      "evidenceIds": [
        "october4-tools-taylor-product-136-p1"
      ]
    },
    {
      "label": "Hex Drive",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-136-p1"
      ]
    },
    {
      "label": "Clutch Type",
      "value": "Internally Adjustable",
      "evidenceIds": [
        "october4-tools-taylor-product-136-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "11\"",
      "evidenceIds": [
        "october4-tools-taylor-product-136-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.65",
      "evidenceIds": [
        "october4-tools-taylor-product-136-p1"
      ]
    },
    {
      "label": "Torque Range in.lbs.",
      "value": "45-115",
      "evidenceIds": [
        "october4-tools-taylor-product-136-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-136-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-136-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7763s-1-4-straight-handle-screwdriver",
      "sourceLabel": "Taylor Pneumatic : T-7763S 1/4\" Straight Handle Screwdriver 800 RPM",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 fdf5b49bcab7826a9a990ce4a42977f1a2fd06b1ba287acfc4eb62a28e5a0692. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-136-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-136-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-136-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
