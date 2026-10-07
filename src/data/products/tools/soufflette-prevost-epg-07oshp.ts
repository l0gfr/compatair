import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-epg-07oshp",
  "slug": "soufflette-prevost-epg-07oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EPG 07OSHP",
  "brand": "Prevost",
  "model": "EPG 07OSHP",
  "mpn": "EPG 07OSHP",
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
    "familyId": "prevost-prevos1-oshp",
    "label": "EPG 07OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "Net weight (kg)": "0.071 Kg",
      "Length": "0.032 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-epg-07oshp.svg",
    "alt": "Repères techniques : Prevost EPG 07OSHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-49656",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EPG 07OSHP. Consommation constructeur au point documenté : 230 L/min à 6 bar. EPG 07OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA nozzle - Pocket model.",
      "Net weight (kg) : 0.071 Kg.",
      "Length : 0.032 m.",
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
      "value": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "evidenceIds": [
        "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.071 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.032 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-49656",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA nozzle - Pocket model, Tableau, référence EPG 07OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 3bc25508504462f79d596c05cb41e45305b22c33f2296ff60518470f3e6f5ab4. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49656-tableau-reference-epg-07oshp"
    ]
  },
  "notes": [
    "EPG 07OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
