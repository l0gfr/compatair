const product = {
  "id": "agre-mobil-boss-461",
  "slug": "agre-mobil-boss-461",
  "brand": "AGRE",
  "model": "MOBIL BOSS 461",
  "mpn": "RGA5342984",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "agre-mobil-boss-461",
    "label": "MOBIL BOSS 461",
    "distinguishingAttributes": {
      "équipement": "MOBIL BOSS 461",
      "pressionDeConfiguration": "10 bar",
      "cuve": "24 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 24,
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
    "src": "/images/products/agre-mobil-boss-461.svg",
    "alt": "Repères techniques : AGRE MOBIL BOSS 461",
    "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "AGRE MOBIL BOSS 461. 302 L/min déclarés à 8 bar. Configuration constructeur : MOBIL BOSS 461.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 24 L.",
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
      "value": "MOBIL BOSS 461",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p26"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p26"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "24 L",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p26"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "302 L/min",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p26"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p26"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-agre-piston-portfolio-p26"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-agre-piston-portfolio-p26",
      "sourceUrl": "https://www.agre.de/content/dam/brands/ceccatocluster/agre/piston-compressors/professional-compressors/worker/AGRE-DFE-Kolbenkompressoren-Portfolio.pdf#page=26",
      "sourceLabel": "AGRE, Kolbenkompressoren Portfolio, gammes BOSS et WORKER, page PDF 26",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 04774dd3a9dddf3b99389a7243f5068eda3e456d3e63c736157723a0df12ee67 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-agre-piston-portfolio-p26"
    ],
    "maxPressureBar": [
      "october5-agre-piston-portfolio-p26"
    ],
    "tankLiters": [
      "october5-agre-piston-portfolio-p26"
    ],
    "fadCurve": [
      "october5-agre-piston-portfolio-p26"
    ],
    "powerKw": [
      "october5-agre-piston-portfolio-p26"
    ],
    "mpn": [
      "october5-agre-piston-portfolio-p26"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
