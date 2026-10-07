import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "burineur-yutani-pc-3n",
  "slug": "burineur-yutani-pc-3n",
  "categoryId": "burineur",
  "category": "burineur",
  "label": "Yutani PC-3N",
  "brand": "Yutani",
  "model": "PC-3N",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.9
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-pc-3n",
    "label": "PC-3N",
    "distinguishingAttributes": {
      "Cadence de frappe publiée": "2300 coups/min",
      "Piston, diamètre ×course": "28.5 × 76 mm",
      "Emmanchement ou aiguilles": "rond ou hexagonal",
      "Masse publiée": "6.3 kg",
      "Longueur hors tout": "394 mm"
    }
  },
  "image": {
    "src": "/images/products/burineur-yutani-pc-3n.svg",
    "alt": "Repères techniques : Yutani PC-3N",
    "sourceUrl": "https://yutani.co.jp/en/AIR%20HAMMERS%20S1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani PC-3N. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. PC-3N : 2300 coups/min, piston 28.5 ×76 mm, masse 6.3 kg et longueur 394 mm.",
    "verifiedFacts": [
      "Cadence de frappe publiée : 2300 coups/min.",
      "Piston, diamètre ×course : 28.5 × 76 mm.",
      "Emmanchement ou aiguilles : rond ou hexagonal.",
      "Masse publiée : 6.3 kg.",
      "Longueur hors tout : 394 mm.",
      "Entrée d’air : 1/4 P.T..",
      "Fonction dans le tableau : Burineur, frappe générale.",
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
      "value": "28.5 × 76 mm",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Emmanchement ou aiguilles",
      "value": "rond ou hexagonal",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "6.3 kg",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "394 mm",
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
      "value": "Burineur, frappe générale",
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
    "PC-3N : 2300 coups/min, piston 28.5 ×76 mm, masse 6.3 kg et longueur 394 mm.",
    "La pression 0.59 MPa figure en en-tête du tableau, mais la consommation d’air de chaque marteau n’est pas publiée. Aucun L/min n’est déduit de la cadence mécanique.",
    "Le tableau est une édition constructeur archivée. Disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
