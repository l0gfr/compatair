import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "swan-skr-06c",
  "slug": "swan-skr-06c",
  "brand": "SWAN",
  "model": "SKR-06C",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "swan-skr-06c",
    "label": "Groupe complet SKR-06C ; configuration de la table constructeur",
    "distinguishingAttributes": {
      "équipement": "Groupe complet SKR-06C ; configuration de la table constructeur",
      "pressionDeConfiguration": "7,845 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.845,
  "fadCurve": [
    {
      "pressureBar": 7.845,
      "litersPerMinute": 600
    }
  ],
  "oilType": "oil-free",
  "powerKw": 5.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/swan-skr-06c.svg",
    "alt": "Repères techniques : SWAN SKR-06C",
    "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--15c2643bcd291dfa38a4d3b9956b6d14d4c2d395/Oil-free%20Scroll%20Compressor%20Series.pdf?disposition=preview",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "SWAN SKR-06C. 600 L/min déclarés à 7,845 bar. Configuration constructeur : Groupe complet SKR-06C ; configuration de la table constructeur.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,845 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 600 L/min déclarés à 7,845 bar."
    ],
    "limitations": [
      "L’unité historique « kg/cm² » de la pression est transcrite comme kgf/cm² et convertie avec NIST. La pression de soupape et les réglages du pressostat ne sont pas documentés par cette table.",
      "La colonne F.A.D. est distincte du déplacement de piston. Le cycle de service, les conditions thermiques et la fréquence électrique ne sont pas qualifiés par cette seule table.",
      "Les alternatives de pression d’une même ligne ne sont pas comptées comme des compresseurs distincts. Les puissances de plusieurs moteurs ne sont pas additionnées silencieusement.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Groupe complet SKR-06C ; configuration de la table constructeur",
      "evidenceIds": [
        "october7-swan-oil-free-scroll-p6"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7,845 bar",
      "evidenceIds": [
        "october7-swan-oil-free-scroll-p6",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-swan-oil-free-scroll-p6"
      ]
    },
    {
      "label": "Air livré à 7,845 bar",
      "value": "600 L/min",
      "evidenceIds": [
        "october7-swan-oil-free-scroll-p6",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "5,5 kW",
      "evidenceIds": [
        "october7-swan-oil-free-scroll-p6"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-swan-oil-free-scroll-p6"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-swan-oil-free-scroll-p6",
      "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--15c2643bcd291dfa38a4d3b9956b6d14d4c2d395/Oil-free%20Scroll%20Compressor%20Series.pdf?disposition=preview#page=6",
      "sourceLabel": "SWAN, catalogue constructeur de groupes complets, page PDF 6",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 635045671c5533199ad4700a2dc34a9a735c0679bfbda66e6186679350d11e29 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october7-swan-oil-free-scroll-p6"
    ],
    "maxPressureBar": [
      "october7-swan-oil-free-scroll-p6",
      "october7-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october7-swan-oil-free-scroll-p6"
    ],
    "fadCurve": [
      "october7-swan-oil-free-scroll-p6",
      "october7-nist-conversions-p1"
    ],
    "powerKw": [
      "october7-swan-oil-free-scroll-p6"
    ],
    "oilType": [
      "october7-swan-oil-free-scroll-p6"
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
