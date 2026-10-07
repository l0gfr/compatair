import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-dmd-200",
  "slug": "ekomak-dmd-200",
  "brand": "Ekomak",
  "model": "DMD 200",
  "variant": {
    "familyId": "ekomak-dmd-200",
    "label": "DMD 200",
    "distinguishingAttributes": {
      "équipement": "DMD 200",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 1866.667
    }
  ],
  "dutyCycle": 1,
  "powerKw": 15,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-dmd-200.svg",
    "alt": "Repères techniques : Ekomak DMD 200",
    "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-8-22-x-vst/eko-16-22-x-vst/leaflet/Ekomak%20DMD%20200-400%20EKO%2016-22X%20VST%20Sales%20Leaflet%20EN%206999970200.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DMD 200",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-2-p5"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-2-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-2-p5"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "1 866,667 L/min",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-2-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-2-p5"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-2-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-2-p5"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak DMD 200. 1 866,667 L/min déclarés à 13 bar. Configuration constructeur : DMD 200.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 866,667 L/min déclarés à 13 bar."
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
      "id": "october4c-ekomak-dmd-leaflet-2-p5",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-8-22-x-vst/eko-16-22-x-vst/leaflet/Ekomak%20DMD%20200-400%20EKO%2016-22X%20VST%20Sales%20Leaflet%20EN%206999970200.pdf#page=5",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 5",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 609ea406512a3dadefd878925a1b50486dc5b4dbe0f307b41f2a45cd726584b8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-ekomak-dmd-leaflet-2-p2",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-8-22-x-vst/eko-16-22-x-vst/leaflet/Ekomak%20DMD%20200-400%20EKO%2016-22X%20VST%20Sales%20Leaflet%20EN%206999970200.pdf#page=2",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 609ea406512a3dadefd878925a1b50486dc5b4dbe0f307b41f2a45cd726584b8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-dmd-leaflet-2-p5"
    ],
    "model": [
      "october4c-ekomak-dmd-leaflet-2-p5"
    ],
    "maxPressureBar": [
      "october4c-ekomak-dmd-leaflet-2-p5"
    ],
    "fadCurve": [
      "october4c-ekomak-dmd-leaflet-2-p5"
    ],
    "powerKw": [
      "october4c-ekomak-dmd-leaflet-2-p5"
    ],
    "oilType": [
      "october4c-ekomak-dmd-leaflet-2-p2"
    ],
    "dutyCycle": [
      "october4c-ekomak-dmd-leaflet-2-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
