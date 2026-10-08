import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-mini-xtreme-pressure-mini-hvlp-buse-1-2",
  "slug": "pistolet-peinture-hvlp-sagola-mini-xtreme-pressure-mini-hvlp-buse-1-2",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola Mini Xtreme Pressure Mini HVLP buse 1.2",
  "brand": "Sagola",
  "model": "Mini Xtreme Pressure Mini HVLP buse 1.2",
  "mpn": "10111903",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 335,
    "typical": 335,
    "max": 335
  },
  "confidence": "B",
  "variant": {
    "familyId": "sagola-mini-xtreme-pressure",
    "label": "Mini Xtreme Pressure Mini HVLP buse 1.2",
    "distinguishingAttributes": {
      "Buse": "1.2 mm",
      "Chapeau": "Mini HVLP",
      "Alimentation": "pression externe",
      "Application indiquée par le fabricant": "Finitions et primaires",
      "Réglage recommandé pour cette application": "2 à 3 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-mini-xtreme-pressure-mini-hvlp-buse-1-2.svg",
    "alt": "Repères techniques : Sagola Mini Xtreme Pressure Mini HVLP buse 1.2",
    "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Sagola Mini Xtreme Pressure Mini HVLP buse 1.2. Consommation constructeur au point documenté : 335 L/min à 2 bar. Le code 10111903 est proposé avec buse 1.2 mm et chapeau Mini HVLP, en alimentation pression externe, pour finitions et primaires.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Chapeau : Mini HVLP.",
      "Alimentation : pression externe.",
      "Application indiquée par le fabricant : Finitions et primaires.",
      "Réglage recommandé pour cette application : 2 à 3 bar.",
      "Consommation publiée dans son unité originale : 335 L/min à 2 bar, unité native du tableau.",
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
      "value": "1.2 mm",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p22"
      ]
    },
    {
      "label": "Chapeau",
      "value": "Mini HVLP",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p22"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression externe",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p22"
      ]
    },
    {
      "label": "Application indiquée par le fabricant",
      "value": "Finitions et primaires",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p22"
      ]
    },
    {
      "label": "Réglage recommandé pour cette application",
      "value": "2 à 3 bar",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p22"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "335 L/min à 2 bar, unité native du tableau",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p22"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar, pression dynamique de référence constructeur",
      "evidenceIds": [
        "october8-tools-sagola-industry-current-p22"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-sagola-industry-current-p22",
      "sourceUrl": "https://sagola.com/uploads/documentos/industry-catalogue.pdf#page=22",
      "sourceLabel": "Sagola, catalogue industrie 2026/27, page PDF 22",
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
      "october8-tools-sagola-industry-current-p22",
      "october8-tools-sagola-bodyshop-current-p111"
    ],
    "airflowLpm": [
      "october8-tools-sagola-industry-current-p22",
      "october8-tools-sagola-bodyshop-current-p111"
    ]
  },
  "notes": [
    "Le code 10111903 est proposé avec buse 1.2 mm et chapeau Mini HVLP, en alimentation pression externe, pour finitions et primaires.",
    "Consommation du catalogue 2026/27 à la pression dynamique de référence de 2 bar ; le verdict ne s’étend pas à une autre pression.",
    "Le réglage recommandé pour une peinture n’est pas une seconde mesure de consommation.",
    "Le débit de peinture et le jet du tableau dépendent du produit et des conditions d’application.",
    "Une pompe ou un réservoir alimentant le produit et consommant de l’air doit être compté séparément.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
