const product = {
  "id": "scr-scr90epm2",
  "slug": "scr-scr90epm2",
  "brand": "SCR",
  "model": "SCR90EPM2-10",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "scr-scr90epm2",
    "label": "SCR90EPM2-10",
    "distinguishingAttributes": {
      "équipement": "SCR90EPM2-10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 12000
    }
  ],
  "oilType": "oil",
  "powerKw": 63,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr90epm2.svg",
    "alt": "Repères techniques : SCR SCR90EPM2-10",
    "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/61.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "SCR SCR90EPM2-10. 12 000 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : SCR90EPM2-10.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 12 000 L/min déclarés à 10 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "FAD maximal de la plage documentée à cette pression, minimum de régulation publié séparément. Aucune interpolation de vitesse ni maximum à une autre pression.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR90EPM2-10",
      "evidenceIds": [
        "october5-scr-61-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october5-scr-61-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-scr-61-p1"
      ]
    },
    {
      "label": "FAD maximal déclaré à 10 bar",
      "value": "12 000 L/min",
      "evidenceIds": [
        "october5-scr-61-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 10 bar",
      "value": "3 200 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-scr-61-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "63 kW",
      "evidenceIds": [
        "october5-scr-61-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-scr-61-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-scr-61-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/61.html",
      "sourceLabel": "SCR, documentation constructeur de la gamme EPM2, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 1f1c4450eaf9248adc2b2a9eace76ee7d7d5bfcb52b7fc3bd6c8c4cea9f9bfb8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-scr-61-p1"
    ],
    "maxPressureBar": [
      "october5-scr-61-p1"
    ],
    "fadCurve": [
      "october5-scr-61-p1"
    ],
    "powerKw": [
      "october5-scr-61-p1"
    ],
    "oilType": [
      "october5-scr-61-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
