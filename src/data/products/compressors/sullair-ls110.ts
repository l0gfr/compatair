import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "sullair-ls110",
  "slug": "sullair-ls110",
  "brand": "Sullair",
  "model": "LS110",
  "variant": {
    "familyId": "sullair-ls110",
    "label": "Compresseur à vis à vitesse fixe, point de pleine charge du catalogue LS 2025",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis à vitesse fixe, point de pleine charge du catalogue LS 2025",
      "pressionDeConfiguration": "12,066 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 12.066,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.066,
      "litersPerMinute": 16083.967
    }
  ],
  "powerKw": 110,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/sullair-ls110.svg",
    "alt": "Repères techniques : Sullair LS110",
    "sourceUrl": "https://www.sullair.com/sites/default/files/2025-06/LIT_LS%20Brochure_en.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis à vitesse fixe, point de pleine charge du catalogue LS 2025",
      "evidenceIds": [
        "october4c-sullair-ls-catalog-p20"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "12,066 bar (175 psig publiés)",
      "evidenceIds": [
        "october4c-sullair-ls-catalog-p20",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-sullair-ls-catalog-p20"
      ]
    },
    {
      "label": "Air livré à 12,066 bar",
      "value": "16 083,967 L/min (568 cfm publiés)",
      "evidenceIds": [
        "october4c-sullair-ls-catalog-p20",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "110 kW",
      "evidenceIds": [
        "october4c-sullair-ls-catalog-p20"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-sullair-ls-catalog-p20"
      ]
    }
  ],
  "editorial": {
    "overview": "Sullair LS110. 16 083,967 L/min déclarés à 12,066 bar. Configuration constructeur : Compresseur à vis à vitesse fixe, point de pleine charge du catalogue LS 2025.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 12,066 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 16 083,967 L/min déclarés à 12,066 bar."
    ],
    "limitations": [
      "Les cfm sont explicitement rattachés à ISO 1217 annexe C ; ils sont utilisés pour la conversion, sans reprendre les colonnes métriques présentant des écarts.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-sullair-ls-catalog-p20",
      "sourceUrl": "https://www.sullair.com/sites/default/files/2025-06/LIT_LS%20Brochure_en.pdf#page=20",
      "sourceLabel": "Sullair, LS catalogue juin 2025, page PDF 20",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b5334d2e14ba868abae9d11191aa45a30e2ea9755e0ccbf4f32c4c8e16b7edc8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october4c-sullair-ls-catalog-p20"
    ],
    "model": [
      "october4c-sullair-ls-catalog-p20"
    ],
    "maxPressureBar": [
      "october4c-sullair-ls-catalog-p20",
      "october4c-nist-conversions-p1"
    ],
    "fadCurve": [
      "october4c-sullair-ls-catalog-p20",
      "october4c-nist-conversions-p1"
    ],
    "powerKw": [
      "october4c-sullair-ls-catalog-p20"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
