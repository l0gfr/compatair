const product = {
  "id": "alup-wis-75v",
  "slug": "alup-wis-75v",
  "brand": "ALUP",
  "model": "WIS 75V",
  "variant": {
    "familyId": "alup-wis-75v",
    "label": "WIS 75V",
    "distinguishingAttributes": {
      "équipement": "WIS 75V",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 8783.333
    }
  ],
  "powerKw": 55,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-wis-75v.svg",
    "alt": "Repères techniques : ALUP WIS 75V",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/water-injected-screw-compressor/leaflets/industrial/Alup_Wisair_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "WIS 75V",
      "evidenceIds": [
        "october4c-alup-alup-wisair-en-p11"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-alup-alup-wisair-en-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-wisair-en-p11"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "8 783,333 L/min",
      "evidenceIds": [
        "october4c-alup-alup-wisair-en-p11"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "2 616,667 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-alup-alup-wisair-en-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "55 kW",
      "evidenceIds": [
        "october4c-alup-alup-wisair-en-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-alup-wisair-en-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP WIS 75V. 8 783,333 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : WIS 75V.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 8 783,333 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-wisair-en-p11",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/water-injected-screw-compressor/leaflets/industrial/Alup_Wisair_EN.pdf#page=11",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 3a328fbde1b9673c026f23ff98a88d5b1192a17f38aeb255aa272d8174df46a9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-alup-wisair-en-p1",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/water-injected-screw-compressor/leaflets/industrial/Alup_Wisair_EN.pdf#page=1",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 3a328fbde1b9673c026f23ff98a88d5b1192a17f38aeb255aa272d8174df46a9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-alup-alup-wisair-en-p11"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-wisair-en-p11"
    ],
    "fadCurve": [
      "october4c-alup-alup-wisair-en-p11"
    ],
    "powerKw": [
      "october4c-alup-alup-wisair-en-p11"
    ],
    "oilType": [
      "october4c-alup-alup-wisair-en-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
