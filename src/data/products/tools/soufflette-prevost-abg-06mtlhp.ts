import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-abg-06mtlhp",
  "slug": "soufflette-prevost-abg-06mtlhp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost ABG 06MTLHP",
  "brand": "Prevost",
  "model": "ABG 06MTLHP",
  "mpn": "ABG 06MTLHP",
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
    "label": "ABG 06MTLHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA metal nozzle",
      "Net weight (kg)": "0.100 Kg",
      "Length": "0.114 m",
      "Profile": "ARO 210"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-abg-06mtlhp.svg",
    "alt": "Repères techniques : Prevost ABG 06MTLHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49640",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost ABG 06MTLHP. Consommation constructeur au point documenté : 220 L/min à 6 bar. ABG 06MTLHP : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: ARO 210.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA metal nozzle.",
      "Net weight (kg) : 0.100 Kg.",
      "Length : 0.114 m.",
      "Profile : ARO 210.",
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
        "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.100 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
      ]
    },
    {
      "label": "Length",
      "value": "0.114 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
      ]
    },
    {
      "label": "Profile",
      "value": "ARO 210",
      "evidenceIds": [
        "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49640",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA metal nozzle, Tableau, référence ABG 06MTLHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 373e8a7f2aa245ddbb8f10e15938b74b24a8400dc8fd27d368dc48cf3797aae4. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49640-tableau-reference-abg-06mtlhp"
    ]
  },
  "notes": [
    "ABG 06MTLHP : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: ARO 210.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
