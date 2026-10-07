import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-uht-fx3-0",
  "slug": "meuleuse-uht-fx3-0",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "UHT FX3.0",
  "brand": "UHT",
  "model": "FX3.0",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 4,
    "typical": 5,
    "max": 6
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "uht-micro-grinder",
    "label": "FX3.0",
    "distinguishingAttributes": {
      "Longueur publiée": "165mm",
      "Masse publiée": "82g",
      "Raccord déclaré": "Hi coupler compatible",
      "Vitesse maximale publiée": "45,000~60,000rpm(0.4~0.6MPa)",
      "Porte-outil": "φ3.00collet"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-uht-fx3-0.svg",
    "alt": "Repères techniques : UHT FX3.0",
    "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "UHT FX3.0. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. FX3.0 : Vitesse maximale publiée 45,000~60,000rpm(0.4~0.6MPa); Porte-outil φ3.00collet",
    "verifiedFacts": [
      "Longueur publiée : 165mm.",
      "Masse publiée : 82g.",
      "Raccord déclaré : Hi coupler compatible.",
      "Vitesse maximale publiée : 45,000~60,000rpm(0.4~0.6MPa).",
      "Porte-outil : φ3.00collet.",
      "Consommation publiée dans son unité originale : 140~240NL/min.",
      "Pression dans la source : 0.5 ±0.1MPa."
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
      "value": "165mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-fx3-0"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "82g",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-fx3-0"
      ]
    },
    {
      "label": "Raccord déclaré",
      "value": "Hi coupler compatible",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-fx3-0"
      ]
    },
    {
      "label": "Vitesse maximale publiée",
      "value": "45,000~60,000rpm(0.4~0.6MPa)",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-fx3-0"
      ]
    },
    {
      "label": "Porte-outil",
      "value": "φ3.00collet",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-fx3-0"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "140~240NL/min",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-fx3-0"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.5 ±0.1MPa",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-fx3-0"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-uht-specs-html-table-1-row-fx3-0",
      "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
      "sourceLabel": "UHT, tableaux techniques officiels Airtool, HTML table 1, row FX3.0",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 e1fddd7485adc093d9c5a8e8852f9a70bd1e649fcd9f5a4876a7ba4575f1b419. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-uht-specs-html-table-1-row-fx3-0"
    ],
    "demandExplanation": [
      "october7-tools-uht-specs-html-table-1-row-fx3-0"
    ]
  },
  "notes": [
    "FX3.0 : Vitesse maximale publiée 45,000~60,000rpm(0.4~0.6MPa); Porte-outil φ3.00collet",
    "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
    "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
    "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
