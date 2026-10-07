import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-metabo-hpt-nv75a5",
  "slug": "agrafeuse-cloueuse-metabo-hpt-nv75a5",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Metabo HPT NV75A5",
  "brand": "Metabo HPT",
  "model": "NV75A5",
  "demandModel": "per-action",
  "workingPressureBar": {
    "min": 6.2,
    "typical": 6.2,
    "max": 6.2
  },
  "airPerActionLiters": 1.6,
  "actionLabel": "clous",
  "confidence": "B",
  "variant": {
    "familyId": "metabo-hpt-nv75a5",
    "label": "NV75A5",
    "distinguishingAttributes": {
      "Masse dans la notice": "2.6 kg",
      "Longueur dans la notice": "271 mm",
      "Plage de service publiée": "4.9–8.3 bar",
      "Consommation par cycle aux trois points": "1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar",
      "Fonction documentée": "cloueur pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nv75a5.svg",
    "alt": "Repères techniques : Metabo HPT NV75A5",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247261_NV75A5_810.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Metabo HPT NV75A5. Consommation constructeur : 1.6 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NV75A5 : 2.6 kg, longueur 271 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 2.6 kg.",
      "Longueur dans la notice : 271 mm.",
      "Plage de service publiée : 4.9–8.3 bar.",
      "Consommation par cycle aux trois points : 1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar.",
      "Fonction documentée : cloueur pneumatique.",
      "Consommation publiée dans son unité originale : 1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar.",
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
      "value": "2.6 kg",
      "evidenceIds": [
        "october7-tools-hikoki-nv75a5-p11"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "271 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nv75a5-p11"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "4.9–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv75a5-p11"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv75a5-p11"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nv75a5-p11"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv75a5-p11"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nv75a5-p11"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nv75a5-p11",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247261_NV75A5_810.pdf#page=11",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nv75a5, page PDF 11",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 1f97ea81d603ce9ac3a300dcfca43a2a52de970b7b08e2d27e1879194ae768b9. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nv75a5-p9",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247261_NV75A5_810.pdf#page=9",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nv75a5, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 1f97ea81d603ce9ac3a300dcfca43a2a52de970b7b08e2d27e1879194ae768b9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nv75a5-p11",
      "october7-tools-hikoki-nv75a5-p9"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nv75a5-p11",
      "october7-tools-hikoki-nv75a5-p9"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nv75a5-p11",
      "october7-tools-hikoki-nv75a5-p9"
    ]
  },
  "notes": [
    "NV75A5 : 2.6 kg, longueur 271 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
