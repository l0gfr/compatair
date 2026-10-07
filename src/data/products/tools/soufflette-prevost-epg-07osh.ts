import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-epg-07osh",
  "slug": "soufflette-prevost-epg-07osh",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost EPG 07OSH",
  "brand": "Prevost",
  "model": "EPG 07OSH",
  "mpn": "EPG 07OSH",
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
    "label": "EPG 07OSH",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model",
      "Net weight (kg)": "0.073 Kg",
      "Length": "0.032 m",
      "Profile": "EUROPEAN"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-epg-07osh.svg",
    "alt": "Repères techniques : Prevost EPG 07OSH",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-pocket-model-49609",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost EPG 07OSH. Consommation constructeur au point documenté : 230 L/min à 6 bar. EPG 07OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model. Length: 0.032 m; Profile: EUROPEAN.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model.",
      "Net weight (kg) : 0.073 Kg.",
      "Length : 0.032 m.",
      "Profile : EUROPEAN.",
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
        "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.073 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
      ]
    },
    {
      "label": "Length",
      "value": "0.032 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
      ]
    },
    {
      "label": "Profile",
      "value": "EUROPEAN",
      "evidenceIds": [
        "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-pocket-model-49609",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model, Tableau, référence EPG 07OSH",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 cbda37d41a3760ce0cf17da73450553da33cca8a995e8f010ea183e71edc758c. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49609-tableau-reference-epg-07osh"
    ]
  },
  "notes": [
    "EPG 07OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle - Pocket model. Length: 0.032 m; Profile: EUROPEAN.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
