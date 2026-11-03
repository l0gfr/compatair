import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "shamal-bora-15-10-500-es",
  "slug": "shamal-bora-15-10-500-es",
  "brand": "Shamal",
  "model": "BORA 15-10-500 ES",
  "mpn": "V83PV92SHAB72",
  "variant": {
    "familyId": "shamal-bora-15-500-es",
    "label": "BORA 15-10-500 ES",
    "distinguishingAttributes": {
      "équipement": "BORA 15-10-500 ES",
      "pressionDeConfiguration": "10 bar",
      "cuve": "500 L"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 2100
    }
  ],
  "powerKw": 15,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-bora-15-10-500-es.svg",
    "alt": "Repères techniques : Shamal BORA 15-10-500 ES",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BORA 15-10-500 ES",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "2 100 L/min",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Code",
      "value": "V83PV92SHAB72",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Cuve",
      "value": "500 L",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Sécheur",
      "value": "Intégré, version ES",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Débit mesuré à10 bar",
      "value": "2 100 L/min",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance",
      "value": "15 kW",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse nette",
      "value": "420 kg",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse brute avec emballage",
      "value": "460 kg",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions nettes",
      "value": "2 000 × 730 × 1 660 mm",
      "evidenceIds": [
        "shamal-bora-15-10-500-es-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Shamal BORA 15-10-500 ES. La BORA15-10-500ES intègre cuve 500 L et sécheur. La version 500 sansES conserve le débit mais pèse375 kg contre 420 kg ; la version 7,5 kW en500ES publie1 050 L/min à10 bar. Masse nette, emballage et équipement restent séparés.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 100 L/min déclarés à 10 bar.",
      "Code : V83PV92SHAB72.",
      "Cuve : 500 L.",
      "Sécheur : Intégré, version ES.",
      "Débit mesuré à10 bar : 2 100 L/min.",
      "Puissance : 15 kW.",
      "Masse nette : 420 kg.",
      "Masse brute avec emballage : 460 kg.",
      "Dimensions nettes : 2 000 × 730 × 1 660 mm."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
    ]
  },
  "evidence": [
    {
      "id": "october4b-shamal-bora-p20",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html#page=20",
      "sourceLabel": "Shamal, catalogue BORA constructeur, page PDF 20",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-shamal-bora-p1",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html#page=1",
      "sourceLabel": "Shamal, catalogue BORA constructeur, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "shamal-bora-15-10-500-es-reserved-20261103-1",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html#page=20",
      "sourceLabel": "Shamal : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04. La BORA15-10-500ES intègre cuve 500 L et sécheur. La version 500 sansES conserve le débit mais pèse375 kg contre 420 kg ; la version 7,5 kW en500ES publie1 050 L/min à10 bar. Masse nette, emballage et équipement restent séparés."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-shamal-bora-p20"
    ],
    "maxPressureBar": [
      "october4b-shamal-bora-p20"
    ],
    "tankLiters": [
      "october4b-shamal-bora-p20"
    ],
    "fadCurve": [
      "october4b-shamal-bora-p20"
    ],
    "powerKw": [
      "shamal-bora-15-10-500-es-reserved-20261103-1"
    ],
    "oilType": [
      "october4b-shamal-bora-p1"
    ],
    "mpn": [
      "october4b-shamal-bora-p20"
    ],
    "weightKg": [
      "shamal-bora-15-10-500-es-reserved-20261103-1"
    ],
    "editorial": [
      "shamal-bora-15-10-500-es-reserved-20261103-1"
    ],
    "specifications": [
      "shamal-bora-15-10-500-es-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ],
  "weightKg": 420
};

export default product;
