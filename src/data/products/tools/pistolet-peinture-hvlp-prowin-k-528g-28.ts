import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-prowin-k-528g-28",
  "slug": "pistolet-peinture-hvlp-prowin-k-528g-28",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ProWin K-528G-28",
  "brand": "ProWin",
  "model": "K-528G-28",
  "mpn": "K-528G-28",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 1.378951,
    "max": 1.930532
  },
  "demandExplanation": "La ligne K-528G-28 publie 250 L/min et la famille une plage de 20 à 28 psi. Le régime et la pression unique associés à cette consommation restent à documenter.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-prowin-k-528g-28.svg",
    "alt": "Repères techniques : ProWin K-528G-28",
    "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "prowin-k-528g-28",
    "label": "Référence K-528G-28",
    "distinguishingAttributes": {
      "reference": "K-528G-28",
      "Buse": "2.8 mm",
      "Largeur de jet": "310 mm"
    }
  },
  "editorial": {
    "overview": "K-528G-28 : variante HVLP à buse de 2,8 mm, godet latéral gravitaire de 400 cm³ et jet annoncé de 310 mm. La K-528G-24 de 2,4 mm présente le même jet et les mêmes 250 L/min. Le catalogue donne 20 à 28 psi pour la famille, sans point de consommation apparié à une pression unique.",
    "verifiedFacts": [
      "K-528G-28 et K-528G-24 : buses 2,8 et 2,4 mm ; même jet annoncé de 310 mm et même consommation publiée de 250 L/min. La différence de buse seule ne démontre pas un besoin de compresseur distinct.",
      "La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
    ],
    "limitations": [
      "Conserver le profil non conclusif : unité L/min connue, régime et pression de mesure unique manquants.",
      "La colonne Fluid Output est en ml, sans durée ; 290 ml ne devient pas un débit de peinture."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "2.8 mm",
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
    },
    {
      "id": "review-20261025-pistolet-peinture-hvlp-prowin-k-528g-28-s007",
      "sourceUrl": "https://www.prowin-tools.com/wp-content/uploads/2023/05/Air-Painting-ToolsNew.pdf#page=16",
      "sourceLabel": "Relecture fabricant du 25 octobre 2026, s007, pages PDF 16",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-25",
      "confidence": "B",
      "notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:17.981617+00:00, SHA-256 2cd45573cff8decba50b2fbbfe2127d8e4bc1c3f1fdb6550e2f2467703941213. K-528G-28 et K-528G-24 : buses 2,8 et 2,4 mm ; même jet annoncé de 310 mm et même consommation publiée de 250 L/min. La différence de buse seule ne démontre pas un besoin de compresseur distinct. Limite : Conserver le profil non conclusif : unité L/min connue, régime et pression de mesure unique manquants."
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
      "october4-tools-prowin-painting-p16",
      "review-20261025-pistolet-peinture-hvlp-prowin-k-528g-28-s007"
    ],
    "connectorSize": [
      "review-20261025-pistolet-peinture-hvlp-prowin-k-528g-28-s007"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
    "Relecture proposée du 25 octobre 2026 : Conserver le profil non conclusif : unité L/min connue, régime et pression de mesure unique manquants."
  ],
  "connectorSize": "1/4\""
};

export default product;
