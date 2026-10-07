import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-classic-lux-40-buse-1-80-20141402",
  "slug": "pistolet-peinture-sagola-classic-lux-40-buse-1-80-20141402",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola CLASSIC LUX 40 buse 1.80 (réf. 20141402)",
  "brand": "Sagola",
  "model": "CLASSIC LUX 40 buse 1.80",
  "mpn": "20141402",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.5,
    "max": 2.5
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-classic-lux-40-buse-1-80-20141402.svg",
    "alt": "Repères techniques : Sagola CLASSIC LUX 40 buse 1.80 (réf. 20141402)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-classic-lux-40-buse-1-80",
    "label": "Référence 20141402",
    "distinguishingAttributes": {
      "reference": "20141402",
      "Buse": "1.80 mm",
      "Chapeau d’air": "40"
    }
  },
  "editorial": {
    "overview": "Sagola CLASSIC LUX 40 buse 1.80 (réf. 20141402). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.80 mm.",
      "Chapeau d’air : 40."
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
      "value": "1.80 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p59"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "40",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p59"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "190 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p59"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p59"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p59",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=59",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 59",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p59"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p59"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p59"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
