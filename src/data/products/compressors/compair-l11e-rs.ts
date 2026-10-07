import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-l11e-rs",
  "slug": "compair-l11e-rs",
  "brand": "CompAir",
  "model": "L11e RS",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "compair-l11e-rs",
    "label": "L11e RS",
    "distinguishingAttributes": {
      "équipement": "L11e RS",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 1260
    }
  ],
  "oilType": "unknown",
  "powerKw": 11,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l11e-rs.svg",
    "alt": "Repères techniques : CompAir L11e RS",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt393f025935d5d393/67ef9535e79e24cf498a8f46/62508_20_11_24_24341_FRAME_1_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "CompAir L11e RS. 1 260 L/min déclarés à 13 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : L11e RS.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 260 L/min déclarés à 13 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
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
      "value": "L11e RS",
      "evidenceIds": [
        "october5-compair-frame1-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october5-compair-frame1-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-compair-frame1-p11"
      ]
    },
    {
      "label": "FAD maximal déclaré à 13 bar",
      "value": "1 260 L/min",
      "evidenceIds": [
        "october5-compair-frame1-p11"
      ]
    },
    {
      "label": "FAD minimal déclaré à 13 bar",
      "value": "570 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-compair-frame1-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october5-compair-frame1-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-compair-frame1-p11"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-compair-frame1-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt393f025935d5d393/67ef9535e79e24cf498a8f46/62508_20_11_24_24341_FRAME_1_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur L07–L11 et L07e–L11e, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 7dcdc2b984e1cd8532728006d10d8e24b246245b7e34a1207f46c62ad7e0b53c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-compair-frame1-p11"
    ],
    "model": [
      "october5-compair-frame1-p11"
    ],
    "maxPressureBar": [
      "october5-compair-frame1-p11"
    ],
    "fadCurve": [
      "october5-compair-frame1-p11"
    ],
    "powerKw": [
      "october5-compair-frame1-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
