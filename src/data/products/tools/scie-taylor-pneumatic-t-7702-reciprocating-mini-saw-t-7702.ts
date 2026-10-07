import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "scie-taylor-pneumatic-t-7702-reciprocating-mini-saw-t-7702",
  "slug": "scie-taylor-pneumatic-t-7702-reciprocating-mini-saw-t-7702",
  "categoryId": "scie",
  "category": "scie",
  "label": "Taylor Pneumatic T-7702 Reciprocating Mini Saw (réf. T-7702)",
  "brand": "Taylor Pneumatic",
  "model": "T-7702 Reciprocating Mini Saw",
  "mpn": "T-7702",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/scie-taylor-pneumatic-t-7702-reciprocating-mini-saw-t-7702.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7702 Reciprocating Mini Saw (réf. T-7702)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7702-reciprocating-mini-saw",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7702-reciprocating-mini-saw",
    "label": "Référence T-7702",
    "distinguishingAttributes": {
      "reference": "T-7702",
      "Strokes per Min.": "10,000",
      "Stroke Length": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7702 Reciprocating Mini Saw (réf. T-7702). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Strokes per Min. : 10,000.",
      "Stroke Length : 1/4\".",
      "CFM @ Load : 5.",
      "Weight : 1-3/8 lbs..",
      "Length : 7-1/8\".",
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
      "label": "Strokes per Min.",
      "value": "10,000",
      "evidenceIds": [
        "october4-tools-taylor-product-103-p1"
      ]
    },
    {
      "label": "Stroke Length",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-103-p1"
      ]
    },
    {
      "label": "CFM @ Load",
      "value": "5",
      "evidenceIds": [
        "october4-tools-taylor-product-103-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "1-3/8 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-103-p1"
      ]
    },
    {
      "label": "Length",
      "value": "7-1/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-103-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-103-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-103-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-103-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7702-reciprocating-mini-saw",
      "sourceLabel": "Taylor Pneumatic : T-7702 Reciprocating Mini Saw",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 88907746081264ddf318e8903524f050cc82e14fb446347fe496e1608ac1ff93. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-103-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-103-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-103-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
