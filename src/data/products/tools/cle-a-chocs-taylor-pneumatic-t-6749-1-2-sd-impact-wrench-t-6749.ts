import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-6749-1-2-sd-impact-wrench-t-6749",
  "slug": "cle-a-chocs-taylor-pneumatic-t-6749-1-2-sd-impact-wrench-t-6749",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-6749 1/2\" SD Impact Wrench (réf. T-6749)",
  "brand": "Taylor Pneumatic",
  "model": "T-6749 1/2\" SD Impact Wrench",
  "mpn": "T-6749",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-6749-1-2-sd-impact-wrench-t-6749.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6749 1/2\" SD Impact Wrench (réf. T-6749)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6749",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6749-1-2-sd-impact-wrench",
    "label": "Référence T-6749",
    "distinguishingAttributes": {
      "reference": "T-6749",
      "SQ. Drive": "1/2\"",
      "Weight lbs.": "3.7"
    }
  },
  "editorial": {
    "overview": "T-6749 : clé à chocs 1/2 pouce, masse de 3,7 lb et longueur de 6,5 pouces. La T-7749 voisine est annoncée à 5,8 lb pour la même longueur. La fiche du T-6749 distingue 4 en moyenne et 17 en charge, mais n’imprime pas leur unité d’air.",
    "verifiedFacts": [
      "SQ. Drive : 1/2\".",
      "Weight lbs. : 3.7.",
      "Length in. : 6.5.",
      "Working Torque : 400.",
      "Max Torque : 500.",
      "Air Pressure : 90 PSI Max."
    ],
    "limitations": [
      "Ni ces nombres ni le plafond de 90 psi ne fournissent un besoin d’air calculable. Les couples 400 et 500 sans unité ne sont pas présentés en Nm.",
      "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
      "Les colonnes Average Air Cons. et Air Cons. @ Load sont distinguées dans la fiche, mais l’unité et le point de pression de mesure ne sont pas explicités.",
      "Air Pressure 90 PSI Max est un plafond de service ; il ne devient pas une pression de mesure par déduction.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "SQ. Drive",
      "value": "1/2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-035-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "3.7",
      "evidenceIds": [
        "october4-tools-taylor-product-035-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6.5",
      "evidenceIds": [
        "october4-tools-taylor-product-035-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "400",
      "evidenceIds": [
        "october4-tools-taylor-product-035-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "500",
      "evidenceIds": [
        "october4-tools-taylor-product-035-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-035-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-035-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-035-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6749",
      "sourceLabel": "Taylor Pneumatic : T-6749 1/2\" SD Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 0ed237deea2933ef8189be4c20febf929633f3da7002c693b3f2e638725ff610. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-taylor-product-122-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7749",
      "sourceLabel": "Taylor Pneumatic : T-7749 1/2\" SD Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 73f519f0e2ae0d5e38307136bd57041b038e12cb0b56763d589355ce797dcc8d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-035-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-035-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-035-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
