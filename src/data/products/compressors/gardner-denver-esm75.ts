import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "gardner-denver-esm75",
  "slug": "gardner-denver-esm75",
  "brand": "Gardner Denver",
  "model": "ESM75",
  "variant": {
    "familyId": "gardner-denver-esm75",
    "label": "Compresseur à vis à vitesse fixe",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis à vitesse fixe",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 10500
    }
  ],
  "powerKw": 75,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-esm75.svg",
    "alt": "Repères techniques : Gardner Denver ESM75",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt092ea37109f815cd/67f911170a3bd603a6669314/GD_FRAME_4_INC_DRYER_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis à vitesse fixe",
      "evidenceIds": [
        "october4c-gd-esm55-75-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-gd-esm55-75-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-gd-esm55-75-p11"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "10 500 L/min",
      "evidenceIds": [
        "october4c-gd-esm55-75-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "75 kW",
      "evidenceIds": [
        "october4c-gd-esm55-75-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-gd-esm55-75-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "Gardner Denver ESM75. 10 500 L/min déclarés à 13 bar. Configuration constructeur : Compresseur à vis à vitesse fixe.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 10 500 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-gd-esm55-75-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt092ea37109f815cd/67f911170a3bd603a6669314/GD_FRAME_4_INC_DRYER_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "Gardner Denver, catalogue constructeur ESM VS55-75, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 609639e97700e7a09e2fcab2cf1dd7e5cca7bf5effc4410c6e9a542368655b65 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-gd-esm55-75-p11"
    ],
    "model": [
      "october4c-gd-esm55-75-p11"
    ],
    "maxPressureBar": [
      "october4c-gd-esm55-75-p11"
    ],
    "fadCurve": [
      "october4c-gd-esm55-75-p11"
    ],
    "powerKw": [
      "october4c-gd-esm55-75-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
