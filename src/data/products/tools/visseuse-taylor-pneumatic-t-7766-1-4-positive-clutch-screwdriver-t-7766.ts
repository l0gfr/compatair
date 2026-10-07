import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-taylor-pneumatic-t-7766-1-4-positive-clutch-screwdriver-t-7766",
  "slug": "visseuse-taylor-pneumatic-t-7766-1-4-positive-clutch-screwdriver-t-7766",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Taylor Pneumatic T-7766 1/4\" Positive Clutch Screwdriver (réf. T-7766)",
  "brand": "Taylor Pneumatic",
  "model": "T-7766 1/4\" Positive Clutch Screwdriver",
  "mpn": "T-7766",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/visseuse-taylor-pneumatic-t-7766-1-4-positive-clutch-screwdriver-t-7766.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7766 1/4\" Positive Clutch Screwdriver (réf. T-7766)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7766-1-4-positive-clutch-screwdriver",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7766-1-4-positive-clutch-screwdriver",
    "label": "Référence T-7766",
    "distinguishingAttributes": {
      "reference": "T-7766",
      "RPM": "1800",
      "Hex Drive": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7766 1/4\" Positive Clutch Screwdriver (réf. T-7766). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 1800.",
      "Hex Drive : 1/4\".",
      "Clutch Type : Positive.",
      "Length in. : 6.5\".",
      "Weight lbs. : 2.25.",
      "Torque Range in.lbs. : 115."
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
      "value": "1800",
      "evidenceIds": [
        "october4-tools-taylor-product-139-p1"
      ]
    },
    {
      "label": "Hex Drive",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-139-p1"
      ]
    },
    {
      "label": "Clutch Type",
      "value": "Positive",
      "evidenceIds": [
        "october4-tools-taylor-product-139-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-139-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.25",
      "evidenceIds": [
        "october4-tools-taylor-product-139-p1"
      ]
    },
    {
      "label": "Torque Range in.lbs.",
      "value": "115",
      "evidenceIds": [
        "october4-tools-taylor-product-139-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-139-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-139-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7766-1-4-positive-clutch-screwdriver",
      "sourceLabel": "Taylor Pneumatic : T-7766 1/4\" Positive Clutch Screwdriver",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 439c5a4ea15008935cf312fdee3ad2ac86a85d916c07a0f95a583a2b92fbac54. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-139-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-139-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-139-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
