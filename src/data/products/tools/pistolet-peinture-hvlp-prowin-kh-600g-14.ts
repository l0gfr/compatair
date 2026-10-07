import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-kh-600g-14",
  "slug": "pistolet-peinture-hvlp-prowin-kh-600g-14",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin KH-600G-14",
  "brand": "ProWin",
  "model": "KH-600G-14",
  "mpn": "KH-600G-14",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-kh-600g-14.svg",
    "alt": "Repères techniques : ProWin KH-600G-14",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-kh-600g-14",
    "label": "Référence KH-600G-14",
    "distinguishingAttributes": {
      "reference": "KH-600G-14",
      "Buse": "1.4 mm",
      "Largeur de jet": "300 mm"
    }
  },
  "editorial": {
    "overview": "ProWin KH-600G-14. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.4 mm.",
      "Largeur de jet : 300 mm."
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
      "value": "1.4 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p21"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "300 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p21"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "280 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p21"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 20~28 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p21"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p21",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=21",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 21",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p21"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p21"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p21"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
