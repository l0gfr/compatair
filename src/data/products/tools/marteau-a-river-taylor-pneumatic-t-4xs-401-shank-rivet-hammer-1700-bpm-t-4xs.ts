import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "marteau-a-river-taylor-pneumatic-t-4xs-401-shank-rivet-hammer-1700-bpm-t-4xs",
  "slug": "marteau-a-river-taylor-pneumatic-t-4xs-401-shank-rivet-hammer-1700-bpm-t-4xs",
  "categoryId": "marteau-a-river",
  "category": "marteau-a-river",
  "label": "Taylor Pneumatic T-4XS .401 Shank Rivet Hammer 1700 Bpm (réf. T-4XS)",
  "brand": "Taylor Pneumatic",
  "model": "T-4XS .401 Shank Rivet Hammer 1700 Bpm",
  "mpn": "T-4XS",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/marteau-a-river-taylor-pneumatic-t-4xs-401-shank-rivet-hammer-1700-bpm-t-4xs.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-4XS .401 Shank Rivet Hammer 1700 Bpm (réf. T-4XS)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-4xs-401-shank-rivet-hammer-1700-bpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-4xs-401-shank-rivet-hammer-1700-bpm",
    "label": "Référence T-4XS",
    "distinguishingAttributes": {
      "reference": "T-4XS",
      "Shank Diameter": ".401",
      "Bore & Stroke": "1/2\" x 3-1/16\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-4XS .401 Shank Rivet Hammer 1700 Bpm (réf. T-4XS). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .401.",
      "Bore & Stroke : 1/2\" x 3-1/16\".",
      "Blows per Minute : 1700.",
      "Aluminum Rivet Capacity : 1/4\".",
      "Length : 8-5/16\".",
      "Weight : 2-3/4 lbs.."
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
      "label": "Shank Diameter",
      "value": ".401",
      "evidenceIds": [
        "october4-tools-taylor-product-024-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "1/2\" x 3-1/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-024-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "1700",
      "evidenceIds": [
        "october4-tools-taylor-product-024-p1"
      ]
    },
    {
      "label": "Aluminum Rivet Capacity",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-024-p1"
      ]
    },
    {
      "label": "Length",
      "value": "8-5/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-024-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "2-3/4 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-024-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-024-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-024-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-4xs-401-shank-rivet-hammer-1700-bpm",
      "sourceLabel": "Taylor Pneumatic : T-4XS .401 Shank Rivet Hammer 1700 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 5fa2d96a2531bbe8bb70c1f036a4cf5d477dee66125a61ffea8bc80999c1a0c9. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-024-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-024-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-024-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
