import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-airgunsa-az-pva",
  "slug": "pistolet-peinture-anest-iwata-airgunsa-az-pva",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata AIRGUNSA AZ PVA",
  "brand": "Anest Iwata",
  "model": "AIRGUNSA AZ PVA",
  "mpn": "W0011300000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-airgunsa-az-pva",
    "label": "AIRGUNSA AZ PVA",
    "distinguishingAttributes": {
      "Fonction": "revêtement de carrosserie",
      "Alimentation": "godet aluminium de 1 L à verrouillage Pin Lock"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-airgunsa-az-pva.svg",
    "alt": "Repères techniques : Anest Iwata AIRGUNSA AZ PVA",
    "sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2022/09/2025_EN_AIRGUNSA_CAT.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata AIRGUNSA AZ PVA. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. Le code complet W0011300000 désigne AIRGUNSA AZ PVA. fonction : revêtement de carrosserie; alimentation : godet aluminium de 1 L à verrouillage Pin Lock.",
    "verifiedFacts": [
      "Fonction : revêtement de carrosserie.",
      "Alimentation : godet aluminium de 1 L à verrouillage Pin Lock.",
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
      "value": "revêtement de carrosserie",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p18"
      ]
    },
    {
      "label": "Alimentation",
      "value": "godet aluminium de 1 L à verrouillage Pin Lock",
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
    "Le code complet W0011300000 désigne AIRGUNSA AZ PVA. fonction : revêtement de carrosserie; alimentation : godet aluminium de 1 L à verrouillage Pin Lock.",
    "Cette page fournit l’identité et la construction de l’outil, sans consommation ni pression d’exercice appariées. Aucun besoin numérique n’est calculé.",
    "La disponibilité actuelle en France n’est pas établie. Les raccords rapides et les accessoires séparés ne sont pas comptés comme des outils supplémentaires.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
