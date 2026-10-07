import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ubg-06ecr",
  "slug": "soufflette-prevost-ubg-06ecr",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost UBG 06ECR",
  "brand": "Prevost",
  "model": "UBG 06ECR",
  "mpn": "UBG 06ECR",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 410,
    "typical": 410,
    "max": 410
  },
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1-ecr",
    "label": "UBG 06ECR",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "PREVOS1 blow gun with protective air curtain",
      "Net weight (kg)": "0.079 Kg",
      "Length": "0.049 m",
      "Profile": "TRUFLATE"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ubg-06ecr.svg",
    "alt": "Repères techniques : Prevost UBG 06ECR",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-protective-air-curtain-49627",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost UBG 06ECR. Consommation constructeur au point documenté : 410 L/min à 6 bar. UBG 06ECR : PREVOS1 blow gun with protective air curtain. Length: 0.049 m; Profile: TRUFLATE.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : PREVOS1 blow gun with protective air curtain.",
      "Net weight (kg) : 0.079 Kg.",
      "Length : 0.049 m.",
      "Profile : TRUFLATE.",
      "Consommation publiée dans son unité originale : 410 l/min (P = 6 bar).",
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
      "value": "PREVOS1 blow gun with protective air curtain",
      "evidenceIds": [
        "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.079 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
      ]
    },
    {
      "label": "Length",
      "value": "0.049 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
      ]
    },
    {
      "label": "Profile",
      "value": "TRUFLATE",
      "evidenceIds": [
        "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "410 l/min (P = 6 bar)",
      "evidenceIds": [
        "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, point du débit",
      "evidenceIds": [
        "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-protective-air-curtain-49627",
      "sourceLabel": "Prevost, fiche fabricant PREVOS1 blow gun with protective air curtain, Tableau, référence UBG 06ECR",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 4ab19b30564736f7af4a5182f4cf794b450d051ea10ccb563e1786cfe3be24ba. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
    ],
    "airflowLpm": [
      "october7-tools-prevost-gun-49627-tableau-reference-ubg-06ecr"
    ]
  },
  "notes": [
    "UBG 06ECR : PREVOS1 blow gun with protective air curtain. Length: 0.049 m; Profile: TRUFLATE.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
