import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-taylor-pneumatic-t-8005-sd-one-shot-hammer-t-8005",
  "slug": "burineur-taylor-pneumatic-t-8005-sd-one-shot-hammer-t-8005",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Taylor Pneumatic T-8005  SD One Shot Hammer (réf. T-8005)",
  "brand": "Taylor Pneumatic",
  "model": "T-8005  SD One Shot Hammer",
  "mpn": "T-8005",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/burineur-taylor-pneumatic-t-8005-sd-one-shot-hammer-t-8005.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-8005  SD One Shot Hammer (réf. T-8005)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-8005-sd-one-shot-hammer",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-8005-sd-one-shot-hammer",
    "label": "Référence T-8005",
    "distinguishingAttributes": {
      "reference": "T-8005",
      "Shank Diameter": "HEX",
      "Blows per Actuation": "1"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-8005  SD One Shot Hammer (réf. T-8005). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : HEX.",
      "Blows per Actuation : 1.",
      "Air Pressure : 90 PSI MAX.",
      "Length : 10\".",
      "Weight : 2.85 lbs..",
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
      "label": "Shank Diameter",
      "value": "HEX",
      "evidenceIds": [
        "october4-tools-taylor-product-172-p1"
      ]
    },
    {
      "label": "Blows per Actuation",
      "value": "1",
      "evidenceIds": [
        "october4-tools-taylor-product-172-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-172-p1"
      ]
    },
    {
      "label": "Length",
      "value": "10\"",
      "evidenceIds": [
        "october4-tools-taylor-product-172-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "2.85 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-172-p1"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\" NPT",
      "evidenceIds": [
        "october4-tools-taylor-product-172-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-172-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-172-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-8005-sd-one-shot-hammer",
      "sourceLabel": "Taylor Pneumatic : T-8005  SD One Shot Hammer",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 8d08cb6b603dd8957604e06b5c59cb07320ea6359fe662c46433743e77128ae2. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-172-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-172-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-172-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
