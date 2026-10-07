import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-pke-3-vf-dry-10-200",
  "slug": "puska-pke-3-vf-dry-10-200",
  "brand": "Puska",
  "model": "PKE 3 VF DRY 10 200",
  "mpn": "4152 0601 83",
  "variant": {
    "familyId": "puska-pke-3-vf-dry-200",
    "label": "PKE 3 VF DRY 10 200",
    "distinguishingAttributes": {
      "équipement": "PKE 3 VF DRY 10 200",
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
      "litersPerMinute": 294
    }
  ],
  "powerKw": 2.2,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-pke-3-vf-dry-10-200.svg",
    "alt": "Repères techniques : Puska PKE 3 VF DRY 10 200",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PKE 3 VF DRY 10 200",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p32"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p32"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p32"
      ]
    },
    {
      "label": "FAD maximal déclaré à 10 bar",
      "value": "294 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p32"
      ]
    },
    {
      "label": "FAD minimal déclaré à 10 bar",
      "value": "132 L/min ; minimum de la plage publiée, distinct de la capacité maximale",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p32"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p32"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p32"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska PKE 3 VF DRY 10 200. 294 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : PKE 3 VF DRY 10 200.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 294 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Le FAD retenu est le maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de vitesse ni cycle de service n’est déduit.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p32",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=32",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 32",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p32"
    ],
    "model": [
      "october4b-puska-catalog-2025-p32"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p32"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p32"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p32"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p32"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p32"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
