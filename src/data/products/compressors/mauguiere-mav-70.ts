import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "mauguiere-mav-70",
  "slug": "mauguiere-mav-70",
  "brand": "Mauguière",
  "model": "MAV 70",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "mauguiere-mav-70",
    "label": "MAV 70",
    "distinguishingAttributes": {
      "équipement": "MAV 70",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 7.5,
      "litersPerMinute": 888
    }
  ],
  "oilType": "unknown",
  "powerKw": 5.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mauguiere-mav-70.svg",
    "alt": "Repères techniques : Mauguière MAV 70",
    "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mav-30--90-/mav-30---90---leaflet/Mauguiere_MAV%2030-90_Sales_Leaflet_FR_Brendola_6999460581.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Mauguière MAV 70. 888 L/min déclarés à 7,5 bar. Configuration constructeur : MAV 70.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 888 L/min déclarés à 7,5 bar."
    ],
    "limitations": [
      "Débit du modèle à la pression de référence de cette ligne, distincte du plafond de service lorsque le constructeur fournit les deux colonnes. Plusieurs montages existent ; aucune cuve de configuration optionnelle attribuée au modèle générique.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "MAV 70",
      "evidenceIds": [
        "october5-mauguiere-pdf-0-p7"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october5-mauguiere-pdf-0-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-mauguiere-pdf-0-p7"
      ]
    },
    {
      "label": "Air livré à 7,5 bar",
      "value": "888 L/min",
      "evidenceIds": [
        "october5-mauguiere-pdf-0-p7"
      ]
    },
    {
      "label": "Qualitative manufacturer operating-use statement, no numeric duty inferred",
      "value": "vous pouvez l'utiliser toute la journée",
      "evidenceIds": [
        "october5-mauguiere-pdf-0-p2"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
      "evidenceIds": [
        "october5-mauguiere-pdf-0-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-mauguiere-pdf-0-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-mauguiere-pdf-0-p7",
      "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mav-30--90-/mav-30---90---leaflet/Mauguiere_MAV%2030-90_Sales_Leaflet_FR_Brendola_6999460581.pdf#page=7",
      "sourceLabel": "Mauguière, documentation constructeur MAV30–90, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 bec42e5260123354eadeb49f6efe5219f3f916b2ff9182db4e98b3b3fa4abeac de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-mauguiere-pdf-0-p2",
      "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mav-30--90-/mav-30---90---leaflet/Mauguiere_MAV%2030-90_Sales_Leaflet_FR_Brendola_6999460581.pdf#page=2",
      "sourceLabel": "Mauguière, documentation constructeur MAV30–90, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 bec42e5260123354eadeb49f6efe5219f3f916b2ff9182db4e98b3b3fa4abeac de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-mauguiere-pdf-0-p7"
    ],
    "maxPressureBar": [
      "october5-mauguiere-pdf-0-p7"
    ],
    "fadCurve": [
      "october5-mauguiere-pdf-0-p7"
    ],
    "powerKw": [
      "october5-mauguiere-pdf-0-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
