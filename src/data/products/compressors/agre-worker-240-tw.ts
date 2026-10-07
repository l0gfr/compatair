import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "agre-worker-240-tw",
  "slug": "agre-worker-240-tw",
  "brand": "AGRE",
  "model": "WORKER 240 TW",
  "mpn": "4116021582",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "agre-worker-240-tw",
    "label": "WORKER 240 TW",
    "distinguishingAttributes": {
      "équipement": "WORKER 240 TW",
      "pressionDeConfiguration": "8 bar",
      "cuve": "6 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 6,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 6,
      "litersPerMinute": 144
    }
  ],
  "oilType": "unknown",
  "powerKw": 1.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/agre-worker-240-tw.svg",
    "alt": "Repères techniques : AGRE WORKER 240 TW",
    "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "AGRE WORKER 240 TW. 144 L/min déclarés à 6 bar. Configuration constructeur : WORKER 240 TW.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 6 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 144 L/min déclarés à 6 bar."
    ],
    "limitations": [
      "Le catalogue distingue débit livré (Liefermenge), volume aspiré (Hubvolumen) et débit de remplissage (Füllleistung). La courbe CompatAir reprend uniquement la colonne Liefermenge à la pression explicite de la note.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "WORKER 240 TW",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p44"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p44"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "6 L",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p44"
      ]
    },
    {
      "label": "Air livré à 6 bar",
      "value": "144 L/min",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p44"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "1,5 kW",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p44"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p44"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-agre-piston-portfolio-p44",
      "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf#page=44",
      "sourceLabel": "AGRE, Kolbenkompressoren Portfolio, gammes BOSS et WORKER, page PDF 44",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 04774dd3a9dddf3b99389a7243f5068eda3e456d3e63c736157723a0df12ee67 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-agre-piston-portfolio-p44"
    ],
    "maxPressureBar": [
      "october5-agre-piston-portfolio-p44"
    ],
    "tankLiters": [
      "october5-agre-piston-portfolio-p44"
    ],
    "fadCurve": [
      "october5-agre-piston-portfolio-p44"
    ],
    "powerKw": [
      "october5-agre-piston-portfolio-p44"
    ],
    "mpn": [
      "october5-agre-piston-portfolio-p44"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
