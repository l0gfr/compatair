import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-rta-7-5-10",
  "slug": "puska-rta-7-5-10",
  "brand": "Puska",
  "model": "RTA 7.5 10",
  "mpn": "4152 0578 84",
  "variant": {
    "familyId": "puska-rta-7-5",
    "label": "RTA 7.5 10",
    "distinguishingAttributes": {
      "équipement": "RTA 7.5 10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 741
    }
  ],
  "powerKw": 5.5,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-rta-7-5-10.svg",
    "alt": "Repères techniques : Puska RTA 7.5 10",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "RTA 7.5 10",
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
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "741 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p36"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
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
    "overview": "Puska RTA 7.5 10. 741 L/min déclarés à 10 bar. Configuration constructeur : RTA 7.5 10.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 741 L/min déclarés à 10 bar."
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
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p36"
    ],
    "model": [
      "october4b-puska-catalog-2025-p36"
    ],
    "maxPressureBar": [
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
