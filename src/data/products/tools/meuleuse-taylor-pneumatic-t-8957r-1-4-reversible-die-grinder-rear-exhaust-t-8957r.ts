import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-8957r-1-4-reversible-die-grinder-rear-exhaust-t-8957r",
  "slug": "meuleuse-taylor-pneumatic-t-8957r-1-4-reversible-die-grinder-rear-exhaust-t-8957r",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-8957R 1/4\" Reversible Die Grinder - Rear Exhaust (réf. T-8957R)",
  "brand": "Taylor Pneumatic",
  "model": "T-8957R 1/4\" Reversible Die Grinder - Rear Exhaust",
  "mpn": "T-8957R",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-8957r-1-4-reversible-die-grinder-rear-exhaust-t-8957r.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-8957R 1/4\" Reversible Die Grinder - Rear Exhaust (réf. T-8957R)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-8957r-1-4-reversible-die-grinder-rear-exhaust",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-8957r-1-4-reversible-die-grinder-rear-exhaust",
    "label": "Référence T-8957R",
    "distinguishingAttributes": {
      "reference": "T-8957R",
      "RPM": "22,000",
      "Collet": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-8957R 1/4\" Reversible Die Grinder - Rear Exhaust (réf. T-8957R). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 22,000.",
      "Collet : 1/4\".",
      "Length in. : 7.25\".",
      "Weight lbs. : 1.6 lbs..",
      "Horsepower : .9 HP.",
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
      "value": "22,000",
      "evidenceIds": [
        "october4-tools-taylor-product-193-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-193-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "7.25\"",
      "evidenceIds": [
        "october4-tools-taylor-product-193-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.6 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-193-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".9 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-193-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-193-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-193-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-193-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-8957r-1-4-reversible-die-grinder-rear-exhaust",
      "sourceLabel": "Taylor Pneumatic : T-8957R 1/4\" Reversible Die Grinder - Rear Exhaust",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 8978c30fcf3479fa35bafea6167972f6d0752a8e71a98af4ccd0917f69137009. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-193-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-193-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-193-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
