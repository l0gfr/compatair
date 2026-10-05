const product = {
  "id": "firstair-fas18",
  "slug": "firstair-fas18",
  "brand": "firstAir",
  "model": "FAS18",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "firstair-fas18",
    "label": "FAS18",
    "distinguishingAttributes": {
      "équipement": "FAS18",
      "pressionDeConfiguration": "10,342 bar",
      "cuve": "Non documentée",
      "fréquence": "60 Hz"
    }
  },
  "maxPressureBar": 10.342,
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 2760.892
    }
  ],
  "oilType": "unknown",
  "powerKw": 18.5,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/firstair-fas18.svg",
    "alt": "Repères techniques : firstAir FAS18",
    "sourceUrl": "https://www.firstaircompressor.com/wp-content/uploads/page/19/firstair_prospektflyer_en_500l-v3-web.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "firstAir FAS18. 2 760,892 L/min déclarés à 8,618 bar. Configuration constructeur : FAS18.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10,342 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 760,892 L/min déclarés à 8,618 bar."
    ],
    "limitations": [
      "Fiche nord-américaine 60 Hz ; débit libre publié à 125 psi et autre version à 150 psi. Pas d’équivalence française supposée. Cuve absente de la configuration générique FAS ; options T/U non comptées comme de nouveaux modèles.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "FAS18",
      "evidenceIds": [
        "october5-firstair-fas-p3"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10,342 bar (150 psig publiés)",
      "evidenceIds": [
        "october5-firstair-fas-p3",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-firstair-fas-p3"
      ]
    },
    {
      "label": "Air livré à 8,618 bar",
      "value": "2 760,892 L/min (97,5 cfm publiés)",
      "evidenceIds": [
        "october5-firstair-fas-p3",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "working pressure / FAD at 150psi",
      "value": "89.70",
      "evidenceIds": [
        "october5-firstair-fas-p3"
      ]
    },
    {
      "label": "Qualitative manufacturer operating-use statement, no numeric duty inferred",
      "value": "The compressors are designed for industrial applications and prove their strength when running continuously.",
      "evidenceIds": [
        "october5-firstair-fas-p2"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "18,5 kW",
      "evidenceIds": [
        "october5-firstair-fas-p3"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "60 Hz",
      "evidenceIds": [
        "october5-firstair-fas-p3"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-firstair-fas-p3",
      "sourceUrl": "https://www.firstaircompressor.com/wp-content/uploads/page/19/firstair_prospektflyer_en_500l-v3-web.pdf#page=3",
      "sourceLabel": "firstAir, FAS Series, Screw Air Compressor Range, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 ff6409925e188d42aa3847a84ce478e3a7a6bf6957f8d954a8bd40fac0d64fbd de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide to the SI, appendice B.8, facteurs de conversion, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 a66b8ada84af2d6f8ff8cb88ce6384f0bfe0af8583f166f6f6ffec0b26250180 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-firstair-fas-p2",
      "sourceUrl": "https://www.firstaircompressor.com/wp-content/uploads/page/19/firstair_prospektflyer_en_500l-v3-web.pdf#page=2",
      "sourceLabel": "firstAir, FAS Series, Screw Air Compressor Range, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 ff6409925e188d42aa3847a84ce478e3a7a6bf6957f8d954a8bd40fac0d64fbd de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-firstair-fas-p3"
    ],
    "maxPressureBar": [
      "october5-firstair-fas-p3",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-firstair-fas-p3",
      "october5-nist-conversions-p1"
    ],
    "powerKw": [
      "october5-firstair-fas-p3"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
