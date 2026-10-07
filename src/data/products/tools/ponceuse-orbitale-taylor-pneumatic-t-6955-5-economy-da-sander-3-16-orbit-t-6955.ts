import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-taylor-pneumatic-t-6955-5-economy-da-sander-3-16-orbit-t-6955",
  "slug": "ponceuse-orbitale-taylor-pneumatic-t-6955-5-economy-da-sander-3-16-orbit-t-6955",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Taylor Pneumatic T-6955 5\" Economy DA Sander 3/16\" Orbit (réf. T-6955)",
  "brand": "Taylor Pneumatic",
  "model": "T-6955 5\" Economy DA Sander 3/16\" Orbit",
  "mpn": "T-6955",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-taylor-pneumatic-t-6955-5-economy-da-sander-3-16-orbit-t-6955.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6955 5\" Economy DA Sander 3/16\" Orbit (réf. T-6955)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6955-5-economy-da-sander-3-16-orbit-1",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6955-5-economy-da-sander-3-16-orbit",
    "label": "Référence T-6955",
    "distinguishingAttributes": {
      "reference": "T-6955",
      "Free Speed RPM": "11,000",
      "Pad Size inch": "5\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6955 5\" Economy DA Sander 3/16\" Orbit (réf. T-6955). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Free Speed RPM : 11,000.",
      "Pad Size inch : 5\".",
      "Weight lbs. : 1.76.",
      "Orbit DIA. inch : 3/16\".",
      "Spindle Size : 5/16-24.",
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
      "label": "Free Speed RPM",
      "value": "11,000",
      "evidenceIds": [
        "october4-tools-taylor-product-050-p1"
      ]
    },
    {
      "label": "Pad Size inch",
      "value": "5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-050-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.76",
      "evidenceIds": [
        "october4-tools-taylor-product-050-p1"
      ]
    },
    {
      "label": "Orbit DIA. inch",
      "value": "3/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-050-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/16-24",
      "evidenceIds": [
        "october4-tools-taylor-product-050-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-050-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-050-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-050-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6955-5-economy-da-sander-3-16-orbit-1",
      "sourceLabel": "Taylor Pneumatic : T-6955 5\" Economy DA Sander 3/16\" Orbit",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 e3038ac83a1411d8f8e16cfc9d8eae32597f14d67dbbd87799b150f641736424. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-050-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-050-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-050-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
