import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "comprag-a1808",
  "slug": "comprag-a1808",
  "brand": "Comprag",
  "model": "A1808",
  "mpn": "11100041",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "comprag-a1808",
    "label": "Version constructeur A1808 ; alimentation triphasée 380–420 V / 50 Hz publiée",
    "distinguishingAttributes": {
      "équipement": "Version constructeur A1808 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [],
  "oilType": "unknown",
  "powerKw": 18.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/comprag-a1808.svg",
    "alt": "Repères techniques : Comprag A1808",
    "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Comprag A1808. La A1808 est le groupe A de 18,5 kW ; la AR1808-500 ajoute une cuve de 500 L et la ARD1808-500 un sécheur. Les références de pack sont distinctes de 11100041. La table relie une capacité à une variante de pression maximale ; la pression de mesure de capacité reste à confirmer avant calcul.",
    "verifiedFacts": [
      "Référence article : 11100041.",
      "Puissance entraînement : 18,5 kW.",
      "Pression maximale de travail : 8 bar.",
      "Capacité de la ligne, pression de mesure à confirmer : 3,1 m³/min.",
      "Alimentation : 3phases,380–420V,50 Hz.",
      "Masse du groupe A : 415 kg.",
      "Dimensions H×W×D : 1 270 × 1 000 × 800 mm."
    ],
    "limitations": [
      "Le tiret de la colonne cuve du groupe A reste une absence de volume chiffré, jamais une cuve 0 L inventée.",
      "Capacité selon ISO 1217 conservée dans les spécifications ; la note ne précise pas ici son appariement à une pression de mesure.",
      "Taux de marche du groupe non publié."
    ]
  },
  "specifications": [
    {
      "label": "Référence article",
      "value": "11100041",
      "evidenceIds": [
        "comprag-a1808-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance entraînement",
      "value": "18,5 kW",
      "evidenceIds": [
        "comprag-a1808-reserved-20261103-1"
      ]
    },
    {
      "label": "Pression maximale de travail",
      "value": "8 bar",
      "evidenceIds": [
        "comprag-a1808-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité de la ligne, pression de mesure à confirmer",
      "value": "3,1 m³/min",
      "evidenceIds": [
        "comprag-a1808-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation",
      "value": "3phases,380–420V,50 Hz",
      "evidenceIds": [
        "comprag-a1808-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse du groupe A",
      "value": "415 kg",
      "evidenceIds": [
        "comprag-a1808-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions H×W×D",
      "value": "1 270 × 1 000 × 800 mm",
      "evidenceIds": [
        "comprag-a1808-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-comprag-a-p10",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=10",
      "sourceLabel": "Comprag, catalogue constructeur A, page PDF 10",
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
      "id": "comprag-a1808-reserved-20261103-1",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=10",
      "sourceLabel": "Comprag : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9. La A1808 est le groupe A de 18,5 kW ; la AR1808-500 ajoute une cuve de 500 L et la ARD1808-500 un sécheur. Les références de pack sont distinctes de 11100041. La table relie une capacité à une variante de pression maximale ; la pression de mesure de capacité reste à confirmer avant calcul."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-comprag-a-p10"
    ],
    "maxPressureBar": [
      "october7-comprag-a-p10"
    ],
    "maxPressureBasis": [
      "october7-comprag-a-p10"
    ],
    "fadCurve": [
      "comprag-a1808-reserved-20261103-1"
    ],
    "powerKw": [
      "comprag-a1808-reserved-20261103-1"
    ],
    "mpn": [
      "october7-comprag-a-p10"
    ],
    "weightKg": [
      "comprag-a1808-reserved-20261103-1"
    ],
    "editorial": [
      "comprag-a1808-reserved-20261103-1"
    ],
    "specifications": [
      "comprag-a1808-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "explicit-maximum-working-pressure",
  "weightKg": 415
};

export default product;
