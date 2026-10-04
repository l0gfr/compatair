const product = {
  "id": "scr-scr2200lhpm",
  "slug": "scr-scr2200lhpm",
  "brand": "SCR",
  "model": "SCR2200LHPM",
  "variant": {
    "familyId": "scr-scr2200lhpm",
    "label": "SCR2200LHPM",
    "distinguishingAttributes": {
      "équipement": "SCR2200LHPM",
      "pressionDeConfiguration": "4,5 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 4.5,
  "fadCurve": [
    {
      "pressureBar": 4.5,
      "litersPerMinute": 62000
    }
  ],
  "powerKw": 250,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr2200lhpm.svg",
    "alt": "Repères techniques : SCR SCR2200LHPM",
    "sourceUrl": "https://www.scrcompressor.com/en/products/low_pressure_screw_compressor/111.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR2200LHPM",
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
      "label": "FAD maximal déclaré à 4,5 bar",
      "value": "62 000 L/min",
      "evidenceIds": [
        "october4c-scr-111-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 4,5 bar",
      "value": "18 600 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-scr-111-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "250 kW",
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
    }
  ],
  "editorial": {
    "overview": "SCR SCR2200LHPM. 62 000 L/min déclarés à 4,5 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : SCR2200LHPM.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 4,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 62 000 L/min déclarés à 4,5 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
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
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-scr-111-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-111-p1"
    ],
    "fadCurve": [
      "october4c-scr-111-p1"
    ],
    "powerKw": [
      "october4c-scr-111-p1"
    ],
    "oilType": [
      "october4c-scr-111-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
