import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "scr-scr1200lhpm",
  "slug": "scr-scr1200lhpm",
  "brand": "SCR",
  "model": "SCR1200LHPM",
  "variant": {
    "familyId": "scr-scr1200lhpm",
    "label": "SCR1200LHPM",
    "distinguishingAttributes": {
      "équipement": "SCR1200LHPM",
      "pressionDeConfiguration": "4,5 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 4.5,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "powerKw": 132,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr1200lhpm-technical-20261115-followup.svg",
    "alt": "Repères techniques : SCR SCR1200LHPM",
    "sourceUrl": "https://www.scrcompressor.com/en/products/low_pressure_screw_compressor/111.html",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR1200LHPM",
      "evidenceIds": [
        "october4c-scr-111-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "4,5 bar",
      "evidenceIds": [
        "october4c-scr-111-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-111-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "132 kW",
      "evidenceIds": [
        "october4c-scr-111-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-scr-111-p1"
      ]
    },
    {
      "label": "Capacité documentaire",
      "value": "10,2–34,2 m³/min ; tableau4,5/5,5 bar, appariement exact à confirmer",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr1200lhpm:0"
      ]
    },
    {
      "label": "Dimensions et masse",
      "value": "3000 × 2050 × 2100 mm ;4300 kg",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr1200lhpm:0"
      ]
    },
    {
      "label": "Alimentation standard publiée",
      "value": "380 V /50 Hz /3 phases",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr1200lhpm:0"
      ]
    },
    {
      "label": "Raccord de sortie",
      "value": "DN125",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr1200lhpm:0"
      ]
    },
    {
      "label": "Méthode déclarée",
      "value": "GB3853, équivalent ISO1217 annexe C ; plage recommandée60–100 % de capacité, distincte d’un taux de marche",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr1200lhpm:0"
      ]
    }
  ],
  "editorial": {
    "overview": "Le SCR1200LHPM est un groupe basse pression à moteur permanent132 kW,3000 × 2050 × 2100 mm et4300 kg. La table associe une plage de capacité10,2–34,2 m³/min à des lignes4,5/5,5 bar, sans point de mesure distinct établi pour chaque pression. Cette plage reste documentaire.",
    "verifiedFacts": [
      "Puissance moteur publiée :132 kW.",
      "Capacité documentaire : 10,2–34,2 m³/min ; tableau4,5/5,5 bar, appariement exact à confirmer.",
      "Dimensions et masse : 3000 × 2050 × 2100 mm ;4300 kg.",
      "Alimentation standard publiée : 380 V /50 Hz /3 phases.",
      "Raccord de sortie : DN125.",
      "Méthode déclarée : GB3853, équivalent ISO1217 annexe C ; plage recommandée60–100 % de capacité, distincte d’un taux de marche."
    ],
    "limitations": [
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "Les deux pressions partagent une plage de capacité. Aucun couple débit/pression de mesure exact n’est arbitré."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-111-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/low_pressure_screw_compressor/111.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 e86e787c4d97a637bd79e4cf3dfa3e90d907e3e463754133dce234111e9538ea de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-12-technical:scr-scr1200lhpm:0",
      "sourceUrl": "https://www.scrcompressor.com/en/products/low_pressure_screw_compressor/111.html",
      "sourceLabel": "SCR, fiche fabricant relue",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-12",
      "confidence": "B",
      "notes": "Le SCR1200LHPM est un groupe basse pression à moteur permanent132 kW,3000 × 2050 × 2100 mm et4300 kg. La table associe une plage de capacité10,2–34,2 m³/min à des lignes4,5/5,5 bar, sans point de mesure distinct établi pour chaque pression. Cette plage reste documentaire. GET complet : SHA-256 e86e787c4d97a637bd79e4cf3dfa3e90d907e3e463754133dce234111e9538ea. Historique conservé."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-scr-111-p1"
    ],
    "model": [
      "october4c-scr-111-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-111-p1"
    ],
    "powerKw": [
      "october4c-scr-111-p1"
    ],
    "oilType": [
      "october4c-scr-111-p1"
    ],
    "fadCurve": [
      "review:2026-11-12-technical:scr-scr1200lhpm:0"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
