import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9930xlb-23-5-long-shd-3-8-die-grinder-t-9930xlb",
  "slug": "meuleuse-taylor-pneumatic-t-9930xlb-23-5-long-shd-3-8-die-grinder-t-9930xlb",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9930XLB 23.5\" Long SHD 3/8\" Die Grinder (réf. T-9930XLB)",
  "brand": "Taylor Pneumatic",
  "model": "T-9930XLB 23.5\" Long SHD 3/8\" Die Grinder",
  "mpn": "T-9930XLB",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9930xlb-23-5-long-shd-3-8-die-grinder-t-9930xlb.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9930XLB 23.5\" Long SHD 3/8\" Die Grinder (réf. T-9930XLB)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9930xlb-23-5-long-shd-3-8-die-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9930xlb-23-5-long-shd-3-8-die-grinder",
    "label": "Référence T-9930XLB",
    "distinguishingAttributes": {
      "reference": "T-9930XLB",
      "RPM": "20,000",
      "Collet": "3/8\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9930XLB 23.5\" Long SHD 3/8\" Die Grinder (réf. T-9930XLB). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 20,000.",
      "Collet : 3/8\".",
      "Length in. : 23.5\".",
      "Weight lbs. : 6.4 lbs..",
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
      "value": "20,000",
      "evidenceIds": [
        "october4-tools-taylor-product-222-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-222-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "23.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-222-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "6.4 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-222-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": "1 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-222-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-222-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-222-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-222-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9930xlb-23-5-long-shd-3-8-die-grinder",
      "sourceLabel": "Taylor Pneumatic : T-9930XLB 23.5\" Long SHD 3/8\" Die Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 c3d78d1b794fb775cd6c29927027b1acb13272e2ea7d0f29a187138d57c0692d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-222-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-222-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-222-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
