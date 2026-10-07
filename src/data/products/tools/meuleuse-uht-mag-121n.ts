import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-uht-mag-121n",
  "slug": "meuleuse-uht-mag-121n",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "UHT MAG-121N",
  "brand": "UHT",
  "model": "MAG-121N",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 4,
    "max": 6
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "uht-micro-grinder",
    "label": "MAG-121N",
    "distinguishingAttributes": {
      "Longueur publiée": "154mm",
      "Masse publiée": "140g",
      "Raccord déclaré": "Hi coupler compatible",
      "Vitesse maximale publiée": "48,000rpm",
      "Porte-outil": "φ3.00collet"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-uht-mag-121n.svg",
    "alt": "Repères techniques : UHT MAG-121N",
    "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "UHT MAG-121N. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. MAG-121N : Vitesse maximale publiée 48,000rpm; Porte-outil φ3.00collet",
    "verifiedFacts": [
      "Longueur publiée : 154mm.",
      "Masse publiée : 140g.",
      "Raccord déclaré : Hi coupler compatible.",
      "Vitesse maximale publiée : 48,000rpm.",
      "Porte-outil : φ3.00collet.",
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
      "value": "154mm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-121n"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "140g",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-121n"
      ]
    },
    {
      "label": "Raccord déclaré",
      "value": "Hi coupler compatible",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-121n"
      ]
    },
    {
      "label": "Vitesse maximale publiée",
      "value": "48,000rpm",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-121n"
      ]
    },
    {
      "label": "Porte-outil",
      "value": "φ3.00collet",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-121n"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "120NL/min",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-121n"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.4MPa - 0.6MPa",
      "evidenceIds": [
        "october7-tools-uht-specs-html-table-1-row-mag-121n"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-uht-specs-html-table-1-row-mag-121n",
      "sourceUrl": "https://www.uht.co.jp/en/products/airtool/specification/",
      "sourceLabel": "UHT, tableaux techniques officiels Airtool, HTML table 1, row MAG-121N",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 e1fddd7485adc093d9c5a8e8852f9a70bd1e649fcd9f5a4876a7ba4575f1b419. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-uht-specs-html-table-1-row-mag-121n"
    ],
    "demandExplanation": [
      "october7-tools-uht-specs-html-table-1-row-mag-121n"
    ]
  },
  "notes": [
    "MAG-121N : Vitesse maximale publiée 48,000rpm; Porte-outil φ3.00collet",
    "La consommation est publiée en NL/min ; température, pression absolue et humidité de référence ne sont pas précisées dans cette fiche. Aucun NL/min n’est converti silencieusement en débit FAD.",
    "La fiche n’identifie pas ici le régime de charge associé à la consommation. La compatibilité reste insuffisamment documentée.",
    "Les valeurs de vitesse et cadence sont des maxima publiés, pas une mesure garantie pendant le travail.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
