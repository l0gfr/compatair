import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "comprag-a9008",
  "slug": "comprag-a9008",
  "brand": "Comprag",
  "model": "A9008",
  "mpn": "11100105",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "comprag-a9008",
    "label": "Version constructeur A9008 ; alimentation triphasée 380–420 V / 50 Hz publiée",
    "distinguishingAttributes": {
      "équipement": "Version constructeur A9008 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [],
  "oilType": "unknown",
  "powerKw": 90,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/comprag-a9008-technical-20261115-followup.svg",
    "alt": "Repères techniques : Comprag A9008",
    "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
  },
  "editorial": {
    "overview": "Le Comprag A9008, article11100105, publie14,3 m³/min et une pression maximale8 bar. Le groupe utilise90 kW sous380–420 V triphasé50 Hz, sortie2 pouces. Les variantes10/13 bar ont leurs propres articles ; aucune courbe de mesure n’est reconstituée à partir de leur pression maximale.",
    "verifiedFacts": [
      "Puissance moteur publiée :90 kW.",
      "Article du tableau : 11100105.",
      "Débit documentaire : 14,3 m³/min ; ISO1217, pression de mesure non séparée du maximum.",
      "Alimentation et sortie : 90 kW ;3/380–420 V/50 Hz ;2 pouces."
    ],
    "limitations": [
      "Seule la version 8 bar et son code constructeur sont retenus. Les versions 10/13 bar ne sont pas comptées comme de nouveaux modèles dans ce lot.",
      "Les tirets de la colonne réservoir ne sont pas transformés en volume nul. Les dimensions et poids des variantes ne sont pas reportés automatiquement.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La colonne Max. working pressure n’établit pas seule la pression de mesure du débit ISO1217. Aucun point de calcul retenu sans cet appariement."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Version constructeur A9008 ; alimentation triphasée 380–420 V / 50 Hz publiée",
      "evidenceIds": [
        "october7-comprag-a-p22"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october7-comprag-a-p22"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-comprag-a-p22"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "90 kW",
      "evidenceIds": [
        "october7-comprag-a-p22"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october7-comprag-a-p22"
      ]
    },
    {
      "label": "Article du tableau",
      "value": "11100105",
      "evidenceIds": [
        "review:2026-11-12-technical:comprag-a9008:0"
      ]
    },
    {
      "label": "Débit documentaire",
      "value": "14,3 m³/min ; ISO1217, pression de mesure non séparée du maximum",
      "evidenceIds": [
        "review:2026-11-12-technical:comprag-a9008:0"
      ]
    },
    {
      "label": "Alimentation et sortie",
      "value": "90 kW ;3/380–420 V/50 Hz ;2 pouces",
      "evidenceIds": [
        "review:2026-11-12-technical:comprag-a9008:0"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-comprag-a-p22",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=22",
      "sourceLabel": "Comprag, catalogue constructeur A, page PDF 22",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october7-comprag-a-p6",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf#page=6",
      "sourceLabel": "Comprag, catalogue constructeur A, page PDF 6",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-12-technical:comprag-a9008:0",
      "sourceUrl": "https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf",
      "sourceLabel": "Comprag, document fabricant, pages PDF 6, 22",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-12",
      "confidence": "B",
      "notes": "Le Comprag A9008, article11100105, publie14,3 m³/min et une pression maximale8 bar. Le groupe utilise90 kW sous380–420 V triphasé50 Hz, sortie2 pouces. Les variantes10/13 bar ont leurs propres articles ; aucune courbe de mesure n’est reconstituée à partir de leur pression maximale. GET complet : SHA-256 4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9. Historique conservé."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-comprag-a-p22"
    ],
    "maxPressureBar": [
      "october7-comprag-a-p22"
    ],
    "maxPressureBasis": [
      "october7-comprag-a-p22"
    ],
    "powerKw": [
      "october7-comprag-a-p22"
    ],
    "mpn": [
      "october7-comprag-a-p22"
    ],
    "fadCurve": [
      "review:2026-11-12-technical:comprag-a9008:0"
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
