import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "gardner-denver-esm05-270",
  "slug": "gardner-denver-esm05-270",
  "brand": "Gardner Denver",
  "model": "ESM05-270",
  "variant": {
    "familyId": "gardner-denver-esm05-270",
    "label": "Compresseur sur cuve",
    "distinguishingAttributes": {
      "équipement": "Compresseur sur cuve",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 660
    }
  ],
  "dutyCycle": 1,
  "powerKw": 5.5,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-esm05-270.svg",
    "alt": "Repères techniques : Gardner Denver ESM05-270",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt14083a1eebc91a7c/67f910c40a3bd686326692f5/21874_New_Frame_0_6pp_Brochure_work.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur sur cuve",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "660 L/min",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-gd-esm2-6-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    }
  ],
  "editorial": {
    "overview": "Gardner Denver ESM05-270. 660 L/min déclarés à 10 bar. Configuration constructeur : Compresseur sur cuve.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 660 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "La fréquence électrique de cette configuration n’est pas documentée."
    ]
  },
  "evidence": [
    {
      "id": "october4c-gd-esm2-6-p5",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt14083a1eebc91a7c/67f910c40a3bd686326692f5/21874_New_Frame_0_6pp_Brochure_work.pdf#page=5",
      "sourceLabel": "Gardner Denver, catalogue constructeur ESM2-6, page PDF 5",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 5a6d2333e7f9f5e04cdc65936f40212a31b7c5fb6d428edfeb9a9896073a85f1 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-gd-esm2-6-p2",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt14083a1eebc91a7c/67f910c40a3bd686326692f5/21874_New_Frame_0_6pp_Brochure_work.pdf#page=2",
      "sourceLabel": "Gardner Denver, catalogue constructeur ESM2-6, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 5a6d2333e7f9f5e04cdc65936f40212a31b7c5fb6d428edfeb9a9896073a85f1 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-gd-esm2-6-p5"
    ],
    "maxPressureBar": [
      "october4c-gd-esm2-6-p5"
    ],
    "tankLiters": [
      "october4c-gd-esm2-6-p5"
    ],
    "fadCurve": [
      "october4c-gd-esm2-6-p5"
    ],
    "powerKw": [
      "october4c-gd-esm2-6-p5"
    ],
    "dutyCycle": [
      "october4c-gd-esm2-6-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
