const product: unknown = {
  "id": "pistolet-peinture-sagola-4600-dft-base-buse-1-40-10142409",
  "slug": "pistolet-peinture-sagola-4600-dft-base-buse-1-40-10142409",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola 4600 DFT BASE buse 1.40 (réf. 10142409)",
  "brand": "Sagola",
  "model": "4600 DFT BASE buse 1.40",
  "mpn": "10142409",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.8,
    "max": 2
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-4600-dft-base-buse-1-40-10142409.svg",
    "alt": "Repères techniques : Sagola 4600 DFT BASE buse 1.40 (réf. 10142409)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-4600-dft-base-buse-1-40",
    "label": "Référence 10142409",
    "distinguishingAttributes": {
      "reference": "10142409",
      "Buse": "1.40 mm",
      "Chapeau d’air": "BASE"
    }
  },
  "editorial": {
    "overview": "Sagola 4600 DFT BASE buse 1.40 (réf. 10142409). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Buse : 1.40 mm.",
      "Chapeau d’air : BASE."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "Débit publié au point de pression indiqué ; le protocole et le réglage de pulvérisation restent insuffisants pour l’intégrer au calcul.",
      "La consommation est publiée à la page PDF 21 ; les références standards et buses à la page PDF 23.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.40 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p23"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "BASE",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p23"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "280 L/min",
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
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
