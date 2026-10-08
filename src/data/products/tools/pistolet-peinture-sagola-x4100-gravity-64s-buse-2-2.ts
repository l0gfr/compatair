import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-x4100-gravity-64s-buse-2-2",
  "slug": "pistolet-peinture-sagola-x4100-gravity-64s-buse-2-2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola X4100 Gravity 64S buse 2.2",
  "brand": "Sagola",
  "model": "X4100 Gravity 64S buse 2.2",
  "mpn": "10142011",
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
  "variant": {
    "familyId": "sagola-x4100-gravity",
    "label": "X4100 Gravity 64S buse 2.2",
    "distinguishingAttributes": {
      "Buse": "2.2 mm",
      "Chapeau": "64S",
      "Alimentation": "gravité",
      "Application indiquée par le fabricant": "Charges à forte viscosité",
      "Réglage recommandé pour cette application": "2 à 2,5 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-x4100-gravity-64s-buse-2-2.svg",
    "alt": "Repères techniques : Sagola X4100 Gravity 64S buse 2.2",
    "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Sagola X4100 Gravity 64S buse 2.2. Consommation constructeur au point documenté : 305 L/min à 2 bar. Le code 10142011 est proposé avec buse 2.2 mm et chapeau 64S, en alimentation gravité, pour charges à forte viscosité.",
    "verifiedFacts": [
      "Buse : 2.2 mm.",
      "Chapeau : 64S.",
      "Alimentation : gravité.",
      "Application indiquée par le fabricant : Charges à forte viscosité.",
      "Réglage recommandé pour cette application : 2 à 2,5 bar.",
      "Débit de produit du tableau : 290 g/min.",
      "Largeur de jet du tableau : 280 mm.",
      "Consommation publiée dans son unité originale : 305 L/min à 2 bar, unité native du tableau.",
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
      "value": "2.2 mm",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Chapeau",
      "value": "64S",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Application indiquée par le fabricant",
      "value": "Charges à forte viscosité",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Réglage recommandé pour cette application",
      "value": "2 à 2,5 bar",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Débit de produit du tableau",
      "value": "290 g/min",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Largeur de jet du tableau",
      "value": "280 mm",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "305 L/min à 2 bar, unité native du tableau",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar, pression dynamique de référence constructeur",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p39"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-sagola-industry-current-p39",
      "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf#page=39",
      "sourceLabel": "Sagola, catalogue industrie 2026/27, page PDF 39",
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
      "october8-tools-sagola-industry-current-p39",
      "october8-tools-sagola-bodyshop-current-p111"
    ],
    "airflowLpm": [
      "october8-tools-sagola-industry-current-p39",
      "october8-tools-sagola-bodyshop-current-p111"
    ]
  },
  "notes": [
    "Le code 10142011 est proposé avec buse 2.2 mm et chapeau 64S, en alimentation gravité, pour charges à forte viscosité.",
    "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
    "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
    "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
