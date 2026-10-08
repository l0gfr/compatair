import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-ls-400-15s06-series2-ets",
  "slug": "pistolet-peinture-anest-iwata-ls-400-15s06-series2-ets",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata LS-400-15S06 (SERIES2 ETS)",
  "brand": "Anest Iwata",
  "model": "LS-400-15S06 (SERIES2 ETS)",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 1.8,
    "typical": 1.8,
    "max": 1.8
  },
  "airflowLpm": {
    "min": 420,
    "typical": 420,
    "max": 420
  },
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-ls-400-series2",
    "label": "LS-400-15S06 (SERIES2 ETS)",
    "distinguishingAttributes": {
      "Buse": "15ETS",
      "Chapeau": "LS-400-06",
      "Alimentation": "gravité",
      "Débit de produit au point de référence": "195 mL/min",
      "Largeur du jet au point de référence": "215 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-ls-400-15s06-series2-ets.svg",
    "alt": "Repères techniques : Anest Iwata LS-400-15S06 (SERIES2 ETS)",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WS_LS/WS_LS-400-SR2/UM_03016120_T984-03_20251031.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata LS-400-15S06 (SERIES2 ETS). Consommation constructeur au point documenté : 420 L/min à 1.8 bar. La ligne constructeur associe la buse 15ETS et le chapeau LS-400-06 à un débit de produit de 195 mL/min et un jet de 215 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 15ETS.",
      "Chapeau : LS-400-06.",
      "Alimentation : gravité.",
      "Débit de produit au point de référence : 195 mL/min.",
      "Largeur du jet au point de référence : 215 mm.",
      "Consommation publiée dans son unité originale : 420 l/min, consommation d’air au point du tableau.",
      "Pression dans la source : 0.18 MPa à l’entrée, gâchette ouverte."
    ],
    "limitations": [
      "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
      "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
      "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
      "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "15ETS",
      "evidenceIds": [
        "october8-tools-linked-document-60-p12"
      ]
    },
    {
      "label": "Chapeau",
      "value": "LS-400-06",
      "evidenceIds": [
        "october8-tools-linked-document-60-p12"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-linked-document-60-p12"
      ]
    },
    {
      "label": "Débit de produit au point de référence",
      "value": "195 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-60-p12"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "215 mm",
      "evidenceIds": [
        "october8-tools-linked-document-60-p12"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "420 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-60-p12"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.18 MPa à l’entrée, gâchette ouverte",
      "evidenceIds": [
        "october8-tools-linked-document-60-p12"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-linked-document-60-p12",
      "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WS_LS/WS_LS-400-SR2/UM_03016120_T984-03_20251031.pdf#page=12",
      "sourceLabel": "Anest Iwata, notice constructeur, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 3ce783205570501156f4a30ee781fecd1ba6db11617dedac94c4a5095847fb4a. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-linked-document-60-p12"
    ],
    "airflowLpm": [
      "october8-tools-linked-document-60-p12"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 15ETS et le chapeau LS-400-06 à un débit de produit de 195 mL/min et un jet de 215 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
