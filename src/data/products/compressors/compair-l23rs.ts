const product = {
  "id": "compair-l23rs",
  "slug": "compair-l23rs",
  "brand": "CompAir",
  "model": "L23RS",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "compair-l23rs",
    "label": "L23RS",
    "distinguishingAttributes": {
      "équipement": "L23RS",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 4120
    }
  ],
  "oilType": "unknown",
  "powerKw": 22,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l23rs.svg",
    "alt": "Repères techniques : CompAir L23RS",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt9ea6c36e26180d71/685910d79604b405e8808780/23429_CompAir_Frame_2_Brochure_Updates_EN_work.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "CompAir L23RS. 4 120 L/min déclarés à 7,5 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : L23RS.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 4 120 L/min déclarés à 7,5 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "FAD maximal de la plage documentée à cette pression, minimum de régulation publié séparément. Aucune interpolation de vitesse ni maximum à une autre pression.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L23RS",
      "evidenceIds": [
        "october5-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october5-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-compair-frame2plus-p7"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7,5 bar",
      "value": "4 120 L/min",
      "evidenceIds": [
        "october5-compair-frame2plus-p7"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7,5 bar",
      "value": "1 110 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october5-compair-frame2plus-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-compair-frame2plus-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-compair-frame2plus-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt9ea6c36e26180d71/685910d79604b405e8808780/23429_CompAir_Frame_2_Brochure_Updates_EN_work.pdf#page=7",
      "sourceLabel": "CompAir, documentation constructeur des séries L et LRS, frame 2 plus, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 d6625522a10027708297fbda622e4a4420b4fc767affdcfbf6b5f34b9462e559 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-compair-frame2plus-p7"
    ],
    "maxPressureBar": [
      "october5-compair-frame2plus-p7"
    ],
    "fadCurve": [
      "october5-compair-frame2plus-p7"
    ],
    "powerKw": [
      "october5-compair-frame2plus-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
