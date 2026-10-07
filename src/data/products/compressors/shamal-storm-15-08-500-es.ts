import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "shamal-storm-15-08-500-es",
  "slug": "shamal-storm-15-08-500-es",
  "brand": "Shamal",
  "model": "STORM 15-08-500 ES",
  "mpn": "V83NP92SHA872",
  "variant": {
    "familyId": "shamal-storm-15-500-es",
    "label": "STORM 15-08-500 ES",
    "distinguishingAttributes": {
      "équipement": "STORM 15-08-500 ES",
      "pressionDeConfiguration": "8 bar",
      "cuve": "500 L"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 2150
    }
  ],
  "dutyCycle": 1,
  "powerKw": 15,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-storm-15-08-500-es.svg",
    "alt": "Repères techniques : Shamal STORM 15-08-500 ES",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/137_6eec044a62a122f209e5a0d5e9e7f0f3.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "STORM 15-08-500 ES",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p15"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p15"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p15"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "2 150 L/min",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p15"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p15"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p8"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p15"
      ]
    }
  ],
  "editorial": {
    "overview": "Shamal STORM 15-08-500 ES. 2 150 L/min déclarés à 8 bar. Configuration constructeur : STORM 15-08-500 ES.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 150 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer."
    ]
  },
  "evidence": [
    {
      "id": "october4b-shamal-ghibli-storm-p15",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/137_6eec044a62a122f209e5a0d5e9e7f0f3.html#page=15",
      "sourceLabel": "Shamal, catalogue Ghibli Storm constructeur, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 1b5133ca855ed01c80f35e95347f5df15414a9ac7138dfe459137b4bca7c55c8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-shamal-ghibli-storm-p1",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/137_6eec044a62a122f209e5a0d5e9e7f0f3.html#page=1",
      "sourceLabel": "Shamal, catalogue Ghibli Storm constructeur, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 1b5133ca855ed01c80f35e95347f5df15414a9ac7138dfe459137b4bca7c55c8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-shamal-ghibli-storm-p8",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/137_6eec044a62a122f209e5a0d5e9e7f0f3.html#page=8",
      "sourceLabel": "Shamal, catalogue Ghibli Storm constructeur, page PDF 8",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 1b5133ca855ed01c80f35e95347f5df15414a9ac7138dfe459137b4bca7c55c8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-shamal-ghibli-storm-p15"
    ],
    "maxPressureBar": [
      "october4b-shamal-ghibli-storm-p15"
    ],
    "tankLiters": [
      "october4b-shamal-ghibli-storm-p15"
    ],
    "fadCurve": [
      "october4b-shamal-ghibli-storm-p15"
    ],
    "powerKw": [
      "october4b-shamal-ghibli-storm-p15"
    ],
    "oilType": [
      "october4b-shamal-ghibli-storm-p1"
    ],
    "dutyCycle": [
      "october4b-shamal-ghibli-storm-p8"
    ],
    "mpn": [
      "october4b-shamal-ghibli-storm-p15"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
