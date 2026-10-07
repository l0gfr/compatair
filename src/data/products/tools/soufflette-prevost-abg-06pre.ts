import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-abg-06pre",
  "slug": "soufflette-prevost-abg-06pre",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost ABG 06PRE",
  "brand": "Prevost",
  "model": "ABG 06PRE",
  "mpn": "ABG 06PRE",
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
    "label": "ABG 06PRE",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with composite nozzle",
      "Net weight (kg)": "0.077 Kg",
      "Length": "0.047 m",
      "Profile": "ARO 210"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-abg-06pre.svg",
    "alt": "Repères techniques : Prevost ABG 06PRE",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-composite-nozzle-49597",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost ABG 06PRE. Consommation constructeur au point documenté : 230 L/min à 6 bar. ABG 06PRE : PREVOS1 blow gun with composite nozzle. Length: 0.047 m; Profile: ARO 210.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with composite nozzle.",
      "Net weight (kg) : 0.077 Kg.",
      "Length : 0.047 m.",
      "Profile : ARO 210.",
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
        "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.077 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
      ]
    },
    {
      "label": "Length",
      "value": "0.047 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
      ]
    },
    {
      "label": "Profile",
      "value": "ARO 210",
      "evidenceIds": [
        "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-composite-nozzle-49597",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with composite nozzle, Tableau, référence ABG 06PRE",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 ba1711bc98bdaa9fa9a71fc847213395cfd8fd533cd5cec5e2124ca9c295f539. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49597-tableau-reference-abg-06pre"
    ]
  },
  "notes": [
    "ABG 06PRE : PREVOS1 blow gun with composite nozzle. Length: 0.047 m; Profile: ARO 210.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
