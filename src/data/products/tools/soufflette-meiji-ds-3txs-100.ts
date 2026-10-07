import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-meiji-ds-3txs-100",
  "slug": "soufflette-meiji-ds-3txs-100",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Meiji DS-3TXS (100)",
  "brand": "Meiji",
  "model": "DS-3TXS (100)",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.9,
    "typical": 2.9,
    "max": 2.9
  },
  "airflowLpm": {
    "min": 205,
    "typical": 205,
    "max": 205
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-ds",
    "label": "DS-3TXS (100)",
    "distinguishingAttributes": {
      "Buse déclarée": "3 mm",
      "Alimentation": "soufflage",
      "Masse déclarée": "210 g",
      "Longueur du tube": "100 mm"
    }
  },
  "image": {
    "src": "/images/products/soufflette-meiji-ds-3txs-100.svg",
    "alt": "Repères techniques : Meiji DS-3TXS (100)",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji DS-3TXS (100). Consommation constructeur au point documenté : 205 L/min à 2.9 bar. Modèle du tableau constructeur DS-3TXS (100) : buse 3 mm, alimentation soufflage. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 3 mm.",
      "Alimentation : soufflage.",
      "Masse déclarée : 210 g.",
      "Longueur du tube : 100 mm.",
      "Consommation publiée dans son unité originale : 205 L/min.",
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
      "value": "3 mm",
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
      "value": "210 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Longueur du tube",
      "value": "100 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p21"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "205 L/min",
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
    "Modèle du tableau constructeur DS-3TXS (100) : buse 3 mm, alimentation soufflage. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
