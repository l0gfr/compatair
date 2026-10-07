import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-guardair-hyd024ssa",
  "slug": "soufflette-guardair-hyd024ssa",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Guardair HYD024SSA",
  "brand": "Guardair",
  "model": "HYD024SSA",
  "mpn": "HYD024SSA",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/soufflette-guardair-hyd024ssa.svg",
    "alt": "Repères techniques : Guardair HYD024SSA",
    "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "guardair-hyd024ssa",
    "label": "Référence HYD024SSA",
    "distinguishingAttributes": {
      "reference": "HYD024SSA",
      "Description constructeur": "With 24\" Extension",
      "Entrée d’air FNPT": "3/4 in"
    }
  },
  "editorial": {
    "overview": "Guardair HYD024SSA. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Description constructeur : With 24\" Extension.",
      "Entrée d’air FNPT : 3/4 in.",
      "Dimensions L × l × H : 38 x 10 x 19.9 in.",
      "Masse publiée : 6.7 lb."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "La référence n’est pas reliée de façon concordante à la table actuelle Air Usage(cfm) et à son point de mesure ; son débit reste hors calcul.",
      "Le débit d’alimentation ne se confond pas avec l’air ambiant entraîné par la buse Venturi.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Description constructeur",
      "value": "With 24\" Extension",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Entrée d’air FNPT",
      "value": "3/4 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Dimensions L × l × H",
      "value": "38 x 10 x 19.9 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "6.7 lb",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "140 cfm",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p32"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-guardair-catalog-p32",
      "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf#page=32",
      "sourceLabel": "Guardair : Safety Air Guns & Pneumatic Vacuums, catalogue 2024/25, page PDF 32",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4eeb040d12835bc8cf95ad4c3cc055ba111a75cb75b1ba5e234080072caea265. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-guardair-catalog-p32"
    ],
    "workingPressureBar": [
      "october4-tools-guardair-catalog-p32"
    ],
    "demandExplanation": [
      "october4-tools-guardair-catalog-p32"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
