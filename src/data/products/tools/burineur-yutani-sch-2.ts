import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-yutani-sch-2",
  "slug": "burineur-yutani-sch-2",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Yutani SCH-2",
  "brand": "Yutani",
  "model": "SCH-2",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-sch-2",
    "label": "SCH-2",
    "distinguishingAttributes": {
      "Cadence de frappe publiée": "4000 coups/min",
      "Piston, diamètre ×course": "30 × 30 mm",
      "Emmanchement ou aiguilles": "forme non publiée",
      "Masse publiée": "2.5 kg",
      "Longueur hors tout": "540 mm"
    }
  },
  "image": {
    "src": "/images/products/burineur-yutani-sch-2.svg",
    "alt": "Repères techniques : Yutani SCH-2",
    "sourceUrl": "https://yutani.co.jp/en/AIR%20HAMMERS%20S1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani SCH-2. Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution. SCH-2 : 4000 coups/min, piston 30 ×30 mm, masse 2.5 kg et longueur 540 mm.",
    "verifiedFacts": [
      "Cadence de frappe publiée : 4000 coups/min.",
      "Piston, diamètre ×course : 30 × 30 mm.",
      "Emmanchement ou aiguilles : forme non publiée.",
      "Masse publiée : 2.5 kg.",
      "Longueur hors tout : 540 mm.",
      "Entrée d’air : 3/8 P.T..",
      "Fonction dans le tableau : Élimination de rouille.",
      "Contradiction d’identité dans la source : SCH-2 dans le tableau, SHC-2 sous la photographie.",
      "Consommation publiée dans son unité originale : Consommation d’air non publiée pour ce modèle..",
      "Pression dans la source : Air pressure0.59 MPa, en-tête fabricant.."
    ],
    "limitations": [
      "Les deux libellés SCH-2/SHC-2 sont conservés. Aucun numéro de pièce ni équivalence commerciale n’est déduit de cette contradiction.",
      "La pression 0.59 MPa figure en en-tête du tableau, mais la consommation d’air de chaque marteau n’est pas publiée. Aucun L/min n’est déduit de la cadence mécanique.",
      "Le tableau est une édition constructeur archivée. Disponibilité actuelle en France non vérifiée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Cadence de frappe publiée",
      "value": "4000 coups/min",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Piston, diamètre ×course",
      "value": "30 × 30 mm",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Emmanchement ou aiguilles",
      "value": "forme non publiée",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "2.5 kg",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "540 mm",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "3/8 P.T.",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Fonction dans le tableau",
      "value": "Élimination de rouille",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Contradiction d’identité dans la source",
      "value": "SCH-2 dans le tableau, SHC-2 sous la photographie",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Consommation d’air non publiée pour ce modèle.",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air pressure0.59 MPa, en-tête fabricant.",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-yutani-hammers-p1",
      "sourceUrl": "https://yutani.co.jp/en/AIR%20HAMMERS%20S1.pdf#page=1",
      "sourceLabel": "Yutani, Air Hammers, tableau constructeur, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 c6c4b2f581c2112441a2ae765d229dd7a3e092fa3c9d69a91c7fdb9c62294d72. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-yutani-hammers-p1"
    ],
    "demandExplanation": [
      "october7-tools-yutani-hammers-p1"
    ]
  },
  "notes": [
    "SCH-2 : 4000 coups/min, piston 30 ×30 mm, masse 2.5 kg et longueur 540 mm.",
    "Les deux libellés SCH-2/SHC-2 sont conservés. Aucun numéro de pièce ni équivalence commerciale n’est déduit de cette contradiction.",
    "La pression 0.59 MPa figure en en-tête du tableau, mais la consommation d’air de chaque marteau n’est pas publiée. Aucun L/min n’est déduit de la cadence mécanique.",
    "Le tableau est une édition constructeur archivée. Disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
