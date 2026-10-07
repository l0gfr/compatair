import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bgm-113",
  "slug": "soufflette-prevost-bgm-113",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BGM 113",
  "brand": "Prevost",
  "model": "BGM 113",
  "mpn": "BGM 113",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-bgm-113",
    "label": "BGM 113",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "High-flow blow gun",
      "Net weight (kg)": "0.156 Kg",
      "Length": "0.076 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bgm-113.svg",
    "alt": "Repères techniques : Prevost BGM 113",
    "sourceUrl": "https://www.prevost.eu/high-flow-blow-gun-49593",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BGM 113. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. BGM 113 : High-flow blow gun. Length: 0.076 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : High-flow blow gun.",
      "Net weight (kg) : 0.156 Kg.",
      "Length : 0.076 m.",
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
      "value": "High-flow blow gun",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.156 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
      ]
    },
    {
      "label": "Length",
      "value": "0.076 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "200 l/min",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49593-tableau-reference-bgm-113",
      "sourceUrl": "https://www.prevost.eu/high-flow-blow-gun-49593",
      "sourceLabel": "Prevost, fiche fabricant High-flow blow gun, Tableau, référence BGM 113",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5d028379bf103312ffd50bb0647bd9f3120a38273fe590ffff48594d2abbe0cc. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-49593-tableau-reference-bgm-113"
    ]
  },
  "notes": [
    "BGM 113 : High-flow blow gun. Length: 0.076 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
