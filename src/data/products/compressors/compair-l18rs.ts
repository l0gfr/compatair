import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-l18rs",
  "slug": "compair-l18rs",
  "brand": "CompAir",
  "model": "L18RS",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "compair-l18rs",
    "label": "L18RS",
    "distinguishingAttributes": {
      "équipement": "L18RS",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 2200
    }
  ],
  "oilType": "unknown",
  "powerKw": 18.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l18rs.svg",
    "alt": "Repères techniques : CompAir L18RS",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte9183190f45e50c3/67ef9552edd8a9b0b031b74a/62522_20_11_24_24341_FRAME_2_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "CompAir L18RS. 2 200 L/min déclarés à 13 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : L18RS.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 200 L/min déclarés à 13 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "FAD maximal de la plage documentée à cette pression, minimum de régulation publié séparément. Aucune interpolation de vitesse ni maximum à une autre pression.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L18RS",
      "evidenceIds": [
        "october5-compair-frame2-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october5-compair-frame2-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-compair-frame2-p7"
      ]
    },
    {
      "label": "FAD maximal déclaré à 13 bar",
      "value": "2 200 L/min",
      "evidenceIds": [
        "october5-compair-frame2-p7"
      ]
    },
    {
      "label": "FAD minimal déclaré à 13 bar",
      "value": "1 220 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-compair-frame2-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
      "evidenceIds": [
        "october5-compair-frame2-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-compair-frame2-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-compair-frame2-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte9183190f45e50c3/67ef9552edd8a9b0b031b74a/62522_20_11_24_24341_FRAME_2_BROCHURE_UPDATES_EN_WORK.pdf#page=7",
      "sourceLabel": "CompAir, documentation constructeur des séries L et LRS, frame 2, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 50e6da20f6f3f6ac23323d6a8f13f3465900b6e5ad30a942971a35811837d7fe de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-compair-frame2-p7"
    ],
    "model": [
      "october5-compair-frame2-p7"
    ],
    "maxPressureBar": [
      "october5-compair-frame2-p7"
    ],
    "fadCurve": [
      "october5-compair-frame2-p7"
    ],
    "powerKw": [
      "october5-compair-frame2-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
