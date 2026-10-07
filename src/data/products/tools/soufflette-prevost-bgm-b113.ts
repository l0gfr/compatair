import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bgm-b113",
  "slug": "soufflette-prevost-bgm-b113",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BGM B113",
  "brand": "Prevost",
  "model": "BGM B113",
  "mpn": "BGM B113",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-bgm-b113",
    "label": "BGM B113",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "High-flow blow gun",
      "Net weight (kg)": "0.055 Kg",
      "BSPT male thread": "G1/4",
      "Length": "0.076 m"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bgm-b113.svg",
    "alt": "Repères techniques : Prevost BGM B113",
    "sourceUrl": "https://www.prevost.eu/high-flow-blow-gun-49593",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BGM B113. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. BGM B113 : High-flow blow gun. Length: 0.076 m; Female thread: .",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : High-flow blow gun.",
      "Net weight (kg) : 0.055 Kg.",
      "BSPT male thread : G1/4.",
      "Length : 0.076 m.",
      "Consommation publiée dans son unité originale : Non publiée dans la fiche de cet assemblage..",
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
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.055 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
      ]
    },
    {
      "label": "BSPT male thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
      ]
    },
    {
      "label": "Length",
      "value": "0.076 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Non publiée dans la fiche de cet assemblage.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113",
      "sourceUrl": "https://www.prevost.eu/high-flow-blow-gun-49593",
      "sourceLabel": "Prevost, fiche fabricant High-flow blow gun, Tableau, référence BGM B113",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5d028379bf103312ffd50bb0647bd9f3120a38273fe590ffff48594d2abbe0cc. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-49593-tableau-reference-bgm-b113"
    ]
  },
  "notes": [
    "BGM B113 : High-flow blow gun. Length: 0.076 m; Female thread: .",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
