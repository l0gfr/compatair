import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "shamal-bora-22-08",
  "slug": "shamal-bora-22-08",
  "brand": "Shamal",
  "model": "BORA 22-08",
  "mpn": "V60DR92SHAA72",
  "variant": {
    "familyId": "shamal-bora-22",
    "label": "BORA 22-08",
    "distinguishingAttributes": {
      "équipement": "BORA 22-08",
      "pressionDeConfiguration": "7,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.5,
  "fadCurve": [],
  "powerKw": 22,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-bora-22-08-technical-20261116-reviews.svg",
    "alt": "Repères techniques : Shamal BORA 22-08",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BORA 22-08",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "7,5 bar",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    },
    {
      "label": "Débit documentaire, hors calcul",
      "value": "3 600 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
      "evidenceIds": [
        "review:2026-11-16-reviews:shamal-bora-22-08:0"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    }
  ],
  "editorial": {
    "overview": "Le BORA22-08 est le groupe 22 kW sans sécheur intégré, distinct du BORA22-08ES. La table donne 3 600 L/min d’air fourni et 7,5 bar maximum ; le BORA11-08-270ES combine une autre puissance, une cuve et un sécheur. La page ne précise pas séparément la pression de mesure du débit. Cette capacité reste documentaire et aucun volume de cuve absent n’est inventé.",
    "verifiedFacts": [
      "Le BORA22-08 est le groupe 22 kW sans sécheur intégré, distinct du BORA22-08ES.",
      "La table donne 3 600 L/min d’air fourni et 7,5 bar maximum ; le BORA11-08-270ES combine une autre puissance, une cuve et un sécheur."
    ],
    "limitations": [
      "La fréquence électrique du compresseur n’est pas explicitement publiée dans le catalogue capturé.",
      "Cuve non qualifiée : le tiret ou l’absence de colonne ne suffit pas à démontrer un stockage nul.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La courbe dimensionnante a été retirée après revue : la mesure FAD et son appariement à une pression ne sont pas suffisamment établis. Les valeurs documentaires restent conservées."
    ]
  },
  "evidence": [
    {
      "id": "october4b-shamal-bora-p22",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html#page=22",
      "sourceLabel": "Shamal, catalogue BORA constructeur, page PDF 22",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-shamal-bora-p1",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html#page=1",
      "sourceLabel": "Shamal, catalogue BORA constructeur, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-reviews:shamal-bora-22-08:0",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
      "sourceLabel": "Shamal, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le BORA22-08 est le groupe 22 kW sans sécheur intégré, distinct du BORA22-08ES. La table donne 3 600 L/min d’air fourni et 7,5 bar maximum ; le BORA11-08-270ES combine une autre puissance, une cuve et un sécheur. La page ne précise pas séparément la pression de mesure du débit. Cette capacité reste documentaire et aucun volume de cuve absent n’est inventé. GET complet SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04. Pages PDF lues : 22, 1."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-shamal-bora-p22"
    ],
    "maxPressureBar": [
      "october4b-shamal-bora-p22"
    ],
    "fadCurve": [
      "review:2026-11-16-reviews:shamal-bora-22-08:0"
    ],
    "powerKw": [
      "october4b-shamal-bora-p22"
    ],
    "oilType": [
      "october4b-shamal-bora-p1"
    ],
    "mpn": [
      "october4b-shamal-bora-p22"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
