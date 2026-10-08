import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-kiwami4-v14wb2",
  "slug": "pistolet-peinture-anest-iwata-kiwami4-v14wb2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata KIWAMI4-V14WB2",
  "brand": "Anest Iwata",
  "model": "KIWAMI4-V14WB2",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 1.8,
    "typical": 1.8,
    "max": 1.8
  },
  "airflowLpm": {
    "min": 390,
    "typical": 390,
    "max": 390
  },
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-kiwami4",
    "label": "KIWAMI4-V14WB2",
    "distinguishingAttributes": {
      "Buse": "1.4 mm",
      "Chapeau": "KIWAMI4-WB2J",
      "Alimentation": "gravité",
      "Débit de produit au point de référence": "160 mL/min",
      "Largeur du jet au point de référence": "310 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-kiwami4-v14wb2.svg",
    "alt": "Repères techniques : Anest Iwata KIWAMI4-V14WB2",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/KIWAMI/UM_03017631_T1007-02_02_20240711JE.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata KIWAMI4-V14WB2. Consommation constructeur au point documenté : 390 L/min à 1.8 bar. La ligne constructeur associe la buse 1.4 mm et le chapeau KIWAMI4-WB2J à un débit de produit de 160 mL/min et un jet de 310 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 1.4 mm.",
      "Chapeau : KIWAMI4-WB2J.",
      "Alimentation : gravité.",
      "Débit de produit au point de référence : 160 mL/min.",
      "Largeur du jet au point de référence : 310 mm.",
      "Consommation publiée dans son unité originale : 390 l/min, consommation d’air au point du tableau.",
      "Pression dans la source : 0.18 MPa à l’entrée, gâchette ouverte."
    ],
    "limitations": [
      "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
      "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
      "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
      "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
      "Le titre de la notice emploie KIWAMI ; certaines lignes du tableau impriment KWIAMI. La désignation reprend le titre, avec les suffixes observés dans la ligne.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.4 mm",
      "evidenceIds": [
        "october8-tools-linked-document-59-p7"
      ]
    },
    {
      "label": "Chapeau",
      "value": "KIWAMI4-WB2J",
      "evidenceIds": [
        "october8-tools-linked-document-59-p7"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-linked-document-59-p7"
      ]
    },
    {
      "label": "Débit de produit au point de référence",
      "value": "160 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-59-p7"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "310 mm",
      "evidenceIds": [
        "october8-tools-linked-document-59-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "390 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-59-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.18 MPa à l’entrée, gâchette ouverte",
      "evidenceIds": [
        "october8-tools-linked-document-59-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-linked-document-59-p7",
      "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/KIWAMI/UM_03017631_T1007-02_02_20240711JE.pdf#page=7",
      "sourceLabel": "Anest Iwata, notice constructeur, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 9f821094113b33a85f1a2b90c90f43958afb0f608a2d5da3d93b77de1214d9b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-linked-document-59-p7"
    ],
    "airflowLpm": [
      "october8-tools-linked-document-59-p7"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 1.4 mm et le chapeau KIWAMI4-WB2J à un débit de produit de 160 mL/min et un jet de 310 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Le titre de la notice emploie KIWAMI ; certaines lignes du tableau impriment KWIAMI. La désignation reprend le titre, avec les suffixes observés dans la ligne.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
