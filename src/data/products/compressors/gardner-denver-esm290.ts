const product = {
  "id": "gardner-denver-esm290",
  "slug": "gardner-denver-esm290",
  "brand": "Gardner Denver",
  "model": "ESM290",
  "variant": {
    "familyId": "gardner-denver-esm290",
    "label": "Compresseur à vis à vitesse fixe",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis à vitesse fixe",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 36440
    }
  ],
  "powerKw": 250,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-esm290.svg",
    "alt": "Repères techniques : Gardner Denver ESM290",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blteffe8b5f836211ca/67f9107ddeaac92df51c3906/GD_FRAME_6_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis à vitesse fixe",
      "evidenceIds": [
        "october4c-gd-esm160-290-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-gd-esm160-290-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-gd-esm160-290-p11"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "36 440 L/min",
      "evidenceIds": [
        "october4c-gd-esm160-290-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "250 kW",
      "evidenceIds": [
        "october4c-gd-esm160-290-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-gd-esm160-290-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "Gardner Denver ESM290. 36 440 L/min déclarés à 13 bar. Configuration constructeur : Compresseur à vis à vitesse fixe.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 36 440 L/min déclarés à 13 bar."
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
      "id": "october4c-gd-esm160-290-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blteffe8b5f836211ca/67f9107ddeaac92df51c3906/GD_FRAME_6_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "Gardner Denver, catalogue constructeur ESM VS160-290, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 3e142b612d0a8fbdf0a0363e8632d23d47d7bf76b44a2756c20e3426451dab16 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-gd-esm160-290-p11"
    ],
    "maxPressureBar": [
      "october4c-gd-esm160-290-p11"
    ],
    "fadCurve": [
      "october4c-gd-esm160-290-p11"
    ],
    "powerKw": [
      "october4c-gd-esm160-290-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
