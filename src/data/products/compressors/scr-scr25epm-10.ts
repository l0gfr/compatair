const product = {
  "id": "scr-scr25epm-10",
  "slug": "scr-scr25epm-10",
  "brand": "SCR",
  "model": "SCR25EPM-10",
  "variant": {
    "familyId": "scr-scr25epm",
    "label": "SCR25EPM-10",
    "distinguishingAttributes": {
      "équipement": "SCR25EPM-10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 2900
    }
  ],
  "powerKw": 18.5,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr25epm-10.svg",
    "alt": "Repères techniques : SCR SCR25EPM-10",
    "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/61.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR25EPM-10",
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
      "label": "FAD maximal déclaré à 10 bar",
      "value": "2 900 L/min",
      "evidenceIds": [
        "october4c-scr-61-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 10 bar",
      "value": "1 000 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-scr-61-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
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
    }
  ],
  "editorial": {
    "overview": "SCR SCR25EPM-10. 2 900 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : SCR25EPM-10.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 900 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
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
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-scr-61-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-61-p1"
    ],
    "fadCurve": [
      "october4c-scr-61-p1"
    ],
    "powerKw": [
      "october4c-scr-61-p1"
    ],
    "oilType": [
      "october4c-scr-61-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
