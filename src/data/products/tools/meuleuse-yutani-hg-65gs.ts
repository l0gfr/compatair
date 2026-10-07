import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-yutani-hg-65gs",
  "slug": "meuleuse-yutani-hg-65gs",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Yutani HG-65GS",
  "brand": "Yutani",
  "model": "HG-65GS",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.9
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-hg-meule",
    "label": "HG-65GS",
    "distinguishingAttributes": {
      "Format de disque publié, diamètre × largeur × alésage": "65×13×9.5 mm",
      "Vitesse maximale à vide": "14600 tr/min",
      "Masse sans disque": "1.3 kg",
      "Longueur hors tout": "292 mm",
      "Entrée d’air": "1/4 Rc(PT)"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-yutani-hg-65gs.svg",
    "alt": "Repères techniques : Yutani HG-65GS",
    "sourceUrl": "https://yutani.co.jp/en/catalog/airG.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani HG-65GS. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. HG-65GS : Format de disque publié, diamètre × largeur × alésage 65×13×9.5 mm; Vitesse maximale à vide 14600 tr/min; Masse sans disque 1.3 kg; Longueur hors tout 292 mm.",
    "verifiedFacts": [
      "Format de disque publié, diamètre × largeur × alésage : 65×13×9.5 mm.",
      "Vitesse maximale à vide : 14600 tr/min.",
      "Masse sans disque : 1.3 kg.",
      "Longueur hors tout : 292 mm.",
      "Entrée d’air : 1/4 Rc(PT).",
      "Diamètre intérieur du tuyau : 9.5 mm.",
      "Filetage de broche : W3/8-16.",
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
      "value": "65×13×9.5 mm",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Vitesse maximale à vide",
      "value": "14600 tr/min",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Masse sans disque",
      "value": "1.3 kg",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "292 mm",
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
      "label": "Filetage de broche",
      "value": "W3/8-16",
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
    "HG-65GS : Format de disque publié, diamètre × largeur × alésage 65×13×9.5 mm; Vitesse maximale à vide 14600 tr/min; Masse sans disque 1.3 kg; Longueur hors tout 292 mm.",
    "La consommation est publiée en Nm³/min. Le document ne donne pas les conditions thermodynamiques de référence permettant de l’assimiler au FAD d’un compresseur.",
    "Le régime de mesure de consommation est distinct de la colonne des rotations à vide ; aucune consommation en charge n’est déduite de la vitesse.",
    "Édition constructeur archivée ; les cotes et références ne garantissent pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
