import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-3300-gto-64s-buse-2-20-10141572",
  "slug": "pistolet-peinture-sagola-3300-gto-64s-buse-2-20-10141572",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola 3300 GTO 64S buse 2.20 (réf. 10141572)",
  "brand": "Sagola",
  "model": "3300 GTO 64S buse 2.20",
  "mpn": "10141572",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2,
    "max": 2.5
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-3300-gto-64s-buse-2-20-10141572.svg",
    "alt": "Repères techniques : Sagola 3300 GTO 64S buse 2.20 (réf. 10141572)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-3300-gto-64s-buse-2-20",
    "label": "Référence 10141572",
    "distinguishingAttributes": {
      "reference": "10141572",
      "Buse": "2.20 mm",
      "Chapeau d’air": "64S"
    }
  },
  "editorial": {
    "overview": "Sagola 3300 GTO 64S buse 2.20 (réf. 10141572). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 2.20 mm.",
      "Chapeau d’air : 64S."
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
      "value": "2.20 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p35"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "64S",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p35"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "310 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p35"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p35"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p35",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=35",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 35",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p35"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p35"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p35"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
