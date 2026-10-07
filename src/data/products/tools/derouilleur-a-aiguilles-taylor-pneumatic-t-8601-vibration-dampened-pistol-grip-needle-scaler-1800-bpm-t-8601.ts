import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "derouilleur-a-aiguilles-taylor-pneumatic-t-8601-vibration-dampened-pistol-grip-needle-scaler-1800-bpm-t-8601",
  "slug": "derouilleur-a-aiguilles-taylor-pneumatic-t-8601-vibration-dampened-pistol-grip-needle-scaler-1800-bpm-t-8601",
  "categoryId": "derouilleur-a-aiguilles",
  "category": "derouilleur-a-aiguilles",
  "label": "Taylor Pneumatic T-8601 Vibration Dampened Pistol Grip Needle Scaler 1800 Bpm (réf. T-8601)",
  "brand": "Taylor Pneumatic",
  "model": "T-8601 Vibration Dampened Pistol Grip Needle Scaler 1800 Bpm",
  "mpn": "T-8601",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/derouilleur-a-aiguilles-taylor-pneumatic-t-8601-vibration-dampened-pistol-grip-needle-scaler-1800-bpm-t-8601.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-8601 Vibration Dampened Pistol Grip Needle Scaler 1800 Bpm (réf. T-8601)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-8601-vibration-dampened-pistol-grip-needle-scaler",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-8601-vibration-dampened-pistol-grip-needle-scaler-1800-bpm",
    "label": "Référence T-8601",
    "distinguishingAttributes": {
      "reference": "T-8601",
      "Blows per Minute": "1800",
      "Needle Capacity": "19 x 3mm"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-8601 Vibration Dampened Pistol Grip Needle Scaler 1800 Bpm (réf. T-8601). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Blows per Minute : 1800.",
      "Needle Capacity : 19 x 3mm.",
      "Length : 18.5\".",
      "Weight : 8.15 lbs..",
      "Air Pressure : 90 PSI MAX.",
      "Air Inlet : 1/4\" NPT."
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
      "label": "Blows per Minute",
      "value": "1800",
      "evidenceIds": [
        "october4-tools-taylor-product-176-p1"
      ]
    },
    {
      "label": "Needle Capacity",
      "value": "19 x 3mm",
      "evidenceIds": [
        "october4-tools-taylor-product-176-p1"
      ]
    },
    {
      "label": "Length",
      "value": "18.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-176-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "8.15 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-176-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-176-p1"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\" NPT",
      "evidenceIds": [
        "october4-tools-taylor-product-176-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-176-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-176-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-8601-vibration-dampened-pistol-grip-needle-scaler",
      "sourceLabel": "Taylor Pneumatic : T-8601 Vibration Dampened Pistol Grip Needle Scaler 1800 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 52e6fc0e4e22d7e6533f712535c6f827349fb51567e836578a7d4472d2efc97a. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-176-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-176-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-176-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
