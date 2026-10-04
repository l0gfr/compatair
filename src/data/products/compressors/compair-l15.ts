const product = {
  "id": "compair-l15",
  "slug": "compair-l15",
  "brand": "CompAir",
  "model": "L15",
  "variant": {
    "familyId": "compair-l15",
    "label": "L15",
    "distinguishingAttributes": {
      "équipement": "L15",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 1800
    }
  ],
  "powerKw": 15,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l15.svg",
    "alt": "Repères techniques : CompAir L15",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte9183190f45e50c3/67ef9552edd8a9b0b031b74a/62522_20_11_24_24341_FRAME_2_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L15",
      "evidenceIds": [
        "october4c-compair-frame2-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-compair-frame2-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-frame2-p7"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "1 800 L/min",
      "evidenceIds": [
        "october4c-compair-frame2-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4c-compair-frame2-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-frame2-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L15. 1 800 L/min déclarés à 13 bar. Configuration constructeur : L15.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 800 L/min déclarés à 13 bar."
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
      "id": "october4c-compair-frame2-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte9183190f45e50c3/67ef9552edd8a9b0b031b74a/62522_20_11_24_24341_FRAME_2_BROCHURE_UPDATES_EN_WORK.pdf#page=7",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 50e6da20f6f3f6ac23323d6a8f13f3465900b6e5ad30a942971a35811837d7fe de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-frame2-p7"
    ],
    "maxPressureBar": [
      "october4c-compair-frame2-p7"
    ],
    "fadCurve": [
      "october4c-compair-frame2-p7"
    ],
    "powerKw": [
      "october4c-compair-frame2-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
