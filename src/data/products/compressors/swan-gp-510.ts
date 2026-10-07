import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "swan-gp-510",
  "slug": "swan-gp-510",
  "brand": "SWAN",
  "model": "GP-510",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "swan-gp-510",
    "label": "Groupe complet GP-510 ; configuration de la table constructeur",
    "distinguishingAttributes": {
      "équipement": "Groupe complet GP-510 ; configuration de la table constructeur",
      "pressionDeConfiguration": "7,845 bar",
      "cuve": "165 L"
    }
  },
  "tankLiters": 165,
  "maxPressureBar": 7.845,
  "fadCurve": [
    {
      "pressureBar": 7.845,
      "litersPerMinute": 485
    }
  ],
  "oilType": "unknown",
  "powerKw": 3.7,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/swan-gp-510.svg",
    "alt": "Repères techniques : SWAN GP-510",
    "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f21f3a426d479c9a27849c7f499ea9b940b557b7/Oil-less%20Compressor%20Series.pdf?disposition=preview",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "SWAN GP-510. 485 L/min déclarés à 7,845 bar. Configuration constructeur : Groupe complet GP-510 ; configuration de la table constructeur.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,845 bar.",
      "Cuve de stockage documentée : 165 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 485 L/min déclarés à 7,845 bar."
    ],
    "limitations": [
      "L’unité historique « kg/cm² » de la pression est transcrite comme kgf/cm² et convertie avec NIST. La pression de soupape et les réglages du pressostat ne sont pas documentés par cette table.",
      "La colonne F.A.D. est distincte du déplacement de piston. Le cycle de service, les conditions thermiques et la fréquence électrique ne sont pas qualifiés par cette seule table.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Groupe complet GP-510 ; configuration de la table constructeur",
      "evidenceIds": [
        "october7-swan-oil-less-p9"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7,845 bar",
      "evidenceIds": [
        "october7-swan-oil-less-p9",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "165 L",
      "evidenceIds": [
        "october7-swan-oil-less-p9"
      ]
    },
    {
      "label": "Air livré à 7,845 bar",
      "value": "485 L/min",
      "evidenceIds": [
        "october7-swan-oil-less-p9",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "3,7 kW",
      "evidenceIds": [
        "october7-swan-oil-less-p9"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-swan-oil-less-p9"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-swan-oil-less-p9",
      "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f21f3a426d479c9a27849c7f499ea9b940b557b7/Oil-less%20Compressor%20Series.pdf?disposition=preview#page=9",
      "sourceLabel": "SWAN, catalogue constructeur de groupes complets, page PDF 9",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 ba27dceb7bc711898ad3b2f485fdb7734a1487fb2494d253ac319020abe9821b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october7-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, facteurs de conversion officiels, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 99092c3ae6a5030fdb6901f601cb87d99c07d62f31a164a4a0b6786847c5cc6c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-swan-oil-less-p9"
    ],
    "maxPressureBar": [
      "october7-swan-oil-less-p9",
      "october7-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october7-swan-oil-less-p9"
    ],
    "tankLiters": [
      "october7-swan-oil-less-p9"
    ],
    "fadCurve": [
      "october7-swan-oil-less-p9",
      "october7-nist-conversions-p1"
    ],
    "powerKw": [
      "october7-swan-oil-less-p9"
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
