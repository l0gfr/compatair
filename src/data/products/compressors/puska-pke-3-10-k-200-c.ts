import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "puska-pke-3-10-k-200-c",
  "slug": "puska-pke-3-10-k-200-c",
  "brand": "Puska",
  "model": "PKE 3 10 K 200 C",
  "mpn": "4152 0505 29",
  "variant": {
    "familyId": "puska-pke-3-k-200-c",
    "label": "PKE 3 10 K 200 C",
    "distinguishingAttributes": {
      "équipement": "PKE 3 10 K 200 C",
      "pressionDeConfiguration": "10 bar",
      "cuve": "200 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 200,
  "maxPressureBar": 10,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10,
      "litersPerMinute": 294
    }
  ],
  "powerKw": 2.2,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/puska-pke-3-10-k-200-c-technical-20261116-followup.svg",
    "alt": "Repères techniques : Puska PKE 3 10 K 200 C",
    "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PKE 3 10 K 200 C",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10 bar",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "200 L",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Air livré à 10 bar",
      "value": "294 L/min",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "2,2 kW",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4b-puska-catalog-2025-p29"
      ]
    },
    {
      "label": "Article / élément",
      "value": "4152 0505 29 / C43",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-pke-3-10-k-200-c:0"
      ]
    },
    {
      "label": "Dimensions largeur × longueur × hauteur",
      "value": "600 × 1 430 × 1 260 mm",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-pke-3-10-k-200-c:0"
      ]
    },
    {
      "label": "Masse / alimentation",
      "value": "165 kg / 400 V triphasé 50 Hz",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-pke-3-10-k-200-c:0"
      ]
    },
    {
      "label": "Débit de la ligne 10 bar",
      "value": "294 L/min, ISO 1217 annexe C",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-pke-3-10-k-200-c:0"
      ]
    },
    {
      "label": "Commande",
      "value": "ES4000 Connect ; K sans démarreur étoile-triangle",
      "evidenceIds": [
        "review:2026-11-16-technical:puska-pke-3-10-k-200-c:0"
      ]
    }
  ],
  "editorial": {
    "overview": "Puska PKE 3 10 K 200 C 4152050529 : vis 2,2 kW sur cuve 200 L, contrôleur ES4000 Connect, 165 kg. La base sans cuve pèse 110 kg. Le suffixe K signale l’absence du démarreur étoile-triangle.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10 bar.",
      "Cuve de stockage documentée : 200 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 294 L/min déclarés à 10 bar.",
      "Article / élément : 4152 0505 29 / C43.",
      "Dimensions largeur × longueur × hauteur : 600 × 1 430 × 1 260 mm.",
      "Masse / alimentation : 165 kg / 400 V triphasé 50 Hz.",
      "Débit de la ligne 10 bar : 294 L/min, ISO 1217 annexe C.",
      "Commande : ES4000 Connect ; K sans démarreur étoile-triangle."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-puska-catalog-2025-p29",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf#page=29",
      "sourceLabel": "Puska, catalogue constructeur 2025, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-technical:puska-pke-3-10-k-200-c:0",
      "sourceUrl": "https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf",
      "sourceLabel": "Puska, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Puska PKE 3 10 K 200 C 4152050529 : vis 2,2 kW sur cuve 200 L, contrôleur ES4000 Connect, 165 kg. La base sans cuve pèse 110 kg. Le suffixe K signale l’absence du démarreur étoile-triangle. GET complet SHA-256 62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454. Pages PDF lues : 29."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-puska-catalog-2025-p29"
    ],
    "model": [
      "october4b-puska-catalog-2025-p29"
    ],
    "maxPressureBar": [
      "october4b-puska-catalog-2025-p29"
    ],
    "tankLiters": [
      "october4b-puska-catalog-2025-p29"
    ],
    "fadCurve": [
      "october4b-puska-catalog-2025-p29"
    ],
    "powerKw": [
      "october4b-puska-catalog-2025-p29"
    ],
    "mpn": [
      "october4b-puska-catalog-2025-p29"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
