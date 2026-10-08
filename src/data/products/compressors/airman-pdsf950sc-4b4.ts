import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pdsf950sc-4b4",
  "slug": "airman-pdsf950sc-4b4",
  "brand": "AIRMAN",
  "model": "PDSF950SC-4B4",
  "variant": {
    "familyId": "airman-pdsf950sc-4b4",
    "label": "High Pressure / After cooler / Trailer",
    "distinguishingAttributes": {
      "équipement": "High Pressure / After cooler / Trailer",
      "pointDocumentaire": "10,3 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 10.3,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10.3,
      "litersPerMinute": 26900
    }
  ],
  "weightKg": 5190,
  "mobility": "mobile",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pdsf950sc-4b4.svg",
    "alt": "Repères techniques : AIRMAN PDSF950SC-4B4",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-2/product-486/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "High Pressure / After cooler / Trailer",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "10,3 bar",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 10,3 bar",
      "value": "26 900 L/min (26,9 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Type d’équipement publié dans la série",
      "value": "High Pressure / After cooler / Trailer",
      "evidenceIds": [
        "october8-airman-series-2-p1"
      ]
    },
    {
      "label": "Motorisation thermique publiée",
      "value": "6LTAA8.9-C360",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "Dongfeng Cummins",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "GBⅡ",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "264 [354] / 2200",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "4490×2000×2430",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "4520 (5190)",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "80",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×1, 2\"×2",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "5 190 kg",
      "evidenceIds": [
        "october8-airman-model-pdsf950sc-4b4-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDSF950SC-4B4. 26 900 L/min déclarés à 10,3 bar. Configuration publiée : High Pressure / After cooler / Trailer.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 26 900 L/min déclarés à 10,3 bar.",
      "Plafond documentaire du point retenu : 10,3 bar."
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
      "id": "october8-airman-model-pdsf950sc-4b4-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-2/product-486/",
      "sourceLabel": "AIRMAN, fiche technique PDSF950SC-4B4, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 6d513a932a399bbc7e10533b0fd0e84bf0fdfe2b7ffdfb668483dacf9ad6e3e9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-airman-series-2-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-2/",
      "sourceLabel": "AIRMAN, tableau constructeur series-2, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 4641714dec704a6fffbcc752d7b61105e42ab6e98cb5b622e48d28906e0d404a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-airman-model-pdsf950sc-4b4-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pdsf950sc-4b4-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pdsf950sc-4b4-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pdsf950sc-4b4-p1"
    ],
    "weightKg": [
      "october8-airman-model-pdsf950sc-4b4-p1"
    ],
    "oilType": [
      "october8-airman-model-pdsf950sc-4b4-p1"
    ],
    "mobility": [
      "october8-airman-series-2-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
