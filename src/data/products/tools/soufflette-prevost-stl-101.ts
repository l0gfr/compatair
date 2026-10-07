import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-stl-101",
  "slug": "soufflette-prevost-stl-101",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost STL 101",
  "brand": "Prevost",
  "model": "STL 101",
  "mpn": "STL 101",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-stl-101",
    "label": "STL 101",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Metal safety blow gun",
      "Net weight (kg)": "0.157 Kg",
      "Length": "0.09 m",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-stl-101.svg",
    "alt": "Repères techniques : Prevost STL 101",
    "sourceUrl": "https://www.prevost.eu/metal-safety-blow-gun-50820",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost STL 101. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. STL 101 : Metal safety blow gun. Length: 0.09 m; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Metal safety blow gun.",
      "Net weight (kg) : 0.157 Kg.",
      "Length : 0.09 m.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 80 l/min.",
      "Pression dans la source : Aucune pression appariée au débit dans le tableau.."
    ],
    "limitations": [
      "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
      "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
      "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Fonction de la fiche fabricant",
      "value": "Metal safety blow gun",
      "evidenceIds": [
        "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.157 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
      ]
    },
    {
      "label": "Length",
      "value": "0.09 m",
      "evidenceIds": [
        "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "80 l/min",
      "evidenceIds": [
        "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-50820-tableau-reference-stl-101",
      "sourceUrl": "https://www.prevost.eu/metal-safety-blow-gun-50820",
      "sourceLabel": "Prevost, fiche fabricant Metal safety blow gun, Tableau, référence STL 101",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 9b4820836aed99c326ef924483dccba6c0d840611625e5bea56e6d892f8fd83a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-50820-tableau-reference-stl-101"
    ]
  },
  "notes": [
    "STL 101 : Metal safety blow gun. Length: 0.09 m; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
