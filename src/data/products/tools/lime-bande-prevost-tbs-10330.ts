import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "lime-bande-prevost-tbs-10330",
  "slug": "lime-bande-prevost-tbs-10330",
  "categoryId": "lime-bande",
  "category": "lime-bande",
  "label": "Prevost TBS 10330",
  "brand": "Prevost",
  "model": "TBS 10330",
  "mpn": "TBS 10330",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-tbs-lime-bande",
    "label": "TBS 10330",
    "distinguishingAttributes": {
      "Référence dans le tableau": "TBS 10330",
      "Longueur publiée": "320 mm",
      "Masse publiée": "0,95 kg",
      "Entrée d’air": "R 1/4",
      "Diamètre intérieur du tuyau recommandé": "10 - 3/8”"
    }
  },
  "image": {
    "src": "/images/products/lime-bande-prevost-tbs-10330.svg",
    "alt": "Repères techniques : Prevost TBS 10330",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TBS 10330. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TBS 10330 : Longueur publiée 320 mm; Masse publiée 0,95 kg; Entrée d’air R 1/4.",
    "verifiedFacts": [
      "Référence dans le tableau : TBS 10330.",
      "Longueur publiée : 320 mm.",
      "Masse publiée : 0,95 kg.",
      "Entrée d’air : R 1/4.",
      "Diamètre intérieur du tuyau recommandé : 10 - 3/8”.",
      "Pression maximale de service : 6,2 bar.",
      "Format de travail publié : 10 x 330.",
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
      "value": "TBS 10330",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Longueur publiée",
      "value": "320 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "0,95 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "R 1/4",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau recommandé",
      "value": "10 - 3/8”",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Pression maximale de service",
      "value": "6,2 bar",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Format de travail publié",
      "value": "10 x 330",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "113 L/min à vide",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression maximale de service 6,2 bar ; aucun point de travail apparié à la consommation.",
      "evidenceIds": [
        "october7-tools-prevost-tools-p20"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-tools-p20",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=20",
      "sourceLabel": "Prevost, catalogue fabricant AT_DOC_14F, page PDF 20",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 177a4b559e35e27a55491dbf526da3ad34e064ea076d184d939016367995c618. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-tools-p20"
    ],
    "demandExplanation": [
      "october7-tools-prevost-tools-p20"
    ]
  },
  "notes": [
    "TBS 10330 : Longueur publiée 320 mm; Masse publiée 0,95 kg; Entrée d’air R 1/4.",
    "La pression maximale de service est une limite matérielle. Elle ne remplace pas une pression de travail documentée au point de consommation.",
    "Le tableau ne qualifie pas une consommation en charge associée à une pression de travail ; le profil conserve les autres caractéristiques, sans verdict suffisant inventé.",
    "La source est une édition constructeur archivée. La présence au catalogue ne garantit pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
