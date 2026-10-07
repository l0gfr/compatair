import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-k-887m-35",
  "slug": "pistolet-peinture-hvlp-prowin-k-887m-35",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin K-887M-35",
  "brand": "ProWin",
  "model": "K-887M-35",
  "mpn": "K-887M-35",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-k-887m-35.svg",
    "alt": "Repères techniques : ProWin K-887M-35",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-887m-35",
    "label": "Référence K-887M-35",
    "distinguishingAttributes": {
      "reference": "K-887M-35",
      "Buse": "3.5 mm",
      "Largeur de jet": "340 mm"
    }
  },
  "editorial": {
    "overview": "ProWin K-887M-35. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 3.5 mm.",
      "Largeur de jet : 340 mm."
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
      "value": "340 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p7"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "250 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 20~28 psi",
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
