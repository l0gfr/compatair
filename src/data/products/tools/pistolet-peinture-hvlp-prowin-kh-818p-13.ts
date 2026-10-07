import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-kh-818p-13",
  "slug": "pistolet-peinture-hvlp-prowin-kh-818p-13",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin KH-818P-13",
  "brand": "ProWin",
  "model": "KH-818P-13",
  "mpn": "KH-818P-13",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-kh-818p-13.svg",
    "alt": "Repères techniques : ProWin KH-818P-13",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-kh-818p-13",
    "label": "Référence KH-818P-13",
    "distinguishingAttributes": {
      "reference": "KH-818P-13",
      "Buse": "1.3 mm",
      "Largeur de jet": "295 mm"
    }
  },
  "editorial": {
    "overview": "ProWin KH-818P-13. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.3 mm.",
      "Largeur de jet : 295 mm."
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
      "value": "1.3 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p1"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "295 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p1"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "210 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 20~28 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p1",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=1",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p1"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p1"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p1"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
