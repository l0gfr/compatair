const product = {
  "id": "compair-d45",
  "slug": "compair-d45",
  "brand": "CompAir",
  "model": "D45",
  "variant": {
    "familyId": "compair-d45",
    "label": "D45",
    "distinguishingAttributes": {
      "équipement": "D45",
      "pressionDeConfiguration": "8,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.5,
  "fadCurve": [
    {
      "pressureBar": 8.5,
      "litersPerMinute": 6500
    }
  ],
  "powerKw": 45,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-d45.svg",
    "alt": "Repères techniques : CompAir D45",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "D45",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8,5 bar",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Air livré à 8,5 bar",
      "value": "6 500 L/min",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "45 kW",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir D45. 6 500 L/min déclarés à 8,5 bar. Configuration constructeur : D45.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 6 500 L/min déclarés à 8,5 bar."
    ],
    "limitations": [
      "Refroidissement par air, conforme à la ligne constructeur retenue.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-compair-d37-75-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-d37-75-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf#page=1",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-d37-75-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-d37-75-p11"
    ],
    "fadCurve": [
      "october4c-compair-d37-75-p11"
    ],
    "powerKw": [
      "october4c-compair-d37-75-p11"
    ],
    "oilType": [
      "october4c-compair-d37-75-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
