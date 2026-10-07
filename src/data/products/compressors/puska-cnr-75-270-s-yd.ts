import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-cnr-75-270-s-yd",
  "slug": "puska-cnr-75-270-s-yd",
  "brand": "Puska",
  "model": "CNR 75/270 S YD",
  "mpn": "4116 0023 16",
  "variant": {
    "familyId": "puska-cnr-75-270-s-yd",
    "label": "CNR 75/270 S YD",
    "distinguishingAttributes": {
      "équipement": "CNR 75/270 S YD",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 660
    }
  ],
  "powerKw": 5.5,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-cnr-75-270-s-yd.svg",
    "alt": "Repères techniques : Puska CNR 75/270 S YD",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "CNR 75/270 S YD",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "660 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska CNR 75/270 S YD. 660 L/min déclarés à 10 bar. Configuration constructeur : CNR 75/270 S YD.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 660 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p18",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=18",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 18",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p18"
    ],
    "model": [
      "october4b-puska-catalog-2025-p18"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p18"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p18"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p18"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p18"
    ],
    "oilType": [
      "october4b-puska-catalog-2025-p18"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p18"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
