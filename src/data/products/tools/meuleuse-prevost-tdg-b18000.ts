import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-prevost-tdg-b18000",
  "slug": "meuleuse-prevost-tdg-b18000",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Prevost TDG B18000",
  "brand": "Prevost",
  "model": "TDG B18000",
  "mpn": "TDG B18000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-tdg-meuleuse",
    "label": "TDG B18000",
    "distinguishingAttributes": {
      "Référence dans le tableau": "TDG B18000",
      "Longueur publiée": "197 mm",
      "Masse publiée": "0,8 kg",
      "Entrée d’air": "R 1/4",
      "Diamètre intérieur du tuyau recommandé": "10 - 3/8”"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-prevost-tdg-b18000.svg",
    "alt": "Repères techniques : Prevost TDG B18000",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TDG B18000. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TDG B18000 : Longueur publiée 197 mm; Masse publiée 0,8 kg; Entrée d’air R 1/4.",
    "verifiedFacts": [
      "Référence dans le tableau : TDG B18000.",
      "Longueur publiée : 197 mm.",
      "Masse publiée : 0,8 kg.",
      "Entrée d’air : R 1/4.",
      "Diamètre intérieur du tuyau recommandé : 10 - 3/8”.",
      "Pression maximale de service : 6,2 bar.",
      "Diamètre de pince ou disque dans le tableau : 3 et 6.",
      "Vitesse de rotation à vide : 18 000 tr/min.",
      "Consommation publiée dans son unité originale : 113 L/min à vide.",
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
      "value": "TDG B18000",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Longueur publiée",
      "value": "197 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "0,8 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "R 1/4",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau recommandé",
      "value": "10 - 3/8”",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Pression maximale de service",
      "value": "6,2 bar",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Diamètre de pince ou disque dans le tableau",
      "value": "3 et 6",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Vitesse de rotation à vide",
      "value": "18 000 tr/min",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "113 L/min à vide",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression maximale de service 6,2 bar ; aucun point de travail apparié à la consommation.",
      "evidenceIds": [
        "october7-tools-prevost-tools-p25"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-tools-p25",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=25",
      "sourceLabel": "Prevost, catalogue fabricant AT_DOC_14F, page PDF 25",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 177a4b559e35e27a55491dbf526da3ad34e064ea076d184d939016367995c618. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-tools-p25"
    ],
    "demandExplanation": [
      "october7-tools-prevost-tools-p25"
    ]
  },
  "notes": [
    "TDG B18000 : Longueur publiée 197 mm; Masse publiée 0,8 kg; Entrée d’air R 1/4.",
    "La pression maximale de service est une limite matérielle. Elle ne remplace pas une pression de travail documentée au point de consommation.",
    "Le tableau ne qualifie pas une consommation en charge associée à une pression de travail ; le profil conserve les autres caractéristiques, sans verdict suffisant inventé.",
    "La source est une édition constructeur archivée. La présence au catalogue ne garantit pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
