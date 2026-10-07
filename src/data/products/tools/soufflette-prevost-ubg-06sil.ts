import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ubg-06sil",
  "slug": "soufflette-prevost-ubg-06sil",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost UBG 06SIL",
  "brand": "Prevost",
  "model": "UBG 06SIL",
  "mpn": "UBG 06SIL",
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
    "label": "UBG 06SIL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with silent nozzle",
      "Net weight (kg)": "0.078 Kg",
      "Length": "0.044 m",
      "Profile": "TRUFLATE"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ubg-06sil.svg",
    "alt": "Repères techniques : Prevost UBG 06SIL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49633",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost UBG 06SIL. Consommation constructeur au point documenté : 160 L/min à 6 bar. UBG 06SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: TRUFLATE.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with silent nozzle.",
      "Net weight (kg) : 0.078 Kg.",
      "Length : 0.044 m.",
      "Profile : TRUFLATE.",
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
        "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.078 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
      ]
    },
    {
      "label": "Length",
      "value": "0.044 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
      ]
    },
    {
      "label": "Profile",
      "value": "TRUFLATE",
      "evidenceIds": [
        "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49633",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with silent nozzle, Tableau, référence UBG 06SIL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 f43486aa703db6ffb4ccde7beedda5a891e38e27c6f45309dc3c6fddf5546291. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49633-tableau-reference-ubg-06sil"
    ]
  },
  "notes": [
    "UBG 06SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: TRUFLATE.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
