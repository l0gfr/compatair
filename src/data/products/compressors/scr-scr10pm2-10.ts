const product = {
  "id": "scr-scr10pm2-10",
  "slug": "scr-scr10pm2-10",
  "brand": "SCR",
  "model": "SCR10PM2-10",
  "variant": {
    "familyId": "scr-scr10pm2",
    "label": "SCR10PM2-10",
    "distinguishingAttributes": {
      "équipement": "SCR10PM2-10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 950
    }
  ],
  "powerKw": 7.5,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr10pm2-10.svg",
    "alt": "Repères techniques : SCR SCR10PM2-10",
    "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/63.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR10PM2-10",
      "evidenceIds": [
        "october4c-scr-63-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-scr-63-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-63-p1"
      ]
    },
    {
      "label": "FAD maximal déclaré à 10 bar",
      "value": "950 L/min",
      "evidenceIds": [
        "october4c-scr-63-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 10 bar",
      "value": "570 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-scr-63-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
      "evidenceIds": [
        "october4c-scr-63-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-scr-63-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "SCR SCR10PM2-10. 950 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : SCR10PM2-10.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 950 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-63-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/63.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 726c5c42c09cd651ea69b4a8ded1f5b0e8d8fcf90b5b2b8e5c261209596d5a7e de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-scr-63-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-63-p1"
    ],
    "fadCurve": [
      "october4c-scr-63-p1"
    ],
    "powerKw": [
      "october4c-scr-63-p1"
    ],
    "oilType": [
      "october4c-scr-63-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
