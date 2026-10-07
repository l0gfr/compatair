import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-7888aspc-non-reversing-palm-drill-w-1-4-precision-chuck-t-7888aspc",
  "slug": "perceuse-taylor-pneumatic-t-7888aspc-non-reversing-palm-drill-w-1-4-precision-chuck-t-7888aspc",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-7888ASPC Non Reversing Palm Drill w/ 1/4\" Precision Chuck (réf. T-7888ASPC)",
  "brand": "Taylor Pneumatic",
  "model": "T-7888ASPC Non Reversing Palm Drill w/ 1/4\" Precision Chuck",
  "mpn": "T-7888ASPC",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-7888aspc-non-reversing-palm-drill-w-1-4-precision-chuck-t-7888aspc.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7888ASPC Non Reversing Palm Drill w/ 1/4\" Precision Chuck (réf. T-7888ASPC)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7888spc-non-reversing-palm-drill-w-1-4-precision-chuck-1",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7888aspc-non-reversing-palm-drill-w-1-4-precision-chuck",
    "label": "Référence T-7888ASPC",
    "distinguishingAttributes": {
      "reference": "T-7888ASPC",
      "RPM": "4,500",
      "Chuck Size": "1/4\" Keyless"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7888ASPC Non Reversing Palm Drill w/ 1/4\" Precision Chuck (réf. T-7888ASPC). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 4,500.",
      "Chuck Size : 1/4\" Keyless.",
      "Weight lbs. : 1.5.",
      "Length in. : 6\".",
      "HP : .3.",
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
      "value": "4,500",
      "evidenceIds": [
        "october4-tools-taylor-product-169-p1"
      ]
    },
    {
      "label": "Chuck Size",
      "value": "1/4\" Keyless",
      "evidenceIds": [
        "october4-tools-taylor-product-169-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.5",
      "evidenceIds": [
        "october4-tools-taylor-product-169-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6\"",
      "evidenceIds": [
        "october4-tools-taylor-product-169-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".3",
      "evidenceIds": [
        "october4-tools-taylor-product-169-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-169-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-169-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-169-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7888spc-non-reversing-palm-drill-w-1-4-precision-chuck-1",
      "sourceLabel": "Taylor Pneumatic : T-7888ASPC Non Reversing Palm Drill w/ 1/4\" Precision Chuck",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 affe644f139340d0ebda5998fe10f28f87cb4e38cab1ee5cd7bca6d6c434ac4e. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-169-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-169-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-169-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
