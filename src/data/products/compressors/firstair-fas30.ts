import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "firstair-fas30",
  "slug": "firstair-fas30",
  "brand": "firstAir",
  "model": "FAS30",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "firstair-fas30",
    "label": "FAS30",
    "distinguishingAttributes": {
      "équipement": "FAS30",
      "pressionDeConfiguration": "10,342 bar",
      "cuve": "Non documentée",
      "fréquence": "60 Hz"
    }
  },
  "maxPressureBar": 8.618,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 4777.052
    }
  ],
  "oilType": "unknown",
  "powerKw": 30,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/firstair-fas30.svg",
    "alt": "Repères techniques : firstAir FAS30",
    "sourceUrl": "https://www.firstaircompressor.com/wp-content/uploads/page/19/firstair_prospektflyer_en_500l-v3-web.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "firstAir FAS30. La FAS30 annonce 168,70 cfm à 125 psi et 850 kg. Les FAS30 et FAS37 partagent l’encombrement mais ont des moteurs 30 et 37 kW et des débits différents. La ligne 150 psi décrit une autre condition ; elle ne devient plus le plafond du profil retenu à 125 psi.",
    "verifiedFacts": [
      "Version : FAS au sol, marché 60 Hz.",
      "FAD à 125 psi : 168,70 cfm.",
      "Puissance : 30 kW.",
      "Masse du groupe : 850 kg.",
      "Dimensions L×W×H : 1 000 × 1 250 × 1 310 mm.",
      "Alimentation publiée : 3 phases / 60 Hz / 208–230 V ou 460 V."
    ],
    "limitations": [
      "Profil 60 Hz limité au point de travail 125 psi ; aucun maximum mécanique ni équivalent européen déduit.",
      "FAD déclaré selon ISO 1217 annexe C ; cycle de service non établi."
    ]
  },
  "specifications": [
    {
      "label": "Version",
      "value": "FAS au sol, marché 60 Hz",
      "evidenceIds": [
        "firstair-fas30-reserved-20261103-1"
      ]
    },
    {
      "label": "FAD à 125 psi",
      "value": "168,70 cfm",
      "evidenceIds": [
        "firstair-fas30-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance",
      "value": "30 kW",
      "evidenceIds": [
        "firstair-fas30-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse du groupe",
      "value": "850 kg",
      "evidenceIds": [
        "firstair-fas30-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "1 000 × 1 250 × 1 310 mm",
      "evidenceIds": [
        "firstair-fas30-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation publiée",
      "value": "3 phases / 60 Hz / 208–230 V ou 460 V",
      "evidenceIds": [
        "firstair-fas30-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-firstair-fas-p3",
      "sourceUrl": "https://www.firstaircompressor.com/wp-content/uploads/page/19/firstair_prospektflyer_en_500l-v3-web.pdf#page=3",
      "sourceLabel": "firstAir, FAS Series, Screw Air Compressor Range, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 ff6409925e188d42aa3847a84ce478e3a7a6bf6957f8d954a8bd40fac0d64fbd de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide to the SI, appendice B.8, facteurs de conversion, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 a66b8ada84af2d6f8ff8cb88ce6384f0bfe0af8583f166f6f6ffec0b26250180 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-firstair-fas-p2",
      "sourceUrl": "https://www.firstaircompressor.com/wp-content/uploads/page/19/firstair_prospektflyer_en_500l-v3-web.pdf#page=2",
      "sourceLabel": "firstAir, FAS Series, Screw Air Compressor Range, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 ff6409925e188d42aa3847a84ce478e3a7a6bf6957f8d954a8bd40fac0d64fbd de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "firstair-fas30-reserved-20261103-1",
      "sourceUrl": "https://www.firstaircompressor.com/wp-content/uploads/page/19/firstair_prospektflyer_en_500l-v3-web.pdf#page=3",
      "sourceLabel": "firstAir : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 ff6409925e188d42aa3847a84ce478e3a7a6bf6957f8d954a8bd40fac0d64fbd. La FAS30 annonce 168,70 cfm à 125 psi et 850 kg. Les FAS30 et FAS37 partagent l’encombrement mais ont des moteurs 30 et 37 kW et des débits différents. La ligne 150 psi décrit une autre condition ; elle ne devient plus le plafond du profil retenu à 125 psi."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "firstair-fas30-reserved-20261103-1"
    ],
    "model": [
      "october5-firstair-fas-p3"
    ],
    "maxPressureBar": [
      "firstair-fas30-reserved-20261103-1"
    ],
    "fadCurve": [
      "october5-firstair-fas-p3",
      "october5-nist-conversions-p1"
    ],
    "powerKw": [
      "october5-firstair-fas-p3"
    ],
    "weightKg": [
      "firstair-fas30-reserved-20261103-1"
    ],
    "phase": [
      "firstair-fas30-reserved-20261103-1"
    ],
    "voltage": [
      "firstair-fas30-reserved-20261103-1"
    ],
    "editorial": [
      "firstair-fas30-reserved-20261103-1"
    ],
    "specifications": [
      "firstair-fas30-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 850,
  "phase": "three-phase",
  "voltage": "208–230 V ou 460 V / 60 Hz"
};

export default product;
