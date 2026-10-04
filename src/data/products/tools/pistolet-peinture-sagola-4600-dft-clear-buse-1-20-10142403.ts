const product: unknown = {
  "id": "pistolet-peinture-sagola-4600-dft-clear-buse-1-20-10142403",
  "slug": "pistolet-peinture-sagola-4600-dft-clear-buse-1-20-10142403",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola 4600 DFT CLEAR buse 1.20 (réf. 10142403)",
  "brand": "Sagola",
  "model": "4600 DFT CLEAR buse 1.20",
  "mpn": "10142403",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2.2,
    "max": 2.2
  },
  "demandExplanation": "La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-4600-dft-clear-buse-1-20-10142403.svg",
    "alt": "Repères techniques : Sagola 4600 DFT CLEAR buse 1.20 (réf. 10142403)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-4600-dft-clear-buse-1-20",
    "label": "Référence 10142403",
    "distinguishingAttributes": {
      "reference": "10142403",
      "Buse": "1.20 mm",
      "Chapeau d’air": "CLEAR"
    }
  },
  "editorial": {
    "overview": "Sagola 4600 DFT CLEAR buse 1.20 (réf. 10142403). La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée.",
    "verifiedFacts": [
      "Buse : 1.20 mm.",
      "Chapeau d’air : CLEAR."
    ],
    "limitations": [
      "La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée.",
      "Débit publié au point de pression indiqué ; le protocole et le réglage de pulvérisation restent insuffisants pour l’intégrer au calcul.",
      "La consommation est publiée à la page PDF 21 ; les références standards et buses à la page PDF 23.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.20 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p23"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "CLEAR",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p23"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "295 L/min",
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
    "La consommation est publiée à une pression hors de la plage de service conseillée. Aucune valeur à une autre pression n’est extrapolée."
  ]
};

export default product;
