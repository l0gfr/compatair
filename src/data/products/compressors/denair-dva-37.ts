const product = {
  "id": "denair-dva-37",
  "slug": "denair-dva-37",
  "brand": "DENAIR",
  "model": "DVA-37",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-dva-37",
    "label": "DVA-37",
    "distinguishingAttributes": {
      "équipement": "DVA-37",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 7,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 6540
    }
  ],
  "oilType": "oil",
  "powerKw": 37,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-dva-37.svg",
    "alt": "Repères techniques : DENAIR DVA-37",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "DENAIR DVA-37. 6 540 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : DVA-37.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 6 540 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Point documenté pour la variante 50 Hz et cette pression ; aucune disponibilité française déduite. Cuve et cycle de marche non chiffrés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DVA-37",
      "evidenceIds": [
        "october5-denair-screw-p8"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7 bar",
      "evidenceIds": [
        "october5-denair-screw-p8"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-denair-screw-p8"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "6 540 L/min",
      "evidenceIds": [
        "october5-denair-screw-p8"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "3 920 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-denair-screw-p8"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
      "evidenceIds": [
        "october5-denair-screw-p8"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-denair-screw-p8"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-denair-screw-p8",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=8",
      "sourceLabel": "DENAIR, Screw Air Compressors, gammes DA et DVA, page PDF 8",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-denair-screw-p1",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=1",
      "sourceLabel": "DENAIR, Screw Air Compressors, gammes DA et DVA, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-denair-screw-p8"
    ],
    "maxPressureBar": [
      "october5-denair-screw-p8"
    ],
    "fadCurve": [
      "october5-denair-screw-p8"
    ],
    "powerKw": [
      "october5-denair-screw-p8"
    ],
    "oilType": [
      "october5-denair-screw-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
