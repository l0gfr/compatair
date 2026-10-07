import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "hertz-hsc-160",
  "slug": "hertz-hsc-160",
  "brand": "Hertz",
  "model": "HSC 160",
  "variant": {
    "familyId": "hertz-hsc-160",
    "label": "HSC 160",
    "distinguishingAttributes": {
      "équipement": "HSC 160",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 19500
    }
  ],
  "powerKw": 160,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/hertz-hsc-160.svg",
    "alt": "Repères techniques : Hertz HSC 160",
    "sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "HSC 160",
      "evidenceIds": [
        "october4b-hertz-catalog-p28"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4b-hertz-catalog-p28"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-hertz-catalog-p28"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "19 500 L/min",
      "evidenceIds": [
        "october4b-hertz-catalog-p28"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "160 kW",
      "evidenceIds": [
        "october4b-hertz-catalog-p28"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-hertz-catalog-p28"
      ]
    }
  ],
  "editorial": {
    "overview": "Hertz HSC 160. 19 500 L/min déclarés à 13 bar. Configuration constructeur : HSC 160.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 19 500 L/min déclarés à 13 bar."
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
      "id": "october4b-hertz-catalog-p28",
      "sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=28",
      "sourceLabel": "Hertz, catalogue constructeur, page PDF 28",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-hertz-catalog-p27",
      "sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=27",
      "sourceLabel": "Hertz, catalogue constructeur, page PDF 27",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-hertz-catalog-p28"
    ],
    "model": [
      "october4b-hertz-catalog-p28"
    ],
    "maxPressureBar": [
      "october4b-hertz-catalog-p28"
    ],
    "fadCurve": [
      "october4b-hertz-catalog-p28"
    ],
    "powerKw": [
      "october4b-hertz-catalog-p28"
    ],
    "oilType": [
      "october4b-hertz-catalog-p27"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
