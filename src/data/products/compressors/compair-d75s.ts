import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-d75s",
  "slug": "compair-d75s",
  "brand": "CompAir",
  "model": "D75s",
  "variant": {
    "familyId": "compair-d75s",
    "label": "D75s",
    "distinguishingAttributes": {
      "équipement": "D75s",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 10700
    }
  ],
  "powerKw": 75,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-d75s.svg",
    "alt": "Repères techniques : CompAir D75s",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "D75s",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "10 700 L/min",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "75 kW",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir D75s. 10 700 L/min déclarés à 10 bar. Configuration constructeur : D75s.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 10 700 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Refroidissement par air, conforme à la ligne constructeur retenue.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-compair-d37-75-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-d37-75-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf#page=1",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-compair-d37-75-p11"
    ],
    "model": [
      "october4c-compair-d37-75-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-d37-75-p11"
    ],
    "fadCurve": [
      "october4c-compair-d37-75-p11"
    ],
    "powerKw": [
      "october4c-compair-d37-75-p11"
    ],
    "oilType": [
      "october4c-compair-d37-75-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
