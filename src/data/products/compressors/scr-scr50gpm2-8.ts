const product = {
  "id": "scr-scr50gpm2-8",
  "slug": "scr-scr50gpm2-8",
  "brand": "SCR",
  "model": "SCR50GPM2-8",
  "variant": {
    "familyId": "scr-scr50gpm2",
    "label": "SCR50GPM2-8",
    "distinguishingAttributes": {
      "équipement": "SCR50GPM2-8",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 5500
    }
  ],
  "powerKw": 37,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr50gpm2-8.svg",
    "alt": "Repères techniques : SCR SCR50GPM2-8",
    "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR50GPM2-8",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "5 500 L/min",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "SCR SCR50GPM2-8. 5 500 L/min déclarés à 8 bar. Configuration constructeur : SCR50GPM2-8.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 5 500 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-173-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 c8f881898562b28a7db336b4dee5580a73bb2af7a803aff0162aa3a6d7cb7fef de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-scr-173-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-173-p1"
    ],
    "fadCurve": [
      "october4c-scr-173-p1"
    ],
    "powerKw": [
      "october4c-scr-173-p1"
    ],
    "oilType": [
      "october4c-scr-173-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
