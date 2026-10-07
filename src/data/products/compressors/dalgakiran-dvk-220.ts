import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "dalgakiran-dvk-220",
  "slug": "dalgakiran-dvk-220",
  "brand": "Dalgakiran",
  "model": "DVK 220",
  "variant": {
    "familyId": "dalgakiran-dvk-220",
    "label": "DVK 220",
    "distinguishingAttributes": {
      "équipement": "DVK 220",
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
    "src": "/images/products/dalgakiran-dvk-220.svg",
    "alt": "Repères techniques : Dalgakiran DVK 220",
    "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DVK 220",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p28"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p28"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p28"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "19 500 L/min",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p28"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "160 kW",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p28"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p28"
      ]
    }
  ],
  "editorial": {
    "overview": "Dalgakiran DVK 220. 19 500 L/min déclarés à 13 bar. Configuration constructeur : DVK 220.",
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
      "id": "october4b-dalgakiran-catalog-p28",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=28",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 28",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-dalgakiran-catalog-p27",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=27",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 27",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-dalgakiran-catalog-p28"
    ],
    "model": [
      "october4b-dalgakiran-catalog-p28"
    ],
    "maxPressureBar": [
      "october4b-dalgakiran-catalog-p28"
    ],
    "fadCurve": [
      "october4b-dalgakiran-catalog-p28"
    ],
    "powerKw": [
      "october4b-dalgakiran-catalog-p28"
    ],
    "oilType": [
      "october4b-dalgakiran-catalog-p27"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
