import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-prevost-tdg-m60000",
  "slug": "meuleuse-prevost-tdg-m60000",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Prevost TDG M60000",
  "brand": "Prevost",
  "model": "TDG M60000",
  "mpn": "TDG M60000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-tdg-meuleuse",
    "label": "TDG M60000",
    "distinguishingAttributes": {
      "Référence dans le tableau": "TDG M60000",
      "Longueur publiée": "132 mm",
      "Masse publiée": "0,3 kg",
      "Entrée d’air": "R 1/4",
      "Diamètre intérieur du tuyau recommandé": "10 - 3/8”"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-prevost-tdg-m60000.svg",
    "alt": "Repères techniques : Prevost TDG M60000",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TDG M60000. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TDG M60000 : Longueur publiée 132 mm; Masse publiée 0,3 kg; Entrée d’air R 1/4.",
    "verifiedFacts": [
      "Référence dans le tableau : TDG M60000.",
      "Longueur publiée : 132 mm.",
      "Masse publiée : 0,3 kg.",
      "Entrée d’air : R 1/4.",
      "Diamètre intérieur du tuyau recommandé : 10 - 3/8”.",
      "Pression maximale de service : 6,2 bar.",
      "Diamètre de pince ou disque dans le tableau : 3.",
      "Vitesse de rotation à vide : 60 000 tr/min.",
      "Consommation publiée dans son unité originale : 30 L/min à vide.",
      "Pression dans la source : Pression maximale de service 6,2 bar ; aucun point de travail apparié à la consommation.."
    ],
    "limitations": [
      "La pression maximale de service est une limite matérielle. Elle ne remplace pas une pression de travail documentée au point de consommation.",
      "Le tableau ne qualifie pas une consommation en charge associée à une pression de travail ; le profil conserve les autres caractéristiques, sans verdict suffisant inventé.",
      "La source est une édition constructeur archivée. La présence au catalogue ne garantit pas une disponibilité marchande actuelle.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Référence dans le tableau",
      "value": "TDG M60000",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Longueur publiée",
      "value": "132 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "0,3 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "R 1/4",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau recommandé",
      "value": "10 - 3/8”",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Pression maximale de service",
      "value": "6,2 bar",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Diamètre de pince ou disque dans le tableau",
      "value": "3",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Vitesse de rotation à vide",
      "value": "60 000 tr/min",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "30 L/min à vide",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression maximale de service 6,2 bar ; aucun point de travail apparié à la consommation.",
      "evidenceIds": [
        "october7-tools-prevost-tools-p26"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-tools-p26",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=26",
      "sourceLabel": "Prevost, catalogue fabricant AT_DOC_14F, page PDF 26",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 177a4b559e35e27a55491dbf526da3ad34e064ea076d184d939016367995c618. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-tools-p26"
    ],
    "demandExplanation": [
      "october7-tools-prevost-tools-p26"
    ]
  },
  "notes": [
    "TDG M60000 : Longueur publiée 132 mm; Masse publiée 0,3 kg; Entrée d’air R 1/4.",
    "La pression maximale de service est une limite matérielle. Elle ne remplace pas une pression de travail documentée au point de consommation.",
    "Le tableau ne qualifie pas une consommation en charge associée à une pression de travail ; le profil conserve les autres caractéristiques, sans verdict suffisant inventé.",
    "La source est une édition constructeur archivée. La présence au catalogue ne garantit pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
