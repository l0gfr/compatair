import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "kaishan-ox15",
  "slug": "kaishan-ox15",
  "brand": "Kaishan",
  "model": "OX15",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "kaishan-ox15",
    "label": "OX15-8 tank-mounted 500 L receiver",
    "distinguishingAttributes": {
      "équipement": "OX15-8 tank-mounted 500 L receiver",
      "pressionDeConfiguration": "8 bar",
      "cuve": "500 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 8,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 2200
    }
  ],
  "dutyCycle": 1,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/kaishan-ox15.svg",
    "alt": "Repères techniques : Kaishan OX15",
    "sourceUrl": "https://www.kaishan.com.au/wp-content/uploads/2024/07/Scroll-2023-Digital.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Kaishan OX15. 2 200 L/min déclarés à 8 bar. Configuration constructeur : OX15-8 tank-mounted 500 L receiver.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 200 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "Configuration australienne montée sur réservoir500L,415V triphasé50Hz. Le constructeur propose aussi un compresseur seul ; le profil vise explicitement le montage sur cuve. Le code8 désigne le point de service retenu, sans qualifier une pression de soupape. Autre version10bar non comptée comme identité supplémentaire.",
      "Puissance nominale par modèle non chiffrée dans le tableau ; les chiffres du nom ne sont pas transformés silencieusement en kW.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "OX15-8 tank-mounted 500 L receiver",
      "evidenceIds": [
        "october5-kaishan-ox-page-pdf-9-p2"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october5-kaishan-ox-page-pdf-9-p2"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october5-kaishan-ox-page-pdf-9-p2"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "2 200 L/min",
      "evidenceIds": [
        "october5-kaishan-ox-page-pdf-9-p2"
      ]
    },
    {
      "label": "Manufacturer describes a lubricated orbital scroll range; oil type not inferred",
      "value": "The advanced Kaishan orbital, lubricated range of Scroll air compressors",
      "evidenceIds": [
        "october5-kaishan-ox-page-pdf-9-p2"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october5-kaishan-ox-page-pdf-9-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october5-kaishan-ox-page-pdf-9-p2"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-kaishan-ox-page-pdf-9-p2",
      "sourceUrl": "https://www.kaishan.com.au/wp-content/uploads/2024/07/Scroll-2023-Digital.pdf#page=2",
      "sourceLabel": "Kaishan Australia, Scroll Air Compressors, gamme OX, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 6863792ed17b6fea2f894702232ce428331ddc2eb2bf94e2e1c8fdb5b98cf8bc de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-kaishan-ox-page-pdf-9-p2"
    ],
    "model": [
      "october5-kaishan-ox-page-pdf-9-p2"
    ],
    "maxPressureBar": [
      "october5-kaishan-ox-page-pdf-9-p2"
    ],
    "tankLiters": [
      "october5-kaishan-ox-page-pdf-9-p2"
    ],
    "fadCurve": [
      "october5-kaishan-ox-page-pdf-9-p2"
    ],
    "dutyCycle": [
      "october5-kaishan-ox-page-pdf-9-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
