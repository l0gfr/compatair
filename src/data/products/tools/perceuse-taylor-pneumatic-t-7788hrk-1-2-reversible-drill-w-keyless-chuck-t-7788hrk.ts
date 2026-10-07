import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-7788hrk-1-2-reversible-drill-w-keyless-chuck-t-7788hrk",
  "slug": "perceuse-taylor-pneumatic-t-7788hrk-1-2-reversible-drill-w-keyless-chuck-t-7788hrk",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-7788HRK 1/2\" Reversible Drill w/Keyless Chuck (réf. T-7788HRK)",
  "brand": "Taylor Pneumatic",
  "model": "T-7788HRK 1/2\" Reversible Drill w/Keyless Chuck",
  "mpn": "T-7788HRK",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-7788hrk-1-2-reversible-drill-w-keyless-chuck-t-7788hrk.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7788HRK 1/2\" Reversible Drill w/Keyless Chuck (réf. T-7788HRK)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7788hrk-1-2-reversible-drill-w-keyless-chuck",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7788hrk-1-2-reversible-drill-w-keyless-chuck",
    "label": "Référence T-7788HRK",
    "distinguishingAttributes": {
      "reference": "T-7788HRK",
      "RPM": "500",
      "Chuck Size": "1/2\" Keyless"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7788HRK 1/2\" Reversible Drill w/Keyless Chuck (réf. T-7788HRK). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 500.",
      "Chuck Size : 1/2\" Keyless.",
      "Weight lbs. : 3.5.",
      "Length in. : 8.75\".",
      "HP : .5.",
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
      "value": "500",
      "evidenceIds": [
        "october4-tools-taylor-product-155-p1"
      ]
    },
    {
      "label": "Chuck Size",
      "value": "1/2\" Keyless",
      "evidenceIds": [
        "october4-tools-taylor-product-155-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.5",
      "evidenceIds": [
        "october4-tools-taylor-product-155-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "8.75\"",
      "evidenceIds": [
        "october4-tools-taylor-product-155-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".5",
      "evidenceIds": [
        "october4-tools-taylor-product-155-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-155-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-155-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-155-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7788hrk-1-2-reversible-drill-w-keyless-chuck",
      "sourceLabel": "Taylor Pneumatic : T-7788HRK 1/2\" Reversible Drill w/Keyless Chuck",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 1809335713726d4a834774024d8fbd15bae68ce41ade3a96bb51b126caefaf9f. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-155-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-155-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-155-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
