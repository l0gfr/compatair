import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-k-528g-12",
  "slug": "pistolet-peinture-hvlp-prowin-k-528g-12",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin K-528G-12",
  "brand": "ProWin",
  "model": "K-528G-12",
  "mpn": "K-528G-12",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-k-528g-12.svg",
    "alt": "Repères techniques : ProWin K-528G-12",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-528g-12",
    "label": "Référence K-528G-12",
    "distinguishingAttributes": {
      "reference": "K-528G-12",
      "Buse": "1.2 mm",
      "Largeur de jet": "300 mm"
    }
  },
  "editorial": {
    "overview": "K-528G-12 : buse de 1,2 mm, jet de 300 mm et godet de 600 ml. La ligne K-528G-10 porte une buse de 1,0 mm et un jet de 290 mm, avec les mêmes 250 L/min déclarés. Le changement de buse porte sur l’application, sans économie d’air démontrée.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Largeur de jet : 300 mm."
    ],
    "limitations": [
      "La plage de 20 à 28 psi n’associe pas un débit d’air mesuré à chaque pression.",
      "Le tableau donne Fluid Output en ml, sans durée : les 110 ml ne sont pas transformés en ml/min. Le code SG018 est un kit de buse."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.2 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "300 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "250 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 20~28 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p16",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=16",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 16",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p16"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p16"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p16"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
