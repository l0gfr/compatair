const product: unknown = {
  "id": "nuair-polar-22-08",
  "slug": "nuair-polar-22-08",
  "brand": "Nuair",
  "model": "POLAR 22-08",
  "mpn": "V60DR92N1NA64",
  "variant": {
    "familyId": "nuair-polar-22",
    "label": "POLAR 22-08",
    "distinguishingAttributes": {
      "équipement": "POLAR 22-08",
      "pressionDeConfiguration": "7,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.5,
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 3600
    }
  ],
  "powerKw": 22,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-polar-22-08.svg",
    "alt": "Repères techniques : Nuair POLAR 22-08",
    "sourceUrl": "https://www.nuair.it/index.php/it/novita/item/download/238_6f1e475d0a61e0c63a810e034e847e55",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "POLAR 22-08",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "7,5 bar",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    },
    {
      "label": "Air livré à 7,5 bar",
      "value": "3 600 L/min",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair POLAR 22-08. 3 600 L/min déclarés à 7,5 bar. Configuration constructeur : POLAR 22-08.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 600 L/min déclarés à 7,5 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Cuve non qualifiée : le tiret ou l’absence de colonne ne suffit pas à démontrer un stockage nul.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-polar-p22",
      "sourceUrl": "https://www.nuair.it/index.php/it/novita/item/download/238_6f1e475d0a61e0c63a810e034e847e55#page=22",
      "sourceLabel": "NUAIR, catalogue POLAR constructeur, page PDF 22",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 6f1dce9f0026ce320c9dbf5a77633d6ff8cda2d2f4e9cfef3f7591917a4ae0c4 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-nuair-polar-p22"
    ],
    "maxPressureBar": [
      "october4b-nuair-polar-p22"
    ],
    "fadCurve": [
      "october4b-nuair-polar-p22"
    ],
    "powerKw": [
      "october4b-nuair-polar-p22"
    ],
    "mpn": [
      "october4b-nuair-polar-p22"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
