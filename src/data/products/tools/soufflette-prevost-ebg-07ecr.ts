import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07ecr",
  "slug": "soufflette-prevost-ebg-07ecr",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07ECR",
  "brand": "Prevost",
  "model": "EBG 07ECR",
  "mpn": "EBG 07ECR",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 410,
    "typical": 410,
    "max": 410
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-ecr",
    "label": "EBG 07ECR",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with protective air curtain",
      "Net weight (kg)": "0.080 Kg",
      "Length": "0.049 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07ecr.svg",
    "alt": "Repères techniques : Prevost EBG 07ECR",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-protective-air-curtain-49607",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07ECR. Consommation constructeur au point documenté : 410 L/min à 6 bar. EBG 07ECR : PREVOS1 blow gun with protective air curtain. Length: 0.049 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with protective air curtain.",
      "Net weight (kg) : 0.080 Kg.",
      "Length : 0.049 m.",
      "Profile : EUROPEAN.",
      "Consommation publiée dans son unité originale : 410 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with protective air curtain",
      "evidenceIds": [
        "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.080 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
      ]
    },
    {
      "label": "Length",
      "value": "0.049 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "410 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-protective-air-curtain-49607",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with protective air curtain, Tableau, référence EBG 07ECR",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 f277c0edf57dc72bf5a27a2f2c59f9edffbb5f1708fe430e71f72b683fd39695. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49607-tableau-reference-ebg-07ecr"
    ]
  },
  "notes": [
    "EBG 07ECR : PREVOS1 blow gun with protective air curtain. Length: 0.049 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
