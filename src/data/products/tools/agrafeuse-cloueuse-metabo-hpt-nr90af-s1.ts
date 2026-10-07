import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-metabo-hpt-nr90af-s1",
  "slug": "agrafeuse-cloueuse-metabo-hpt-nr90af-s1",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Metabo HPT NR90AF(S1)",
  "brand": "Metabo HPT",
  "model": "NR90AF(S1)",
  "demandModel": "per-action",
  "workingPressureBar": {
    "min": 6.2,
    "typical": 6.2,
    "max": 6.2
  },
  "airPerActionLiters": 2.1,
  "actionLabel": "clous",
  "confidence": "B",
  "variant": {
    "familyId": "metabo-hpt-nr90af-s1",
    "label": "NR90AF(S1)",
    "distinguishingAttributes": {
      "Masse dans la notice": "3.3 kg",
      "Longueur dans la notice": "541 mm",
      "Plage de service publiée": "4.9–8.3 bar",
      "Consommation par cycle aux trois points": "1.7 L/cycle à 5.5 bar; 2.1 L/cycle à 6.2 bar; 2.5 L/cycle à 6.9 bar",
      "Fonction documentée": "cloueur pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nr90af-s1.svg",
    "alt": "Repères techniques : Metabo HPT NR90AF(S1)",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99196464_NR90AF(S1)_806.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Metabo HPT NR90AF(S1). Consommation constructeur : 2.1 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NR90AF(S1) : 3.3 kg, longueur 541 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 3.3 kg.",
      "Longueur dans la notice : 541 mm.",
      "Plage de service publiée : 4.9–8.3 bar.",
      "Consommation par cycle aux trois points : 1.7 L/cycle à 5.5 bar; 2.1 L/cycle à 6.2 bar; 2.5 L/cycle à 6.9 bar.",
      "Fonction documentée : cloueur pneumatique.",
      "Consommation publiée dans son unité originale : 1.7 L/cycle à 5.5 bar; 2.1 L/cycle à 6.2 bar; 2.5 L/cycle à 6.9 bar.",
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
      "value": "3.3 kg",
      "evidenceIds": [
        "october7-tools-hikoki-nr90af-s1-p12"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "541 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nr90af-s1-p12"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "4.9–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr90af-s1-p12"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "1.7 L/cycle à 5.5 bar; 2.1 L/cycle à 6.2 bar; 2.5 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr90af-s1-p12"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nr90af-s1-p12"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "1.7 L/cycle à 5.5 bar; 2.1 L/cycle à 6.2 bar; 2.5 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr90af-s1-p12"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nr90af-s1-p12"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nr90af-s1-p12",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99196464_NR90AF(S1)_806.pdf#page=12",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nr90af-s1, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 24f3e9f006db443038cb4e8cf839cdb6f7f3423023e453411aeceaf68348b21d. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nr90af-s1-p10",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99196464_NR90AF(S1)_806.pdf#page=10",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nr90af-s1, page PDF 10",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 24f3e9f006db443038cb4e8cf839cdb6f7f3423023e453411aeceaf68348b21d. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nr90af-s1-p12",
      "october7-tools-hikoki-nr90af-s1-p10"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nr90af-s1-p12",
      "october7-tools-hikoki-nr90af-s1-p10"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nr90af-s1-p12",
      "october7-tools-hikoki-nr90af-s1-p10"
    ]
  },
  "notes": [
    "NR90AF(S1) : 3.3 kg, longueur 541 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
