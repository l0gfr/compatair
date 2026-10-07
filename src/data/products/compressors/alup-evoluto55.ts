import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "alup-evoluto55",
  "slug": "alup-evoluto55",
  "brand": "ALUP",
  "model": "EVOLUTO55",
  "variant": {
    "familyId": "alup-evoluto55",
    "label": "EVOLUTO55",
    "distinguishingAttributes": {
      "équipement": "EVOLUTO55",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 10950
    }
  ],
  "powerKw": 55,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-evoluto55.svg",
    "alt": "Repères techniques : ALUP EVOLUTO55",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-55-90-(2024)/leaflets/Lagro55-90%20KW%20%20Allegretto%2055-90%20Evoluto%2045-90%20KW.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EVOLUTO55",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    },
    {
      "label": "Pression maximale publiée",
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
      "label": "FAD maximal déclaré à 7 bar",
      "value": "10 950 L/min",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10",
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p3"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "1 700 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10",
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "55 kW",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-lagro55-90-20kw-20-20allegretto-2055-90-20evoluto-2045-90-20kw-p10"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP EVOLUTO55. 10 950 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : EVOLUTO55.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 10 950 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
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
