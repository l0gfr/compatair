const product: unknown = {
  "id": "fini-cube-4-0-10-es",
  "slug": "fini-cube-4-0-10-es",
  "brand": "Fini",
  "model": "CUBE 4.0-10 ES",
  "mpn": "V51PD92FNM543",
  "variant": {
    "familyId": "fini-cube-4-0-es",
    "label": "Montage au sol sans cuve intégrée avec sécheur frigorifique intégré",
    "distinguishingAttributes": {
      "équipement": "Montage au sol sans cuve intégrée avec sécheur frigorifique intégré",
      "pressionDeConfiguration": "10 bar",
      "cuve": "0 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 0,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 9.5,
      "litersPerMinute": 460
    }
  ],
  "dutyCycle": 1,
  "powerKw": 4,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/fini-cube-4-0-10-es.svg",
    "alt": "Repères techniques : Fini CUBE 4.0-10 ES",
    "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Cube-Fini_EN_04-2024_9990397.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Montage au sol sans cuve intégrée avec sécheur frigorifique intégré",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Montage au sol sans stockage intégré documenté",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Air livré à 9,5 bar",
      "value": "460 L/min",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    }
  ],
  "editorial": {
    "overview": "Fini CUBE 4.0-10 ES. 460 L/min déclarés à 9,5 bar. Configuration constructeur : Montage au sol sans cuve intégrée avec sécheur frigorifique intégré.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Montage sans réservoir intégré explicitement documenté.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 460 L/min déclarés à 9,5 bar."
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
      "id": "october4b-fini-cube-p3",
      "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Cube-Fini_EN_04-2024_9990397.pdf#page=3",
      "sourceLabel": "FINI, brochure constructeur CUBE 4-7.5 kW, page PDF 3",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 270d2f554801e15883dd85b3f3b6089c641adf51dd59c15f31e0fd06c7b88e1a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-fini-cube-p1",
      "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Cube-Fini_EN_04-2024_9990397.pdf#page=1",
      "sourceLabel": "FINI, brochure constructeur CUBE 4-7.5 kW, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 270d2f554801e15883dd85b3f3b6089c641adf51dd59c15f31e0fd06c7b88e1a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-fini-cube-p3"
    ],
    "maxPressureBar": [
      "october4b-fini-cube-p3"
    ],
    "tankLiters": [
      "october4b-fini-cube-p3"
    ],
    "fadCurve": [
      "october4b-fini-cube-p3"
    ],
    "powerKw": [
      "october4b-fini-cube-p3"
    ],
    "oilType": [
      "october4b-fini-cube-p1"
    ],
    "dutyCycle": [
      "october4b-fini-cube-p3"
    ],
    "mpn": [
      "october4b-fini-cube-p3"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
