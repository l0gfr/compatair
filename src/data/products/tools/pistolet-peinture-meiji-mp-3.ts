import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-meiji-mp-3",
  "slug": "pistolet-peinture-meiji-mp-3",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Meiji MP-3",
  "brand": "Meiji",
  "model": "MP-3",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 1.5,
    "typical": 1.5,
    "max": 1.5
  },
  "airflowLpm": {
    "min": 5,
    "typical": 5,
    "max": 5
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-mp",
    "label": "MP-3",
    "distinguishingAttributes": {
      "Buse déclarée": "0.3 mm",
      "Alimentation": "gravité",
      "Masse déclarée": "95 g"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-meiji-mp-3.svg",
    "alt": "Repères techniques : Meiji MP-3",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji MP-3. Consommation constructeur au point documenté : 5 L/min à 1.5 bar. Modèle du tableau constructeur MP-3 : buse 0.3 mm, alimentation gravité. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 0.3 mm.",
      "Alimentation : gravité.",
      "Masse déclarée : 95 g.",
      "Consommation publiée dans son unité originale : 5 L/min.",
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
      "value": "0.3 mm",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Masse déclarée",
      "value": "95 g",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "5 L/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p8"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.15 MPa à l’entrée, point de consommation",
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
    "Modèle du tableau constructeur MP-3 : buse 0.3 mm, alimentation gravité. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
