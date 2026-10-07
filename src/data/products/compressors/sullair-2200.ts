import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "sullair-2200",
  "slug": "sullair-2200",
  "brand": "Sullair",
  "model": "2200",
  "variant": {
    "familyId": "sullair-2200",
    "label": "Compresseur S-energy à vitesse fixe, configuration 50 Hz",
    "distinguishingAttributes": {
      "équipement": "Compresseur S-energy à vitesse fixe, configuration 50 Hz",
      "pressionDeConfiguration": "12,066 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 12.066,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.066,
      "litersPerMinute": 2888.318
    }
  ],
  "powerKw": 22,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/sullair-2200.svg",
    "alt": "Repères techniques : Sullair 2200",
    "sourceUrl": "https://europe.sullair.com/sites/default/files/2024-09/LIT_S-energy%2025-40%20hp%20Brochure_en.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur S-energy à vitesse fixe, configuration 50 Hz",
      "evidenceIds": [
        "october4c-sullair-senergy-p8"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "12,066 bar (175 psig publiés)",
      "evidenceIds": [
        "october4c-sullair-senergy-p8",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-sullair-senergy-p8"
      ]
    },
    {
      "label": "Air livré à 12,066 bar",
      "value": "2 888,318 L/min (102 cfm publiés)",
      "evidenceIds": [
        "october4c-sullair-senergy-p8",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4c-sullair-senergy-p8"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-sullair-senergy-p8"
      ]
    }
  ],
  "editorial": {
    "overview": "Sullair 2200. 2 888,318 L/min déclarés à 12,066 bar. Configuration constructeur : Compresseur S-energy à vitesse fixe, configuration 50 Hz.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 12,066 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 888,318 L/min déclarés à 12,066 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-sullair-senergy-p8",
      "sourceUrl": "https://europe.sullair.com/sites/default/files/2024-09/LIT_S-energy%2025-40%20hp%20Brochure_en.pdf#page=8",
      "sourceLabel": "Sullair, S-energy 25-40 HP septembre 2024, page PDF 8",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 0bfcedbf70fc8d6c6c7cb4255d260d7d029e3372c9459abec79267e5893786cd de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide to the SI, appendix B.8, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 057d9641caab13e6632aa7f70eeb1b76d676ae3e131b3e6ed73b8bf6ca0c28c3 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-sullair-senergy-p8"
    ],
    "model": [
      "october4c-sullair-senergy-p8"
    ],
    "maxPressureBar": [
      "october4c-sullair-senergy-p8",
      "october4c-nist-conversions-p1"
    ],
    "fadCurve": [
      "october4c-sullair-senergy-p8",
      "october4c-nist-conversions-p1"
    ],
    "powerKw": [
      "october4c-sullair-senergy-p8"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
