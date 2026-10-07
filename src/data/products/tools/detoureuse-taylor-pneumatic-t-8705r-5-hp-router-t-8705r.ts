import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "detoureuse-taylor-pneumatic-t-8705r-5-hp-router-t-8705r",
  "slug": "detoureuse-taylor-pneumatic-t-8705r-5-hp-router-t-8705r",
  "categoryId": "detoureuse",
  "category": "detoureuse",
  "label": "Taylor Pneumatic T-8705R .5 HP Router (réf. T-8705R)",
  "brand": "Taylor Pneumatic",
  "model": "T-8705R .5 HP Router",
  "mpn": "T-8705R",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/detoureuse-taylor-pneumatic-t-8705r-5-hp-router-t-8705r.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-8705R .5 HP Router (réf. T-8705R)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-8705r",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-8705r-5-hp-router",
    "label": "Référence T-8705R",
    "distinguishingAttributes": {
      "reference": "T-8705R",
      "Horsepower": ".5 HP",
      "RPM": "22,000"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-8705R .5 HP Router (réf. T-8705R). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Horsepower : .5 HP.",
      "RPM : 22,000.",
      "Weight : 1.85 lbs..",
      "Length : 7.125\".",
      "Collet Size : 1/4\".",
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
      "label": "Horsepower",
      "value": ".5 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-178-p1"
      ]
    },
    {
      "label": "RPM",
      "value": "22,000",
      "evidenceIds": [
        "october4-tools-taylor-product-178-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "1.85 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-178-p1"
      ]
    },
    {
      "label": "Length",
      "value": "7.125\"",
      "evidenceIds": [
        "october4-tools-taylor-product-178-p1"
      ]
    },
    {
      "label": "Collet Size",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-178-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-178-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-178-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-178-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-8705r",
      "sourceLabel": "Taylor Pneumatic : T-8705R .5 HP Router",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 42b3475ccef4bdc16c71fe1d2f672dcc94a66a84b2fcd80a434623aeaf7399b8. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-178-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-178-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-178-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
