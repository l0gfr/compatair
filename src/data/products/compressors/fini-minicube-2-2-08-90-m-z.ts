import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "fini-minicube-2-2-08-90-m-z",
  "slug": "fini-minicube-2-2-08-90-m-z",
  "brand": "Fini",
  "model": "MiniCUBE 2.2-08-90 M Z",
  "mpn": "V72PC60FNMZ01",
  "variant": {
    "familyId": "fini-minicube-2-2-90-z",
    "label": "Cuve 90 L galvanisée",
    "distinguishingAttributes": {
      "équipement": "Cuve 90 L galvanisée",
      "pressionDeConfiguration": "8 bar",
      "cuve": "90 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 90,
  "maxPressureBar": 8,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 292
    }
  ],
  "dutyCycle": 1,
  "powerKw": 2.2,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/fini-minicube-2-2-08-90-m-z.svg",
    "alt": "Repères techniques : Fini MiniCUBE 2.2-08-90 M Z",
    "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Minicube-Fini_EN_04-2024_9990399.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Cuve 90 L galvanisée",
      "evidenceIds": [
        "october4b-fini-minicube-p3"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-fini-minicube-p3"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "90 L",
      "evidenceIds": [
        "october4b-fini-minicube-p3"
      ]
    },
    {
      "label": "Air livré à 7,5 bar",
      "value": "292 L/min",
      "evidenceIds": [
        "october4b-fini-minicube-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october4b-fini-minicube-p3"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4b-fini-minicube-p3"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-fini-minicube-p3"
      ]
    }
  ],
  "editorial": {
    "overview": "Fini MiniCUBE 2.2-08-90 M Z. 292 L/min déclarés à 7,5 bar. Configuration constructeur : Cuve 90 L galvanisée.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 90 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 292 L/min déclarés à 7,5 bar."
    ],
    "limitations": [
      "FAD déclaré par le constructeur à la pression de mesure indiquée, distincte du plafond de fonctionnement.",
      "La normalisation exclut les seules variantes de pression et de tension. Modèle et code fabricant retenus exacts.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-fini-minicube-p3",
      "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Minicube-Fini_EN_04-2024_9990399.pdf#page=3",
      "sourceLabel": "FINI, brochure constructeur MiniCUBE 2.2 kW, page PDF 3",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 ae9080bae3535de170f91db99852b2aa9cfd64c479340b249149724f40a08c4c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-fini-minicube-p3"
    ],
    "model": [
      "october4b-fini-minicube-p3"
    ],
    "maxPressureBar": [
      "october4b-fini-minicube-p3"
    ],
    "tankLiters": [
      "october4b-fini-minicube-p3"
    ],
    "fadCurve": [
      "october4b-fini-minicube-p3"
    ],
    "powerKw": [
      "october4b-fini-minicube-p3"
    ],
    "oilType": [
      "october4b-fini-minicube-p3"
    ],
    "dutyCycle": [
      "october4b-fini-minicube-p3"
    ],
    "mpn": [
      "october4b-fini-minicube-p3"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
