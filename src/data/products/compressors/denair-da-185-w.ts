import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-da-185-w",
  "slug": "denair-da-185-w",
  "brand": "DENAIR",
  "model": "DA-185(W)",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-da-185-w",
    "label": "DA-185(W)",
    "distinguishingAttributes": {
      "équipement": "DA-185(W)",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "oilType": "oil",
  "powerKw": 185,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-da-185-w-20261106.svg",
    "alt": "Repères techniques : DENAIR DA-185(W)",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "DENAIR DA-185(W). Le débit déclaré reste conservé dans les spécifications. La pression maximale ne prouve pas la pression de mesure du FAD ; compatibilité indéterminée.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7 bar.",
      "Pression maximale publiée : 7 bar ; la pression de mesure du FAD reste à confirmer."
    ],
    "limitations": [
      "Point documenté pour la variante 50 Hz et cette pression ; aucune disponibilité française déduite. Cuve et cycle de marche non chiffrés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "Table p6 : DA185(W),33,63 m³/mincolonne50Hz pourpression7,185 kW et3550 kg. Les29,79 de60Hzà8 bar ne sont pas transférés ; point de mesureFAD distinct du maximum à confirmer."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DA-185(W)",
      "evidenceIds": [
        "october5-denair-screw-p6"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7 bar",
      "evidenceIds": [
        "october5-denair-screw-p6"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-denair-screw-p6"
      ]
    },
    {
      "label": "Air livré à 7 bar",
      "value": "33 630 L/min",
      "evidenceIds": [
        "october5-denair-screw-p6"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "185 kW",
      "evidenceIds": [
        "october5-denair-screw-p6"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-denair-screw-p6"
      ]
    },
    {
      "label": "Débit historiquement apparié, mesure à confirmer",
      "value": "33630 L/min ; pression associée antérieurement 7 bar",
      "evidenceIds": [
        "review:2026-11-06-followup:denair-da-185-w:1",
        "review:2026-11-06-followup:denair-da-185-w:2"
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
      "id": "review:2026-11-06-followup:denair-da-185-w:1",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=6",
      "sourceLabel": "DENAIR, revue documentaire du 6 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-06",
      "confidence": "B",
      "notes": "Table p6 : DA185(W),33,63 m³/mincolonne50Hz pourpression7,185 kW et3550 kg. Les29,79 de60Hzà8 bar ne sont pas transférés ; point de mesureFAD distinct du maximum à confirmer. SHA-256 du document complet : 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad."
    },
    {
      "id": "review:2026-11-06-followup:denair-da-185-w:2",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf#page=1",
      "sourceLabel": "DENAIR, revue documentaire du 6 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-06",
      "confidence": "B",
      "notes": "Table p6 : DA185(W),33,63 m³/mincolonne50Hz pourpression7,185 kW et3550 kg. Les29,79 de60Hzà8 bar ne sont pas transférés ; point de mesureFAD distinct du maximum à confirmer. SHA-256 du document complet : 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad."
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
      "review:2026-11-06-followup:denair-da-185-w:1",
      "review:2026-11-06-followup:denair-da-185-w:2"
    ],
    "powerKw": [
      "october5-denair-screw-p6"
    ],
    "oilType": [
      "october5-denair-screw-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
