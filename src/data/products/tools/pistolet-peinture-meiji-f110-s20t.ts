import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f110-s20t",
  "slug": "pistolet-peinture-meiji-f110-s20t",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F110-S20T",
  "brand": "Meiji",
  "model": "F110-S20T",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 225,
    "typical": 225,
    "max": 225
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f110",
    "label": "F110-S20T",
    "distinguishingAttributes": {
      "Buse déclarée": "2 mm",
      "Alimentation": "aspiration",
      "Chapeau d’air": "20T",
      "Débit de produit au point documenté": "180 mL/min",
      "Largeur du jet au point documenté": "210 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f110-s20t.svg",
    "alt": "Repères techniques : Meiji F110-S20T",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F110-S20T. Consommation constructeur au point documenté : 225 L/min à 2 bar. Modèle du tableau constructeur F110-S20T : buse 2 mm, alimentation aspiration, chapeau 20T. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 2 mm.",
      "Alimentation : aspiration.",
      "Chapeau d’air : 20T.",
      "Débit de produit au point documenté : 180 mL/min.",
      "Largeur du jet au point documenté : 210 mm.",
      "Masse déclarée : 293 g.",
      "Consommation publiée dans son unité originale : 225 L/min.",
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
      "value": "2 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Alimentation",
      "value": "aspiration",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "20T",
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
      "value": "210 mm",
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
      "value": "225 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p4"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.2 MPa à l’entrée, point de consommation",
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
    "Modèle du tableau constructeur F110-S20T : buse 2 mm, alimentation aspiration, chapeau 20T. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
