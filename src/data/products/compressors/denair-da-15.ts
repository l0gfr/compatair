import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-da-15",
  "slug": "denair-da-15",
  "brand": "DENAIR",
  "model": "DA-15",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-da-15",
    "label": "DA-15",
    "distinguishingAttributes": {
      "équipement": "DA-15",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "oilType": "oil",
  "powerKw": 15,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-da-15.svg",
    "alt": "Repères techniques : DENAIR DA-15",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "DENAIR DA-15. La DA-15 annonce2,40 m³/min dans la ligne 50 Hz de plafond 7 bar ; la colonne60 Hz indique2,52 m³/min. La note décrit les conditions d’entrée ISO, sans confirmer que la colonne de pression maximale est celle du point de mesure : la capacité reste documentaire.",
    "verifiedFacts": [
      "Configuration : 50 Hz, ligne de pression maximale de travail7 bar.",
      "Capacité publiée, pression de mesure à confirmer : 2,40 m³/min.",
      "Puissance installée : 15 kW.",
      "Masse publiée : 390 kg.",
      "Dimensions L×W×H : 1 100 × 650 × 920 mm.",
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
        "denair-da-15-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité publiée, pression de mesure à confirmer",
      "value": "2,40 m³/min",
      "evidenceIds": [
        "denair-da-15-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance installée",
      "value": "15 kW",
      "evidenceIds": [
        "denair-da-15-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "390 kg",
      "evidenceIds": [
        "denair-da-15-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "1 100 × 650 × 920 mm",
      "evidenceIds": [
        "denair-da-15-reserved-20261103-1"
      ]
    },
    {
      "label": "Méthode de capacité",
      "value": "ISO 1217:2009 annexe C ; entrée1 bar absolu, température20 °C",
      "evidenceIds": [
        "denair-da-15-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-denair-screw-p5",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=5",
      "sourceLabel": "DENAIR, Screw Air Compressors, gammes DA et DVA, page PDF 5",
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
      "id": "denair-da-15-reserved-20261103-1",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=5",
      "sourceLabel": "DENAIR : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad. La DA-15 annonce2,40 m³/min dans la ligne 50 Hz de plafond 7 bar ; la colonne60 Hz indique2,52 m³/min. La note décrit les conditions d’entrée ISO, sans confirmer que la colonne de pression maximale est celle du point de mesure : la capacité reste documentaire."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-denair-screw-p5"
    ],
    "model": [
      "october5-denair-screw-p5"
    ],
    "maxPressureBar": [
      "october5-denair-screw-p5"
    ],
    "fadCurve": [
      "denair-da-15-reserved-20261103-1"
    ],
    "powerKw": [
      "denair-da-15-reserved-20261103-1"
    ],
    "oilType": [
      "october5-denair-screw-p1"
    ],
    "weightKg": [
      "denair-da-15-reserved-20261103-1"
    ],
    "editorial": [
      "denair-da-15-reserved-20261103-1"
    ],
    "specifications": [
      "denair-da-15-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 390
};

export default product;
