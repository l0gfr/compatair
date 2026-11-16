import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "comprag-ar0708-270",
  "slug": "comprag-ar0708-270",
  "brand": "Comprag",
  "model": "AR0708-270",
  "mpn": "11100015",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "comprag-ar0708-270",
    "label": "Version constructeur AR0708-270 ; alimentation triphasée 380–420 V / 50 Hz publiée ; réservoir 270 L",
    "distinguishingAttributes": {
      "équipement": "Version constructeur AR0708-270 ; alimentation triphasée 380–420 V / 50 Hz publiée ; réservoir 270 L",
      "pressionDeConfiguration": "8 bar",
      "cuve": "270 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 8,
  "fadCurve": [],
  "oilType": "unknown",
  "powerKw": 7.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/comprag-ar0708-270-technical-20261116-reviews.svg",
    "alt": "Repères techniques : Comprag AR0708-270",
    "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "editorial": {
    "overview": "L’AR0708-270 associe le groupe 7,5 kW et la cuve 270 L sous 380–420 V/50 Hz triphasé. Le catalogue annonce 1,1 m³/min FAD et une pression maximale 8 bar ; l’AR1108-270 passe à 11 kW et 1,6 m³/min. L’appariement de la pression de mesure n’est pas explicité séparément du maximum. Ces capacités restent documentaires plutôt qu’une courbe supposée à 8 bar.",
    "verifiedFacts": [
      "L’AR0708-270 associe le groupe 7,5 kW et la cuve 270 L sous 380–420 V/50 Hz triphasé.",
      "Le catalogue annonce 1,1 m³/min FAD et une pression maximale 8 bar ; l’AR1108-270 passe à 11 kW et 1,6 m³/min."
    ],
    "limitations": [
      "Seule la version 8 bar et son code constructeur sont retenus. Les versions 10/13 bar ne sont pas comptées comme de nouveaux modèles dans ce lot.",
      "Les tirets de la colonne réservoir ne sont pas transformés en volume nul. Les dimensions et poids des variantes ne sont pas reportés automatiquement.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La courbe dimensionnante a été retirée après revue : la mesure FAD et son appariement à une pression ne sont pas suffisamment établis. Les valeurs documentaires restent conservées."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Version constructeur AR0708-270 ; alimentation triphasée 380–420 V / 50 Hz publiée ; réservoir 270 L",
      "evidenceIds": [
        "october7-comprag-a-p5"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october7-comprag-a-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october7-comprag-a-p5"
      ]
    },
    {
      "label": "Débit documentaire, hors calcul",
      "value": "1 100 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
      "evidenceIds": [
        "review:2026-11-16-reviews:comprag-ar0708-270:0"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
      "evidenceIds": [
        "october7-comprag-a-p5"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october7-comprag-a-p5"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-comprag-a-p5",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=5",
      "sourceLabel": "Comprag, catalogue constructeur A, page PDF 5",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october7-comprag-a-p6",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=6",
      "sourceLabel": "Comprag, catalogue constructeur A, page PDF 6",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-reviews:comprag-ar0708-270:0",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf",
      "sourceLabel": "Comprag, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "L’AR0708-270 associe le groupe 7,5 kW et la cuve 270 L sous 380–420 V/50 Hz triphasé. Le catalogue annonce 1,1 m³/min FAD et une pression maximale 8 bar ; l’AR1108-270 passe à 11 kW et 1,6 m³/min. L’appariement de la pression de mesure n’est pas explicité séparément du maximum. Ces capacités restent documentaires plutôt qu’une courbe supposée à 8 bar. GET complet SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9. Pages PDF lues : 5, 6."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-comprag-a-p5"
    ],
    "maxPressureBar": [
      "october7-comprag-a-p5"
    ],
    "maxPressureBasis": [
      "october7-comprag-a-p5"
    ],
    "tankLiters": [
      "october7-comprag-a-p5"
    ],
    "fadCurve": [
      "review:2026-11-16-reviews:comprag-ar0708-270:0"
    ],
    "powerKw": [
      "october7-comprag-a-p5"
    ],
    "mpn": [
      "october7-comprag-a-p5"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "explicit-maximum-working-pressure"
};

export default product;
