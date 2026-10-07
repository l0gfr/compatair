import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "scr-scr5xa-8-10",
  "slug": "scr-scr5xa-8-10",
  "brand": "SCR",
  "model": "SCR5XA-8/10",
  "variant": {
    "familyId": "scr-scr5xa",
    "label": "SCR5XA-8/10",
    "distinguishingAttributes": {
      "équipement": "SCR5XA-8/10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "50 L"
    }
  },
  "tankLiters": 50,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 350
    }
  ],
  "powerKw": 3.7,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr5xa-8-10.svg",
    "alt": "Repères techniques : SCR SCR5XA-8/10",
    "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/58.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR5XA-8/10",
      "evidenceIds": [
        "october4c-scr-58-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-scr-58-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "50 L",
      "evidenceIds": [
        "october4c-scr-58-p1"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "350 L/min",
      "evidenceIds": [
        "october4c-scr-58-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "3,7 kW",
      "evidenceIds": [
        "october4c-scr-58-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-scr-58-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "SCR SCR5XA-8/10. 350 L/min déclarés à 10 bar. Configuration constructeur : SCR5XA-8/10.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 50 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 350 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Pression 10 bar choisie parmi les configurations 8/10 bar publiées. Cycle de service et fréquence non documentés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-58-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/58.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 8b9140606e8749eaef7a92f2f446ea8b20b1ace97a3b5059e2011e6a66712b03 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-scr-58-p1"
    ],
    "model": [
      "october4c-scr-58-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-58-p1"
    ],
    "tankLiters": [
      "october4c-scr-58-p1"
    ],
    "fadCurve": [
      "october4c-scr-58-p1"
    ],
    "powerKw": [
      "october4c-scr-58-p1"
    ],
    "oilType": [
      "october4c-scr-58-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
