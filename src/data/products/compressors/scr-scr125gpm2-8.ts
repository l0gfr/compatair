import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "scr-scr125gpm2-8",
  "slug": "scr-scr125gpm2-8",
  "brand": "SCR",
  "model": "SCR125GPM2-8",
  "variant": {
    "familyId": "scr-scr125gpm2",
    "label": "SCR125GPM2-8",
    "distinguishingAttributes": {
      "équipement": "SCR125GPM2-8",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "powerKw": 90,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr125gpm2-8-technical-20261116-reviews.svg",
    "alt": "Repères techniques : SCR SCR125GPM2-8",
    "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR125GPM2-8",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Débit documentaire, hors calcul",
      "value": "13 600 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
      "evidenceIds": [
        "review:2026-11-16-reviews:scr-scr125gpm2-8:0"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "90 kW",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-scr-173-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Le SCR125GPM2-8 est le groupe sans huile 90 kW dont la table associe 13,6 m³/min à 8 bar. La version -7 annonce 14,5 m³/min ; la SCR125WG-10 relève d’une autre série et d’une autre pression. La page GPM2 ne précise pas la convention FAD de cette capacité, et la cote de hauteur de la ligne est tronquée. Le débit reste documentaire plutôt qu’un point de calcul présenté comme mesuré.",
    "verifiedFacts": [
      "Le SCR125GPM2-8 est le groupe sans huile 90 kW dont la table associe 13,6 m³/min à 8 bar.",
      "La version -7 annonce 14,5 m³/min ; la SCR125WG-10 relève d’une autre série et d’une autre pression."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Le tableau constructeur inclut ce modèle au-delà des 37–45 kW annoncés dans son en-tête ; aucune extrapolation de cette gamme n’est effectuée.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "La courbe dimensionnante a été retirée après revue : la mesure FAD et son appariement à une pression ne sont pas suffisamment établis. Les valeurs documentaires restent conservées."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-173-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 c8f881898562b28a7db336b4dee5580a73bb2af7a803aff0162aa3a6d7cb7fef de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-reviews:scr-scr125gpm2-8:0",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/173.html",
      "sourceLabel": "SCR, document constructeur relu le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le SCR125GPM2-8 est le groupe sans huile 90 kW dont la table associe 13,6 m³/min à 8 bar. La version -7 annonce 14,5 m³/min ; la SCR125WG-10 relève d’une autre série et d’une autre pression. La page GPM2 ne précise pas la convention FAD de cette capacité, et la cote de hauteur de la ligne est tronquée. Le débit reste documentaire plutôt qu’un point de calcul présenté comme mesuré. GET complet SHA-256 c8f881898562b28a7db336b4dee5580a73bb2af7a803aff0162aa3a6d7cb7fef. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-scr-173-p1"
    ],
    "model": [
      "october4c-scr-173-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-173-p1"
    ],
    "fadCurve": [
      "review:2026-11-16-reviews:scr-scr125gpm2-8:0"
    ],
    "powerKw": [
      "october4c-scr-173-p1"
    ],
    "oilType": [
      "october4c-scr-173-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
