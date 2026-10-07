import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "lupamat-lkv-22-d-plus",
  "slug": "lupamat-lkv-22-d-plus",
  "brand": "Lupamat",
  "model": "LKV 22 D PLUS",
  "variant": {
    "familyId": "lupamat-lkv-22-d-plus",
    "label": "LKV 22 D PLUS",
    "distinguishingAttributes": {
      "équipement": "LKV 22 D PLUS",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 2420
    }
  ],
  "powerKw": 22,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/lupamat-lkv-22-d-plus.svg",
    "alt": "Repères techniques : Lupamat LKV 22 D PLUS",
    "sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "LKV 22 D PLUS",
      "evidenceIds": [
        "october4b-lupamat-current-catalog-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4b-lupamat-current-catalog-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-lupamat-current-catalog-p11"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "2 420 L/min",
      "evidenceIds": [
        "october4b-lupamat-current-catalog-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4b-lupamat-current-catalog-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-lupamat-current-catalog-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "Lupamat LKV 22 D PLUS. 2 420 L/min déclarés à 13 bar. Configuration constructeur : LKV 22 D PLUS.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 420 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "La cuve et la fréquence électrique ne sont pas documentées par les tableaux retenus.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-lupamat-current-catalog-p11",
      "sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=11",
      "sourceLabel": "Lupamat, catalogue constructeur, page PDF 11",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-lupamat-current-catalog-p10",
      "sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=10",
      "sourceLabel": "Lupamat, catalogue constructeur, page PDF 10",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-lupamat-current-catalog-p11"
    ],
    "model": [
      "october4b-lupamat-current-catalog-p11"
    ],
    "maxPressureBar": [
      "october4b-lupamat-current-catalog-p11"
    ],
    "fadCurve": [
      "october4b-lupamat-current-catalog-p11"
    ],
    "powerKw": [
      "october4b-lupamat-current-catalog-p11"
    ],
    "oilType": [
      "october4b-lupamat-current-catalog-p10"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
