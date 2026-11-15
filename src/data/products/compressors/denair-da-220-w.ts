import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-da-220-w",
  "slug": "denair-da-220-w",
  "brand": "DENAIR",
  "model": "DA-220(W)",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-da-220-w",
    "label": "DA-220(W)",
    "distinguishingAttributes": {
      "équipement": "DA-220(W)",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "oilType": "oil",
  "powerKw": 220,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-da-220-w-technical-20261115-followup.svg",
    "alt": "Repères techniques : DENAIR DA-220(W)",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
  },
  "editorial": {
    "overview": "Le DA-220(W) de la table50 Hz publie42,85 m³/min FAD pour la ligne de pression maximale7 bar. Le tableau distingue50 et60 Hz. La pression de mesure à la sortie n’étant pas explicitée séparément du maximum, le débit reste documentaire.",
    "verifiedFacts": [
      "Puissance moteur publiée :220 kW.",
      "FAD documentaire pour la ligne7 bar : 42,85 m³/min ; colonne50 Hz.",
      "Dimensions et masse : 3310 × 2090 × 2400 mm ;4660 kg.",
      "Puissance : 220 kW.",
      "Raccord et refroidissement : DN100 ; W désigne le refroidissement à eau.",
      "Référence FAD publiée : ISO1217:2009 annexe C ; pression absolue aspiration1 bar et température20°C."
    ],
    "limitations": [
      "Point documenté pour la variante 50 Hz et cette pression ; aucune disponibilité française déduite. Cuve et cycle de marche non chiffrés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "Le tableau titre la colonne de pression Maximum Working Pressure. Ce maximum ne remplace pas une pression de mesure explicitement associée au FAD."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DA-220(W)",
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
      "label": "Puissance publiée",
      "value": "220 kW",
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
      "label": "FAD documentaire pour la ligne7 bar",
      "value": "42,85 m³/min ; colonne50 Hz",
      "evidenceIds": [
        "review:2026-11-12-technical:denair-da-220-w:0"
      ]
    },
    {
      "label": "Dimensions et masse",
      "value": "3310 × 2090 × 2400 mm ;4660 kg",
      "evidenceIds": [
        "review:2026-11-12-technical:denair-da-220-w:0"
      ]
    },
    {
      "label": "Puissance",
      "value": "220 kW",
      "evidenceIds": [
        "review:2026-11-12-technical:denair-da-220-w:0"
      ]
    },
    {
      "label": "Raccord et refroidissement",
      "value": "DN100 ; W désigne le refroidissement à eau",
      "evidenceIds": [
        "review:2026-11-12-technical:denair-da-220-w:0"
      ]
    },
    {
      "label": "Référence FAD publiée",
      "value": "ISO1217:2009 annexe C ; pression absolue aspiration1 bar et température20°C",
      "evidenceIds": [
        "review:2026-11-12-technical:denair-da-220-w:0"
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
      "id": "review:2026-11-12-technical:denair-da-220-w:0",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
      "sourceLabel": "DENAIR, document fabricant, pages PDF 1, 6",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-12",
      "confidence": "B",
      "notes": "Le DA-220(W) de la table50 Hz publie42,85 m³/min FAD pour la ligne de pression maximale7 bar. Le tableau distingue50 et60 Hz. La pression de mesure à la sortie n’étant pas explicitée séparément du maximum, le débit reste documentaire. GET complet : SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad. Historique conservé."
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
    "powerKw": [
      "october5-denair-screw-p6"
    ],
    "oilType": [
      "october5-denair-screw-p1"
    ],
    "fadCurve": [
      "review:2026-11-12-technical:denair-da-220-w:0"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
