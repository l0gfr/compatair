const product: unknown = {
  "id": "dalgakiran-dvk-180-d",
  "slug": "dalgakiran-dvk-180-d",
  "brand": "Dalgakiran",
  "model": "DVK 180 D",
  "variant": {
    "familyId": "dalgakiran-dvk-180-d",
    "label": "DVK 180 D",
    "distinguishingAttributes": {
      "équipement": "DVK 180 D",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "fadCurve": [
    {
      "pressureBar": 13,
      "litersPerMinute": 16500
    }
  ],
  "powerKw": 132,
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/dalgakiran-dvk-180-d.svg",
    "alt": "Repères techniques : Dalgakiran DVK 180 D",
    "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DVK 180 D",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Air livré à 13 bar",
      "value": "16 500 L/min",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "132 kW",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p30"
      ]
    }
  ],
  "editorial": {
    "overview": "Dalgakiran DVK 180 D. 16 500 L/min déclarés à 13 bar. Configuration constructeur : DVK 180 D.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 16 500 L/min déclarés à 13 bar."
    ],
    "limitations": [
      "La cuve et la fréquence électrique ne sont pas documentées par les tableaux retenus.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-dalgakiran-catalog-p30",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=30",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 30",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-dalgakiran-catalog-p29",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=29",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "maxPressureBar": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "fadCurve": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "powerKw": [
      "october4b-dalgakiran-catalog-p30"
    ],
    "oilType": [
      "october4b-dalgakiran-catalog-p29"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
