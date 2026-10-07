import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f110l-g15ls",
  "slug": "pistolet-peinture-meiji-f110l-g15ls",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F110L-G15LS",
  "brand": "Meiji",
  "model": "F110L-G15LS",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 1.2,
    "typical": 1.2,
    "max": 1.2
  },
  "airflowLpm": {
    "min": 235,
    "typical": 235,
    "max": 235
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f110l",
    "label": "F110L-G15LS",
    "distinguishingAttributes": {
      "Buse déclarée": "1.5 mm",
      "Alimentation": "gravité",
      "Débit de produit au point documenté": "115 mL/min",
      "Largeur du jet au point documenté": "270 mm",
      "Masse déclarée": "308 g"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f110l-g15ls.svg",
    "alt": "Repères techniques : Meiji F110L-G15LS",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F110L-G15LS. Consommation constructeur au point documenté : 235 L/min à 1.2 bar. Modèle du tableau constructeur F110L-G15LS : buse 1.5 mm, alimentation gravité. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1.5 mm.",
      "Alimentation : gravité.",
      "Débit de produit au point documenté : 115 mL/min.",
      "Largeur du jet au point documenté : 270 mm.",
      "Masse déclarée : 308 g.",
      "Consommation publiée dans son unité originale : 235 L/min.",
      "Pression dans la source : 0.12 MPa à l’entrée, point de consommation."
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
      "value": "1.5 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p9"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october7-tools-meiji-guns-p9"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "115 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p9"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "270 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p9"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "308 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p9"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "235 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p9"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.12 MPa à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-meiji-guns-p9"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-meiji-guns-p9",
      "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf#page=9",
      "sourceLabel": "Meiji, catalogue fabricant des pistolets et soufflettes, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 dcef5ad2d88e7daf784b313e085e0e3ad09e564fbaebb96d9296c29f6a5cea8e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-meiji-guns-p9"
    ],
    "airflowLpm": [
      "october7-tools-meiji-guns-p9"
    ]
  },
  "notes": [
    "Modèle du tableau constructeur F110L-G15LS : buse 1.5 mm, alimentation gravité. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
