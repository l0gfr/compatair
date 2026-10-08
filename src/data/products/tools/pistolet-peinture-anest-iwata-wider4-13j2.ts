import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-wider4-13j2",
  "slug": "pistolet-peinture-anest-iwata-wider4-13j2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata WIDER4-13J2",
  "brand": "Anest Iwata",
  "model": "WIDER4-13J2",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 280,
    "typical": 280,
    "max": 280
  },
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-wider4",
    "label": "WIDER4-13J2",
    "distinguishingAttributes": {
      "Buse": "1.3 mm",
      "Chapeau": "WIDER4-J2",
      "Alimentation": "gravité",
      "Débit de produit au point de référence": "160 mL/min",
      "Largeur du jet au point de référence": "225 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-wider4-13j2.svg",
    "alt": "Repères techniques : Anest Iwata WIDER4-13J2",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER4/UM_03017611_T1005-02_02_20240705.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata WIDER4-13J2. Consommation constructeur au point documenté : 280 L/min à 2 bar. La ligne constructeur associe la buse 1.3 mm et le chapeau WIDER4-J2 à un débit de produit de 160 mL/min et un jet de 225 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 1.3 mm.",
      "Chapeau : WIDER4-J2.",
      "Alimentation : gravité.",
      "Débit de produit au point de référence : 160 mL/min.",
      "Largeur du jet au point de référence : 225 mm.",
      "Consommation publiée dans son unité originale : 280 l/min, consommation d’air au point du tableau.",
      "Pression dans la source : 0.2 MPa à l’entrée, gâchette ouverte."
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
      "value": "1.3 mm",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Chapeau",
      "value": "WIDER4-J2",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Débit de produit au point de référence",
      "value": "160 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "225 mm",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "280 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.2 MPa à l’entrée, gâchette ouverte",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-linked-document-54-p7",
      "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER4/UM_03017611_T1005-02_02_20240705.pdf#page=7",
      "sourceLabel": "Anest Iwata, notice constructeur, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 ec5f2865f71422ff488547b342ec02258a60ce4e985de54bdbb5b0213ecc871f. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-linked-document-54-p7"
    ],
    "airflowLpm": [
      "october8-tools-linked-document-54-p7"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 1.3 mm et le chapeau WIDER4-J2 à un débit de produit de 160 mL/min et un jet de 225 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
