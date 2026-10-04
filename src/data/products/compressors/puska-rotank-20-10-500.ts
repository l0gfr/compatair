const product: unknown = {
  "id": "puska-rotank-20-10-500",
  "slug": "puska-rotank-20-10-500",
  "brand": "Puska",
  "model": "ROTANK 20 10 500",
  "mpn": "4152 0579 35",
  "variant": {
    "familyId": "puska-rotank-20-500",
    "label": "ROTANK 20 10 500",
    "distinguishingAttributes": {
      "équipement": "ROTANK 20 10 500",
      "pressionDeConfiguration": "10 bar",
      "cuve": "500 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 1982
    }
  ],
  "powerKw": 15,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-rotank-20-10-500.svg",
    "alt": "Repères techniques : Puska ROTANK 20 10 500",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "ROTANK 20 10 500",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "1 982 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska ROTANK 20 10 500. 1 982 L/min déclarés à 10 bar. Configuration constructeur : ROTANK 20 10 500.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 982 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p36",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=36",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 36",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-puska-catalog-2025-p36"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p36"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p36"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p36"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p36"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p36"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
