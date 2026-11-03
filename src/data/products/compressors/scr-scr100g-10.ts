import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "scr-scr100g-10",
  "slug": "scr-scr100g-10",
  "brand": "SCR",
  "model": "SCR100G-10",
  "variant": {
    "familyId": "scr-scr100g",
    "label": "SCR100G-10",
    "distinguishingAttributes": {
      "équipement": "SCR100G-10",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 10700
    }
  ],
  "powerKw": 75,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/scr-scr100g-10.svg",
    "alt": "Repères techniques : SCR SCR100G-10",
    "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/57.html",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "SCR100G-10",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "10 700 L/min",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "75 kW",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-scr-57-p1"
      ]
    },
    {
      "label": "Configuration",
      "value": "SCR100G-10, groupe sec sans huile sérieG",
      "evidenceIds": [
        "scr-scr100g-10-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité à10 bar",
      "value": "10,7 m³/min",
      "evidenceIds": [
        "scr-scr100g-10-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance de la ligne",
      "value": "75 kW /100 HP",
      "evidenceIds": [
        "scr-scr100g-10-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "2 380 × 1 580 × 1 880 mm",
      "evidenceIds": [
        "scr-scr100g-10-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse de la ligne",
      "value": "2 800 kg",
      "evidenceIds": [
        "scr-scr100g-10-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation standard publiée",
      "value": "380V/50 Hz/3phases",
      "evidenceIds": [
        "scr-scr100g-10-reserved-20261103-1"
      ]
    },
    {
      "label": "Mesure déclarée",
      "value": "GB3853, équivalent ISO 1217 annexe C",
      "evidenceIds": [
        "scr-scr100g-10-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "SCR SCR100G-10. La SCR100G-10 est la version G de 75 kW annoncée à10,7 m³/min à10 bar. La ligne SCR100G-8 annonce12 m³/min à8 bar ; ces points appartiennent à des configurations de pression distinctes. La GPM2 est une autre régulation et ne remplace pas ce groupe.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 10 700 L/min déclarés à 10 bar.",
      "Configuration : SCR100G-10, groupe sec sans huile sérieG.",
      "Capacité à10 bar : 10,7 m³/min.",
      "Puissance de la ligne : 75 kW /100 HP.",
      "Dimensions L×W×H : 2 380 × 1 580 × 1 880 mm.",
      "Masse de la ligne : 2 800 kg.",
      "Alimentation standard publiée : 380V/50 Hz/3phases.",
      "Mesure déclarée : GB3853, équivalent ISO 1217 annexe C."
    ],
    "limitations": [
      "Cuve et cycle de service non documentés. Pressions et tensions variantes regroupées avant décompte.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-scr-57-p1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/57.html",
      "sourceLabel": "SCR, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 48777369a52d7eb304d60ba9a0e3791f78ea65a94c53d23a110659f6ab4d1e46 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "scr-scr100g-10-reserved-20261103-1",
      "sourceUrl": "https://www.scrcompressor.com/en/products/oil_free_compressor/57.html",
      "sourceLabel": "SCR : revue factuelle du 3 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 48777369a52d7eb304d60ba9a0e3791f78ea65a94c53d23a110659f6ab4d1e46. La SCR100G-10 est la version G de 75 kW annoncée à10,7 m³/min à10 bar. La ligne SCR100G-8 annonce12 m³/min à8 bar ; ces points appartiennent à des configurations de pression distinctes. La GPM2 est une autre régulation et ne remplace pas ce groupe."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-scr-57-p1"
    ],
    "model": [
      "october4c-scr-57-p1"
    ],
    "maxPressureBar": [
      "october4c-scr-57-p1"
    ],
    "fadCurve": [
      "october4c-scr-57-p1"
    ],
    "powerKw": [
      "scr-scr100g-10-reserved-20261103-1"
    ],
    "oilType": [
      "october4c-scr-57-p1"
    ],
    "weightKg": [
      "scr-scr100g-10-reserved-20261103-1"
    ],
    "voltage": [
      "scr-scr100g-10-reserved-20261103-1"
    ],
    "phase": [
      "scr-scr100g-10-reserved-20261103-1"
    ],
    "editorial": [
      "scr-scr100g-10-reserved-20261103-1"
    ],
    "specifications": [
      "scr-scr100g-10-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 2800,
  "voltage": "380 V / 50 Hz",
  "phase": "three-phase"
};
export default product;
