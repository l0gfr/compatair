import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "mauguiere-mavd-421",
  "slug": "mauguiere-mavd-421",
  "brand": "Mauguière",
  "model": "MAVD 421",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "mauguiere-mavd-421",
    "label": "MAVD 421",
    "distinguishingAttributes": {
      "équipement": "MAVD 421",
      "pressionDeConfiguration": "7,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.5,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 5333.333
    }
  ],
  "oilType": "unknown",
  "powerKw": 30,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/mauguiere-mavd-421.svg",
    "alt": "Repères techniques : Mauguière MAVD 421",
    "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/variable-speed/mavd-v-421---621/mavd-v-421---621---leaflet/MAUGUIERE_MAVD_MAVDV_421-621_6999460550_FR_LR.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Mauguière MAVD 421. 5 333,333 L/min déclarés à 7 bar. Configuration constructeur : MAVD 421.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 5 333,333 L/min déclarés à 7 bar."
    ],
    "limitations": [
      "Débit du modèle à la pression de référence de cette ligne, distincte du plafond de service lorsque le constructeur fournit les deux colonnes. Plusieurs montages existent ; aucune cuve de configuration optionnelle attribuée au modèle générique.",
      "Air livré déclaré par le constructeur ; aucune méthode ISO1217 ni tolérance de mesure ajoutée à cette brochure sans mention explicite.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "MAVD 421",
      "evidenceIds": [
        "october5-mauguiere-pdf-4-p5"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "7,5 bar",
      "evidenceIds": [
        "october5-mauguiere-pdf-4-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-mauguiere-pdf-4-p5"
      ]
    },
    {
      "label": "Air livré à 7 bar",
      "value": "5 333,333 L/min",
      "evidenceIds": [
        "october5-mauguiere-pdf-4-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "30 kW",
      "evidenceIds": [
        "october5-mauguiere-pdf-4-p5"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-mauguiere-pdf-4-p5"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-mauguiere-pdf-4-p5",
      "sourceUrl": "https://www.compresseurs-mauguiere.com/content/dam/brands/ceccatocluster/maugui%C3%A8re/screw-compressors/variable-speed/mavd-v-421---621/mavd-v-421---621---leaflet/MAUGUIERE_MAVD_MAVDV_421-621_6999460550_FR_LR.pdf#page=5",
      "sourceLabel": "Mauguière, documentation constructeur MAVD421–621 et MAVDV421–621, page PDF 5",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 29520acfdec144eec75a1acd2f89dc9caa7f24ed966a1943ef01f54e70e27721 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-mauguiere-pdf-4-p5"
    ],
    "maxPressureBar": [
      "october5-mauguiere-pdf-4-p5"
    ],
    "fadCurve": [
      "october5-mauguiere-pdf-4-p5"
    ],
    "powerKw": [
      "october5-mauguiere-pdf-4-p5"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
