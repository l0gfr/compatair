import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ibg-06mtlh",
  "slug": "soufflette-prevost-ibg-06mtlh",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost IBG 06MTLH",
  "brand": "Prevost",
  "model": "IBG 06MTLH",
  "mpn": "IBG 06MTLH",
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
    "familyId": "prevost-prevos1-mtlh",
    "label": "IBG 06MTLH",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with OSHA metal nozzle",
      "Net weight (kg)": "0.110 Kg",
      "Length": "0.114 m",
      "Profile": "ISO 6150B"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ibg-06mtlh.svg",
    "alt": "Repères techniques : Prevost IBG 06MTLH",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49625",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost IBG 06MTLH. Consommation constructeur au point documenté : 220 L/min à 6 bar. IBG 06MTLH : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: ISO 6150B.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with OSHA metal nozzle.",
      "Net weight (kg) : 0.110 Kg.",
      "Length : 0.114 m.",
      "Profile : ISO 6150B.",
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
      "value": "PREVOS1 blow gun with OSHA metal nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.110 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
      ]
    },
    {
      "label": "Length",
      "value": "0.114 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
      ]
    },
    {
      "label": "Profile",
      "value": "ISO 6150B",
      "evidenceIds": [
        "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-osha-metal-nozzle-49625",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with OSHA metal nozzle, Tableau, référence IBG 06MTLH",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 be93cbd03eb68047b93dd7b53ae7ba37e57a85a85268470237421a60fc75a764. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49625-tableau-reference-ibg-06mtlh"
    ]
  },
  "notes": [
    "IBG 06MTLH : PREVOS1 blow gun with OSHA metal nozzle. Length: 0.114 m; Profile: ISO 6150B.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
