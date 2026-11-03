import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ozen-osc-110-u",
  "slug": "ozen-osc-110-u",
  "brand": "Ozen",
  "model": "OSC 110 U",
  "variant": {
    "familyId": "ozen-osc-110-u",
    "label": "OSC 110 U",
    "distinguishingAttributes": {
      "équipement": "OSC 110 U",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 12740
    }
  ],
  "powerKw": 110,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ozen-osc-110-u.svg",
    "alt": "Repères techniques : Ozen OSC 110 U",
    "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "OSC 110 U",
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
      "value": "12 740 L/min",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p20"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "110 kW",
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
    },
    {
      "label": "Suffixe constructeur",
      "value": "U, entraînement direct",
      "evidenceIds": [
        "ozen-osc-110-u-reserved-20261103-1"
      ]
    },
    {
      "label": "Point de travail publié13 bar",
      "value": "12,74 m³/min",
      "evidenceIds": [
        "ozen-osc-110-u-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance moteur",
      "value": "110 kW",
      "evidenceIds": [
        "ozen-osc-110-u-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "2 650 kg",
      "evidenceIds": [
        "ozen-osc-110-u-reserved-20261103-1"
      ]
    },
    {
      "label": "Raccord",
      "value": "2\"",
      "evidenceIds": [
        "ozen-osc-110-u-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions En×Boy×Yükseklik",
      "value": "1 600 × 3 200 × 1 855 mm",
      "evidenceIds": [
        "ozen-osc-110-u-reserved-20261103-1"
      ]
    },
    {
      "label": "Référence de mesure",
      "value": "ISO 1217:2009 annexe C ; entrée1 bar, température20 °C",
      "evidenceIds": [
        "ozen-osc-110-u-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ozen OSC 110 U. La OSC110U publie12,74 m³/min àla ligne de travail13 bar et 2 650 kg. La OSC110D est une autre configuration, avec table et note de pression différentes ; ses15,28 m³/min ne sont pas transférés àU. Les dimensions conservées sont celles de la colonne U.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 12 740 L/min déclarés à 13 bar.",
      "Suffixe constructeur : U, entraînement direct.",
      "Point de travail publié13 bar : 12,74 m³/min.",
      "Puissance moteur : 110 kW.",
      "Masse publiée : 2 650 kg.",
      "Raccord : 2\".",
      "Dimensions En×Boy×Yükseklik : 1 600 × 3 200 × 1 855 mm.",
      "Référence de mesure : ISO 1217:2009 annexe C ; entrée1 bar, température20 °C."
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
    },
    {
      "id": "ozen-osc-110-u-reserved-20261103-1",
      "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf#page=20",
      "sourceLabel": "Ozen : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60. La OSC110U publie12,74 m³/min àla ligne de travail13 bar et 2 650 kg. La OSC110D est une autre configuration, avec table et note de pression différentes ; ses15,28 m³/min ne sont pas transférés àU. Les dimensions conservées sont celles de la colonne U."
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
      "ozen-osc-110-u-reserved-20261103-1"
    ],
    "weightKg": [
      "ozen-osc-110-u-reserved-20261103-1"
    ],
    "editorial": [
      "ozen-osc-110-u-reserved-20261103-1"
    ],
    "specifications": [
      "ozen-osc-110-u-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 2650
};
export default product;
