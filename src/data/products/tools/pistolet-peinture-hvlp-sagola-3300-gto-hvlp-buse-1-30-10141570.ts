import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-30-10141570",
  "slug": "pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-30-10141570",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola 3300 GTO HVLP buse 1.30 (réf. 10141570)",
  "brand": "Sagola",
  "model": "3300 GTO HVLP buse 1.30",
  "mpn": "10141570",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.8,
    "max": 2
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-3300-gto-hvlp-buse-1-30-10141570.svg",
    "alt": "Repères techniques : Sagola 3300 GTO HVLP buse 1.30 (réf. 10141570)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-3300-gto-hvlp-buse-1-30",
    "label": "Référence 10141570",
    "distinguishingAttributes": {
      "reference": "10141570",
      "Buse": "1.30 mm",
      "Chapeau d’air": "HVLP"
    }
  },
  "editorial": {
    "overview": "3300 GTO HVLP, article 10141570 : buse de 1,30 mm, consommation annoncée de 360 L/min à 2 bar et distance d’application de 12 à 15 cm. Le tableau indique un jet de 245 mm et un débit de produit de 145 g/min pour cette ligne. La version HVLP 1,40 mm conserve les 360 L/min, avec un jet de 250 mm et 161 g/min.",
    "verifiedFacts": [
      "Buse : 1.30 mm.",
      "Chapeau d’air : HVLP."
    ],
    "limitations": [
      "La consommation possède bien un point de pression publié : 2 bar. Le réglage et le protocole nécessaires au dimensionnement restent à qualifier.",
      "Les caractéristiques du chapeau TECH et du chapeau EPA sont celles d’autres versions ; elles ne remplacent pas celles du HVLP.",
      "Le débit de produit en g/min et la consommation d’air en L/min restent séparés."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.30 mm",
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
