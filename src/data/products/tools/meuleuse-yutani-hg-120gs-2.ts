import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-yutani-hg-120gs-2",
  "slug": "meuleuse-yutani-hg-120gs-2",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Yutani HG-120GS-2",
  "brand": "Yutani",
  "model": "HG-120GS-2",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.9
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-hg-meule",
    "label": "HG-120GS-2",
    "distinguishingAttributes": {
      "Format de disque publié, diamètre × largeur × alésage": "125×19×12.7 mm",
      "Vitesse maximale à vide": "7600 tr/min",
      "Masse sans disque": "3.06 kg",
      "Longueur hors tout": "418 mm",
      "Entrée d’air": "3/8 Rc(PT)"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-yutani-hg-120gs-2.svg",
    "alt": "Repères techniques : Yutani HG-120GS-2",
    "sourceUrl": "https://yutani.co.jp/en/catalog/airG.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani HG-120GS-2. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. HG-120GS-2 : Format de disque publié, diamètre × largeur × alésage 125×19×12.7 mm; Vitesse maximale à vide 7600 tr/min; Masse sans disque 3.06 kg; Longueur hors tout 418 mm.",
    "verifiedFacts": [
      "Format de disque publié, diamètre × largeur × alésage : 125×19×12.7 mm.",
      "Vitesse maximale à vide : 7600 tr/min.",
      "Masse sans disque : 3.06 kg.",
      "Longueur hors tout : 418 mm.",
      "Entrée d’air : 3/8 Rc(PT).",
      "Diamètre intérieur du tuyau : 12.7 mm.",
      "Filetage de broche : W1/2-12.",
      "Consommation publiée dans son unité originale : 0.6 Nm³/min.",
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
      "value": "125×19×12.7 mm",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Vitesse maximale à vide",
      "value": "7600 tr/min",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Masse sans disque",
      "value": "3.06 kg",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "418 mm",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "3/8 Rc(PT)",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Diamètre intérieur du tuyau",
      "value": "12.7 mm",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Filetage de broche",
      "value": "W1/2-12",
      "evidenceIds": [
        "october7-tools-yutani-grinders-p2"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "0.6 Nm³/min",
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
    "HG-120GS-2 : Format de disque publié, diamètre × largeur × alésage 125×19×12.7 mm; Vitesse maximale à vide 7600 tr/min; Masse sans disque 3.06 kg; Longueur hors tout 418 mm.",
    "La consommation est publiée en Nm³/min. Le document ne donne pas les conditions thermodynamiques de référence permettant de l’assimiler au FAD d’un compresseur.",
    "Le régime de mesure de consommation est distinct de la colonne des rotations à vide ; aucune consommation en charge n’est déduite de la vitesse.",
    "Édition constructeur archivée ; les cotes et références ne garantissent pas une disponibilité marchande actuelle.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
