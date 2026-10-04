const product = {
  "id": "compair-l45x",
  "slug": "compair-l45x",
  "brand": "CompAir",
  "model": "L45x",
  "variant": {
    "familyId": "compair-l45x",
    "label": "L45x",
    "distinguishingAttributes": {
      "équipement": "L45x",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 7400
    }
  ],
  "powerKw": 45,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l45x.svg",
    "alt": "Repères techniques : CompAir L45x",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltfd78018d9d18f918/698595221672bf83aa7e8b9f/25221_CompAir_Meta_Compressor_Brochure_EN_work.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L45x",
      "evidenceIds": [
        "october4c-compair-meta45-55-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-compair-meta45-55-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-meta45-55-p11"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "7 400 L/min",
      "evidenceIds": [
        "october4c-compair-meta45-55-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "45 kW",
      "evidenceIds": [
        "october4c-compair-meta45-55-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-meta45-55-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L45x. 7 400 L/min déclarés à 10 bar. Configuration constructeur : L45x.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 7 400 L/min déclarés à 10 bar."
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
      "id": "october4c-compair-meta45-55-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltfd78018d9d18f918/698595221672bf83aa7e8b9f/25221_CompAir_Meta_Compressor_Brochure_EN_work.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b730026a7af1c1032c6267733e3ca5502fd4c0289b5ea99a42236b61b909a312 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-meta45-55-p2",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltfd78018d9d18f918/698595221672bf83aa7e8b9f/25221_CompAir_Meta_Compressor_Brochure_EN_work.pdf#page=2",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b730026a7af1c1032c6267733e3ca5502fd4c0289b5ea99a42236b61b909a312 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-meta45-55-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-meta45-55-p11"
    ],
    "fadCurve": [
      "october4c-compair-meta45-55-p11"
    ],
    "powerKw": [
      "october4c-compair-meta45-55-p11"
    ],
    "oilType": [
      "october4c-compair-meta45-55-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
