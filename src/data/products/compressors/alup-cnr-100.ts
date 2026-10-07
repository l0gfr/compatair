import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "alup-cnr-100",
  "slug": "alup-cnr-100",
  "brand": "ALUP",
  "model": "CNR 100",
  "variant": {
    "familyId": "alup-cnr-100",
    "label": "CNR 100",
    "distinguishingAttributes": {
      "équipement": "CNR 100",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 930
    }
  ],
  "dutyCycle": 1,
  "powerKw": 7.5,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-cnr-100.svg",
    "alt": "Repères techniques : ALUP CNR 100",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-free-tooth-compressors/piston-cleanair/leaflets/Alup_CNR_75-100_Leaflet_EN_6999640550_LR.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "CNR 100",
      "evidenceIds": [
        "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
      ]
    },
    {
      "label": "Air livré à 7 bar",
      "value": "930 L/min",
      "evidenceIds": [
        "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
      "evidenceIds": [
        "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p3"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP CNR 100. 930 L/min déclarés à 7 bar. Configuration constructeur : CNR 100.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 930 L/min déclarés à 7 bar."
    ],
    "limitations": [
      "Cuves 270/500 L proposées en option ; volume non attribué à la version de base.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-free-tooth-compressors/piston-cleanair/leaflets/Alup_CNR_75-100_Leaflet_EN_6999640550_LR.pdf#page=4",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 4",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 02c7c0daee8d60297d09ea15005d0228f2bc19bad9c9f7eb641bf4d54cdf426a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p1",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-free-tooth-compressors/piston-cleanair/leaflets/Alup_CNR_75-100_Leaflet_EN_6999640550_LR.pdf#page=1",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 02c7c0daee8d60297d09ea15005d0228f2bc19bad9c9f7eb641bf4d54cdf426a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p3",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-free-tooth-compressors/piston-cleanair/leaflets/Alup_CNR_75-100_Leaflet_EN_6999640550_LR.pdf#page=3",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 02c7c0daee8d60297d09ea15005d0228f2bc19bad9c9f7eb641bf4d54cdf426a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
    ],
    "fadCurve": [
      "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
    ],
    "powerKw": [
      "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p4"
    ],
    "oilType": [
      "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p1"
    ],
    "dutyCycle": [
      "october4c-alup-alup-cnr-75-100-leaflet-en-6999640550-lr-p3"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
