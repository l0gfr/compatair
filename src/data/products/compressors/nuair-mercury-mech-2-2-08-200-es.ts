const product: unknown = {
  "id": "nuair-mercury-mech-2-2-08-200-es",
  "slug": "nuair-mercury-mech-2-2-08-200-es",
  "brand": "Nuair",
  "model": "MERCURY Mech 2.2-08-200 ES",
  "mpn": "V77JU72N1N644",
  "variant": {
    "familyId": "nuair-mercury-mech-2-2-200-es",
    "label": "MERCURY Mech 2.2-08-200 ES",
    "distinguishingAttributes": {
      "équipement": "MERCURY Mech 2.2-08-200 ES",
      "pressionDeConfiguration": "8 bar",
      "cuve": "200 L"
    }
  },
  "tankLiters": 200,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 325
    }
  ],
  "dutyCycle": 1,
  "powerKw": 2.2,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-mercury-mech-2-2-08-200-es.svg",
    "alt": "Repères techniques : Nuair MERCURY Mech 2.2-08-200 ES",
    "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "MERCURY Mech 2.2-08-200 ES",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p9"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p9"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p9"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "325 L/min",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p9"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p9"
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
        "october4b-nuair-mercury-sirio-p9"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair MERCURY Mech 2.2-08-200 ES. 325 L/min déclarés à 8 bar. Configuration constructeur : MERCURY Mech 2.2-08-200 ES.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 325 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-mercury-sirio-p9",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff#page=9",
      "sourceLabel": "NUAIR, catalogue Mercury Sirio constructeur, page PDF 9",
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
      "october4b-nuair-mercury-sirio-p9"
    ],
    "maxPressureBar": [
      "october4b-nuair-mercury-sirio-p9"
    ],
    "tankLiters": [
      "october4b-nuair-mercury-sirio-p9"
    ],
    "fadCurve": [
      "october4b-nuair-mercury-sirio-p9"
    ],
    "powerKw": [
      "october4b-nuair-mercury-sirio-p9"
    ],
    "dutyCycle": [
      "october4b-nuair-mercury-sirio-p5"
    ],
    "mpn": [
      "october4b-nuair-mercury-sirio-p9"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
