const product: unknown = {
  "id": "puska-pke-5-5-10-k-200-c",
  "slug": "puska-pke-5-5-10-k-200-c",
  "brand": "Puska",
  "model": "PKE 5,5 10 K 200 C",
  "mpn": "4152 0505 49",
  "variant": {
    "familyId": "puska-pke-5-5-k-200-c",
    "label": "PKE 5,5 10 K 200 C",
    "distinguishingAttributes": {
      "équipement": "PKE 5,5 10 K 200 C",
      "pressionDeConfiguration": "10 bar",
      "cuve": "200 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 200,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 516
    }
  ],
  "powerKw": 4,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-pke-5-5-10-k-200-c.svg",
    "alt": "Repères techniques : Puska PKE 5,5 10 K 200 C",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PKE 5,5 10 K 200 C",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "516 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska PKE 5,5 10 K 200 C. 516 L/min déclarés à 10 bar. Configuration constructeur : PKE 5,5 10 K 200 C.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 516 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p29",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=29",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-puska-catalog-2025-p29"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p29"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p29"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p29"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p29"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p29"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
