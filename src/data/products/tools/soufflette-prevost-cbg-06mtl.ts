import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-cbg-06mtl",
  "slug": "soufflette-prevost-cbg-06mtl",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost CBG 06MTL",
  "brand": "Prevost",
  "model": "CBG 06MTL",
  "mpn": "CBG 06MTL",
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
    "label": "CBG 06MTL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with metal nozzle",
      "Net weight (kg)": "0.098 Kg",
      "Length": "0.104 m",
      "Profile": "ISO 6150C"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-cbg-06mtl.svg",
    "alt": "Repères techniques : Prevost CBG 06MTL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49618",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost CBG 06MTL. Consommation constructeur au point documenté : 330 L/min à 6 bar. CBG 06MTL : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: ISO 6150C.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with metal nozzle.",
      "Net weight (kg) : 0.098 Kg.",
      "Length : 0.104 m.",
      "Profile : ISO 6150C.",
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
        "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.098 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
      ]
    },
    {
      "label": "Length",
      "value": "0.104 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150C",
      "evidenceIds": [
        "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "330 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49618",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with metal nozzle, Tableau, référence CBG 06MTL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8efa6f5e7cb568a73c18c908c1bfffe3234e832b34aa9d24642b4da2000d71ca. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49618-tableau-reference-cbg-06mtl"
    ]
  },
  "notes": [
    "CBG 06MTL : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: ISO 6150C.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
