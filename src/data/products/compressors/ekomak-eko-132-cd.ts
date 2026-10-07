import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-eko-132-cd",
  "slug": "ekomak-eko-132-cd",
  "brand": "Ekomak",
  "model": "EKO 132 CD",
  "variant": {
    "familyId": "ekomak-eko-132-cd",
    "label": "EKO 132 CD",
    "distinguishingAttributes": {
      "équipement": "EKO 132 CD",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 18150
    }
  ],
  "powerKw": 132,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-eko-132-cd.svg",
    "alt": "Repères techniques : Ekomak EKO 132 CD",
    "sourceUrl": "https://www.ekomak.com/en-global/products/screw-compressors/fixed-speed/gear-drive-eko-111-160-cd",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EKO 132 CD",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "18 150 L/min",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "132 kW",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak EKO 132 CD. 18 150 L/min déclarés à 13 bar. Configuration constructeur : EKO 132 CD.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 18 150 L/min déclarés à 13 bar."
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
      "id": "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1",
      "sourceUrl": "https://www.ekomak.com/en-global/products/screw-compressors/fixed-speed/gear-drive-eko-111-160-cd",
      "sourceLabel": "Ekomak, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a90b5d2f2765df78ec1a7f4f1eeabb871c54b7b841060ab0b1ecf3c93261a704 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
    ],
    "model": [
      "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
    ],
    "maxPressureBar": [
      "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
    ],
    "fadCurve": [
      "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
    ],
    "powerKw": [
      "october4c-ekomak-page-gear-drive-eko-111-160-cd-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
