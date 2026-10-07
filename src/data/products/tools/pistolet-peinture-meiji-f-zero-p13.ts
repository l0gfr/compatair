import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f-zero-p13",
  "slug": "pistolet-peinture-meiji-f-zero-p13",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F-ZERO-P13",
  "brand": "Meiji",
  "model": "F-ZERO-P13",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 230,
    "typical": 230,
    "max": 230
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f-zero",
    "label": "F-ZERO-P13",
    "distinguishingAttributes": {
      "Buse déclarée": "1.3 mm",
      "Alimentation": "pression produit",
      "Chapeau d’air": "Type P",
      "Débit de produit au point documenté": "340 mL/min",
      "Largeur du jet au point documenté": "320 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f-zero-p13.svg",
    "alt": "Repères techniques : Meiji F-ZERO-P13",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F-ZERO-P13. Consommation constructeur au point documenté : 230 L/min à 2 bar. Modèle du tableau constructeur F-ZERO-P13 : buse 1.3 mm, alimentation pression produit, chapeau Type P. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1.3 mm.",
      "Alimentation : pression produit.",
      "Chapeau d’air : Type P.",
      "Débit de produit au point documenté : 340 mL/min.",
      "Largeur du jet au point documenté : 320 mm.",
      "Masse déclarée : 295 g.",
      "Consommation publiée dans son unité originale : 230 L/min.",
      "Pression dans la source : 0.2 MPa à l’entrée, point de consommation."
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
      "value": "1.3 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression produit",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "Type P",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "340 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "320 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "295 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "230 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.2 MPa à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-meiji-guns-p5",
      "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf#page=5",
      "sourceLabel": "Meiji, catalogue fabricant des pistolets et soufflettes, page PDF 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 dcef5ad2d88e7daf784b313e085e0e3ad09e564fbaebb96d9296c29f6a5cea8e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-meiji-guns-p5"
    ],
    "airflowLpm": [
      "october7-tools-meiji-guns-p5"
    ]
  },
  "notes": [
    "Modèle du tableau constructeur F-ZERO-P13 : buse 1.3 mm, alimentation pression produit, chapeau Type P. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
