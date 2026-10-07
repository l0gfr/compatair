import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-prevost-ibg06sil",
  "slug": "soufflette-prevost-ibg06sil",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Prevost IBG06SIL",
  "brand": "Prevost",
  "model": "IBG06SIL",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 6
  },
  "demandExplanation": "Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "prevost-prevos1",
    "label": "IBG06SIL",
    "distinguishingAttributes": {
      "Type de buse": "Silencieuse",
      "Profil de raccord": "ISO6150B",
      "Masse de la fiche courante": "0.070 kg",
      "Longueur de la fiche courante": "0.044 m"
    }
  },
  "image": {
    "src": "/images/products/soufflette-prevost-ibg06sil.svg",
    "alt": "Repères techniques : Prevost IBG06SIL",
    "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49626",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Prevost IBG06SIL. Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD. Buse silencieuse et profil de raccord ISO6150B explicitement identifiés.",
    "verifiedFacts": [
      "Type de buse : Silencieuse.",
      "Profil de raccord : ISO6150B.",
      "Masse de la fiche courante : 0.070 kg.",
      "Longueur de la fiche courante : 0.044 m.",
      "Consommation publiée dans son unité originale : 160 l/min(P=6bar).",
      "Pression dans la source : P=6bar."
    ],
    "limitations": [
      "La fiche courante publie160l/min à6bar ; la brochure publie9Nm³/h. Les états de référence et l’édition de ces deux valeurs ne sont pas arbitrés.",
      "La consommation en Nm³/h de la brochure n’est pas convertie ni assimilée silencieusement au débit FAD. La capacité en soufflage reste insuffisamment documentée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Type de buse",
      "value": "Silencieuse",
      "evidenceIds": [
        "october7-tools-prevost-silent-html-technical-table-ibg06sil"
      ]
    },
    {
      "label": "Profil de raccord",
      "value": "ISO6150B",
      "evidenceIds": [
        "october7-tools-prevost-silent-html-technical-table-ibg06sil"
      ]
    },
    {
      "label": "Masse de la fiche courante",
      "value": "0.070 kg",
      "evidenceIds": [
        "october7-tools-prevost-silent-html-technical-table-ibg06sil"
      ]
    },
    {
      "label": "Longueur de la fiche courante",
      "value": "0.044 m",
      "evidenceIds": [
        "october7-tools-prevost-silent-html-technical-table-ibg06sil"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 l/min(P=6bar)",
      "evidenceIds": [
        "october7-tools-prevost-silent-html-technical-table-ibg06sil"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "P=6bar",
      "evidenceIds": [
        "october7-tools-prevost-silent-html-technical-table-ibg06sil"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-prevost-silent-html-technical-table-ibg06sil",
      "sourceUrl": "https://www.prevost.eu/prevos1-blow-gun-silent-nozzle-49626",
      "sourceLabel": "Prevost, fiche courante IBG06SIL, HTML technical table, IBG06SIL",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 bcf62219260dcfd08634bc621d03c72ef852e12dd7de8535ffa8805afc643293. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-prevost-blowgun-brochure",
      "sourceUrl": "https://www.prevost.fr/sites/default/files/2021-12/BG%20DOC21FR%20web_0.pdf",
      "sourceLabel": "Prevost, brochure officielle BG DOC21FR",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 a17c86c546fe5f83ee561def5b5cb0a45546824fdeed42f621383226430fabdc. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-prevost-silent-html-technical-table-ibg06sil",
      "october7-tools-prevost-blowgun-brochure"
    ],
    "demandExplanation": [
      "october7-tools-prevost-silent-html-technical-table-ibg06sil",
      "october7-tools-prevost-blowgun-brochure"
    ]
  },
  "notes": [
    "Buse silencieuse et profil de raccord ISO6150B explicitement identifiés.",
    "La fiche courante publie160l/min à6bar ; la brochure publie9Nm³/h. Les états de référence et l’édition de ces deux valeurs ne sont pas arbitrés.",
    "La consommation en Nm³/h de la brochure n’est pas convertie ni assimilée silencieusement au débit FAD. La capacité en soufflage reste insuffisamment documentée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
