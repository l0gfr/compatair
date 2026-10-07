import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "agrafeuse-cloueuse-hitachi-nr65ak2",
  "slug": "agrafeuse-cloueuse-hitachi-nr65ak2",
  "categoryId": "agrafeuse-cloueuse",
  "category": "agrafeuse-cloueuse",
  "label": "Hitachi NR65AK2",
  "brand": "Hitachi",
  "model": "NR65AK2",
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
    "familyId": "hitachi-nr65ak2",
    "label": "NR65AK2",
    "distinguishingAttributes": {
      "Masse dans la notice": "2.9 kg",
      "Longueur dans la notice": "448 mm",
      "Plage de service publiée": "5.4–8.3 bar",
      "Consommation par cycle aux trois points": "1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar",
      "Chargeur de cette variante": "44 clous, chargeur long"
    }
  },
  "image": {
    "src": "/images/products/agrafeuse-cloueuse-hitachi-nr65ak2.svg",
    "alt": "Repères techniques : Hitachi NR65AK2",
    "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99241461_NR65AK2_806.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hitachi NR65AK2. Consommation constructeur : 1.6 L par cycle à 6.2 bar. Le besoin par minute dépend de la cadence réelle. NR65AK2 : 2.9 kg, longueur 448 mm. Chargeur long de 44 clous.",
    "verifiedFacts": [
      "Masse dans la notice : 2.9 kg.",
      "Longueur dans la notice : 448 mm.",
      "Plage de service publiée : 5.4–8.3 bar.",
      "Consommation par cycle aux trois points : 1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar.",
      "Chargeur de cette variante : 44 clous, chargeur long.",
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
      "value": "2.9 kg",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    },
    {
      "label": "Longueur dans la notice",
      "value": "448 mm",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    },
    {
      "label": "Plage de service publiée",
      "value": "5.4–8.3 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    },
    {
      "label": "Consommation par cycle aux trois points",
      "value": "1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    },
    {
      "label": "Chargeur de cette variante",
      "value": "44 clous, chargeur long",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    },
    {
      "label": "Fonction documentée",
      "value": "cloueur pneumatique",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "1.4 L/cycle à 5.5 bar; 1.6 L/cycle à 6.2 bar; 1.8 L/cycle à 6.9 bar",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Operating pressure (bar): 5.5 / 6.2 / 6.9 ; point conservé pour le calcul : 6.2 bar.",
      "evidenceIds": [
        "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99241461_NR65AK2_806.pdf#page=11",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nr65ak2-nr65ak2-s, page PDF 11",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 f951fe8f4bc1aa7ecb133908e27cde3379ec33ca430106527c3acc497a5dce41. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-hikoki-nr65ak2-nr65ak2-s-p9",
      "sourceUrl": "https://www.hikoki-powertools.com/manual_view_export/pdf/C99241461_NR65AK2_806.pdf#page=9",
      "sourceLabel": "HiKoki, notice originale archivée hikoki-nr65ak2-nr65ak2-s, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 f951fe8f4bc1aa7ecb133908e27cde3379ec33ca430106527c3acc497a5dce41. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11",
      "october7-tools-hikoki-nr65ak2-nr65ak2-s-p9"
    ],
    "airPerActionLiters": [
      "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11",
      "october7-tools-hikoki-nr65ak2-nr65ak2-s-p9"
    ],
    "actionLabel": [
      "october7-tools-hikoki-nr65ak2-nr65ak2-s-p11",
      "october7-tools-hikoki-nr65ak2-nr65ak2-s-p9"
    ]
  },
  "notes": [
    "NR65AK2 : 2.9 kg, longueur 448 mm. Chargeur long de 44 clous.",
    "La pression de service admissible reste distincte du point de consommation utilisé. Aucun volume à une autre pression n’est interpolé.",
    "Le dimensionnement exige une cadence réelle de clous ou d’agrafes par minute. Aucun débit permanent en L/min ni cadence de chantier ne sont inventés.",
    "La marque de la notice est conservée. Hitachi, HiKoki et Metabo HPT sont dédoublonnés pour ce modèle ; disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
