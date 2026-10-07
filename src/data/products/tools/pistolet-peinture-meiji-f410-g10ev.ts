import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-f410-g10ev",
  "slug": "pistolet-peinture-meiji-f410-g10ev",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji F410-G10EV",
  "brand": "Meiji",
  "model": "F410-G10EV",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.5,
    "typical": 2.5,
    "max": 2.5
  },
  "airflowLpm": {
    "min": 270,
    "typical": 270,
    "max": 270
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f410",
    "label": "F410-G10EV",
    "distinguishingAttributes": {
      "Buse déclarée": "1 mm",
      "Alimentation": "gravité",
      "Chapeau d’air": "10EV",
      "Débit de produit au point documenté": "115 mL/min",
      "Largeur du jet au point documenté": "200 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-f410-g10ev.svg",
    "alt": "Repères techniques : Meiji F410-G10EV",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F410-G10EV. Consommation constructeur au point documenté : 270 L/min à 2.5 bar. Modèle du tableau constructeur F410-G10EV : buse 1 mm, alimentation gravité, chapeau 10EV. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1 mm.",
      "Alimentation : gravité.",
      "Chapeau d’air : 10EV.",
      "Débit de produit au point documenté : 115 mL/min.",
      "Largeur du jet au point documenté : 200 mm.",
      "Masse déclarée : 415 g.",
      "Consommation publiée dans son unité originale : 270 L/min.",
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
      "value": "10EV",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "115 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "200 mm",
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
      "value": "270 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.25 MPa à l’entrée, point de consommation",
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
    "Modèle du tableau constructeur F410-G10EV : buse 1 mm, alimentation gravité, chapeau 10EV. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
