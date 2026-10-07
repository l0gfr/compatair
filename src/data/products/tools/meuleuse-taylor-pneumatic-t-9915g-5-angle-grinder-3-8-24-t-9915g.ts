import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-9915g-5-angle-grinder-3-8-24-t-9915g",
  "slug": "meuleuse-taylor-pneumatic-t-9915g-5-angle-grinder-3-8-24-t-9915g",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-9915G 5\" Angle Grinder 3/8\"-24 (réf. T-9915G)",
  "brand": "Taylor Pneumatic",
  "model": "T-9915G 5\" Angle Grinder 3/8\"-24",
  "mpn": "T-9915G",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-9915g-5-angle-grinder-3-8-24-t-9915g.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-9915G 5\" Angle Grinder 3/8\"-24 (réf. T-9915G)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-9915g-5-angle-grinder-3-8-24",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-9915g-5-angle-grinder-3-8-24",
    "label": "Référence T-9915G",
    "distinguishingAttributes": {
      "reference": "T-9915G",
      "RPM": "11,000",
      "Wheel Size": "5\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-9915G 5\" Angle Grinder 3/8\"-24 (réf. T-9915G). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 11,000.",
      "Wheel Size : 5\".",
      "Spindle Size : 3/8\"-24.",
      "Weight lbs. : 3.2.",
      "Length : 9.5\".",
      "HP : 1.3."
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
      "value": "11,000",
      "evidenceIds": [
        "october4-tools-taylor-product-214-p1"
      ]
    },
    {
      "label": "Wheel Size",
      "value": "5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-214-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "3/8\"-24",
      "evidenceIds": [
        "october4-tools-taylor-product-214-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.2",
      "evidenceIds": [
        "october4-tools-taylor-product-214-p1"
      ]
    },
    {
      "label": "Length",
      "value": "9.5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-214-p1"
      ]
    },
    {
      "label": "HP",
      "value": "1.3",
      "evidenceIds": [
        "october4-tools-taylor-product-214-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-214-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-214-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-9915g-5-angle-grinder-3-8-24",
      "sourceLabel": "Taylor Pneumatic : T-9915G 5\" Angle Grinder 3/8\"-24",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 e00e7901078d16be4732e0d1be34b3ccba4585e989f7d30b482ee62b6eff36a7. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-214-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-214-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-214-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
