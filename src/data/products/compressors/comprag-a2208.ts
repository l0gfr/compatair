import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "comprag-a2208",
  "slug": "comprag-a2208",
  "brand": "Comprag",
  "model": "A2208",
  "mpn": "11100051",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "comprag-a2208",
    "label": "Version constructeur A2208 ; alimentation triphasée 380–420 V / 50 Hz publiée",
    "distinguishingAttributes": {
      "équipement": "Version constructeur A2208 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [],
  "oilType": "unknown",
  "powerKw": 22,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/comprag-a2208.svg",
    "alt": "Repères techniques : Comprag A2208",
    "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Comprag A2208. La A2208 est le groupe A de 22 kW ; la AR2208-500 ajoute une cuve de 500 L et la ARD2208-500 un sécheur. Les variantesF2208 etD-2208 ne sont pas la référence 11100051. La table relie une capacité à une variante de pression maximale ; la pression de mesure de capacité reste à confirmer avant calcul.",
    "verifiedFacts": [
      "Référence article : 11100051.",
      "Puissance entraînement : 22 kW.",
      "Pression maximale de travail : 8 bar.",
      "Capacité de la ligne, pression de mesure à confirmer : 3,6 m³/min.",
      "Alimentation : 3phases,380–420V,50 Hz.",
      "Masse du groupe A : 435 kg.",
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
      "value": "11100051",
      "evidenceIds": [
        "comprag-a2208-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance entraînement",
      "value": "22 kW",
      "evidenceIds": [
        "comprag-a2208-reserved-20261103-1"
      ]
    },
    {
      "label": "Pression maximale de travail",
      "value": "8 bar",
      "evidenceIds": [
        "comprag-a2208-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité de la ligne, pression de mesure à confirmer",
      "value": "3,6 m³/min",
      "evidenceIds": [
        "comprag-a2208-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation",
      "value": "3phases,380–420V,50 Hz",
      "evidenceIds": [
        "comprag-a2208-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse du groupe A",
      "value": "435 kg",
      "evidenceIds": [
        "comprag-a2208-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions H×W×D",
      "value": "1 270 × 1 000 × 800 mm",
      "evidenceIds": [
        "comprag-a2208-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-comprag-a-p11",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=11",
      "sourceLabel": "Comprag, catalogue constructeur A, page PDF 11",
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
      "id": "comprag-a2208-reserved-20261103-1",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=11",
      "sourceLabel": "Comprag : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9. La A2208 est le groupe A de 22 kW ; la AR2208-500 ajoute une cuve de 500 L et la ARD2208-500 un sécheur. Les variantesF2208 etD-2208 ne sont pas la référence 11100051. La table relie une capacité à une variante de pression maximale ; la pression de mesure de capacité reste à confirmer avant calcul."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-comprag-a-p11"
    ],
    "maxPressureBar": [
      "october7-comprag-a-p11"
    ],
    "maxPressureBasis": [
      "october7-comprag-a-p11"
    ],
    "fadCurve": [
      "comprag-a2208-reserved-20261103-1"
    ],
    "powerKw": [
      "comprag-a2208-reserved-20261103-1"
    ],
    "mpn": [
      "october7-comprag-a-p11"
    ],
    "weightKg": [
      "comprag-a2208-reserved-20261103-1"
    ],
    "editorial": [
      "comprag-a2208-reserved-20261103-1"
    ],
    "specifications": [
      "comprag-a2208-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "explicit-maximum-working-pressure",
  "weightKg": 435
};

export default product;
