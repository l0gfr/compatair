import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "nuair-polar-11-08-500-es",
  "slug": "nuair-polar-11-08-500-es",
  "brand": "Nuair",
  "model": "POLAR 11-08-500 ES",
  "mpn": "V83PU92N1NB44",
  "variant": {
    "familyId": "nuair-polar-11-500-es",
    "label": "POLAR 11-08-500 ES",
    "distinguishingAttributes": {
      "équipement": "POLAR 11-08-500 ES",
      "pressionDeConfiguration": "8 bar",
      "cuve": "500 L"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 1700
    }
  ],
  "powerKw": 11,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-polar-11-08-500-es.svg",
    "alt": "Repères techniques : Nuair POLAR 11-08-500 ES",
    "sourceUrl": "https://www.nuair.it/index.php/it/novita/item/download/238_6f1e475d0a61e0c63a810e034e847e55",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "POLAR 11-08-500 ES",
      "evidenceIds": [
        "october4b-nuair-polar-p20"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october4b-nuair-polar-p20"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october4b-nuair-polar-p20"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "1 700 L/min",
      "evidenceIds": [
        "october4b-nuair-polar-p20"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4b-nuair-polar-p20"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-nuair-polar-p20"
      ]
    }
  ],
  "editorial": {
    "overview": "Nuair POLAR 11-08-500 ES. 1 700 L/min déclarés à 8 bar. Configuration constructeur : POLAR 11-08-500 ES.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 700 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
    ]
  },
  "evidence": [
    {
      "id": "october4b-nuair-polar-p20",
      "sourceUrl": "https://www.nuair.it/index.php/it/novita/item/download/238_6f1e475d0a61e0c63a810e034e847e55#page=20",
      "sourceLabel": "NUAIR, catalogue POLAR constructeur, page PDF 20",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 6f1dce9f0026ce320c9dbf5a77633d6ff8cda2d2f4e9cfef3f7591917a4ae0c4 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-nuair-polar-p20"
    ],
    "maxPressureBar": [
      "october4b-nuair-polar-p20"
    ],
    "tankLiters": [
      "october4b-nuair-polar-p20"
    ],
    "fadCurve": [
      "october4b-nuair-polar-p20"
    ],
    "powerKw": [
      "october4b-nuair-polar-p20"
    ],
    "mpn": [
      "october4b-nuair-polar-p20"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
