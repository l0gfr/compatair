import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "dalgakiran-impetus-75",
  "slug": "dalgakiran-impetus-75",
  "brand": "Dalgakiran",
  "model": "IMPETUS 75",
  "variant": {
    "familyId": "dalgakiran-impetus-75",
    "label": "IMPETUS 75",
    "distinguishingAttributes": {
      "équipement": "IMPETUS 75",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 9990
    }
  ],
  "powerKw": 75,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/dalgakiran-impetus-75.svg",
    "alt": "Repères techniques : Dalgakiran IMPETUS 75",
    "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "IMPETUS 75",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p12"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p12"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p12"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "9 990 L/min",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p12"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "75 kW",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p12"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p12"
      ]
    }
  ],
  "editorial": {
    "overview": "Dalgakiran IMPETUS 75. 9 990 L/min déclarés à 13 bar. Configuration constructeur : IMPETUS 75.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 9 990 L/min déclarés à 13 bar."
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
      "id": "october4b-dalgakiran-catalog-p12",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=12",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-dalgakiran-catalog-p9",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=9",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-dalgakiran-catalog-p12"
    ],
    "model": [
      "october4b-dalgakiran-catalog-p12"
    ],
    "maxPressureBar": [
      "october4b-dalgakiran-catalog-p12"
    ],
    "fadCurve": [
      "october4b-dalgakiran-catalog-p12"
    ],
    "powerKw": [
      "october4b-dalgakiran-catalog-p12"
    ],
    "oilType": [
      "october4b-dalgakiran-catalog-p9"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
