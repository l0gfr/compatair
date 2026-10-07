import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-yutani-hpw-6alphasd",
  "slug": "visseuse-yutani-hpw-6alphasd",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Yutani HPW-6αSD",
  "brand": "Yutani",
  "model": "HPW-6αSD",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 4.9,
    "max": 5.9
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-hpw-hydro-impulsions",
    "label": "HPW-6αSD",
    "distinguishingAttributes": {
      "Diamètres de boulons applicables": "M6–M8",
      "Couple applicable à 0,49 MPa": "49 Nm",
      "Couple applicable à 0,59 MPa": "55 Nm",
      "Vitesse à vide à 0,49 / 0,59 MPa": "5600 / 5900 tr/min",
      "Entraînement publié": "HEX6.35"
    }
  },
  "image": {
    "src": "/images/products/visseuse-yutani-hpw-6alphasd.svg",
    "alt": "Repères techniques : Yutani HPW-6αSD",
    "sourceUrl": "https://yutani.co.jp/en/catalog/HPW.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani HPW-6αSD. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. HPW-6αSD : Diamètres de boulons applicables M6–M8; Couple applicable à 0,49 MPa 49 Nm; Couple applicable à 0,59 MPa 55 Nm; Vitesse à vide à 0,49 / 0,59 MPa 5600 / 5900 tr/min.",
    "verifiedFacts": [
      "Diamètres de boulons applicables : M6–M8.",
      "Couple applicable à 0,49 MPa : 49 Nm.",
      "Couple applicable à 0,59 MPa : 55 Nm.",
      "Vitesse à vide à 0,49 / 0,59 MPa : 5600 / 5900 tr/min.",
      "Entraînement publié : HEX6.35.",
      "Longueur hors tout : 256 mm.",
      "Masse approximative : 1.16 kg.",
      "Diamètre intérieur du tuyau : 9,5 mm.",
      "Entrée d’air : 1/4 Rc(PT).",
      "Consommation publiée dans son unité originale : 0.35 Nm³/min.",
      "Pression dans la source : Air Pressure : colonnes 0.49 MPa et 0.59 MPa pour couple et vitesse à vide ; consommation unique non appariée à ces deux pressions.."
    ],
    "limitations": [
      "La consommation est publiée en Nm³/min. Le document ne donne pas les conditions thermodynamiques de référence permettant de l’assimiler au FAD d’un compresseur.",
      "Le régime de mesure de consommation est distinct de la colonne des rotations à vide ; aucune consommation en charge n’est déduite de la vitesse.",
      "Édition constructeur archivée ; les cotes et références ne garantissent pas une disponibilité marchande actuelle.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Diamètres de boulons applicables",
      "value": "M6–M8",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Couple applicable à 0,49 MPa",
      "value": "49 Nm",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Couple applicable à 0,59 MPa",
      "value": "55 Nm",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Vitesse à vide à 0,49 / 0,59 MPa",
      "value": "5600 / 5900 tr/min",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Entraînement publié",
      "value": "HEX6.35",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "256 mm",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Masse approximative",
      "value": "1.16 kg",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau",
      "value": "9,5 mm",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "1/4 Rc(PT)",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "0.35 Nm³/min",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air Pressure : colonnes 0.49 MPa et 0.59 MPa pour couple et vitesse à vide ; consommation unique non appariée à ces deux pressions.",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-yutani-pulse-p1",
      "sourceUrl": "https://yutani.co.jp/en/catalog/HPW.pdf#page=1",
      "sourceLabel": "Yutani, HPW-α Series, SC-12-01-10, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 41af82bd5d378f546fb37231108b021a24d5dbbb59c91d5833a0b50f10f9633a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-yutani-pulse-p1"
    ],
    "demandExplanation": [
      "october7-tools-yutani-pulse-p1"
    ]
  },
  "notes": [
    "HPW-6αSD : Diamètres de boulons applicables M6–M8; Couple applicable à 0,49 MPa 49 Nm; Couple applicable à 0,59 MPa 55 Nm; Vitesse à vide à 0,49 / 0,59 MPa 5600 / 5900 tr/min.",
    "La consommation est publiée en Nm³/min. Le document ne donne pas les conditions thermodynamiques de référence permettant de l’assimiler au FAD d’un compresseur.",
    "Le régime de mesure de consommation est distinct de la colonne des rotations à vide ; aucune consommation en charge n’est déduite de la vitesse.",
    "Édition constructeur archivée ; les cotes et références ne garantissent pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
