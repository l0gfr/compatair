import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bbg-06oshp",
  "slug": "soufflette-prevost-bbg-06oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BBG 06OSHP",
  "brand": "Prevost",
  "model": "BBG 06OSHP",
  "mpn": "BBG 06OSHP",
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
    "label": "BBG 06OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA nozzle",
      "Net weight (kg)": "0.076 Kg",
      "Length": "0.05 m",
      "Profile": "BRITISH"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bbg-06oshp.svg",
    "alt": "Repères techniques : Prevost BBG 06OSHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-49647",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BBG 06OSHP. Consommation constructeur au point documenté : 220 L/min à 6 bar. BBG 06OSHP : PREVOS1 blow gun with OSHA nozzle. Length: 0.05 m; Profile: BRITISH.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA nozzle.",
      "Net weight (kg) : 0.076 Kg.",
      "Length : 0.05 m.",
      "Profile : BRITISH.",
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
        "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.076 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.05 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
      ]
    },
    {
      "label": "Profile",
      "value": "BRITISH",
      "evidenceIds": [
        "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-49647",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA nozzle, Tableau, référence BBG 06OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 7b338f90884c525547ead8f4e5a90534057aac6b6cd5dc532a7f6435b1aaaf5b. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49647-tableau-reference-bbg-06oshp"
    ]
  },
  "notes": [
    "BBG 06OSHP : PREVOS1 blow gun with OSHA nozzle. Length: 0.05 m; Profile: BRITISH.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
