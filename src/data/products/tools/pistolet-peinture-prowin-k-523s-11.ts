import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-prowin-k-523s-11",
  "slug": "pistolet-peinture-prowin-k-523s-11",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ProWin K-523S-11",
  "brand": "ProWin",
  "model": "K-523S-11",
  "mpn": "K-523S-11",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2.068427,
    "max": 3.102641
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-prowin-k-523s-11.svg",
    "alt": "Repères techniques : ProWin K-523S-11",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-523s-11",
    "label": "Référence K-523S-11",
    "distinguishingAttributes": {
      "reference": "K-523S-11",
      "Buse": "1.1 mm",
      "Largeur de jet": "240 mm"
    }
  },
  "editorial": {
    "overview": "ProWin K-523S-11. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.1 mm.",
      "Largeur de jet : 240 mm."
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
      "value": "1.1 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p19"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "240 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p19"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "190 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p19"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 30~45 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p19"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p19",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=19",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 19",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p19"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p19"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p19"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
