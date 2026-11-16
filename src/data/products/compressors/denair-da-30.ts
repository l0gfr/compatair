import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-da-30",
  "slug": "denair-da-30",
  "brand": "DENAIR",
  "model": "DA-30",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-da-30",
    "label": "DA-30",
    "distinguishingAttributes": {
      "équipement": "DA-30",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "oilType": "oil",
  "powerKw": 30,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-da-30-technical-20261116-reviews.svg",
    "alt": "Repères techniques : DENAIR DA-30",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "editorial": {
    "overview": "Le DA-30 de 30 kW annonce 5,28 m³/min dans la configuration 7 bar, sous 50 Hz. Les DA-315(W) et DA-355W appartiennent à une autre classe de puissance ; les modèles doivent être sélectionnés par le besoin et la pression utile. La table ne sépare pas la pression de mesure du FAD de la pression maximale. Cette capacité reste documentaire, sans extrapolation dans le moteur.",
    "verifiedFacts": [
      "Le DA-30 de 30 kW annonce 5,28 m³/min dans la configuration 7 bar, sous 50 Hz.",
      "Les DA-315(W) et DA-355W appartiennent à une autre classe de puissance ; les modèles doivent être sélectionnés par le besoin et la pression utile."
    ],
    "limitations": [
      "Point documenté pour la variante 50 Hz et cette pression ; aucune disponibilité française déduite. Cuve et cycle de marche non chiffrés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "La courbe dimensionnante a été retirée après revue : la mesure FAD et son appariement à une pression ne sont pas suffisamment établis. Les valeurs documentaires restent conservées."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DA-30",
      "evidenceIds": [
        "october5-denair-screw-p5"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7 bar",
      "evidenceIds": [
        "october5-denair-screw-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-denair-screw-p5"
      ]
    },
    {
      "label": "Débit documentaire, hors calcul",
      "value": "5 280 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
      "evidenceIds": [
        "review:2026-11-16-reviews:denair-da-30:0"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "30 kW",
      "evidenceIds": [
        "october5-denair-screw-p5"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-denair-screw-p5"
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
      "id": "review:2026-11-16-reviews:denair-da-30:0",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
      "sourceLabel": "DENAIR, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le DA-30 de 30 kW annonce 5,28 m³/min dans la configuration 7 bar, sous 50 Hz. Les DA-315(W) et DA-355W appartiennent à une autre classe de puissance ; les modèles doivent être sélectionnés par le besoin et la pression utile. La table ne sépare pas la pression de mesure du FAD de la pression maximale. Cette capacité reste documentaire, sans extrapolation dans le moteur. GET complet SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad. Pages PDF lues : 5, 1."
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
      "review:2026-11-16-reviews:denair-da-30:0"
    ],
    "powerKw": [
      "october5-denair-screw-p5"
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
