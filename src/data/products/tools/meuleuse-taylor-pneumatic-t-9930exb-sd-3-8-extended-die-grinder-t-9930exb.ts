import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9930exb-sd-3-8-extended-die-grinder-t-9930exb",
  "slug": "meuleuse-taylor-pneumatic-t-9930exb-sd-3-8-extended-die-grinder-t-9930exb",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9930EXB SD 3/8\" Extended Die Grinder (réf. T-9930EXB)",
  "brand": "Taylor Pneumatic",
  "model": "T-9930EXB SD 3/8\" Extended Die Grinder",
  "mpn": "T-9930EXB",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9930exb-sd-3-8-extended-die-grinder-t-9930exb.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9930EXB SD 3/8\" Extended Die Grinder (réf. T-9930EXB)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9930exb-sd-3-8-extended-die-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9930exb-sd-3-8-extended-die-grinder",
    "label": "Référence T-9930EXB",
    "distinguishingAttributes": {
      "reference": "T-9930EXB",
      "RPM": "22,000",
      "Collet": "3/8\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9930EXB SD 3/8\" Extended Die Grinder (réf. T-9930EXB). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 22,000.",
      "Collet : 3/8\".",
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
        "october4-tools-taylor-product-220-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-220-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "12.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-220-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.65 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-220-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": "1 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-220-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-220-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-220-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-220-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9930exb-sd-3-8-extended-die-grinder",
      "sourceLabel": "Taylor Pneumatic : T-9930EXB SD 3/8\" Extended Die Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 7f858635af08b0a84e4621f2023e76c20883073dd84a02fe0dc00f23a2596ed4. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-220-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-220-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-220-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
