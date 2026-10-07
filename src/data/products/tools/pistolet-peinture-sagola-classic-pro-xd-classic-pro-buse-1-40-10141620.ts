import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-classic-pro-xd-classic-pro-buse-1-40-10141620",
  "slug": "pistolet-peinture-sagola-classic-pro-xd-classic-pro-buse-1-40-10141620",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola CLASSIC PRO XD CLASSIC PRO buse 1.40 (réf. 10141620)",
  "brand": "Sagola",
  "model": "CLASSIC PRO XD CLASSIC PRO buse 1.40",
  "mpn": "10141620",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.5,
    "max": 2
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-classic-pro-xd-classic-pro-buse-1-40-10141620.svg",
    "alt": "Repères techniques : Sagola CLASSIC PRO XD CLASSIC PRO buse 1.40 (réf. 10141620)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-classic-pro-xd-classic-pro-buse-1-40",
    "label": "Référence 10141620",
    "distinguishingAttributes": {
      "reference": "10141620",
      "Buse": "1.40 mm",
      "Chapeau d’air": "CLASSIC PRO"
    }
  },
  "editorial": {
    "overview": "Sagola CLASSIC PRO XD CLASSIC PRO buse 1.40 (réf. 10141620). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.40 mm.",
      "Chapeau d’air : CLASSIC PRO."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "Débit publié au point de pression indiqué ; le protocole et le réglage de pulvérisation restent insuffisants pour l’intégrer au calcul.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.40 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p55"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "CLASSIC PRO",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p55"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "225 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p55"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p55"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p55",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=55",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 55",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p55"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p55"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p55"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
