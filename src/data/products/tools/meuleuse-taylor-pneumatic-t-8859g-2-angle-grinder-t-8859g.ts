import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-8859g-2-angle-grinder-t-8859g",
  "slug": "meuleuse-taylor-pneumatic-t-8859g-2-angle-grinder-t-8859g",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-8859G 2\" Angle Grinder (réf. T-8859G)",
  "brand": "Taylor Pneumatic",
  "model": "T-8859G 2\" Angle Grinder",
  "mpn": "T-8859G",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-8859g-2-angle-grinder-t-8859g.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-8859G 2\" Angle Grinder (réf. T-8859G)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-8859g-2-angle-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-8859g-2-angle-grinder",
    "label": "Référence T-8859G",
    "distinguishingAttributes": {
      "reference": "T-8859G",
      "RPM": "15,000",
      "Wheel Size": "2\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-8859G 2\" Angle Grinder (réf. T-8859G). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 15,000.",
      "Wheel Size : 2\".",
      "Spindle Size : 5/16-24.",
      "Weight lbs. : 1.5.",
      "Length : 7\".",
      "HP : .45."
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
      "value": "15,000",
      "evidenceIds": [
        "october4-tools-taylor-product-189-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-189-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/16-24",
      "evidenceIds": [
        "october4-tools-taylor-product-189-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.5",
      "evidenceIds": [
        "october4-tools-taylor-product-189-p1"
      ]
    },
    {
      "label": "Length",
      "value": "7\"",
      "evidenceIds": [
        "october4-tools-taylor-product-189-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".45",
      "evidenceIds": [
        "october4-tools-taylor-product-189-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-189-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-189-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-8859g-2-angle-grinder",
      "sourceLabel": "Taylor Pneumatic : T-8859G 2\" Angle Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4f5e0b631ab302606f3d342bf7843618d4c50c2ef4117a75871f79f75396729b. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-189-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-189-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-189-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
