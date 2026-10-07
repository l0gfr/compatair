import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-uht-htsg-3s",
  "slug": "meuleuse-uht-htsg-3s",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "UHT HTSG-3S",
  "brand": "UHT",
  "model": "HTSG-3S",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 4
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "uht-micro-grinder",
    "label": "HTSG-3S",
    "distinguishingAttributes": {
      "Longueur publiée": "161mm",
      "Masse publiée": "135g",
      "Raccord déclaré": "Hi coupler compatible",
      "Vitesse maximale publiée": "24,000rpm",
      "Porte-outil": "φ3.00collet"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-uht-htsg-3s.svg",
    "alt": "Repères techniques : UHT HTSG-3S",
    "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "UHT HTSG-3S. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. HTSG-3S : Vitesse maximale publiée 24,000rpm; Porte-outil φ3.00collet",
    "verifiedFacts": [
      "Longueur publiée : 161mm.",
      "Masse publiée : 135g.",
      "Raccord déclaré : Hi coupler compatible.",
      "Vitesse maximale publiée : 24,000rpm.",
      "Porte-outil : φ3.00collet.",
      "Consommation publiée dans son unité originale : 75NL/min.",
      "Pression dans la source : 0.4MPa."
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
      "value": "161mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-htsg-3s"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "135g",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-htsg-3s"
      ]
    },
    {
      "label": "Raccord déclaré",
      "value": "Hi coupler compatible",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-htsg-3s"
      ]
    },
    {
      "label": "Vitesse maximale publiée",
      "value": "24,000rpm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-htsg-3s"
      ]
    },
    {
      "label": "Porte-outil",
      "value": "φ3.00collet",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-htsg-3s"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "75NL/min",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-htsg-3s"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.4MPa",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-htsg-3s"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-uht-specs-html-table-1-row-htsg-3s",
      "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
      "sourceLabel": "UHT, tableaux techniques officiels Airtool, HTML table 1, row HTSG-3S",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 e1fddd7485adc093d9c5a8e8852f9a70bd1e649fcd9f5a4876a7ba4575f1b419. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-uht-specs-html-table-1-row-htsg-3s"
    ],
    "demandExplanation": [
      "october7-tools-uht-specs-html-table-1-row-htsg-3s"
    ]
  },
  "notes": [
    "HTSG-3S : Vitesse maximale publiée 24,000rpm; Porte-outil φ3.00collet",
    "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
    "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
    "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
