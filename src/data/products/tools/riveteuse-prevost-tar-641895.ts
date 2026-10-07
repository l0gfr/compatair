import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "riveteuse-prevost-tar-641895",
  "slug": "riveteuse-prevost-tar-641895",
  "categoryId": "riveteuse",
  "category": "riveteuse",
  "label": "Prevost TAR 641895",
  "brand": "Prevost",
  "model": "TAR 641895",
  "mpn": "TAR 641895",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-tar-riveteuse",
    "label": "TAR 641895",
    "distinguishingAttributes": {
      "Référence dans le tableau": "TAR 641895",
      "Longueur publiée": "272 mm",
      "Masse publiée": "2,14 kg",
      "Entrée d’air": "R 1/4",
      "Diamètre intérieur du tuyau recommandé": "10 - 3/8”"
    }
  },
  "image": {
    "src": "/images/products/riveteuse-prevost-tar-641895.svg",
    "alt": "Repères techniques : Prevost TAR 641895",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TAR 641895. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TAR 641895 : Longueur publiée 272 mm; Masse publiée 2,14 kg; Entrée d’air R 1/4.",
    "verifiedFacts": [
      "Référence dans le tableau : TAR 641895.",
      "Longueur publiée : 272 mm.",
      "Masse publiée : 2,14 kg.",
      "Entrée d’air : R 1/4.",
      "Diamètre intérieur du tuyau recommandé : 10 - 3/8”.",
      "Pression maximale de service : 6,2 bar.",
      "Diamètres de rivets publiés : 2,4 - 6,4 mm.",
      "Consommation publiée dans son unité originale : 148 L/min à vide.",
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
      "value": "TAR 641895",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Longueur publiée",
      "value": "272 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "2,14 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "R 1/4",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau recommandé",
      "value": "10 - 3/8”",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Pression maximale de service",
      "value": "6,2 bar",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Diamètres de rivets publiés",
      "value": "2,4 - 6,4 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "148 L/min à vide",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression maximale de service 6,2 bar ; aucun point de travail apparié à la consommation.",
      "evidenceIds": [
        "october7-tools-prevost-tools-p39"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-tools-p39",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=39",
      "sourceLabel": "Prevost, catalogue fabricant AT_DOC_14F, page PDF 39",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 177a4b559e35e27a55491dbf526da3ad34e064ea076d184d939016367995c618. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-tools-p39"
    ],
    "demandExplanation": [
      "october7-tools-prevost-tools-p39"
    ]
  },
  "notes": [
    "TAR 641895 : Longueur publiée 272 mm; Masse publiée 2,14 kg; Entrée d’air R 1/4.",
    "La pression maximale de service est une limite matérielle. Elle ne remplace pas une pression de travail documentée au point de consommation.",
    "Le tableau ne qualifie pas une consommation en charge associée à une pression de travail ; le profil conserve les autres caractéristiques, sans verdict suffisant inventé.",
    "La source est une édition constructeur archivée. La présence au catalogue ne garantit pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
