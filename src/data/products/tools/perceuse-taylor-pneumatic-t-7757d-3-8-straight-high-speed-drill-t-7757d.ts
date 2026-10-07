import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-7757d-3-8-straight-high-speed-drill-t-7757d",
  "slug": "perceuse-taylor-pneumatic-t-7757d-3-8-straight-high-speed-drill-t-7757d",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-7757D 3/8\" Straight High Speed Drill (réf. T-7757D)",
  "brand": "Taylor Pneumatic",
  "model": "T-7757D 3/8\" Straight High Speed Drill",
  "mpn": "T-7757D",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-7757d-3-8-straight-high-speed-drill-t-7757d.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7757D 3/8\" Straight High Speed Drill (réf. T-7757D)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7757d-3-8-straight-high-speed-drill",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7757d-3-8-straight-high-speed-drill",
    "label": "Référence T-7757D",
    "distinguishingAttributes": {
      "reference": "T-7757D",
      "RPM": "25,000",
      "Chuck Size": "3/8\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7757D 3/8\" Straight High Speed Drill (réf. T-7757D). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 25,000.",
      "Chuck Size : 3/8\".",
      "Length : 6.625\".",
      "Weight : 1.375 lbs..",
      "Horsepower : .5 HP.",
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
        "october4-tools-taylor-product-125-p1"
      ]
    },
    {
      "label": "Chuck Size",
      "value": "3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-125-p1"
      ]
    },
    {
      "label": "Length",
      "value": "6.625\"",
      "evidenceIds": [
        "october4-tools-taylor-product-125-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "1.375 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-125-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".5 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-125-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-125-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-125-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-125-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7757d-3-8-straight-high-speed-drill",
      "sourceLabel": "Taylor Pneumatic : T-7757D 3/8\" Straight High Speed Drill",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 31e26d17884ee93a4902c40fb8fda1c0ad126f5408aae593686272f62286ed61. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-125-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-125-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-125-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
