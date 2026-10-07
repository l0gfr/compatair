import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "marteau-a-river-taylor-pneumatic-t-1xs-401-jiffy-style-shank-rivet-hammer-2850-bpm-t-1xs",
  "slug": "marteau-a-river-taylor-pneumatic-t-1xs-401-jiffy-style-shank-rivet-hammer-2850-bpm-t-1xs",
  "categoryId": "marteau-a-river",
  "category": "marteau-a-river",
  "label": "Taylor Pneumatic T-1XS .401(Jiffy Style) Shank Rivet Hammer 2850 Bpm (réf. T-1XS)",
  "brand": "Taylor Pneumatic",
  "model": "T-1XS .401(Jiffy Style) Shank Rivet Hammer 2850 Bpm",
  "mpn": "T-1XS",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/marteau-a-river-taylor-pneumatic-t-1xs-401-jiffy-style-shank-rivet-hammer-2850-bpm-t-1xs.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-1XS .401(Jiffy Style) Shank Rivet Hammer 2850 Bpm (réf. T-1XS)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-1xs-401jiffy-style-shank-rivet-hammer-2850-bpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-1xs-401-jiffy-style-shank-rivet-hammer-2850-bpm",
    "label": "Référence T-1XS",
    "distinguishingAttributes": {
      "reference": "T-1XS",
      "Shank Diameter": ".401(Jiffy Style)",
      "Bore & Stroke": "9/16\" x 1-7/8\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-1XS .401(Jiffy Style) Shank Rivet Hammer 2850 Bpm (réf. T-1XS). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Shank Diameter : .401(Jiffy Style).",
      "Bore & Stroke : 9/16\" x 1-7/8\".",
      "Blows per Minute : 2850.",
      "Aluminum Rivet Capacity : 1/8\".",
      "Length : 4\".",
      "Weight : 2-1/8 lbs.."
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
      "label": "Shank Diameter",
      "value": ".401(Jiffy Style)",
      "evidenceIds": [
        "october4-tools-taylor-product-005-p1"
      ]
    },
    {
      "label": "Bore & Stroke",
      "value": "9/16\" x 1-7/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-005-p1"
      ]
    },
    {
      "label": "Blows per Minute",
      "value": "2850",
      "evidenceIds": [
        "october4-tools-taylor-product-005-p1"
      ]
    },
    {
      "label": "Aluminum Rivet Capacity",
      "value": "1/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-005-p1"
      ]
    },
    {
      "label": "Length",
      "value": "4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-005-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "2-1/8 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-005-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-005-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-005-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-1xs-401jiffy-style-shank-rivet-hammer-2850-bpm",
      "sourceLabel": "Taylor Pneumatic : T-1XS .401(Jiffy Style) Shank Rivet Hammer 2850 Bpm",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 aafcc14c9c37919f347c66f1eb2ba24da26b701a5941a7974e89f7b7a1754a6b. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-005-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-005-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-005-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
