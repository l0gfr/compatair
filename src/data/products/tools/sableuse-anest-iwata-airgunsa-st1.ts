import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "sableuse-anest-iwata-airgunsa-st1",
  "slug": "sableuse-anest-iwata-airgunsa-st1",
  "categoryId": "sableuse",
  "category": "sableuse",
  "label": "Anest Iwata AIRGUNSA ST1",
  "brand": "Anest Iwata",
  "model": "AIRGUNSA ST1",
  "mpn": "W0030600000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-airgunsa-st1",
    "label": "AIRGUNSA ST1",
    "distinguishingAttributes": {
      "Fonction": "pistolet de sablage",
      "Alimentation abrasive": "godet AG-1 de 1 L"
    }
  },
  "image": {
    "src": "/images/products/sableuse-anest-iwata-airgunsa-st1.svg",
    "alt": "Repères techniques : Anest Iwata AIRGUNSA ST1",
    "sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2022/09/2025_EN_AIRGUNSA_CAT.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata AIRGUNSA ST1. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. Le code complet W0030600000 désigne AIRGUNSA ST1. fonction : pistolet de sablage; alimentation abrasive : godet AG-1 de 1 L.",
    "verifiedFacts": [
      "Fonction : pistolet de sablage.",
      "Alimentation abrasive : godet AG-1 de 1 L.",
      "Consommation publiée dans son unité originale : Non publiée pour cet outil dans le tableau de commande.",
      "Pression dans la source : Non publiée pour cet outil dans le tableau de commande."
    ],
    "limitations": [
      "Cette page fournit l’identité et la construction de l’outil, sans consommation ni pression d’exercice appariées. Aucun besoin numérique n’est calculé.",
      "La disponibilité actuelle en France n’est pas établie. Les raccords rapides et les accessoires séparés ne sont pas comptés comme des outils supplémentaires.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Fonction",
      "value": "pistolet de sablage",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p19"
      ]
    },
    {
      "label": "Alimentation abrasive",
      "value": "godet AG-1 de 1 L",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p19"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Non publiée pour cet outil dans le tableau de commande",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p19"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Non publiée pour cet outil dans le tableau de commande",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p19"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-iwata-catalog-current-4-p19",
      "sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2022/09/2025_EN_AIRGUNSA_CAT.pdf#page=19",
      "sourceLabel": "Anest Iwata AIRGUNSA, catalogue 2025, page PDF 19",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 cc4f305737f15bc7b4ed9059ba98efba0873c1c0a8be2dd08e9445326a82182e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-iwata-catalog-current-4-p19"
    ],
    "demandExplanation": [
      "october8-tools-iwata-catalog-current-4-p19"
    ]
  },
  "notes": [
    "Le code complet W0030600000 désigne AIRGUNSA ST1. fonction : pistolet de sablage; alimentation abrasive : godet AG-1 de 1 L.",
    "Cette page fournit l’identité et la construction de l’outil, sans consommation ni pression d’exercice appariées. Aucun besoin numérique n’est calculé.",
    "La disponibilité actuelle en France n’est pas établie. Les raccords rapides et les accessoires séparés ne sont pas comptés comme des outils supplémentaires.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
