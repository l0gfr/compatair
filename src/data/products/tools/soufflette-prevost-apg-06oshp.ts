import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-apg-06oshp",
  "slug": "soufflette-prevost-apg-06oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost APG 06OSHP",
  "brand": "Prevost",
  "model": "APG 06OSHP",
  "mpn": "APG 06OSHP",
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
    "label": "APG 06OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "Net weight (kg)": "0.068 Kg",
      "Length": "0.032 m",
      "Profile": "ARO 210"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-apg-06oshp.svg",
    "alt": "Repères techniques : Prevost APG 06OSHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-49636",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost APG 06OSHP. Consommation constructeur au point documenté : 230 L/min à 6 bar. APG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: ARO 210.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA nozzle - Pocket model.",
      "Net weight (kg) : 0.068 Kg.",
      "Length : 0.032 m.",
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
      "value": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "evidenceIds": [
        "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.068 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.032 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
      ]
    },
    {
      "label": "Profile",
      "value": "ARO 210",
      "evidenceIds": [
        "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-49636",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA nozzle - Pocket model, Tableau, référence APG 06OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 45f54b6fa13444a54828f022d8d5df29578709a9bfacf085c40d01fe51c1387d. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49636-tableau-reference-apg-06oshp"
    ]
  },
  "notes": [
    "APG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: ARO 210.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
