import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ubg-06mtl",
  "slug": "soufflette-prevost-ubg-06mtl",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost UBG 06MTL",
  "brand": "Prevost",
  "model": "UBG 06MTL",
  "mpn": "UBG 06MTL",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 330,
    "typical": 330,
    "max": 330
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-mtl",
    "label": "UBG 06MTL",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with metal nozzle",
      "Net weight (kg)": "0.100 Kg",
      "Length": "0.104 m",
      "Profile": "TRUFLATE"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ubg-06mtl.svg",
    "alt": "Repères techniques : Prevost UBG 06MTL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49631",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost UBG 06MTL. Consommation constructeur au point documenté : 330 L/min à 6 bar. UBG 06MTL : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: TRUFLATE.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with metal nozzle.",
      "Net weight (kg) : 0.100 Kg.",
      "Length : 0.104 m.",
      "Profile : TRUFLATE.",
      "Consommation publiée dans son unité originale : 330 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with metal nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.100 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
      ]
    },
    {
      "label": "Length",
      "value": "0.104 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
      ]
    },
    {
      "label": "Profile",
      "value": "TRUFLATE",
      "evidenceIds": [
        "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "330 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-metal-nozzle-49631",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with metal nozzle, Tableau, référence UBG 06MTL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 bd1bc73a590fa765af9c4aff1d511d72ed244131da360b816c8a0f40e840c54a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49631-tableau-reference-ubg-06mtl"
    ]
  },
  "notes": [
    "UBG 06MTL : PREVOS1 blow gun with metal nozzle. Length: 0.104 m; Profile: TRUFLATE.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
