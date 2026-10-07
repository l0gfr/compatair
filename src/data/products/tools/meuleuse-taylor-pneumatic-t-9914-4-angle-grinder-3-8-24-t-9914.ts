import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9914-4-angle-grinder-3-8-24-t-9914",
  "slug": "meuleuse-taylor-pneumatic-t-9914-4-angle-grinder-3-8-24-t-9914",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9914 4\" Angle Grinder 3/8\"-24 (réf. T-9914)",
  "brand": "Taylor Pneumatic",
  "model": "T-9914 4\" Angle Grinder 3/8\"-24",
  "mpn": "T-9914",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9914-4-angle-grinder-3-8-24-t-9914.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9914 4\" Angle Grinder 3/8\"-24 (réf. T-9914)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9914-4-angle-grinder-3-8-24",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9914-4-angle-grinder-3-8-24",
    "label": "Référence T-9914",
    "distinguishingAttributes": {
      "reference": "T-9914",
      "RPM": "11,000",
      "Wheel Size": "4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9914 4\" Angle Grinder 3/8\"-24 (réf. T-9914). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 11,000.",
      "Wheel Size : 4\".",
      "Spindle Size : 3/8\"-24.",
      "Weight lbs. : 3.2.",
      "Length : 9.5\".",
      "HP : 1.3."
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
      "value": "11,000",
      "evidenceIds": [
        "october4-tools-taylor-product-213-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-213-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "3/8\"-24",
      "evidenceIds": [
        "october4-tools-taylor-product-213-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.2",
      "evidenceIds": [
        "october4-tools-taylor-product-213-p1"
      ]
    },
    {
      "label": "Length",
      "value": "9.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-213-p1"
      ]
    },
    {
      "label": "HP",
      "value": "1.3",
      "evidenceIds": [
        "october4-tools-taylor-product-213-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-213-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-213-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9914-4-angle-grinder-3-8-24",
      "sourceLabel": "Taylor Pneumatic : T-9914 4\" Angle Grinder 3/8\"-24",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 d2c39955cbd1620b1bac10a4961e8f9abebe32a6fd605981f2209b37cc7566e7. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-213-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-213-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-213-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
