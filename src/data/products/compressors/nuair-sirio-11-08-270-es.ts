const product: unknown = {
  "id": "nuair-sirio-11-08-270-es",
  "slug": "nuair-sirio-11-08-270-es",
  "brand": "Nuair",
  "model": "SIRIO 11-08-270 ES",
  "mpn": "V91NL92N1N244",
  "variant": {
    "familyId": "nuair-sirio-11-270-es",
    "label": "SIRIO 11-08-270 ES",
    "distinguishingAttributes": {
      "équipement": "SIRIO 11-08-270 ES",
      "pressionDeConfiguration": "8 bar",
      "cuve": "270 L"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 1650
    }
  ],
  "dutyCycle": 1,
  "powerKw": 11,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-sirio-11-08-270-es.svg",
    "alt": "Repères techniques : Nuair SIRIO 11-08-270 ES",
    "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SIRIO 11-08-270 ES",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p13"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p13"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p13"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "1 650 L/min",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p13"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p13"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p5"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p13"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair SIRIO 11-08-270 ES. 1 650 L/min déclarés à 8 bar. Configuration constructeur : SIRIO 11-08-270 ES.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 650 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-mercury-sirio-p13",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff#page=13",
      "sourceLabel": "NUAIR, catalogue Mercury Sirio constructeur, page PDF 13",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 8bb805eb71b9abbbd8ebf0c77804627936254c8b8c227e0fe7673395e13c04b8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-nuair-mercury-sirio-p5",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff#page=5",
      "sourceLabel": "NUAIR, catalogue Mercury Sirio constructeur, page PDF 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 8bb805eb71b9abbbd8ebf0c77804627936254c8b8c227e0fe7673395e13c04b8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-nuair-mercury-sirio-p13"
    ],
    "maxPressureBar": [
      "october4b-nuair-mercury-sirio-p13"
    ],
    "tankLiters": [
      "october4b-nuair-mercury-sirio-p13"
    ],
    "fadCurve": [
      "october4b-nuair-mercury-sirio-p13"
    ],
    "powerKw": [
      "october4b-nuair-mercury-sirio-p13"
    ],
    "dutyCycle": [
      "october4b-nuair-mercury-sirio-p5"
    ],
    "mpn": [
      "october4b-nuair-mercury-sirio-p13"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
