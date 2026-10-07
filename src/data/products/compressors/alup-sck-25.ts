import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "alup-sck-25",
  "slug": "alup-sck-25",
  "brand": "ALUP",
  "model": "SCK 25",
  "variant": {
    "familyId": "alup-sck-25",
    "label": "SCK 25",
    "distinguishingAttributes": {
      "équipement": "SCK 25",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 2316.667
    }
  ],
  "dutyCycle": 1,
  "powerKw": 18.5,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-sck-25.svg",
    "alt": "Repères techniques : ALUP SCK 25",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/sck-20-40/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCK 25",
      "evidenceIds": [
        "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "2 316,667 L/min",
      "evidenceIds": [
        "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
      "evidenceIds": [
        "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP SCK 25. 2 316,667 L/min déclarés à 13 bar. Configuration constructeur : SCK 25.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 316,667 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Configuration constructeur de base ; les cuves optionnelles ne sont pas attribuées sans code de configuration propre.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/sck-20-40/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN.pdf#page=4",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 4",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 70ae98c35decbd78ce86f3d51cd65b1543115e153df4542b9d10536313f64939 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p2",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/sck-20-40/leaflets/Alup_SCK25-40_Allegretto15-22_leaflet_6999640680_EN.pdf#page=2",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 70ae98c35decbd78ce86f3d51cd65b1543115e153df4542b9d10536313f64939 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
    ],
    "model": [
      "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
    ],
    "fadCurve": [
      "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
    ],
    "powerKw": [
      "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p4"
    ],
    "oilType": [
      "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p2"
    ],
    "dutyCycle": [
      "october4c-alup-alup-sck25-40-allegretto15-22-leaflet-6999640680-en-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
