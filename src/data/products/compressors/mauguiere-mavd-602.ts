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
      "litersPerMinute": 8178
    }
  ],
  "oilType": "unknown",
  "powerKw": 45,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mauguiere-mavd-602-technical-20261116-reviews.svg",
    "alt": "Repères techniques : Mauguière MAVD 602",
    "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mavd-402---602/mavd-421---621/Mauguiere_MAVD_V_402-602.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "editorial": {
    "overview": "Le MAVD602 fixe 45 kW publie à 7 bar les colonnes arrondies 491 m³/h et 136,3 L/s. La valeur de calcul reprend désormais 8 178 L/min issue de la colonne L/s, avec les deux écritures documentaires conservées. Le MAVD621 du document actuel est une autre génération, pas un remplacement silencieux. La pression maximale 7,5 bar est distincte du point 7 bar.",
    "verifiedFacts": [
      "Le MAVD602 fixe 45 kW publie à 7 bar les colonnes arrondies 491 m³/h et 136,3 L/s.",
      "La valeur de calcul reprend désormais 8 178 L/min issue de la colonne L/s, avec les deux écritures documentaires conservées."
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
      "label": "FAD à 7 bar, colonnes originales",
      "value": "491 m³/h et 136,3 L/s, arrondis distincts ; calcul sur 136,3 L/s = 8 178 L/min",
      "evidenceIds": [
        "review:2026-11-16-reviews:mauguiere-mavd-602:0"
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
    },
    {
      "id": "review:2026-11-16-reviews:mauguiere-mavd-602:0",
      "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/fixed-speed/mavd-402---602/mavd-421---621/Mauguiere_MAVD_V_402-602.pdf",
      "sourceLabel": "Mauguière, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le MAVD602 fixe 45 kW publie à 7 bar les colonnes arrondies 491 m³/h et 136,3 L/s. La valeur de calcul reprend désormais 8 178 L/min issue de la colonne L/s, avec les deux écritures documentaires conservées. Le MAVD621 du document actuel est une autre génération, pas un remplacement silencieux. La pression maximale 7,5 bar est distincte du point 7 bar. GET complet SHA-256 dd22d53e9752ca26d9cc88b6501ebab10e2a8a05ce7bffd988b21cea06fbf424. Pages PDF lues : 7."
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
      "review:2026-11-16-reviews:mauguiere-mavd-602:0"
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
