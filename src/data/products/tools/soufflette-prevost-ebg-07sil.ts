import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ebg-07sil",
  "slug": "soufflette-prevost-ebg-07sil",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EBG 07SIL",
  "brand": "Prevost",
  "model": "EBG 07SIL",
  "mpn": "EBG 07SIL",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 160,
    "typical": 160,
    "max": 160
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-sil",
    "label": "EBG 07SIL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with silent nozzle",
      "Net weight (kg)": "0.079 Kg",
      "Length": "0.044 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ebg-07sil.svg",
    "alt": "Repères techniques : Prevost EBG 07SIL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49613",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EBG 07SIL. Consommation constructeur au point documenté : 160 L/min à 6 bar. EBG 07SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with silent nozzle.",
      "Net weight (kg) : 0.079 Kg.",
      "Length : 0.044 m.",
      "Profile : EUROPEAN.",
      "Consommation publiée dans son unité originale : 160 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with silent nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.079 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
      ]
    },
    {
      "label": "Length",
      "value": "0.044 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49613",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with silent nozzle, Tableau, référence EBG 07SIL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 44bd55ae3ef03d70175d22af9cbb622ad1e7b6b444eb4bc050f14ec19e7b0906. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49613-tableau-reference-ebg-07sil"
    ]
  },
  "notes": [
    "EBG 07SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
