import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-exair-1260",
  "slug": "soufflette-exair-1260",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "EXAIR 1260",
  "brand": "EXAIR",
  "model": "1260",
  "mpn": "1260",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.5
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "exair-soft-grip",
    "label": "1260",
    "distinguishingAttributes": {
      "Buse montée publiée": "1106",
      "Consommation publiée, unités originales": "60 SCFM / 1699 SLPM",
      "Famille de poignée": "Soft Grip"
    }
  },
  "image": {
    "src": "/images/products/soufflette-exair-1260.svg",
    "alt": "Repères techniques : EXAIR 1260",
    "sourceUrl": "https://www.exair.com/media/productcms/pdf/SafetyAirGuns1_1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "EXAIR 1260. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 1260 : poignée Soft Grip, buse 1106, consommation publiée 60 SCFM / 1699 SLPM.",
    "verifiedFacts": [
      "Buse montée publiée : 1106.",
      "Consommation publiée, unités originales : 60 SCFM / 1699 SLPM.",
      "Famille de poignée : Soft Grip.",
      "Consommation publiée dans son unité originale : 60 SCFM / 1699 SLPM.",
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
      "value": "1106",
      "evidenceIds": [
        "october7-tools-exair-guns-p13"
      ]
    },
    {
      "label": "Consommation publiée, unités originales",
      "value": "60 SCFM / 1699 SLPM",
      "evidenceIds": [
        "october7-tools-exair-guns-p13"
      ]
    },
    {
      "label": "Famille de poignée",
      "value": "Soft Grip",
      "evidenceIds": [
        "october7-tools-exair-guns-p13"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "60 SCFM / 1699 SLPM",
      "evidenceIds": [
        "october7-tools-exair-guns-p13"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "80 PSIG / 5.5 BAR, point de mesure publié",
      "evidenceIds": [
        "october7-tools-exair-guns-p13"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-exair-guns-p13",
      "sourceUrl": "https://www.exair.com/media/productcms/pdf/SafetyAirGuns1_1.pdf#page=13",
      "sourceLabel": "EXAIR Safety Air Guns, catalogue constructeur, pages techniques 117 à129, page PDF 13",
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
      "october7-tools-exair-guns-p13",
      "october7-tools-exair-scfm-conditions-p1",
      "october7-tools-exair-scfm-faq-p1"
    ],
    "demandExplanation": [
      "october7-tools-exair-guns-p13",
      "october7-tools-exair-scfm-conditions-p1",
      "october7-tools-exair-scfm-faq-p1"
    ]
  },
  "notes": [
    "1260 : poignée Soft Grip, buse 1106, consommation publiée 60 SCFM / 1699 SLPM.",
    "Les débits sont conservés en SCFM et SLPM dans leurs conditions de volume standard publiées ; aucune conversion silencieuse vers un FAD universel.",
    "Le catalogue ne qualifie pas explicitement l’ouverture de commande pendant la mesure. Le point publié ne devient pas une consommation maximale ou continue pour le moteur.",
    "La pression du point publié ne constitue pas une pression maximale admissible.",
    "La présence dans le catalogue constructeur ne garantit pas la disponibilité actuelle en France.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
