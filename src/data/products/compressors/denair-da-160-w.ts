import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-da-160-w",
  "slug": "denair-da-160-w",
  "brand": "DENAIR",
  "model": "DA-160(W)",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-da-160-w",
    "label": "DA-160(W)",
    "distinguishingAttributes": {
      "équipement": "DA-160(W)",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "oilType": "oil",
  "powerKw": 160,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-da-160-w.svg",
    "alt": "Repères techniques : DENAIR DA-160(W)",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "DENAIR DA-160(W). La DA-160(W) annonce28,63 m³/min dans la ligne 50 Hz de plafond 7 bar, contre 27,91 m³/min à60 Hz ; la DAV-160(W) est une autre régulation. La note décrit les conditions d’entrée ISO, sans confirmer que la colonne de pression maximale est celle du point de mesure : la capacité reste documentaire.",
    "verifiedFacts": [
      "Configuration : 50 Hz, ligne de pression maximale de travail7 bar.",
      "Capacité publiée, pression de mesure à confirmer : 28,63 m³/min.",
      "Puissance installée : 160 kW.",
      "Masse publiée : 3420 kg.",
      "Dimensions L×W×H : 3 110 × 1 890 × 2 150 mm.",
      "Méthode de capacité : ISO 1217:2009 annexe C ; entrée1 bar absolu, température20 °C."
    ],
    "limitations": [
      "La capacité publiée n’est pas transformée en point FAD faute de pression de mesure explicite.",
      "Le plafond 7 bar décrit la configuration retenue ; les autres lignes ne sont pas fusionnées.",
      "Cuve et taux de marche du groupe non documentés."
    ]
  },
  "specifications": [
    {
      "label": "Configuration",
      "value": "50 Hz, ligne de pression maximale de travail7 bar",
      "evidenceIds": [
        "denair-da-160-w-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité publiée, pression de mesure à confirmer",
      "value": "28,63 m³/min",
      "evidenceIds": [
        "denair-da-160-w-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance installée",
      "value": "160 kW",
      "evidenceIds": [
        "denair-da-160-w-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "3420 kg",
      "evidenceIds": [
        "denair-da-160-w-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "3 110 × 1 890 × 2 150 mm",
      "evidenceIds": [
        "denair-da-160-w-reserved-20261103-1"
      ]
    },
    {
      "label": "Méthode de capacité",
      "value": "ISO 1217:2009 annexe C ; entrée1 bar absolu, température20 °C",
      "evidenceIds": [
        "denair-da-160-w-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-denair-screw-p6",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=6",
      "sourceLabel": "DENAIR, Screw Air Compressors, gammes DA et DVA, page PDF 6",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-denair-screw-p1",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=1",
      "sourceLabel": "DENAIR, Screw Air Compressors, gammes DA et DVA, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "denair-da-160-w-reserved-20261103-1",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=6",
      "sourceLabel": "DENAIR : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad. La DA-160(W) annonce28,63 m³/min dans la ligne 50 Hz de plafond 7 bar, contre 27,91 m³/min à60 Hz ; la DAV-160(W) est une autre régulation. La note décrit les conditions d’entrée ISO, sans confirmer que la colonne de pression maximale est celle du point de mesure : la capacité reste documentaire."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-denair-screw-p6"
    ],
    "model": [
      "october5-denair-screw-p6"
    ],
    "maxPressureBar": [
      "october5-denair-screw-p6"
    ],
    "fadCurve": [
      "denair-da-160-w-reserved-20261103-1"
    ],
    "powerKw": [
      "denair-da-160-w-reserved-20261103-1"
    ],
    "oilType": [
      "october5-denair-screw-p1"
    ],
    "weightKg": [
      "denair-da-160-w-reserved-20261103-1"
    ],
    "editorial": [
      "denair-da-160-w-reserved-20261103-1"
    ],
    "specifications": [
      "denair-da-160-w-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 3420
};

export default product;
