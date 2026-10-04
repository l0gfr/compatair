const product = {
  "id": "scr-scr30apm-16",
  "slug": "scr-scr30apm-16",
  "brand": "SCR",
  "model": "SCR30APM-16",
  "variant": {
    "familyId": "scr-scr30apm",
    "label": "SCR30APM-16",
    "distinguishingAttributes": {
      "équipement": "SCR30APM-16",
      "pressionDeConfiguration": "16 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 16,
  "fadCurve": [
    {
      "pressureBar": 16,
      "litersPerMinute": 1800
    }
  ],
  "powerKw": 22,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr30apm-16.svg",
    "alt": "Repères techniques : SCR SCR30APM-16",
    "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/59.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR30APM-16",
      "evidenceIds": [
        "october4c-scr-59-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "16 bar",
      "evidenceIds": [
        "october4c-scr-59-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-59-p1"
      ]
    },
    {
      "label": "FAD maximal déclaré à 16 bar",
      "value": "1 800 L/min",
      "evidenceIds": [
        "october4c-scr-59-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 16 bar",
      "value": "850 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-scr-59-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4c-scr-59-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-scr-59-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "SCR SCR30APM-16. 1 800 L/min déclarés à 16 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : SCR30APM-16.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 16 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 800 L/min déclarés à 16 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
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
      "id": "october4c-scr-59-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/pm_screw_compressor/59.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 a62f53f2a9a024efab7183c6053e620439a81162ab801a7efa11efcf46bf6ddf de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-scr-59-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-59-p1"
    ],
    "fadCurve": [
      "october4c-scr-59-p1"
    ],
    "powerKw": [
      "october4c-scr-59-p1"
    ],
    "oilType": [
      "october4c-scr-59-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
