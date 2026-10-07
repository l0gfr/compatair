import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "agre-boss-6002",
  "slug": "agre-boss-6002",
  "brand": "AGRE",
  "model": "BOSS 6002",
  "mpn": "RGA5235262",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "agre-boss-6002",
    "label": "BOSS 6002",
    "distinguishingAttributes": {
      "équipement": "BOSS 6002",
      "pressionDeConfiguration": "10 bar",
      "cuve": "90 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 90,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 302
    }
  ],
  "oilType": "unknown",
  "powerKw": 2.2,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/agre-boss-6002.svg",
    "alt": "Repères techniques : AGRE BOSS 6002",
    "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "AGRE BOSS 6002. 302 L/min déclarés à 8 bar. Configuration constructeur : BOSS 6002.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 90 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 302 L/min déclarés à 8 bar."
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
      "value": "BOSS 6002",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p23"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p23"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "90 L",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p23"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "302 L/min",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p23"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p23"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p23"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-agre-piston-portfolio-p23",
      "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf#page=23",
      "sourceLabel": "AGRE, Kolbenkompressoren Portfolio, gammes BOSS et WORKER, page PDF 23",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 04774dd3a9dddf3b99389a7243f5068eda3e456d3e63c736157723a0df12ee67 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-agre-piston-portfolio-p23"
    ],
    "maxPressureBar": [
      "october5-agre-piston-portfolio-p23"
    ],
    "tankLiters": [
      "october5-agre-piston-portfolio-p23"
    ],
    "fadCurve": [
      "october5-agre-piston-portfolio-p23"
    ],
    "powerKw": [
      "october5-agre-piston-portfolio-p23"
    ],
    "mpn": [
      "october5-agre-piston-portfolio-p23"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
