const product = {
  "id": "alup-largo-26",
  "slug": "alup-largo-26",
  "brand": "ALUP",
  "model": "LARGO 26",
  "variant": {
    "familyId": "alup-largo-26",
    "label": "LARGO 26",
    "distinguishingAttributes": {
      "équipement": "LARGO 26",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 3483.333
    }
  ],
  "powerKw": 26,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-largo-26.svg",
    "alt": "Repères techniques : ALUP LARGO 26",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-23-36/leaflets/alup_largo-allegro-23-36_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "LARGO 26",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-23-36-en-p9"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-23-36-en-p9"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-23-36-en-p9"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "3 483,333 L/min",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-23-36-en-p9"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "26 kW",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-23-36-en-p9"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-23-36-en-p9"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP LARGO 26. 3 483,333 L/min déclarés à 13 bar. Configuration constructeur : LARGO 26.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 483,333 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Configuration constructeur de base ; les cuves optionnelles ne sont pas attribuées sans code de configuration propre.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-largo-allegro-23-36-en-p9",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-23-36/leaflets/alup_largo-allegro-23-36_EN.pdf#page=9",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 9",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 586451b46afc9f34efc36bb6b4d747e398f9bce21c15dadb2268d5141d6cf9ef de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-alup-largo-allegro-23-36-en-p1",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-23-36/leaflets/alup_largo-allegro-23-36_EN.pdf#page=1",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 586451b46afc9f34efc36bb6b4d747e398f9bce21c15dadb2268d5141d6cf9ef de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-alup-alup-largo-allegro-23-36-en-p9"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-largo-allegro-23-36-en-p9"
    ],
    "fadCurve": [
      "october4c-alup-alup-largo-allegro-23-36-en-p9"
    ],
    "powerKw": [
      "october4c-alup-alup-largo-allegro-23-36-en-p9"
    ],
    "oilType": [
      "october4c-alup-alup-largo-allegro-23-36-en-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
