import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-taylor-pneumatic-t-7311sl-6-da-sander-w-safety-lever-t-7311sl",
  "slug": "ponceuse-orbitale-taylor-pneumatic-t-7311sl-6-da-sander-w-safety-lever-t-7311sl",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Taylor Pneumatic T-7311SL 6\" DA Sander w/Safety Lever (réf. T-7311SL)",
  "brand": "Taylor Pneumatic",
  "model": "T-7311SL 6\" DA Sander w/Safety Lever",
  "mpn": "T-7311SL",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-taylor-pneumatic-t-7311sl-6-da-sander-w-safety-lever-t-7311sl.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7311SL 6\" DA Sander w/Safety Lever (réf. T-7311SL)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7311sl-6-da-sander-w-safety-lever",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7311sl-6-da-sander-w-safety-lever",
    "label": "Référence T-7311SL",
    "distinguishingAttributes": {
      "reference": "T-7311SL",
      "Free Speed RPM": "10,000",
      "Pad Size inch": "6\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7311SL 6\" DA Sander w/Safety Lever (réf. T-7311SL). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Free Speed RPM : 10,000.",
      "Pad Size inch : 6\".",
      "Weight lbs. : 4.25.",
      "Orbit DIA. inch : 3/8\".",
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
      "value": "10,000",
      "evidenceIds": [
        "october4-tools-taylor-product-078-p1"
      ]
    },
    {
      "label": "Pad Size inch",
      "value": "6\"",
      "evidenceIds": [
        "october4-tools-taylor-product-078-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "4.25",
      "evidenceIds": [
        "october4-tools-taylor-product-078-p1"
      ]
    },
    {
      "label": "Orbit DIA. inch",
      "value": "3/8\"",
      "evidenceIds": [
        "october4-tools-taylor-product-078-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/16-24",
      "evidenceIds": [
        "october4-tools-taylor-product-078-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-078-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-078-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-078-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7311sl-6-da-sander-w-safety-lever",
      "sourceLabel": "Taylor Pneumatic : T-7311SL 6\" DA Sander w/Safety Lever",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 ce098ed306d234d48ad004055556bc18616b4302a88aaf887bac0b40144d9e4e. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-078-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-078-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-078-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
