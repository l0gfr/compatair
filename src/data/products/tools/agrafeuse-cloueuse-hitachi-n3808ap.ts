import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-hitachi-n3808ap",
  "slug": "agrafeuse-cloueuse-hitachi-n3808ap",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Hitachi N3808AP",
  "brand": "Hitachi",
  "model": "N3808AP",
  "demandModel": "per-action",
  "workingPressureBar": {
    "min": 6.2,
    "typical": 6.2,
    "max": 6.2
  },
  "airPerActionLiters": 0.76,
  "actionLabel": "agrafes",
  "confidence": "B",
  "variant": {
    "familyId": "hitachi-n3808ap",
    "label": "N3808AP",
    "distinguishingAttributes": {
      "Masse dans la notice": "2.2 kg",
      "Longueur dans la notice": "358 mm",
      "Plage de service publiée": "4.9–8.3 bar",
      "Consommation par cycle aux trois points": "0.69 L/cycle à 5.5 bar; 0.76 L/cycle à 6.2 bar; 0.85 L/cycle à 6.9 bar",
      "Fonction documentée": "agrafeuse pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-hitachi-n3808ap.svg",
    "alt": "Repères techniques : Hitachi N3808AP",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99245961_N3808AP_806.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hitachi N3808AP. Consommation constructeur : 0.76 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. N3808AP : 2.2 kg, longueur 358 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 2.2 kg.",
      "Longueur dans la notice : 358 mm.",
      "Plage de service publiée : 4.9–8.3 bar.",
      "Consommation par cycle aux trois points : 0.69 L/cycle à 5.5 bar; 0.76 L/cycle à 6.2 bar; 0.85 L/cycle à 6.9 bar.",
      "Fonction documentée : agrafeuse pneumatique.",
      "Consommation publiée dans son unité originale : 0.69 L/cycle à 5.5 bar; 0.76 L/cycle à 6.2 bar; 0.85 L/cycle à 6.9 bar.",
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
      "value": "2.2 kg",
      "evidenceIds": [
        "october7-tools-hikoki-n3808ap-p12"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "358 mm",
      "evidenceIds": [
        "october7-tools-hikoki-n3808ap-p12"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "4.9–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-n3808ap-p12"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "0.69 L/cycle à 5.5 bar; 0.76 L/cycle à 6.2 bar; 0.85 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-n3808ap-p12"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "agrafeuse pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-n3808ap-p12"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "0.69 L/cycle à 5.5 bar; 0.76 L/cycle à 6.2 bar; 0.85 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-n3808ap-p12"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-n3808ap-p12"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-n3808ap-p12",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99245961_N3808AP_806.pdf#page=12",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-n3808ap, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 291111fe63f17329beb8d544022fe8d04843ed44ebefc57b40b7c81ba6f2493c. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-n3808ap-p10",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99245961_N3808AP_806.pdf#page=10",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-n3808ap, page PDF 10",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 291111fe63f17329beb8d544022fe8d04843ed44ebefc57b40b7c81ba6f2493c. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-n3808ap-p12",
      "october7-tools-hikoki-n3808ap-p10"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-n3808ap-p12",
      "october7-tools-hikoki-n3808ap-p10"
    ],
    "actionLabel": [
      "october7-tools-hikoki-n3808ap-p12",
      "october7-tools-hikoki-n3808ap-p10"
    ]
  },
  "notes": [
    "N3808AP : 2.2 kg, longueur 358 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
