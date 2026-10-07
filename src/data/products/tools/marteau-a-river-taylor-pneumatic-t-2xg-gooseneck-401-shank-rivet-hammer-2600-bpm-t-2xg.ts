import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "marteau-a-river-taylor-pneumatic-t-2xg-gooseneck-401-shank-rivet-hammer-2600-bpm-t-2xg",
  "slug": "marteau-a-river-taylor-pneumatic-t-2xg-gooseneck-401-shank-rivet-hammer-2600-bpm-t-2xg",
  "categoryId": "marteau-a-river",
  "category": "marteau-a-river",
  "label": "Taylor Pneumatic T-2XG Gooseneck .401 Shank Rivet Hammer 2600 Bpm (réf. T-2XG)",
  "brand": "Taylor Pneumatic",
  "model": "T-2XG Gooseneck .401 Shank Rivet Hammer 2600 Bpm",
  "mpn": "T-2XG",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/marteau-a-river-taylor-pneumatic-t-2xg-gooseneck-401-shank-rivet-hammer-2600-bpm-t-2xg.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-2XG Gooseneck .401 Shank Rivet Hammer 2600 Bpm (réf. T-2XG)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-2xg-gooseneck-401-shank-rivet-hammer-2600-bpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-2xg-gooseneck-401-shank-rivet-hammer-2600-bpm",
    "label": "Référence T-2XG",
    "distinguishingAttributes": {
      "reference": "T-2XG",
      "Shank Diameter": ".401",
      "Bore & Stroke": "1/2\" x 2-1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-2XG Gooseneck .401 Shank Rivet Hammer 2600 Bpm (réf. T-2XG). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .401.",
      "Bore & Stroke : 1/2\" x 2-1/4\".",
      "Blows per Minute : 2600.",
      "Aluminum Rivet Capacity : 1/8\".",
      "Length : 9-7/16\".",
      "Weight : 4.5 lbs.."
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
        "october4-tools-taylor-product-013-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "1/2\" x 2-1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-013-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "2600",
      "evidenceIds": [
        "october4-tools-taylor-product-013-p1"
      ]
    },
    {
      "label": "Aluminum Rivet Capacity",
      "value": "1/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-013-p1"
      ]
    },
    {
      "label": "Length",
      "value": "9-7/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-013-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "4.5 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-013-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-013-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-013-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-2xg-gooseneck-401-shank-rivet-hammer-2600-bpm",
      "sourceLabel": "Taylor Pneumatic : T-2XG Gooseneck .401 Shank Rivet Hammer 2600 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 c46432083183a29a2559467d39bfbc47f22103736effa64bb099b250b1e438d8. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-013-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-013-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-013-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
