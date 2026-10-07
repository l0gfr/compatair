import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07mtlh",
  "slug": "soufflette-prevost-ebg-07mtlh",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07MTLH",
  "brand": "Prevost",
  "model": "EBG 07MTLH",
  "mpn": "EBG 07MTLH",
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
    "familyId": "prevost-prevos1-mtlh",
    "label": "EBG 07MTLH",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA metal nozzle",
      "Net weight (kg)": "0.110 Kg",
      "Length": "0.114 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07mtlh.svg",
    "alt": "Repères techniques : Prevost EBG 07MTLH",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49612",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07MTLH. Consommation constructeur au point documenté : 220 L/min à 6 bar. EBG 07MTLH : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA metal nozzle.",
      "Net weight (kg) : 0.110 Kg.",
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
        "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.110 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
      ]
    },
    {
      "label": "Length",
      "value": "0.114 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49612",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA metal nozzle, Tableau, référence EBG 07MTLH",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 d42f5ef186c4cb5d275e7f4ce05db482a4438f9331cad5900d079aca95e1e38d. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49612-tableau-reference-ebg-07mtlh"
    ]
  },
  "notes": [
    "EBG 07MTLH : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
