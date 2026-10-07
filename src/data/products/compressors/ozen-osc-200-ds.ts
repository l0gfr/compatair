import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ozen-osc-200-ds",
  "slug": "ozen-osc-200-ds",
  "brand": "Ozen",
  "model": "OSC 200 DS",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "ozen-osc-200-ds",
    "label": "OSC 200 DS",
    "distinguishingAttributes": {
      "équipement": "OSC 200 DS",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.5,
      "litersPerMinute": 28450
    }
  ],
  "oilType": "unknown",
  "powerKw": 200,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ozen-osc-200-ds.svg",
    "alt": "Repères techniques : Ozen OSC 200 DS",
    "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Ozen OSC 200 DS. 28 450 L/min déclarés à 12,5 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : OSC 200 DS.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 28 450 L/min déclarés à 12,5 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Marque officielle Özen ; alias Ozen utilisé pour la recherche. Cuve, fréquence électrique et cycle de service non documentés.",
      "FAD maximal de la plage documentée à cette pression, minimum de régulation publié séparément. Aucune interpolation de vitesse ni maximum à une autre pression.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "OSC 200 DS",
      "evidenceIds": [
        "october5-ozen-catalog-2025-p26"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october5-ozen-catalog-2025-p26"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-ozen-catalog-2025-p26"
      ]
    },
    {
      "label": "FAD maximal déclaré à 12,5 bar",
      "value": "28 450 L/min",
      "evidenceIds": [
        "october5-ozen-catalog-2025-p26"
      ]
    },
    {
      "label": "FAD minimal déclaré à 12,5 bar",
      "value": "9 290 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-ozen-catalog-2025-p26"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "200 kW",
      "evidenceIds": [
        "october5-ozen-catalog-2025-p26"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-ozen-catalog-2025-p26"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-ozen-catalog-2025-p26",
      "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf#page=26",
      "sourceLabel": "Özen, catalogue 2025, gammes OSC DS et OSC SD, page PDF 26",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-ozen-catalog-2025-p26"
    ],
    "model": [
      "october5-ozen-catalog-2025-p26"
    ],
    "maxPressureBar": [
      "october5-ozen-catalog-2025-p26"
    ],
    "fadCurve": [
      "october5-ozen-catalog-2025-p26"
    ],
    "powerKw": [
      "october5-ozen-catalog-2025-p26"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
