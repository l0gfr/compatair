const product: unknown = {
  "id": "shamal-bora-5-5-10-270",
  "slug": "shamal-bora-5-5-10-270",
  "brand": "Shamal",
  "model": "BORA 5.5-10-270",
  "mpn": "V91PS92SHAA72",
  "variant": {
    "familyId": "shamal-bora-5-5-270",
    "label": "BORA 5.5-10-270",
    "distinguishingAttributes": {
      "équipement": "BORA 5.5-10-270",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 710
    }
  ],
  "powerKw": 5.5,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-bora-5-5-10-270.svg",
    "alt": "Repères techniques : Shamal BORA 5.5-10-270",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BORA 5.5-10-270",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "710 L/min",
      "evidenceIds": [
        "october4b-shamal-bora-p20"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
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
    "overview": "Shamal BORA 5.5-10-270. 710 L/min déclarés à 10 bar. Configuration constructeur : BORA 5.5-10-270.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 710 L/min déclarés à 10 bar."
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
