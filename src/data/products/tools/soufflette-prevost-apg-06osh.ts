import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-apg-06osh",
  "slug": "soufflette-prevost-apg-06osh",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost APG 06OSH",
  "brand": "Prevost",
  "model": "APG 06OSH",
  "mpn": "APG 06OSH",
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
    "familyId": "prevost-prevos1-osh",
    "label": "APG 06OSH",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model",
      "Net weight (kg)": "0.070 Kg",
      "Length": "0.032 m",
      "Profile": "ARO 210"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-apg-06osh.svg",
    "alt": "Repères techniques : Prevost APG 06OSH",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-pocket-model-49596",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost APG 06OSH. Consommation constructeur au point documenté : 230 L/min à 6 bar. APG 06OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model. Length: 0.032 m; Profile: ARO 210.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model.",
      "Net weight (kg) : 0.070 Kg.",
      "Length : 0.032 m.",
      "Profile : ARO 210.",
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
      "value": "PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model",
      "evidenceIds": [
        "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.070 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
      ]
    },
    {
      "label": "Length",
      "value": "0.032 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
      ]
    },
    {
      "label": "Profile",
      "value": "ARO 210",
      "evidenceIds": [
        "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-pocket-model-49596",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model, Tableau, référence APG 06OSH",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 3324c6848c4f5de77eaa785d017e9b5ed80b5841aa88e01da46f1221f9253968. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49596-tableau-reference-apg-06osh"
    ]
  },
  "notes": [
    "APG 06OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model. Length: 0.032 m; Profile: ARO 210.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
