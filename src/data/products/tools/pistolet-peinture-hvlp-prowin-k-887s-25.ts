import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-k-887s-25",
  "slug": "pistolet-peinture-hvlp-prowin-k-887s-25",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin K-887S-25",
  "brand": "ProWin",
  "model": "K-887S-25",
  "mpn": "K-887S-25",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-k-887s-25.svg",
    "alt": "Repères techniques : ProWin K-887S-25",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-887s-25",
    "label": "Référence K-887S-25",
    "distinguishingAttributes": {
      "reference": "K-887S-25",
      "Buse": "2.5 mm",
      "Largeur de jet": "330 mm"
    }
  },
  "editorial": {
    "overview": "ProWin K-887S-25. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 2.5 mm.",
      "Largeur de jet : 330 mm."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "La table publie une consommation, sans pression de mesure précise ni protocole de pulvérisation lié à cette valeur.",
      "Les codes SG de la colonne Turn-up Kit sont des kits de réparation et ne constituent pas des références de pistolets.",
      "Fluid Output est libellé « ml » ; aucune durée ne permet de le publier comme un débit.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "2.5 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p8"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "330 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p8"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "260 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p8"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p8"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p8",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=8",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 8",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p8"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p8"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p8"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
