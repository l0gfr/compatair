import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-prevost-tah-1151900",
  "slug": "burineur-prevost-tah-1151900",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Prevost TAH 1151900",
  "brand": "Prevost",
  "model": "TAH 1151900",
  "mpn": "TAH 1151900",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-tah-burineur",
    "label": "TAH 1151900",
    "distinguishingAttributes": {
      "Référence dans le tableau": "TAH 1151900",
      "Longueur publiée": "460 mm",
      "Masse publiée": "9,5 kg",
      "Entrée d’air": "R 3/8",
      "Diamètre intérieur du tuyau recommandé": "13 - 1/2”"
    }
  },
  "image": {
    "src": "/images/products/burineur-prevost-tah-1151900.svg",
    "alt": "Repères techniques : Prevost TAH 1151900",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TAH 1151900. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TAH 1151900 : Longueur publiée 460 mm; Masse publiée 9,5 kg; Entrée d’air R 3/8.",
    "verifiedFacts": [
      "Référence dans le tableau : TAH 1151900.",
      "Longueur publiée : 460 mm.",
      "Masse publiée : 9,5 kg.",
      "Entrée d’air : R 3/8.",
      "Diamètre intérieur du tuyau recommandé : 13 - 1/2”.",
      "Pression maximale de service : 6,2 bar.",
      "Consommation publiée dans son unité originale : 158 L/min à vide.",
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
      "value": "TAH 1151900",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    },
    {
      "label": "Longueur publiée",
      "value": "460 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "9,5 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "R 3/8",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau recommandé",
      "value": "13 - 1/2”",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    },
    {
      "label": "Pression maximale de service",
      "value": "6,2 bar",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "158 L/min à vide",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression maximale de service 6,2 bar ; aucun point de travail apparié à la consommation.",
      "evidenceIds": [
        "october7-tools-prevost-tools-p32"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-tools-p32",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=32",
      "sourceLabel": "Prevost, catalogue fabricant AT_DOC_14F, page PDF 32",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 177a4b559e35e27a55491dbf526da3ad34e064ea076d184d939016367995c618. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-tools-p32"
    ],
    "demandExplanation": [
      "october7-tools-prevost-tools-p32"
    ]
  },
  "notes": [
    "TAH 1151900 : Longueur publiée 460 mm; Masse publiée 9,5 kg; Entrée d’air R 3/8.",
    "La pression maximale de service est une limite matérielle. Elle ne remplace pas une pression de travail documentée au point de consommation.",
    "Le tableau ne qualifie pas une consommation en charge associée à une pression de travail ; le profil conserve les autres caractéristiques, sans verdict suffisant inventé.",
    "La source est une édition constructeur archivée. La présence au catalogue ne garantit pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
