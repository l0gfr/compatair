import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-taylor-pneumatic-t-7768hrk-sd-1-2-reversible-drill-w-keyless-chuck-t-7768hrk",
  "slug": "perceuse-taylor-pneumatic-t-7768hrk-sd-1-2-reversible-drill-w-keyless-chuck-t-7768hrk",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Taylor Pneumatic T-7768HRK SD 1/2\" Reversible Drill w/Keyless Chuck (réf. T-7768HRK)",
  "brand": "Taylor Pneumatic",
  "model": "T-7768HRK SD 1/2\" Reversible Drill w/Keyless Chuck",
  "mpn": "T-7768HRK",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/perceuse-taylor-pneumatic-t-7768hrk-sd-1-2-reversible-drill-w-keyless-chuck-t-7768hrk.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7768HRK SD 1/2\" Reversible Drill w/Keyless Chuck (réf. T-7768HRK)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7768hrk-sd-1-2-reversible-drill-w-keyless-chuck",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7768hrk-sd-1-2-reversible-drill-w-keyless-chuck",
    "label": "Référence T-7768HRK",
    "distinguishingAttributes": {
      "reference": "T-7768HRK",
      "RPM": "800",
      "Chuck Size": "1/2\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7768HRK SD 1/2\" Reversible Drill w/Keyless Chuck (réf. T-7768HRK). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 800.",
      "Chuck Size : 1/2\".",
      "Weight lbs. : 3.5.",
      "Length in. : 7.5\".",
      "HP : .5.",
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
      "value": "800",
      "evidenceIds": [
        "october4-tools-taylor-product-143-p1"
      ]
    },
    {
      "label": "Chuck Size",
      "value": "1/2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-143-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.5",
      "evidenceIds": [
        "october4-tools-taylor-product-143-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "7.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-143-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".5",
      "evidenceIds": [
        "october4-tools-taylor-product-143-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-143-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-143-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-143-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7768hrk-sd-1-2-reversible-drill-w-keyless-chuck",
      "sourceLabel": "Taylor Pneumatic : T-7768HRK SD 1/2\" Reversible Drill w/Keyless Chuck",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 f322e7c5c69ccf44bb99f57733f225f814e2e6b0a9c0494e0719d93b5bd3da46. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-143-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-143-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-143-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
