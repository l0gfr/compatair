import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-7787rn-3-8-reversible-90-drill-t-7787rn",
  "slug": "perceuse-taylor-pneumatic-t-7787rn-3-8-reversible-90-drill-t-7787rn",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-7787RN 3/8\" Reversible 90° Drill (réf. T-7787RN)",
  "brand": "Taylor Pneumatic",
  "model": "T-7787RN 3/8\" Reversible 90° Drill",
  "mpn": "T-7787RN",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-7787rn-3-8-reversible-90-drill-t-7787rn.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7787RN 3/8\" Reversible 90° Drill (réf. T-7787RN)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7787rn-3-8-reversible-90-drill-w-keyless-chuck",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7787rn-3-8-reversible-90-drill",
    "label": "Référence T-7787RN",
    "distinguishingAttributes": {
      "reference": "T-7787RN",
      "RPM": "1,400",
      "Chuck Size": "3/8\" Keyed or Keyless"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7787RN 3/8\" Reversible 90° Drill (réf. T-7787RN). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 1,400.",
      "Chuck Size : 3/8\" Keyed or Keyless.",
      "Weight lbs. : 2.",
      "Length in. : 8.25\".",
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
      "value": "1,400",
      "evidenceIds": [
        "october4-tools-taylor-product-153-p1"
      ]
    },
    {
      "label": "Chuck Size",
      "value": "3/8\" Keyed or Keyless",
      "evidenceIds": [
        "october4-tools-taylor-product-153-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2",
      "evidenceIds": [
        "october4-tools-taylor-product-153-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "8.25\"",
      "evidenceIds": [
        "october4-tools-taylor-product-153-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".5",
      "evidenceIds": [
        "october4-tools-taylor-product-153-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-153-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-153-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-153-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7787rn-3-8-reversible-90-drill-w-keyless-chuck",
      "sourceLabel": "Taylor Pneumatic : T-7787RN 3/8\" Reversible 90° Drill",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4b0cf8c1f83105aba98c18855ffb0c3f91c0e6353994cd758197d0f52739467d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-153-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-153-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-153-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
