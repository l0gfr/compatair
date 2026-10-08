import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pds140lc-5c5",
  "slug": "airman-pds140lc-5c5",
  "brand": "AIRMAN",
  "model": "PDS140LC-5C5",
  "variant": {
    "familyId": "airman-pds140lc-5c5",
    "label": "Leak Guard / After cooler / Box",
    "distinguishingAttributes": {
      "équipement": "Leak Guard / After cooler / Box",
      "pointDocumentaire": "7 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 4000
    }
  ],
  "weightKg": 780,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pds140lc-5c5.svg",
    "alt": "Repères techniques : AIRMAN PDS140LC-5C5",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-37/product-458/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Leak Guard / After cooler / Box",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "7 bar",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 7 bar",
      "value": "4 000 L/min (4 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Type d’équipement publié dans la série",
      "value": "Leak Guard / After cooler / Box",
      "evidenceIds": [
        "october8-airman-series-37-p1"
      ]
    },
    {
      "label": "Motorisation thermique publiée",
      "value": "3TNV88-BDHK2",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "YANMAR",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "JPN Stage 3",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "26.9 [36.1] / 3000",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "1580×890×1130",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "700 (780)",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "66",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×2, 3/8\"×1",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "780 kg",
      "evidenceIds": [
        "october8-airman-model-pds140lc-5c5-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDS140LC-5C5. 4 000 L/min déclarés à 7 bar. Configuration publiée : Leak Guard / After cooler / Box.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 4 000 L/min déclarés à 7 bar.",
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
      "id": "october8-airman-model-pds140lc-5c5-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-37/product-458/",
      "sourceLabel": "AIRMAN, fiche technique PDS140LC-5C5, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 35099fd40f0fa682e37ec38d0b264ea8b74a3bc1038396307a74255fb8dbdaa7 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-airman-series-37-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-37/",
      "sourceLabel": "AIRMAN, tableau constructeur series-37, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 a46ecc355cf4bee95f46906e337a5ae1aca72affe012584d82beb2f30e346b8f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-airman-model-pds140lc-5c5-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pds140lc-5c5-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pds140lc-5c5-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pds140lc-5c5-p1"
    ],
    "weightKg": [
      "october8-airman-model-pds140lc-5c5-p1"
    ],
    "oilType": [
      "october8-airman-model-pds140lc-5c5-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
