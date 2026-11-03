import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "agre-boss-7004",
  "slug": "agre-boss-7004",
  "brand": "AGRE",
  "model": "BOSS 7004",
  "mpn": "RGA5199005",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "agre-boss-7004",
    "label": "BOSS 7004",
    "distinguishingAttributes": {
      "équipement": "BOSS 7004",
      "pressionDeConfiguration": "10 bar",
      "cuve": "200 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 200,
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 410
    }
  ],
  "oilType": "unknown",
  "powerKw": 3,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/agre-boss-7004.svg",
    "alt": "Repères techniques : AGRE BOSS 7004",
    "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "AGRE BOSS 7004. La BOSS 7002 D et la 7004 D partagent 410 L/min livrés à 8 bar, mais ont des cuves de 90 et 200 L et pèsent 94 et 121 kg. Le catalogue distingue 600 L/min de déplacement et 492 L/min de remplissage ; aucun de ces deux chiffres ne remplace le débit livré de 410.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 410 L/min déclarés à 8 bar.",
      "Configuration : BOSS 7004 D, cuve 200 L.",
      "Liefermenge à 8 bar : 410 L/min.",
      "Volume déplacé distinct : 600 L/min.",
      "Débit de remplissage distinct : 492 L/min.",
      "Puissance : 3 kW.",
      "Masse : 121 kg.",
      "Alimentation de la version D : 230/400 V / 3 phases / 50 Hz."
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
      "value": "BOSS 7004",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p25"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p25"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p25"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "410 L/min",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p25"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "3 kW",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p25"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p25"
      ]
    },
    {
      "label": "Configuration",
      "value": "BOSS 7004 D, cuve 200 L",
      "evidenceIds": [
        "agre-boss-7004-reserved-20261103-1"
      ]
    },
    {
      "label": "Liefermenge à 8 bar",
      "value": "410 L/min",
      "evidenceIds": [
        "agre-boss-7004-reserved-20261103-1"
      ]
    },
    {
      "label": "Volume déplacé distinct",
      "value": "600 L/min",
      "evidenceIds": [
        "agre-boss-7004-reserved-20261103-1"
      ]
    },
    {
      "label": "Débit de remplissage distinct",
      "value": "492 L/min",
      "evidenceIds": [
        "agre-boss-7004-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance",
      "value": "3 kW",
      "evidenceIds": [
        "agre-boss-7004-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse",
      "value": "121 kg",
      "evidenceIds": [
        "agre-boss-7004-reserved-20261103-1"
      ]
    },
    {
      "label": "Alimentation de la version D",
      "value": "230/400 V / 3 phases / 50 Hz",
      "evidenceIds": [
        "agre-boss-7004-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-agre-piston-portfolio-p25",
      "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf#page=25",
      "sourceLabel": "AGRE, Kolbenkompressoren Portfolio, gammes BOSS et WORKER, page PDF 25",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 04774dd3a9dddf3b99389a7243f5068eda3e456d3e63c736157723a0df12ee67 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "agre-boss-7004-reserved-20261103-1",
      "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf#page=25",
      "sourceLabel": "AGRE : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 04774dd3a9dddf3b99389a7243f5068eda3e456d3e63c736157723a0df12ee67. La BOSS 7002 D et la 7004 D partagent 410 L/min livrés à 8 bar, mais ont des cuves de 90 et 200 L et pèsent 94 et 121 kg. Le catalogue distingue 600 L/min de déplacement et 492 L/min de remplissage ; aucun de ces deux chiffres ne remplace le débit livré de 410."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-agre-piston-portfolio-p25"
    ],
    "maxPressureBar": [
      "october5-agre-piston-portfolio-p25"
    ],
    "tankLiters": [
      "october5-agre-piston-portfolio-p25"
    ],
    "fadCurve": [
      "october5-agre-piston-portfolio-p25"
    ],
    "powerKw": [
      "october5-agre-piston-portfolio-p25"
    ],
    "mpn": [
      "october5-agre-piston-portfolio-p25"
    ],
    "weightKg": [
      "agre-boss-7004-reserved-20261103-1"
    ],
    "phase": [
      "agre-boss-7004-reserved-20261103-1"
    ],
    "voltage": [
      "agre-boss-7004-reserved-20261103-1"
    ],
    "editorial": [
      "agre-boss-7004-reserved-20261103-1"
    ],
    "specifications": [
      "agre-boss-7004-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 121,
  "phase": "three-phase",
  "voltage": "230/400 V / 50 Hz"
};

export default product;
