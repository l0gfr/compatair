import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "scr-scr125wg-10",
  "slug": "scr-scr125wg-10",
  "brand": "SCR",
  "model": "SCR125WG-10",
  "variant": {
    "familyId": "scr-scr125wg",
    "label": "SCR125WG-10",
    "distinguishingAttributes": {
      "équipement": "SCR125WG-10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 13000
    }
  ],
  "powerKw": 90,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr125wg-10-technical-20261116-reviews.svg",
    "alt": "Repères techniques : SCR SCR125WG-10",
    "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/57.html",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR125WG-10",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "13 000 L/min",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "90 kW",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Le SCR125WG-10 est le groupe 90 kW déclaré à 13 m³/min à 10 bar, contre 16 à 7 bar dans la même série. La note technique relie les capacités à GB3853, équivalent ISO1217 annexe C, sous 380 V/50 Hz triphasé. La GPM2 est une autre série. La plage recommandée de capacité 60–100 % n’est pas un taux de marche et aucun volume de cuve n’est déduit.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 13 000 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-57-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/57.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 48777369a52d7eb304d60ba9a0e3791f78ea65a94c53d23a110659f6ab4d1e46 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-reviews:scr-scr125wg-10:0",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/57.html",
      "sourceLabel": "SCR, document constructeur relu le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le SCR125WG-10 est le groupe 90 kW déclaré à 13 m³/min à 10 bar, contre 16 à 7 bar dans la même série. La note technique relie les capacités à GB3853, équivalent ISO1217 annexe C, sous 380 V/50 Hz triphasé. La GPM2 est une autre série. La plage recommandée de capacité 60–100 % n’est pas un taux de marche et aucun volume de cuve n’est déduit. GET complet SHA-256 48777369a52d7eb304d60ba9a0e3791f78ea65a94c53d23a110659f6ab4d1e46. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-scr-57-p1"
    ],
    "model": [
      "october4c-scr-57-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-57-p1"
    ],
    "fadCurve": [
      "october4c-scr-57-p1"
    ],
    "powerKw": [
      "october4c-scr-57-p1"
    ],
    "oilType": [
      "october4c-scr-57-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
