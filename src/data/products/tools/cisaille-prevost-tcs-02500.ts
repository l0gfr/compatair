import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cisaille-prevost-tcs-02500",
  "slug": "cisaille-prevost-tcs-02500",
  "categoryId": "cisaille",
  "category": "cisaille",
  "label": "Prevost TCS 02500",
  "brand": "Prevost",
  "model": "TCS 02500",
  "mpn": "TCS 02500",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-tcs-cisaille",
    "label": "TCS 02500",
    "distinguishingAttributes": {
      "Référence dans le tableau": "TCS 02500",
      "Longueur publiée": "215 mm",
      "Masse publiée": "1,3 kg",
      "Entrée d’air": "R 1/4",
      "Diamètre intérieur du tuyau recommandé": "10 - 3/8”"
    }
  },
  "image": {
    "src": "/images/products/cisaille-prevost-tcs-02500.svg",
    "alt": "Repères techniques : Prevost TCS 02500",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TCS 02500. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TCS 02500 : Longueur publiée 215 mm; Masse publiée 1,3 kg; Entrée d’air R 1/4.",
    "verifiedFacts": [
      "Référence dans le tableau : TCS 02500.",
      "Longueur publiée : 215 mm.",
      "Masse publiée : 1,3 kg.",
      "Entrée d’air : R 1/4.",
      "Diamètre intérieur du tuyau recommandé : 10 - 3/8”.",
      "Pression maximale de service : 6,2 bar.",
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
      "value": "TCS 02500",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    },
    {
      "label": "Longueur publiée",
      "value": "215 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "1,3 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "R 1/4",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau recommandé",
      "value": "10 - 3/8”",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    },
    {
      "label": "Pression maximale de service",
      "value": "6,2 bar",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "113 L/min à vide",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression maximale de service 6,2 bar ; aucun point de travail apparié à la consommation.",
      "evidenceIds": [
        "october7-tools-prevost-tools-p35"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-tools-p35",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=35",
      "sourceLabel": "Prevost, catalogue fabricant AT_DOC_14F, page PDF 35",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 177a4b559e35e27a55491dbf526da3ad34e064ea076d184d939016367995c618. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-tools-p35"
    ],
    "demandExplanation": [
      "october7-tools-prevost-tools-p35"
    ]
  },
  "notes": [
    "TCS 02500 : Longueur publiée 215 mm; Masse publiée 1,3 kg; Entrée d’air R 1/4.",
    "La pression maximale de service est une limite matérielle. Elle ne remplace pas une pression de travail documentée au point de consommation.",
    "Le tableau ne qualifie pas une consommation en charge associée à une pression de travail ; le profil conserve les autres caractéristiques, sans verdict suffisant inventé.",
    "La source est une édition constructeur archivée. La présence au catalogue ne garantit pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
