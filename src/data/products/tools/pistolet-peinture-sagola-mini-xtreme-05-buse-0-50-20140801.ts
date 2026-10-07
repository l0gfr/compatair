import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-mini-xtreme-05-buse-0-50-20140801",
  "slug": "pistolet-peinture-sagola-mini-xtreme-05-buse-0-50-20140801",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola MINI XTREME 05 buse 0.50 (réf. 20140801)",
  "brand": "Sagola",
  "model": "MINI XTREME 05 buse 0.50",
  "mpn": "20140801",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.5,
    "max": 2
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-mini-xtreme-05-buse-0-50-20140801.svg",
    "alt": "Repères techniques : Sagola MINI XTREME 05 buse 0.50 (réf. 20140801)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-mini-xtreme-05-buse-0-50",
    "label": "Référence 20140801",
    "distinguishingAttributes": {
      "reference": "20140801",
      "Buse": "0.50 mm",
      "Chapeau d’air": "05"
    }
  },
  "editorial": {
    "overview": "Sagola MINI XTREME 05 buse 0.50 (réf. 20140801). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 0.50 mm.",
      "Chapeau d’air : 05."
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
      "value": "0.50 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p45"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "05",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p45"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "100 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p45"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p45"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p45",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=45",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 45",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p45"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p45"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p45"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
