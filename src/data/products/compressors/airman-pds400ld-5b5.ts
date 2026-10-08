import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pds400ld-5b5",
  "slug": "airman-pds400ld-5b5",
  "brand": "AIRMAN",
  "model": "PDS400LD-5B5",
  "variant": {
    "familyId": "airman-pds400ld-5b5",
    "label": "Leak Guard / Dry-air / Box",
    "distinguishingAttributes": {
      "équipement": "Leak Guard / Dry-air / Box",
      "pointDocumentaire": "7 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 11300
    }
  ],
  "weightKg": 1840,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pds400ld-5b5.svg",
    "alt": "Repères techniques : AIRMAN PDS400LD-5B5",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-37/product-463/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Leak Guard / Dry-air / Box",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "7 bar",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 7 bar",
      "value": "11 300 L/min (11,3 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Type d’équipement publié dans la série",
      "value": "Leak Guard / Dry-air / Box",
      "evidenceIds": [
        "october8-airman-series-37-p1"
      ]
    },
    {
      "label": "Motorisation thermique publiée",
      "value": "V3800DI-TI-E2B",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "KUBOTA",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "JPN Stage 2",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "75.2 [100.8] / 2600",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "2600×1300×1300",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "1640 (1840)",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "72",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×2, 2\"×1",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "1 840 kg",
      "evidenceIds": [
        "october8-airman-model-pds400ld-5b5-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDS400LD-5B5. 11 300 L/min déclarés à 7 bar. Configuration publiée : Leak Guard / Dry-air / Box.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 11 300 L/min déclarés à 7 bar.",
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
      "id": "october8-airman-model-pds400ld-5b5-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-37/product-463/",
      "sourceLabel": "AIRMAN, fiche technique PDS400LD-5B5, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 e79bb9f114a2e1cbf26939f284708e4c9a99daf0d0ca21306cd6496ed42c3ffa de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october8-airman-model-pds400ld-5b5-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pds400ld-5b5-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pds400ld-5b5-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pds400ld-5b5-p1"
    ],
    "weightKg": [
      "october8-airman-model-pds400ld-5b5-p1"
    ],
    "oilType": [
      "october8-airman-model-pds400ld-5b5-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
