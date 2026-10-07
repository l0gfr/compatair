import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "dalgakiran-dvk-30-d",
  "slug": "dalgakiran-dvk-30-d",
  "brand": "Dalgakiran",
  "model": "DVK 30 D",
  "variant": {
    "familyId": "dalgakiran-dvk-30-d",
    "label": "DVK 30 D",
    "distinguishingAttributes": {
      "équipement": "DVK 30 D",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 3600
    }
  ],
  "powerKw": 22,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/dalgakiran-dvk-30-d.svg",
    "alt": "Repères techniques : Dalgakiran DVK 30 D",
    "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DVK 30 D",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "3 600 L/min",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    }
  ],
  "editorial": {
    "overview": "Dalgakiran DVK 30 D. 3 600 L/min déclarés à 10 bar. Configuration constructeur : DVK 30 D.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 600 L/min déclarés à 10 bar."
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
      "id": "october4b-dalgakiran-catalog-p30",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=30",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 30",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-dalgakiran-catalog-p29",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=29",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "model": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "maxPressureBar": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "fadCurve": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "powerKw": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "oilType": [
      "october4b-dalgakiran-catalog-p29"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
