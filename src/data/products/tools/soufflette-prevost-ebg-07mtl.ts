import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07mtl",
  "slug": "soufflette-prevost-ebg-07mtl",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07MTL",
  "brand": "Prevost",
  "model": "EBG 07MTL",
  "mpn": "EBG 07MTL",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 330,
    "typical": 330,
    "max": 330
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-mtl",
    "label": "EBG 07MTL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with metal nozzle",
      "Net weight (kg)": "0.100 Kg",
      "Length": "0.104 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07mtl.svg",
    "alt": "Repères techniques : Prevost EBG 07MTL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49611",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07MTL. Consommation constructeur au point documenté : 330 L/min à 6 bar. EBG 07MTL : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with metal nozzle.",
      "Net weight (kg) : 0.100 Kg.",
      "Length : 0.104 m.",
      "Profile : EUROPEAN.",
      "Consommation publiée dans son unité originale : 330 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with metal nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.100 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
      ]
    },
    {
      "label": "Length",
      "value": "0.104 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "330 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49611",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with metal nozzle, Tableau, référence EBG 07MTL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5a6c19b5469982c0b5add31d14fa981f6671a12ca160b98c74692e9d02db81f0. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49611-tableau-reference-ebg-07mtl"
    ]
  },
  "notes": [
    "EBG 07MTL : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
