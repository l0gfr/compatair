import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pdsf80s-5c5",
  "slug": "airman-pdsf80s-5c5",
  "brand": "AIRMAN",
  "model": "PDSF80S-5C5",
  "variant": {
    "familyId": "airman-pdsf80s-5c5",
    "label": "High Pressure / Box",
    "distinguishingAttributes": {
      "équipement": "High Pressure / Box",
      "pointDocumentaire": "9,6 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 9.6,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 9.6,
      "litersPerMinute": 2150
    }
  ],
  "weightKg": 500,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pdsf80s-5c5.svg",
    "alt": "Repères techniques : AIRMAN PDSF80S-5C5",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-4/product-493/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "High Pressure / Box",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "9,6 bar",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 9,6 bar",
      "value": "2 150 L/min (2,15 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Type d’équipement publié dans la série",
      "value": "High Pressure / Box",
      "evidenceIds": [
        "october8-airman-series-4-p1"
      ]
    },
    {
      "label": "Motorisation thermique publiée",
      "value": "D1105-K3B",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "KUBOTA",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "JPN Stage 3",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "19.2 [25.7] / 3400",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "1460×770×900",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "460 (500)",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "65",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×2",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "500 kg",
      "evidenceIds": [
        "october8-airman-model-pdsf80s-5c5-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDSF80S-5C5. 2 150 L/min déclarés à 9,6 bar. Configuration publiée : High Pressure / Box.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 2 150 L/min déclarés à 9,6 bar.",
      "Plafond documentaire du point retenu : 9,6 bar."
    ],
    "limitations": [
      "La pression nominale de fonctionnement qualifie le point FAD ; elle ne prouve pas le maximum mécanique.",
      "Les capacités de carburant, d’huile et de refroidissement sont distinctes du volume de stockage d’air et ne renseignent pas tankLiters.",
      "La puissance du moteur thermique n’est pas la puissance absorbée totale du compresseur ; powerKw reste absent.",
      "L’équipement et le niveau d’émissions décrivent le marché du catalogue constructeur ; homologation et disponibilité locale à vérifier.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-airman-model-pdsf80s-5c5-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-4/product-493/",
      "sourceLabel": "AIRMAN, fiche technique PDSF80S-5C5, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 54c69db23e4c9c175a4efa9b888130efb01c69ebc8bf55250b39028da843ac8c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-airman-series-4-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-4/",
      "sourceLabel": "AIRMAN, tableau constructeur series-4, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 669d435de8f8a0a5fdee47a6c2c26508b0f3ea460c939eb8b76efbc8be3e6573 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-airman-model-pdsf80s-5c5-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pdsf80s-5c5-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pdsf80s-5c5-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pdsf80s-5c5-p1"
    ],
    "weightKg": [
      "october8-airman-model-pdsf80s-5c5-p1"
    ],
    "oilType": [
      "october8-airman-model-pdsf80s-5c5-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
