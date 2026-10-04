const product: unknown = {
  "id": "nuair-sirio-55-08",
  "slug": "nuair-sirio-55-08",
  "brand": "Nuair",
  "model": "SIRIO 55-08",
  "mpn": "V60BR92N1NA64",
  "variant": {
    "familyId": "nuair-sirio-55",
    "label": "SIRIO 55-08",
    "distinguishingAttributes": {
      "équipement": "SIRIO 55-08",
      "pressionDeConfiguration": "7,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.5,
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 8600
    }
  ],
  "dutyCycle": 1,
  "powerKw": 55,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-sirio-55-08.svg",
    "alt": "Repères techniques : Nuair SIRIO 55-08",
    "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SIRIO 55-08",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p19"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "7,5 bar",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p19"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p19"
      ]
    },
    {
      "label": "Air livré à 7,5 bar",
      "value": "8 600 L/min",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p19"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "55 kW",
      "evidenceIds": [
        "october4b-nuair-mercury-sirio-p19"
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
        "october4b-nuair-mercury-sirio-p19"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair SIRIO 55-08. 8 600 L/min déclarés à 7,5 bar. Configuration constructeur : SIRIO 55-08.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 8 600 L/min déclarés à 7,5 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Cuve non qualifiée : le tiret ou l’absence de colonne ne suffit pas à démontrer un stockage nul.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-mercury-sirio-p19",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff#page=19",
      "sourceLabel": "NUAIR, catalogue Mercury Sirio constructeur, page PDF 19",
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
      "october4b-nuair-mercury-sirio-p19"
    ],
    "maxPressureBar": [
      "october4b-nuair-mercury-sirio-p19"
    ],
    "fadCurve": [
      "october4b-nuair-mercury-sirio-p19"
    ],
    "powerKw": [
      "october4b-nuair-mercury-sirio-p19"
    ],
    "dutyCycle": [
      "october4b-nuair-mercury-sirio-p5"
    ],
    "mpn": [
      "october4b-nuair-mercury-sirio-p19"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
