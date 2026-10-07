import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-mini-compact-tech-buse-1-00-10112012",
  "slug": "pistolet-peinture-sagola-mini-compact-tech-buse-1-00-10112012",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola MINI COMPACT TECH buse 1.00 (réf. 10112012)",
  "brand": "Sagola",
  "model": "MINI COMPACT TECH buse 1.00",
  "mpn": "10112012",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 0.5,
    "max": 1
  },
  "demandExplanation": "La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-mini-compact-tech-buse-1-00-10112012.svg",
    "alt": "Repères techniques : Sagola MINI COMPACT TECH buse 1.00 (réf. 10112012)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-mini-compact-tech-buse-1-00",
    "label": "Référence 10112012",
    "distinguishingAttributes": {
      "reference": "10112012",
      "Buse": "1.00 mm",
      "Chapeau d’air": "TECH"
    }
  },
  "editorial": {
    "overview": "Sagola MINI COMPACT TECH buse 1.00 (réf. 10112012). La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée.",
    "verifiedFacts": [
      "Buse : 1.00 mm.",
      "Chapeau d’air : TECH."
    ],
    "limitations": [
      "La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée.",
      "Débit publié au point de pression indiqué ; le protocole et le réglage de pulvérisation restent insuffisants pour l’intégrer au calcul.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.00 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p40"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "TECH",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p40"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "52 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p40"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p40"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p40",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=40",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 40",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p40"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p40"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p40"
    ]
  },
  "notes": [
    "La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée."
  ]
};

export default product;
