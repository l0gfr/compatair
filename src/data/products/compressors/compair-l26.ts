const product = {
  "id": "compair-l26",
  "slug": "compair-l26",
  "brand": "CompAir",
  "model": "L26",
  "variant": {
    "familyId": "compair-l26",
    "label": "L26",
    "distinguishingAttributes": {
      "équipement": "L26",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 3440
    }
  ],
  "powerKw": 26,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l26.svg",
    "alt": "Repères techniques : CompAir L26",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt9ea6c36e26180d71/685910d79604b405e8808780/23429_CompAir_Frame_2_Brochure_Updates_EN_work.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L26",
      "evidenceIds": [
        "october4c-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "3 440 L/min",
      "evidenceIds": [
        "october4c-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "26 kW",
      "evidenceIds": [
        "october4c-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-frame2plus-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L26. 3 440 L/min déclarés à 13 bar. Configuration constructeur : L26.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 440 L/min déclarés à 13 bar."
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
      "id": "october4c-compair-frame2plus-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt9ea6c36e26180d71/685910d79604b405e8808780/23429_CompAir_Frame_2_Brochure_Updates_EN_work.pdf#page=7",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 d6625522a10027708297fbda622e4a4420b4fc767affdcfbf6b5f34b9462e559 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-frame2plus-p7"
    ],
    "maxPressureBar": [
      "october4c-compair-frame2plus-p7"
    ],
    "fadCurve": [
      "october4c-compair-frame2plus-p7"
    ],
    "powerKw": [
      "october4c-compair-frame2plus-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
