import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-finer-spot-g12",
  "slug": "pistolet-peinture-meiji-finer-spot-g12",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji FINER SPOT-G12",
  "brand": "Meiji",
  "model": "FINER SPOT-G12",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 1.5,
    "typical": 1.5,
    "max": 1.5
  },
  "airflowLpm": {
    "min": 80,
    "typical": 80,
    "max": 80
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-finer",
    "label": "FINER SPOT-G12",
    "distinguishingAttributes": {
      "Buse déclarée": "1.2 mm",
      "Alimentation": "gravité",
      "Débit de produit au point documenté": "75 mL/min",
      "Largeur du jet au point documenté": "140 mm",
      "Masse déclarée": "167 g"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-finer-spot-g12.svg",
    "alt": "Repères techniques : Meiji FINER SPOT-G12",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji FINER SPOT-G12. Consommation constructeur au point documenté : 80 L/min à 1.5 bar. Modèle du tableau constructeur FINER SPOT-G12 : buse 1.2 mm, alimentation gravité. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1.2 mm.",
      "Alimentation : gravité.",
      "Débit de produit au point documenté : 75 mL/min.",
      "Largeur du jet au point documenté : 140 mm.",
      "Masse déclarée : 167 g.",
      "Consommation publiée dans son unité originale : 80 L/min.",
      "Pression dans la source : 0.15 MPa à l’entrée, point de consommation."
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
      "value": "1.2 mm",
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
      "label": "Débit de produit au point documenté",
      "value": "75 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "140 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "167 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "80 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.15 MPa à l’entrée, point de consommation",
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
    "Modèle du tableau constructeur FINER SPOT-G12 : buse 1.2 mm, alimentation gravité. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
