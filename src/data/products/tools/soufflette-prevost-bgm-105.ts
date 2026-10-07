import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bgm-105",
  "slug": "soufflette-prevost-bgm-105",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BGM 105",
  "brand": "Prevost",
  "model": "BGM 105",
  "mpn": "BGM 105",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-bgm-105",
    "label": "BGM 105",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with medium nozzle (200 mm long)",
      "Net weight (kg)": "0.136 Kg",
      "Length": "0.2 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bgm-105.svg",
    "alt": "Repères techniques : Prevost BGM 105",
    "sourceUrl": "https://www.prevost.eu/blow-gun-medium-nozzle-200-mm-long-49591",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BGM 105. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. BGM 105 : Blow gun with medium nozzle (200 mm long). Length: 0.2 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with medium nozzle (200 mm long).",
      "Net weight (kg) : 0.136 Kg.",
      "Length : 0.2 m.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 340 l/min.",
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
      "value": "Blow gun with medium nozzle (200 mm long)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.136 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
      ]
    },
    {
      "label": "Length",
      "value": "0.2 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "340 l/min",
      "evidenceIds": [
        "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49591-tableau-reference-bgm-105",
      "sourceUrl": "https://www.prevost.eu/blow-gun-medium-nozzle-200-mm-long-49591",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with medium nozzle (200 mm long), Tableau, référence BGM 105",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 b4d7af18413020cb885b7df389e6e8242019e3c5e665e217c1326c64fc49cec7. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-49591-tableau-reference-bgm-105"
    ]
  },
  "notes": [
    "BGM 105 : Blow gun with medium nozzle (200 mm long). Length: 0.2 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
