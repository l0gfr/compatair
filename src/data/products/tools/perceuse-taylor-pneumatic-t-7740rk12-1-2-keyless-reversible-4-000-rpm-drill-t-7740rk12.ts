import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-7740rk12-1-2-keyless-reversible-4-000-rpm-drill-t-7740rk12",
  "slug": "perceuse-taylor-pneumatic-t-7740rk12-1-2-keyless-reversible-4-000-rpm-drill-t-7740rk12",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-7740RK12 1/2\" Keyless Reversible 4,000 RPM Drill (réf. T-7740RK12)",
  "brand": "Taylor Pneumatic",
  "model": "T-7740RK12 1/2\" Keyless Reversible 4,000 RPM Drill",
  "mpn": "T-7740RK12",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-7740rk12-1-2-keyless-reversible-4-000-rpm-drill-t-7740rk12.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7740RK12 1/2\" Keyless Reversible 4,000 RPM Drill (réf. T-7740RK12)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7740rk12-1-2-keyless-reversible-4-000-rpm-drill",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7740rk12-1-2-keyless-reversible-4-000-rpm-drill",
    "label": "Référence T-7740RK12",
    "distinguishingAttributes": {
      "reference": "T-7740RK12",
      "RPM": "4,000",
      "Chuck Size": "1/2\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7740RK12 1/2\" Keyless Reversible 4,000 RPM Drill (réf. T-7740RK12). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 4,000.",
      "Chuck Size : 1/2\".",
      "Weight lbs. : 2.0.",
      "Length in. : 7\".",
      "Horsepower : .5.",
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
      "value": "4,000",
      "evidenceIds": [
        "october4-tools-taylor-product-117-p1"
      ]
    },
    {
      "label": "Chuck Size",
      "value": "1/2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-117-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.0",
      "evidenceIds": [
        "october4-tools-taylor-product-117-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "7\"",
      "evidenceIds": [
        "october4-tools-taylor-product-117-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".5",
      "evidenceIds": [
        "october4-tools-taylor-product-117-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-117-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-117-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-117-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7740rk12-1-2-keyless-reversible-4-000-rpm-drill",
      "sourceLabel": "Taylor Pneumatic : T-7740RK12 1/2\" Keyless Reversible 4,000 RPM Drill",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 abc6c71bb3d97e0c997459fa20f15c6c8f0872460786e9e9e47996e0c0e3eaee. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-117-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-117-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-117-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
