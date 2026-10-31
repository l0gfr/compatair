import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-k-528m-10",
  "slug": "pistolet-peinture-hvlp-prowin-k-528m-10",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin K-528M-10",
  "brand": "ProWin",
  "model": "K-528M-10",
  "mpn": "K-528M-10",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-k-528m-10.svg",
    "alt": "Repères techniques : ProWin K-528M-10",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-528m-10",
    "label": "Référence K-528M-10",
    "distinguishingAttributes": {
      "reference": "K-528M-10",
      "Buse": "1.0 mm",
      "Largeur de jet": "290 mm"
    }
  },
  "editorial": {
    "overview": "K-528M-10 : passer à la buse de 1,0 mm ne démontre pas un besoin de compresseur plus faible que pour le K-528M-14 de 1,4 mm. ProWin affiche 250 L/min pour les deux lignes, avec des largeurs de jet de 290 et 300 mm. La plage de service 20–28 psi reste distincte de la pression de mesure de cette consommation, non précisée.",
    "verifiedFacts": [
      "Buse : 1.0 mm.",
      "Largeur de jet : 290 mm.",
      "La ligne K-528M-10 associe buse 1,0 mm, jet 290 mm et kit SG018-528-10. La ligne standard K-528M-14 associe 1,4 mm, jet 300 mm et kit SG018-528-14.",
      "Les sept calibres K-528M de 1,0 à 2,8 mm affichent tous 250 L/min dans ce tableau ; la réduction de buse ne justifie donc pas de réduire le compresseur sur la seule lecture de ces lignes.",
      "Le tableau nomme Fluid Output des valeurs de 90 et 150 ml pour les versions 1,0 et 1,4 mm, sans période : elles ne sont pas converties en ml/min."
    ],
    "limitations": [
      "La table publie une consommation, sans pression de mesure précise ni protocole de pulvérisation lié à cette valeur.",
      "Les codes SG de la colonne Turn-up Kit sont des kits de réparation et ne constituent pas des références de pistolets.",
      "Fluid Output est libellé « ml » ; aucune durée ne permet de le publier comme un débit.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué.",
      "Les 250 L/min restent hors du calcul : pression de mesure exacte et régime de pulvérisation associés à cette valeur à confirmer. Aucune consommation propre à une peinture ou un réglage n’est déduite."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.0 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p15"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "290 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p15"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "250 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p15"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 20~28 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p15"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p15",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=15",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    },
    {
      "id": "review-20261031-pistolet-peinture-hvlp-prowin-k-528m-10-1",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=15",
      "sourceLabel": "Relecture du modèle et de son voisin, 31 octobre 2026, pages PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-31",
      "confidence": "B",
      "notes": "Réponse primaire complète reçue le 31 octobre 2026 ; passages déterminants relus. SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Comparaison documentaire, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p15"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p15"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p15"
    ],
    "editorial": [
      "review-20261031-pistolet-peinture-hvlp-prowin-k-528m-10-1"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
