import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-cbg-06osh",
  "slug": "soufflette-prevost-cbg-06osh",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost CBG 06OSH",
  "brand": "Prevost",
  "model": "CBG 06OSH",
  "mpn": "CBG 06OSH",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 220,
    "typical": 220,
    "max": 220
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-osh",
    "label": "CBG 06OSH",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA polyamide composite nozzle",
      "Net weight (kg)": "0.076 Kg",
      "Length": "0.05 m",
      "Profile": "ISO 6150C"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-cbg-06osh.svg",
    "alt": "Repères techniques : Prevost CBG 06OSH",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-49615",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost CBG 06OSH. Consommation constructeur au point documenté : 220 L/min à 6 bar. CBG 06OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle. Length: 0.05 m; Profile: ISO 6150C.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA polyamide composite nozzle.",
      "Net weight (kg) : 0.076 Kg.",
      "Length : 0.05 m.",
      "Profile : ISO 6150C.",
      "Consommation publiée dans son unité originale : 220 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with OSHA polyamide composite nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.076 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
      ]
    },
    {
      "label": "Length",
      "value": "0.05 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150C",
      "evidenceIds": [
        "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-polyamide-composite-nozzle-49615",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA polyamide composite nozzle, Tableau, référence CBG 06OSH",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 2f7f11497da6682c226bab21e5bad207a90bc85ee7026d35a8791f33b4f32f12. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49615-tableau-reference-cbg-06osh"
    ]
  },
  "notes": [
    "CBG 06OSH : PREVOS1 blow gun with OSHA polyamide composite nozzle. Length: 0.05 m; Profile: ISO 6150C.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
