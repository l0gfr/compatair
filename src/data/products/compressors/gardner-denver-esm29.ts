const product = {
  "id": "gardner-denver-esm29",
  "slug": "gardner-denver-esm29",
  "brand": "Gardner Denver",
  "model": "ESM29",
  "variant": {
    "familyId": "gardner-denver-esm29",
    "label": "Compresseur à vis à vitesse fixe",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis à vitesse fixe",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 4120
    }
  ],
  "powerKw": 30,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-esm29.svg",
    "alt": "Repères techniques : Gardner Denver ESM29",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/bltf015004f7b5bafdd/67f910e1ec064232903128a5/GD_FRAME_2_BROCHURE_UPDATES_EN_WORK.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis à vitesse fixe",
      "evidenceIds": [
        "october4c-gd-esm23-29-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-gd-esm23-29-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-gd-esm23-29-p7"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "4 120 L/min",
      "evidenceIds": [
        "october4c-gd-esm23-29-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "30 kW",
      "evidenceIds": [
        "october4c-gd-esm23-29-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-gd-esm23-29-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "Gardner Denver ESM29. 4 120 L/min déclarés à 13 bar. Configuration constructeur : Compresseur à vis à vitesse fixe.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 4 120 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-gd-esm23-29-p7",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/bltf015004f7b5bafdd/67f910e1ec064232903128a5/GD_FRAME_2_BROCHURE_UPDATES_EN_WORK.pdf#page=7",
      "sourceLabel": "Gardner Denver, catalogue constructeur ESM VS23-29, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 4c07946c05ac7b89b9c4f76976ee105daabf2a5b94009de0700afd58d86a0c7c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-gd-esm23-29-p7"
    ],
    "maxPressureBar": [
      "october4c-gd-esm23-29-p7"
    ],
    "fadCurve": [
      "october4c-gd-esm23-29-p7"
    ],
    "powerKw": [
      "october4c-gd-esm23-29-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
