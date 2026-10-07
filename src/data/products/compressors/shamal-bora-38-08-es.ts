import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "shamal-bora-38-08-es",
  "slug": "shamal-bora-38-08-es",
  "brand": "Shamal",
  "model": "BORA 38-08 ES",
  "mpn": "V60DU92SHAB72",
  "variant": {
    "familyId": "shamal-bora-38-es",
    "label": "BORA 38-08 ES",
    "distinguishingAttributes": {
      "équipement": "BORA 38-08 ES",
      "pressionDeConfiguration": "7,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.5,
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 6600
    }
  ],
  "powerKw": 37,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-bora-38-08-es.svg",
    "alt": "Repères techniques : Shamal BORA 38-08 ES",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BORA 38-08 ES",
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
      "label": "Air livré à 7,5 bar",
      "value": "6 600 L/min",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
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
    "overview": "Shamal BORA 38-08 ES. 6 600 L/min déclarés à 7,5 bar. Configuration constructeur : BORA 38-08 ES.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 6 600 L/min déclarés à 7,5 bar."
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
      "october4b-shamal-bora-p22"
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
