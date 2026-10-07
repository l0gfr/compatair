import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-hitachi-nv65an",
  "slug": "agrafeuse-cloueuse-hitachi-nv65an",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Hitachi NV65AN",
  "brand": "Hitachi",
  "model": "NV65AN",
  "demandModel": "per-action",
  "workingPressureBar": {
    "min": 6.2,
    "typical": 6.2,
    "max": 6.2
  },
  "airPerActionLiters": 1.2,
  "actionLabel": "clous",
  "confidence": "B",
  "variant": {
    "familyId": "hitachi-nv65an",
    "label": "NV65AN",
    "distinguishingAttributes": {
      "Masse dans la notice": "2.7 kg",
      "Longueur dans la notice": "305 mm",
      "Plage de service publiée": "5.4–8.3 bar",
      "Consommation par cycle aux trois points": "1.1 L/cycle à 5.5 bar; 1.2 L/cycle à 6.2 bar; 1.4 L/cycle à 6.9 bar",
      "Fonction documentée": "cloueur pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-hitachi-nv65an.svg",
    "alt": "Repères techniques : Hitachi NV65AN",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99249661_NV65AN_806.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hitachi NV65AN. Consommation constructeur : 1.2 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NV65AN : 2.7 kg, longueur 305 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 2.7 kg.",
      "Longueur dans la notice : 305 mm.",
      "Plage de service publiée : 5.4–8.3 bar.",
      "Consommation par cycle aux trois points : 1.1 L/cycle à 5.5 bar; 1.2 L/cycle à 6.2 bar; 1.4 L/cycle à 6.9 bar.",
      "Fonction documentée : cloueur pneumatique.",
      "Consommation publiée dans son unité originale : 1.1 L/cycle à 5.5 bar; 1.2 L/cycle à 6.2 bar; 1.4 L/cycle à 6.9 bar.",
      "Pression dans la source : Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.."
    ],
    "limitations": [
      "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
      "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
      "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Masse dans la notice",
      "value": "2.7 kg",
      "evidenceIds": [
        "october7-tools-hikoki-nv65an-nv65an-s-p12"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "305 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nv65an-nv65an-s-p12"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "5.4–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv65an-nv65an-s-p12"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "1.1 L/cycle à 5.5 bar; 1.2 L/cycle à 6.2 bar; 1.4 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv65an-nv65an-s-p12"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nv65an-nv65an-s-p12"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "1.1 L/cycle à 5.5 bar; 1.2 L/cycle à 6.2 bar; 1.4 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv65an-nv65an-s-p12"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nv65an-nv65an-s-p12"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nv65an-nv65an-s-p12",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99249661_NV65AN_806.pdf#page=12",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nv65an-nv65an-s, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 7b6a253de9e7bb5239a99f7a5753923554a8db91980824ab8dcffdbdf913bba6. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nv65an-nv65an-s-p10",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99249661_NV65AN_806.pdf#page=10",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nv65an-nv65an-s, page PDF 10",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 7b6a253de9e7bb5239a99f7a5753923554a8db91980824ab8dcffdbdf913bba6. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nv65an-nv65an-s-p12",
      "october7-tools-hikoki-nv65an-nv65an-s-p10"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nv65an-nv65an-s-p12",
      "october7-tools-hikoki-nv65an-nv65an-s-p10"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nv65an-nv65an-s-p12",
      "october7-tools-hikoki-nv65an-nv65an-s-p10"
    ]
  },
  "notes": [
    "NV65AN : 2.7 kg, longueur 305 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
