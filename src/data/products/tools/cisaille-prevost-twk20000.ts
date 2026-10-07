import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "cisaille-prevost-twk20000",
  "slug": "cisaille-prevost-twk20000",
  "categoryId": "cisaille",
  "category": "cisaille",
  "label": "Prevost TWK20000",
  "brand": "Prevost",
  "model": "TWK20000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-twk-couteau-pare-brise",
    "label": "TWK20000",
    "distinguishingAttributes": {
      "Type de l’outil": "Couteau pneumatique pour joints de colle de pare-brise",
      "Cadence de coupe publiée": "20000 bpm",
      "Puissance publiée": "370 W",
      "Masse publiée": "1 kg"
    }
  },
  "image": {
    "src": "/images/products/cisaille-prevost-twk20000.svg",
    "alt": "Repères techniques : Prevost TWK20000",
    "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-11/AT_DOC_14F.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost TWK20000. La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge. TWK20000 : consommation à vide et fonction cisaille identifiées dans la ligne constructeur.",
    "verifiedFacts": [
      "Type de l’outil : Couteau pneumatique pour joints de colle de pare-brise.",
      "Cadence de coupe publiée : 20000 bpm.",
      "Puissance publiée : 370 W.",
      "Masse publiée : 1 kg.",
      "Consommation publiée dans son unité originale : 113 L/min à vide.",
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
      "label": "Type de l’outil",
      "value": "Couteau pneumatique pour joints de colle de pare-brise",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Cadence de coupe publiée",
      "value": "20000 bpm",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "370 W",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "1 kg",
      "evidenceIds": [
        "october7-tools-prevost-tools-p42"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "113 L/min à vide",
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
    "TWK20000 : consommation à vide et fonction cisaille identifiées dans la ligne constructeur.",
    "La consommation publiée est à vide ; elle ne définit pas une demande en charge.",
    "La pression maximale de service6,2bar est une limite matérielle, pas un point de pression de travail associé à cette consommation. Aucun débit chargé ni nominal de travail n’est inventé.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
