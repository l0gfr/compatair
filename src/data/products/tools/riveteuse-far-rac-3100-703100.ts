import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "riveteuse-far-rac-3100-703100",
  "slug": "riveteuse-far-rac-3100-703100",
  "categoryId": "riveteuse",
  "category": "riveteuse",
  "label": "FAR RAC 3100 (réf. 703100)",
  "brand": "FAR",
  "model": "RAC 3100",
  "mpn": "703100",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/riveteuse-far-rac-3100-703100.svg",
    "alt": "Repères techniques : FAR RAC 3100 (réf. 703100)",
    "sourceUrl": "https://www.far.bo.it/en/download/price-lists-and-general-catalogue.html?download=246:general-catalogue",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "far-rac-3100",
    "label": "Référence 703100",
    "distinguishingAttributes": {
      "reference": "703100",
      "Course": "28 mm",
      "Force maximum": "21620 N"
    }
  },
  "editorial": {
    "overview": "FAR RAC 3100 (réf. 703100). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Course : 28 mm.",
      "Force maximum : 21620 N."
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
      "value": "28 mm",
      "evidenceIds": [
        "october4-tools-far-catalog-current-p92"
      ]
    },
    {
      "label": "Force maximum",
      "value": "21620 N",
      "evidenceIds": [
        "october4-tools-far-catalog-current-p92"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-far-catalog-current-p92"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-far-catalog-current-p92",
      "sourceUrl": "https://www.far.bo.it/en/download/price-lists-and-general-catalogue.html?download=246:general-catalogue#page=92",
      "sourceLabel": "FAR : catalogue général N.1.3, avril2026, page PDF 92",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 f306b4742c016e090acab64977dc1223a248f9a52d5c7116617e7a55998990d0. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-far-catalog-current-p92"
    ],
    "workingPressureBar": [
      "october4-tools-far-catalog-current-p92"
    ],
    "demandExplanation": [
      "october4-tools-far-catalog-current-p92"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
