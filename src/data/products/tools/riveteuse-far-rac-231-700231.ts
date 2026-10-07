import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "riveteuse-far-rac-231-700231",
  "slug": "riveteuse-far-rac-231-700231",
  "categoryId": "riveteuse",
  "category": "riveteuse",
  "label": "FAR RAC 231 (réf. 700231)",
  "brand": "FAR",
  "model": "RAC 231",
  "mpn": "700231",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/riveteuse-far-rac-231-700231.svg",
    "alt": "Repères techniques : FAR RAC 231 (réf. 700231)",
    "sourceUrl": "https://www.far.bo.it/en/download/price-lists-and-general-catalogue.html?download=246:general-catalogue",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "far-rac-231",
    "label": "Référence 700231",
    "distinguishingAttributes": {
      "reference": "700231",
      "Course": "15,5 mm",
      "Type constructeur": "outil à riveter oléopneumatique"
    }
  },
  "editorial": {
    "overview": "FAR RAC 231 (réf. 700231). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Course : 15,5 mm.",
      "Type constructeur : outil à riveter oléopneumatique."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "La force de traction et la course ne permettent pas de déduire un volume d’air par rivet.",
      "Aucun volume d’air standardisé par cycle avec pression de mesure n’est publié dans la table citée.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Course",
      "value": "15,5 mm",
      "evidenceIds": [
        "october4-tools-far-catalog-current-p94"
      ]
    },
    {
      "label": "Type constructeur",
      "value": "outil à riveter oléopneumatique",
      "evidenceIds": [
        "october4-tools-far-catalog-current-p94"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-far-catalog-current-p94"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-far-catalog-current-p94",
      "sourceUrl": "https://www.far.bo.it/en/download/price-lists-and-general-catalogue.html?download=246:general-catalogue#page=94",
      "sourceLabel": "FAR : catalogue général N.1.3, avril2026, page PDF 94",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 f306b4742c016e090acab64977dc1223a248f9a52d5c7116617e7a55998990d0. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-far-catalog-current-p94"
    ],
    "workingPressureBar": [
      "october4-tools-far-catalog-current-p94"
    ],
    "demandExplanation": [
      "october4-tools-far-catalog-current-p94"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
