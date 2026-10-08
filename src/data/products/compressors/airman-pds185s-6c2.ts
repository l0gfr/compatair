import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "airman-pds185s-6c2",
  "slug": "airman-pds185s-6c2",
  "brand": "AIRMAN",
  "model": "PDS185S-6C2",
  "variant": {
    "familyId": "airman-pds185s-6c2",
    "label": "Trailer",
    "distinguishingAttributes": {
      "équipement": "Trailer",
      "pointDocumentaire": "6,9 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 6.9,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.9,
      "litersPerMinute": 5200
    }
  ],
  "weightKg": 960,
  "mobility": "mobile",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/airman-pds185s-6c2.svg",
    "alt": "Repères techniques : AIRMAN PDS185S-6C2",
    "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-1/product-441/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Trailer",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,9 bar",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,9 bar",
      "value": "5 200 L/min (5,2 m3/min publiés)",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Type d’équipement publié dans la série",
      "value": "Trailer",
      "evidenceIds": [
        "october8-airman-standard-p1"
      ]
    },
    {
      "label": "Motorisation thermique publiée",
      "value": "4TNV88-BXDHKS1",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Constructeur du moteur",
      "value": "YANMAR",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Norme d’émissions déclarée",
      "value": "JPN Stage 3",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Puissance du moteur thermique, kW/HP et régime natifs",
      "value": "36.9 [48.8] / 3000",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Dimensions publiées, mm",
      "value": "2960×1650×1510",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Masse à sec et en service publiées, kg",
      "value": "860 (960)",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Niveau de pression sonore publié, dB(A)",
      "value": "72",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Conditions de mesure acoustique",
      "value": "Sound pressure level is measured at 7m in 4 directions average.",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Robinets de sortie d’air publiés",
      "value": "3/4\"×2",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "960 kg",
      "evidenceIds": [
        "october8-airman-model-pds185s-6c2-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "AIRMAN PDS185S-6C2. 5 200 L/min déclarés à 6,9 bar. Configuration publiée : Trailer.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 5 200 L/min déclarés à 6,9 bar.",
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
      "id": "october8-airman-model-pds185s-6c2-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-1/product-441/",
      "sourceLabel": "AIRMAN, fiche technique PDS185S-6C2, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 109759b01fde13b125cbd2fe883cf7589b1b539faef57a2ae8cbc38678a890fa de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-airman-standard-p1",
      "sourceUrl": "https://www.airman.co.jp/en/product/category-1/series-1/",
      "sourceLabel": "AIRMAN, tableau constructeur standard, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 fdc251e481dd7c943cc7e0865a85d4b179d1205a6b14dac132994ce5a3738406 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-airman-model-pds185s-6c2-p1"
    ],
    "maxPressureBar": [
      "october8-airman-model-pds185s-6c2-p1"
    ],
    "maxPressureBasis": [
      "october8-airman-model-pds185s-6c2-p1"
    ],
    "fadCurve": [
      "october8-airman-model-pds185s-6c2-p1"
    ],
    "weightKg": [
      "october8-airman-model-pds185s-6c2-p1"
    ],
    "oilType": [
      "october8-airman-model-pds185s-6c2-p1"
    ],
    "mobility": [
      "october8-airman-standard-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
