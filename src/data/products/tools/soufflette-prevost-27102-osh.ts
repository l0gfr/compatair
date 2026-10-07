import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-osh",
  "slug": "soufflette-prevost-27102-osh",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 OSH",
  "brand": "Prevost",
  "model": "27102 OSH",
  "mpn": "27102 OSH",
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
    "familyId": "prevost-27102-os",
    "label": "27102 OSH",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "OSHA Venturi Metal Nozzle Blow Gun",
      "Net weight (kg)": "0.120 Kg",
      "Length": "0.069 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-osh.svg",
    "alt": "Repères techniques : Prevost 27102 OSH",
    "sourceUrl": "https://www.prevost.eu/osha-venturi-metal-nozzle-blow-gun-49584",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 OSH. Consommation constructeur au point documenté : 220 L/min à 6 bar. 27102 OSH : OSHA Venturi Metal Nozzle Blow Gun. Length: 0.069 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : OSHA Venturi Metal Nozzle Blow Gun.",
      "Net weight (kg) : 0.120 Kg.",
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
      "value": "OSHA Venturi Metal Nozzle Blow Gun",
      "evidenceIds": [
        "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.120 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
      ]
    },
    {
      "label": "Length",
      "value": "0.069 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49584-tableau-reference-27102-osh",
      "sourceUrl": "https://www.prevost.eu/osha-venturi-metal-nozzle-blow-gun-49584",
      "sourceLabel": "Prevost, fiche fabricant OSHA Venturi Metal Nozzle Blow Gun, Tableau, référence 27102 OSH",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 41fd2f9efe43c70d74311ad9fbdeea5219c3e4c5238e2e14a851b8a8047d36c8. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49584-tableau-reference-27102-osh"
    ]
  },
  "notes": [
    "27102 OSH : OSHA Venturi Metal Nozzle Blow Gun. Length: 0.069 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
