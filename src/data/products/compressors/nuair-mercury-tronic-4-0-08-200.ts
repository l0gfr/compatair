const product: unknown = {
  "id": "nuair-mercury-tronic-4-0-08-200",
  "slug": "nuair-mercury-tronic-4-0-08-200",
  "brand": "Nuair",
  "model": "MERCURY Tronic 4.0-08-200",
  "mpn": "V77JR92N1NA44",
  "variant": {
    "familyId": "nuair-mercury-tronic-4-0-200",
    "label": "MERCURY Tronic 4.0-08-200",
    "distinguishingAttributes": {
      "équipement": "MERCURY Tronic 4.0-08-200",
      "pressionDeConfiguration": "8 bar",
      "cuve": "200 L"
    }
  },
  "tankLiters": 200,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 580
    }
  ],
  "dutyCycle": 1,
  "powerKw": 4,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-mercury-tronic-4-0-08-200.svg",
    "alt": "Repères techniques : Nuair MERCURY Tronic 4.0-08-200",
    "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "MERCURY Tronic 4.0-08-200",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p11"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p11"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "580 L/min",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p11"
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
        "october4b-nuair-mercury-sirio-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair MERCURY Tronic 4.0-08-200. 580 L/min déclarés à 8 bar. Configuration constructeur : MERCURY Tronic 4.0-08-200.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 580 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-mercury-sirio-p11",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff#page=11",
      "sourceLabel": "NUAIR, catalogue Mercury Sirio constructeur, page PDF 11",
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
      "october4b-nuair-mercury-sirio-p11"
    ],
    "maxPressureBar": [
      "october4b-nuair-mercury-sirio-p11"
    ],
    "tankLiters": [
      "october4b-nuair-mercury-sirio-p11"
    ],
    "fadCurve": [
      "october4b-nuair-mercury-sirio-p11"
    ],
    "powerKw": [
      "october4b-nuair-mercury-sirio-p11"
    ],
    "dutyCycle": [
      "october4b-nuair-mercury-sirio-p5"
    ],
    "mpn": [
      "october4b-nuair-mercury-sirio-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
