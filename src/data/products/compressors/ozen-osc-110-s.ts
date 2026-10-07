import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ozen-osc-110-s",
  "slug": "ozen-osc-110-s",
  "brand": "Ozen",
  "model": "OSC 110 S",
  "variant": {
    "familyId": "ozen-osc-110-s",
    "label": "OSC 110 S",
    "distinguishingAttributes": {
      "équipement": "OSC 110 S",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.5,
      "litersPerMinute": 15300
    }
  ],
  "powerKw": 110,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ozen-osc-110-s.svg",
    "alt": "Repères techniques : Ozen OSC 110 S",
    "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "OSC 110 S",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p38"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p38"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p38"
      ]
    },
    {
      "label": "Air livré à 12,5 bar",
      "value": "15 300 L/min",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p38"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "110 kW",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p38"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p38"
      ]
    }
  ],
  "editorial": {
    "overview": "Ozen OSC 110 S. 15 300 L/min déclarés à 12,5 bar. Configuration constructeur : OSC 110 S.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 15 300 L/min déclarés à 12,5 bar."
    ],
    "limitations": [
      "Marque officielle Özen ; alias Ozen utilisé pour la recherche. Cuve, fréquence électrique et cycle de service non documentés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ozen-catalog-2025-p38",
      "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf#page=38",
      "sourceLabel": "Özen, catalogue constructeur 2025, page PDF 38",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ozen-catalog-2025-p38"
    ],
    "model": [
      "october4c-ozen-catalog-2025-p38"
    ],
    "maxPressureBar": [
      "october4c-ozen-catalog-2025-p38"
    ],
    "fadCurve": [
      "october4c-ozen-catalog-2025-p38"
    ],
    "powerKw": [
      "october4c-ozen-catalog-2025-p38"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
