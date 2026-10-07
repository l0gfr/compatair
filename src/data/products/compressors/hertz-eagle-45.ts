import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "hertz-eagle-45",
  "slug": "hertz-eagle-45",
  "brand": "Hertz",
  "model": "EAGLE 45",
  "variant": {
    "familyId": "hertz-eagle-45",
    "label": "EAGLE 45",
    "distinguishingAttributes": {
      "équipement": "EAGLE 45",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 5900
    }
  ],
  "powerKw": 45,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/hertz-eagle-45.svg",
    "alt": "Repères techniques : Hertz EAGLE 45",
    "sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EAGLE 45",
      "evidenceIds": [
        "october4b-hertz-catalog-p33"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-hertz-catalog-p33"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-hertz-catalog-p33"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "5 900 L/min",
      "evidenceIds": [
        "october4b-hertz-catalog-p33"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "45 kW",
      "evidenceIds": [
        "october4b-hertz-catalog-p33"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-hertz-catalog-p33"
      ]
    }
  ],
  "editorial": {
    "overview": "Hertz EAGLE 45. 5 900 L/min déclarés à 10 bar. Configuration constructeur : EAGLE 45.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 5 900 L/min déclarés à 10 bar."
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
      "id": "october4b-hertz-catalog-p33",
      "sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=33",
      "sourceLabel": "Hertz, catalogue constructeur, page PDF 33",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-hertz-catalog-p33"
    ],
    "model": [
      "october4b-hertz-catalog-p33"
    ],
    "maxPressureBar": [
      "october4b-hertz-catalog-p33"
    ],
    "fadCurve": [
      "october4b-hertz-catalog-p33"
    ],
    "powerKw": [
      "october4b-hertz-catalog-p33"
    ],
    "oilType": [
      "october4b-hertz-catalog-p33"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
