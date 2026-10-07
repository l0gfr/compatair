import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-meiji-m305",
  "slug": "soufflette-meiji-m305",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Meiji M305",
  "brand": "Meiji",
  "model": "M305",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.9,
    "typical": 2.9,
    "max": 2.9
  },
  "airflowLpm": {
    "min": 250,
    "typical": 250,
    "max": 250
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-m305",
    "label": "M305",
    "distinguishingAttributes": {
      "Buse déclarée": "3.6 mm",
      "Alimentation": "soufflage",
      "Masse déclarée": "132 g"
    }
  },
  "image": {
    "src": "/images/products/soufflette-meiji-m305.svg",
    "alt": "Repères techniques : Meiji M305",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji M305. Consommation constructeur au point documenté : 250 L/min à 2.9 bar. Modèle du tableau constructeur M305 : buse 3.6 mm, alimentation soufflage. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 3.6 mm.",
      "Alimentation : soufflage.",
      "Masse déclarée : 132 g.",
      "Consommation publiée dans son unité originale : 250 L/min.",
      "Pression dans la source : 0.29 MPa à l’entrée, point de consommation."
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
      "value": "3.6 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Alimentation",
      "value": "soufflage",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "132 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "250 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.29 MPa à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-meiji-guns-p21",
      "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf#page=21",
      "sourceLabel": "Meiji, catalogue fabricant des pistolets et soufflettes, page PDF 21",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 dcef5ad2d88e7daf784b313e085e0e3ad09e564fbaebb96d9296c29f6a5cea8e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-meiji-guns-p21"
    ],
    "airflowLpm": [
      "october7-tools-meiji-guns-p21"
    ]
  },
  "notes": [
    "Modèle du tableau constructeur M305 : buse 3.6 mm, alimentation soufflage. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
