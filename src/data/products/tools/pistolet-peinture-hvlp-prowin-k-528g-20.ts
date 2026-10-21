import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-k-528g-20",
  "slug": "pistolet-peinture-hvlp-prowin-k-528g-20",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin K-528G-20",
  "brand": "ProWin",
  "model": "K-528G-20",
  "mpn": "K-528G-20",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-k-528g-20.svg",
    "alt": "Repères techniques : ProWin K-528G-20",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-528g-20",
    "label": "Référence K-528G-20",
    "distinguishingAttributes": {
      "reference": "K-528G-20",
      "Buse": "2.0 mm",
      "Largeur de jet": "310 mm"
    }
  },
  "editorial": {
    "overview": "K-528G-20 : buse de 2,0 mm et godet latéral de 400 cm³. Le tableau lui attribue la cellule produit 200, contre 170 pour la K-528G-17, mais conserve 310 mm de jet et 250 L/min d’air. L’intitulé produit est en ml sans durée : ces cellules ne sont pas des ml/min ni une preuve de productivité. Le calibre, le produit et le jet utile se choisissent sans économie d’air déduite du diamètre.",
    "verifiedFacts": [
      "Buse : 2.0 mm.",
      "Largeur de jet : 310 mm."
    ],
    "limitations": [
      "La plage 20–28 psi ne relie pas un point de pression aux 250 L/min. Le code SG du kit de réparation n’est pas la référence d’un pistolet complet.",
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
      "value": "2.0 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    },
    {
      "label": "Largeur de jet",
      "value": "310 mm",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "250 L/min",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Working Pressure : 20~28 psi",
      "evidenceIds": [
        "october4-tools-prowin-painting-p16"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-prowin-painting-p16",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=16",
      "sourceLabel": "ProWin : Air Painting Tools, catalogue lié par le fabricant, page PDF 16",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-prowin-painting-p16"
    ],
    "workingPressureBar": [
      "october4-tools-prowin-painting-p16"
    ],
    "demandExplanation": [
      "october4-tools-prowin-painting-p16"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
