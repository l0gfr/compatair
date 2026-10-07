import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-exair-hp1629ss",
  "slug": "soufflette-exair-hp1629ss",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "EXAIR HP1629SS",
  "brand": "EXAIR",
  "model": "HP1629SS",
  "mpn": "HP1629SS",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.5
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "exair-variblast-compact",
    "label": "HP1629SS",
    "distinguishingAttributes": {
      "Buse montée publiée": "HP1126SS",
      "Consommation publiée, unités originales": "17.5 SCFM / 495 SLPM",
      "Famille de poignée": "VariBlast Compact",
      "Matériau de buse publié": "acier inoxydable"
    }
  },
  "image": {
    "src": "/images/products/soufflette-exair-hp1629ss.svg",
    "alt": "Repères techniques : EXAIR HP1629SS",
    "sourceUrl": "https://www.exair.com/media/productcms/pdf/SafetyAirGuns1_1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "EXAIR HP1629SS. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. HP1629SS : poignée VariBlast Compact, buse HP1126SS; Matériau de buse publié acier inoxydable",
    "verifiedFacts": [
      "Buse montée publiée : HP1126SS.",
      "Consommation publiée, unités originales : 17.5 SCFM / 495 SLPM.",
      "Famille de poignée : VariBlast Compact.",
      "Matériau de buse publié : acier inoxydable.",
      "Consommation publiée dans son unité originale : 17.5 SCFM / 495 SLPM.",
      "Pression dans la source : 80 PSIG / 5.5 BAR, point de mesure publié."
    ],
    "limitations": [
      "Les débits sont conservés en SCFM et SLPM dans leurs conditions de volume standard publiées ; aucune conversion silencieuse vers un FAD universel.",
      "Le catalogue ne qualifie pas explicitement l’ouverture de commande pendant la mesure. Le point publié ne devient pas une consommation maximale ou continue pour le moteur.",
      "La pression du point publié ne constitue pas une pression maximale admissible.",
      "La présence dans le catalogue constructeur ne garantit pas la disponibilité actuelle en France.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse montée publiée",
      "value": "HP1126SS",
      "evidenceIds": [
        "october7-tools-exair-guns-p10"
      ]
    },
    {
      "label": "Consommation publiée, unités originales",
      "value": "17.5 SCFM / 495 SLPM",
      "evidenceIds": [
        "october7-tools-exair-guns-p10"
      ]
    },
    {
      "label": "Famille de poignée",
      "value": "VariBlast Compact",
      "evidenceIds": [
        "october7-tools-exair-guns-p10"
      ]
    },
    {
      "label": "Matériau de buse publié",
      "value": "acier inoxydable",
      "evidenceIds": [
        "october7-tools-exair-guns-p10"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "17.5 SCFM / 495 SLPM",
      "evidenceIds": [
        "october7-tools-exair-guns-p10"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "80 PSIG / 5.5 BAR, point de mesure publié",
      "evidenceIds": [
        "october7-tools-exair-guns-p10"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-exair-guns-p10",
      "sourceUrl": "https://www.exair.com/media/productcms/pdf/SafetyAirGuns1_1.pdf#page=10",
      "sourceLabel": "EXAIR Safety Air Guns, catalogue constructeur, pages techniques 117 à129, page PDF 10",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 93f3bdd5cd0ec29fe4f11df513290e73e75d958ff60967bf528d13f9372c80e7. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-exair-scfm-conditions-p1",
      "sourceUrl": "https://blog.exair.com/2023/01/05/whats-with-the-s-in-scfm/",
      "sourceLabel": "EXAIR définition des conditions SCFM",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8d78c6d6ec1900d1460a7c8ac71d157c029b06de4194fa5c3f703488457a6b16. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-exair-scfm-faq-p1",
      "sourceUrl": "https://www.exair.com/knowledgebase/faq/index/?catid=346",
      "sourceLabel": "EXAIR FAQ, définition SCFM",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 33211857e839ecd495e29c1b48445a3c6d0071c2c5eec63903214bb839018649. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-exair-guns-p10",
      "october7-tools-exair-scfm-conditions-p1",
      "october7-tools-exair-scfm-faq-p1"
    ],
    "demandExplanation": [
      "october7-tools-exair-guns-p10",
      "october7-tools-exair-scfm-conditions-p1",
      "october7-tools-exair-scfm-faq-p1"
    ]
  },
  "notes": [
    "HP1629SS : poignée VariBlast Compact, buse HP1126SS; Matériau de buse publié acier inoxydable",
    "Les débits sont conservés en SCFM et SLPM dans leurs conditions de volume standard publiées ; aucune conversion silencieuse vers un FAD universel.",
    "Le catalogue ne qualifie pas explicitement l’ouverture de commande pendant la mesure. Le point publié ne devient pas une consommation maximale ou continue pour le moteur.",
    "La pression du point publié ne constitue pas une pression maximale admissible.",
    "La présence dans le catalogue constructeur ne garantit pas la disponibilité actuelle en France.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
