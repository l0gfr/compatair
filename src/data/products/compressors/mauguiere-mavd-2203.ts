const product = {
  "id": "mauguiere-mavd-2203",
  "slug": "mauguiere-mavd-2203",
  "brand": "Mauguière",
  "model": "MAVD 2203",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "mauguiere-mavd-2203",
    "label": "MAVD 2203",
    "distinguishingAttributes": {
      "équipement": "MAVD 2203",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 28645
    }
  ],
  "oilType": "unknown",
  "powerKw": 160,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mauguiere-mavd-2203.svg",
    "alt": "Repères techniques : Mauguière MAVD 2203",
    "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/variable-speed/mavd-v-1513---2203/mavd-v-1513---2203---leaflet/Maugiere_MAVD-MAVDV_1513-2203_FR_6999460570_Lowres.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Mauguière MAVD 2203. 28 645 L/min déclarés à 7 bar. Configuration constructeur : MAVD 2203.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 28 645 L/min déclarés à 7 bar."
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
      "value": "MAVD 2203",
      "evidenceIds": [
        "october5-mauguiere-pdf-3-p7"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "7 bar",
      "evidenceIds": [
        "october5-mauguiere-pdf-3-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-mauguiere-pdf-3-p7"
      ]
    },
    {
      "label": "Air livré à 7 bar",
      "value": "28 645 L/min",
      "evidenceIds": [
        "october5-mauguiere-pdf-3-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "160 kW",
      "evidenceIds": [
        "october5-mauguiere-pdf-3-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-mauguiere-pdf-3-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-mauguiere-pdf-3-p7",
      "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/variable-speed/mavd-v-1513---2203/mavd-v-1513---2203---leaflet/Maugiere_MAVD-MAVDV_1513-2203_FR_6999460570_Lowres.pdf#page=7",
      "sourceLabel": "Mauguière, documentation constructeur MAVD(V)1513–2203, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 58069817760b71f5b418faa3a6c474821d8fe46ba54f25b672565cf7cee1c2b5 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-mauguiere-pdf-3-p7"
    ],
    "maxPressureBar": [
      "october5-mauguiere-pdf-3-p7"
    ],
    "fadCurve": [
      "october5-mauguiere-pdf-3-p7"
    ],
    "powerKw": [
      "october5-mauguiere-pdf-3-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
