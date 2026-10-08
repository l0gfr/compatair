import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-3300-gto-pressure-gto-hvlp-buse-1",
  "slug": "pistolet-peinture-hvlp-sagola-3300-gto-pressure-gto-hvlp-buse-1",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola 3300 GTO Pressure GTO HVLP buse 1",
  "brand": "Sagola",
  "model": "3300 GTO Pressure GTO HVLP buse 1",
  "mpn": "10152210",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 360,
    "typical": 360,
    "max": 360
  },
  "confidence": "B",
  "variant": {
    "familyId": "sagola-3300-gto-pressure",
    "label": "3300 GTO Pressure GTO HVLP buse 1",
    "distinguishingAttributes": {
      "Buse": "1 mm",
      "Chapeau": "GTO HVLP",
      "Alimentation": "pression externe",
      "Application indiquée par le fabricant": "Finitions haute qualité",
      "Réglage recommandé pour cette application": "1,8 à 2 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-3300-gto-pressure-gto-hvlp-buse-1.svg",
    "alt": "Repères techniques : Sagola 3300 GTO Pressure GTO HVLP buse 1",
    "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Sagola 3300 GTO Pressure GTO HVLP buse 1. Consommation constructeur au point documenté : 360 L/min à 2 bar. Le code 10152210 est proposé avec buse 1 mm et chapeau GTO HVLP, en alimentation pression externe, pour finitions haute qualité.",
    "verifiedFacts": [
      "Buse : 1 mm.",
      "Chapeau : GTO HVLP.",
      "Alimentation : pression externe.",
      "Application indiquée par le fabricant : Finitions haute qualité.",
      "Réglage recommandé pour cette application : 1,8 à 2 bar.",
      "Consommation publiée dans son unité originale : 360 L/min à 2 bar, unité native du tableau.",
      "Pression dans la source : 2 bar, pression dynamique de référence constructeur."
    ],
    "limitations": [
      "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
      "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
      "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
      "Une pompe ou un réservoir alimentant le produit et consommant de l’air doit être compté séparément.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1 mm",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p24"
      ]
    },
    {
      "label": "Chapeau",
      "value": "GTO HVLP",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p24"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression externe",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p24"
      ]
    },
    {
      "label": "Application indiquée par le fabricant",
      "value": "Finitions haute qualité",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p24"
      ]
    },
    {
      "label": "Réglage recommandé pour cette application",
      "value": "1,8 à 2 bar",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p24"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "360 L/min à 2 bar, unité native du tableau",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p24"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar, pression dynamique de référence constructeur",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p24"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-sagola-industry-current-p24",
      "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf#page=24",
      "sourceLabel": "Sagola, catalogue industrie 2026/27, page PDF 24",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 057ee656df06422f5dcf2c4f6ddd683a4a8ace9e461769a201d13c921a8221d7. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-sagola-bodyshop-current-p111",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=111",
      "sourceLabel": "Sagola, catalogue carrosserie 2026/27, page PDF 111",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-sagola-industry-current-p24",
      "october8-tools-sagola-bodyshop-current-p111"
    ],
    "airflowLpm": [
      "october8-tools-sagola-industry-current-p24",
      "october8-tools-sagola-bodyshop-current-p111"
    ]
  },
  "notes": [
    "Le code 10152210 est proposé avec buse 1 mm et chapeau GTO HVLP, en alimentation pression externe, pour finitions haute qualité.",
    "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
    "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
    "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
    "Une pompe ou un réservoir alimentant le produit et consommant de l’air doit être compté séparément.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
