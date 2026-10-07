import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-exair-1219ss-3",
  "slug": "soufflette-exair-1219ss-3",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "EXAIR 1219SS-3",
  "brand": "EXAIR",
  "model": "1219SS-3",
  "mpn": "1219SS-3",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "exair-super-blast",
    "label": "1219SS-3",
    "distinguishingAttributes": {
      "Buse montée publiée": "1008SS",
      "Consommation publiée, unités originales": "57 SCFM / 1614 SLPM",
      "Famille de poignée": "Super Blast",
      "Matériau de buse publié": "acier inoxydable",
      "Rallonge montée publiée": "3 foot"
    }
  },
  "image": {
    "src": "/images/products/soufflette-exair-1219ss-3.svg",
    "alt": "Repères techniques : EXAIR 1219SS-3",
    "sourceUrl": "https://www.exair.com/media/productcms/pdf/SafetyAirGuns1_1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "EXAIR 1219SS-3. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 1219SS-3 : poignée Super Blast, buse 1008SS; Matériau de buse publié acier inoxydable; Rallonge montée publiée 3 foot",
    "verifiedFacts": [
      "Buse montée publiée : 1008SS.",
      "Consommation publiée, unités originales : 57 SCFM / 1614 SLPM.",
      "Famille de poignée : Super Blast.",
      "Matériau de buse publié : acier inoxydable.",
      "Rallonge montée publiée : 3 foot.",
      "Consommation publiée dans son unité originale : 57 SCFM / 1614 SLPM.",
      "Pression dans la source : Pression du point de mesure non publiée dans la section de ce modèle.."
    ],
    "limitations": [
      "Les débits sont conservés en SCFM et SLPM dans leurs conditions de volume standard publiées ; aucune conversion silencieuse vers un FAD universel.",
      "Le catalogue ne qualifie pas explicitement l’ouverture de commande pendant la mesure. Le point publié ne devient pas une consommation maximale ou continue pour le moteur.",
      "La pression du point publié ne constitue pas une pression maximale admissible.",
      "La présence dans le catalogue constructeur ne garantit pas la disponibilité actuelle en France.",
      "La consommation provient du tableau de famille des ensembles explicitement listés. Une mesure séparée pour chaque longueur n’est pas affirmée.",
      "La section1219SS ne répète pas la pression du point de mesure. Les80 PSIG d’autres références ne lui sont pas transférés.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse montée publiée",
      "value": "1008SS",
      "evidenceIds": [
        "october7-tools-exair-guns-p16"
      ]
    },
    {
      "label": "Consommation publiée, unités originales",
      "value": "57 SCFM / 1614 SLPM",
      "evidenceIds": [
        "october7-tools-exair-guns-p16"
      ]
    },
    {
      "label": "Famille de poignée",
      "value": "Super Blast",
      "evidenceIds": [
        "october7-tools-exair-guns-p16"
      ]
    },
    {
      "label": "Matériau de buse publié",
      "value": "acier inoxydable",
      "evidenceIds": [
        "october7-tools-exair-guns-p16"
      ]
    },
    {
      "label": "Rallonge montée publiée",
      "value": "3 foot",
      "evidenceIds": [
        "october7-tools-exair-guns-p16"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "57 SCFM / 1614 SLPM",
      "evidenceIds": [
        "october7-tools-exair-guns-p16"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression du point de mesure non publiée dans la section de ce modèle.",
      "evidenceIds": [
        "october7-tools-exair-guns-p16"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-exair-guns-p16",
      "sourceUrl": "https://www.exair.com/media/productcms/pdf/SafetyAirGuns1_1.pdf#page=16",
      "sourceLabel": "EXAIR Safety Air Guns, catalogue constructeur, pages techniques 117 à129, page PDF 16",
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
      "october7-tools-exair-guns-p16",
      "october7-tools-exair-scfm-conditions-p1",
      "october7-tools-exair-scfm-faq-p1"
    ],
    "demandExplanation": [
      "october7-tools-exair-guns-p16",
      "october7-tools-exair-scfm-conditions-p1",
      "october7-tools-exair-scfm-faq-p1"
    ]
  },
  "notes": [
    "1219SS-3 : poignée Super Blast, buse 1008SS; Matériau de buse publié acier inoxydable; Rallonge montée publiée 3 foot",
    "Les débits sont conservés en SCFM et SLPM dans leurs conditions de volume standard publiées ; aucune conversion silencieuse vers un FAD universel.",
    "Le catalogue ne qualifie pas explicitement l’ouverture de commande pendant la mesure. Le point publié ne devient pas une consommation maximale ou continue pour le moteur.",
    "La pression du point publié ne constitue pas une pression maximale admissible.",
    "La présence dans le catalogue constructeur ne garantit pas la disponibilité actuelle en France.",
    "La consommation provient du tableau de famille des ensembles explicitement listés. Une mesure séparée pour chaque longueur n’est pas affirmée.",
    "La section1219SS ne répète pas la pression du point de mesure. Les80 PSIG d’autres références ne lui sont pas transférés.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
