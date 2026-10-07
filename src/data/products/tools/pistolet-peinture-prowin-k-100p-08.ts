import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-prowin-k-100p-08",
  "slug": "pistolet-peinture-prowin-k-100p-08",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ProWin K-100P-08",
  "brand": "ProWin",
  "model": "K-100P-08",
  "mpn": "K-100P-08",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2.068427,
    "max": 3.102641
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-prowin-k-100p-08.svg",
    "alt": "Repères techniques : ProWin K-100P-08",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-100p-08",
    "label": "Référence K-100P-08",
    "distinguishingAttributes": {
      "reference": "K-100P-08",
      "Buse": "0.8 mm",
      "Largeur de jet": "270 mm"
    }
  },
  "editorial": {
    "overview": "ProWin K-100P-08. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 0.8 mm.",
      "Largeur de jet : 270 mm."
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
      "value": "0.8 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p22"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "270 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p22"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "220 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p22"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 30~45 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p22"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p22",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=22",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 22",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p22"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p22"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p22"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
