import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "scr-scr100gpm2-8",
  "slug": "scr-scr100gpm2-8",
  "brand": "SCR",
  "model": "SCR100GPM2-8",
  "variant": {
    "familyId": "scr-scr100gpm2",
    "label": "SCR100GPM2-8",
    "distinguishingAttributes": {
      "équipement": "SCR100GPM2-8",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 11800
    }
  ],
  "powerKw": 75,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr100gpm2-8.svg",
    "alt": "Repères techniques : SCR SCR100GPM2-8",
    "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR100GPM2-8",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "11 800 L/min",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "75 kW",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Modèle exact du tableau",
      "value": "SCR100GPM2-8",
      "evidenceIds": [
        "scr-scr100gpm2-8-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité publiée à8 bar",
      "value": "11,8 m³/min",
      "evidenceIds": [
        "scr-scr100gpm2-8-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance dans la ligne du tableau",
      "value": "75 kW /100 HP",
      "evidenceIds": [
        "scr-scr100gpm2-8-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance de l’en-tête de page",
      "value": "37–45 kW, incohérence avec cette ligne",
      "evidenceIds": [
        "scr-scr100gpm2-8-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions de la ligne",
      "value": "2 500 × 1 700 × 1 950 mm",
      "evidenceIds": [
        "scr-scr100gpm2-8-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse de la ligne",
      "value": "2 500 kg",
      "evidenceIds": [
        "scr-scr100gpm2-8-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "SCR SCR100GPM2-8. La table nomme SCR100GPM2-8 à75 kW et 11,8 m³/min à8 bar ; la SCR50GPM2-8 est à37 kW et 5,5 m³/min. L’en-tête de page ne couvre que37–45 kW : la fiche signale cette contradiction, sans extrapoler une plage de modulation ni reprendre les données électriques de la sérieG.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 11 800 L/min déclarés à 8 bar.",
      "Modèle exact du tableau : SCR100GPM2-8.",
      "Capacité publiée à8 bar : 11,8 m³/min.",
      "Puissance dans la ligne du tableau : 75 kW /100 HP.",
      "Puissance de l’en-tête de page : 37–45 kW, incohérence avec cette ligne.",
      "Dimensions de la ligne : 2 500 × 1 700 × 1 950 mm.",
      "Masse de la ligne : 2 500 kg."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Le tableau constructeur inclut ce modèle au-delà des 37–45 kW annoncés dans son en-tête ; aucune extrapolation de cette gamme n’est effectuée.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "La ligne nominative est conservée comme déclaration constructeur ; en-tête de gamme et configuration livrée à faire confirmer.",
      "Fréquence, alimentation et taux de marche de cette configuration non établis ; aucune tenue continue promise."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-173-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 c8f881898562b28a7db336b4dee5580a73bb2af7a803aff0162aa3a6d7cb7fef de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "scr-scr100gpm2-8-reserved-20261103-1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
      "sourceLabel": "SCR : revue factuelle du 3 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 c8f881898562b28a7db336b4dee5580a73bb2af7a803aff0162aa3a6d7cb7fef. La table nomme SCR100GPM2-8 à75 kW et 11,8 m³/min à8 bar ; la SCR50GPM2-8 est à37 kW et 5,5 m³/min. L’en-tête de page ne couvre que37–45 kW : la fiche signale cette contradiction, sans extrapoler une plage de modulation ni reprendre les données électriques de la sérieG."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-scr-173-p1"
    ],
    "model": [
      "october4c-scr-173-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-173-p1"
    ],
    "fadCurve": [
      "october4c-scr-173-p1"
    ],
    "powerKw": [
      "october4c-scr-173-p1"
    ],
    "oilType": [
      "october4c-scr-173-p1"
    ],
    "editorial": [
      "scr-scr100gpm2-8-reserved-20261103-1"
    ],
    "specifications": [
      "scr-scr100gpm2-8-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
