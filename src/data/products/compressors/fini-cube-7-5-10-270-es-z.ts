import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "fini-cube-7-5-10-270-es-z",
  "slug": "fini-cube-7-5-10-270-es-z",
  "brand": "Fini",
  "model": "CUBE 7.5-10-270 ES Z",
  "mpn": "V91PO92FNM501",
  "variant": {
    "familyId": "fini-cube-7-5-270-es-z",
    "label": "Cuve 270 L galvanisée avec sécheur frigorifique intégré",
    "distinguishingAttributes": {
      "équipement": "Cuve 270 L galvanisée avec sécheur frigorifique intégré",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 9.5,
      "litersPerMinute": 1050
    }
  ],
  "dutyCycle": 1,
  "powerKw": 7.5,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/fini-cube-7-5-10-270-es-z-technical-20261116-followup.svg",
    "alt": "Repères techniques : Fini CUBE 7.5-10-270 ES Z",
    "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Cube-Fini_EN_04-2024_9990397.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Cuve 270 L galvanisée avec sécheur frigorifique intégré",
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
      "value": "270 L",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Air livré à 9,5 bar",
      "value": "1 050 L/min",
      "evidenceIds": [
        "october4b-fini-cube-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
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
    },
    {
      "label": "Référence et équipement",
      "value": "V91PO92FNM501 ; sécheur frigorifique et cuve galvanisée270 L",
      "evidenceIds": [
        "review:2026-11-16-technical:fini-cube-7-5-10-270-es-z:0"
      ]
    },
    {
      "label": "Dimensions et masse nettes",
      "value": "1200 × 600 × 1450 mm ; 215 kg",
      "evidenceIds": [
        "review:2026-11-16-technical:fini-cube-7-5-10-270-es-z:0"
      ]
    },
    {
      "label": "Conditions de mesure",
      "value": "ISO1217 ; air aspiré20°C, pression atmosphérique1 bar ; débit mesuré9,5 bar pour version10 bar",
      "evidenceIds": [
        "review:2026-11-16-technical:fini-cube-7-5-10-270-es-z:0"
      ]
    }
  ],
  "editorial": {
    "overview": "La CUBE7.5-10-270 ES Z combine cuve galvanisée270 L et sécheur frigorifique intégré, codeV91PO92FNM501. ES ajoute le sécheur ; Z indique la galvanisation. Son FAD reste1050 L/min à9,5 bar, comme la version à cuve peinte.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 050 L/min déclarés à 9,5 bar.",
      "Référence et équipement : V91PO92FNM501 ; sécheur frigorifique et cuve galvanisée270 L.",
      "Dimensions et masse nettes : 1200 × 600 × 1450 mm ; 215 kg.",
      "Conditions de mesure : ISO1217 ; air aspiré20°C, pression atmosphérique1 bar ; débit mesuré9,5 bar pour version10 bar."
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
    },
    {
      "id": "review:2026-11-16-technical:fini-cube-7-5-10-270-es-z:0",
      "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Cube-Fini_EN_04-2024_9990397.pdf",
      "sourceLabel": "Fini, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "La CUBE7.5-10-270 ES Z combine cuve galvanisée270 L et sécheur frigorifique intégré, codeV91PO92FNM501. ES ajoute le sécheur ; Z indique la galvanisation. Son FAD reste1050 L/min à9,5 bar, comme la version à cuve peinte. GET complet SHA-256 270d2f554801e15883dd85b3f3b6089c641adf51dd59c15f31e0fd06c7b88e1a. Pages PDF lues : 1, 3."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-fini-cube-p3"
    ],
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
