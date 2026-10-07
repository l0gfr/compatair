import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-metabo-hpt-nt65a5",
  "slug": "agrafeuse-cloueuse-metabo-hpt-nt65a5",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Metabo HPT NT65A5",
  "brand": "Metabo HPT",
  "model": "NT65A5",
  "demandModel": "per-action",
  "workingPressureBar": {
    "min": 6.2,
    "typical": 6.2,
    "max": 6.2
  },
  "airPerActionLiters": 1.1,
  "actionLabel": "clous",
  "confidence": "B",
  "variant": {
    "familyId": "metabo-hpt-nt65a5",
    "label": "NT65A5",
    "distinguishingAttributes": {
      "Masse dans la notice": "2.2 kg",
      "Longueur dans la notice": "383 mm",
      "Plage de service publiée": "4.9–8.3 bar",
      "Consommation par cycle aux trois points": "1 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar",
      "Fonction documentée": "cloueur pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nt65a5.svg",
    "alt": "Repères techniques : Metabo HPT NT65A5",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247861_NT65A5_809.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Metabo HPT NT65A5. Consommation constructeur : 1.1 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NT65A5 : 2.2 kg, longueur 383 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 2.2 kg.",
      "Longueur dans la notice : 383 mm.",
      "Plage de service publiée : 4.9–8.3 bar.",
      "Consommation par cycle aux trois points : 1 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar.",
      "Fonction documentée : cloueur pneumatique.",
      "Consommation publiée dans son unité originale : 1 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar.",
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
        "october7-tools-hikoki-nt65a5-p11"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "383 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nt65a5-p11"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "4.9–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nt65a5-p11"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "1 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nt65a5-p11"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nt65a5-p11"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "1 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nt65a5-p11"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nt65a5-p11"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nt65a5-p11",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247861_NT65A5_809.pdf#page=11",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nt65a5, page PDF 11",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 819b12c4e3d33c072cf101cfe00aba2858309034ad28bb277c79ef5ab63ebaab. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nt65a5-p9",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99247861_NT65A5_809.pdf#page=9",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nt65a5, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 819b12c4e3d33c072cf101cfe00aba2858309034ad28bb277c79ef5ab63ebaab. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nt65a5-p11",
      "october7-tools-hikoki-nt65a5-p9"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nt65a5-p11",
      "october7-tools-hikoki-nt65a5-p9"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nt65a5-p11",
      "october7-tools-hikoki-nt65a5-p9"
    ]
  },
  "notes": [
    "NT65A5 : 2.2 kg, longueur 383 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
