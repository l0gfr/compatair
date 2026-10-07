import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "graveur-prevost-tes34000",
  "slug": "graveur-prevost-tes34000",
  "categoryId": "graveur",
  "category": "graveur",
  "label": "Prevost TES34000",
  "brand": "Prevost",
  "model": "TES34000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-tes-graveur",
    "label": "TES34000",
    "distinguishingAttributes": {
      "Colonne « vitesse de rotation à vide » publiée": "13000 rpm",
      "Longueur publiée": "160 mm",
      "Masse publiée": "0.24 kg"
    }
  },
  "image": {
    "src": "/images/products/graveur-prevost-tes34000.svg",
    "alt": "Repères techniques : Prevost TES34000",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TES34000. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TES34000 : consommation à vide et fonction graveur identifiées dans la ligne constructeur.",
    "verifiedFacts": [
      "Colonne « vitesse de rotation à vide » publiée : 13000 rpm.",
      "Longueur publiée : 160 mm.",
      "Masse publiée : 0.24 kg.",
      "Consommation publiée dans son unité originale : 30 L/min à vide.",
      "Pression dans la source : Pression maxi de service6.2bar."
    ],
    "limitations": [
      "La consommation publiée est à vide ; elle ne définit pas une demande en charge.",
      "La pression maximale de service6,2bar est une limite matérielle, pas un point de pression de travail associé à cette consommation. Aucun débit chargé ni nominal de travail n’est inventé.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Colonne « vitesse de rotation à vide » publiée",
      "value": "13000 rpm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Longueur publiée",
      "value": "160 mm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "0.24 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "30 L/min à vide",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression maxi de service6.2bar",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-tools-p42",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf#page=42",
      "sourceLabel": "Prevost, catalogue fabricant AT_DOC_14F, page PDF 42",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 177a4b559e35e27a55491dbf526da3ad34e064ea076d184d939016367995c618. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-tools-p42"
    ],
    "demandExplanation": [
      "october7-tools-prevost-tools-p42"
    ]
  },
  "notes": [
    "TES34000 : consommation à vide et fonction graveur identifiées dans la ligne constructeur.",
    "La consommation publiée est à vide ; elle ne définit pas une demande en charge.",
    "La pression maximale de service6,2bar est une limite matérielle, pas un point de pression de travail associé à cette consommation. Aucun débit chargé ni nominal de travail n’est inventé.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
