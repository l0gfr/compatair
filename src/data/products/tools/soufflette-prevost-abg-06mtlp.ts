import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-abg-06mtlp",
  "slug": "soufflette-prevost-abg-06mtlp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost ABG 06MTLP",
  "brand": "Prevost",
  "model": "ABG 06MTLP",
  "mpn": "ABG 06MTLP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 330,
    "typical": 330,
    "max": 330
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-mtlp",
    "label": "ABG 06MTLP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with metal nozzle",
      "Net weight (kg)": "0.092 Kg",
      "Length": "0.104 m",
      "Profile": "ARO 210"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-abg-06mtlp.svg",
    "alt": "Repères techniques : Prevost ABG 06MTLP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49639",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost ABG 06MTLP. Consommation constructeur au point documenté : 330 L/min à 6 bar. ABG 06MTLP : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: ARO 210.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with metal nozzle.",
      "Net weight (kg) : 0.092 Kg.",
      "Length : 0.104 m.",
      "Profile : ARO 210.",
      "Consommation publiée dans son unité originale : 330 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with metal nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.092 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
      ]
    },
    {
      "label": "Length",
      "value": "0.104 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
      ]
    },
    {
      "label": "Profile",
      "value": "ARO 210",
      "evidenceIds": [
        "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "330 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49639",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with metal nozzle, Tableau, référence ABG 06MTLP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 d00254769e21f1c7fc590690e63e997d99139dba682350d39cb0a70170fa0ac8. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49639-tableau-reference-abg-06mtlp"
    ]
  },
  "notes": [
    "ABG 06MTLP : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: ARO 210.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
