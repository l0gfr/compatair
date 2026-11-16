import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-ixo-5-5s-10-400-50-200-ce",
  "slug": "puska-ixo-5-5s-10-400-50-200-ce",
  "brand": "Puska",
  "model": "IXO 5,5S 10 400/50 200 CE",
  "mpn": "1839 0324 46",
  "variant": {
    "familyId": "puska-ixo-5-5s-200-ce",
    "label": "IXO 5,5S 10 400/50 200 CE",
    "distinguishingAttributes": {
      "équipement": "IXO 5,5S 10 400/50 200 CE",
      "pressionDeConfiguration": "10 bar",
      "cuve": "200 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 200,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 498
    }
  ],
  "powerKw": 4,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-ixo-5-5s-10-400-50-200-ce-technical-20261116-followup.svg",
    "alt": "Repères techniques : Puska IXO 5,5S 10 400/50 200 CE",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "IXO 5,5S 10 400/50 200 CE",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p26"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p26"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p26"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "498 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p26"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p26"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p26"
      ]
    },
    {
      "label": "Article",
      "value": "1839 0324 46",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-ixo-5-5s-10-400-50-200-ce:0"
      ]
    },
    {
      "label": "Équipement",
      "value": "Cuve 200 L avec sécheur",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-ixo-5-5s-10-400-50-200-ce:0"
      ]
    },
    {
      "label": "Dimensions largeur × longueur × hauteur",
      "value": "750 × 1 550 × 1 502 mm",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-ixo-5-5s-10-400-50-200-ce:0"
      ]
    },
    {
      "label": "Masse",
      "value": "180 kg",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-ixo-5-5s-10-400-50-200-ce:0"
      ]
    },
    {
      "label": "Alimentation",
      "value": "400 V triphasé / 50 Hz",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-ixo-5-5s-10-400-50-200-ce:0"
      ]
    },
    {
      "label": "Débit de la ligne 10 bar",
      "value": "498 L/min, ISO 1217 annexe C",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-ixo-5-5s-10-400-50-200-ce:0"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska IXO 5,5S 10 400/50 200 CE 1839032446 : groupe sur cuve de 200 L avec sécheur, 4 kW et 180 kg. La version sans S conserve le débit de 498 L/min dans la ligne 10 bar mais pèse 153 kg ; la base seule mesure 615 × 780 × 946 mm. Le sécheur et l’encombrement distinguent les configurations.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 498 L/min déclarés à 10 bar.",
      "Article : 1839 0324 46.",
      "Équipement : Cuve 200 L avec sécheur.",
      "Dimensions largeur × longueur × hauteur : 750 × 1 550 × 1 502 mm.",
      "Masse : 180 kg.",
      "Alimentation : 400 V triphasé / 50 Hz.",
      "Débit de la ligne 10 bar : 498 L/min, ISO 1217 annexe C."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p26",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=26",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 26",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-technical:puska-ixo-5-5s-10-400-50-200-ce:0",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
      "sourceLabel": "Puska, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Puska IXO 5,5S 10 400/50 200 CE 1839032446 : groupe sur cuve de 200 L avec sécheur, 4 kW et 180 kg. La version sans S conserve le débit de 498 L/min dans la ligne 10 bar mais pèse 153 kg ; la base seule mesure 615 × 780 × 946 mm. Le sécheur et l’encombrement distinguent les configurations. GET complet SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454. Pages PDF lues : 26."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p26"
    ],
    "model": [
      "october4b-puska-catalog-2025-p26"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p26"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p26"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p26"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p26"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p26"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
