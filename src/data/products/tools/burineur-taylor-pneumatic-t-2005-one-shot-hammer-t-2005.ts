import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-taylor-pneumatic-t-2005-one-shot-hammer-t-2005",
  "slug": "burineur-taylor-pneumatic-t-2005-one-shot-hammer-t-2005",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Taylor Pneumatic T-2005 One Shot Hammer (réf. T-2005)",
  "brand": "Taylor Pneumatic",
  "model": "T-2005 One Shot Hammer",
  "mpn": "T-2005",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/burineur-taylor-pneumatic-t-2005-one-shot-hammer-t-2005.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-2005 One Shot Hammer (réf. T-2005)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-2005-one-shot-hammer",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-2005-one-shot-hammer",
    "label": "Référence T-2005",
    "distinguishingAttributes": {
      "reference": "T-2005",
      "Shank Diameter": ".401",
      "Blows per Actuation": "1"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-2005 One Shot Hammer (réf. T-2005). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .401.",
      "Blows per Actuation : 1.",
      "Air Pressure : 90 PSI MAX.",
      "Length : 8-3/8\".",
      "Weight : 2 lbs..",
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
      "value": ".401",
      "evidenceIds": [
        "october4-tools-taylor-product-007-p1"
      ]
    },
    {
      "label": "Blows per Actuation",
      "value": "1",
      "evidenceIds": [
        "october4-tools-taylor-product-007-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-007-p1"
      ]
    },
    {
      "label": "Length",
      "value": "8-3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-007-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "2 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-007-p1"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\" NPT",
      "evidenceIds": [
        "october4-tools-taylor-product-007-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-007-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-007-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-2005-one-shot-hammer",
      "sourceLabel": "Taylor Pneumatic : T-2005 One Shot Hammer",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 3a65a9297e14e7a36e29fea46b8414316d2b0423f4200991b8b567a47756d75e. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-007-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-007-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-007-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
