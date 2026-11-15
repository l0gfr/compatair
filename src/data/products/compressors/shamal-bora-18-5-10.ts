import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "shamal-bora-18-5-10",
  "slug": "shamal-bora-18-5-10",
  "brand": "Shamal",
  "model": "BORA 18.5-10",
  "mpn": "V60DQ92SHAA72",
  "variant": {
    "familyId": "shamal-bora-18-5",
    "label": "BORA 18.5-10",
    "distinguishingAttributes": {
      "équipement": "BORA 18.5-10",
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
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/shamal-bora-18-5-10-technical-20261115-followup.svg",
    "alt": "Repères techniques : Shamal BORA 18.5-10",
    "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "BORA 18.5-10",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
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
      "label": "Air livré à 10 bar",
      "value": "2 600 L/min",
      "evidenceIds": [
        "october4b-shamal-bora-p22"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
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
      "label": "Code et groupe",
      "value": "V60DQ92SHAA72 ;18,5 kW ; sans sécheur",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-18-5-10:0"
      ]
    },
    {
      "label": "Dimensions et masse nettes",
      "value": "1330 × 850 × 1370 mm ;527 kg",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-18-5-10:0"
      ]
    },
    {
      "label": "Débit mesuré",
      "value": "2600 L/min à10 bar ; ISO1217",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-18-5-10:0"
      ]
    },
    {
      "label": "Sortie",
      "value": "G1 1/4",
      "evidenceIds": [
        "review:2026-11-12-technical:shamal-bora-18-5-10:0"
      ]
    }
  ],
  "editorial": {
    "overview": "La BORA18.5-10 est la version fixe sans sécheur de527 kg,1330 × 850 × 1370 mm. La version ES garde2600 L/min à10 bar mais passe à1710 mm et587 kg avec sécheur. Le débit est mesuré selon ISO1217 ; le taux de marche manque.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 600 L/min déclarés à 10 bar.",
      "Code et groupe : V60DQ92SHAA72 ;18,5 kW ; sans sécheur.",
      "Dimensions et masse nettes : 1330 × 850 × 1370 mm ;527 kg.",
      "Débit mesuré : 2600 L/min à10 bar ; ISO1217.",
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
      "id": "review:2026-11-12-technical:shamal-bora-18-5-10:0",
      "sourceUrl": "https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html",
      "sourceLabel": "Shamal, document fabricant, pages PDF ",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-12",
      "confidence": "B",
      "notes": "La BORA18.5-10 est la version fixe sans sécheur de527 kg,1330 × 850 × 1370 mm. La version ES garde2600 L/min à10 bar mais passe à1710 mm et587 kg avec sécheur. Le débit est mesuré selon ISO1217 ; le taux de marche manque. GET complet : SHA-256 10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04. Historique conservé."
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
