import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-cnr-55",
  "slug": "ekomak-cnr-55",
  "brand": "Ekomak",
  "model": "CNR 55",
  "variant": {
    "familyId": "ekomak-cnr-55",
    "label": "CNR 55 TM (tank mounted)",
    "distinguishingAttributes": {
      "équipement": "CNR 55 TM (tank mounted)",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 490
    }
  ],
  "dutyCycle": 1,
  "powerKw": 4,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-cnr-55.svg",
    "alt": "Repères techniques : Ekomak CNR 55",
    "sourceUrl": "https://www.ekomak.com/content/dam/brands/Mark/products-bp-structure/non-mark/oil-free-compressors/cleanair/cnr-55-200/products-leaflets/CNR%2055-200%20Sales%20Leaflet%20EN_LR.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "CNR 55 TM (tank mounted)",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Air livré à 7 bar",
      "value": "490 L/min",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "4 kW",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p4"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-ekomak-extra-1-p7"
      ]
    },
    {
      "label": "Montage retenu",
      "value": "CNR55TM, sur cuve 270 L",
      "evidenceIds": [
        "ekomak-cnr-55-reserved-20261103-1"
      ]
    },
    {
      "label": "FAD mesuré à7 bar",
      "value": "0,49 m³/min (490 L/min)",
      "evidenceIds": [
        "ekomak-cnr-55-reserved-20261103-1"
      ]
    },
    {
      "label": "Pression maximale distincte",
      "value": "10 bar",
      "evidenceIds": [
        "ekomak-cnr-55-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance",
      "value": "4 kW",
      "evidenceIds": [
        "ekomak-cnr-55-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation publiée",
      "value": "400V/50 Hz",
      "evidenceIds": [
        "ekomak-cnr-55-reserved-20261103-1"
      ]
    },
    {
      "label": "Taux de marche du groupe",
      "value": "100%, déclaration explicite CleanAIR CNR page 4",
      "evidenceIds": [
        "ekomak-cnr-55-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak CNR 55. La CNR55TM ajoute la cuve 270 L à la version BM. La CNR75 de même famille annonce670 L/min contre 490 à7 bar ; la CNR150 n’est publiée qu’enBM dans cette table. Le volume de cuve et le point de mesure sont explicitement documentés.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 490 L/min déclarés à 7 bar.",
      "Montage retenu : CNR55TM, sur cuve 270 L.",
      "FAD mesuré à7 bar : 0,49 m³/min (490 L/min).",
      "Pression maximale distincte : 10 bar.",
      "Puissance : 4 kW.",
      "Alimentation publiée : 400V/50 Hz.",
      "Taux de marche du groupe : 100%, déclaration explicite CleanAIR CNR page 4."
    ],
    "limitations": [
      "Le débit est mesuré à 7 bar, distinct du plafond de pression 10 bar. Configuration TM sélectionnée uniquement quand le réservoir 270 L est explicitement disponible.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-extra-1-p7",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/Mark/products-bp-structure/non-mark/oil-free-compressors/cleanair/cnr-55-200/products-leaflets/CNR%2055-200%20Sales%20Leaflet%20EN_LR.pdf#page=7",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b30f2f05ef5cc0e1a58c5951233fd76d3f8df91f47dd1754290997ce13418538 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-ekomak-extra-1-p4",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/Mark/products-bp-structure/non-mark/oil-free-compressors/cleanair/cnr-55-200/products-leaflets/CNR%2055-200%20Sales%20Leaflet%20EN_LR.pdf#page=4",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 4",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 b30f2f05ef5cc0e1a58c5951233fd76d3f8df91f47dd1754290997ce13418538 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "ekomak-cnr-55-reserved-20261103-1",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/Mark/products-bp-structure/non-mark/oil-free-compressors/cleanair/cnr-55-200/products-leaflets/CNR%2055-200%20Sales%20Leaflet%20EN_LR.pdf#page=7",
      "sourceLabel": "Ekomak : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 b30f2f05ef5cc0e1a58c5951233fd76d3f8df91f47dd1754290997ce13418538. La CNR55TM ajoute la cuve 270 L à la version BM. La CNR75 de même famille annonce670 L/min contre 490 à7 bar ; la CNR150 n’est publiée qu’enBM dans cette table. Le volume de cuve et le point de mesure sont explicitement documentés."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-extra-1-p7"
    ],
    "model": [
      "october4c-ekomak-extra-1-p7"
    ],
    "maxPressureBar": [
      "october4c-ekomak-extra-1-p7"
    ],
    "tankLiters": [
      "october4c-ekomak-extra-1-p7"
    ],
    "fadCurve": [
      "october4c-ekomak-extra-1-p7"
    ],
    "powerKw": [
      "ekomak-cnr-55-reserved-20261103-1"
    ],
    "oilType": [
      "october4c-ekomak-extra-1-p4"
    ],
    "dutyCycle": [
      "october4c-ekomak-extra-1-p4"
    ],
    "voltage": [
      "ekomak-cnr-55-reserved-20261103-1"
    ],
    "editorial": [
      "ekomak-cnr-55-reserved-20261103-1"
    ],
    "specifications": [
      "ekomak-cnr-55-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "voltage": "400 V / 50 Hz"
};
export default product;
