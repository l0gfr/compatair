import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-taylor-pneumatic-t-7763sh-1-4-straight-handle-screwdriver-1800-rpm-t-7763sh",
  "slug": "visseuse-taylor-pneumatic-t-7763sh-1-4-straight-handle-screwdriver-1800-rpm-t-7763sh",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Taylor Pneumatic T-7763SH 1/4\" Straight Handle Screwdriver 1800 RPM (réf. T-7763SH)",
  "brand": "Taylor Pneumatic",
  "model": "T-7763SH 1/4\" Straight Handle Screwdriver 1800 RPM",
  "mpn": "T-7763SH",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/visseuse-taylor-pneumatic-t-7763sh-1-4-straight-handle-screwdriver-1800-rpm-t-7763sh.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7763SH 1/4\" Straight Handle Screwdriver 1800 RPM (réf. T-7763SH)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7763sh-1-4-straight-handle-screwdriver",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7763sh-1-4-straight-handle-screwdriver-1800-rpm",
    "label": "Référence T-7763SH",
    "distinguishingAttributes": {
      "reference": "T-7763SH",
      "RPM": "1800",
      "Hex Drive": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7763SH 1/4\" Straight Handle Screwdriver 1800 RPM (réf. T-7763SH). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 1800.",
      "Hex Drive : 1/4\".",
      "Clutch Type : Internally Adjustable.",
      "Length in. : 10.75\".",
      "Weight lbs. : 2.6.",
      "Torque Range in.lbs. : 45-145."
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
      "value": "1800",
      "evidenceIds": [
        "october4-tools-taylor-product-137-p1"
      ]
    },
    {
      "label": "Hex Drive",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-137-p1"
      ]
    },
    {
      "label": "Clutch Type",
      "value": "Internally Adjustable",
      "evidenceIds": [
        "october4-tools-taylor-product-137-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "10.75\"",
      "evidenceIds": [
        "october4-tools-taylor-product-137-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.6",
      "evidenceIds": [
        "october4-tools-taylor-product-137-p1"
      ]
    },
    {
      "label": "Torque Range in.lbs.",
      "value": "45-145",
      "evidenceIds": [
        "october4-tools-taylor-product-137-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-137-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-137-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7763sh-1-4-straight-handle-screwdriver",
      "sourceLabel": "Taylor Pneumatic : T-7763SH 1/4\" Straight Handle Screwdriver 1800 RPM",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 cb387b863ebed0082438a592e80ddcbd72cd287c190eff3e5f18d00466306552. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-137-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-137-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-137-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
