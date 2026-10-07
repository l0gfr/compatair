import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bbg-06sil",
  "slug": "soufflette-prevost-bbg-06sil",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BBG 06SIL",
  "brand": "Prevost",
  "model": "BBG 06SIL",
  "mpn": "BBG 06SIL",
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
    "label": "BBG 06SIL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with silent nozzle",
      "Net weight (kg)": "0.077 Kg",
      "Length": "0.044 m",
      "Profile": "BRITISH"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bbg-06sil.svg",
    "alt": "Repères techniques : Prevost BBG 06SIL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49606",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BBG 06SIL. Consommation constructeur au point documenté : 160 L/min à 6 bar. BBG 06SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: BRITISH.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with silent nozzle.",
      "Net weight (kg) : 0.077 Kg.",
      "Length : 0.044 m.",
      "Profile : BRITISH.",
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
        "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.077 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
      ]
    },
    {
      "label": "Length",
      "value": "0.044 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
      ]
    },
    {
      "label": "Profile",
      "value": "BRITISH",
      "evidenceIds": [
        "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49606",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with silent nozzle, Tableau, référence BBG 06SIL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 37f84824ec45e350ccd1fe5176974e34ffca66b7fa032af73b6fb220a2ce9fa3. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49606-tableau-reference-bbg-06sil"
    ]
  },
  "notes": [
    "BBG 06SIL : PREVOS1 blow gun with silent nozzle. Length: 0.044 m; Profile: BRITISH.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
