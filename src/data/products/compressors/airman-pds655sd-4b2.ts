import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pds655sd-4b2",
  "slug": "airman-pds655sd-4b2",
  "brand": "AIRMAN",
  "model": "PDS655SD-4B2",
  "variant": {
    "familyId": "airman-pds655sd-4b2",
    "label": "Dry-air / Trailer",
    "distinguishingAttributes": {
      "équipement": "Dry-air / Trailer",
      "pointDocumentaire": "7 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 17900
    }
  ],
  "weightKg": 3530,
  "mobility": "mobile",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pds655sd-4b2.svg",
    "alt": "Repères techniques : AIRMAN PDS655SD-4B2",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-3/product-491/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Dry-air / Trailer",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "7 bar",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 7 bar",
      "value": "17 900 L/min (17,9 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Type d’équipement publié dans la série",
      "value": "Dry-air / Trailer",
      "evidenceIds": [
        "october8-airman-series-3-p1"
      ]
    },
    {
      "label": "Motorisation thermique publiée",
      "value": "J08C-V",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "HINO",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "JPN Stage 2",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "118 [158.2] / 2500",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "3650×1685×2095",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "3190 (3530)",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "73",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×2, 2\"×1, 3/8\"×1",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "3 530 kg",
      "evidenceIds": [
        "october8-airman-model-pds655sd-4b2-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDS655SD-4B2. 17 900 L/min déclarés à 7 bar. Configuration publiée : Dry-air / Trailer.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 17 900 L/min déclarés à 7 bar.",
      "Plafond documentaire du point retenu : 7 bar."
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
      "id": "october8-airman-model-pds655sd-4b2-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-3/product-491/",
      "sourceLabel": "AIRMAN, fiche technique PDS655SD-4B2, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 1d2caaa5f8635e5fb1001cff381653dc33b5cf65b793c34fff2c61d5bf3772b8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-airman-series-3-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-3/",
      "sourceLabel": "AIRMAN, tableau constructeur series-3, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 7ca113e93c433867378f9aec44b2eb3e2865de839658343d5ef313ea098b94d3 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-airman-model-pds655sd-4b2-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pds655sd-4b2-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pds655sd-4b2-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pds655sd-4b2-p1"
    ],
    "weightKg": [
      "october8-airman-model-pds655sd-4b2-p1"
    ],
    "oilType": [
      "october8-airman-model-pds655sd-4b2-p1"
    ],
    "mobility": [
      "october8-airman-series-3-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
