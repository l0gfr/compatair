const product = {
  "id": "mattei-blade-4",
  "slug": "mattei-blade-4",
  "brand": "Mattei",
  "model": "BLADE 4",
  "variant": {
    "familyId": "mattei-blade-4",
    "label": "BLADE 4",
    "distinguishingAttributes": {
      "équipement": "BLADE 4",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée",
      "fréquence": "60 Hz"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 590
    }
  ],
  "powerKw": 4,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mattei-blade-4.svg",
    "alt": "Repères techniques : Mattei BLADE 4",
    "sourceUrl": "https://www.matteigroup.com/en-us/products/fixed-speed-compressors/blade-series/blade-series-4-5-7-11",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BLADE 4",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-4-5-7-11-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-4-5-7-11-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-4-5-7-11-p1"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "590 L/min",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-4-5-7-11-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-4-5-7-11-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "60 Hz",
      "evidenceIds": [
        "october4c-mattei-page-blade-series-4-5-7-11-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Mattei BLADE 4. 590 L/min déclarés à 8 bar. Configuration constructeur : BLADE 4.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 590 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "Version L à 8 bar, alimentation US 208–230/460 V, triphasé 60 Hz ; aucune extrapolation à 50 Hz.",
      "Les correspondances bar/psig des colonnes H et HH sont incohérentes ; ces points 10/13 bar sont exclus.",
      "Cuve et cycle de service non documentés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-mattei-page-blade-series-4-5-7-11-p1",
      "sourceUrl": "https://www.matteigroup.com/en-us/products/fixed-speed-compressors/blade-series/blade-series-4-5-7-11",
      "sourceLabel": "Mattei, tableau officiel des performances US, 60 Hz, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 af55b56386b1bb00ab7624bf72df799dfa13b044a5602b7d34d70e86359771a0 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-mattei-page-blade-series-4-5-7-11-p1"
    ],
    "maxPressureBar": [
      "october4c-mattei-page-blade-series-4-5-7-11-p1"
    ],
    "fadCurve": [
      "october4c-mattei-page-blade-series-4-5-7-11-p1"
    ],
    "powerKw": [
      "october4c-mattei-page-blade-series-4-5-7-11-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
