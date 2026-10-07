import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-8779rc-1-4-pistol-grip-die-grinder-t-8779rc",
  "slug": "meuleuse-taylor-pneumatic-t-8779rc-1-4-pistol-grip-die-grinder-t-8779rc",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-8779RC 1/4\" Pistol Grip Die Grinder (réf. T-8779RC)",
  "brand": "Taylor Pneumatic",
  "model": "T-8779RC 1/4\" Pistol Grip Die Grinder",
  "mpn": "T-8779RC",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-8779rc-1-4-pistol-grip-die-grinder-t-8779rc.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-8779RC 1/4\" Pistol Grip Die Grinder (réf. T-8779RC)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-8779rc-1-4-pistol-grip-die-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-8779rc-1-4-pistol-grip-die-grinder",
    "label": "Référence T-8779RC",
    "distinguishingAttributes": {
      "reference": "T-8779RC",
      "RPM": "17,000",
      "Collet": "1/4\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-8779RC 1/4\" Pistol Grip Die Grinder (réf. T-8779RC). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 17,000.",
      "Collet : 1/4\".",
      "Length in. : 5.75\".",
      "Weight lbs. : 1.05 lbs..",
      "Horsepower : .35 HP.",
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
      "value": "17,000",
      "evidenceIds": [
        "october4-tools-taylor-product-182-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/4\"",
      "evidenceIds": [
        "october4-tools-taylor-product-182-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "5.75\"",
      "evidenceIds": [
        "october4-tools-taylor-product-182-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "1.05 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-182-p1"
      ]
    },
    {
      "label": "Horsepower",
      "value": ".35 HP",
      "evidenceIds": [
        "october4-tools-taylor-product-182-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-182-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-182-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-182-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-8779rc-1-4-pistol-grip-die-grinder",
      "sourceLabel": "Taylor Pneumatic : T-8779RC 1/4\" Pistol Grip Die Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 c3338749f536b15bb07750f3ec21e9de80f73c39ee8df5add6cab6083e994031. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-182-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-182-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-182-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
