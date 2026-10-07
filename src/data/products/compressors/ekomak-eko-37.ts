import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-eko-37",
  "slug": "ekomak-eko-37",
  "brand": "Ekomak",
  "model": "EKO 37",
  "variant": {
    "familyId": "ekomak-eko-37",
    "label": "EKO 37",
    "distinguishingAttributes": {
      "équipement": "EKO 37",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 5330
    }
  ],
  "powerKw": 37,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-eko-37.svg",
    "alt": "Repères techniques : Ekomak EKO 37",
    "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-30-45-cd-vst/leaflets/EKOMAK_EKO_3045202501-EN-Orj%201.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EKO 37",
      "evidenceIds": [
        "october4c-ekomak-extra-7-p2"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ekomak-extra-7-p2"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ekomak-extra-7-p2"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "5 330 L/min",
      "evidenceIds": [
        "october4c-ekomak-extra-7-p2"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
      "evidenceIds": [
        "october4c-ekomak-extra-7-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-extra-7-p2"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak EKO 37. 5 330 L/min déclarés à 13 bar. Configuration constructeur : EKO 37.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 5 330 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Cuve, fréquence et cycle de service non documentés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-extra-7-p2",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/ivr/eko-30-45-cd-vst/leaflets/EKOMAK_EKO_3045202501-EN-Orj%201.pdf#page=2",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b314b3c00bd0aaa64a3f5833a01104dcc5d1e000c7e30925ca6c922dfe1b6a41 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-extra-7-p2"
    ],
    "model": [
      "october4c-ekomak-extra-7-p2"
    ],
    "maxPressureBar": [
      "october4c-ekomak-extra-7-p2"
    ],
    "fadCurve": [
      "october4c-ekomak-extra-7-p2"
    ],
    "powerKw": [
      "october4c-ekomak-extra-7-p2"
    ],
    "oilType": [
      "october4c-ekomak-extra-7-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
