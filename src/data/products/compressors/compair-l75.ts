const product = {
  "id": "compair-l75",
  "slug": "compair-l75",
  "brand": "CompAir",
  "model": "L75",
  "variant": {
    "familyId": "compair-l75",
    "label": "L75",
    "distinguishingAttributes": {
      "équipement": "L75",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 10500
    }
  ],
  "powerKw": 75,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l75.svg",
    "alt": "Repères techniques : CompAir L75",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt8f4c28964c26d429/6968be5320e9c408ee07b2f4/CompAir_Frame_4_Brochure_Updates_EN_Work.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L75",
      "evidenceIds": [
        "october4c-compair-frame4-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-compair-frame4-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-frame4-p7"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "10 500 L/min",
      "evidenceIds": [
        "october4c-compair-frame4-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "75 kW",
      "evidenceIds": [
        "october4c-compair-frame4-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-frame4-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L75. 10 500 L/min déclarés à 13 bar. Configuration constructeur : L75.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 10 500 L/min déclarés à 13 bar."
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
      "id": "october4c-compair-frame4-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt8f4c28964c26d429/6968be5320e9c408ee07b2f4/CompAir_Frame_4_Brochure_Updates_EN_Work.pdf#page=7",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 7b3022bee92575d6876f2dfda0ddc4e29b7466202606b6b5ce7dc5fea1ab62ef de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-frame4-p7"
    ],
    "maxPressureBar": [
      "october4c-compair-frame4-p7"
    ],
    "fadCurve": [
      "october4c-compair-frame4-p7"
    ],
    "powerKw": [
      "october4c-compair-frame4-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
