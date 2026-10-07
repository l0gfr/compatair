import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "scie-taylor-pneumatic-t-9902-vibration-reduced-saw-t-9902",
  "slug": "scie-taylor-pneumatic-t-9902-vibration-reduced-saw-t-9902",
  "categoryId": "scie",
  "category": "scie",
  "label": "Taylor Pneumatic T-9902 Vibration Reduced Saw (réf. T-9902)",
  "brand": "Taylor Pneumatic",
  "model": "T-9902 Vibration Reduced Saw",
  "mpn": "T-9902",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/scie-taylor-pneumatic-t-9902-vibration-reduced-saw-t-9902.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9902 Vibration Reduced Saw (réf. T-9902)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9902-vibration-reduced-saw",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9902-vibration-reduced-saw",
    "label": "Référence T-9902",
    "distinguishingAttributes": {
      "reference": "T-9902",
      "Strokes per Min.": "9,500",
      "Stroke Length": "3/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9902 Vibration Reduced Saw (réf. T-9902). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Strokes per Min. : 9,500.",
      "Stroke Length : 3/4\".",
      "CFM @ Load : 6.",
      "Weight : 1.2 lbs..",
      "Length : 11.75\".",
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
      "value": "9,500",
      "evidenceIds": [
        "october4-tools-taylor-product-212-p1"
      ]
    },
    {
      "label": "Stroke Length",
      "value": "3/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-212-p1"
      ]
    },
    {
      "label": "CFM @ Load",
      "value": "6",
      "evidenceIds": [
        "october4-tools-taylor-product-212-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "1.2 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-212-p1"
      ]
    },
    {
      "label": "Length",
      "value": "11.75\"",
      "evidenceIds": [
        "october4-tools-taylor-product-212-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-212-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-212-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-212-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9902-vibration-reduced-saw",
      "sourceLabel": "Taylor Pneumatic : T-9902 Vibration Reduced Saw",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 b788c68bc0526c90bc775d380654e3db27063bb1abe65b6b41869438fa700f48. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-212-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-212-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-212-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
