import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-cpg-06oshp",
  "slug": "soufflette-prevost-cpg-06oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost CPG 06OSHP",
  "brand": "Prevost",
  "model": "CPG 06OSHP",
  "mpn": "CPG 06OSHP",
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
    "label": "CPG 06OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "Net weight (kg)": "0.067 Kg",
      "Length": "0.032 m",
      "Profile": "ISO 6150C"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-cpg-06oshp.svg",
    "alt": "Repères techniques : Prevost CPG 06OSHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-50809",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost CPG 06OSHP. Consommation constructeur au point documenté : 230 L/min à 6 bar. CPG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: ISO 6150C.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA nozzle - Pocket model.",
      "Net weight (kg) : 0.067 Kg.",
      "Length : 0.032 m.",
      "Profile : ISO 6150C.",
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
        "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.067 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.032 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150C",
      "evidenceIds": [
        "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-50809",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA nozzle - Pocket model, Tableau, référence CPG 06OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8dcd2974d826dc7044b0f7691a15a328fef95a6b2dff4c16169b4cf96630422c. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-50809-tableau-reference-cpg-06oshp"
    ]
  },
  "notes": [
    "CPG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: ISO 6150C.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
