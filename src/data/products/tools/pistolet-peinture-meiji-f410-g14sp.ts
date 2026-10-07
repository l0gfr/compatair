import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f410-g14sp",
  "slug": "pistolet-peinture-meiji-f410-g14sp",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F410-G14SP",
  "brand": "Meiji",
  "model": "F410-G14SP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 295,
    "typical": 295,
    "max": 295
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f410",
    "label": "F410-G14SP",
    "distinguishingAttributes": {
      "Buse déclarée": "1.4 mm",
      "Alimentation": "gravité",
      "Chapeau d’air": "SP",
      "Débit de produit au point documenté": "175 mL/min",
      "Largeur du jet au point documenté": "310 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f410-g14sp.svg",
    "alt": "Repères techniques : Meiji F410-G14SP",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F410-G14SP. Consommation constructeur au point documenté : 295 L/min à 2 bar. Modèle du tableau constructeur F410-G14SP : buse 1.4 mm, alimentation gravité, chapeau SP. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1.4 mm.",
      "Alimentation : gravité.",
      "Chapeau d’air : SP.",
      "Débit de produit au point documenté : 175 mL/min.",
      "Largeur du jet au point documenté : 310 mm.",
      "Masse déclarée : 415 g.",
      "Consommation publiée dans son unité originale : 295 L/min.",
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
      "value": "1.4 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "SP",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "175 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "310 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "415 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "295 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.2 MPa à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-meiji-guns-p6",
      "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf#page=6",
      "sourceLabel": "Meiji, catalogue fabricant des pistolets et soufflettes, page PDF 6",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 dcef5ad2d88e7daf784b313e085e0e3ad09e564fbaebb96d9296c29f6a5cea8e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-meiji-guns-p6"
    ],
    "airflowLpm": [
      "october7-tools-meiji-guns-p6"
    ]
  },
  "notes": [
    "Modèle du tableau constructeur F410-G14SP : buse 1.4 mm, alimentation gravité, chapeau SP. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
