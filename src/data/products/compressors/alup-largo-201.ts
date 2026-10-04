const product = {
  "id": "alup-largo-201",
  "slug": "alup-largo-201",
  "brand": "ALUP",
  "model": "LARGO 201",
  "variant": {
    "familyId": "alup-largo-201",
    "label": "LARGO 201",
    "distinguishingAttributes": {
      "équipement": "LARGO 201",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 33300
    }
  ],
  "powerKw": 200,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-largo-201.svg",
    "alt": "Repères techniques : ALUP LARGO 201",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegro-132-315-(2018)/leaflets/ALUP_Largo_Allegro_200-315_leaflet_EN_2025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "LARGO 201",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "33 300 L/min",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "200 kW",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP LARGO 201. 33 300 L/min déclarés à 10 bar. Configuration constructeur : LARGO 201.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 33 300 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Version refroidie par air, 50 Hz.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegro-132-315-(2018)/leaflets/ALUP_Largo_Allegro_200-315_leaflet_EN_2025.pdf#page=7",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 73da337c9c159d6da84f5a1cd2b46d1872d5e9d9ed54c786821a83456aea749c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
    ],
    "fadCurve": [
      "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
    ],
    "powerKw": [
      "october4c-alup-alup-largo-allegro-200-315-leaflet-en-2025-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
