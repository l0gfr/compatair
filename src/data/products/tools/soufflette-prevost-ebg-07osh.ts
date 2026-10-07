import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07osh",
  "slug": "soufflette-prevost-ebg-07osh",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07OSH",
  "brand": "Prevost",
  "model": "EBG 07OSH",
  "mpn": "EBG 07OSH",
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
    "familyId": "prevost-prevos1-osh",
    "label": "EBG 07OSH",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA polyamide composite nozzle",
      "Net weight (kg)": "0.080 Kg",
      "Length": "0.05 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07osh.svg",
    "alt": "Repères techniques : Prevost EBG 07OSH",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-49608",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07OSH. Consommation constructeur au point documenté : 220 L/min à 6 bar. EBG 07OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle. Length: 0.05 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA polyamide composite nozzle.",
      "Net weight (kg) : 0.080 Kg.",
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
      "value": "PREVOS1 blow gun with OSHA polyamide composite nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.080 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
      ]
    },
    {
      "label": "Length",
      "value": "0.05 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-49608",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA polyamide composite nozzle, Tableau, référence EBG 07OSH",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 2de4e9d4ebccaf877aa6f8cd5ea1eda6324f7762ad15204b54d08089c4a259e2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49608-tableau-reference-ebg-07osh"
    ]
  },
  "notes": [
    "EBG 07OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle. Length: 0.05 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
