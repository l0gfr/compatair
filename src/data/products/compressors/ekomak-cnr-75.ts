const product = {
  "id": "ekomak-cnr-75",
  "slug": "ekomak-cnr-75",
  "brand": "Ekomak",
  "model": "CNR 75",
  "variant": {
    "familyId": "ekomak-cnr-75",
    "label": "CNR 75 TM (tank mounted)",
    "distinguishingAttributes": {
      "équipement": "CNR 75 TM (tank mounted)",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 670
    }
  ],
  "dutyCycle": 1,
  "powerKw": 5.5,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-cnr-75.svg",
    "alt": "Repères techniques : Ekomak CNR 75",
    "sourceUrl": "https://www.ekomak.com/content/dam/brands/Mark/products-bp-structure/non-mark/oil-free-compressors/cleanair/cnr-55-200/products-leaflets/CNR%2055-200%20Sales%20Leaflet%20EN_LR.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "CNR 75 TM (tank mounted)",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Air livré à 7 bar",
      "value": "670 L/min",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p4"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak CNR 75. 670 L/min déclarés à 7 bar. Configuration constructeur : CNR 75 TM (tank mounted).",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 670 L/min déclarés à 7 bar."
    ],
    "limitations": [
      "Le débit est mesuré à 7 bar, distinct du plafond de pression 10 bar. Configuration TM sélectionnée uniquement quand le réservoir 270 L est explicitement disponible.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-extra-1-p7",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/Mark/products-bp-structure/non-mark/oil-free-compressors/cleanair/cnr-55-200/products-leaflets/CNR%2055-200%20Sales%20Leaflet%20EN_LR.pdf#page=7",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b30f2f05ef5cc0e1a58c5951233fd76d3f8df91f47dd1754290997ce13418538 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-ekomak-extra-1-p4",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/Mark/products-bp-structure/non-mark/oil-free-compressors/cleanair/cnr-55-200/products-leaflets/CNR%2055-200%20Sales%20Leaflet%20EN_LR.pdf#page=4",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 4",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b30f2f05ef5cc0e1a58c5951233fd76d3f8df91f47dd1754290997ce13418538 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-ekomak-extra-1-p7"
    ],
    "maxPressureBar": [
      "october4c-ekomak-extra-1-p7"
    ],
    "tankLiters": [
      "october4c-ekomak-extra-1-p7"
    ],
    "fadCurve": [
      "october4c-ekomak-extra-1-p7"
    ],
    "powerKw": [
      "october4c-ekomak-extra-1-p7"
    ],
    "oilType": [
      "october4c-ekomak-extra-1-p4"
    ],
    "dutyCycle": [
      "october4c-ekomak-extra-1-p4"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
