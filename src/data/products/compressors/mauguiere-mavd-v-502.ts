const product = {
  "id": "mauguiere-mavd-v-502",
  "slug": "mauguiere-mavd-v-502",
  "brand": "Mauguière",
  "model": "MAVD V 502",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "mauguiere-mavd-v-502",
    "label": "MAVD V 502",
    "distinguishingAttributes": {
      "équipement": "MAVD V 502",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 6833.333
    }
  ],
  "oilType": "unknown",
  "powerKw": 37,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mauguiere-mavd-v-502.svg",
    "alt": "Repères techniques : Mauguière MAVD V 502",
    "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mavd-402---602/mavd-421---621/Mauguiere_MAVD_V_402-602.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Mauguière MAVD V 502. 6 833,333 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : MAVD V 502.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 6 833,333 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "FAD maximal déclaré à 7 bar ; aucune valeur à une autre pression ni interpolation de vitesse. Montages et cuves optionnels non attribués au modèle générique.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "MAVD V 502",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "6 833,333 L/min",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "1 916,667 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-mauguiere-pdf-2-p7",
      "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mavd-402---602/mavd-421---621/Mauguiere_MAVD_V_402-602.pdf#page=7",
      "sourceLabel": "Mauguière, documentation constructeur MAVD(V)402–602, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 dd22d53e9752ca26d9cc88b6501ebab10e2a8a05ce7bffd988b21cea06fbf424 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-mauguiere-pdf-2-p7"
    ],
    "maxPressureBar": [
      "october5-mauguiere-pdf-2-p7"
    ],
    "fadCurve": [
      "october5-mauguiere-pdf-2-p7"
    ],
    "powerKw": [
      "october5-mauguiere-pdf-2-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
