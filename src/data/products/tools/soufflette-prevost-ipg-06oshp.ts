import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ipg-06oshp",
  "slug": "soufflette-prevost-ipg-06oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost IPG 06OSHP",
  "brand": "Prevost",
  "model": "IPG 06OSHP",
  "mpn": "IPG 06OSHP",
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
    "label": "IPG 06OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "Net weight (kg)": "0.071 Kg",
      "Length": "0.032 m",
      "Profile": "ISO 6150B"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ipg-06oshp.svg",
    "alt": "Repères techniques : Prevost IPG 06OSHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-49665",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost IPG 06OSHP. Consommation constructeur au point documenté : 230 L/min à 6 bar. IPG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: ISO 6150B.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA nozzle - Pocket model.",
      "Net weight (kg) : 0.071 Kg.",
      "Length : 0.032 m.",
      "Profile : ISO 6150B.",
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
        "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.071 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.032 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150B",
      "evidenceIds": [
        "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-49665",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA nozzle - Pocket model, Tableau, référence IPG 06OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 1e896948b1058f7d991c4c175b0d251136d6a3cf3d53f4b37732195f1d134dd5. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49665-tableau-reference-ipg-06oshp"
    ]
  },
  "notes": [
    "IPG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: ISO 6150B.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
