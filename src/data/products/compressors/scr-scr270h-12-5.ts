const product = {
  "id": "scr-scr270h-12-5",
  "slug": "scr-scr270h-12-5",
  "brand": "SCR",
  "model": "SCR270H-12.5",
  "variant": {
    "familyId": "scr-scr270h",
    "label": "SCR270H-12.5",
    "distinguishingAttributes": {
      "équipement": "SCR270H-12.5",
      "pressionDeConfiguration": "12,5 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 12.5,
  "fadCurve": [
    {
      "pressureBar": 12.5,
      "litersPerMinute": 33000
    }
  ],
  "powerKw": 200,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr270h-12-5.svg",
    "alt": "Repères techniques : SCR SCR270H-12.5",
    "sourceUrl": "https://www.scrcompressor.com/en/products/two_stage_screw_compressor_h_series/67.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR270H-12.5",
      "evidenceIds": [
        "october4c-scr-67-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "12,5 bar",
      "evidenceIds": [
        "october4c-scr-67-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-67-p1"
      ]
    },
    {
      "label": "Air livré à 12,5 bar",
      "value": "33 000 L/min",
      "evidenceIds": [
        "october4c-scr-67-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "200 kW",
      "evidenceIds": [
        "october4c-scr-67-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-scr-67-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "SCR SCR270H-12.5. 33 000 L/min déclarés à 12,5 bar. Configuration constructeur : SCR270H-12.5.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 12,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 33 000 L/min déclarés à 12,5 bar."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-67-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/two_stage_screw_compressor_h_series/67.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 55cc19d0a49c637c9f09d99f326695f1abddd211502db795abf53dc2ba99320d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-scr-67-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-67-p1"
    ],
    "fadCurve": [
      "october4c-scr-67-p1"
    ],
    "powerKw": [
      "october4c-scr-67-p1"
    ],
    "oilType": [
      "october4c-scr-67-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
