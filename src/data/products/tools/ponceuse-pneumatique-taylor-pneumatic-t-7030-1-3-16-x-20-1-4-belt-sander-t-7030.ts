import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-taylor-pneumatic-t-7030-1-3-16-x-20-1-4-belt-sander-t-7030",
  "slug": "ponceuse-pneumatique-taylor-pneumatic-t-7030-1-3-16-x-20-1-4-belt-sander-t-7030",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "Taylor Pneumatic T-7030 1-3/16\" x 20-1/4\" Belt Sander (réf. T-7030)",
  "brand": "Taylor Pneumatic",
  "model": "T-7030 1-3/16\" x 20-1/4\" Belt Sander",
  "mpn": "T-7030",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-pneumatique-taylor-pneumatic-t-7030-1-3-16-x-20-1-4-belt-sander-t-7030.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7030 1-3/16\" x 20-1/4\" Belt Sander (réf. T-7030)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7030-1-3-16-x-20-1-4-belt-sander",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7030-1-3-16-x-20-1-4-belt-sander",
    "label": "Référence T-7030",
    "distinguishingAttributes": {
      "reference": "T-7030",
      "RPM": "12,000",
      "HP": ".7"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7030 1-3/16\" x 20-1/4\" Belt Sander (réf. T-7030). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 12,000.",
      "HP : .7.",
      "Belt Size : 1-3/16\" x 21-1/4\".",
      "Average CFM : 7.",
      "Air Pressure : 90 PSI Max.",
      "Weight : 4.9 lbs.."
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
      "value": "12,000",
      "evidenceIds": [
        "october4-tools-taylor-product-062-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".7",
      "evidenceIds": [
        "october4-tools-taylor-product-062-p1"
      ]
    },
    {
      "label": "Belt Size",
      "value": "1-3/16\" x 21-1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-062-p1"
      ]
    },
    {
      "label": "Average CFM",
      "value": "7",
      "evidenceIds": [
        "october4-tools-taylor-product-062-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-062-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "4.9 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-062-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-062-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-062-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7030-1-3-16-x-20-1-4-belt-sander",
      "sourceLabel": "Taylor Pneumatic : T-7030 1-3/16\" x 20-1/4\" Belt Sander",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 e125cb9dec1ed857b32251417dcbec1174bebf9d29a11e8eaf3b97ec3a1a5ac5. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-062-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-062-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-062-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
