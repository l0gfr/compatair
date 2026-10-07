import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "gardner-denver-l11",
  "slug": "gardner-denver-l11",
  "brand": "Gardner Denver",
  "model": "L11",
  "variant": {
    "familyId": "gardner-denver-l11",
    "label": "Compresseur à vis à vitesse fixe, point nominal de la table 60 Hz",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis à vitesse fixe, point nominal de la table 60 Hz",
      "pressionDeConfiguration": "13,1 bar",
      "cuve": "Non documentée",
      "fréquence": "60 Hz"
    }
  },
  "maxPressureBar": 13.1,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13.1,
      "litersPerMinute": 1200
    }
  ],
  "powerKw": 11,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-l11.svg",
    "alt": "Repères techniques : Gardner Denver L11",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/bltd6f800f06b5039b7/69c3ce9afb081aaa70a0b18e/gs-l04-l290-14th-3-26.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis à vitesse fixe, point nominal de la table 60 Hz",
      "evidenceIds": [
        "october4c-gd-l-catalog-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13,1 bar",
      "evidenceIds": [
        "october4c-gd-l-catalog-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-gd-l-catalog-p11"
      ]
    },
    {
      "label": "Air livré à 13,1 bar",
      "value": "1 200 L/min",
      "evidenceIds": [
        "october4c-gd-l-catalog-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4c-gd-l-catalog-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "60 Hz",
      "evidenceIds": [
        "october4c-gd-l-catalog-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "Gardner Denver L11. 1 200 L/min déclarés à 13,1 bar. Configuration constructeur : Compresseur à vis à vitesse fixe, point nominal de la table 60 Hz.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13,1 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 200 L/min déclarés à 13,1 bar."
    ],
    "limitations": [
      "Configuration 60 Hz du catalogue nord-américain ; une configuration électrique française n’est pas démontrée par cette fiche.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-gd-l-catalog-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/bltd6f800f06b5039b7/69c3ce9afb081aaa70a0b18e/gs-l04-l290-14th-3-26.pdf#page=11",
      "sourceLabel": "Gardner Denver, L-Series catalogue 14e édition mars 2026, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 defcf02588a74d40f5217f5446efe6b621bd7360fb6f2cc727a7acc05049d2b2 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-gd-l-catalog-p11"
    ],
    "model": [
      "october4c-gd-l-catalog-p11"
    ],
    "maxPressureBar": [
      "october4c-gd-l-catalog-p11"
    ],
    "fadCurve": [
      "october4c-gd-l-catalog-p11"
    ],
    "powerKw": [
      "october4c-gd-l-catalog-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
