import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "alup-largo-90",
  "slug": "alup-largo-90",
  "brand": "ALUP",
  "model": "LARGO 90",
  "variant": {
    "familyId": "alup-largo-90",
    "label": "LARGO 90",
    "distinguishingAttributes": {
      "équipement": "LARGO 90",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.5,
      "litersPerMinute": 12666.667
    }
  ],
  "powerKw": 90,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-largo-90.svg",
    "alt": "Repères techniques : ALUP LARGO 90",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "LARGO 90",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    },
    {
      "label": "Air livré à 12,5 bar",
      "value": "12 666,667 L/min",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10",
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "90 kW",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP LARGO 90. 12 666,667 L/min déclarés à 12,5 bar. Configuration constructeur : LARGO 90.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 12 666,667 L/min déclarés à 12,5 bar."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf#page=10",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 10",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a70ec59ca4f8d37c0aeae5aba7281d78f2097015dfbeb7023dc24dac273def7a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p3",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf#page=3",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a70ec59ca4f8d37c0aeae5aba7281d78f2097015dfbeb7023dc24dac273def7a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p1",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf#page=1",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a70ec59ca4f8d37c0aeae5aba7281d78f2097015dfbeb7023dc24dac273def7a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
    ],
    "model": [
      "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
    ],
    "maxPressureBar": [
      "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
    ],
    "fadCurve": [
      "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10",
      "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p3"
    ],
    "powerKw": [
      "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
    ],
    "oilType": [
      "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
