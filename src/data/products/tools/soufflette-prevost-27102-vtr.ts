import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-27102-vtr",
  "slug": "soufflette-prevost-27102-vtr",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost 27102 VTR",
  "brand": "Prevost",
  "model": "27102 VTR",
  "mpn": "27102 VTR",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-27102-vt",
    "label": "27102 VTR",
    "distinguishingAttributes": {
      "Fonction de la fiche fabricant": "Blow gun with Venturi effect",
      "Net weight (kg)": "0.204 Kg",
      "Nozzle Ø": "16 mm",
      "Female thread": "G1/4"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-27102-vtr.svg",
    "alt": "Repères techniques : Prevost 27102 VTR",
    "sourceUrl": "https://www.prevost.eu/blow-gun-venturi-effect-49587-0",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost 27102 VTR. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 27102 VTR : Blow gun with Venturi effect. Nozzle Ø: 16 mm; Female thread: G1/4.",
    "verifiedFacts": [
      "Fonction de la fiche fabricant : Blow gun with Venturi effect.",
      "Net weight (kg) : 0.204 Kg.",
      "Nozzle Ø : 16 mm.",
      "Female thread : G1/4.",
      "Consommation publiée dans son unité originale : 210 l/min.",
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
      "value": "Blow gun with Venturi effect",
      "evidenceIds": [
        "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
      ]
    },
    {
      "label": "Net weight (kg)",
      "value": "0.204 Kg",
      "evidenceIds": [
        "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
      ]
    },
    {
      "label": "Nozzle Ø",
      "value": "16 mm",
      "evidenceIds": [
        "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
      ]
    },
    {
      "label": "Female thread",
      "value": "G1/4",
      "evidenceIds": [
        "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "210 l/min",
      "evidenceIds": [
        "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucune pression appariée au débit dans le tableau.",
      "evidenceIds": [
        "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-gun-0-tableau-reference-27102-vtr",
      "sourceUrl": "https://www.prevost.eu/blow-gun-venturi-effect-49587-0",
      "sourceLabel": "Prevost, fiche fabricant Blow gun with Venturi effect, Tableau, référence 27102 VTR",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 4dff15dde7dfc80a574e03a7a50f610cd45f340edcdd7767bae0d3cbbc6a5d7b. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
    ],
    "demandExplanation": [
      "october7-tools-prevost-gun-0-tableau-reference-27102-vtr"
    ]
  },
  "notes": [
    "27102 VTR : Blow gun with Venturi effect. Nozzle Ø: 16 mm; Female thread: G1/4.",
    "Le débit concerne cette référence de soufflette et son raccordement. Les autres buses ou profils sont des références séparées lorsqu’ils sont explicitement publiés par le fabricant.",
    "Valeur au seul point de pression documenté ; le profil ne déduit aucune moyenne de gâchette ni débit à une autre pression.",
    "Consommation et/ou pression de mesure manquante ; aucune capacité de compresseur concluante n’est calculée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
