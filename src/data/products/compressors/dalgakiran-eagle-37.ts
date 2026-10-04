const product: unknown = {
  "id": "dalgakiran-eagle-37",
  "slug": "dalgakiran-eagle-37",
  "brand": "Dalgakiran",
  "model": "EAGLE 37",
  "variant": {
    "familyId": "dalgakiran-eagle-37",
    "label": "EAGLE 37",
    "distinguishingAttributes": {
      "équipement": "EAGLE 37",
      "pressionDeConfiguration": "10 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10,
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 4800
    }
  ],
  "powerKw": 37,
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/dalgakiran-eagle-37.svg",
    "alt": "Repères techniques : Dalgakiran EAGLE 37",
    "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "EAGLE 37",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p33"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p33"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p33"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "4 800 L/min",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p33",
        "october4b-dalgakiran-catalog-p34"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "37 kW",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p33"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-dalgakiran-catalog-p33"
      ]
    }
  ],
  "editorial": {
    "overview": "Dalgakiran EAGLE 37. 4 800 L/min déclarés à 10 bar. Configuration constructeur : EAGLE 37.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 4 800 L/min déclarés à 10 bar."
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
      "id": "october4b-dalgakiran-catalog-p33",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=33",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 33",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-dalgakiran-catalog-p34",
      "sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=34",
      "sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 34",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-dalgakiran-catalog-p33"
    ],
    "maxPressureBar": [
      "october4b-dalgakiran-catalog-p33"
    ],
    "fadCurve": [
      "october4b-dalgakiran-catalog-p33",
      "october4b-dalgakiran-catalog-p34"
    ],
    "powerKw": [
      "october4b-dalgakiran-catalog-p33"
    ],
    "oilType": [
      "october4b-dalgakiran-catalog-p33"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
