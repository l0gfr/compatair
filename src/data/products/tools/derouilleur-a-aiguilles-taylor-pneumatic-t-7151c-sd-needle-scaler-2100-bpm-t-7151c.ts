import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "derouilleur-a-aiguilles-taylor-pneumatic-t-7151c-sd-needle-scaler-2100-bpm-t-7151c",
  "slug": "derouilleur-a-aiguilles-taylor-pneumatic-t-7151c-sd-needle-scaler-2100-bpm-t-7151c",
  "categoryId": "derouilleur-a-aiguilles",
  "category": "derouilleur-a-aiguilles",
  "label": "Taylor Pneumatic T-7151C SD Needle Scaler 2100 Bpm (réf. T-7151C)",
  "brand": "Taylor Pneumatic",
  "model": "T-7151C SD Needle Scaler 2100 Bpm",
  "mpn": "T-7151C",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/derouilleur-a-aiguilles-taylor-pneumatic-t-7151c-sd-needle-scaler-2100-bpm-t-7151c.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7151C SD Needle Scaler 2100 Bpm (réf. T-7151C)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7151c-sd-needle-scaler-2100-bpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7151c-sd-needle-scaler-2100-bpm",
    "label": "Référence T-7151C",
    "distinguishingAttributes": {
      "reference": "T-7151C",
      "Needles": "19 x 3mm",
      "Bore & Stroke": "3/4\" x 3-1/2\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7151C SD Needle Scaler 2100 Bpm (réf. T-7151C). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Needles : 19 x 3mm.",
      "Bore & Stroke : 3/4\" x 3-1/2\".",
      "Blows per Minute : 2100.",
      "Air Pressure : 90 PSI MAX.",
      "Length : 16-1/4\".",
      "Weight : 6.4 lbs.."
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
      "label": "Needles",
      "value": "19 x 3mm",
      "evidenceIds": [
        "october4-tools-taylor-product-070-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "3/4\" x 3-1/2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-070-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "2100",
      "evidenceIds": [
        "october4-tools-taylor-product-070-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-070-p1"
      ]
    },
    {
      "label": "Length",
      "value": "16-1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-070-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "6.4 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-070-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-070-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-070-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7151c-sd-needle-scaler-2100-bpm",
      "sourceLabel": "Taylor Pneumatic : T-7151C SD Needle Scaler 2100 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 728c71329ec288624f2c587533f87918117fbdd35d3a8839f28c22bfd8413194. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-070-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-070-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-070-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
