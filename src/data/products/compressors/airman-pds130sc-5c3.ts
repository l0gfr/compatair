import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pds130sc-5c3",
  "slug": "airman-pds130sc-5c3",
  "brand": "AIRMAN",
  "model": "PDS130SC-5C3",
  "variant": {
    "familyId": "airman-pds130sc-5c3",
    "label": "After cooler / Box",
    "distinguishingAttributes": {
      "équipement": "After cooler / Box",
      "pointDocumentaire": "6,9 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 6.9,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.9,
      "litersPerMinute": 3700
    }
  ],
  "weightKg": 730,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pds130sc-5c3.svg",
    "alt": "Repères techniques : AIRMAN PDS130SC-5C3",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-2/product-46/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "After cooler / Box",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,9 bar",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,9 bar",
      "value": "3 700 L/min (3,7 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Type d’équipement publié dans la série",
      "value": "After cooler / Box",
      "evidenceIds": [
        "october8-airman-series-2-p1"
      ]
    },
    {
      "label": "Motorisation thermique publiée",
      "value": "3TNV88-BDHK",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "YANMAR",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "JPN Stage 3",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "26.9 [36.1] / 3000",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "1580×890×1080",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "650 (730)",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "66",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×2",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "730 kg",
      "evidenceIds": [
        "october8-airman-model-pds130sc-5c3-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDS130SC-5C3. 3 700 L/min déclarés à 6,9 bar. Configuration publiée : After cooler / Box.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 3 700 L/min déclarés à 6,9 bar.",
      "Plafond documentaire du point retenu : 6,9 bar."
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
      "id": "october8-airman-model-pds130sc-5c3-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-2/product-46/",
      "sourceLabel": "AIRMAN, fiche technique PDS130SC-5C3, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 741d3932947b8559365be7cb0db5b85afb9dcec642e8bd2167a36ceba3597af5 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october8-airman-model-pds130sc-5c3-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pds130sc-5c3-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pds130sc-5c3-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pds130sc-5c3-p1"
    ],
    "weightKg": [
      "october8-airman-model-pds130sc-5c3-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
