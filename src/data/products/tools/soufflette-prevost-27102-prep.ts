import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-prep",
  "slug": "soufflette-prevost-27102-prep",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 PREP",
  "brand": "Prevost",
  "model": "27102 PREP",
  "mpn": "27102 PREP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 420,
    "typical": 420,
    "max": 420
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-pre",
    "label": "27102 PREP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with composite nozzle",
      "Net weight (kg)": "0.125 Kg",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-prep.svg",
    "alt": "Repères techniques : Prevost 27102 PREP",
    "sourceUrl": "https://www.prevost.eu/blow-gun-composite-nozzle-49579",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 PREP. Consommation constructeur au point documenté : 420 L/min à 6 bar. 27102 PREP : Blow gun with composite nozzle. Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with composite nozzle.",
      "Net weight (kg) : 0.125 Kg.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 420 l/min (P = 6 bar).",
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
      "value": "Blow gun with composite nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49579-tableau-reference-27102-prep"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.125 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49579-tableau-reference-27102-prep"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49579-tableau-reference-27102-prep"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "420 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49579-tableau-reference-27102-prep"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49579-tableau-reference-27102-prep"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49579-tableau-reference-27102-prep",
      "sourceUrl": "https://www.prevost.eu/blow-gun-composite-nozzle-49579",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with composite nozzle, Tableau, référence 27102 PREP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 961df5984fec105cebb3c74eb185daf5a8a2211a0ec859b8c4246cc14f6ec217. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49579-tableau-reference-27102-prep"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49579-tableau-reference-27102-prep"
    ]
  },
  "notes": [
    "27102 PREP : Blow gun with composite nozzle. Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
