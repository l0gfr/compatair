import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-mini-compact-hvlp-buse-1-20-10112018",
  "slug": "pistolet-peinture-hvlp-sagola-mini-compact-hvlp-buse-1-20-10112018",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola MINI COMPACT HVLP buse 1.20 (réf. 10112018)",
  "brand": "Sagola",
  "model": "MINI COMPACT HVLP buse 1.20",
  "mpn": "10112018",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1,
    "max": 2
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-mini-compact-hvlp-buse-1-20-10112018.svg",
    "alt": "Repères techniques : Sagola MINI COMPACT HVLP buse 1.20 (réf. 10112018)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-mini-compact-hvlp-buse-1-20",
    "label": "Référence 10112018",
    "distinguishingAttributes": {
      "reference": "10112018",
      "Buse": "1.20 mm",
      "Chapeau d’air": "HVLP"
    }
  },
  "editorial": {
    "overview": "Sagola MINI COMPACT HVLP buse 1.20 (réf. 10112018). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.20 mm.",
      "Chapeau d’air : HVLP."
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
      "value": "1.20 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p41"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "HVLP",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p41"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "190 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p41"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p41"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p41",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=41",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 41",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p41"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p41"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p41"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
