import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9930exa-sd-1-4-extended-die-grinder-t-9930exa",
  "slug": "meuleuse-taylor-pneumatic-t-9930exa-sd-1-4-extended-die-grinder-t-9930exa",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9930EXA SD 1/4\" Extended Die Grinder (réf. T-9930EXA)",
  "brand": "Taylor Pneumatic",
  "model": "T-9930EXA SD 1/4\" Extended Die Grinder",
  "mpn": "T-9930EXA",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9930exa-sd-1-4-extended-die-grinder-t-9930exa.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9930EXA SD 1/4\" Extended Die Grinder (réf. T-9930EXA)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9930exa-sd-1-4-extended-die-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9930exa-sd-1-4-extended-die-grinder",
    "label": "Référence T-9930EXA",
    "distinguishingAttributes": {
      "reference": "T-9930EXA",
      "RPM": "22,000",
      "Collet": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9930EXA SD 1/4\" Extended Die Grinder (réf. T-9930EXA). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 22,000.",
      "Collet : 1/4\".",
      "Length in. : 12.5\".",
      "Weight lbs. : 3.65 lbs..",
      "Horsepower : 1 HP.",
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
        "october4-tools-taylor-product-219-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-219-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "12.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-219-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.65 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-219-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": "1 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-219-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-219-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-219-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-219-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9930exa-sd-1-4-extended-die-grinder",
      "sourceLabel": "Taylor Pneumatic : T-9930EXA SD 1/4\" Extended Die Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 791d01ce8c0ccaea423b9ca15210d124733640e89336586ac00e5bb8afa5d00d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-219-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-219-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-219-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
