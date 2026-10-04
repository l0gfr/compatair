const product: unknown = {
  "id": "nuair-mercury-mech-2-2-08",
  "slug": "nuair-mercury-mech-2-2-08",
  "brand": "Nuair",
  "model": "MERCURY Mech 2.2-08",
  "mpn": "V51JU72N1N564",
  "variant": {
    "familyId": "nuair-mercury-mech-2-2",
    "label": "MERCURY Mech 2.2-08",
    "distinguishingAttributes": {
      "équipement": "MERCURY Mech 2.2-08",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée"
    }
  },
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
    "src": "/images/products/nuair-mercury-mech-2-2-08.svg",
    "alt": "Repères techniques : Nuair MERCURY Mech 2.2-08",
    "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "MERCURY Mech 2.2-08",
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
      "value": "Non documentée en litres",
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
    "overview": "Nuair MERCURY Mech 2.2-08. 325 L/min déclarés à 8 bar. Configuration constructeur : MERCURY Mech 2.2-08.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 325 L/min déclarés à 8 bar."
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
