import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-3600-xpt-base-buse-1-20-10142501",
  "slug": "pistolet-peinture-sagola-3600-xpt-base-buse-1-20-10142501",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola 3600 XPT BASE buse 1.20 (réf. 10142501)",
  "brand": "Sagola",
  "model": "3600 XPT BASE buse 1.20",
  "mpn": "10142501",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 285,
    "typical": 285,
    "max": 285
  },
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-3600-xpt-base-buse-1-20-10142501.svg",
    "alt": "Repères techniques : Sagola 3600 XPT BASE buse 1.20 (réf. 10142501)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-3600-xpt-base-buse-1-20",
    "label": "Référence 10142501",
    "distinguishingAttributes": {
      "reference": "10142501",
      "Buse": "1.20 mm",
      "Chapeau d’air": "BASE"
    }
  },
  "editorial": {
    "overview": "Sagola 3600 XPT BASE buse 1.20 (réf. 10142501). Demande au point documenté : 285 L/min à 2 bar.",
    "verifiedFacts": [
      "Buse : 1.20 mm.",
      "Chapeau d’air : BASE."
    ],
    "limitations": [
      "Le point constructeur est utilisé sans facteur de marche implicite ; aucune consommation à une autre pression n’est calculée.",
      "Le point de consommation de la notice est associé au fonctionnement de pulvérisation documenté et aux régulateurs ouverts.",
      "Aucune conversion vers une autre pression ni réduction implicite pour pulvérisation intermittente n’est effectuée.",
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
      "value": "BASE",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Consommation dans son unité originale",
      "value": "285 L/min",
      "evidenceIds": [
        "october4-tools-sagola-3600-manual-p29"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pressure Bar | BASE | 2",
      "evidenceIds": [
        "october4-tools-sagola-3600-manual-p29"
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
    },
    {
      "id": "october4-tools-sagola-3600-manual-p30",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-3600-manual.pdf#page=30",
      "sourceLabel": "Sagola : notice 3600 XPT, fonctionnement et buses d’air, page PDF 30",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 1f19477b3497285d86a11b144b0ca4a5158ec0453424b5280545aed3f5013db8. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-sagola-3600-manual-p32",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-3600-manual.pdf#page=32",
      "sourceLabel": "Sagola : notice 3600 XPT, fonctionnement et buses d’air, page PDF 32",
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
      "october4-tools-sagola-3600-manual-p29"
    ],
    "airflowLpm": [
      "october4-tools-sagola-3600-manual-p29"
    ]
  },
  "notes": [
    "Demande au point documenté : 285 L/min à 2 bar."
  ]
};

export default product;
