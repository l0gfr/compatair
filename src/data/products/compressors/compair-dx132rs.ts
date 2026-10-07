import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-dx132rs",
  "slug": "compair-dx132rs",
  "brand": "CompAir",
  "model": "DX132RS",
  "variant": {
    "familyId": "compair-dx132rs",
    "label": "DX132RS",
    "distinguishingAttributes": {
      "équipement": "DX132RS",
      "pressionDeConfiguration": "10,7 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10.7,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 24200
    }
  ],
  "powerKw": 132,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-dx132rs.svg",
    "alt": "Repères techniques : CompAir DX132RS",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt1a5f7f6e226706dc/67ef95d1e79e24eb628a8f5b/61728_6_11_24_24161_D_SERIES_DX_12PP_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DX132RS",
      "evidenceIds": [
        "october4c-compair-dx90-160-p11"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10,7 bar",
      "evidenceIds": [
        "october4c-compair-dx90-160-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-dx90-160-p11"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "24 200 L/min",
      "evidenceIds": [
        "october4c-compair-dx90-160-p11"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "6 700 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-compair-dx90-160-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "132 kW",
      "evidenceIds": [
        "october4c-compair-dx90-160-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-dx90-160-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir DX132RS. 24 200 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : DX132RS.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10,7 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 24 200 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4c-compair-dx90-160-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt1a5f7f6e226706dc/67ef95d1e79e24eb628a8f5b/61728_6_11_24_24161_D_SERIES_DX_12PP_EN_WORK.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 9aefc2ec8892e1e96271ae206c2566ed5bc02fc655f2164d62823dca6c664b56 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-dx90-160-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt1a5f7f6e226706dc/67ef95d1e79e24eb628a8f5b/61728_6_11_24_24161_D_SERIES_DX_12PP_EN_WORK.pdf#page=1",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 9aefc2ec8892e1e96271ae206c2566ed5bc02fc655f2164d62823dca6c664b56 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-dx90-160-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-dx90-160-p11"
    ],
    "fadCurve": [
      "october4c-compair-dx90-160-p11"
    ],
    "powerKw": [
      "october4c-compair-dx90-160-p11"
    ],
    "oilType": [
      "october4c-compair-dx90-160-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
