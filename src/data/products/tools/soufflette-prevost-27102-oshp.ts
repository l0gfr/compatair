import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-oshp",
  "slug": "soufflette-prevost-27102-oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 OSHP",
  "brand": "Prevost",
  "model": "27102 OSHP",
  "mpn": "27102 OSHP",
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
    "familyId": "prevost-27102-osh",
    "label": "27102 OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun (OSHA & Venturi effect)",
      "Net weight (kg)": "0.125 Kg",
      "Length": "0.069 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-oshp.svg",
    "alt": "Repères techniques : Prevost 27102 OSHP",
    "sourceUrl": "https://www.prevost.eu/blow-gun-osha-venturi-effect-49576",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 OSHP. Consommation constructeur au point documenté : 220 L/min à 6 bar. 27102 OSHP : Blow gun (OSHA & Venturi effect). Length: 0.069 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun (OSHA & Venturi effect).",
      "Net weight (kg) : 0.125 Kg.",
      "Length : 0.069 m.",
      "Female thread : G1/4.",
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
      "value": "Blow gun (OSHA & Venturi effect)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.125 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.069 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp",
      "sourceUrl": "https://www.prevost.eu/blow-gun-osha-venturi-effect-49576",
      "sourceLabel": "Prevost, fiche fabricant Blow gun (OSHA & Venturi effect), Tableau, référence 27102 OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 90b847bd2a0435c2a432ff132b51c452db99ab4b0cde6329a5c625cd9526d807. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49576-tableau-reference-27102-oshp"
    ]
  },
  "notes": [
    "27102 OSHP : Blow gun (OSHA & Venturi effect). Length: 0.069 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
