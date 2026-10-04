const product = {
  "id": "compair-l30e",
  "slug": "compair-l30e",
  "brand": "CompAir",
  "model": "L30e",
  "variant": {
    "familyId": "compair-l30e",
    "label": "L30e",
    "distinguishingAttributes": {
      "équipement": "L30e",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 5010
    }
  ],
  "powerKw": 30,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l30e.svg",
    "alt": "Repères techniques : CompAir L30e",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blta3765c2d7dd620cf/6967b308eabaa54347844df6/CompAir_Frame_3_Brochure_Updates_EN_Work.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L30e",
      "evidenceIds": [
        "october4c-compair-frame3-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-compair-frame3-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-frame3-p7"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "5 010 L/min",
      "evidenceIds": [
        "october4c-compair-frame3-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "30 kW",
      "evidenceIds": [
        "october4c-compair-frame3-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-frame3-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L30e. 5 010 L/min déclarés à 10 bar. Configuration constructeur : L30e.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 5 010 L/min déclarés à 10 bar."
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
      "id": "october4c-compair-frame3-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blta3765c2d7dd620cf/6967b308eabaa54347844df6/CompAir_Frame_3_Brochure_Updates_EN_Work.pdf#page=7",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 3842c86b3b56ece40669345f3d5aec285efa9b9ed545e26add050deb32ef2468 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-frame3-p7"
    ],
    "maxPressureBar": [
      "october4c-compair-frame3-p7"
    ],
    "fadCurve": [
      "october4c-compair-frame3-p7"
    ],
    "powerKw": [
      "october4c-compair-frame3-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
