import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "nuair-polar-18-5-10-es",
  "slug": "nuair-polar-18-5-10-es",
  "brand": "Nuair",
  "model": "POLAR 18.5-10 ES",
  "mpn": "V60DQ92N1NB64",
  "variant": {
    "familyId": "nuair-polar-18-5-es",
    "label": "POLAR 18.5-10 ES",
    "distinguishingAttributes": {
      "équipement": "POLAR 18.5-10 ES",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 2600
    }
  ],
  "powerKw": 18.5,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/nuair-polar-18-5-10-es.svg",
    "alt": "Repères techniques : Nuair POLAR 18.5-10 ES",
    "sourceUrl": "https://www.nuair.it/index.php/it/novita/item/download/238_6f1e475d0a61e0c63a810e034e847e55",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "POLAR 18.5-10 ES",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
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
      "label": "Air livré à 10 bar",
      "value": "2 600 L/min",
      "evidenceIds": [
        "october4b-nuair-polar-p22"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
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
    "overview": "Nuair POLAR 18.5-10 ES. 2 600 L/min déclarés à 10 bar. Configuration constructeur : POLAR 18.5-10 ES.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 600 L/min déclarés à 10 bar."
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
