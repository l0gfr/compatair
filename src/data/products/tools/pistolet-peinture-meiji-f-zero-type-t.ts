import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f-zero-type-t",
  "slug": "pistolet-peinture-meiji-f-zero-type-t",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F-ZERO Type T",
  "brand": "Meiji",
  "model": "F-ZERO Type T",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 196,
    "typical": 196,
    "max": 196
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f-zero",
    "label": "F-ZERO Type T",
    "distinguishingAttributes": {
      "Buse déclarée": "1.4 mm",
      "Alimentation": "gravité",
      "Chapeau d’air": "T",
      "Débit de produit au point documenté": "140 mL/min",
      "Masse déclarée": "295 g"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f-zero-type-t.svg",
    "alt": "Repères techniques : Meiji F-ZERO Type T",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F-ZERO Type T. Consommation constructeur au point documenté : 196 L/min à 2 bar. Modèle du tableau constructeur F-ZERO Type T : buse 1.4 mm, alimentation gravité, chapeau T. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1.4 mm.",
      "Alimentation : gravité.",
      "Chapeau d’air : T.",
      "Débit de produit au point documenté : 140 mL/min.",
      "Masse déclarée : 295 g.",
      "Consommation publiée dans son unité originale : 196 L/min.",
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
        "october7-tools-meiji-guns-p7"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october7-tools-meiji-guns-p7"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "T",
      "evidenceIds": [
        "october7-tools-meiji-guns-p7"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "140 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p7"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "295 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "196 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.2 MPa à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-meiji-guns-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-meiji-guns-p7",
      "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf#page=7",
      "sourceLabel": "Meiji, catalogue fabricant des pistolets et soufflettes, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 dcef5ad2d88e7daf784b313e085e0e3ad09e564fbaebb96d9296c29f6a5cea8e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-meiji-guns-p7"
    ],
    "airflowLpm": [
      "october7-tools-meiji-guns-p7"
    ]
  },
  "notes": [
    "Modèle du tableau constructeur F-ZERO Type T : buse 1.4 mm, alimentation gravité, chapeau T. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
