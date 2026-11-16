import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "swan-sdu-310c-1",
  "slug": "swan-sdu-310c-1",
  "brand": "SWAN",
  "model": "SDU-310C-1",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "swan-sdu-310c-1",
    "label": "Groupe complet SDU-310C-1 ; configuration de la table constructeur",
    "distinguishingAttributes": {
      "équipement": "Groupe complet SDU-310C-1 ; configuration de la table constructeur",
      "pressionDeConfiguration": "7,845 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.845,
  "fadCurve": [
    {
      "pressureBar": 7.845,
      "litersPerMinute": 885
    }
  ],
  "oilType": "unknown",
  "powerKw": 7.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/swan-sdu-310c-1-technical-20261116-reviews.svg",
    "alt": "Repères techniques : SWAN SDU-310C-1",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "editorial": {
    "overview": "Le SDU310C-1 est le groupe en caisson 7,5 kW, déclaré à 885 L/min FAD sous 8 kgf/cm², environ 7,845 bar. Le SDU310CD avec séchage et filtration publie 793 L/min ; le SDU307C-1 de 5,5 kW publie 730. Le traitement d’air ne permet pas de reprendre automatiquement le débit de la version C-1. Le stockage et le cycle du groupe restent non renseignés.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,845 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 885 L/min déclarés à 7,845 bar."
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
      "value": "Groupe complet SDU-310C-1 ; configuration de la table constructeur",
      "evidenceIds": [
        "october7-swan-oil-less-p6"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7,845 bar",
      "evidenceIds": [
        "october7-swan-oil-less-p6",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-swan-oil-less-p6"
      ]
    },
    {
      "label": "Air livré à 7,845 bar",
      "value": "885 L/min",
      "evidenceIds": [
        "october7-swan-oil-less-p6",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
      "evidenceIds": [
        "october7-swan-oil-less-p6"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-swan-oil-less-p6"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-swan-oil-less-p6",
      "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f21f3a426d479c9a27849c7f499ea9b940b557b7/Oil-less%20Compressor%20Series.pdf?disposition=preview#page=6",
      "sourceLabel": "SWAN, catalogue constructeur de groupes complets, page PDF 6",
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
      "id": "review:2026-11-16-reviews:swan-sdu-310c-1:0",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "SWAN, document constructeur relu le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le SDU310C-1 est le groupe en caisson 7,5 kW, déclaré à 885 L/min FAD sous 8 kgf/cm², environ 7,845 bar. Le SDU310CD avec séchage et filtration publie 793 L/min ; le SDU307C-1 de 5,5 kW publie 730. Le traitement d’air ne permet pas de reprendre automatiquement le débit de la version C-1. Le stockage et le cycle du groupe restent non renseignés. GET complet SHA-256 751228aea7ee7b2d83bb7af67071a1647374ae710e5d02c44f45cee1e59c4546. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    },
    {
      "id": "review:2026-11-16-reviews:swan-sdu-310c-1:1",
      "sourceUrl": "https://www.swan-aircompressor.com/en/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f21f3a426d479c9a27849c7f499ea9b940b557b7/Oil-less%20Compressor%20Series.pdf?disposition=preview",
      "sourceLabel": "SWAN, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le SDU310C-1 est le groupe en caisson 7,5 kW, déclaré à 885 L/min FAD sous 8 kgf/cm², environ 7,845 bar. Le SDU310CD avec séchage et filtration publie 793 L/min ; le SDU307C-1 de 5,5 kW publie 730. Le traitement d’air ne permet pas de reprendre automatiquement le débit de la version C-1. Le stockage et le cycle du groupe restent non renseignés. GET complet SHA-256 ba27dceb7bc711898ad3b2f485fdb7734a1487fb2494d253ac319020abe9821b. Pages PDF lues : 6."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-swan-oil-less-p6"
    ],
    "maxPressureBar": [
      "october7-swan-oil-less-p6",
      "october7-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october7-swan-oil-less-p6"
    ],
    "fadCurve": [
      "october7-swan-oil-less-p6",
      "october7-nist-conversions-p1"
    ],
    "powerKw": [
      "october7-swan-oil-less-p6"
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
