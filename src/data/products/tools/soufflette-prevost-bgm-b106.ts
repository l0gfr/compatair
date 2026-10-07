import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bgm-b106",
  "slug": "soufflette-prevost-bgm-b106",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BGM B106",
  "brand": "Prevost",
  "model": "BGM B106",
  "mpn": "BGM B106",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-bgm-b106",
    "label": "BGM B106",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with extra long nozzle (300 mm)",
      "Net weight (kg)": "0.050 Kg",
      "BSPT male thread": "G1/4",
      "Length": "0.3 m"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bgm-b106.svg",
    "alt": "Repères techniques : Prevost BGM B106",
    "sourceUrl": "https://www.prevost.eu/blow-gun-extra-long-nozzle-300-mm-49592",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BGM B106. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. BGM B106 : Blow gun with extra long nozzle (300 mm). Length: 0.3 m; Female thread: .",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with extra long nozzle (300 mm).",
      "Net weight (kg) : 0.050 Kg.",
      "BSPT male thread : G1/4.",
      "Length : 0.3 m.",
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
      "value": "Blow gun with extra long nozzle (300 mm)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.050 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
      ]
    },
    {
      "label": "BSPT male thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
      ]
    },
    {
      "label": "Length",
      "value": "0.3 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Non publiée dans la fiche de cet assemblage.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106",
      "sourceUrl": "https://www.prevost.eu/blow-gun-extra-long-nozzle-300-mm-49592",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with extra long nozzle (300 mm), Tableau, référence BGM B106",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 10f530477c4797bcd211e2634718462d0171469e0dcbd1a91cd81c2065b85f35. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-49592-tableau-reference-bgm-b106"
    ]
  },
  "notes": [
    "BGM B106 : Blow gun with extra long nozzle (300 mm). Length: 0.3 m; Female thread: .",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
