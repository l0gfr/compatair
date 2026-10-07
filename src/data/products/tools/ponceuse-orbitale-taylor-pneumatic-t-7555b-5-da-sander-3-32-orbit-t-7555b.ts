import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-taylor-pneumatic-t-7555b-5-da-sander-3-32-orbit-t-7555b",
  "slug": "ponceuse-orbitale-taylor-pneumatic-t-7555b-5-da-sander-3-32-orbit-t-7555b",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Taylor Pneumatic T-7555B 5\" DA Sander 3/32\" Orbit (réf. T-7555B)",
  "brand": "Taylor Pneumatic",
  "model": "T-7555B 5\" DA Sander 3/32\" Orbit",
  "mpn": "T-7555B",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-taylor-pneumatic-t-7555b-5-da-sander-3-32-orbit-t-7555b.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7555B 5\" DA Sander 3/32\" Orbit (réf. T-7555B)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7555b-5-da-sander-3-32-orbit",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7555b-5-da-sander-3-32-orbit",
    "label": "Référence T-7555B",
    "distinguishingAttributes": {
      "reference": "T-7555B",
      "Free Speed RPM": "10,000",
      "Pad Size inch": "6\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7555B 5\" DA Sander 3/32\" Orbit (réf. T-7555B). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Free Speed RPM : 10,000.",
      "Pad Size inch : 6\".",
      "Weight lbs. : 2.",
      "Orbit DIA. inch : 3/32\".",
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
        "october4-tools-taylor-product-095-p1"
      ]
    },
    {
      "label": "Pad Size inch",
      "value": "6\"",
      "evidenceIds": [
        "october4-tools-taylor-product-095-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2",
      "evidenceIds": [
        "october4-tools-taylor-product-095-p1"
      ]
    },
    {
      "label": "Orbit DIA. inch",
      "value": "3/32\"",
      "evidenceIds": [
        "october4-tools-taylor-product-095-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/16-24",
      "evidenceIds": [
        "october4-tools-taylor-product-095-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-095-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-095-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-095-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7555b-5-da-sander-3-32-orbit",
      "sourceLabel": "Taylor Pneumatic : T-7555B 5\" DA Sander 3/32\" Orbit",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 3ef68bb827d296b02c9d88f2ce0f3b225be4a8410659d429180fded26447cdb5. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-095-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-095-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-095-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
