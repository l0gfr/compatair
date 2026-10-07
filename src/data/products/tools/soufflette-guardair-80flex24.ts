import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-guardair-80flex24",
  "slug": "soufflette-guardair-80flex24",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Guardair 80FLEX24",
  "brand": "Guardair",
  "model": "80FLEX24",
  "mpn": "80FLEX24",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/soufflette-guardair-80flex24.svg",
    "alt": "Repères techniques : Guardair 80FLEX24",
    "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "guardair-80flex24",
    "label": "Référence 80FLEX24",
    "distinguishingAttributes": {
      "reference": "80FLEX24",
      "Description constructeur": "With 24\" Flex Extension",
      "Entrée d’air FNPT": "1/4 in"
    }
  },
  "editorial": {
    "overview": "Guardair 80FLEX24. Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Description constructeur : With 24\" Flex Extension.",
      "Entrée d’air FNPT : 1/4 in.",
      "Dimensions L × l × H : 29.5 x 1 x 6.6 in.",
      "Masse publiée : 1.3 lb."
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
      "value": "With 24\" Flex Extension",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p20"
      ]
    },
    {
      "label": "Entrée d’air FNPT",
      "value": "1/4 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p20"
      ]
    },
    {
      "label": "Dimensions L × l × H",
      "value": "29.5 x 1 x 6.6 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p20"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "1.3 lb",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p20"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "16 cfm",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p20"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p20"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-guardair-catalog-p20",
      "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf#page=20",
      "sourceLabel": "Guardair : Safety Air Guns & Pneumatic Vacuums, catalogue 2024/25, page PDF 20",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4eeb040d12835bc8cf95ad4c3cc055ba111a75cb75b1ba5e234080072caea265. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-guardair-catalog-p20"
    ],
    "workingPressureBar": [
      "october4-tools-guardair-catalog-p20"
    ],
    "demandExplanation": [
      "october4-tools-guardair-catalog-p20"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
