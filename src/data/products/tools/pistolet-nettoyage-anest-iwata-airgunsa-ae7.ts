import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-nettoyage-anest-iwata-airgunsa-ae7",
  "slug": "pistolet-nettoyage-anest-iwata-airgunsa-ae7",
  "categoryId": "pistolet-nettoyage",
  "category": "pistolet-nettoyage",
  "label": "Anest Iwata AIRGUNSA AE7",
  "brand": "Anest Iwata",
  "model": "AIRGUNSA AE7",
  "mpn": "W0020500000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-airgunsa-ae7",
    "label": "AIRGUNSA AE7",
    "distinguishingAttributes": {
      "Fonction": "projection mélangée d’air et d’eau",
      "Tube de projection": "210 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-nettoyage-anest-iwata-airgunsa-ae7.svg",
    "alt": "Repères techniques : Anest Iwata AIRGUNSA AE7",
    "sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2022/09/2025_EN_AIRGUNSA_CAT.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata AIRGUNSA AE7. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. Le code complet W0020500000 désigne AIRGUNSA AE7. fonction : projection mélangée d’air et d’eau; tube de projection : 210 mm.",
    "verifiedFacts": [
      "Fonction : projection mélangée d’air et d’eau.",
      "Tube de projection : 210 mm.",
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
      "value": "projection mélangée d’air et d’eau",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p18"
      ]
    },
    {
      "label": "Tube de projection",
      "value": "210 mm",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p18"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Non publiée pour cet outil dans le tableau de commande",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p18"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Non publiée pour cet outil dans le tableau de commande",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p18"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-iwata-catalog-current-4-p18",
      "sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2022/09/2025_EN_AIRGUNSA_CAT.pdf#page=18",
      "sourceLabel": "Anest Iwata AIRGUNSA, catalogue 2025, page PDF 18",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 cc4f305737f15bc7b4ed9059ba98efba0873c1c0a8be2dd08e9445326a82182e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-iwata-catalog-current-4-p18"
    ],
    "demandExplanation": [
      "october8-tools-iwata-catalog-current-4-p18"
    ]
  },
  "notes": [
    "Le code complet W0020500000 désigne AIRGUNSA AE7. fonction : projection mélangée d’air et d’eau; tube de projection : 210 mm.",
    "Cette page fournit l’identité et la construction de l’outil, sans consommation ni pression d’exercice appariées. Aucun besoin numérique n’est calculé.",
    "La disponibilité actuelle en France n’est pas établie. Les raccords rapides et les accessoires séparés ne sont pas comptés comme des outils supplémentaires.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
