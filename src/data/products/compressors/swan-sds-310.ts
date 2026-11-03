import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "swan-sds-310",
  "slug": "swan-sds-310",
  "brand": "SWAN",
  "model": "SDS-310",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "swan-sds-310",
    "label": "Groupe complet SDS-310 ; configuration de la table constructeur",
    "distinguishingAttributes": {
      "équipement": "Groupe complet SDS-310 ; configuration de la table constructeur",
      "pressionDeConfiguration": "7,845 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.845,
  "fadCurve": [
    {
      "pressureBar": 7.845,
      "litersPerMinute": 730
    }
  ],
  "oilType": "unknown",
  "powerKw": 7.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/swan-sds-310.svg",
    "alt": "Repères techniques : SWAN SDS-310",
    "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f21f3a426d479c9a27849c7f499ea9b940b557b7/Oil-less%20Compressor%20Series.pdf?disposition=preview",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "SWAN SDS-310. La SDS-310 simple donne 730 L/min à 8 kgf/cm² et pèse 305 kg. La SDT-310 double donne 1 460 L/min, pèse 615 kg et mesure 1 910 × 710 × 1 330 mm. La ligne SDS-310 n’indique pas de cuve ; aucun volume de la GP-510 ou d’une version double ne lui est attribué.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,845 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 730 L/min déclarés à 7,845 bar.",
      "Modèle : SDS-310.",
      "FAD à 8 kgf/cm² : 730 L/min.",
      "Puissance : 7,5 kW / 10 HP.",
      "Dimensions L×W×H : 880 × 710 × 1 305 mm.",
      "Masse : 305 kg."
    ],
    "limitations": [
      "L’unité historique « kg/cm² » de la pression est transcrite comme kgf/cm² et convertie avec NIST. La pression de soupape et les réglages du pressostat ne sont pas documentés par cette table.",
      "La colonne F.A.D. est distincte du déplacement de piston. Le cycle de service, les conditions thermiques et la fréquence électrique ne sont pas qualifiés par cette seule table.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Groupe complet SDS-310 ; configuration de la table constructeur",
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
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-swan-oil-less-p9"
      ]
    },
    {
      "label": "Air livré à 7,845 bar",
      "value": "730 L/min",
      "evidenceIds": [
        "october7-swan-oil-less-p9",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
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
    },
    {
      "label": "Modèle",
      "value": "SDS-310",
      "evidenceIds": [
        "swan-sds-310-reserved-20261103-1"
      ]
    },
    {
      "label": "FAD à 8 kgf/cm²",
      "value": "730 L/min",
      "evidenceIds": [
        "swan-sds-310-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance",
      "value": "7,5 kW / 10 HP",
      "evidenceIds": [
        "swan-sds-310-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "880 × 710 × 1 305 mm",
      "evidenceIds": [
        "swan-sds-310-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse",
      "value": "305 kg",
      "evidenceIds": [
        "swan-sds-310-reserved-20261103-1"
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
    },
    {
      "id": "swan-sds-310-reserved-20261103-1",
      "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f21f3a426d479c9a27849c7f499ea9b940b557b7/Oil-less%20Compressor%20Series.pdf?disposition=preview#page=9",
      "sourceLabel": "SWAN : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 ba27dceb7bc711898ad3b2f485fdb7734a1487fb2494d253ac319020abe9821b. La SDS-310 simple donne 730 L/min à 8 kgf/cm² et pèse 305 kg. La SDT-310 double donne 1 460 L/min, pèse 615 kg et mesure 1 910 × 710 × 1 330 mm. La ligne SDS-310 n’indique pas de cuve ; aucun volume de la GP-510 ou d’une version double ne lui est attribué."
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
    "fadCurve": [
      "october7-swan-oil-less-p9",
      "october7-nist-conversions-p1"
    ],
    "powerKw": [
      "swan-sds-310-reserved-20261103-1"
    ],
    "weightKg": [
      "swan-sds-310-reserved-20261103-1"
    ],
    "editorial": [
      "swan-sds-310-reserved-20261103-1"
    ],
    "specifications": [
      "swan-sds-310-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "weightKg": 305
};

export default product;
