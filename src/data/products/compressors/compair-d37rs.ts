import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "compair-d37rs",
  "slug": "compair-d37rs",
  "brand": "CompAir",
  "model": "D37RS",
  "variant": {
    "familyId": "compair-d37rs",
    "label": "D37RS",
    "distinguishingAttributes": {
      "équipement": "D37RS",
      "pressionDeConfiguration": "8,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.5,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8.5,
      "litersPerMinute": 5100
    }
  ],
  "powerKw": 37,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/compair-d37rs.svg",
    "alt": "Repères techniques : CompAir D37RS",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "D37RS",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8,5 bar",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Air livré à 8,5 bar",
      "value": "5 100 L/min",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-compair-d37-75-p11"
      ]
    },
    {
      "label": "Régulation",
      "value": "RS, vitesse régulée",
      "evidenceIds": [
        "compair-d37rs-reserved-20261103-1"
      ]
    },
    {
      "label": "FAD àpression nominale8,5 bar",
      "value": "5,1 m³/min",
      "evidenceIds": [
        "compair-d37rs-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance moteur",
      "value": "37 kW",
      "evidenceIds": [
        "compair-d37rs-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "2 080 × 1 115 × 2 070 mm",
      "evidenceIds": [
        "compair-d37rs-reserved-20261103-1"
      ]
    },
    {
      "label": "Masses selon refroidissement",
      "value": "Air1 579 kg ; eau1 624 kg",
      "evidenceIds": [
        "compair-d37rs-reserved-20261103-1"
      ]
    },
    {
      "label": "Conditions de mesure",
      "value": "ISO 1217 édition4 annexesC/E ; entrée1 bar absolu,20 °C, humidité0%",
      "evidenceIds": [
        "compair-d37rs-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "CompAir D37RS. La D37RS publie5,1 m³/min à8,5 bar pour les deux refroidissements. La D37 fixe annonce5,1 par air et 5,2 par eau ; sa masse et son encombrement sont différents. Choisir refroidissement et régulation avant d’attribuer une masse au groupe.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 5 100 L/min déclarés à 8,5 bar.",
      "Régulation : RS, vitesse régulée.",
      "FAD àpression nominale8,5 bar : 5,1 m³/min.",
      "Puissance moteur : 37 kW.",
      "Dimensions L×W×H : 2 080 × 1 115 × 2 070 mm.",
      "Masses selon refroidissement : Air1 579 kg ; eau1 624 kg.",
      "Conditions de mesure : ISO 1217 édition4 annexesC/E ; entrée1 bar absolu,20 °C, humidité0%."
    ],
    "limitations": [
      "Débit nominal publié pour la version régulée ; le cycle de service reste non qualifié.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-compair-d37-75-p11",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf#page=11",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-compair-d37-75-p1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf#page=1",
      "sourceLabel": "CompAir, documentation constructeur, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "compair-d37rs-reserved-20261103-1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta76611689adb5848/blte7fea97cc5d50fc3/67ef980e3c659585a8e56a5b/D_SERIES_37_75_12PP_EN.pdf#page=11",
      "sourceLabel": "CompAir : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f. La D37RS publie5,1 m³/min à8,5 bar pour les deux refroidissements. La D37 fixe annonce5,1 par air et 5,2 par eau ; sa masse et son encombrement sont différents. Choisir refroidissement et régulation avant d’attribuer une masse au groupe."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-compair-d37-75-p11"
    ],
    "model": [
      "october4c-compair-d37-75-p11"
    ],
    "maxPressureBar": [
      "october4c-compair-d37-75-p11"
    ],
    "fadCurve": [
      "october4c-compair-d37-75-p11"
    ],
    "powerKw": [
      "compair-d37rs-reserved-20261103-1"
    ],
    "oilType": [
      "october4c-compair-d37-75-p1"
    ],
    "editorial": [
      "compair-d37rs-reserved-20261103-1"
    ],
    "specifications": [
      "compair-d37rs-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
