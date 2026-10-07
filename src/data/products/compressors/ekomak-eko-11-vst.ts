import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ekomak-eko-11-vst",
  "slug": "ekomak-eko-11-vst",
  "brand": "Ekomak",
  "model": "EKO 11 VST",
  "variant": {
    "familyId": "ekomak-eko-11-vst",
    "label": "EKO 11 VST",
    "distinguishingAttributes": {
      "équipement": "EKO 11 VST",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 1901.667
    }
  ],
  "dutyCycle": 1,
  "powerKw": 11,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ekomak-eko-11-vst.svg",
    "alt": "Repères techniques : Ekomak EKO 11 VST",
    "sourceUrl": "https://www.ekomak.com/en-global/products/screw-compressors/variable-speed/direct-drive-eko-8-22-vst",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EKO 11 VST",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "1 901,667 L/min",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "330 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "11 kW",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ekomak EKO 11 VST. 1 901,667 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : EKO 11 VST.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 901,667 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Point FAD retenu : maximum de la plage constructeur à cette pression. Le minimum est publié séparément ; aucun régime de rotation ni interpolation de vitesse n’est déduit.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1",
      "sourceUrl": "https://www.ekomak.com/en-global/products/screw-compressors/variable-speed/direct-drive-eko-8-22-vst",
      "sourceLabel": "Ekomak, fiche constructeur officielle, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 eff903ce2066d251bbd76e6b34d24cde470338864e897c2300ed6b322aa3563e de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
    ],
    "model": [
      "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
    ],
    "maxPressureBar": [
      "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
    ],
    "fadCurve": [
      "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
    ],
    "powerKw": [
      "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
    ],
    "dutyCycle": [
      "october4c-ekomak-page-direct-drive-eko-8-22-vst-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
