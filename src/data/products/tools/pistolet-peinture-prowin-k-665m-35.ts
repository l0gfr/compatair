import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-prowin-k-665m-35",
  "slug": "pistolet-peinture-prowin-k-665m-35",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ProWin K-665M-35",
  "brand": "ProWin",
  "model": "K-665M-35",
  "mpn": "K-665M-35",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2.068427,
    "max": 3.102641
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-prowin-k-665m-35.svg",
    "alt": "Repères techniques : ProWin K-665M-35",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-665m-35",
    "label": "Référence K-665M-35",
    "distinguishingAttributes": {
      "reference": "K-665M-35",
      "Buse": "3.5 mm",
      "Largeur de jet": "280 mm"
    }
  },
  "editorial": {
    "overview": "ProWin K-665M-35. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 3.5 mm.",
      "Largeur de jet : 280 mm."
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
      "value": "3.5 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p7"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "280 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p7"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "190 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 30~45 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p7",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=7",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p7"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p7"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p7"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
