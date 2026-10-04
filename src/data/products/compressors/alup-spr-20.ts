const product = {
  "id": "alup-spr-20",
  "slug": "alup-spr-20",
  "brand": "ALUP",
  "model": "SPR 20",
  "variant": {
    "familyId": "alup-spr-20",
    "label": "SPR 20",
    "distinguishingAttributes": {
      "équipement": "SPR 20",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 1380
    }
  ],
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-spr-20.svg",
    "alt": "Repères techniques : ALUP SPR 20",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-free-scroll-compressors/spiralair-scroll-compressor/leaflets/Spiralair_SalesLeaflet_EN_Spreads.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SPR 20",
      "evidenceIds": [
        "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "1 380 L/min",
      "evidenceIds": [
        "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP SPR 20. 1 380 L/min déclarés à 10 bar. Configuration constructeur : SPR 20.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 380 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Configuration constructeur de base ; les cuves optionnelles ne sont pas attribuées sans code de configuration propre.",
      "Puissance multi-moteurs conservée dans le tableau source ; total non attribué sans preuve numérique individuelle.",
      "Puissance multi-moteurs conservée dans le tableau source ; total non attribué sans preuve numérique individuelle.",
      "Puissance multi-moteurs conservée dans le tableau source ; total non attribué sans preuve numérique individuelle.",
      "Puissance multi-moteurs conservée dans le tableau source ; total non attribué sans preuve numérique individuelle.",
      "Puissance multi-moteurs conservée dans le tableau source ; total non attribué sans preuve numérique individuelle.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-spiralair-salesleaflet-en-spreads-p6",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-free-scroll-compressors/spiralair-scroll-compressor/leaflets/Spiralair_SalesLeaflet_EN_Spreads.pdf#page=6",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 6",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 92bf5c3e0c517f5bc1d1733d96c9f39e6bccdfed7c0e10f4ee350510153ae6e7 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-spiralair-salesleaflet-en-spreads-p1",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-free-scroll-compressors/spiralair-scroll-compressor/leaflets/Spiralair_SalesLeaflet_EN_Spreads.pdf#page=1",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 92bf5c3e0c517f5bc1d1733d96c9f39e6bccdfed7c0e10f4ee350510153ae6e7 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
    ],
    "maxPressureBar": [
      "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
    ],
    "fadCurve": [
      "october4c-alup-spiralair-salesleaflet-en-spreads-p6"
    ],
    "oilType": [
      "october4c-alup-spiralair-salesleaflet-en-spreads-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
