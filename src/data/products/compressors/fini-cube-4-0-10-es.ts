import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
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
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 9.5,
      "litersPerMinute": 460
    }
  ],
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
      "label": "Code",
      "value": "V51PD92FNM543",
      "evidenceIds": [
        "fini-cube-4-0-10-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Montage",
      "value": "Au sol, ES avec sécheur",
      "evidenceIds": [
        "fini-cube-4-0-10-es-reserved-20261103-1"
      ]
    },
    {
      "label": "FAD à 9,5 bar",
      "value": "460 L/min",
      "evidenceIds": [
        "fini-cube-4-0-10-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance",
      "value": "4 kW",
      "evidenceIds": [
        "fini-cube-4-0-10-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse nette",
      "value": "119 kg",
      "evidenceIds": [
        "fini-cube-4-0-10-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions nettes",
      "value": "650 × 580 × 750 mm",
      "evidenceIds": [
        "fini-cube-4-0-10-es-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation",
      "value": "400 V / 3 phases / 50 Hz",
      "evidenceIds": [
        "fini-cube-4-0-10-es-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Fini CUBE 4.0-10 ES. La CUBE 4.0-10 ES avec sécheur pèse 119 kg. Les codes au sol avec et sans ES partagent 460 L/min à 9,5 bar et le même encombrement, contre 119 et 98 kg nets. Les codes -270 ajoutent une cuve 270 L ; le sécheur ES exige son alimentation dédiée. La promesse 24/7 de gamme ne fournit pas un cycle numérique avec conditions thermiques.",
    "verifiedFacts": [
      "Code : V51PD92FNM543.",
      "Montage : Au sol, ES avec sécheur.",
      "FAD à 9,5 bar : 460 L/min.",
      "Puissance : 4 kW.",
      "Masse nette : 119 kg.",
      "Dimensions nettes : 650 × 580 × 750 mm.",
      "Alimentation : 400 V / 3 phases / 50 Hz."
    ],
    "limitations": [
      "FAD mesuré à 9,5 bar pour les versions 10 bar, entrée 20 °C et 1 bar atmosphérique, selon ISO 1217.",
      "Taux de marche numérique du groupe complet non établi par la promesse de gamme 24/7."
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
      "id": "fini-cube-4-0-10-es-reserved-20261103-1",
      "sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Cube-Fini_EN_04-2024_9990397.pdf#page=3",
      "sourceLabel": "Fini : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 270d2f554801e15883dd85b3f3b6089c641adf51dd59c15f31e0fd06c7b88e1a. La CUBE 4.0-10 ES avec sécheur pèse 119 kg. Les codes au sol avec et sans ES partagent 460 L/min à 9,5 bar et le même encombrement, contre 119 et 98 kg nets. Les codes -270 ajoutent une cuve 270 L ; le sécheur ES exige son alimentation dédiée. La promesse 24/7 de gamme ne fournit pas un cycle numérique avec conditions thermiques."
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
    "mpn": [
      "october4b-fini-cube-p3"
    ],
    "weightKg": [
      "fini-cube-4-0-10-es-reserved-20261103-1"
    ],
    "voltage": [
      "fini-cube-4-0-10-es-reserved-20261103-1"
    ],
    "phase": [
      "fini-cube-4-0-10-es-reserved-20261103-1"
    ],
    "editorial": [
      "fini-cube-4-0-10-es-reserved-20261103-1"
    ],
    "specifications": [
      "fini-cube-4-0-10-es-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ],
  "weightKg": 119,
  "voltage": "400 V / 50 Hz",
  "phase": "three-phase"
};

export default product;
