import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-mtl",
  "slug": "soufflette-prevost-27102-mtl",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 MTL",
  "brand": "Prevost",
  "model": "27102 MTL",
  "mpn": "27102 MTL",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 380,
    "typical": 380,
    "max": 380
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-mt",
    "label": "27102 MTL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Metal nozzle blow gun",
      "Net weight (kg)": "0.141 Kg",
      "Length": "0.11 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-mtl.svg",
    "alt": "Repères techniques : Prevost 27102 MTL",
    "sourceUrl": "https://www.prevost.eu/metal-nozzle-blow-gun-49589",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 MTL. Consommation constructeur au point documenté : 380 L/min à 6 bar. 27102 MTL : Metal nozzle blow gun. Length: 0.11 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Metal nozzle blow gun.",
      "Net weight (kg) : 0.141 Kg.",
      "Length : 0.11 m.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 380 l/min (P = 6 bar).",
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
      "value": "Metal nozzle blow gun",
      "evidenceIds": [
        "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.141 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
      ]
    },
    {
      "label": "Length",
      "value": "0.11 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "380 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl",
      "sourceUrl": "https://www.prevost.eu/metal-nozzle-blow-gun-49589",
      "sourceLabel": "Prevost, fiche fabricant Metal nozzle blow gun, Tableau, référence 27102 MTL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 10d58650c7e142cf164ddbf41712fdd22eb2134c2f9028fe8669d82178bf3ceb. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49589-tableau-reference-27102-mtl"
    ]
  },
  "notes": [
    "27102 MTL : Metal nozzle blow gun. Length: 0.11 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
