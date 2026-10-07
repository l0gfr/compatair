import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-dmd-150",
  "slug": "ekomak-dmd-150",
  "brand": "Ekomak",
  "model": "DMD 150",
  "variant": {
    "familyId": "ekomak-dmd-150",
    "label": "DMD 150",
    "distinguishingAttributes": {
      "équipement": "DMD 150",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 1151.667
    }
  ],
  "dutyCycle": 1,
  "powerKw": 11,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-dmd-150.svg",
    "alt": "Repères techniques : Ekomak DMD 150",
    "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-8-22-x-vst/eko-8-15-x-vst/leaflet/Ekomak%20DMD%20100-150%20EKO%208-15X%20VST%20Sales%20Leaflet%20EN%206999970190.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DMD 150",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-0-p4"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-0-p4"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-0-p4"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "1 151,667 L/min",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-0-p4"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-0-p4"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-0-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-0-p4"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak DMD 150. 1 151,667 L/min déclarés à 13 bar. Configuration constructeur : DMD 150.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 151,667 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Modèle de base sélectionné ; options de cuve et de séchage non transformées en nouvelles références. Cuve et fréquence électrique non qualifiées.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-dmd-leaflet-0-p4",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-8-22-x-vst/eko-8-15-x-vst/leaflet/Ekomak%20DMD%20100-150%20EKO%208-15X%20VST%20Sales%20Leaflet%20EN%206999970190.pdf#page=4",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 4",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 446cfa135d8cebca21f0fbc026fe6e36d7f62b57ef04993ceec36396dc6bf48d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-ekomak-dmd-leaflet-0-p2",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-8-22-x-vst/eko-8-15-x-vst/leaflet/Ekomak%20DMD%20100-150%20EKO%208-15X%20VST%20Sales%20Leaflet%20EN%206999970190.pdf#page=2",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 446cfa135d8cebca21f0fbc026fe6e36d7f62b57ef04993ceec36396dc6bf48d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-dmd-leaflet-0-p4"
    ],
    "model": [
      "october4c-ekomak-dmd-leaflet-0-p4"
    ],
    "maxPressureBar": [
      "october4c-ekomak-dmd-leaflet-0-p4"
    ],
    "fadCurve": [
      "october4c-ekomak-dmd-leaflet-0-p4"
    ],
    "powerKw": [
      "october4c-ekomak-dmd-leaflet-0-p4"
    ],
    "oilType": [
      "october4c-ekomak-dmd-leaflet-0-p2"
    ],
    "dutyCycle": [
      "october4c-ekomak-dmd-leaflet-0-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
