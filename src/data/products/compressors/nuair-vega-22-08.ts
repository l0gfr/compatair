const product: unknown = {
  "id": "nuair-vega-22-08",
  "slug": "nuair-vega-22-08",
  "brand": "Nuair",
  "model": "VEGA 22-08",
  "mpn": "V60SJ92N1N264",
  "variant": {
    "familyId": "nuair-vega-22",
    "label": "VEGA 22-08",
    "distinguishingAttributes": {
      "équipement": "VEGA 22-08",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 3350
    }
  ],
  "dutyCycle": 1,
  "powerKw": 22,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-vega-22-08.svg",
    "alt": "Repères techniques : Nuair VEGA 22-08",
    "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/7-5-22-kw-star-vega/item/download/180_63ea4e42712a56cfeaeb57e7958480b4",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "VEGA 22-08",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Air livré à 7,5 bar",
      "value": "3 350 L/min",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4b-nuair-star-vega-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-nuair-star-vega-p5"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair VEGA 22-08. 3 350 L/min déclarés à 7,5 bar. Configuration constructeur : VEGA 22-08.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 350 L/min déclarés à 7,5 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Cuve non qualifiée : le tiret ou l’absence de colonne ne suffit pas à démontrer un stockage nul.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-star-vega-p5",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/7-5-22-kw-star-vega/item/download/180_63ea4e42712a56cfeaeb57e7958480b4#page=5",
      "sourceLabel": "NUAIR, catalogue Star Vega constructeur, page PDF 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 64ff835de391da58b7ae2870a5dc681fb577355b5ad0ba94e7f39b07a389bb78 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-nuair-star-vega-p2",
      "sourceUrl": "https://www.nuair.it/index.php/en/products/screw-compressors/7-5-22-kw-star-vega/item/download/180_63ea4e42712a56cfeaeb57e7958480b4#page=2",
      "sourceLabel": "NUAIR, catalogue Star Vega constructeur, page PDF 2",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 64ff835de391da58b7ae2870a5dc681fb577355b5ad0ba94e7f39b07a389bb78 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-nuair-star-vega-p5"
    ],
    "maxPressureBar": [
      "october4b-nuair-star-vega-p5"
    ],
    "fadCurve": [
      "october4b-nuair-star-vega-p5"
    ],
    "powerKw": [
      "october4b-nuair-star-vega-p5"
    ],
    "dutyCycle": [
      "october4b-nuair-star-vega-p2"
    ],
    "mpn": [
      "october4b-nuair-star-vega-p5"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
