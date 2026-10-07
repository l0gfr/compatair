import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-l11e",
  "slug": "compair-l11e",
  "brand": "CompAir",
  "model": "L11e",
  "variant": {
    "familyId": "compair-l11e",
    "label": "L11e",
    "distinguishingAttributes": {
      "équipement": "L11e",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 1320
    }
  ],
  "powerKw": 11,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l11e.svg",
    "alt": "Repères techniques : CompAir L11e",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt393f025935d5d393/67ef9535e79e24cf498a8f46/62508_20_11_24_24341_FRAME_1_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L11e",
      "evidenceIds": [
        "october4c-compair-frame1-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-compair-frame1-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-frame1-p11"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "1 320 L/min",
      "evidenceIds": [
        "october4c-compair-frame1-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4c-compair-frame1-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-frame1-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L11e. 1 320 L/min déclarés à 13 bar. Configuration constructeur : L11e.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 320 L/min déclarés à 13 bar."
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
      "id": "october4c-compair-frame1-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt393f025935d5d393/67ef9535e79e24cf498a8f46/62508_20_11_24_24341_FRAME_1_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 7dcdc2b984e1cd8532728006d10d8e24b246245b7e34a1207f46c62ad7e0b53c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-compair-frame1-p11"
    ],
    "model": [
      "october4c-compair-frame1-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-frame1-p11"
    ],
    "fadCurve": [
      "october4c-compair-frame1-p11"
    ],
    "powerKw": [
      "october4c-compair-frame1-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
