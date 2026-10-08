import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-sagola-x4100-suction-xt01-buse-1-60-s",
  "slug": "pistolet-peinture-sagola-x4100-suction-xt01-buse-1-60-s",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Sagola X4100 Suction XT01 buse 1.60 S",
  "brand": "Sagola",
  "model": "X4100 Suction XT01 buse 1.60 S",
  "mpn": "10121007",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 295,
    "typical": 295,
    "max": 295
  },
  "confidence": "B",
  "variant": {
    "familyId": "sagola-x4100-suction",
    "label": "X4100 Suction XT01 buse 1.60 S",
    "distinguishingAttributes": {
      "Buse du tableau": "1,60 S, notation constructeur",
      "Chapeau": "XT01",
      "Alimentation": "succion",
      "Application indiquée par le fabricant": "Finitions et primaires selon diamètre",
      "Réglage recommandé pour cette application": "2 à 3 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-sagola-x4100-suction-xt01-buse-1-60-s.svg",
    "alt": "Repères techniques : Sagola X4100 Suction XT01 buse 1.60 S",
    "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Sagola X4100 Suction XT01 buse 1.60 S. Consommation constructeur au point documenté : 295 L/min à 2 bar. Le code 10121007 est proposé avec buse 1.6 mm et chapeau XT01, en alimentation succion, pour finitions et primaires selon diamètre.",
    "verifiedFacts": [
      "Buse du tableau : 1,60 S, notation constructeur.",
      "Chapeau : XT01.",
      "Alimentation : succion.",
      "Application indiquée par le fabricant : Finitions et primaires selon diamètre.",
      "Réglage recommandé pour cette application : 2 à 3 bar.",
      "Débit de produit du tableau : 241 g/min.",
      "Largeur de jet du tableau : 305 mm.",
      "Consommation publiée dans son unité originale : 295 L/min à 2 bar, unité native du tableau.",
      "Pression dans la source : 2 bar, pression dynamique de référence constructeur."
    ],
    "limitations": [
      "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
      "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
      "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
      "Le suffixe S de la ligne de buse est conservé ; il n’est pas remplacé par un diamètre sans suffixe.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse du tableau",
      "value": "1,60 S, notation constructeur",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Chapeau",
      "value": "XT01",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Alimentation",
      "value": "succion",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Application indiquée par le fabricant",
      "value": "Finitions et primaires selon diamètre",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Réglage recommandé pour cette application",
      "value": "2 à 3 bar",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Débit de produit du tableau",
      "value": "241 g/min",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Largeur de jet du tableau",
      "value": "305 mm",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "295 L/min à 2 bar, unité native du tableau",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar, pression dynamique de référence constructeur",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p55"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-sagola-industry-current-p55",
      "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf#page=55",
      "sourceLabel": "Sagola, catalogue industrie 2026/27, page PDF 55",
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
      "october8-tools-sagola-industry-current-p55",
      "october8-tools-sagola-bodyshop-current-p111"
    ],
    "airflowLpm": [
      "october8-tools-sagola-industry-current-p55",
      "october8-tools-sagola-bodyshop-current-p111"
    ]
  },
  "notes": [
    "Le code 10121007 est proposé avec buse 1.6 mm et chapeau XT01, en alimentation succion, pour finitions et primaires selon diamètre.",
    "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
    "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
    "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
    "Le suffixe S de la ligne de buse est conservé ; il n’est pas remplacé par un diamètre sans suffixe.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
