import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-k-528s-14",
  "slug": "pistolet-peinture-hvlp-prowin-k-528s-14",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin K-528S-14",
  "brand": "ProWin",
  "model": "K-528S-14",
  "mpn": "K-528S-14",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-k-528s-14-technical-20261116-reviews.svg",
    "alt": "Repères techniques : ProWin K-528S-14",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "variant": {
    "familyId": "prowin-k-528s-14",
    "label": "Référence K-528S-14",
    "distinguishingAttributes": {
      "reference": "K-528S-14",
      "Buse": "1.4 mm",
      "Largeur de jet": "300 mm"
    }
  },
  "editorial": {
    "overview": "Le K-528S-14 est un pistolet HVLP à aspiration avec godet de 1 000 cm³ et buse de 1,4 mm. Il garde les 250 L/min publiés du K-528S-12, avec une largeur de jet de 300 mm contre 290 mm. La version 1,7 mm monte à 260 L/min. Ces consommations n’ont pas de régime ni de pression de mesure explicites ; la plage de service 20–28 psi reste séparée. La colonne Fluid Output est en ml, sans durée permettant d’en faire un débit.",
    "verifiedFacts": [
      "Buse : 1.4 mm.",
      "Largeur de jet : 300 mm."
    ],
    "limitations": [
      "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
      "La table publie une consommation, sans pression de mesure précise ni protocole de pulvérisation lié à cette valeur.",
      "Les codes SG de la colonne Turn-up Kit sont des kits de réparation et ne constituent pas des références de pistolets.",
      "Fluid Output est libellé « ml » ; aucune durée ne permet de le publier comme un débit.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.4 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p17"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "300 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p17"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "250 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p17"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-prowin-painting-p17"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p17",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=17",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 17",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-reviews:pistolet-peinture-hvlp-prowin-k-528s-14:0",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
      "sourceLabel": "ProWin, document constructeur relu le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le K-528S-14 est un pistolet HVLP à aspiration avec godet de 1 000 cm³ et buse de 1,4 mm. Il garde les 250 L/min publiés du K-528S-12, avec une largeur de jet de 300 mm contre 290 mm. La version 1,7 mm monte à 260 L/min. Ces consommations n’ont pas de régime ni de pression de mesure explicites ; la plage de service 20–28 psi reste séparée. La colonne Fluid Output est en ml, sans durée permettant d’en faire un débit. GET complet SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Pages PDF lues : 17."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p17"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p17"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p17"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
