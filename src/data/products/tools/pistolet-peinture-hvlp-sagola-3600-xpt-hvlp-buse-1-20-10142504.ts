import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-20-10142504",
  "slug": "pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-20-10142504",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola 3600 XPT HVLP buse 1.20 (réf. 10142504)",
  "brand": "Sagola",
  "model": "3600 XPT HVLP buse 1.20",
  "mpn": "10142504",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2,
    "max": 2
  },
  "demandExplanation": "Le catalogue et la notice donnent des pressions incompatibles pour ce chapeau. Aucun point de consommation n’est choisi entre ces sources.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-20-10142504.svg",
    "alt": "Repères techniques : Sagola 3600 XPT HVLP buse 1.20 (réf. 10142504)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-3600-xpt-hvlp-buse-1-20",
    "label": "Référence 10142504",
    "distinguishingAttributes": {
      "reference": "10142504",
      "Buse": "1.20 mm",
      "Chapeau d’air": "HVLP"
    }
  },
  "editorial": {
    "overview": "Sagola 3600 XPT HVLP buse 1.20 (réf. 10142504). Le catalogue et la notice donnent des pressions incompatibles pour ce chapeau. Aucun point de consommation n’est choisi entre ces sources.",
    "verifiedFacts": [
      "Buse : 1.20 mm.",
      "Chapeau d’air : HVLP.",
      "Maximum d’entrée HVLP dans la notice : 1.8 bar."
    ],
    "limitations": [
      "Le catalogue et la notice donnent des pressions incompatibles pour ce chapeau. Aucun point de consommation n’est choisi entre ces sources.",
      "Le catalogue donne 360 L/min à 2 bar ; la notice liée impose 1,8 bar maximum avec le chapeau HVLP. Le point n’est pas arbitré entre ces deux sources.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.20 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "HVLP",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Maximum d’entrée HVLP dans la notice",
      "value": "1.8 bar",
      "evidenceIds": [
        "october4-tools-sagola-3600-manual-p29"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "360 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p29",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=29",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-sagola-3600-manual-p29",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-3600-manual.pdf#page=29",
      "sourceLabel": "Sagola : notice 3600 XPT, fonctionnement et buses d’air, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 1f19477b3497285d86a11b144b0ca4a5158ec0453424b5280545aed3f5013db8. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p29"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p29"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p29",
      "october4-tools-sagola-3600-manual-p29"
    ]
  },
  "notes": [
    "Le catalogue et la notice donnent des pressions incompatibles pour ce chapeau. Aucun point de consommation n’est choisi entre ces sources."
  ]
};

export default product;
