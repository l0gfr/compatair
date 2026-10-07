import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "comprag-frd2208-500",
  "slug": "comprag-frd2208-500",
  "brand": "Comprag",
  "model": "FRD2208-500",
  "mpn": "11410606",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "comprag-frd2208-500",
    "label": "Version constructeur FRD2208-500 ; alimentation triphasée 380–420 V / 50 Hz publiée ; réservoir 500 L et sécheur frigorifique intégré",
    "distinguishingAttributes": {
      "équipement": "Version constructeur FRD2208-500 ; alimentation triphasée 380–420 V / 50 Hz publiée ; réservoir 500 L et sécheur frigorifique intégré",
      "pressionDeConfiguration": "8 bar",
      "cuve": "500 L",
      "fréquence": "50 Hz"
    }
  },
  "tankLiters": 500,
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 3600
    }
  ],
  "oilType": "unknown",
  "powerKw": 22,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/comprag-frd2208-500.svg",
    "alt": "Repères techniques : Comprag FRD2208-500",
    "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_F_EN_v_2_5.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Comprag FRD2208-500. 3 600 L/min déclarés à 8 bar. Configuration constructeur : Version constructeur FRD2208-500 ; alimentation triphasée 380–420 V / 50 Hz publiée ; réservoir 500 L et sécheur frigorifique intégré.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "Cuve de stockage documentée : 500 L.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 600 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "Seule la version 8 bar et son code constructeur sont retenus. Les versions 10/13 bar ne sont pas comptées comme de nouveaux modèles dans ce lot.",
      "Les tirets de la colonne réservoir ne sont pas transformés en volume nul. Les dimensions et poids des variantes ne sont pas reportés automatiquement.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Version constructeur FRD2208-500 ; alimentation triphasée 380–420 V / 50 Hz publiée ; réservoir 500 L et sécheur frigorifique intégré",
      "evidenceIds": [
        "october7-comprag-f-p15"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october7-comprag-f-p15"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "500 L",
      "evidenceIds": [
        "october7-comprag-f-p15"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "3 600 L/min",
      "evidenceIds": [
        "october7-comprag-f-p15",
        "october7-comprag-f-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october7-comprag-f-p15"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october7-comprag-f-p15"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-comprag-f-p15",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_F_EN_v_2_5.pdf#page=15",
      "sourceLabel": "Comprag, catalogue constructeur F, page PDF 15",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 7ed689acf92797cbee40e2606f96acbd93a3b38e760c2ae5bb795cf153044c3c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october7-comprag-f-p5",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_F_EN_v_2_5.pdf#page=5",
      "sourceLabel": "Comprag, catalogue constructeur F, page PDF 5",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 7ed689acf92797cbee40e2606f96acbd93a3b38e760c2ae5bb795cf153044c3c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-comprag-f-p15"
    ],
    "maxPressureBar": [
      "october7-comprag-f-p15"
    ],
    "maxPressureBasis": [
      "october7-comprag-f-p15"
    ],
    "tankLiters": [
      "october7-comprag-f-p15"
    ],
    "fadCurve": [
      "october7-comprag-f-p15",
      "october7-comprag-f-p5"
    ],
    "powerKw": [
      "october7-comprag-f-p15"
    ],
    "mpn": [
      "october7-comprag-f-p15"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "explicit-maximum-working-pressure"
};

export default product;
