import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-walcom-fan-jet-60150-bp",
  "slug": "soufflette-walcom-fan-jet-60150-bp",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Walcom FAN JET (réf. 60150/BP)",
  "brand": "Walcom",
  "model": "FAN JET",
  "mpn": "60150/BP",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/soufflette-walcom-fan-jet-60150-bp.svg",
    "alt": "Repères techniques : Walcom FAN JET (réf. 60150/BP)",
    "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "walcom-fan-jet",
    "label": "Référence 60150/BP",
    "distinguishingAttributes": {
      "reference": "60150/BP",
      "Masse": "140 g",
      "Usage déclaré": "séchage de base à 70 °C"
    }
  },
  "editorial": {
    "overview": "Walcom FAN JET (réf. 60150/BP). Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "verifiedFacts": [
      "Masse : 140 g.",
      "Usage déclaré : séchage de base à 70 °C."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "La consommation de la fiche décrit un point ou une plage ; le régime maximal et l’état exact de réglage du débit ne sont pas précisés.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Masse",
      "value": "140 g",
      "evidenceIds": [
        "october4-tools-walcom-catalog-2026-p49"
      ]
    },
    {
      "label": "Usage déclaré",
      "value": "séchage de base à 70 °C",
      "evidenceIds": [
        "october4-tools-walcom-catalog-2026-p49"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "900 L/min",
      "evidenceIds": [
        "october4-tools-walcom-catalog-2026-p49"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption: 900 l/min at 6 bar",
      "evidenceIds": [
        "october4-tools-walcom-catalog-2026-p49"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-walcom-catalog-2026-p49",
      "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf#page=49",
      "sourceLabel": "Walcom : catalogue2026, appareils et données techniques, page PDF 49",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 82e98909d06567bec6e49964a7a75545cdc5802f4366bd5607a89f8cc01f8376. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-walcom-catalog-2026-p49"
    ],
    "workingPressureBar": [
      "october4-tools-walcom-catalog-2026-p49"
    ],
    "demandExplanation": [
      "october4-tools-walcom-catalog-2026-p49"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
