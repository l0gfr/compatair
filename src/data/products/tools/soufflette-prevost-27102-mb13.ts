import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-mb13",
  "slug": "soufflette-prevost-27102-mb13",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 MB13",
  "brand": "Prevost",
  "model": "27102 MB13",
  "mpn": "27102 MB13",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 250,
    "typical": 250,
    "max": 250
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-mb13",
    "label": "27102 MB13",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Long metal nozzle blow gun",
      "Net weight (kg)": "0.176 Kg",
      "Length": "0.33 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-mb13.svg",
    "alt": "Repères techniques : Prevost 27102 MB13",
    "sourceUrl": "https://www.prevost.eu/long-metal-nozzle-blow-gun-49583",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 MB13. Consommation constructeur au point documenté : 250 L/min à 6 bar. 27102 MB13 : Long metal nozzle blow gun. Length: 0.33 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Long metal nozzle blow gun.",
      "Net weight (kg) : 0.176 Kg.",
      "Length : 0.33 m.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 250 l/min (P = 6 bar).",
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
      "value": "Long metal nozzle blow gun",
      "evidenceIds": [
        "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.176 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
      ]
    },
    {
      "label": "Length",
      "value": "0.33 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "250 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13",
      "sourceUrl": "https://www.prevost.eu/long-metal-nozzle-blow-gun-49583",
      "sourceLabel": "Prevost, fiche fabricant Long metal nozzle blow gun, Tableau, référence 27102 MB13",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 18eca4e2d2b8e8f3d4d38c5ffa9f2c3093006d93e615dcbeee50ead668783ef9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49583-tableau-reference-27102-mb13"
    ]
  },
  "notes": [
    "27102 MB13 : Long metal nozzle blow gun. Length: 0.33 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
