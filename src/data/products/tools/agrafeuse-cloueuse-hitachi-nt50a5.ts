import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-hitachi-nt50a5",
  "slug": "agrafeuse-cloueuse-hitachi-nt50a5",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Hitachi NT50A5",
  "brand": "Hitachi",
  "model": "NT50A5",
  "demandModel": "per-action",
  "workingPressureBar": {
    "min": 6.2,
    "typical": 6.2,
    "max": 6.2
  },
  "airPerActionLiters": 0.64,
  "actionLabel": "clous",
  "confidence": "B",
  "variant": {
    "familyId": "hitachi-nt50a5",
    "label": "NT50A5",
    "distinguishingAttributes": {
      "Masse dans la notice": "1.3 kg",
      "Longueur dans la notice": "266 mm",
      "Plage de service publiée": "4.9–8.3 bar",
      "Consommation par cycle aux trois points": "0.55 L/cycle à 5.5 bar; 0.64 L/cycle à 6.2 bar; 0.73 L/cycle à 6.9 bar",
      "Fonction documentée": "cloueur pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-hitachi-nt50a5.svg",
    "alt": "Repères techniques : Hitachi NT50A5",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247761_NT50A5_802.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hitachi NT50A5. Consommation constructeur : 0.64 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NT50A5 : 1.3 kg, longueur 266 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 1.3 kg.",
      "Longueur dans la notice : 266 mm.",
      "Plage de service publiée : 4.9–8.3 bar.",
      "Consommation par cycle aux trois points : 0.55 L/cycle à 5.5 bar; 0.64 L/cycle à 6.2 bar; 0.73 L/cycle à 6.9 bar.",
      "Fonction documentée : cloueur pneumatique.",
      "Consommation publiée dans son unité originale : 0.55 L/cycle à 5.5 bar; 0.64 L/cycle à 6.2 bar; 0.73 L/cycle à 6.9 bar.",
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
      "value": "1.3 kg",
      "evidenceIds": [
        "october7-tools-hikoki-nt50a5-p11"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "266 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nt50a5-p11"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "4.9–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nt50a5-p11"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "0.55 L/cycle à 5.5 bar; 0.64 L/cycle à 6.2 bar; 0.73 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nt50a5-p11"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nt50a5-p11"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "0.55 L/cycle à 5.5 bar; 0.64 L/cycle à 6.2 bar; 0.73 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nt50a5-p11"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nt50a5-p11"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nt50a5-p11",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247761_NT50A5_802.pdf#page=11",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nt50a5, page PDF 11",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 516e2e6247285cf455a6af0a9f60e95dc87a09a3718e510912cedd49c6b2ed24. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nt50a5-p9",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247761_NT50A5_802.pdf#page=9",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nt50a5, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 516e2e6247285cf455a6af0a9f60e95dc87a09a3718e510912cedd49c6b2ed24. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nt50a5-p11",
      "october7-tools-hikoki-nt50a5-p9"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nt50a5-p11",
      "october7-tools-hikoki-nt50a5-p9"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nt50a5-p11",
      "october7-tools-hikoki-nt50a5-p9"
    ]
  },
  "notes": [
    "NT50A5 : 1.3 kg, longueur 266 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
