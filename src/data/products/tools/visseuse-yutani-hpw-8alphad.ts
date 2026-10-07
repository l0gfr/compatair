import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-yutani-hpw-8alphad",
  "slug": "visseuse-yutani-hpw-8alphad",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Yutani HPW-8αD",
  "brand": "Yutani",
  "model": "HPW-8αD",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 4.9,
    "max": 5.9
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-hpw-hydro-impulsions",
    "label": "HPW-8αD",
    "distinguishingAttributes": {
      "Diamètres de boulons applicables": "M8",
      "Couple applicable à 0,49 MPa": "64 Nm",
      "Couple applicable à 0,59 MPa": "69 Nm",
      "Vitesse à vide à 0,49 / 0,59 MPa": "6600 / 6800 tr/min",
      "Entraînement publié": "HEX6.35"
    }
  },
  "image": {
    "src": "/images/products/visseuse-yutani-hpw-8alphad.svg",
    "alt": "Repères techniques : Yutani HPW-8αD",
    "sourceUrl": "https://yutani.co.jp/en/catalog/HPW.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani HPW-8αD. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. HPW-8αD : Diamètres de boulons applicables M8; Couple applicable à 0,49 MPa 64 Nm; Couple applicable à 0,59 MPa 69 Nm; Vitesse à vide à 0,49 / 0,59 MPa 6600 / 6800 tr/min.",
    "verifiedFacts": [
      "Diamètres de boulons applicables : M8.",
      "Couple applicable à 0,49 MPa : 64 Nm.",
      "Couple applicable à 0,59 MPa : 69 Nm.",
      "Vitesse à vide à 0,49 / 0,59 MPa : 6600 / 6800 tr/min.",
      "Entraînement publié : HEX6.35.",
      "Longueur hors tout : 185 mm.",
      "Masse approximative : 1.65 kg.",
      "Diamètre intérieur du tuyau : 9,5 mm.",
      "Entrée d’air : 1/4 Rc(PT).",
      "Consommation publiée dans son unité originale : 0.5 Nm³/min.",
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
      "value": "M8",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Couple applicable à 0,49 MPa",
      "value": "64 Nm",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Couple applicable à 0,59 MPa",
      "value": "69 Nm",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Vitesse à vide à 0,49 / 0,59 MPa",
      "value": "6600 / 6800 tr/min",
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
      "value": "185 mm",
      "evidenceIds": [
        "october7-tools-yutani-pulse-p1"
      ]
    },
    {
      "label": "Masse approximative",
      "value": "1.65 kg",
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
      "value": "0.5 Nm³/min",
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
    "HPW-8αD : Diamètres de boulons applicables M8; Couple applicable à 0,49 MPa 64 Nm; Couple applicable à 0,59 MPa 69 Nm; Vitesse à vide à 0,49 / 0,59 MPa 6600 / 6800 tr/min.",
    "La consommation est publiée en Nm³/min. Le document ne donne pas les conditions thermodynamiques de référence permettant de l’assimiler au FAD d’un compresseur.",
    "Le régime de mesure de consommation est distinct de la colonne des rotations à vide ; aucune consommation en charge n’est déduite de la vitesse.",
    "Édition constructeur archivée ; les cotes et références ne garantissent pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
