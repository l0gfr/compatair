import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "gardner-denver-esm04",
  "slug": "gardner-denver-esm04",
  "brand": "Gardner Denver",
  "model": "ESM04",
  "variant": {
    "familyId": "gardner-denver-esm04",
    "label": "Montage de base",
    "distinguishingAttributes": {
      "équipement": "Montage de base",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 450
    }
  ],
  "powerKw": 4,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-esm04-technical-20261115-followup.svg",
    "alt": "Repères techniques : Gardner Denver ESM04",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt14083a1eebc91a7c/67f910c40a3bd686326692f5/21874_New_Frame_0_6pp_Brochure_work.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Montage de base",
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
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "450 L/min",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4c-gd-esm2-6-p5"
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
    "overview": "Gardner Denver ESM04 : groupe sur base de 4 kW, 154 kg et 600 × 650 × 1 100 mm, à démarreur étoile-triangle. La version ESM04-270 ajoute une cuve de 270 L et passe à 245 kg ; la 500 L pèse 314 kg. Le FAD de 0,45 m³/min est mesuré à 10 bar selon ISO 1217, mais la promesse de service continu de gamme ne quantifie pas un taux de marche du groupe.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 450 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La mention de service continu concerne une gamme ou un élément de compression ; le taux de marche du groupe complet n’est pas quantifié."
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
    },
    {
      "id": "review:2026-11-12-technical:gardner-denver-esm04:0",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt14083a1eebc91a7c/67f910c40a3bd686326692f5/21874_New_Frame_0_6pp_Brochure_work.pdf",
      "sourceLabel": "Gardner Denver, document fabricant, pages PDF 2, 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-12",
      "confidence": "B",
      "notes": "La mention de service continu concerne une gamme ou un élément de compression ; le taux de marche du groupe complet n’est pas quantifié. GET complet : SHA-256 5a6d2333e7f9f5e04cdc65936f40212a31b7c5fb6d428edfeb9a9896073a85f1. Transcriptions historiques conservées."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-gd-esm2-6-p5"
    ],
    "maxPressureBar": [
      "october4c-gd-esm2-6-p5"
    ],
    "fadCurve": [
      "october4c-gd-esm2-6-p5"
    ],
    "powerKw": [
      "october4c-gd-esm2-6-p5"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
