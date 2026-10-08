import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-x4100-gravity-xt01-buse-1-6",
  "slug": "pistolet-peinture-sagola-x4100-gravity-xt01-buse-1-6",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola X4100 Gravity XT01 buse 1.6",
  "brand": "Sagola",
  "model": "X4100 Gravity XT01 buse 1.6",
  "mpn": "10142006",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 235,
    "typical": 235,
    "max": 235
  },
  "confidence": "B",
  "variant": {
    "familyId": "sagola-x4100-gravity",
    "label": "X4100 Gravity XT01 buse 1.6",
    "distinguishingAttributes": {
      "Buse": "1.6 mm",
      "Chapeau": "XT01",
      "Alimentation": "gravité",
      "Application indiquée par le fabricant": "Finitions ou primaires selon diamètre",
      "Réglage recommandé pour cette application": "1,8 à 2,2 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-x4100-gravity-xt01-buse-1-6.svg",
    "alt": "Repères techniques : Sagola X4100 Gravity XT01 buse 1.6",
    "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Sagola X4100 Gravity XT01 buse 1.6. Consommation constructeur au point documenté : 235 L/min à 2 bar. Le code 10142006 est proposé avec buse 1.6 mm et chapeau XT01, en alimentation gravité, pour finitions ou primaires selon diamètre.",
    "verifiedFacts": [
      "Buse : 1.6 mm.",
      "Chapeau : XT01.",
      "Alimentation : gravité.",
      "Application indiquée par le fabricant : Finitions ou primaires selon diamètre.",
      "Réglage recommandé pour cette application : 1,8 à 2,2 bar.",
      "Débit de produit du tableau : 209 g/min.",
      "Largeur de jet du tableau : 285 mm.",
      "Consommation publiée dans son unité originale : 235 L/min à 2 bar, unité native du tableau.",
      "Pression dans la source : 2 bar, pression dynamique de référence constructeur."
    ],
    "limitations": [
      "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
      "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
      "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.6 mm",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Chapeau",
      "value": "XT01",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Application indiquée par le fabricant",
      "value": "Finitions ou primaires selon diamètre",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Réglage recommandé pour cette application",
      "value": "1,8 à 2,2 bar",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Débit de produit du tableau",
      "value": "209 g/min",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Largeur de jet du tableau",
      "value": "285 mm",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "235 L/min à 2 bar, unité native du tableau",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar, pression dynamique de référence constructeur",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p38"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-sagola-industry-current-p38",
      "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf#page=38",
      "sourceLabel": "Sagola, catalogue industrie 2026/27, page PDF 38",
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
      "october8-tools-sagola-industry-current-p38",
      "october8-tools-sagola-bodyshop-current-p111"
    ],
    "airflowLpm": [
      "october8-tools-sagola-industry-current-p38",
      "october8-tools-sagola-bodyshop-current-p111"
    ]
  },
  "notes": [
    "Le code 10142006 est proposé avec buse 1.6 mm et chapeau XT01, en alimentation gravité, pour finitions ou primaires selon diamètre.",
    "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
    "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
    "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
