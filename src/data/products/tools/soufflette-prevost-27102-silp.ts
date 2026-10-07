import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-silp",
  "slug": "soufflette-prevost-27102-silp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 SILP",
  "brand": "Prevost",
  "model": "27102 SILP",
  "mpn": "27102 SILP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 200,
    "typical": 200,
    "max": 200
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-sil",
    "label": "27102 SILP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with silent nozzle",
      "Net weight (kg)": "0.124 Kg",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-silp.svg",
    "alt": "Repères techniques : Prevost 27102 SILP",
    "sourceUrl": "https://www.prevost.eu/blow-gun-silent-nozzle-49577",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 SILP. Consommation constructeur au point documenté : 200 L/min à 6 bar. 27102 SILP : Blow gun with silent nozzle. Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with silent nozzle.",
      "Net weight (kg) : 0.124 Kg.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 200 l/min (P = 6 bar).",
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
      "value": "Blow gun with silent nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49577-tableau-reference-27102-silp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.124 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49577-tableau-reference-27102-silp"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49577-tableau-reference-27102-silp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "200 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49577-tableau-reference-27102-silp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49577-tableau-reference-27102-silp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49577-tableau-reference-27102-silp",
      "sourceUrl": "https://www.prevost.eu/blow-gun-silent-nozzle-49577",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with silent nozzle, Tableau, référence 27102 SILP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 bdbcbee3df5a1bde68da22cdc00b16bf2c72fc6e9135758b8e02eaa6cbfd4c5c. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49577-tableau-reference-27102-silp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49577-tableau-reference-27102-silp"
    ]
  },
  "notes": [
    "27102 SILP : Blow gun with silent nozzle. Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
