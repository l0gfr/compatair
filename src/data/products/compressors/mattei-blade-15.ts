const product = {
  "id": "mattei-blade-15",
  "slug": "mattei-blade-15",
  "brand": "Mattei",
  "model": "BLADE 15",
  "variant": {
    "familyId": "mattei-blade-15",
    "label": "BLADE 15",
    "distinguishingAttributes": {
      "équipement": "BLADE 15",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "60 Hz"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 2430
    }
  ],
  "powerKw": 15,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mattei-blade-15.svg",
    "alt": "Repères techniques : Mattei BLADE 15",
    "sourceUrl": "https://www.matteigroup.com/en-us/products/fixed-speed-compressors/blade-series/blade-series-15-18-22",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BLADE 15",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-15-18-22-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-15-18-22-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-15-18-22-p1"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "2 430 L/min",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-15-18-22-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-15-18-22-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "60 Hz",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-15-18-22-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Mattei BLADE 15. 2 430 L/min déclarés à 10 bar. Configuration constructeur : BLADE 15.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 430 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Version H à 10 bar, alimentation US 208–230/460 V, triphasé 60 Hz ; aucune extrapolation à 50 Hz.",
      "Cuve et cycle de service non documentés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-mattei-page-blade-series-15-18-22-p1",
      "sourceUrl": "https://www.matteigroup.com/en-us/products/fixed-speed-compressors/blade-series/blade-series-15-18-22",
      "sourceLabel": "Mattei, tableau officiel des performances US, 60 Hz, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 df9cc1c6810251b75632ba5dec6600d6221dd01637bcd4877b86f3f0c0a19e24 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-mattei-page-blade-series-15-18-22-p1"
    ],
    "maxPressureBar": [
      "october4c-mattei-page-blade-series-15-18-22-p1"
    ],
    "fadCurve": [
      "october4c-mattei-page-blade-series-15-18-22-p1"
    ],
    "powerKw": [
      "october4c-mattei-page-blade-series-15-18-22-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
