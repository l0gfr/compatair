import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "lime-alternative-uht-tls-07",
  "slug": "lime-alternative-uht-tls-07",
  "categoryId": "lime-alternative",
  "category": "lime-alternative",
  "label": "UHT TLS-07",
  "brand": "UHT",
  "model": "TLS-07",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.5,
    "max": 2.5
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "uht-turbolap",
    "label": "TLS-07",
    "distinguishingAttributes": {
      "Longueur publiée": "218mm",
      "Masse publiée": "180g",
      "Raccord déclaré": "Hi coupler compatible",
      "Amplitude publiée": "0.7mm",
      "Cadence maximale publiée": "20,000"
    }
  },
  "image": {
    "src": "/images/products/lime-alternative-uht-tls-07.svg",
    "alt": "Repères techniques : UHT TLS-07",
    "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "UHT TLS-07. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. TLS-07 : Cadence maximale publiée 20,000; Mouvement Swing",
    "verifiedFacts": [
      "Longueur publiée : 218mm.",
      "Masse publiée : 180g.",
      "Raccord déclaré : Hi coupler compatible.",
      "Amplitude publiée : 0.7mm.",
      "Cadence maximale publiée : 20,000.",
      "Mouvement : Swing.",
      "Consommation publiée dans son unité originale : 46NL/min.",
      "Pression dans la source : 0.15MPa-0.25MPa."
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
      "value": "218mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "180g",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    },
    {
      "label": "Raccord déclaré",
      "value": "Hi coupler compatible",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    },
    {
      "label": "Amplitude publiée",
      "value": "0.7mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    },
    {
      "label": "Cadence maximale publiée",
      "value": "20,000",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    },
    {
      "label": "Mouvement",
      "value": "Swing",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "46NL/min",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.15MPa-0.25MPa",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-2-row-tls-07"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-uht-specs-html-table-2-row-tls-07",
      "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
      "sourceLabel": "UHT, tableaux techniques officiels Airtool, HTML table 2, row TLS-07",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 e1fddd7485adc093d9c5a8e8852f9a70bd1e649fcd9f5a4876a7ba4575f1b419. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-uht-specs-html-table-2-row-tls-07"
    ],
    "demandExplanation": [
      "october7-tools-uht-specs-html-table-2-row-tls-07"
    ]
  },
  "notes": [
    "TLS-07 : Cadence maximale publiée 20,000; Mouvement Swing",
    "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
    "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
    "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
