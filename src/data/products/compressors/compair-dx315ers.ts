import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-dx315ers",
  "slug": "compair-dx315ers",
  "brand": "CompAir",
  "model": "DX315eRS",
  "variant": {
    "familyId": "compair-dx315ers",
    "label": "DX315eRS",
    "distinguishingAttributes": {
      "équipement": "DX315eRS",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 51200
    }
  ],
  "powerKw": 315,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-dx315ers.svg",
    "alt": "Repères techniques : CompAir DX315eRS",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltd0d1abc682326d7e/67ef95f22b1def5a86689b6f/50780_13_1_23_22880_D_SERIES_DX_12PP_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DX315eRS",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "51 200 L/min",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "15 200 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "315 kW",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir DX315eRS. 51 200 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : DX315eRS.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 51 200 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
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
      "id": "october4c-compair-dx200-355-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltd0d1abc682326d7e/67ef95f22b1def5a86689b6f/50780_13_1_23_22880_D_SERIES_DX_12PP_EN_WORK.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 c0b92878f8679552a51883c2b8f14be9c1dc07834986d78f0bd1033c330a9818 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-dx200-355-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltd0d1abc682326d7e/67ef95f22b1def5a86689b6f/50780_13_1_23_22880_D_SERIES_DX_12PP_EN_WORK.pdf#page=1",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 c0b92878f8679552a51883c2b8f14be9c1dc07834986d78f0bd1033c330a9818 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-compair-dx200-355-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-dx200-355-p11"
    ],
    "fadCurve": [
      "october4c-compair-dx200-355-p11"
    ],
    "powerKw": [
      "october4c-compair-dx200-355-p11"
    ],
    "oilType": [
      "october4c-compair-dx200-355-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
