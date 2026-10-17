import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cle-a-chocs-taylor-pneumatic-t-6231-1-2-hd-impact-wrench-t-6231",
  "slug": "cle-a-chocs-taylor-pneumatic-t-6231-1-2-hd-impact-wrench-t-6231",
  "categoryId": "cle-a-chocs",
  "category": "cle-a-chocs",
  "label": "Taylor Pneumatic T-6231 1/2\" HD Impact Wrench (réf. T-6231)",
  "brand": "Taylor Pneumatic",
  "model": "T-6231 1/2\" HD Impact Wrench",
  "mpn": "T-6231",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/cle-a-chocs-taylor-pneumatic-t-6231-1-2-hd-impact-wrench-t-6231.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6231 1/2\" HD Impact Wrench (réf. T-6231)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6231",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6231-1-2-hd-impact-wrench",
    "label": "Référence T-6231",
    "distinguishingAttributes": {
      "reference": "T-6231",
      "SQ. Drive": "1/2\"",
      "Weight lbs.": "5.625"
    }
  },
  "editorial": {
    "overview": "T-6231 : clé à chocs à carré de 1/2 pouce, longueur publiée de 6,75 pouces et masse de 5,625 lb. Taylor distingue les valeurs 5 pour la consommation moyenne et 19 en charge, mais ne nomme pas leur unité dans le tableau. La T-6231L ajoute une enclume rallongée de 2 pouces et passe à 8,5 pouces de longueur.",
    "verifiedFacts": [
      "SQ. Drive : 1/2\".",
      "Weight lbs. : 5.625.",
      "Length in. : 6.75.",
      "Working Torque : 550.",
      "Max Torque : 650.",
      "Air Pressure : 90 PSI Max."
    ],
    "limitations": [
      "L’unité des colonnes de consommation et leur pression de mesure restent à faire préciser ; aucun passage en L/min n’est effectué.",
      "Les 90 psi sont un plafond de service. Ils ne constituent pas automatiquement le point de mesure des valeurs 5 et 19.",
      "Les couples 550 et 650 sont reproduits sans unité dans la fiche ; ils ne sont pas transformés en N·m."
    ]
  },
  "specifications": [
    {
      "label": "SQ. Drive",
      "value": "1/2\"",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "5.625",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Length in.",
      "value": "6.75",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Working Torque",
      "value": "550",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Max Torque",
      "value": "650",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-028-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-028-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6231",
      "sourceLabel": "Taylor Pneumatic : T-6231 1/2\" HD Impact Wrench",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 6edf5e7fe1836ad60a1334a75bdc2966563eb0cef977c71b760901c2c16a2261. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-taylor-product-029-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6231l-1-2-hd-impact-wrench-w-2-extended-anvil",
      "sourceLabel": "Taylor Pneumatic : T-6231L 1/2\" HD Impact Wrench 2\" Extended Anvil",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 40d9dc1e610aa8e5e232f72496d7fbea72bd9cbaaa0c73453c6843342284afb8. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-028-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-028-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-028-p1"
    ],
    "connectorSize": [
      "october4-tools-taylor-product-028-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ],
  "connectorSize": "1/4 NPT"
};

export default product;
