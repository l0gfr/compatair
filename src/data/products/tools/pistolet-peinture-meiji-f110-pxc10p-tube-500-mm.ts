import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f110-pxc10p-tube-500-mm",
  "slug": "pistolet-peinture-meiji-f110-pxc10p-tube-500-mm",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F110-PXC10P, tube 500 mm",
  "brand": "Meiji",
  "model": "F110-PXC10P, tube 500 mm",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.5,
    "typical": 2.5,
    "max": 2.5
  },
  "airflowLpm": {
    "min": 160,
    "typical": 160,
    "max": 160
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f110-extension",
    "label": "F110-PXC10P, tube 500 mm",
    "distinguishingAttributes": {
      "Buse déclarée": "1 mm",
      "Alimentation": "pression produit",
      "Débit de produit au point documenté": "190 mL/min",
      "Largeur du jet au point documenté": "210 mm",
      "Masse déclarée": "620 g"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f110-pxc10p-tube-500-mm.svg",
    "alt": "Repères techniques : Meiji F110-PXC10P, tube 500 mm",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F110-PXC10P, tube 500 mm. Consommation constructeur au point documenté : 160 L/min à 2.5 bar. Modèle du tableau constructeur F110-PXC10P, tube 500 mm : buse 1 mm, alimentation pression produit. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1 mm.",
      "Alimentation : pression produit.",
      "Débit de produit au point documenté : 190 mL/min.",
      "Largeur du jet au point documenté : 210 mm.",
      "Masse déclarée : 620 g.",
      "Longueur du tube au point du tableau : 500 mm.",
      "Consommation publiée dans son unité originale : 160 L/min.",
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
      "value": "1 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression produit",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "190 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "210 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "620 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Longueur du tube au point du tableau",
      "value": "500 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.25 MPa à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-meiji-guns-p8",
      "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf#page=8",
      "sourceLabel": "Meiji, catalogue fabricant des pistolets et soufflettes, page PDF 8",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 dcef5ad2d88e7daf784b313e085e0e3ad09e564fbaebb96d9296c29f6a5cea8e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-meiji-guns-p8"
    ],
    "airflowLpm": [
      "october7-tools-meiji-guns-p8"
    ]
  },
  "notes": [
    "Modèle du tableau constructeur F110-PXC10P, tube 500 mm : buse 1 mm, alimentation pression produit. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
