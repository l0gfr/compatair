import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "perceuse-yutani-ybd-10",
  "slug": "perceuse-yutani-ybd-10",
  "categoryId": "perceuse",
  "category": "perceuse",
  "label": "Yutani YBD-10",
  "brand": "Yutani",
  "model": "YBD-10",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 5.9
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "yutani-ybd-10",
    "label": "YBD-10",
    "distinguishingAttributes": {
      "Capacité nominale publiée": "10 mm",
      "Vitesse à vide publiée": "1000 tr/min",
      "Masse publiée": "1.6 kg",
      "Longueur hors tout": "217 mm",
      "Entrée d’air": "1/4 P.T."
    }
  },
  "image": {
    "src": "/images/products/perceuse-yutani-ybd-10.svg",
    "alt": "Repères techniques : Yutani YBD-10",
    "sourceUrl": "https://yutani.co.jp/en/AIR%20DRILLS%20S1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Yutani YBD-10. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. YBD-10 : Capacité nominale publiée 10 mm; Vitesse à vide publiée 1000 tr/min; Masse publiée 1.6 kg; Longueur hors tout 217 mm.",
    "verifiedFacts": [
      "Capacité nominale publiée : 10 mm.",
      "Vitesse à vide publiée : 1000 tr/min.",
      "Masse publiée : 1.6 kg.",
      "Longueur hors tout : 217 mm.",
      "Entrée d’air : 1/4 P.T..",
      "Forme de l’outil dans le catalogue : Perceuse révolver.",
      "Consommation publiée dans son unité originale : La consommation d’air n’est pas publiée dans ce tableau..",
      "Pression dans la source : Air pressure 0.59 MPa, en-tête constructeur.."
    ],
    "limitations": [
      "La consommation d’air manque dans le tableau de ce modèle. Aucun débit d’une référence voisine n’est transféré.",
      "Vitesse à vide, capacité et masse décrivent l’outil ; elles ne déterminent pas son besoin d’air en charge.",
      "La source est une édition constructeur archivée. La présence de l’outil ne garantit pas sa disponibilité actuelle en France.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Capacité nominale publiée",
      "value": "10 mm",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    },
    {
      "label": "Vitesse à vide publiée",
      "value": "1000 tr/min",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "1.6 kg",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    },
    {
      "label": "Longueur hors tout",
      "value": "217 mm",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "1/4 P.T.",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    },
    {
      "label": "Forme de l’outil dans le catalogue",
      "value": "Perceuse révolver",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "La consommation d’air n’est pas publiée dans ce tableau.",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air pressure 0.59 MPa, en-tête constructeur.",
      "evidenceIds": [
        "october7-tools-yutani-drills-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-yutani-drills-p1",
      "sourceUrl": "https://yutani.co.jp/en/AIR%20DRILLS%20S1.pdf#page=1",
      "sourceLabel": "Yutani Air Drills, tableaux originaux perceuses, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 7ed901bbf5073747e7c93e110e86dc44b107013b390ad948b70834e4e2194d7f. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-yutani-drills-p1"
    ],
    "demandExplanation": [
      "october7-tools-yutani-drills-p1"
    ]
  },
  "notes": [
    "YBD-10 : Capacité nominale publiée 10 mm; Vitesse à vide publiée 1000 tr/min; Masse publiée 1.6 kg; Longueur hors tout 217 mm.",
    "La consommation d’air manque dans le tableau de ce modèle. Aucun débit d’une référence voisine n’est transféré.",
    "Vitesse à vide, capacité et masse décrivent l’outil ; elles ne déterminent pas son besoin d’air en charge.",
    "La source est une édition constructeur archivée. La présence de l’outil ne garantit pas sa disponibilité actuelle en France.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
