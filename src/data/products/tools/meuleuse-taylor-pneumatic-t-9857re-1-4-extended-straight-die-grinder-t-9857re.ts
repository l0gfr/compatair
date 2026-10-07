import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9857re-1-4-extended-straight-die-grinder-t-9857re",
  "slug": "meuleuse-taylor-pneumatic-t-9857re-1-4-extended-straight-die-grinder-t-9857re",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9857RE 1/4\" Extended Straight Die Grinder (réf. T-9857RE)",
  "brand": "Taylor Pneumatic",
  "model": "T-9857RE 1/4\" Extended Straight Die Grinder",
  "mpn": "T-9857RE",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9857re-1-4-extended-straight-die-grinder-t-9857re.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9857RE 1/4\" Extended Straight Die Grinder (réf. T-9857RE)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9857re-1-4-extended-straight-die-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9857re-1-4-extended-straight-die-grinder",
    "label": "Référence T-9857RE",
    "distinguishingAttributes": {
      "reference": "T-9857RE",
      "RPM": "22,000",
      "Collet": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9857RE 1/4\" Extended Straight Die Grinder (réf. T-9857RE). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 22,000.",
      "Collet : 1/4\".",
      "Length in. : 11\".",
      "Weight lbs. : 1.85 lbs..",
      "Horsepower : .9 HP.",
      "Air Pressure : 90 PSI Max."
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
      "value": "22,000",
      "evidenceIds": [
        "october4-tools-taylor-product-210-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-210-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "11\"",
      "evidenceIds": [
        "october4-tools-taylor-product-210-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.85 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-210-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".9 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-210-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-210-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-210-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-210-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9857re-1-4-extended-straight-die-grinder",
      "sourceLabel": "Taylor Pneumatic : T-9857RE 1/4\" Extended Straight Die Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 e20a9c33a8250a290f114af9bffbbc81b577fae66fb04bce8eb62cc410006da5. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-210-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-210-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-210-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
