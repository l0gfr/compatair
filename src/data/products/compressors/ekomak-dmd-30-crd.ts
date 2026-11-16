import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-dmd-30-crd",
  "slug": "ekomak-dmd-30-crd",
  "brand": "Ekomak",
  "model": "DMD 30 CRD",
  "variant": {
    "familyId": "ekomak-dmd-30-crd",
    "label": "DMD 30 CRD",
    "distinguishingAttributes": {
      "équipement": "DMD 30 CRD",
      "pressionDeConfiguration": "10 bar",
      "cuve": "270 L"
    }
  },
  "tankLiters": 270,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 320
    }
  ],
  "powerKw": 2.2,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-dmd-30-crd-technical-20261116-followup.svg",
    "alt": "Repères techniques : Ekomak DMD 30 CRD",
    "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/fixed-speed/dmd-30-400/Ekomak%20DMD%2030-75%20Sales%20Leaflet%206999970220%20EN%20LR.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DMD 30 CRD",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "270 L",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "320 L/min",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-dmd-leaflet-1-p3"
      ]
    }
  ],
  "editorial": {
    "overview": "Le DMD 30 CRD associe le groupe 2,2 kW, la cuve 270 L et le sécheur : 190 kg pour 600 × 1 430 × 1 260 mm. Le DMD 30 CR sans sécheur pèse 165 kg ; le C seul, 110 kg. Les 0,32 m³/min du tableau à 10 bar sont conservés. La déclaration de cycle de l’élément de compression ne qualifie pas le taux de marche du groupe complet.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 270 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 320 L/min déclarés à 10 bar."
    ],
    "limitations": [
      "Configuration C, CR ou CRD conservée conformément à la référence constructeur ; fréquence électrique non documentée.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "La mention de service continu concerne une gamme ou un élément de compression ; le taux de marche du groupe complet n’est pas quantifié."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-dmd-leaflet-1-p3",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/fixed-speed/dmd-30-400/Ekomak%20DMD%2030-75%20Sales%20Leaflet%206999970220%20EN%20LR.pdf#page=3",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 fd54c02e168a7e0a604263b5b075e20280c649b5647ec0210fed527225764387 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-ekomak-dmd-leaflet-1-p1",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/fixed-speed/dmd-30-400/Ekomak%20DMD%2030-75%20Sales%20Leaflet%206999970220%20EN%20LR.pdf#page=1",
      "sourceLabel": "Ekomak, fiche constructeur officielle, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 fd54c02e168a7e0a604263b5b075e20280c649b5647ec0210fed527225764387 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-technical:ekomak-dmd-30-crd:0",
      "sourceUrl": "https://www.ekomak.com/content/dam/brands/ekomak/products-bp-structure/oil-injected-screw-compressor/fixed-speed/dmd-30-400/Ekomak%20DMD%2030-75%20Sales%20Leaflet%206999970220%20EN%20LR.pdf",
      "sourceLabel": "Ekomak, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le DMD 30 CRD associe le groupe 2,2 kW, la cuve 270 L et le sécheur : 190 kg pour 600 × 1 430 × 1 260 mm. Le DMD 30 CR sans sécheur pèse 165 kg ; le C seul, 110 kg. Les 0,32 m³/min du tableau à 10 bar sont conservés. La déclaration de cycle de l’élément de compression ne qualifie pas le taux de marche du groupe complet. GET complet SHA-256 fd54c02e168a7e0a604263b5b075e20280c649b5647ec0210fed527225764387. Pages PDF lues : 1, 3."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "model": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "maxPressureBar": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "tankLiters": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "fadCurve": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "powerKw": [
      "october4c-ekomak-dmd-leaflet-1-p3"
    ],
    "oilType": [
      "october4c-ekomak-dmd-leaflet-1-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
