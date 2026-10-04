const product: unknown = {
  "id": "puska-pkm-20-10-fm",
  "slug": "puska-pkm-20-10-fm",
  "brand": "Puska",
  "model": "PKM 20 10 FM",
  "mpn": "4152 0213 19",
  "variant": {
    "familyId": "puska-pkm-20-fm",
    "label": "PKM 20 10 FM",
    "distinguishingAttributes": {
      "équipement": "PKM 20 10 FM",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 1680
    }
  ],
  "powerKw": 15,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-pkm-20-10-fm.svg",
    "alt": "Repères techniques : Puska PKM 20 10 FM",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PKM 20 10 FM",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p33"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p33"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p33"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "1 680 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p33"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p33"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p33"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska PKM 20 10 FM. 1 680 L/min déclarés à 10 bar. Configuration constructeur : PKM 20 10 FM.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 680 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "La cuve n’est pas qualifiée : le tiret dans la colonne L ne démontre pas à lui seul un stockage nul.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p33",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=33",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 33",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-puska-catalog-2025-p33"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p33"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p33"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p33"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p33"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
