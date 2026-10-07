import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "alup-largo-31",
  "slug": "alup-largo-31",
  "brand": "ALUP",
  "model": "LARGO 31",
  "variant": {
    "familyId": "alup-largo-31",
    "label": "LARGO 31",
    "distinguishingAttributes": {
      "équipement": "LARGO 31",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.5,
      "litersPerMinute": 4416.667
    }
  ],
  "powerKw": 30,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-largo-31.svg",
    "alt": "Repères techniques : ALUP LARGO 31",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-21-45-(2021)/leaflets/ALUP_LAR_ALL_EVO_30_45_ENG_6999640570_LR.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "LARGO 31",
      "evidenceIds": [
        "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
      ]
    },
    {
      "label": "Air livré à 12,5 bar",
      "value": "4 416,667 L/min",
      "evidenceIds": [
        "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "30 kW",
      "evidenceIds": [
        "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP LARGO 31. 4 416,667 L/min déclarés à 12,5 bar. Configuration constructeur : LARGO 31.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 4 416,667 L/min déclarés à 12,5 bar."
    ],
    "limitations": [
      "Configuration constructeur de base ; les cuves optionnelles ne sont pas attribuées sans code de configuration propre.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-21-45-(2021)/leaflets/ALUP_LAR_ALL_EVO_30_45_ENG_6999640570_LR.pdf#page=4",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 4",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 06fe46b31fe8f7349c1f8f6fde4341ba3920dece9ea1b746219428d59d91d4e5 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p1",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-21-45-(2021)/leaflets/ALUP_LAR_ALL_EVO_30_45_ENG_6999640570_LR.pdf#page=1",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 06fe46b31fe8f7349c1f8f6fde4341ba3920dece9ea1b746219428d59d91d4e5 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
    ],
    "model": [
      "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
    ],
    "fadCurve": [
      "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
    ],
    "powerKw": [
      "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p4"
    ],
    "oilType": [
      "october4c-alup-alup-lar-all-evo-30-45-eng-6999640570-lr-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
