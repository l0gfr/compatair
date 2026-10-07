import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-abg-06sil",
  "slug": "soufflette-prevost-abg-06sil",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost ABG 06SIL",
  "brand": "Prevost",
  "model": "ABG 06SIL",
  "mpn": "ABG 06SIL",
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
    "label": "ABG 06SIL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with silent nozzle",
      "Net weight (kg)": "0.076 Kg",
      "Length": "0.044 m",
      "Profile": "ARO 210"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-abg-06sil.svg",
    "alt": "Repères techniques : Prevost ABG 06SIL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49600",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost ABG 06SIL. Consommation constructeur au point documenté : 160 L/min à 6 bar. ABG 06SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: ARO 210.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with silent nozzle.",
      "Net weight (kg) : 0.076 Kg.",
      "Length : 0.044 m.",
      "Profile : ARO 210.",
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
        "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.076 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
      ]
    },
    {
      "label": "Length",
      "value": "0.044 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
      ]
    },
    {
      "label": "Profile",
      "value": "ARO 210",
      "evidenceIds": [
        "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49600",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with silent nozzle, Tableau, référence ABG 06SIL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 d55080b05af8b3ed4840ee1f2fa1aa98e4ae0527a22d8a2a6acc257418a0e55c. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49600-tableau-reference-abg-06sil"
    ]
  },
  "notes": [
    "ABG 06SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: ARO 210.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
