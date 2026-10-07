import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-yutani-arc-100y",
  "slug": "burineur-yutani-arc-100y",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Yutani ARC-100Y",
  "brand": "Yutani",
  "model": "ARC-100Y",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.9
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-arc-100y",
    "label": "ARC-100Y",
    "distinguishingAttributes": {
      "Cadence de frappe publiée": "2300 coups/min",
      "Piston, diamètre ×course": "12.7 × 100 mm",
      "Emmanchement ou aiguilles": "burin10.1 mm",
      "Masse publiée": "1.5 kg",
      "Longueur hors tout": "218 mm"
    }
  },
  "image": {
    "src": "/images/products/burineur-yutani-arc-100y.svg",
    "alt": "Repères techniques : Yutani ARC-100Y",
    "sourceUrl": "https://yutani.co.jp/en/AIR%20HAMMERS%20S1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani ARC-100Y. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. ARC-100Y : 2300 coups/min, piston 12.7 ×100 mm, masse 1.5 kg et longueur 218 mm.",
    "verifiedFacts": [
      "Cadence de frappe publiée : 2300 coups/min.",
      "Piston, diamètre ×course : 12.7 × 100 mm.",
      "Emmanchement ou aiguilles : burin10.1 mm.",
      "Masse publiée : 1.5 kg.",
      "Longueur hors tout : 218 mm.",
      "Entrée d’air : 1/4 P.T..",
      "Fonction dans le tableau : Duralumin6.4 mm ; acier4.8 mm.",
      "Consommation publiée dans son unité originale : Consommation d’air non publiée pour ce modèle..",
      "Pression dans la source : Air pressure0.59 MPa, en-tête fabricant.."
    ],
    "limitations": [
      "La pression 0.59 MPa figure en en-tête du tableau, mais la consommation d’air de chaque marteau n’est pas publiée. Aucun L/min n’est déduit de la cadence mécanique.",
      "Le tableau est une édition constructeur archivée. Disponibilité actuelle en France non vérifiée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Cadence de frappe publiée",
      "value": "2300 coups/min",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Piston, diamètre ×course",
      "value": "12.7 × 100 mm",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Emmanchement ou aiguilles",
      "value": "burin10.1 mm",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "1.5 kg",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "218 mm",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "1/4 P.T.",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Fonction dans le tableau",
      "value": "Duralumin6.4 mm ; acier4.8 mm",
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
    "ARC-100Y : 2300 coups/min, piston 12.7 ×100 mm, masse 1.5 kg et longueur 218 mm.",
    "La pression 0.59 MPa figure en en-tête du tableau, mais la consommation d’air de chaque marteau n’est pas publiée. Aucun L/min n’est déduit de la cadence mécanique.",
    "Le tableau est une édition constructeur archivée. Disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
