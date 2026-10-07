import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-classic-pro-xd-hvlp-buse-1-80-10141626",
  "slug": "pistolet-peinture-hvlp-sagola-classic-pro-xd-hvlp-buse-1-80-10141626",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola CLASSIC PRO XD HVLP buse 1.80 (réf. 10141626)",
  "brand": "Sagola",
  "model": "CLASSIC PRO XD HVLP buse 1.80",
  "mpn": "10141626",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.5,
    "max": 2
  },
  "demandExplanation": "Les valeurs de consommation en L/min et cfm se contredisent. Aucun débit de calcul n’est choisi.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-classic-pro-xd-hvlp-buse-1-80-10141626.svg",
    "alt": "Repères techniques : Sagola CLASSIC PRO XD HVLP buse 1.80 (réf. 10141626)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-classic-pro-xd-hvlp-buse-1-80",
    "label": "Référence 10141626",
    "distinguishingAttributes": {
      "reference": "10141626",
      "Buse": "1.80 mm",
      "Chapeau d’air": "HVLP"
    }
  },
  "editorial": {
    "overview": "Sagola CLASSIC PRO XD HVLP buse 1.80 (réf. 10141626). Les valeurs de consommation en L/min et cfm se contredisent. Aucun débit de calcul n’est choisi.",
    "verifiedFacts": [
      "Buse : 1.80 mm.",
      "Chapeau d’air : HVLP.",
      "Unité alternative contradictoire dans la même table : 11.54 cfm."
    ],
    "limitations": [
      "Les valeurs de consommation en L/min et cfm se contredisent. Aucun débit de calcul n’est choisi.",
      "Les valeurs L/min et cfm de la même table ne sont pas concordantes ; aucune unité n’est choisie pour produire un débit de calcul.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.80 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p55"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "HVLP",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p55"
      ]
    },
    {
      "label": "Unité alternative contradictoire dans la même table",
      "value": "11.54 cfm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p55"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "355 L/min",
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
    "Les valeurs de consommation en L/min et cfm se contredisent. Aucun débit de calcul n’est choisi."
  ]
};

export default product;
