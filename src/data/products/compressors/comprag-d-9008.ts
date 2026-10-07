import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "comprag-d-9008",
  "slug": "comprag-d-9008",
  "brand": "Comprag",
  "model": "D-9008",
  "mpn": "11300111",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "comprag-d-9008",
    "label": "Version constructeur D-9008 ; alimentation triphasée 380–420 V / 50 Hz publiée",
    "distinguishingAttributes": {
      "équipement": "Version constructeur D-9008 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 15400
    }
  ],
  "oilType": "unknown",
  "powerKw": 90,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/comprag-d-9008.svg",
    "alt": "Repères techniques : Comprag D-9008",
    "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Comprag_Catalog_Screw_Compressors_D_series_EN_v_1_0_0.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Comprag D-9008. 15 400 L/min déclarés à 8 bar. Configuration constructeur : Version constructeur D-9008 ; alimentation triphasée 380–420 V / 50 Hz publiée.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 15 400 L/min déclarés à 8 bar."
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
      "value": "Version constructeur D-9008 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "evidenceIds": [
        "october7-comprag-d-p22"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october7-comprag-d-p22"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-comprag-d-p22"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "15 400 L/min",
      "evidenceIds": [
        "october7-comprag-d-p22",
        "october7-comprag-d-p6"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "90 kW",
      "evidenceIds": [
        "october7-comprag-d-p22"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october7-comprag-d-p22"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-comprag-d-p22",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Comprag_Catalog_Screw_Compressors_D_series_EN_v_1_0_0.pdf#page=22",
      "sourceLabel": "Comprag, catalogue constructeur D, page PDF 22",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 002bd4a132d07027227a39977cd04bc9d8acdb1f599a190dc59591e19a9bba7e de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october7-comprag-d-p6",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Comprag_Catalog_Screw_Compressors_D_series_EN_v_1_0_0.pdf#page=6",
      "sourceLabel": "Comprag, catalogue constructeur D, page PDF 6",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 002bd4a132d07027227a39977cd04bc9d8acdb1f599a190dc59591e19a9bba7e de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-comprag-d-p22"
    ],
    "maxPressureBar": [
      "october7-comprag-d-p22"
    ],
    "maxPressureBasis": [
      "october7-comprag-d-p22"
    ],
    "fadCurve": [
      "october7-comprag-d-p22",
      "october7-comprag-d-p6"
    ],
    "powerKw": [
      "october7-comprag-d-p22"
    ],
    "mpn": [
      "october7-comprag-d-p22"
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
