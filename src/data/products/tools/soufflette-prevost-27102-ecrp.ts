import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-ecrp",
  "slug": "soufflette-prevost-27102-ecrp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 ECRP",
  "brand": "Prevost",
  "model": "27102 ECRP",
  "mpn": "27102 ECRP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 450,
    "typical": 450,
    "max": 450
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-ecr",
    "label": "27102 ECRP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with protective air curtain",
      "Net weight (kg)": "0.124 Kg",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-ecrp.svg",
    "alt": "Repères techniques : Prevost 27102 ECRP",
    "sourceUrl": "https://www.prevost.eu/blow-gun-protective-air-curtain-49578",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 ECRP. Consommation constructeur au point documenté : 450 L/min à 6 bar. 27102 ECRP : Blow gun with protective air curtain. Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with protective air curtain.",
      "Net weight (kg) : 0.124 Kg.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 450 l/min (P = 6 bar).",
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
      "value": "Blow gun with protective air curtain",
      "evidenceIds": [
        "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.124 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "450 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp",
      "sourceUrl": "https://www.prevost.eu/blow-gun-protective-air-curtain-49578",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with protective air curtain, Tableau, référence 27102 ECRP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 74e8ab5670be8074720e504e1254b6b97ffe50e8d6d39a6710b473811b6ea2e0. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49578-tableau-reference-27102-ecrp"
    ]
  },
  "notes": [
    "27102 ECRP : Blow gun with protective air curtain. Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
