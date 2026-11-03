import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408",
  "slug": "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola 4600 DFT HVLP buse 1.30 (réf. 10142408)",
  "brand": "Sagola",
  "model": "4600 DFT HVLP buse 1.30",
  "mpn": "10142408",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2,
    "max": 2
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408.svg",
    "alt": "Repères techniques : Sagola 4600 DFT HVLP buse 1.30 (réf. 10142408)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-4600-dft-hvlp-buse-1-30",
    "label": "Référence 10142408",
    "distinguishingAttributes": {
      "reference": "10142408",
      "Buse": "1.30 mm",
      "Chapeau d’air": "HVLP"
    }
  },
  "editorial": {
    "overview": "Sagola 4600 DFT HVLP buse 1.30. Le code 10142408 est la 4600 DFT standard, buse 1,30 mm avec chapeau HVLP. Le code 10142420 est la 1,30 XL et 10142404 la 1,20. La table HVLP donne 450 L/min à 2 bar, contre 295 L/min à 2,2 bar pour le chapeau CLEAR ; ce sont des technologies distinctes, pas une baisse de consommation liée au seul diamètre.",
    "verifiedFacts": [
      "Buse : 1.30 mm.",
      "Chapeau d’air : HVLP.",
      "Code exact : 10142408, buse 1,30 mm et chapeau DVR HVLP.",
      "Consommation du chapeau : 450 L/min à 2 bar en entrée, régime non explicité.",
      "Débit produit du chapeau : 170–198 g/min.",
      "Distance d’application : 15–18 cm.",
      "Godet standard : 650 ml."
    ],
    "limitations": [
      "Le régime de consommation reste non précisé. La largeur de jet du tableau présente un conflit cm/pouces ; aucune conversion ni largeur corrigée n’est inventée."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.30 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p23"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "HVLP",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p23"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "450 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p21"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Recommended Working Pressure 2.0 bar ; Air Consumption",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p21"
      ]
    },
    {
      "label": "Code exact",
      "value": "10142408, buse 1,30 mm et chapeau DVR HVLP",
      "evidenceIds": [
        "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1"
      ]
    },
    {
      "label": "Consommation du chapeau",
      "value": "450 L/min à 2 bar en entrée, régime non explicité",
      "evidenceIds": [
        "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1"
      ]
    },
    {
      "label": "Débit produit du chapeau",
      "value": "170–198 g/min",
      "evidenceIds": [
        "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1"
      ]
    },
    {
      "label": "Distance d’application",
      "value": "15–18 cm",
      "evidenceIds": [
        "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1"
      ]
    },
    {
      "label": "Godet standard",
      "value": "650 ml",
      "evidenceIds": [
        "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p23",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=23",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 23",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p21",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=21",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 21",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    },
    {
      "id": "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=23",
      "sourceLabel": "Sagola : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 d2fa5b5045b7def1a1134e7083ebf60bc40a3df70ac77aa478358186cc144056. Le code 10142408 est la 4600 DFT standard, buse 1,30 mm avec chapeau HVLP. Le code 10142420 est la 1,30 XL et 10142404 la 1,20. La table HVLP donne 450 L/min à 2 bar, contre 295 L/min à 2,2 bar pour le chapeau CLEAR ; ce sont des technologies distinctes, pas une baisse de consommation liée au seul diamètre."
    },
    {
      "id": "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1-3",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=21",
      "sourceLabel": "Sagola : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 d2fa5b5045b7def1a1134e7083ebf60bc40a3df70ac77aa478358186cc144056. Le code 10142408 est la 4600 DFT standard, buse 1,30 mm avec chapeau HVLP. Le code 10142420 est la 1,30 XL et 10142404 la 1,20. La table HVLP donne 450 L/min à 2 bar, contre 295 L/min à 2,2 bar pour le chapeau CLEAR ; ce sont des technologies distinctes, pas une baisse de consommation liée au seul diamètre."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p23"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p21"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p23",
      "october4-tools-sagola-bodyshop-catalogue-p21"
    ],
    "editorial": [
      "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1"
    ],
    "specifications": [
      "pistolet-peinture-hvlp-sagola-4600-dft-hvlp-buse-1-30-10142408-reserved-20261103-1"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
