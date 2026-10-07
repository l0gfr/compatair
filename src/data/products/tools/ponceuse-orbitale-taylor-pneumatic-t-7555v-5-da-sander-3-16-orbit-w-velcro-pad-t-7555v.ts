import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-taylor-pneumatic-t-7555v-5-da-sander-3-16-orbit-w-velcro-pad-t-7555v",
  "slug": "ponceuse-orbitale-taylor-pneumatic-t-7555v-5-da-sander-3-16-orbit-w-velcro-pad-t-7555v",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Taylor Pneumatic T-7555V 5\" DA Sander 3/16\" Orbit w/Velcro Pad (réf. T-7555V)",
  "brand": "Taylor Pneumatic",
  "model": "T-7555V 5\" DA Sander 3/16\" Orbit w/Velcro Pad",
  "mpn": "T-7555V",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-taylor-pneumatic-t-7555v-5-da-sander-3-16-orbit-w-velcro-pad-t-7555v.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7555V 5\" DA Sander 3/16\" Orbit w/Velcro Pad (réf. T-7555V)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7555v-5-da-sander-3-16-orbit-w-velcro-pad",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7555v-5-da-sander-3-16-orbit-w-velcro-pad",
    "label": "Référence T-7555V",
    "distinguishingAttributes": {
      "reference": "T-7555V",
      "Free Speed RPM": "10,000",
      "Pad Size inch": "5\" Velcro"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7555V 5\" DA Sander 3/16\" Orbit w/Velcro Pad (réf. T-7555V). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Free Speed RPM : 10,000.",
      "Pad Size inch : 5\" Velcro.",
      "Weight lbs. : 2.",
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
      "value": "10,000",
      "evidenceIds": [
        "october4-tools-taylor-product-096-p1"
      ]
    },
    {
      "label": "Pad Size inch",
      "value": "5\" Velcro",
      "evidenceIds": [
        "october4-tools-taylor-product-096-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2",
      "evidenceIds": [
        "october4-tools-taylor-product-096-p1"
      ]
    },
    {
      "label": "Orbit DIA. inch",
      "value": "3/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-096-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/16-24",
      "evidenceIds": [
        "october4-tools-taylor-product-096-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-096-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-096-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-096-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7555v-5-da-sander-3-16-orbit-w-velcro-pad",
      "sourceLabel": "Taylor Pneumatic : T-7555V 5\" DA Sander 3/16\" Orbit w/Velcro Pad",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 cb334e3de623651c572f9e81758fef81db74321b74f8065dc913608b8c361f6f. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-096-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-096-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-096-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
