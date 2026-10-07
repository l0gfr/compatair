import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07oshp",
  "slug": "soufflette-prevost-ebg-07oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07OSHP",
  "brand": "Prevost",
  "model": "EBG 07OSHP",
  "mpn": "EBG 07OSHP",
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
    "familyId": "prevost-prevos1-oshp",
    "label": "EBG 07OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA nozzle",
      "Net weight (kg)": "0.078 Kg",
      "Length": "0.05 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07oshp.svg",
    "alt": "Repères techniques : Prevost EBG 07OSHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-49655",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07OSHP. Consommation constructeur au point documenté : 220 L/min à 6 bar. EBG 07OSHP : PREVOS1 blow gun with OSHA nozzle. Length: 0.05 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA nozzle.",
      "Net weight (kg) : 0.078 Kg.",
      "Length : 0.05 m.",
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
      "value": "PREVOS1 blow gun with OSHA nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.078 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.05 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-49655",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA nozzle, Tableau, référence EBG 07OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 adc4c79440ada097922364cbeb6563e2d12196f745c258c56bd9f5f9b1dcccc5. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49655-tableau-reference-ebg-07oshp"
    ]
  },
  "notes": [
    "EBG 07OSHP : PREVOS1 blow gun with OSHA nozzle. Length: 0.05 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
