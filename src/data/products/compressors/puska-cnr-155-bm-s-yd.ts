import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-cnr-155-bm-s-yd",
  "slug": "puska-cnr-155-bm-s-yd",
  "brand": "Puska",
  "model": "CNR 155/BM S YD",
  "mpn": "4116 0023 20",
  "variant": {
    "familyId": "puska-cnr-155-bm-s-yd",
    "label": "CNR 155/BM S YD",
    "distinguishingAttributes": {
      "équipement": "CNR 155/BM S YD",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "powerKw": 11,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-cnr-155-bm-s-yd.svg",
    "alt": "Repères techniques : Puska CNR 155/BM S YD",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "CNR 155/BM S YD",
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
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p18"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
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
      "label": "Débit déclaré, pression de mesure non appariée",
      "value": "1332 L/min",
      "evidenceIds": [
        "puska-cnr-155-bm-s-yd-reserved-20261101-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska CNR 155/BM S YD. La table distingue une pression maximale ou de configuration et le débit déclaré, sans convention explicite qui apparie le FAD à ce point. Retrait du point calculé ; conservation des chiffres documentaires et des unités.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Débit publié dans la documentation : 1332 L/min. Les limites de qualification du profil restent applicables."
    ],
    "limitations": [
      "La cuve n’est pas qualifiée : le tiret dans la colonne L ne démontre pas à lui seul un stockage nul.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "La table distingue une pression maximale ou de configuration et le débit déclaré, sans convention explicite qui apparie le FAD à ce point. Retrait du point calculé ; conservation des chiffres documentaires et des unités."
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
      "id": "puska-cnr-155-bm-s-yd-reserved-20261101-1",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=18",
      "sourceLabel": "Puska : revue factuelle du 1 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-01",
      "confidence": "B",
      "notes": "Corps complet GET HTTP200 SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454. Passage page=18. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
    "fadCurve": [
      "puska-cnr-155-bm-s-yd-reserved-20261101-1"
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
    "editorial": [
      "puska-cnr-155-bm-s-yd-reserved-20261101-1"
    ],
    "specifications": [
      "puska-cnr-155-bm-s-yd-reserved-20261101-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
