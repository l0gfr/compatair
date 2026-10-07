import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-cbg-06sil",
  "slug": "soufflette-prevost-cbg-06sil",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost CBG 06SIL",
  "brand": "Prevost",
  "model": "CBG 06SIL",
  "mpn": "CBG 06SIL",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 160,
    "typical": 160,
    "max": 160
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-sil",
    "label": "CBG 06SIL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with composite nozzle",
      "Net weight (kg)": "0.074 Kg",
      "Length": "0.044 m",
      "Profile": "ISO 6150C"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-cbg-06sil.svg",
    "alt": "Repères techniques : Prevost CBG 06SIL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-composite-nozzle-49619",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost CBG 06SIL. Consommation constructeur au point documenté : 160 L/min à 6 bar. CBG 06SIL : PREVOS1 blow gun with composite nozzle. Length: 0.044 m; Profile: ISO 6150C.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with composite nozzle.",
      "Net weight (kg) : 0.074 Kg.",
      "Length : 0.044 m.",
      "Profile : ISO 6150C.",
      "Consommation publiée dans son unité originale : 160 l/min (P = 6 bar).",
      "Pression dans la source : 6 bar, point du débit."
    ],
    "limitations": [
      "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
      "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Fonction de la fiche fabricant",
      "value": "PREVOS1 blow gun with composite nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.074 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
      ]
    },
    {
      "label": "Length",
      "value": "0.044 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150C",
      "evidenceIds": [
        "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-composite-nozzle-49619",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with composite nozzle, Tableau, référence CBG 06SIL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 766831be9d59227341e00ad7dc8c8381727cce58bfac376ee3942ea3aa5ea379. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49619-tableau-reference-cbg-06sil"
    ]
  },
  "notes": [
    "CBG 06SIL : PREVOS1 blow gun with composite nozzle. Length: 0.044 m; Profile: ISO 6150C.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
