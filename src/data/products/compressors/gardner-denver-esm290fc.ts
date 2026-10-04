const product = {
  "id": "gardner-denver-esm290fc",
  "slug": "gardner-denver-esm290fc",
  "brand": "Gardner Denver",
  "model": "ESM290FC",
  "variant": {
    "familyId": "gardner-denver-esm290fc",
    "label": "Compresseur à vis biétagé FourCore",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis biétagé FourCore",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 45080
    }
  ],
  "powerKw": 250,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-esm290fc.svg",
    "alt": "Repères techniques : Gardner Denver ESM290FC",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/bltecb21db39f3d2a54/67f910a30a3bd67bf76692e7/GD_FRAME_6_FOURCORE_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis biétagé FourCore",
      "evidenceIds": [
        "october4c-gd-fourcore110-290-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-gd-fourcore110-290-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-gd-fourcore110-290-p11"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "45 080 L/min",
      "evidenceIds": [
        "october4c-gd-fourcore110-290-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "250 kW",
      "evidenceIds": [
        "october4c-gd-fourcore110-290-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-gd-fourcore110-290-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "Gardner Denver ESM290FC. 45 080 L/min déclarés à 10 bar. Configuration constructeur : Compresseur à vis biétagé FourCore.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 45 080 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "La puissance moteur publiée dans ce tableau est de 250 kW, malgré le nombre 290 figurant dans le nom du modèle ; ce nombre n’est pas utilisé comme puissance.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-gd-fourcore110-290-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/bltecb21db39f3d2a54/67f910a30a3bd67bf76692e7/GD_FRAME_6_FOURCORE_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "Gardner Denver, catalogue constructeur FourCore 110-290, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 71ae25a7ae57d75a693781a506223b4b871bf5178b04114cae37cab2cad7cccb de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-gd-fourcore110-290-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/bltecb21db39f3d2a54/67f910a30a3bd67bf76692e7/GD_FRAME_6_FOURCORE_BROCHURE_UPDATES_EN_WORK.pdf#page=1",
      "sourceLabel": "Gardner Denver, catalogue constructeur FourCore 110-290, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 71ae25a7ae57d75a693781a506223b4b871bf5178b04114cae37cab2cad7cccb de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-gd-fourcore110-290-p11"
    ],
    "maxPressureBar": [
      "october4c-gd-fourcore110-290-p11"
    ],
    "fadCurve": [
      "october4c-gd-fourcore110-290-p11"
    ],
    "powerKw": [
      "october4c-gd-fourcore110-290-p11"
    ],
    "oilType": [
      "october4c-gd-fourcore110-290-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
