import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-l200",
  "slug": "compair-l200",
  "brand": "CompAir",
  "model": "L200",
  "variant": {
    "familyId": "compair-l200",
    "label": "L200",
    "distinguishingAttributes": {
      "équipement": "L200",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 29380
    }
  ],
  "powerKw": 200,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-l200.svg",
    "alt": "Repères techniques : CompAir L200",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt404a91362228cb43/67ef94753c6595cfa0e569ae/45811_27_6_23_23435_FRAME_6_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "L200",
      "evidenceIds": [
        "october4c-compair-frame6-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-compair-frame6-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-frame6-p11"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "29 380 L/min",
      "evidenceIds": [
        "october4c-compair-frame6-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "200 kW",
      "evidenceIds": [
        "october4c-compair-frame6-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-frame6-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir L200. 29 380 L/min déclarés à 13 bar. Configuration constructeur : L200.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 29 380 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés dans le tableau technique retenu.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-compair-frame6-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blt404a91362228cb43/67ef94753c6595cfa0e569ae/45811_27_6_23_23435_FRAME_6_BROCHURE_UPDATES_EN_WORK.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a0c71b552a2b46207fa4d740266f85ad6cc874837c3d337bd3b22c8a22258b29 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-compair-frame6-p11"
    ],
    "model": [
      "october4c-compair-frame6-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-frame6-p11"
    ],
    "fadCurve": [
      "october4c-compair-frame6-p11"
    ],
    "powerKw": [
      "october4c-compair-frame6-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
