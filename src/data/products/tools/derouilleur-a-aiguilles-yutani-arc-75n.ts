import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "derouilleur-a-aiguilles-yutani-arc-75n",
  "slug": "derouilleur-a-aiguilles-yutani-arc-75n",
  "categoryId": "derouilleur-a-aiguilles",
  "category": "derouilleur-a-aiguilles",
  "label": "Yutani ARC-75N",
  "brand": "Yutani",
  "model": "ARC-75N",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.9
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-arc-75n",
    "label": "ARC-75N",
    "distinguishingAttributes": {
      "Cadence de frappe publiée": "3100 coups/min",
      "Piston, diamètre ×course": "20 × 75 mm",
      "Emmanchement ou aiguilles": "aiguilles3 mm ×16",
      "Masse publiée": "2.1 kg",
      "Longueur hors tout": "378 mm"
    }
  },
  "image": {
    "src": "/images/products/derouilleur-a-aiguilles-yutani-arc-75n.svg",
    "alt": "Repères techniques : Yutani ARC-75N",
    "sourceUrl": "https://yutani.co.jp/en/AIR%20HAMMERS%20S1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani ARC-75N. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. ARC-75N : 3100 coups/min, piston 20 ×75 mm, masse 2.1 kg et longueur 378 mm.",
    "verifiedFacts": [
      "Cadence de frappe publiée : 3100 coups/min.",
      "Piston, diamètre ×course : 20 × 75 mm.",
      "Emmanchement ou aiguilles : aiguilles3 mm ×16.",
      "Masse publiée : 2.1 kg.",
      "Longueur hors tout : 378 mm.",
      "Entrée d’air : 1/4 P.T..",
      "Fonction dans le tableau : Élimination de scories.",
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
      "value": "3100 coups/min",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Piston, diamètre ×course",
      "value": "20 × 75 mm",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Emmanchement ou aiguilles",
      "value": "aiguilles3 mm ×16",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "2.1 kg",
      "evidenceIds": [
        "october7-tools-yutani-hammers-p1"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "378 mm",
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
      "value": "Élimination de scories",
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
    "ARC-75N : 3100 coups/min, piston 20 ×75 mm, masse 2.1 kg et longueur 378 mm.",
    "La pression 0.59 MPa figure en en-tête du tableau, mais la consommation d’air de chaque marteau n’est pas publiée. Aucun L/min n’est déduit de la cadence mécanique.",
    "Le tableau est une édition constructeur archivée. Disponibilité actuelle en France non vérifiée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
