import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ozen-osc-37-u",
  "slug": "ozen-osc-37-u",
  "brand": "Ozen",
  "model": "OSC 37 U",
  "variant": {
    "familyId": "ozen-osc-37-u",
    "label": "OSC 37 U",
    "distinguishingAttributes": {
      "équipement": "OSC 37 U",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 4040
    }
  ],
  "powerKw": 37,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ozen-osc-37-u.svg",
    "alt": "Repères techniques : Ozen OSC 37 U",
    "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "OSC 37 U",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p20"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p20"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p20"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "4 040 L/min",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p20"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p20"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p20"
      ]
    }
  ],
  "editorial": {
    "overview": "Ozen OSC 37 U. 4 040 L/min déclarés à 13 bar. Configuration constructeur : OSC 37 U.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 4 040 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Marque officielle Özen ; alias Ozen utilisé pour la recherche. La cuve, la fréquence et le cycle de service ne sont pas qualifiés dans le tableau.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ozen-catalog-2025-p20",
      "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf#page=20",
      "sourceLabel": "Özen, catalogue constructeur 2025, page PDF 20",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ozen-catalog-2025-p20"
    ],
    "model": [
      "october4c-ozen-catalog-2025-p20"
    ],
    "maxPressureBar": [
      "october4c-ozen-catalog-2025-p20"
    ],
    "fadCurve": [
      "october4c-ozen-catalog-2025-p20"
    ],
    "powerKw": [
      "october4c-ozen-catalog-2025-p20"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
