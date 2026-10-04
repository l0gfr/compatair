const product: unknown = {
  "id": "puska-ixo-10s-10-400-50-200-ce",
  "slug": "puska-ixo-10s-10-400-50-200-ce",
  "brand": "Puska",
  "model": "IXO 10S 10 400/50 200 CE",
  "mpn": "1839 0324 49",
  "variant": {
    "familyId": "puska-ixo-10s-200-ce",
    "label": "IXO 10S 10 400/50 200 CE",
    "distinguishingAttributes": {
      "équipement": "IXO 10S 10 400/50 200 CE",
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
      "litersPerMinute": 848
    }
  ],
  "powerKw": 7.5,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-ixo-10s-10-400-50-200-ce.svg",
    "alt": "Repères techniques : Puska IXO 10S 10 400/50 200 CE",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "IXO 10S 10 400/50 200 CE",
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
      "value": "848 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p26"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
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
    }
  ],
  "editorial": {
    "overview": "Puska IXO 10S 10 400/50 200 CE. 848 L/min déclarés à 10 bar. Configuration constructeur : IXO 10S 10 400/50 200 CE.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 848 L/min déclarés à 10 bar."
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
    }
  ],
  "fieldSources": {
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
