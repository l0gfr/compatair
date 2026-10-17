import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-gav-record-2200-1-hvlp",
  "slug": "pistolet-peinture-hvlp-gav-record-2200-1-hvlp",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "GAV RECORD 2200-1 HVLP",
  "brand": "GAV",
  "model": "RECORD 2200-1 HVLP",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le catalogue publie 350–450 L/min et 2–4 bar, sans appariement des bornes ni réglage de pulvérisation ; la compatibilité reste indéterminée.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-gav-record-2200-1-hvlp.svg",
    "alt": "Repères techniques : GAV RECORD 2200-1 HVLP",
    "sourceUrl": "https://gav.it/wp-content/uploads/GAV-Catalogue-2026_compressed.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "gav-record-2200-1-hvlp",
    "label": "Modèle RECORD 2200-1 HVLP, SKU non établi",
    "distinguishingAttributes": {
      "manufacturerModel": "RECORD 2200-1 HVLP",
      "Capacité du godet": "600 cc",
      "Pression de service publiée": "2 - 4 bar"
    }
  },
  "editorial": {
    "overview": "RECORD 2200-1 HVLP : alimentation gravitaire avec godet de 600 cm³. Le catalogue publie une plage de 350 à 450 L/min et une plage de service de 2 à 4 bar. Le RECORD 2200-1 APS voisin conserve un godet de 600 cm³ mais annonce 200 à 400 L/min pour 2 à 5 bar.",
    "verifiedFacts": [
      "Capacité du godet : 600 cc.",
      "Pression de service publiée : 2 - 4 bar."
    ],
    "limitations": [
      "Ces plages ne donnent pas un point de consommation associé à une ouverture et une pression précises ; elles restent documentaires.",
      "RECORD/S-1 utilise une alimentation produit externe ; les réservoirs 115S et 125S sont des équipements distincts.",
      "Les références de kits de buses de rechange ne désignent pas des pistolets complets."
    ]
  },
  "specifications": [
    {
      "label": "Capacité du godet",
      "value": "600 cc",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p16"
      ]
    },
    {
      "label": "Pression de service publiée",
      "value": "2 - 4 bar",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p16"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Plage de service de 2 à 4 bar, sans point de pression rattaché à une consommation unique",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p16"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "350 à 450 L/min, réglage et pression de mesure non appariés",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p16"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-gav-catalog-2026-p16",
      "sourceUrl": "https://gav.it/wp-content/uploads/GAV-Catalogue-2026_compressed.pdf#page=16",
      "sourceLabel": "GAV : catalogue2026, caractéristiques des pistolets complets, page PDF 16",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 a45d88b0aa85921e49fa7dbbbce150d1795c6e31f74934683fca391d51030e1d. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-gav-catalog-2026-p15",
      "sourceUrl": "https://gav.it/wp-content/uploads/GAV-Catalogue-2026_compressed.pdf#page=15",
      "sourceLabel": "GAV : catalogue2026, caractéristiques des pistolets complets, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 a45d88b0aa85921e49fa7dbbbce150d1795c6e31f74934683fca391d51030e1d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4-tools-gav-catalog-2026-p16"
    ],
    "workingPressureBar": [
      "october4-tools-gav-catalog-2026-p16"
    ],
    "demandExplanation": [
      "october4-tools-gav-catalog-2026-p16"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
