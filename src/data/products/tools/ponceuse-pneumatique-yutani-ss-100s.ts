import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-yutani-ss-100s",
  "slug": "ponceuse-pneumatique-yutani-ss-100s",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "Yutani SS-100S",
  "brand": "Yutani",
  "model": "SS-100S",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.9
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-ygs-disque",
    "label": "SS-100S",
    "distinguishingAttributes": {
      "Format de disque publié, diamètre × largeur × alésage": "Diamètre 100 mm, largeur non publiée, alésage 16 mm",
      "Vitesse maximale à vide": "12500 tr/min",
      "Masse sans disque": "0.93 kg",
      "Longueur hors tout": "187 mm",
      "Entrée d’air": "1/4 Rc(PT)"
    }
  },
  "image": {
    "src": "/images/products/ponceuse-pneumatique-yutani-ss-100s.svg",
    "alt": "Repères techniques : Yutani SS-100S",
    "sourceUrl": "https://yutani.co.jp/en/catalog/airG.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani SS-100S. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. SS-100S : Format de disque publié, diamètre × largeur × alésage Diamètre 100 mm, largeur non publiée, alésage 16 mm; Vitesse maximale à vide 12500 tr/min; Masse sans disque 0.93 kg; Longueur hors tout 187 mm.",
    "verifiedFacts": [
      "Format de disque publié, diamètre × largeur × alésage : Diamètre 100 mm, largeur non publiée, alésage 16 mm.",
      "Vitesse maximale à vide : 12500 tr/min.",
      "Masse sans disque : 0.93 kg.",
      "Longueur hors tout : 187 mm.",
      "Entrée d’air : 1/4 Rc(PT).",
      "Diamètre intérieur du tuyau : 9.5 mm.",
      "Consommation publiée dans son unité originale : 0.45 Nm³/min.",
      "Pression dans la source : Air pressure 0.59 MPa."
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
      "label": "Format de disque publié, diamètre × largeur × alésage",
      "value": "Diamètre 100 mm, largeur non publiée, alésage 16 mm",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Vitesse maximale à vide",
      "value": "12500 tr/min",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Masse sans disque",
      "value": "0.93 kg",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "187 mm",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "1/4 Rc(PT)",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau",
      "value": "9.5 mm",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "0.45 Nm³/min",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air pressure 0.59 MPa",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-yutani-grinders-p2",
      "sourceUrl": "https://yutani.co.jp/en/catalog/airG.pdf#page=2",
      "sourceLabel": "Yutani, Air Grinders / Air Sanders, SC-13-03.8, page PDF 2",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 89d13914b7ce6edfe07f2f4ca3a648519136e761287e8f574e7c8b1ef48d0ff5. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-yutani-grinders-p2"
    ],
    "demandExplanation": [
      "october7-tools-yutani-grinders-p2"
    ]
  },
  "notes": [
    "SS-100S : Format de disque publié, diamètre × largeur × alésage Diamètre 100 mm, largeur non publiée, alésage 16 mm; Vitesse maximale à vide 12500 tr/min; Masse sans disque 0.93 kg; Longueur hors tout 187 mm.",
    "La consommation est publiée en Nm³/min. Le document ne donne pas les conditions thermodynamiques de référence permettant de l’assimiler au FAD d’un compresseur.",
    "Le régime de mesure de consommation est distinct de la colonne des rotations à vide ; aucune consommation en charge n’est déduite de la vitesse.",
    "Édition constructeur archivée ; les cotes et références ne garantissent pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
