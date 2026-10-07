import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-dx200e",
  "slug": "compair-dx200e",
  "brand": "CompAir",
  "model": "DX200e",
  "variant": {
    "familyId": "compair-dx200e",
    "label": "DX200e",
    "distinguishingAttributes": {
      "équipement": "DX200e",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 32300
    }
  ],
  "powerKw": 200,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-dx200e.svg",
    "alt": "Repères techniques : CompAir DX200e",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/bltd0d1abc682326d7e/67ef95f22b1def5a86689b6f/50780_13_1_23_22880_D_SERIES_DX_12PP_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DX200e",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
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
      "label": "Air livré à 10 bar",
      "value": "32 300 L/min",
      "evidenceIds": [
        "october4c-compair-dx200-355-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "200 kW",
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
    "overview": "CompAir DX200e. 32 300 L/min déclarés à 10 bar. Configuration constructeur : DX200e.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 32 300 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Air livré mesuré à 10 bar ; pression nominale de configuration conservée séparément.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
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
    "maxPressureBasis": [
      "october4c-compair-dx200-355-p11"
    ],
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
