import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "comprag-f5508",
  "slug": "comprag-f5508",
  "brand": "Comprag",
  "model": "F5508",
  "mpn": "11410811",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "comprag-f5508",
    "label": "Version constructeur F5508 ; alimentation triphasée 380–420 V / 50 Hz publiée",
    "distinguishingAttributes": {
      "équipement": "Version constructeur F5508 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 9000
    }
  ],
  "oilType": "unknown",
  "powerKw": 55,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/comprag-f5508.svg",
    "alt": "Repères techniques : Comprag F5508",
    "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_F_EN_v_2_5.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Comprag F5508. 9 000 L/min déclarés à 8 bar. Configuration constructeur : Version constructeur F5508 ; alimentation triphasée 380–420 V / 50 Hz publiée.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 9 000 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "Seule la version 8 bar et son code constructeur sont retenus. Les versions 10/13 bar ne sont pas comptées comme de nouveaux modèles dans ce lot.",
      "Les tirets de la colonne réservoir ne sont pas transformés en volume nul. Les dimensions et poids des variantes ne sont pas reportés automatiquement.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Version constructeur F5508 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "evidenceIds": [
        "october7-comprag-f-p23"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october7-comprag-f-p23"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-comprag-f-p23"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "9 000 L/min",
      "evidenceIds": [
        "october7-comprag-f-p23",
        "october7-comprag-f-p5"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "55 kW",
      "evidenceIds": [
        "october7-comprag-f-p23"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october7-comprag-f-p23"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-comprag-f-p23",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_F_EN_v_2_5.pdf#page=23",
      "sourceLabel": "Comprag, catalogue constructeur F, page PDF 23",
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
      "october7-comprag-f-p23"
    ],
    "maxPressureBar": [
      "october7-comprag-f-p23"
    ],
    "maxPressureBasis": [
      "october7-comprag-f-p23"
    ],
    "fadCurve": [
      "october7-comprag-f-p23",
      "october7-comprag-f-p5"
    ],
    "powerKw": [
      "october7-comprag-f-p23"
    ],
    "mpn": [
      "october7-comprag-f-p23"
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
