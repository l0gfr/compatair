import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "kaishan-krsp-18",
  "slug": "kaishan-krsp-18",
  "brand": "Kaishan",
  "model": "KRSP-18",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "kaishan-krsp-18",
    "label": "KRSP-18-8",
    "distinguishingAttributes": {
      "équipement": "KRSP-18-8",
      "pressionDeConfiguration": "8,5 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8.5,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 3370
    }
  ],
  "oilType": "unknown",
  "powerKw": 18.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/kaishan-krsp-18.svg",
    "alt": "Repères techniques : Kaishan KRSP-18",
    "sourceUrl": "https://www.kaishan.com.au/wp-content/uploads/2024/07/KRSP-2023-Digital.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Kaishan KRSP-18. La KRSP-18-8 donne3,37 m³/min à8 bar ; la KRSP-18-10 donne2,53 m³/min à10 bar. Ce sont deux configurations distinctes. La note indique que la version VSD est plus lourde : la masse de cette ligne à vitesse fixe ne lui est pas attribuée. La tenue continue demeure indéterminée sans taux de marche.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 370 L/min déclarés à 8 bar.",
      "Configuration complète : KRSP-18-8.",
      "Fréquence : 50 Hz.",
      "Capacité à pleine charge à8 bar : 3,37 m³/min.",
      "Pression maximale publiée séparément : 8,5 bar.",
      "Puissance publiée : 18,5 kW.",
      "Masse, version à vitesse fixe : 760 kg.",
      "Dimensions L×W×H : 1 780 × 975 × 1 278 mm.",
      "Conditions de référence : ISO 1217 édition3 annexe C:1996 ; entrée1 bar absolu, air ambiant et refroidissement20 °C."
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
      "value": "KRSP-18-8",
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
      "value": "3 370 L/min",
      "evidenceIds": [
        "october5-kaishan-krsp-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
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
    },
    {
      "label": "Configuration complète",
      "value": "KRSP-18-8",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
      ]
    },
    {
      "label": "Fréquence",
      "value": "50 Hz",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité à pleine charge à8 bar",
      "value": "3,37 m³/min",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
      ]
    },
    {
      "label": "Pression maximale publiée séparément",
      "value": "8,5 bar",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse, version à vitesse fixe",
      "value": "760 kg",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "1 780 × 975 × 1 278 mm",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
      ]
    },
    {
      "label": "Conditions de référence",
      "value": "ISO 1217 édition3 annexe C:1996 ; entrée1 bar absolu, air ambiant et refroidissement20 °C",
      "evidenceIds": [
        "kaishan-krsp-18-reserved-20261103-1"
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
      "id": "kaishan-krsp-18-reserved-20261103-1",
      "sourceUrl": "https://www.kaishan.com.au/wp-content/uploads/2024/07/KRSP-2023-Digital.pdf#page=5",
      "sourceLabel": "Kaishan : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 e6c541d4660dda7212e2455f09b4368e93fedc81fa6b701264b32db0f86dac60. La KRSP-18-8 donne3,37 m³/min à8 bar ; la KRSP-18-10 donne2,53 m³/min à10 bar. Ce sont deux configurations distinctes. La note indique que la version VSD est plus lourde : la masse de cette ligne à vitesse fixe ne lui est pas attribuée. La tenue continue demeure indéterminée sans taux de marche."
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
      "kaishan-krsp-18-reserved-20261103-1"
    ],
    "weightKg": [
      "kaishan-krsp-18-reserved-20261103-1"
    ],
    "editorial": [
      "kaishan-krsp-18-reserved-20261103-1"
    ],
    "specifications": [
      "kaishan-krsp-18-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 760
};

export default product;
