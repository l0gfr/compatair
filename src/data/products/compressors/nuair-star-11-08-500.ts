import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "nuair-star-11-08-500",
  "slug": "nuair-star-11-08-500",
  "brand": "Nuair",
  "model": "STAR 11-08-500",
  "mpn": "V83SN92N1N344",
  "variant": {
    "familyId": "nuair-star-11-500",
    "label": "STAR 11-08-500",
    "distinguishingAttributes": {
      "équipement": "STAR 11-08-500",
      "pressionDeConfiguration": "8 bar",
      "cuve": "500 L"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 8,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 1650
    }
  ],
  "dutyCycle": 1,
  "powerKw": 11,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-star-11-08-500.svg",
    "alt": "Repères techniques : Nuair STAR 11-08-500",
    "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/7-5-22-kw-star-vega/item/download/180_63ea4e42712a56cfeaeb57e7958480b4",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "STAR 11-08-500",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Air livré à 7,5 bar",
      "value": "1 650 L/min",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4b-nuair-star-vega-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair STAR 11-08-500. 1 650 L/min déclarés à 7,5 bar. Configuration constructeur : STAR 11-08-500.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 650 L/min déclarés à 7,5 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-star-vega-p5",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/7-5-22-kw-star-vega/item/download/180_63ea4e42712a56cfeaeb57e7958480b4#page=5",
      "sourceLabel": "NUAIR, catalogue Star Vega constructeur, page PDF 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 64ff835de391da58b7ae2870a5dc681fb577355b5ad0ba94e7f39b07a389bb78 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-nuair-star-vega-p2",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/7-5-22-kw-star-vega/item/download/180_63ea4e42712a56cfeaeb57e7958480b4#page=2",
      "sourceLabel": "NUAIR, catalogue Star Vega constructeur, page PDF 2",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 64ff835de391da58b7ae2870a5dc681fb577355b5ad0ba94e7f39b07a389bb78 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-nuair-star-vega-p5"
    ],
    "model": [
      "october4b-nuair-star-vega-p5"
    ],
    "maxPressureBar": [
      "october4b-nuair-star-vega-p5"
    ],
    "tankLiters": [
      "october4b-nuair-star-vega-p5"
    ],
    "fadCurve": [
      "october4b-nuair-star-vega-p5"
    ],
    "powerKw": [
      "october4b-nuair-star-vega-p5"
    ],
    "dutyCycle": [
      "october4b-nuair-star-vega-p2"
    ],
    "mpn": [
      "october4b-nuair-star-vega-p5"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
