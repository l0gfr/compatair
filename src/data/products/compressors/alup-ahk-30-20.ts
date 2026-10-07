import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "alup-ahk-30-20",
  "slug": "alup-ahk-30-20",
  "brand": "ALUP",
  "model": "AHK-30-20",
  "variant": {
    "familyId": "alup-ahk-20",
    "label": "AHK-30-20",
    "distinguishingAttributes": {
      "équipement": "AHK-30-20",
      "pressionDeConfiguration": "30 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 30,
  "fadCurve": [
    {
      "pressureBar": 30,
      "litersPerMinute": 1020
    }
  ],
  "powerKw": 15,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/alup-ahk-30-20.svg",
    "alt": "Repères techniques : ALUP AHK-30-20",
    "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/piston-compressors/industrial-piston-compressors/agk-afk--ahk/leaflets/Alup_AGK%20AFK%20AHK_ENG_6999640611_Lowres_singlepages.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "AHK-30-20",
      "evidenceIds": [
        "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "30 bar",
      "evidenceIds": [
        "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
      ]
    },
    {
      "label": "Air livré à 30 bar",
      "value": "1 020 L/min",
      "evidenceIds": [
        "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "15 kW",
      "evidenceIds": [
        "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
      ]
    }
  ],
  "editorial": {
    "overview": "ALUP AHK-30-20. 1 020 L/min déclarés à 30 bar. Configuration constructeur : AHK-30-20.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 30 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 020 L/min déclarés à 30 bar."
    ],
    "limitations": [
      "FAD associé à la pression de travail de cette ligne constructeur ; variantes AHK de pression 15/20/30 bar regroupées par puissance.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7",
      "sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/piston-compressors/industrial-piston-compressors/agk-afk--ahk/leaflets/Alup_AGK%20AFK%20AHK_ENG_6999640611_Lowres_singlepages.pdf#page=7",
      "sourceLabel": "ALUP, documentation constructeur, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 fb873d3a32beb4a077884d39a66e3e4bbb42a8f2a265a55fd9ece7304dd4aa03 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
    ],
    "maxPressureBar": [
      "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
    ],
    "fadCurve": [
      "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
    ],
    "powerKw": [
      "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
    ],
    "oilType": [
      "october4c-alup-alup-agk-20afk-20ahk-eng-6999640611-lowres-singlepages-p7"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
