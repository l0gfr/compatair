import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-eko-g-22",
  "slug": "ekomak-eko-g-22",
  "brand": "Ekomak",
  "model": "EKO G 22",
  "variant": {
    "familyId": "ekomak-eko-g-22",
    "label": "EKO G 22",
    "distinguishingAttributes": {
      "équipement": "EKO G 22",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.5,
      "litersPerMinute": 2783.333
    }
  ],
  "powerKw": 22,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-eko-g-22.svg",
    "alt": "Repères techniques : Ekomak EKO G 22",
    "sourceUrl": "https://www.ekomak.com/en-global/products/screw-compressors/fixed-speed/gear-drive-eko-g-15-22",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EKO G 22",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
      ]
    },
    {
      "label": "Air livré à 12,5 bar",
      "value": "2 783,333 L/min",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak EKO G 22. 2 783,333 L/min déclarés à 12,5 bar. Configuration constructeur : EKO G 22.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 783,333 L/min déclarés à 12,5 bar."
    ],
    "limitations": [
      "Cuve, fréquence et cycle de service non documentés. Pression de référence du FAD conservée distincte de la pression de configuration.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-page-gear-drive-eko-g-15-22-p1",
      "sourceUrl": "https://www.ekomak.com/en-global/products/screw-compressors/fixed-speed/gear-drive-eko-g-15-22",
      "sourceLabel": "Ekomak, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 d5b71da39e7d9b3403ca5b21e29be32c59fa9443b5ae131a5722a057c0879ed9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
    ],
    "model": [
      "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
    ],
    "maxPressureBar": [
      "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
    ],
    "fadCurve": [
      "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
    ],
    "powerKw": [
      "october4c-ekomak-page-gear-drive-eko-g-15-22-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
