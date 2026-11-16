import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-da-280-w",
  "slug": "denair-da-280-w",
  "brand": "DENAIR",
  "model": "DA-280(W)",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-da-280-w",
    "label": "DA-280(W)",
    "distinguishingAttributes": {
      "équipement": "DA-280(W)",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "oilType": "oil",
  "powerKw": 280,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-da-280-w-technical-20261116-reviews.svg",
    "alt": "Repères techniques : DENAIR DA-280(W)",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "editorial": {
    "overview": "Le DA-280(W) de 280 kW publie 51,54 m³/min pour la configuration 7 bar dans la table 50 Hz. Le DA-200(W) change la puissance ; la famille de petite puissance DA-22 utilise une autre ligne. Le tableau porte une pression maximale et une capacité FAD ISO1217, sans préciser séparément leur appariement de mesure. Le débit est conservé dans les spécifications, sans point dimensionnant à 7 bar supposé.",
    "verifiedFacts": [
      "Le DA-280(W) de 280 kW publie 51,54 m³/min pour la configuration 7 bar dans la table 50 Hz.",
      "Le DA-200(W) change la puissance ; la famille de petite puissance DA-22 utilise une autre ligne."
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
      "value": "DA-280(W)",
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
      "label": "Débit documentaire, hors calcul",
      "value": "51 540 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
      "evidenceIds": [
        "review:2026-11-16-reviews:denair-da-280-w:0"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "280 kW",
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
      "id": "review:2026-11-16-reviews:denair-da-280-w:0",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR_Screw_Air_Compressor.pdf",
      "sourceLabel": "DENAIR, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le DA-280(W) de 280 kW publie 51,54 m³/min pour la configuration 7 bar dans la table 50 Hz. Le DA-200(W) change la puissance ; la famille de petite puissance DA-22 utilise une autre ligne. Le tableau porte une pression maximale et une capacité FAD ISO1217, sans préciser séparément leur appariement de mesure. Le débit est conservé dans les spécifications, sans point dimensionnant à 7 bar supposé. GET complet SHA-256 855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad. Pages PDF lues : 6, 1."
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
      "review:2026-11-16-reviews:denair-da-280-w:0"
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
