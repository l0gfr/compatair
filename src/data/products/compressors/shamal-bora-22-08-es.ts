import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "shamal-bora-22-08-es",
  "slug": "shamal-bora-22-08-es",
  "brand": "Shamal",
  "model": "BORA 22-08 ES",
  "mpn": "V60DR92SHAB72",
  "variant": {
    "familyId": "shamal-bora-22-es",
    "label": "BORA 22-08 ES",
    "distinguishingAttributes": {
      "équipement": "BORA 22-08 ES",
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
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-bora-22-08-es-technical-20261115-followup.svg",
    "alt": "Repères techniques : Shamal BORA 22-08 ES",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BORA 22-08 ES",
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
      "value": "3 600 L/min",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
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
    },
    {
      "label": "Code",
      "value": "V60DR92SHAB72",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-22-08-es:0"
      ]
    },
    {
      "label": "Dimensions et masse nettes",
      "value": "1710 × 850 × 1370 mm ;680 kg",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-22-08-es:0"
      ]
    },
    {
      "label": "Débit mesuré",
      "value": "3600 L/min à7,5 bar ; ISO1217",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-22-08-es:0"
      ]
    },
    {
      "label": "Sortie",
      "value": "G1 1/4",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-22-08-es:0"
      ]
    }
  ],
  "editorial": {
    "overview": "La BORA22-08 ES ajoute un sécheur à la version22-08 :1710 mm de long et680 kg contre 1330 mm et620 kg. Le tableau publie3600 L/min à7,5 bar pour les deux ; le sécheur ne crée pas de débit supplémentaire.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 600 L/min déclarés à 7,5 bar.",
      "Code : V60DR92SHAB72.",
      "Dimensions et masse nettes : 1710 × 850 × 1370 mm ;680 kg.",
      "Débit mesuré : 3600 L/min à7,5 bar ; ISO1217.",
      "Sortie : G1 1/4."
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
    },
    {
      "id": "review:2026-11-12-technical:shamal-bora-22-08-es:0",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
      "sourceLabel": "Shamal, document fabricant, pages PDF ",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-12",
      "confidence": "B",
      "notes": "La BORA22-08 ES ajoute un sécheur à la version22-08 :1710 mm de long et680 kg contre1330 mm et620 kg. Le tableau publie3600 L/min à7,5 bar pour les deux ; le sécheur ne crée pas de débit supplémentaire. GET complet : SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04. Historique conservé."
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
