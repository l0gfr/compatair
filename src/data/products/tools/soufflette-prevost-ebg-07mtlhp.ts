import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07mtlhp",
  "slug": "soufflette-prevost-ebg-07mtlhp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07MTLHP",
  "brand": "Prevost",
  "model": "EBG 07MTLHP",
  "mpn": "EBG 07MTLHP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 220,
    "typical": 220,
    "max": 220
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-mtlhp",
    "label": "EBG 07MTLHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA metal nozzle",
      "Net weight (kg)": "0.103 Kg",
      "Length": "0.114 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07mtlhp.svg",
    "alt": "Repères techniques : Prevost EBG 07MTLHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49654",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07MTLHP. Consommation constructeur au point documenté : 220 L/min à 6 bar. EBG 07MTLHP : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA metal nozzle.",
      "Net weight (kg) : 0.103 Kg.",
      "Length : 0.114 m.",
      "Profile : EUROPEAN.",
      "Consommation publiée dans son unité originale : 220 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with OSHA metal nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.103 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
      ]
    },
    {
      "label": "Length",
      "value": "0.114 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49654",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA metal nozzle, Tableau, référence EBG 07MTLHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 c76397fe8f04b5f6c807ff29248b6338ecf6284884f5dd13feb15289f0ae09f9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49654-tableau-reference-ebg-07mtlhp"
    ]
  },
  "notes": [
    "EBG 07MTLHP : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
