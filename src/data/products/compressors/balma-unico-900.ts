const product = {
  "id": "balma-unico-900",
  "slug": "balma-unico-900",
  "brand": "Balma",
  "model": "UNICO 900",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "balma-unico-900",
    "label": "UNICO 900",
    "distinguishingAttributes": {
      "équipement": "UNICO 900",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 9.5,
      "litersPerMinute": 848
    }
  ],
  "oilType": "unknown",
  "powerKw": 7.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/balma-unico-900.svg",
    "alt": "Repères techniques : Balma UNICO 900",
    "sourceUrl": "https://www.balma.com/fr/products/screw-compressors/rotary-srew-compressor-unico",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Balma UNICO 900. 848 L/min déclarés à 9,5 bar. Configuration constructeur : UNICO 900.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 848 L/min déclarés à 9,5 bar."
    ],
    "limitations": [
      "FAD documenté à 9,5 bar, plafond 10 bar ; montages sur châssis, cuve 100 L ou 200 L proposés séparément, sans supposer une cuve pour le modèle générique.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "UNICO 900",
      "evidenceIds": [
        "october5-balma-unico-page-p1"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "10 bar",
      "evidenceIds": [
        "october5-balma-unico-page-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-balma-unico-page-p1"
      ]
    },
    {
      "label": "Air livré à 9,5 bar",
      "value": "848 L/min",
      "evidenceIds": [
        "october5-balma-unico-page-p1",
        "october5-balma-unico-page-pdf-8-p7"
      ]
    },
    {
      "label": "Concordant manufacturer PDF rating row",
      "value": "UNICO 900 10 9.5 50.9 848 29.9 7.5 10 63",
      "evidenceIds": [
        "october5-balma-unico-page-pdf-8-p7"
      ]
    },
    {
      "label": "Qualitative manufacturer operating-use statement, no numeric duty inferred",
      "value": "UNICO is ideal for both intermittent and continuous use, adapting",
      "evidenceIds": [
        "october5-balma-unico-page-pdf-8-p3"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "7,5 kW",
      "evidenceIds": [
        "october5-balma-unico-page-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-balma-unico-page-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-balma-unico-page-p1",
      "sourceUrl": "https://www.balma.com/fr/products/screw-compressors/rotary-srew-compressor-unico",
      "sourceLabel": "BALMA, fiche constructeur française UNICO 500/900, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 d84bdc3ed1628d7327d35cff55ab3f0be89baf8a19774747d12725123c6acac3 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-balma-unico-page-pdf-8-p7",
      "sourceUrl": "https://www.balma.com/content/dam/brands/balma/ois/unico/Balma%20Unico.pdf#page=7",
      "sourceLabel": "BALMA, UNICO 500 & UNICO 900, brochure et Performance Data, page PDF 7",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 0a000b7a6ea09229259f2b178ca6c4970974896ea4ee7aee572473f87b01338f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-balma-unico-page-pdf-8-p3",
      "sourceUrl": "https://www.balma.com/content/dam/brands/balma/ois/unico/Balma%20Unico.pdf#page=3",
      "sourceLabel": "BALMA, UNICO 500 & UNICO 900, brochure et Performance Data, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 0a000b7a6ea09229259f2b178ca6c4970974896ea4ee7aee572473f87b01338f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-balma-unico-page-p1"
    ],
    "maxPressureBar": [
      "october5-balma-unico-page-p1"
    ],
    "fadCurve": [
      "october5-balma-unico-page-p1",
      "october5-balma-unico-page-pdf-8-p7"
    ],
    "powerKw": [
      "october5-balma-unico-page-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
