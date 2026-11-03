import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-cnr-55-270-s-yd",
  "slug": "puska-cnr-55-270-s-yd",
  "brand": "Puska",
  "model": "CNR 55/270 S YD",
  "mpn": "4116 0023 15",
  "variant": {
    "familyId": "puska-cnr-55-270-s-yd",
    "label": "CNR 55/270 S YD",
    "distinguishingAttributes": {
      "équipement": "CNR 55/270 S YD",
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
      "pressureBar": 10,
      "litersPerMinute": 492
    }
  ],
  "powerKw": 4,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-cnr-55-270-s-yd.svg",
    "alt": "Repères techniques : Puska CNR 55/270 S YD",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "CNR 55/270 S YD",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "492 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Code",
      "value": "4116 0023 15",
      "evidenceIds": [
        "puska-cnr-55-270-s-yd-reserved-20261103-1"
      ]
    },
    {
      "label": "Configuration",
      "value": "CNR 55/270 S YD sur cuve 270 L",
      "evidenceIds": [
        "puska-cnr-55-270-s-yd-reserved-20261103-1"
      ]
    },
    {
      "label": "Débit de la ligne 10 bar",
      "value": "492 L/min, caudal real ISO 1217 annexe C",
      "evidenceIds": [
        "puska-cnr-55-270-s-yd-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance",
      "value": "4 kW",
      "evidenceIds": [
        "puska-cnr-55-270-s-yd-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse",
      "value": "303 kg",
      "evidenceIds": [
        "puska-cnr-55-270-s-yd-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation",
      "value": "400 V / 3 phases / 50 Hz",
      "evidenceIds": [
        "puska-cnr-55-270-s-yd-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska CNR 55/270 S YD. La CNR 55/270 S YD sur cuve 270 L pèse 303 kg. La CNR 55 sur cuve et la CNR 55/BM partagent 492 L/min, mais annoncent 303 et 228 kg. La CNR 200/BM donne 1 860 L/min contre 1 332 pour la CNR 155/BM. Ces valeurs sont celles de Puska ; les valeurs d’une autre marque CNR ne sont pas transférées.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 492 L/min déclarés à 10 bar.",
      "Code : 4116 0023 15.",
      "Configuration : CNR 55/270 S YD sur cuve 270 L.",
      "Débit de la ligne 10 bar : 492 L/min, caudal real ISO 1217 annexe C.",
      "Puissance : 4 kW.",
      "Masse : 303 kg.",
      "Alimentation : 400 V / 3 phases / 50 Hz."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p18",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=18",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 18",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "puska-cnr-55-270-s-yd-reserved-20261103-1",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=18",
      "sourceLabel": "Puska : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454. La CNR 55/270 S YD sur cuve 270 L pèse 303 kg. La CNR 55 sur cuve et la CNR 55/BM partagent 492 L/min, mais annoncent 303 et 228 kg. La CNR 200/BM donne 1 860 L/min contre 1 332 pour la CNR 155/BM. Ces valeurs sont celles de Puska ; les valeurs d’une autre marque CNR ne sont pas transférées."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p18"
    ],
    "model": [
      "october4b-puska-catalog-2025-p18"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p18"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p18"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p18"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p18"
    ],
    "oilType": [
      "october4b-puska-catalog-2025-p18"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p18"
    ],
    "weightKg": [
      "puska-cnr-55-270-s-yd-reserved-20261103-1"
    ],
    "phase": [
      "puska-cnr-55-270-s-yd-reserved-20261103-1"
    ],
    "voltage": [
      "puska-cnr-55-270-s-yd-reserved-20261103-1"
    ],
    "editorial": [
      "puska-cnr-55-270-s-yd-reserved-20261103-1"
    ],
    "specifications": [
      "puska-cnr-55-270-s-yd-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ],
  "weightKg": 303,
  "phase": "three-phase",
  "voltage": "400 V / 50 Hz"
};

export default product;
