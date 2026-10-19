import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-airgunsa-az3-hte2-hvlp-buse-1-3-hvlp",
  "slug": "pistolet-peinture-anest-iwata-airgunsa-az3-hte2-hvlp-buse-1-3-hvlp",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata AIRGUNSA AZ3 HTE2 HVLP buse 1.3 HVLP",
  "brand": "Anest Iwata",
  "model": "AIRGUNSA AZ3 HTE2 HVLP buse 1.3 HVLP",
  "mpn": "W0SPG84AG13C",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le code candidat84AG13C n’est pas confirmé par la ligne actuelle85AG13C. Aucun point de pression–consommation n’est attribué à une identité non confirmée.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-airgunsa-az3-hte2-hvlp",
    "label": "AIRGUNSA AZ3 HTE2 HVLP buse 1.3 HVLP",
    "distinguishingAttributes": {
      "Buse": "1.3 mm",
      "Chapeau": "HVLP",
      "Alimentation": "gravité",
      "Débit de produit au point du tableau": "150 mL/min",
      "Largeur de jet au point du tableau": "280 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-airgunsa-az3-hte2-hvlp-buse-1-3-hvlp.svg",
    "alt": "Repères techniques : Anest Iwata AIRGUNSA AZ3 HTE2 HVLP buse 1.3 HVLP",
    "sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2022/09/2025_EN_AIRGUNSA_CAT.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "AZ3 HTE2 HVLP, code candidat W0SPG84AG13C : le tableau actuellement accessible imprime W0SPG85AG13C pour le pistolet HVLP en 1,3 mm. Cette ligne ne confirme pas l’identité de la référence candidate. Les valeurs de débit et de pression du code85 ne lui sont donc pas attribuées.",
    "verifiedFacts": [
      "Le tableau courant imprime W0SPG85AG13C pour la configurationHVLP en1,3mm.",
      "Le code candidat W0SPG84AG13C n’est pas confirmé par cette ligne ; aucune substitution de référence."
    ],
    "limitations": [
      "Une ancienne référence ou une équivalence éventuelle doit être confirmée par une source propre au code84. Aucun MPN n’est remplacé pour faire admettre la page.",
      "Le catalogue 2025 publie la consommation en Nℓ/min, sans définir les conditions de référence du volume normalisé ; cette valeur n’est pas assimilée au FAD en L/min.",
      "La consommation appartient au point du tableau commun à la configuration, sans essai physique CompatAir ni extrapolation à une autre pression.",
      "Le catalogue porte une couverture 2025 et conserve une ancienne mention de liste de prix 2020 sur certaines pages ; la date de fabrication et la disponibilité en France ne sont pas établies.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Code de la ligne actuelle comparée, distinct du candidat",
      "value": "W0SPG85AG13C",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p7"
      ]
    },
    {
      "label": "Buse de cette ligne, non transférée au candidat",
      "value": "1,3mm",
      "evidenceIds": [
        "october8-tools-iwata-catalog-current-4-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-iwata-catalog-current-4-p7",
      "sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2022/09/2025_EN_AIRGUNSA_CAT.pdf#page=7",
      "sourceLabel": "Anest Iwata AIRGUNSA, catalogue 2025, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 cc4f305737f15bc7b4ed9059ba98efba0873c1c0a8be2dd08e9445326a82182e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-iwata-catalog-current-4-p7"
    ],
    "demandExplanation": [
      "october8-tools-iwata-catalog-current-4-p7"
    ]
  },
  "notes": [
    "Le code W0SPG84AG13C associe la buse 1.3 mm au chapeau HVLP, en alimentation gravité, avec un débit de produit de 150 mL/min et un jet de 280 mm au point publié.",
    "Le catalogue 2025 publie la consommation en Nℓ/min, sans définir les conditions de référence du volume normalisé ; cette valeur n’est pas assimilée au FAD en L/min.",
    "La consommation appartient au point du tableau commun à la configuration, sans essai physique CompatAir ni extrapolation à une autre pression.",
    "Le catalogue porte une couverture 2025 et conserve une ancienne mention de liste de prix 2020 sur certaines pages ; la date de fabrication et la disponibilité en France ne sont pas établies.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
