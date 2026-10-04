const product = {
  "id": "ekomak-dmd30-c",
  "slug": "ekomak-dmd30-c",
  "brand": "Ekomak",
  "model": "DMD30 C",
  "variant": {
    "familyId": "ekomak-dmd30-c",
    "label": "DMD30 C",
    "distinguishingAttributes": {
      "équipement": "DMD30 C",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 320
    }
  ],
  "dutyCycle": 1,
  "powerKw": 2.2,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-dmd30-c.svg",
    "alt": "Repères techniques : Ekomak DMD30 C",
    "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/fixed-speed/dmd-30-400/Ekomak%20DMD%2030-75%20Sales%20Leaflet%206999970220%20EN%20LR.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DMD30 C",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "320 L/min",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak DMD30 C. 320 L/min déclarés à 10 bar. Configuration constructeur : DMD30 C.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 320 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Configuration C, CR ou CRD conservée conformément à la référence constructeur ; fréquence électrique non documentée.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-dmd-leaflet-1-p3",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/fixed-speed/dmd-30-400/Ekomak%20DMD%2030-75%20Sales%20Leaflet%206999970220%20EN%20LR.pdf#page=3",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 fd54c02e168a7e0a604263b5b075e20280c649b5647ec0210fed527225764387 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-ekomak-dmd-leaflet-1-p1",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/fixed-speed/dmd-30-400/Ekomak%20DMD%2030-75%20Sales%20Leaflet%206999970220%20EN%20LR.pdf#page=1",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 fd54c02e168a7e0a604263b5b075e20280c649b5647ec0210fed527225764387 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "maxPressureBar": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "fadCurve": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "powerKw": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "oilType": [
      "october4c-ekomak-dmd-leaflet-1-p1"
    ],
    "dutyCycle": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
