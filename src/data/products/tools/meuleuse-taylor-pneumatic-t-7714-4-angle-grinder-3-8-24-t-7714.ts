import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-7714-4-angle-grinder-3-8-24-t-7714",
  "slug": "meuleuse-taylor-pneumatic-t-7714-4-angle-grinder-3-8-24-t-7714",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-7714 4\" Angle Grinder 3/8-24 (réf. T-7714)",
  "brand": "Taylor Pneumatic",
  "model": "T-7714 4\" Angle Grinder 3/8-24",
  "mpn": "T-7714",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-7714-4-angle-grinder-3-8-24-t-7714.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7714 4\" Angle Grinder 3/8-24 (réf. T-7714)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7714-4-angle-grinder-3-8-24",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7714-4-angle-grinder-3-8-24",
    "label": "Référence T-7714",
    "distinguishingAttributes": {
      "reference": "T-7714",
      "RPM": "12,000",
      "Wheel Size": "4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7714 4\" Angle Grinder 3/8-24 (réf. T-7714). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 12,000.",
      "Wheel Size : 4\".",
      "Spindle Size : 3/8-24.",
      "Weight lbs. : 4.",
      "Length : 8.75\".",
      "HP : .7."
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
        "october4-tools-taylor-product-105-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-105-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "3/8-24",
      "evidenceIds": [
        "october4-tools-taylor-product-105-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "4",
      "evidenceIds": [
        "october4-tools-taylor-product-105-p1"
      ]
    },
    {
      "label": "Length",
      "value": "8.75\"",
      "evidenceIds": [
        "october4-tools-taylor-product-105-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".7",
      "evidenceIds": [
        "october4-tools-taylor-product-105-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-105-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-105-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7714-4-angle-grinder-3-8-24",
      "sourceLabel": "Taylor Pneumatic : T-7714 4\" Angle Grinder 3/8-24",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 6dd44e22e291a33c409c00e1cc11df61b23d646c58877d07f044b370210503f4. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-105-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-105-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-105-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
