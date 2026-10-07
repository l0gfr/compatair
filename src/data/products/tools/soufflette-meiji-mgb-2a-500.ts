import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-meiji-mgb-2a-500",
  "slug": "soufflette-meiji-mgb-2a-500",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Meiji MGB-2A-500",
  "brand": "Meiji",
  "model": "MGB-2A-500",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.9,
    "typical": 2.9,
    "max": 2.9
  },
  "airflowLpm": {
    "min": 220,
    "typical": 220,
    "max": 220
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-mgb",
    "label": "MGB-2A-500",
    "distinguishingAttributes": {
      "Buse déclarée": "2 mm",
      "Alimentation": "soufflage, deux buses",
      "Masse déclarée": "600 g",
      "Consommation originale pour les deux buses": "110 L/min ×2",
      "Longueur du tube": "500 mm"
    }
  },
  "image": {
    "src": "/images/products/soufflette-meiji-mgb-2a-500.svg",
    "alt": "Repères techniques : Meiji MGB-2A-500",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji MGB-2A-500. Consommation constructeur au point documenté : 220 L/min à 2.9 bar. Modèle du tableau constructeur MGB-2A-500 : buse 2 mm, alimentation soufflage, deux buses. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 2 mm.",
      "Alimentation : soufflage, deux buses.",
      "Masse déclarée : 600 g.",
      "Consommation originale pour les deux buses : 110 L/min ×2.",
      "Longueur du tube : 500 mm.",
      "Consommation publiée dans son unité originale : 110 L/min ×2 ; total arithmétique 220 L/min pour les deux buses..",
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
      "value": "2 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Alimentation",
      "value": "soufflage, deux buses",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "600 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Consommation originale pour les deux buses",
      "value": "110 L/min ×2",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Longueur du tube",
      "value": "500 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "110 L/min ×2 ; total arithmétique 220 L/min pour les deux buses.",
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
    "Modèle du tableau constructeur MGB-2A-500 : buse 2 mm, alimentation soufflage, deux buses. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
