import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-mtlp",
  "slug": "soufflette-prevost-27102-mtlp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 MTLP",
  "brand": "Prevost",
  "model": "27102 MTLP",
  "mpn": "27102 MTLP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 380,
    "typical": 380,
    "max": 380
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-mtl",
    "label": "27102 MTLP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with metal nozzle",
      "Net weight (kg)": "0.144 Kg",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-mtlp.svg",
    "alt": "Repères techniques : Prevost 27102 MTLP",
    "sourceUrl": "https://www.prevost.eu/blow-gun-metal-nozzle-49580",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 MTLP. Consommation constructeur au point documenté : 380 L/min à 6 bar. 27102 MTLP : Blow gun with metal nozzle. Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with metal nozzle.",
      "Net weight (kg) : 0.144 Kg.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 380 l/min (P = 6 bar).",
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
      "value": "Blow gun with metal nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.144 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "380 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp",
      "sourceUrl": "https://www.prevost.eu/blow-gun-metal-nozzle-49580",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with metal nozzle, Tableau, référence 27102 MTLP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 888512e305c814e43b1a4f08279fab7ac6ae3fd1ab178c7461178fa540bd4bcf. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49580-tableau-reference-27102-mtlp"
    ]
  },
  "notes": [
    "27102 MTLP : Blow gun with metal nozzle. Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
