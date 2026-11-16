import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "kaishan-krsp-45",
  "slug": "kaishan-krsp-45",
  "brand": "Kaishan",
  "model": "KRSP-45",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "kaishan-krsp-45",
    "label": "KRSP-45-8",
    "distinguishingAttributes": {
      "équipement": "KRSP-45-8",
      "pressionDeConfiguration": "8,5 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8.5,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 8500
    }
  ],
  "oilType": "unknown",
  "powerKw": 45,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/kaishan-krsp-45-technical-20261116-reviews.svg",
    "alt": "Repères techniques : Kaishan KRSP-45",
    "sourceUrl": "https://www.kaishan.com.au/wp-content/uploads/2024/07/KRSP-2023-Digital.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "editorial": {
    "overview": "Le KRSP45-8 50 Hz fournit 8,5 m³/min à pleine charge sous 8 bar, pour 45 kW et un maximum 8,5 bar. Le KRSP400-8 est une autre classe de groupe, avec 74,3 m³/min à 8 bar ; le KRSP110 occupe une autre ligne du tableau. La pression utile est le point 8 bar, pas la limite 8,5. Le stockage et le taux de marche restent indéterminés.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 8 500 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "Brochure officielle Kaishan Australie, 50 Hz. Une seule identité par modèle KRSP : les variantes de pression 8/10/13 ne sont pas additionnées. Point de capacité à pleine charge 8 bar, distinct du maximum 8,5 bar. Cuve et cycle de service non publiés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "KRSP-45-8",
      "evidenceIds": [
        "october5-kaishan-krsp-p5"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8,5 bar",
      "evidenceIds": [
        "october5-kaishan-krsp-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-kaishan-krsp-p5"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "8 500 L/min",
      "evidenceIds": [
        "october5-kaishan-krsp-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "45 kW",
      "evidenceIds": [
        "october5-kaishan-krsp-p5"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-kaishan-krsp-p5"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-kaishan-krsp-p5",
      "sourceUrl": "https://www.kaishan.com.au/wp-content/uploads/2024/07/KRSP-2023-Digital.pdf#page=5",
      "sourceLabel": "Kaishan Australia, KRSP Rotary Screw Air Compressor, tableau 50 Hz, page PDF 5",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 e6c541d4660dda7212e2455f09b4368e93fedc81fa6b701264b32db0f86dac60 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-reviews:kaishan-krsp-45:0",
      "sourceUrl": "https://www.kaishan.com.au/wp-content/uploads/2024/07/KRSP-2023-Digital.pdf",
      "sourceLabel": "Kaishan, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le KRSP45-8 50 Hz fournit 8,5 m³/min à pleine charge sous 8 bar, pour 45 kW et un maximum 8,5 bar. Le KRSP400-8 est une autre classe de groupe, avec 74,3 m³/min à 8 bar ; le KRSP110 occupe une autre ligne du tableau. La pression utile est le point 8 bar, pas la limite 8,5. Le stockage et le taux de marche restent indéterminés. GET complet SHA-256 e6c541d4660dda7212e2455f09b4368e93fedc81fa6b701264b32db0f86dac60. Pages PDF lues : 5."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-kaishan-krsp-p5"
    ],
    "maxPressureBar": [
      "october5-kaishan-krsp-p5"
    ],
    "fadCurve": [
      "october5-kaishan-krsp-p5"
    ],
    "powerKw": [
      "october5-kaishan-krsp-p5"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
