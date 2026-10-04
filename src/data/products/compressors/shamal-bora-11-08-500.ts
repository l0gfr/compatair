const product: unknown = {
  "id": "shamal-bora-11-08-500",
  "slug": "shamal-bora-11-08-500",
  "brand": "Shamal",
  "model": "BORA 11-08-500",
  "mpn": "V83PU92SHAA72",
  "variant": {
    "familyId": "shamal-bora-11-500",
    "label": "BORA 11-08-500",
    "distinguishingAttributes": {
      "équipement": "BORA 11-08-500",
      "pressionDeConfiguration": "8 bar",
      "cuve": "500 L"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 1700
    }
  ],
  "powerKw": 11,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-bora-11-08-500.svg",
    "alt": "Repères techniques : Shamal BORA 11-08-500",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BORA 11-08-500",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "1 700 L/min",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    }
  ],
  "editorial": {
    "overview": "Shamal BORA 11-08-500. 1 700 L/min déclarés à 8 bar. Configuration constructeur : BORA 11-08-500.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 700 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
    ]
  },
  "evidence": [
    {
      "id": "october4b-shamal-bora-p20",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html#page=20",
      "sourceLabel": "Shamal, catalogue BORA constructeur, page PDF 20",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-shamal-bora-p1",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html#page=1",
      "sourceLabel": "Shamal, catalogue BORA constructeur, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-shamal-bora-p20"
    ],
    "maxPressureBar": [
      "october4b-shamal-bora-p20"
    ],
    "tankLiters": [
      "october4b-shamal-bora-p20"
    ],
    "fadCurve": [
      "october4b-shamal-bora-p20"
    ],
    "powerKw": [
      "october4b-shamal-bora-p20"
    ],
    "oilType": [
      "october4b-shamal-bora-p1"
    ],
    "mpn": [
      "october4b-shamal-bora-p20"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
