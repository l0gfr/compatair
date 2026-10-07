import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-ec6c",
  "slug": "soufflette-prevost-27102-ec6c",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 EC6C",
  "brand": "Prevost",
  "model": "27102 EC6C",
  "mpn": "27102 EC6C",
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
    "familyId": "prevost-27102-ec",
    "label": "27102 EC6C",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with protective air curtain",
      "Net weight (kg)": "0.147 Kg",
      "Profile": "ISO 6150C"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-ec6c.svg",
    "alt": "Repères techniques : Prevost 27102 EC6C",
    "sourceUrl": "https://www.prevost.eu/blow-gun-protective-air-curtain-49566",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 EC6C. Consommation constructeur au point documenté : 450 L/min à 6 bar. 27102 EC6C : Blow gun with protective air curtain. Profile: ISO 6150C.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with protective air curtain.",
      "Net weight (kg) : 0.147 Kg.",
      "Profile : ISO 6150C.",
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
        "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.147 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150C",
      "evidenceIds": [
        "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "450 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c",
      "sourceUrl": "https://www.prevost.eu/blow-gun-protective-air-curtain-49566",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with protective air curtain, Tableau, référence 27102 EC6C",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 353fbfe519743d1fc837ee20a5a35300187558959e85b13aaa3cace477eb8aaf. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49566-tableau-reference-27102-ec6c"
    ]
  },
  "notes": [
    "27102 EC6C : Blow gun with protective air curtain. Profile: ISO 6150C.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
