import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-meiji-f410-g13hvlp",
  "slug": "pistolet-peinture-hvlp-meiji-f410-g13hvlp",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Meiji F410-G13HVLP",
  "brand": "Meiji",
  "model": "F410-G13HVLP",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 385,
    "typical": 385,
    "max": 385
  },
  "confidence": "B",
  "variant": {
    "familyId": "meiji-f410",
    "label": "F410-G13HVLP",
    "distinguishingAttributes": {
      "Buse déclarée": "1.3 mm",
      "Alimentation": "gravité",
      "Chapeau d’air": "HVLP",
      "Débit de produit au point documenté": "135 mL/min",
      "Largeur du jet au point documenté": "265 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-meiji-f410-g13hvlp.svg",
    "alt": "Repères techniques : Meiji F410-G13HVLP",
    "sourceUrl": "https://www.meijiair.co.jp/en/files/pdf/product/catalog/all_guns_a.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Meiji F410-G13HVLP. Consommation constructeur au point documenté : 385 L/min à 2 bar. Modèle du tableau constructeur F410-G13HVLP : buse 1.3 mm, alimentation gravité, chapeau HVLP. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "verifiedFacts": [
      "Buse déclarée : 1.3 mm.",
      "Alimentation : gravité.",
      "Chapeau d’air : HVLP.",
      "Débit de produit au point documenté : 135 mL/min.",
      "Largeur du jet au point documenté : 265 mm.",
      "Masse déclarée : 415 g.",
      "Pression dans le chapeau, distincte de l’entrée : 0.07 MPa.",
      "Consommation publiée dans son unité originale : 385 L/min.",
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
      "value": "1.3 mm",
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
      "value": "HVLP",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Débit de produit au point documenté",
      "value": "135 mL/min",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Largeur du jet au point documenté",
      "value": "265 mm",
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
      "label": "Pression dans le chapeau, distincte de l’entrée",
      "value": "0.07 MPa",
      "evidenceIds": [
        "october7-tools-meiji-guns-p6"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "385 L/min",
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
    "Modèle du tableau constructeur F410-G13HVLP : buse 1.3 mm, alimentation gravité, chapeau HVLP. Aucune configuration interchangeable hors de cette ligne n’est déduite.",
    "Valeurs du tableau constructeur au seul point de pression documenté ; aucune extrapolation à une autre pression.",
    "Débit d’air et débit de peinture conservés séparément. Les puissances minimales de compresseur indicatives du catalogue ne remplacent pas une courbe FAD.",
    "Source constructeur identifiée et contrôlée visuellement ; disponibilité commerciale actuelle non revendiquée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
