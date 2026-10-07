import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-pkm-7-5s-10-500f",
  "slug": "puska-pkm-7-5s-10-500f",
  "brand": "Puska",
  "model": "PKM 7.5S 10 500F",
  "mpn": "4152 0213 77",
  "variant": {
    "familyId": "puska-pkm-7-5s-500f",
    "label": "PKM 7.5S 10 500F",
    "distinguishingAttributes": {
      "équipement": "PKM 7.5S 10 500F",
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
      "litersPerMinute": 696
    }
  ],
  "powerKw": 5.5,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-pkm-7-5s-10-500f.svg",
    "alt": "Repères techniques : Puska PKM 7.5S 10 500F",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PKM 7.5S 10 500F",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p34"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p34"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p34"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "696 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p34",
        "october4b-puska-catalog-2025-p33"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p34"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p34"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska PKM 7.5S 10 500F. 696 L/min déclarés à 10 bar. Configuration constructeur : PKM 7.5S 10 500F.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 696 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p34",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=34",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 34",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-puska-catalog-2025-p33",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=33",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 33",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p34"
    ],
    "model": [
      "october4b-puska-catalog-2025-p34"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p34"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p34"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p34",
      "october4b-puska-catalog-2025-p33"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p34"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p34"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
