import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "scie-taylor-pneumatic-t-9702-hd-reciprocating-saw-t-9702",
  "slug": "scie-taylor-pneumatic-t-9702-hd-reciprocating-saw-t-9702",
  "categoryId": "scie",
  "category": "scie",
  "label": "Taylor Pneumatic T-9702 HD Reciprocating Saw (réf. T-9702)",
  "brand": "Taylor Pneumatic",
  "model": "T-9702 HD Reciprocating Saw",
  "mpn": "T-9702",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/scie-taylor-pneumatic-t-9702-hd-reciprocating-saw-t-9702.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9702 HD Reciprocating Saw (réf. T-9702)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9702-hd-reciprocating-saw",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9702-hd-reciprocating-saw",
    "label": "Référence T-9702",
    "distinguishingAttributes": {
      "reference": "T-9702",
      "RPM": "5,000",
      "Stroke Length": "7/16\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9702 HD Reciprocating Saw (réf. T-9702). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 5,000.",
      "Stroke Length : 7/16\".",
      "CFM @ Load : 5.",
      "Weight : 2.1 lbs..",
      "Length : 10 3/8\".",
      "Air Pressure : 90 PSI MAX."
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
      "value": "5,000",
      "evidenceIds": [
        "october4-tools-taylor-product-198-p1"
      ]
    },
    {
      "label": "Stroke Length",
      "value": "7/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-198-p1"
      ]
    },
    {
      "label": "CFM @ Load",
      "value": "5",
      "evidenceIds": [
        "october4-tools-taylor-product-198-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "2.1 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-198-p1"
      ]
    },
    {
      "label": "Length",
      "value": "10 3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-198-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-198-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-198-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-198-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9702-hd-reciprocating-saw",
      "sourceLabel": "Taylor Pneumatic : T-9702 HD Reciprocating Saw",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 b601df9ac083ef4fee7c1c652ed86c988957132eef893546427973305d7364a1. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-198-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-198-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-198-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
