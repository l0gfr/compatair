import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "shamal-ghibli-4-0-08-200",
  "slug": "shamal-ghibli-4-0-08-200",
  "brand": "Shamal",
  "model": "GHIBLI 4.0-08-200",
  "mpn": "V77JR92SHA572",
  "variant": {
    "familyId": "shamal-ghibli-4-0-200",
    "label": "GHIBLI 4.0-08-200",
    "distinguishingAttributes": {
      "équipement": "GHIBLI 4.0-08-200",
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
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-ghibli-4-0-08-200.svg",
    "alt": "Repères techniques : Shamal GHIBLI 4.0-08-200",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/137_6eec044a62a122f209e5a0d5e9e7f0f3.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "GHIBLI 4.0-08-200",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p13"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p13"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p13"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "580 L/min",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p13"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4b-shamal-ghibli-storm-p13"
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
        "october4b-shamal-ghibli-storm-p13"
      ]
    }
  ],
  "editorial": {
    "overview": "Shamal GHIBLI 4.0-08-200. 580 L/min déclarés à 8 bar. Configuration constructeur : GHIBLI 4.0-08-200.",
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
      "id": "october4b-shamal-ghibli-storm-p13",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/137_6eec044a62a122f209e5a0d5e9e7f0f3.html#page=13",
      "sourceLabel": "Shamal, catalogue Ghibli Storm constructeur, page PDF 13",
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
      "october4b-shamal-ghibli-storm-p13"
    ],
    "maxPressureBar": [
      "october4b-shamal-ghibli-storm-p13"
    ],
    "tankLiters": [
      "october4b-shamal-ghibli-storm-p13"
    ],
    "fadCurve": [
      "october4b-shamal-ghibli-storm-p13"
    ],
    "powerKw": [
      "october4b-shamal-ghibli-storm-p13"
    ],
    "oilType": [
      "october4b-shamal-ghibli-storm-p1"
    ],
    "dutyCycle": [
      "october4b-shamal-ghibli-storm-p8"
    ],
    "mpn": [
      "october4b-shamal-ghibli-storm-p13"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
