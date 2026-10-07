import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-9951-45-aircraft-drill-t-9951",
  "slug": "perceuse-taylor-pneumatic-t-9951-45-aircraft-drill-t-9951",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-9951 45° Aircraft Drill (réf. T-9951)",
  "brand": "Taylor Pneumatic",
  "model": "T-9951 45° Aircraft Drill",
  "mpn": "T-9951",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-9951-45-aircraft-drill-t-9951.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9951 45° Aircraft Drill (réf. T-9951)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9951-45-aircraft-drill",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9951-45-aircraft-drill",
    "label": "Référence T-9951",
    "distinguishingAttributes": {
      "reference": "T-9951",
      "RPM": "2,800",
      "Thread Size in.": "1/4-28"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9951 45° Aircraft Drill (réf. T-9951). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 2,800.",
      "Thread Size in. : 1/4-28.",
      "Weight lbs. : 1.6.",
      "Length in. : 10\".",
      "Horsepower : .33.",
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
      "value": "2,800",
      "evidenceIds": [
        "october4-tools-taylor-product-230-p1"
      ]
    },
    {
      "label": "Thread Size in.",
      "value": "1/4-28",
      "evidenceIds": [
        "october4-tools-taylor-product-230-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.6",
      "evidenceIds": [
        "october4-tools-taylor-product-230-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "10\"",
      "evidenceIds": [
        "october4-tools-taylor-product-230-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".33",
      "evidenceIds": [
        "october4-tools-taylor-product-230-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-230-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-230-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-230-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9951-45-aircraft-drill",
      "sourceLabel": "Taylor Pneumatic : T-9951 45° Aircraft Drill",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 6b91907c86918cd625519717160eaad23f48c41fc80757c91d9a7fc9c71bff71. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-230-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-230-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-230-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
