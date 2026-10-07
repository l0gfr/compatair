import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07pre",
  "slug": "soufflette-prevost-ebg-07pre",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07PRE",
  "brand": "Prevost",
  "model": "EBG 07PRE",
  "mpn": "EBG 07PRE",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 230,
    "typical": 230,
    "max": 230
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-pre",
    "label": "EBG 07PRE",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with composite nozzle",
      "Net weight (kg)": "0.079 Kg",
      "Length": "0.047 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07pre.svg",
    "alt": "Repères techniques : Prevost EBG 07PRE",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-composite-nozzle-49610",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07PRE. Consommation constructeur au point documenté : 230 L/min à 6 bar. EBG 07PRE : PREVOS1 blow gun with composite nozzle. Length: 0.047 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with composite nozzle.",
      "Net weight (kg) : 0.079 Kg.",
      "Length : 0.047 m.",
      "Profile : EUROPEAN.",
      "Consommation publiée dans son unité originale : 230 l/min (P = 6 bar).",
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
        "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.079 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
      ]
    },
    {
      "label": "Length",
      "value": "0.047 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-composite-nozzle-49610",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with composite nozzle, Tableau, référence EBG 07PRE",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 f8904f6c85ae4f0f4bc8495cff2e9f646ea6a72ec6da68aa92eb4fc5aa8d9c0d. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49610-tableau-reference-ebg-07pre"
    ]
  },
  "notes": [
    "EBG 07PRE : PREVOS1 blow gun with composite nozzle. Length: 0.047 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
