import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f110-p08p",
  "slug": "pistolet-peinture-meiji-f110-p08p",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F110-P08P",
  "brand": "Meiji",
  "model": "F110-P08P",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.5,
    "typical": 2.5,
    "max": 2.5
  },
  "airflowLpm": {
    "min": 220,
    "typical": 220,
    "max": 220
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f110",
    "label": "F110-P08P",
    "distinguishingAttributes": {
      "Buse déclarée": "0.8 mm",
      "Alimentation": "pression produit",
      "Chapeau d’air": "08P",
      "Débit de produit au point documenté": "180 mL/min",
      "Largeur du jet au point documenté": "230 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f110-p08p.svg",
    "alt": "Repères techniques : Meiji F110-P08P",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F110-P08P. Consommation constructeur au point documenté : 220 L/min à 2.5 bar. Modèle du tableau constructeur F110-P08P : buse 0.8 mm, alimentation pression produit, chapeau 08P. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 0.8 mm.",
      "Alimentation : pression produit.",
      "Chapeau d’air : 08P.",
      "Débit de produit au point documenté : 180 mL/min.",
      "Largeur du jet au point documenté : 230 mm.",
      "Masse déclarée : 293 g.",
      "Consommation publiée dans son unité originale : 220 L/min.",
      "Pression dans la source : 0.25 MPa à l’entrée, point de consommation."
    ],
    "limitations": [
      "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
      "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
      "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse déclarée",
      "value": "0.8 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression produit",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "08P",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "180 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "230 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "293 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.25 MPa à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-meiji-guns-p4",
      "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf#page=4",
      "sourceLabel": "Meiji, catalogue fabricant des pistolets et soufflettes, page PDF 4",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 dcef5ad2d88e7daf784b313e085e0e3ad09e564fbaebb96d9296c29f6a5cea8e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-meiji-guns-p4"
    ],
    "airflowLpm": [
      "october7-tools-meiji-guns-p4"
    ]
  },
  "notes": [
    "Modèle du tableau constructeur F110-P08P : buse 0.8 mm, alimentation pression produit, chapeau 08P. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
