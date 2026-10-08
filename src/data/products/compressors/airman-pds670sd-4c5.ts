import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pds670sd-4c5",
  "slug": "airman-pds670sd-4c5",
  "brand": "AIRMAN",
  "model": "PDS670SD-4C5",
  "variant": {
    "familyId": "airman-pds670sd-4c5",
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
      "litersPerMinute": 19000
    }
  ],
  "weightKg": 3430,
  "mobility": "mobile",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pds670sd-4c5.svg",
    "alt": "Repères techniques : AIRMAN PDS670SD-4C5",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-3/product-501/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Dry-air / Trailer",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "7 bar",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 7 bar",
      "value": "19 000 L/min (19 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
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
      "value": "AI-4HK1X",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "ISUZU",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "JPN Stage 3",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "118.6 [159] / 2000",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "3690×1680×2145",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "3050 (3430)",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "76",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×2, 2\"×1, 3/8\"×1",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    },
    {
      "label": "Débit du tableau de famille, unité CFM contradictoire",
      "value": "19.0 [71]",
      "evidenceIds": [
        "october8-airman-series-3-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "3 430 kg",
      "evidenceIds": [
        "october8-airman-model-pds670sd-4c5-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDS670SD-4C5. 19 000 L/min déclarés à 7 bar. Configuration publiée : Dry-air / Trailer.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 19 000 L/min déclarés à 7 bar.",
      "Plafond documentaire du point retenu : 7 bar."
    ],
    "limitations": [
      "La pression nominale de fonctionnement qualifie le point FAD ; elle ne prouve pas le maximum mécanique.",
      "Les capacités de carburant, d’huile et de refroidissement sont distinctes du volume de stockage d’air et ne renseignent pas tankLiters.",
      "La puissance du moteur thermique n’est pas la puissance absorbée totale du compresseur ; powerKw reste absent.",
      "L’équipement et le niveau d’émissions décrivent le marché du catalogue constructeur ; homologation et disponibilité locale à vérifier.",
      "La table de famille imprime 19,0 m³/min [71 CFM] ; la fiche individuelle imprime 19,0 m³/min [671 CFM]. La valeur native 19,0 m³/min commune aux deux sources est conservée ; aucune correction silencieuse du CFM n’est publiée.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-airman-model-pds670sd-4c5-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-3/product-501/",
      "sourceLabel": "AIRMAN, fiche technique PDS670SD-4C5, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 55e91e52fb3b922fc9cbfc96c2dc19733b95817d89d024291b671a5fb2ce161a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october8-airman-model-pds670sd-4c5-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pds670sd-4c5-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pds670sd-4c5-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pds670sd-4c5-p1"
    ],
    "weightKg": [
      "october8-airman-model-pds670sd-4c5-p1"
    ],
    "oilType": [
      "october8-airman-model-pds670sd-4c5-p1"
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
