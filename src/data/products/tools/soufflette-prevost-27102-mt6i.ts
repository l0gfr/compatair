import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-mt6i",
  "slug": "soufflette-prevost-27102-mt6i",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 MT6I",
  "brand": "Prevost",
  "model": "27102 MT6I",
  "mpn": "27102 MT6I",
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
    "familyId": "prevost-27102-mt",
    "label": "27102 MT6I",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with metal nozzle",
      "Net weight (kg)": "0.162 Kg",
      "Profile": "ISO 6150B"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-mt6i.svg",
    "alt": "Repères techniques : Prevost 27102 MT6I",
    "sourceUrl": "https://www.prevost.eu/blow-gun-metal-nozzle-49568",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 MT6I. Consommation constructeur au point documenté : 380 L/min à 6 bar. 27102 MT6I : Blow gun with metal nozzle. Profile: ISO 6150B.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with metal nozzle.",
      "Net weight (kg) : 0.162 Kg.",
      "Profile : ISO 6150B.",
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
        "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.162 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150B",
      "evidenceIds": [
        "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "380 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i",
      "sourceUrl": "https://www.prevost.eu/blow-gun-metal-nozzle-49568",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with metal nozzle, Tableau, référence 27102 MT6I",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 1914aaad61cc4c331f14628ab1d00e6dcabc98906138eb02214dc503d84882d7. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49568-tableau-reference-27102-mt6i"
    ]
  },
  "notes": [
    "27102 MT6I : Blow gun with metal nozzle. Profile: ISO 6150B.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
