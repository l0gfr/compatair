import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-uht-msg-24bsn",
  "slug": "meuleuse-uht-msg-24bsn",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "UHT MSG-24BSN",
  "brand": "UHT",
  "model": "MSG-24BSN",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 4,
    "max": 6
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "uht-micro-grinder",
    "label": "MSG-24BSN",
    "distinguishingAttributes": {
      "Longueur publiée": "160.5mm",
      "Masse publiée": "130g",
      "Raccord déclaré": "Hi coupler compatible",
      "Vitesse maximale publiée": "65,000rpm",
      "Porte-outil": "φ2.34(3/32in)collet"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-uht-msg-24bsn.svg",
    "alt": "Repères techniques : UHT MSG-24BSN",
    "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "UHT MSG-24BSN. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. MSG-24BSN : Vitesse maximale publiée 65,000rpm; Porte-outil φ2.34(3/32in)collet",
    "verifiedFacts": [
      "Longueur publiée : 160.5mm.",
      "Masse publiée : 130g.",
      "Raccord déclaré : Hi coupler compatible.",
      "Vitesse maximale publiée : 65,000rpm.",
      "Porte-outil : φ2.34(3/32in)collet.",
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
      "value": "160.5mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "130g",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
      ]
    },
    {
      "label": "Raccord déclaré",
      "value": "Hi coupler compatible",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
      ]
    },
    {
      "label": "Vitesse maximale publiée",
      "value": "65,000rpm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
      ]
    },
    {
      "label": "Porte-outil",
      "value": "φ2.34(3/32in)collet",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "120NL/min",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.4MPa-0.6MPa",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-uht-specs-html-table-1-row-msg-24bsn",
      "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
      "sourceLabel": "UHT, tableaux techniques officiels Airtool, HTML table 1, row MSG-24BSN",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 e1fddd7485adc093d9c5a8e8852f9a70bd1e649fcd9f5a4876a7ba4575f1b419. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
    ],
    "demandExplanation": [
      "october7-tools-uht-specs-html-table-1-row-msg-24bsn"
    ]
  },
  "notes": [
    "MSG-24BSN : Vitesse maximale publiée 65,000rpm; Porte-outil φ2.34(3/32in)collet",
    "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
    "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
    "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
