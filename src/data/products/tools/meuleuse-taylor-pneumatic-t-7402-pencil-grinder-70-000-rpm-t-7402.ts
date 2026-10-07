import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-taylor-pneumatic-t-7402-pencil-grinder-70-000-rpm-t-7402",
  "slug": "meuleuse-taylor-pneumatic-t-7402-pencil-grinder-70-000-rpm-t-7402",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Taylor Pneumatic T-7402 Pencil Grinder 70,000 RPM (réf. T-7402)",
  "brand": "Taylor Pneumatic",
  "model": "T-7402 Pencil Grinder 70,000 RPM",
  "mpn": "T-7402",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/meuleuse-taylor-pneumatic-t-7402-pencil-grinder-70-000-rpm-t-7402.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7402 Pencil Grinder 70,000 RPM (réf. T-7402)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7402-pencil-grinder-70-000-rpm",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7402-pencil-grinder-70-000-rpm",
    "label": "Référence T-7402",
    "distinguishingAttributes": {
      "reference": "T-7402",
      "RPM": "70,000",
      "Collet": "1/8\"*"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7402 Pencil Grinder 70,000 RPM (réf. T-7402). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 70,000.",
      "Collet : 1/8\"*.",
      "Length in. : 5.5.",
      "Weight lbs. : .5.",
      "Throttle : Twist.",
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
      "value": "70,000",
      "evidenceIds": [
        "october4-tools-taylor-product-087-p1"
      ]
    },
    {
      "label": "Collet",
      "value": "1/8\"*",
      "evidenceIds": [
        "october4-tools-taylor-product-087-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "5.5",
      "evidenceIds": [
        "october4-tools-taylor-product-087-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": ".5",
      "evidenceIds": [
        "october4-tools-taylor-product-087-p1"
      ]
    },
    {
      "label": "Throttle",
      "value": "Twist",
      "evidenceIds": [
        "october4-tools-taylor-product-087-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-087-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-087-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-087-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7402-pencil-grinder-70-000-rpm",
      "sourceLabel": "Taylor Pneumatic : T-7402 Pencil Grinder 70,000 RPM",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 9b0ef296ccb388b92e8385889cd94d78f327741e43af9be90558e7d811fbaf20. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-087-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-087-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-087-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
