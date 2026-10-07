import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-upg-06oshp",
  "slug": "soufflette-prevost-upg-06oshp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost UPG 06OSHP",
  "brand": "Prevost",
  "model": "UPG 06OSHP",
  "mpn": "UPG 06OSHP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 230,
    "typical": 230,
    "max": 230
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-oshp",
    "label": "UPG 06OSHP",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "Net weight (kg)": "0.071 Kg",
      "Length": "0.032 m",
      "Profile": "TRUFLATE"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-upg-06oshp.svg",
    "alt": "Repères techniques : Prevost UPG 06OSHP",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-50812",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost UPG 06OSHP. Consommation constructeur au point documenté : 230 L/min à 6 bar. UPG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: TRUFLATE.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA nozzle - Pocket model.",
      "Net weight (kg) : 0.071 Kg.",
      "Length : 0.032 m.",
      "Profile : TRUFLATE.",
      "Consommation publiée dans son unité originale : 230 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with OSHA nozzle - Pocket model",
      "evidenceIds": [
        "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.071 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
      ]
    },
    {
      "label": "Length",
      "value": "0.032 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
      ]
    },
    {
      "label": "Profile",
      "value": "TRUFLATE",
      "evidenceIds": [
        "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-nozzle-pocket-model-50812",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA nozzle - Pocket model, Tableau, référence UPG 06OSHP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 7a9c0581ee795d7f4d0137773fd446a736937b9e73e6df29ed8c43393a3522f3. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-50812-tableau-reference-upg-06oshp"
    ]
  },
  "notes": [
    "UPG 06OSHP : PREVOS1 blow gun with OSHA nozzle - Pocket model. Length: 0.032 m; Profile: TRUFLATE.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
