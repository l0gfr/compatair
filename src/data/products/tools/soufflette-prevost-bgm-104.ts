import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bgm-104",
  "slug": "soufflette-prevost-bgm-104",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BGM 104",
  "brand": "Prevost",
  "model": "BGM 104",
  "mpn": "BGM 104",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-bgm-104",
    "label": "BGM 104",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with short nozzle",
      "Net weight (kg)": "0.112 Kg",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bgm-104.svg",
    "alt": "Repères techniques : Prevost BGM 104",
    "sourceUrl": "https://www.prevost.eu/blow-gun-short-nozzle-49590",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BGM 104. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. BGM 104 : Blow gun with short nozzle. Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with short nozzle.",
      "Net weight (kg) : 0.112 Kg.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 200 l/min.",
      "Pression dans la source : Aucune pression appariée au débit dans le tableau.."
    ],
    "limitations": [
      "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
      "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
      "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Fonction de la fiche fabricant",
      "value": "Blow gun with short nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-104"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.112 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-104"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-104"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "200 l/min",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-104"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-104"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49590-tableau-reference-bgm-104",
      "sourceUrl": "https://www.prevost.eu/blow-gun-short-nozzle-49590",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with short nozzle, Tableau, référence BGM 104",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 ec3ef02aacdf8336c315d1ead1926d191f2c656f7736c8862e8b5556cf189b1a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49590-tableau-reference-bgm-104"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-49590-tableau-reference-bgm-104"
    ]
  },
  "notes": [
    "BGM 104 : Blow gun with short nozzle. Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
