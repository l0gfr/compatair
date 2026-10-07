import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "alup-evoluto-111",
  "slug": "alup-evoluto-111",
  "brand": "ALUP",
  "model": "EVOLUTO 111",
  "variant": {
    "familyId": "alup-evoluto-111",
    "label": "EVOLUTO 111",
    "distinguishingAttributes": {
      "équipement": "EVOLUTO 111",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 20083.333
    }
  ],
  "powerKw": 110,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-evoluto-111.svg",
    "alt": "Repères techniques : ALUP EVOLUTO 111",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-111-160-(2020)/leaflets/Alup_Largo-Allegro-Evoluto_111-160_EN_6999640511_LR_V2.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EVOLUTO 111",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
      ]
    },
    {
      "label": "FAD maximal déclaré à 10 bar",
      "value": "20 083,333 L/min",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "110 kW",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP EVOLUTO 111. 20 083,333 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : EVOLUTO 111.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 20 083,333 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "FAD maximal explicitement publié à 10 bar pour la configuration refroidie par air ; absence de qualification du cycle de service.",
      "Débit maximal à 10 bar ; régime de rotation non publié, capacité minimale à cette pression non garantie.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-111-160-(2020)/leaflets/Alup_Largo-Allegro-Evoluto_111-160_EN_6999640511_LR_V2.pdf#page=6",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 6",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 2a3e705d753992019074153c9c9922dd4f0eaead6339f248fa598ba9f970734d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p1",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-111-160-(2020)/leaflets/Alup_Largo-Allegro-Evoluto_111-160_EN_6999640511_LR_V2.pdf#page=1",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 2a3e705d753992019074153c9c9922dd4f0eaead6339f248fa598ba9f970734d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
    ],
    "fadCurve": [
      "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
    ],
    "powerKw": [
      "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p6"
    ],
    "oilType": [
      "october4c-alup-alup-largo-allegro-evoluto-111-160-en-6999640511-lr-v2-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
