import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-hitachi-nr38ak",
  "slug": "agrafeuse-cloueuse-hitachi-nr38ak",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Hitachi NR38AK",
  "brand": "Hitachi",
  "model": "NR38AK",
  "demandModel": "per-action",
  "workingPressureBar": {
    "min": 6.2,
    "typical": 6.2,
    "max": 6.2
  },
  "airPerActionLiters": 1.8,
  "actionLabel": "clous",
  "confidence": "B",
  "variant": {
    "familyId": "hitachi-nr38ak",
    "label": "NR38AK",
    "distinguishingAttributes": {
      "Masse dans la notice": "2.1 kg",
      "Longueur dans la notice": "314 mm",
      "Plage de service publiée": "5.4–8.3 bar",
      "Consommation par cycle aux trois points": "1.6 L/cycle à 5.5 bar; 1.8 L/cycle à 6.2 bar; 2.1 L/cycle à 6.9 bar",
      "Fonction documentée": "cloueur pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-hitachi-nr38ak.svg",
    "alt": "Repères techniques : Hitachi NR38AK",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99249561_NR38AK_806.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hitachi NR38AK. Consommation constructeur : 1.8 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NR38AK : 2.1 kg, longueur 314 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 2.1 kg.",
      "Longueur dans la notice : 314 mm.",
      "Plage de service publiée : 5.4–8.3 bar.",
      "Consommation par cycle aux trois points : 1.6 L/cycle à 5.5 bar; 1.8 L/cycle à 6.2 bar; 2.1 L/cycle à 6.9 bar.",
      "Fonction documentée : cloueur pneumatique.",
      "Consommation publiée dans son unité originale : 1.6 L/cycle à 5.5 bar; 1.8 L/cycle à 6.2 bar; 2.1 L/cycle à 6.9 bar.",
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
      "value": "2.1 kg",
      "evidenceIds": [
        "october7-tools-hikoki-nr38ak-p12"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "314 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nr38ak-p12"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "5.4–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr38ak-p12"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "1.6 L/cycle à 5.5 bar; 1.8 L/cycle à 6.2 bar; 2.1 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr38ak-p12"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nr38ak-p12"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "1.6 L/cycle à 5.5 bar; 1.8 L/cycle à 6.2 bar; 2.1 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr38ak-p12"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nr38ak-p12"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nr38ak-p12",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99249561_NR38AK_806.pdf#page=12",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nr38ak, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 7e8cc66db93fc7aa74e115e9c0bdeebf3beecd02464a45ec3036cd85780d2572. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nr38ak-p9",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99249561_NR38AK_806.pdf#page=9",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nr38ak, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 7e8cc66db93fc7aa74e115e9c0bdeebf3beecd02464a45ec3036cd85780d2572. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nr38ak-p12",
      "october7-tools-hikoki-nr38ak-p9"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nr38ak-p12",
      "october7-tools-hikoki-nr38ak-p9"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nr38ak-p12",
      "october7-tools-hikoki-nr38ak-p9"
    ]
  },
  "notes": [
    "NR38AK : 2.1 kg, longueur 314 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
