import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-pre",
  "slug": "soufflette-prevost-27102-pre",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 PRE",
  "brand": "Prevost",
  "model": "27102 PRE",
  "mpn": "27102 PRE",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 250,
    "typical": 250,
    "max": 250
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-pr",
    "label": "27102 PRE",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with composite nozzle",
      "Net weight (kg)": "0.122 Kg",
      "Length": "0.059 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-pre.svg",
    "alt": "Repères techniques : Prevost 27102 PRE",
    "sourceUrl": "https://www.prevost.eu/blow-gun-composite-nozzle-49588",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 PRE. Consommation constructeur au point documenté : 250 L/min à 6 bar. 27102 PRE : Blow gun with composite nozzle. Length: 0.059 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with composite nozzle.",
      "Net weight (kg) : 0.122 Kg.",
      "Length : 0.059 m.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 250 l/min (P = 6 bar).",
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
      "value": "Blow gun with composite nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.122 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
      ]
    },
    {
      "label": "Length",
      "value": "0.059 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "250 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49588-tableau-reference-27102-pre",
      "sourceUrl": "https://www.prevost.eu/blow-gun-composite-nozzle-49588",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with composite nozzle, Tableau, référence 27102 PRE",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 0b875cbdf6373ae62fdebb16338a107a90cb4919b4d827fd532b02ebccdee24a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49588-tableau-reference-27102-pre"
    ]
  },
  "notes": [
    "27102 PRE : Blow gun with composite nozzle. Length: 0.059 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
