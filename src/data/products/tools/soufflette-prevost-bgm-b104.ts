import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-bgm-b104",
  "slug": "soufflette-prevost-bgm-b104",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost BGM B104",
  "brand": "Prevost",
  "model": "BGM B104",
  "mpn": "BGM B104",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-bgm-b104",
    "label": "BGM B104",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with short nozzle",
      "Net weight (kg)": "0.012 Kg",
      "BSPT male thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-bgm-b104.svg",
    "alt": "Repères techniques : Prevost BGM B104",
    "sourceUrl": "https://www.prevost.eu/blow-gun-short-nozzle-49590",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost BGM B104. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. BGM B104 : Blow gun with short nozzle. Female thread: .",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with short nozzle.",
      "Net weight (kg) : 0.012 Kg.",
      "BSPT male thread : G1/4.",
      "Consommation publiée dans son unité originale : Non publiée dans la fiche de cet assemblage..",
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
      "value": "Blow gun with short nozzle",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.012 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104"
      ]
    },
    {
      "label": "BSPT male thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Non publiée dans la fiche de cet assemblage.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104",
      "sourceUrl": "https://www.prevost.eu/blow-gun-short-nozzle-49590",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with short nozzle, Tableau, référence BGM B104",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 ec3ef02aacdf8336c315d1ead1926d191f2c656f7736c8862e8b5556cf189b1a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-49590-tableau-reference-bgm-b104"
    ]
  },
  "notes": [
    "BGM B104 : Blow gun with short nozzle. Female thread: .",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
