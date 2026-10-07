import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-prowin-k-300s-15",
  "slug": "pistolet-peinture-prowin-k-300s-15",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ProWin K-300S-15",
  "brand": "ProWin",
  "model": "K-300S-15",
  "mpn": "K-300S-15",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-prowin-k-300s-15.svg",
    "alt": "Repères techniques : ProWin K-300S-15",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-300s-15",
    "label": "Référence K-300S-15",
    "distinguishingAttributes": {
      "reference": "K-300S-15",
      "Buse": "1.5 mm",
      "Largeur de jet": "315 mm"
    }
  },
  "editorial": {
    "overview": "ProWin K-300S-15. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.5 mm.",
      "Largeur de jet : 315 mm."
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
      "value": "1.5 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p18"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "315 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p18"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "210 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p18"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p18"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p18",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=18",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 18",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p18"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p18"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p18"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
