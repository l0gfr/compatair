import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-d15h",
  "slug": "compair-d15h",
  "brand": "CompAir",
  "model": "D15H",
  "variant": {
    "familyId": "compair-d15h",
    "label": "D15H",
    "distinguishingAttributes": {
      "équipement": "D15H",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 1800
    }
  ],
  "powerKw": 15,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-d15h.svg",
    "alt": "Repères techniques : CompAir D15H",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt2e952ee33299e2e4/67ef95ac3c6595e01ee569fa/50940_5_10_23_23670_COMPAIR_DH_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "D15H",
      "evidenceIds": [
        "october4c-compair-dh-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-compair-dh-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-dh-p11"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "1 800 L/min",
      "evidenceIds": [
        "october4c-compair-dh-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4c-compair-dh-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-dh-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir D15H. 1 800 L/min déclarés à 10 bar. Configuration constructeur : D15H.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 800 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Configuration refroidie par air ; variantes refroidies par eau consolidées.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-compair-dh-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt2e952ee33299e2e4/67ef95ac3c6595e01ee569fa/50940_5_10_23_23670_COMPAIR_DH_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 49dcf33416202d0d0d11025ceac79f3783a555b15efcf0b3b249422847fe42fa de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-dh-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt2e952ee33299e2e4/67ef95ac3c6595e01ee569fa/50940_5_10_23_23670_COMPAIR_DH_BROCHURE_UPDATES_EN_WORK.pdf#page=1",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 49dcf33416202d0d0d11025ceac79f3783a555b15efcf0b3b249422847fe42fa de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-compair-dh-p11"
    ],
    "model": [
      "october4c-compair-dh-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-dh-p11"
    ],
    "fadCurve": [
      "october4c-compair-dh-p11"
    ],
    "powerKw": [
      "october4c-compair-dh-p11"
    ],
    "oilType": [
      "october4c-compair-dh-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
