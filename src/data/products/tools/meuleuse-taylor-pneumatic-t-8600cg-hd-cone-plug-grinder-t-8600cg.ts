import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-8600cg-hd-cone-plug-grinder-t-8600cg",
  "slug": "meuleuse-taylor-pneumatic-t-8600cg-hd-cone-plug-grinder-t-8600cg",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-8600CG HD Cone & Plug Grinder (réf. T-8600CG)",
  "brand": "Taylor Pneumatic",
  "model": "T-8600CG HD Cone & Plug Grinder",
  "mpn": "T-8600CG",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-8600cg-hd-cone-plug-grinder-t-8600cg.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-8600CG HD Cone & Plug Grinder (réf. T-8600CG)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-8600cg-hd-cone-plug-grinder",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-8600cg-hd-cone-plug-grinder",
    "label": "Référence T-8600CG",
    "distinguishingAttributes": {
      "reference": "T-8600CG",
      "RPM": "6,900",
      "Wheel Size": "N/A"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-8600CG HD Cone & Plug Grinder (réf. T-8600CG). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 6,900.",
      "Wheel Size : N/A.",
      "Spindle Size : 5/8-11.",
      "Weight lbs. : 8.",
      "Length : 21\".",
      "HP : 1.4."
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
      "value": "6,900",
      "evidenceIds": [
        "october4-tools-taylor-product-175-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "N/A",
      "evidenceIds": [
        "october4-tools-taylor-product-175-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/8-11",
      "evidenceIds": [
        "october4-tools-taylor-product-175-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "8",
      "evidenceIds": [
        "october4-tools-taylor-product-175-p1"
      ]
    },
    {
      "label": "Length",
      "value": "21\"",
      "evidenceIds": [
        "october4-tools-taylor-product-175-p1"
      ]
    },
    {
      "label": "HP",
      "value": "1.4",
      "evidenceIds": [
        "october4-tools-taylor-product-175-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-175-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-175-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-8600cg-hd-cone-plug-grinder",
      "sourceLabel": "Taylor Pneumatic : T-8600CG HD Cone & Plug Grinder",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 068e79f5284ffc5f7c054ab3b366196c50babb123e9be1ef7eaf12ab9a6a1dbc. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-175-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-175-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-175-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
