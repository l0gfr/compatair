import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-prb-29-dry-10-500",
  "slug": "puska-prb-29-dry-10-500",
  "brand": "Puska",
  "model": "PRB 29 DRY 10 500",
  "mpn": "4152 0322 34",
  "variant": {
    "familyId": "puska-prb-29-dry-500",
    "label": "PRB 29 DRY 10 500",
    "distinguishingAttributes": {
      "équipement": "PRB 29 DRY 10 500",
      "pressionDeConfiguration": "10 bar",
      "cuve": "500 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 3294
    }
  ],
  "powerKw": 22,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-prb-29-dry-10-500.svg",
    "alt": "Repères techniques : Puska PRB 29 DRY 10 500",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PRB 29 DRY 10 500",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p40"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p40"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p40"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "3 294 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p40",
        "october4b-puska-catalog-2025-p39"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p40"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p40"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska PRB 29 DRY 10 500. 3 294 L/min déclarés à 10 bar. Configuration constructeur : PRB 29 DRY 10 500.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 294 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p40",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=40",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 40",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-puska-catalog-2025-p39",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=39",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 39",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p40"
    ],
    "model": [
      "october4b-puska-catalog-2025-p40"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p40"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p40"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p40",
      "october4b-puska-catalog-2025-p39"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p40"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p40"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
