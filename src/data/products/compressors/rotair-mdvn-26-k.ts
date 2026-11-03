import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rotair-mdvn-26-k",
  "slug": "rotair-mdvn-26-k",
  "brand": "Rotair",
  "model": "MDVN 26 K",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "rotair-mdvn-26-k",
    "label": "Configuration constructeur MDVN 26 K à 6,5 bar",
    "distinguishingAttributes": {
      "équipement": "Configuration constructeur MDVN 26 K à 6,5 bar",
      "pressionDeConfiguration": "6,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 6.5,
  "fadCurve": [
    {
      "pressureBar": 6.5,
      "litersPerMinute": 2500
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rotair-mdvn-26-k.svg",
    "alt": "Repères techniques : Rotair MDVN 26 K",
    "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Rotair MDVN 26 K. La MDVN 26 K publie 2 500 L/min à 6,5 bar avec moteur Kubota Stage V. La MDVN 26 K et la MDVN 30 donnent toutes deux 1 900 L/min dans leur version 10 bar, malgré des débits différents à basse pression. Les versions de sablage avec refroidissement et séchage sont des équipements à choisir, non des capacités attribuées au groupe générique.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 6,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 500 L/min déclarés à 6,5 bar.",
      "Modèle : MDVN 26 K.",
      "FAD à 6,5 bar : 2 500 L/min.",
      "Motorisation publiée : Kubota Stage V."
    ],
    "limitations": [
      "Les autres colonnes de pression décrivent les versions proposées ; aucun débit intermédiaire ni pression de sécurité de cette configuration ne sont déduits.",
      "Le réservoir de carburant et le réservoir d’huile ne constituent pas une cuve de stockage d’air. La disponibilité locale et le dispositif d’attelage doivent être vérifiés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Configuration constructeur MDVN 26 K à 6,5 bar",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "6,5 bar",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Air livré à 6,5 bar",
      "value": "2 500 L/min",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Pression publiée, unités originales",
      "value": "6,5 bar / 94 psi",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Débit restitué publié, unités originales",
      "value": "2500 lt/min / 88 cfm",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Modèle",
      "value": "MDVN 26 K",
      "evidenceIds": [
        "rotair-mdvn-26-k-reserved-20261103-1"
      ]
    },
    {
      "label": "FAD à 6,5 bar",
      "value": "2 500 L/min",
      "evidenceIds": [
        "rotair-mdvn-26-k-reserved-20261103-1"
      ]
    },
    {
      "label": "Motorisation publiée",
      "value": "Kubota Stage V",
      "evidenceIds": [
        "rotair-mdvn-26-k-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-rotair-mdvn-p1",
      "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/",
      "sourceLabel": "Rotair, gamme constructeur de compresseurs mobiles, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 c46081e4b4e881c8aa68ca24a3f3a545a35014031c6793bb91f8a4809e9050a2 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "rotair-mdvn-26-k-reserved-20261103-1",
      "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/",
      "sourceLabel": "Rotair : revue factuelle du 3 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 08f8898f47139287006db5925860a61fcd2826989eb9c87e0675e36b97010f36. La MDVN 26 K publie 2 500 L/min à 6,5 bar avec moteur Kubota Stage V. La MDVN 26 K et la MDVN 30 donnent toutes deux 1 900 L/min dans leur version 10 bar, malgré des débits différents à basse pression. Les versions de sablage avec refroidissement et séchage sont des équipements à choisir, non des capacités attribuées au groupe générique."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-rotair-mdvn-p1"
    ],
    "maxPressureBar": [
      "october7-rotair-mdvn-p1"
    ],
    "maxPressureBasis": [
      "october7-rotair-mdvn-p1"
    ],
    "fadCurve": [
      "october7-rotair-mdvn-p1"
    ],
    "editorial": [
      "rotair-mdvn-26-k-reserved-20261103-1"
    ],
    "specifications": [
      "rotair-mdvn-26-k-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
