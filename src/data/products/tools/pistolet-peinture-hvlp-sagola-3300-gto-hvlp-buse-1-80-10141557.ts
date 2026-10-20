import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-80-10141557",
  "slug": "pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-80-10141557",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola 3300 GTO HVLP buse 1.80 (réf. 10141557)",
  "brand": "Sagola",
  "model": "3300 GTO HVLP buse 1.80",
  "mpn": "10141557",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.8,
    "max": 2
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-80-10141557.svg",
    "alt": "Repères techniques : Sagola 3300 GTO HVLP buse 1.80 (réf. 10141557)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-3300-gto-hvlp-buse-1-80",
    "label": "Référence 10141557",
    "distinguishingAttributes": {
      "reference": "10141557",
      "Buse": "1.80 mm",
      "Chapeau d’air": "HVLP"
    }
  },
  "editorial": {
    "overview": "3300 GTO HVLP 10141557 : la ligne apprêts à poncer associe la buse de 1,80 mm à 193 g/min de produit et un jet de 295 mm à 12–15 cm. La version 1,60 mm 10141556 publie 172 g/min et 260 mm. Le tableau conserve 360 L/min d’air à 2 bar pour ces configurations HVLP ; le débit de produit, la distance et le chapeau doivent accompagner le choix de buse.",
    "verifiedFacts": [
      "Buse : 1.80 mm.",
      "Chapeau d’air : HVLP."
    ],
    "limitations": [
      "Les lignes TECH et EPA ne complètent pas ce point HVLP. La consommation de produit en g/min ne devient pas une consommation d’air, et aucun résultat de finition n’est garanti.",
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "Débit publié au point de pression indiqué ; le protocole et le réglage de pulvérisation restent insuffisants pour l’intégrer au calcul.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.80 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p34"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "HVLP",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p34"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "360 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p34"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p34"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p34",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=34",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 34",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p34"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p34"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p34"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
