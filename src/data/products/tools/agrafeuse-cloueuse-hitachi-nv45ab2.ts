import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-hitachi-nv45ab2",
  "slug": "agrafeuse-cloueuse-hitachi-nv45ab2",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Hitachi NV45AB2",
  "brand": "Hitachi",
  "model": "NV45AB2",
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
    "familyId": "hitachi-nv45ab2",
    "label": "NV45AB2",
    "distinguishingAttributes": {
      "Masse dans la notice": "2.6 kg",
      "Longueur dans la notice": "250 mm",
      "Plage de service publiée": "4.9–8.3 bar",
      "Consommation par cycle aux trois points": "0.93 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar",
      "Fonction documentée": "cloueur pneumatique"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-hitachi-nv45ab2.svg",
    "alt": "Repères techniques : Hitachi NV45AB2",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99241561_NV45AB2_806.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hitachi NV45AB2. Consommation constructeur : 1.1 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NV45AB2 : 2.6 kg, longueur 250 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "verifiedFacts": [
      "Masse dans la notice : 2.6 kg.",
      "Longueur dans la notice : 250 mm.",
      "Plage de service publiée : 4.9–8.3 bar.",
      "Consommation par cycle aux trois points : 0.93 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar.",
      "Fonction documentée : cloueur pneumatique.",
      "Consommation publiée dans son unité originale : 0.93 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar.",
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
        "october7-tools-hikoki-nv45ab2-p12"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "250 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nv45ab2-p12"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "4.9–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv45ab2-p12"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "0.93 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv45ab2-p12"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nv45ab2-p12"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "0.93 L/cycle à 5.5 bar; 1.1 L/cycle à 6.2 bar; 1.3 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nv45ab2-p12"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nv45ab2-p12"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nv45ab2-p12",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99241561_NV45AB2_806.pdf#page=12",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nv45ab2, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 89000022df176a269ca900be85ab976ba8887da28673b2ad863bb8fc1a99b496. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nv45ab2-p10",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99241561_NV45AB2_806.pdf#page=10",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nv45ab2, page PDF 10",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 89000022df176a269ca900be85ab976ba8887da28673b2ad863bb8fc1a99b496. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nv45ab2-p12",
      "october7-tools-hikoki-nv45ab2-p10"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nv45ab2-p12",
      "october7-tools-hikoki-nv45ab2-p10"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nv45ab2-p12",
      "october7-tools-hikoki-nv45ab2-p10"
    ]
  },
  "notes": [
    "NV45AB2 : 2.6 kg, longueur 250 mm. Le volume par cycle varie avec la pression selon la table de cette notice.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
