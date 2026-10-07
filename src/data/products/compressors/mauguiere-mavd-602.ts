import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "mauguiere-mavd-602",
  "slug": "mauguiere-mavd-602",
  "brand": "Mauguière",
  "model": "MAVD 602",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "mauguiere-mavd-602",
    "label": "MAVD 602",
    "distinguishingAttributes": {
      "équipement": "MAVD 602",
      "pressionDeConfiguration": "7,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.5,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 8183.333
    }
  ],
  "oilType": "unknown",
  "powerKw": 45,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mauguiere-mavd-602.svg",
    "alt": "Repères techniques : Mauguière MAVD 602",
    "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mavd-402---602/mavd-421---621/Mauguiere_MAVD_V_402-602.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Mauguière MAVD 602. 8 183,333 L/min déclarés à 7 bar. Configuration constructeur : MAVD 602.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 8 183,333 L/min déclarés à 7 bar."
    ],
    "limitations": [
      "Débit du modèle à la pression de référence de cette ligne, distincte du plafond de service lorsque le constructeur fournit les deux colonnes. Plusieurs montages existent ; aucune cuve de configuration optionnelle attribuée au modèle générique.",
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
      "value": "MAVD 602",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7,5 bar",
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
      "label": "Air livré à 7 bar",
      "value": "8 183,333 L/min",
      "evidenceIds": [
        "october5-mauguiere-pdf-2-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "45 kW",
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
    "maxPressureBasis": [
      "october5-mauguiere-pdf-2-p7"
    ],
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
