import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-uht-msg-3bsn-l",
  "slug": "meuleuse-uht-msg-3bsn-l",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "UHT MSG-3BSN L",
  "brand": "UHT",
  "model": "MSG-3BSN L",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 4,
    "max": 6
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "uht-micro-grinder",
    "label": "MSG-3BSN L",
    "distinguishingAttributes": {
      "Longueur publiée": "160.5mm",
      "Masse publiée": "130g",
      "Raccord déclaré": "Hi coupler compatible",
      "Vitesse maximale publiée": "65,000rpm",
      "Porte-outil": "φ3collet"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-uht-msg-3bsn-l.svg",
    "alt": "Repères techniques : UHT MSG-3BSN L",
    "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "UHT MSG-3BSN L. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. MSG-3BSN L : Vitesse maximale publiée 65,000rpm; Porte-outil φ3collet",
    "verifiedFacts": [
      "Longueur publiée : 160.5mm.",
      "Masse publiée : 130g.",
      "Raccord déclaré : Hi coupler compatible.",
      "Vitesse maximale publiée : 65,000rpm.",
      "Porte-outil : φ3collet.",
      "Consommation publiée dans son unité originale : 120NL/min.",
      "Pression dans la source : 0.4MPa - 0.6MPa."
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
      "value": "160.5mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "130g",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
      ]
    },
    {
      "label": "Raccord déclaré",
      "value": "Hi coupler compatible",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
      ]
    },
    {
      "label": "Vitesse maximale publiée",
      "value": "65,000rpm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
      ]
    },
    {
      "label": "Porte-outil",
      "value": "φ3collet",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "120NL/min",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.4MPa - 0.6MPa",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l",
      "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
      "sourceLabel": "UHT, tableaux techniques officiels Airtool, HTML table 1, row MSG-3BSN L",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 e1fddd7485adc093d9c5a8e8852f9a70bd1e649fcd9f5a4876a7ba4575f1b419. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
    ],
    "demandExplanation": [
      "october7-tools-uht-specs-html-table-1-row-msg-3bsn-l"
    ]
  },
  "notes": [
    "MSG-3BSN L : Vitesse maximale publiée 65,000rpm; Porte-outil φ3collet",
    "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
    "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
    "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
