import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f210b-s30",
  "slug": "pistolet-peinture-meiji-f210b-s30",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F210B-S30",
  "brand": "Meiji",
  "model": "F210B-S30",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.5,
    "typical": 2.5,
    "max": 2.5
  },
  "airflowLpm": {
    "min": 320,
    "typical": 320,
    "max": 320
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f210",
    "label": "F210B-S30",
    "distinguishingAttributes": {
      "Buse déclarée": "3 mm",
      "Alimentation": "aspiration",
      "Chapeau d’air": "30",
      "Débit de produit au point documenté": "360 mL/min",
      "Largeur du jet au point documenté": "300 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f210b-s30.svg",
    "alt": "Repères techniques : Meiji F210B-S30",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F210B-S30. Consommation constructeur au point documenté : 320 L/min à 2.5 bar. Modèle du tableau constructeur F210B-S30 : buse 3 mm, alimentation aspiration, chapeau 30. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 3 mm.",
      "Alimentation : aspiration.",
      "Chapeau d’air : 30.",
      "Débit de produit au point documenté : 360 mL/min.",
      "Largeur du jet au point documenté : 300 mm.",
      "Masse déclarée : 391 g.",
      "Consommation publiée dans son unité originale : 320 L/min.",
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
      "value": "3 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Alimentation",
      "value": "aspiration",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "30",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "360 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "300 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "391 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "320 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p5"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.25 MPa à l’entrée, point de consommation",
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
    "Modèle du tableau constructeur F210B-S30 : buse 3 mm, alimentation aspiration, chapeau 30. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
