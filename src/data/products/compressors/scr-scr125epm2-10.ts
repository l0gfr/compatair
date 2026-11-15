import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "scr-scr125epm2-10",
  "slug": "scr-scr125epm2-10",
  "brand": "SCR",
  "model": "SCR125EPM2-10",
  "variant": {
    "familyId": "scr-scr125epm2",
    "label": "SCR125EPM2-10",
    "distinguishingAttributes": {
      "équipement": "SCR125EPM2-10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "powerKw": 90,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr125epm2-10-technical-20261115-followup.svg",
    "alt": "Repères techniques : SCR SCR125EPM2-10",
    "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/61.html",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR125EPM2-10",
      "evidenceIds": [
        "october4c-scr-61-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-scr-61-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-61-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "90 kW",
      "evidenceIds": [
        "october4c-scr-61-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-scr-61-p1"
      ]
    },
    {
      "label": "Capacité documentaire",
      "value": "4,0–16,5 m³/min ; ligne10 bar",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr125epm2-10:0"
      ]
    },
    {
      "label": "Dimensions et masse",
      "value": "2280 × 1500 × 1950 mm ;2050 kg",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr125epm2-10:0"
      ]
    },
    {
      "label": "Raccord de sortie",
      "value": "DN65",
      "evidenceIds": [
        "review:2026-11-12-technical:scr-scr125epm2-10:0"
      ]
    }
  ],
  "editorial": {
    "overview": "Le SCR125EPM2-10 est le groupe90 kW de la table EPM2, avec plage de capacité4–16,5 m³/min à la ligne10 bar. Le régime et les conditions permettant d’assimiler cette capacité à un FAD exploitable manquent dans cette fiche ; la plage reste documentaire.",
    "verifiedFacts": [
      "Puissance moteur publiée :90 kW.",
      "Capacité documentaire : 4,0–16,5 m³/min ; ligne10 bar.",
      "Dimensions et masse : 2280 × 1500 × 1950 mm ;2050 kg.",
      "Raccord de sortie : DN65."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.",
      "Le tableau Capacity ne suffit pas à établir ici les conditions de référence FAD. La demande continue reste indéterminée."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-61-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/61.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 1f1c4450eaf9248adc2b2a9eace76ee7d7d5bfcb52b7fc3bd6c8c4cea9f9bfb8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-12-technical:scr-scr125epm2-10:0",
      "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/61.html",
      "sourceLabel": "SCR, fiche fabricant relue",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-12",
      "confidence": "B",
      "notes": "Le SCR125EPM2-10 est le groupe90 kW de la table EPM2, avec plage de capacité4–16,5 m³/min à la ligne10 bar. Le régime et les conditions permettant d’assimiler cette capacité à un FAD exploitable manquent dans cette fiche ; la plage reste documentaire. GET complet : SHA-256 1f1c4450eaf9248adc2b2a9eace76ee7d7d5bfcb52b7fc3bd6c8c4cea9f9bfb8. Historique conservé."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-scr-61-p1"
    ],
    "model": [
      "october4c-scr-61-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-61-p1"
    ],
    "powerKw": [
      "october4c-scr-61-p1"
    ],
    "oilType": [
      "october4c-scr-61-p1"
    ],
    "fadCurve": [
      "review:2026-11-12-technical:scr-scr125epm2-10:0"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
