import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-si6b",
  "slug": "soufflette-prevost-27102-si6b",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 SI6B",
  "brand": "Prevost",
  "model": "27102 SI6B",
  "mpn": "27102 SI6B",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 200,
    "typical": 200,
    "max": 200
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-si",
    "label": "27102 SI6B",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with silent nozzle",
      "Net weight (kg)": "0.147 Kg",
      "Profile": "BRITISH"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-si6b.svg",
    "alt": "Repères techniques : Prevost 27102 SI6B",
    "sourceUrl": "https://www.prevost.eu/blow-gun-silent-nozzle-49565",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 SI6B. Consommation constructeur au point documenté : 200 L/min à 6 bar. 27102 SI6B : Blow gun with silent nozzle. Profile: BRITISH.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with silent nozzle.",
      "Net weight (kg) : 0.147 Kg.",
      "Profile : BRITISH.",
      "Consommation publiée dans son unité originale : 200 l/min (P = 6 bar).",
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
      "value": "Blow gun with silent nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.147 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b"
      ]
    },
    {
      "label": "Profile",
      "value": "BRITISH",
      "evidenceIds": [
        "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "200 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b",
      "sourceUrl": "https://www.prevost.eu/blow-gun-silent-nozzle-49565",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with silent nozzle, Tableau, référence 27102 SI6B",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 d43d889c4689dfd014be1271612d9182cdd1d40479f7fd0f7d477d91fcbf9c2a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49565-tableau-reference-27102-si6b"
    ]
  },
  "notes": [
    "27102 SI6B : Blow gun with silent nozzle. Profile: BRITISH.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
