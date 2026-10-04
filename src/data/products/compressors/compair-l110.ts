const product = {
  "id": "compair-l110",
  "slug": "compair-l110",
  "brand": "CompAir",
  "model": "L110",
  "variant": {
    "familyId": "compair-l110",
    "label": "L110",
    "distinguishingAttributes": {
      "équipement": "L110",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 16470
    }
  ],
  "powerKw": 110,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l110.svg",
    "alt": "Repères techniques : CompAir L110",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt495f0f35fa6b8520/67ef956e3c6595b719e569ee/36930_27_6_23_23437_FRAME_5_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L110",
      "evidenceIds": [
        "october4c-compair-frame5-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-compair-frame5-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-frame5-p7"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "16 470 L/min",
      "evidenceIds": [
        "october4c-compair-frame5-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "110 kW",
      "evidenceIds": [
        "october4c-compair-frame5-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-frame5-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L110. 16 470 L/min déclarés à 13 bar. Configuration constructeur : L110.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 16 470 L/min déclarés à 13 bar."
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
      "id": "october4c-compair-frame5-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt495f0f35fa6b8520/67ef956e3c6595b719e569ee/36930_27_6_23_23437_FRAME_5_BROCHURE_UPDATES_EN_WORK.pdf#page=7",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 50c30f265d071051dfaa8bfbe96377cea1d4d1af2496e7ca059b67f56431ad42 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-frame5-p4",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt495f0f35fa6b8520/67ef956e3c6595b719e569ee/36930_27_6_23_23437_FRAME_5_BROCHURE_UPDATES_EN_WORK.pdf#page=4",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 4",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 50c30f265d071051dfaa8bfbe96377cea1d4d1af2496e7ca059b67f56431ad42 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-frame5-p7"
    ],
    "maxPressureBar": [
      "october4c-compair-frame5-p7"
    ],
    "fadCurve": [
      "october4c-compair-frame5-p7"
    ],
    "powerKw": [
      "october4c-compair-frame5-p7"
    ],
    "oilType": [
      "october4c-compair-frame5-p4"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
