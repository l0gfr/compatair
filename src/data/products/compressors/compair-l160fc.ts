const product = {
  "id": "compair-l160fc",
  "slug": "compair-l160fc",
  "brand": "CompAir",
  "model": "L160FC",
  "variant": {
    "familyId": "compair-l160fc",
    "label": "L160FC",
    "distinguishingAttributes": {
      "équipement": "L160FC",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 29140
    }
  ],
  "powerKw": 160,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l160fc.svg",
    "alt": "Repères techniques : CompAir L160FC",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltc09fe14bb349f1fe/67ef944ec481fc5eb55b9549/52858_29_3_24_FRAME_6_FOURCORE_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L160FC",
      "evidenceIds": [
        "october4c-compair-fourcore-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-compair-fourcore-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-fourcore-p11"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "29 140 L/min",
      "evidenceIds": [
        "october4c-compair-fourcore-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "160 kW",
      "evidenceIds": [
        "october4c-compair-fourcore-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-fourcore-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L160FC. 29 140 L/min déclarés à 10 bar. Configuration constructeur : L160FC.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 29 140 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés dans le tableau technique retenu.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-compair-fourcore-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltc09fe14bb349f1fe/67ef944ec481fc5eb55b9549/52858_29_3_24_FRAME_6_FOURCORE_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a5da59714fd96024ae0d5e7b586a2345f2db6ec639909da053a0b68096967b3f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-fourcore-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltc09fe14bb349f1fe/67ef944ec481fc5eb55b9549/52858_29_3_24_FRAME_6_FOURCORE_BROCHURE_UPDATES_EN_WORK.pdf#page=1",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a5da59714fd96024ae0d5e7b586a2345f2db6ec639909da053a0b68096967b3f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-fourcore-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-fourcore-p11"
    ],
    "fadCurve": [
      "october4c-compair-fourcore-p11"
    ],
    "powerKw": [
      "october4c-compair-fourcore-p11"
    ],
    "oilType": [
      "october4c-compair-fourcore-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
