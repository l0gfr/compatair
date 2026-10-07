import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-lvlp-prowin-kl-800m-20",
  "slug": "pistolet-peinture-lvlp-prowin-kl-800m-20",
  "categoryId": "pistolet-peinture-lvlp",
  "category": "pistolet-peinture-lvlp",
  "label": "ProWin KL-800M-20",
  "brand": "ProWin",
  "model": "KL-800M-20",
  "mpn": "KL-800M-20",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-lvlp-prowin-kl-800m-20.svg",
    "alt": "Repères techniques : ProWin KL-800M-20",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-kl-800m-20",
    "label": "Référence KL-800M-20",
    "distinguishingAttributes": {
      "reference": "KL-800M-20",
      "Buse": "2.0 mm",
      "Largeur de jet": "320 mm"
    }
  },
  "editorial": {
    "overview": "ProWin KL-800M-20. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 2.0 mm.",
      "Largeur de jet : 320 mm."
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
      "value": "2.0 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p5"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "320 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p5"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "260 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p5"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 20~28 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p5"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p5",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=5",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p5"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p5"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p5"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
