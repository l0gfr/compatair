import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-taylor-pneumatic-t-6778-5-high-speed-sander-t-6778",
  "slug": "ponceuse-pneumatique-taylor-pneumatic-t-6778-5-high-speed-sander-t-6778",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "Taylor Pneumatic T-6778 5\" High Speed Sander (réf. T-6778)",
  "brand": "Taylor Pneumatic",
  "model": "T-6778 5\" High Speed Sander",
  "mpn": "T-6778",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-pneumatique-taylor-pneumatic-t-6778-5-high-speed-sander-t-6778.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6778 5\" High Speed Sander (réf. T-6778)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6778-5-high-speed-sander",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6778-5-high-speed-sander",
    "label": "Référence T-6778",
    "distinguishingAttributes": {
      "reference": "T-6778",
      "Free Speed RPM": "18,000",
      "Pad Size inch": "3\", 4-1/2\", 5\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6778 5\" High Speed Sander (réf. T-6778). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Free Speed RPM : 18,000.",
      "Pad Size inch : 3\", 4-1/2\", 5\".",
      "Length inch : 4\".",
      "Weight lbs. : 2.3.",
      "Spindle Size : 7/16-20.",
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
      "label": "Free Speed RPM",
      "value": "18,000",
      "evidenceIds": [
        "october4-tools-taylor-product-040-p1"
      ]
    },
    {
      "label": "Pad Size inch",
      "value": "3\", 4-1/2\", 5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-040-p1"
      ]
    },
    {
      "label": "Length inch",
      "value": "4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-040-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.3",
      "evidenceIds": [
        "october4-tools-taylor-product-040-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "7/16-20",
      "evidenceIds": [
        "october4-tools-taylor-product-040-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-040-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-040-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-040-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6778-5-high-speed-sander",
      "sourceLabel": "Taylor Pneumatic : T-6778 5\" High Speed Sander",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 077601159e5b855bc27d5964e3dd6934e98e8568d822be476711ce526d06d3d8. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-040-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-040-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-040-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
