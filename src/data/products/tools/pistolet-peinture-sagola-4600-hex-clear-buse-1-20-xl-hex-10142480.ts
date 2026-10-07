import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-4600-hex-clear-buse-1-20-xl-hex-10142480",
  "slug": "pistolet-peinture-sagola-4600-hex-clear-buse-1-20-xl-hex-10142480",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola 4600 HEX CLEAR buse 1.20 XL HEX (réf. 10142480)",
  "brand": "Sagola",
  "model": "4600 HEX CLEAR buse 1.20 XL HEX",
  "mpn": "10142480",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 305,
    "typical": 305,
    "max": 305
  },
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-4600-hex-clear-buse-1-20-xl-hex-10142480.svg",
    "alt": "Repères techniques : Sagola 4600 HEX CLEAR buse 1.20 XL HEX (réf. 10142480)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-4600-hex-clear-buse-1-20-xl-hex",
    "label": "Référence 10142480",
    "distinguishingAttributes": {
      "reference": "10142480",
      "Buse": "1.20 XL mm (HEX)",
      "Chapeau d’air": "CLEAR"
    }
  },
  "editorial": {
    "overview": "Sagola 4600 HEX CLEAR buse 1.20 XL HEX (réf. 10142480). Demande au point documenté : 305 L/min à 2 bar.",
    "verifiedFacts": [
      "Buse : 1.20 XL mm (HEX).",
      "Chapeau d’air : CLEAR."
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
      "value": "1.20 XL mm (HEX)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p15"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "CLEAR",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p15"
      ]
    },
    {
      "label": "Consommation dans son unité originale",
      "value": "305 L/min",
      "evidenceIds": [
        "october4-tools-sagola-4600hex-manual-p33"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pressure Bar | CLEAR | 2",
      "evidenceIds": [
        "october4-tools-sagola-4600hex-manual-p33"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p15",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=15",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-sagola-4600hex-manual-p33",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-4600-hex-manual.pdf#page=33",
      "sourceLabel": "Sagola : notice 4600 HEX, fonctionnement et buses d’air, page PDF 33",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 58029e52391ec5f2c82be4fa99ead52f275e62a0cac611ab0c4ecf207b5dd8bb. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-sagola-4600hex-manual-p32",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-4600-hex-manual.pdf#page=32",
      "sourceLabel": "Sagola : notice 4600 HEX, fonctionnement et buses d’air, page PDF 32",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 58029e52391ec5f2c82be4fa99ead52f275e62a0cac611ab0c4ecf207b5dd8bb. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-sagola-4600hex-manual-p35",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-4600-hex-manual.pdf#page=35",
      "sourceLabel": "Sagola : notice 4600 HEX, fonctionnement et buses d’air, page PDF 35",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 58029e52391ec5f2c82be4fa99ead52f275e62a0cac611ab0c4ecf207b5dd8bb. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p15"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-4600hex-manual-p33"
    ],
    "airflowLpm": [
      "october4-tools-sagola-4600hex-manual-p33"
    ]
  },
  "notes": [
    "Demande au point documenté : 305 L/min à 2 bar."
  ]
};

export default product;
