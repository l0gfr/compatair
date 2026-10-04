const product: unknown = {
  "id": "puska-pke-9s-10-270-c",
  "slug": "puska-pke-9s-10-270-c",
  "brand": "Puska",
  "model": "PKE 9S 10 270 C",
  "mpn": "4152 0505 85",
  "variant": {
    "familyId": "puska-pke-9s-270-c",
    "label": "PKE 9S 10 270 C",
    "distinguishingAttributes": {
      "équipement": "PKE 9S 10 270 C",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 984
    }
  ],
  "powerKw": 7.5,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-pke-9s-10-270-c.svg",
    "alt": "Repères techniques : Puska PKE 9S 10 270 C",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PKE 9S 10 270 C",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p30"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p30"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p30"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "984 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p30"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p30"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p30"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska PKE 9S 10 270 C. 984 L/min déclarés à 10 bar. Configuration constructeur : PKE 9S 10 270 C.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 984 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p30",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=30",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 30",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-puska-catalog-2025-p30"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p30"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p30"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p30"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p30"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p30"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
