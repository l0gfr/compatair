import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-7740r-3-8-reversible-4-000-rpm-drill-t-7740r",
  "slug": "perceuse-taylor-pneumatic-t-7740r-3-8-reversible-4-000-rpm-drill-t-7740r",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-7740R 3/8\" Reversible 4,000 RPM Drill (réf. T-7740R)",
  "brand": "Taylor Pneumatic",
  "model": "T-7740R 3/8\" Reversible 4,000 RPM Drill",
  "mpn": "T-7740R",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-7740r-3-8-reversible-4-000-rpm-drill-t-7740r.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7740R 3/8\" Reversible 4,000 RPM Drill (réf. T-7740R)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7740r",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7740r-3-8-reversible-4-000-rpm-drill",
    "label": "Référence T-7740R",
    "distinguishingAttributes": {
      "reference": "T-7740R",
      "RPM": "4,000",
      "Chuck Size": "3/8\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7740R 3/8\" Reversible 4,000 RPM Drill (réf. T-7740R). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 4,000.",
      "Chuck Size : 3/8\".",
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
        "october4-tools-taylor-product-114-p1"
      ]
    },
    {
      "label": "Chuck Size",
      "value": "3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-114-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.0",
      "evidenceIds": [
        "october4-tools-taylor-product-114-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "7\"",
      "evidenceIds": [
        "october4-tools-taylor-product-114-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".5",
      "evidenceIds": [
        "october4-tools-taylor-product-114-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-114-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-114-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-114-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7740r",
      "sourceLabel": "Taylor Pneumatic : T-7740R 3/8\" Reversible 4,000 RPM Drill",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 3a7d8498e6d28ce6628ba71755b4984335d877962553d33fae1d253fb8839b51. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-114-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-114-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-114-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
