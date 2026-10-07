import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-uht-mag-122n",
  "slug": "meuleuse-uht-mag-122n",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "UHT MAG-122N",
  "brand": "UHT",
  "model": "MAG-122N",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 4,
    "max": 6
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "uht-micro-grinder",
    "label": "MAG-122N",
    "distinguishingAttributes": {
      "Longueur publiée": "149mm",
      "Masse publiée": "140g",
      "Raccord déclaré": "Hi coupler compatible",
      "Vitesse maximale publiée": "35,000rpm",
      "Porte-outil": "M6-P0.75"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-uht-mag-122n.svg",
    "alt": "Repères techniques : UHT MAG-122N",
    "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "UHT MAG-122N. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. MAG-122N : Vitesse maximale publiée 35,000rpm; Porte-outil M6-P0.75",
    "verifiedFacts": [
      "Longueur publiée : 149mm.",
      "Masse publiée : 140g.",
      "Raccord déclaré : Hi coupler compatible.",
      "Vitesse maximale publiée : 35,000rpm.",
      "Porte-outil : M6-P0.75.",
      "Consommation publiée dans son unité originale : 120NL/min.",
      "Pression dans la source : 0.4MPa-0.6MPa."
    ],
    "limitations": [
      "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
      "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
      "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Longueur publiée",
      "value": "149mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-122n"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "140g",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-122n"
      ]
    },
    {
      "label": "Raccord déclaré",
      "value": "Hi coupler compatible",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-122n"
      ]
    },
    {
      "label": "Vitesse maximale publiée",
      "value": "35,000rpm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-122n"
      ]
    },
    {
      "label": "Porte-outil",
      "value": "M6-P0.75",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-122n"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "120NL/min",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-122n"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.4MPa-0.6MPa",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-122n"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-uht-specs-html-table-1-row-mag-122n",
      "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
      "sourceLabel": "UHT, tableaux techniques officiels Airtool, HTML table 1, row MAG-122N",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 e1fddd7485adc093d9c5a8e8852f9a70bd1e649fcd9f5a4876a7ba4575f1b419. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-uht-specs-html-table-1-row-mag-122n"
    ],
    "demandExplanation": [
      "october7-tools-uht-specs-html-table-1-row-mag-122n"
    ]
  },
  "notes": [
    "MAG-122N : Vitesse maximale publiée 35,000rpm; Porte-outil M6-P0.75",
    "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
    "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
    "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
