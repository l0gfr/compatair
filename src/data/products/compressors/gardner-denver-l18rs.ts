const product = {
  "id": "gardner-denver-l18rs",
  "slug": "gardner-denver-l18rs",
  "brand": "Gardner Denver",
  "model": "L18RS",
  "variant": {
    "familyId": "gardner-denver-l18rs",
    "label": "Compresseur à vis à vitesse variable, point nominal de la table 60 Hz",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis à vitesse variable, point nominal de la table 60 Hz",
      "pressionDeConfiguration": "13,1 bar",
      "cuve": "Non documentée",
      "fréquence": "60 Hz"
    }
  },
  "maxPressureBar": 13.1,
  "fadCurve": [
    {
      "pressureBar": 13.1,
      "litersPerMinute": 2200
    }
  ],
  "powerKw": 18,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/gardner-denver-l18rs.svg",
    "alt": "Repères techniques : Gardner Denver L18RS",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt26934a06529aac88/69c38ef75102a0a6d26b0c34/gs-l07rs-l290rs-16th-3-26.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis à vitesse variable, point nominal de la table 60 Hz",
      "evidenceIds": [
        "october4c-gd-lrs-catalog-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13,1 bar",
      "evidenceIds": [
        "october4c-gd-lrs-catalog-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-gd-lrs-catalog-p11"
      ]
    },
    {
      "label": "Air livré à 13,1 bar",
      "value": "2 200 L/min",
      "evidenceIds": [
        "october4c-gd-lrs-catalog-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18 kW",
      "evidenceIds": [
        "october4c-gd-lrs-catalog-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "60 Hz",
      "evidenceIds": [
        "october4c-gd-lrs-catalog-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "Gardner Denver L18RS. 2 200 L/min déclarés à 13,1 bar. Configuration constructeur : Compresseur à vis à vitesse variable, point nominal de la table 60 Hz.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13,1 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 200 L/min déclarés à 13,1 bar."
    ],
    "limitations": [
      "Configuration 60 Hz du catalogue nord-américain ; une configuration électrique française n’est pas démontrée par cette fiche.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-gd-lrs-catalog-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt87a221679f131e8d/blt26934a06529aac88/69c38ef75102a0a6d26b0c34/gs-l07rs-l290rs-16th-3-26.pdf#page=11",
      "sourceLabel": "Gardner Denver, catalogue constructeur LRS-Series 16e édition mars 2026, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 d2d522a6a848074ca7ba01e9f27cba5269171fce26d12cac2251b6637e0e49f6 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-gd-lrs-catalog-p11"
    ],
    "maxPressureBar": [
      "october4c-gd-lrs-catalog-p11"
    ],
    "fadCurve": [
      "october4c-gd-lrs-catalog-p11"
    ],
    "powerKw": [
      "october4c-gd-lrs-catalog-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
