import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-kiwami1-16b12",
  "slug": "pistolet-peinture-anest-iwata-kiwami1-16b12",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata KIWAMI1-16B12",
  "brand": "Anest Iwata",
  "model": "KIWAMI1-16B12",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 1.8,
    "typical": 1.8,
    "max": 1.8
  },
  "airflowLpm": {
    "min": 220,
    "typical": 220,
    "max": 220
  },
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-kiwami1",
    "label": "KIWAMI1-16B12",
    "distinguishingAttributes": {
      "Buse": "1.6 mm",
      "Chapeau": "B12",
      "Alimentation": "gravité",
      "Débit de produit au point de référence": "155 mL/min",
      "Largeur du jet au point de référence": "275 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-kiwami1-16b12.svg",
    "alt": "Repères techniques : Anest Iwata KIWAMI1-16B12",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/KIWAMI/UM_03013200_T952-06_00_20220613.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata KIWAMI1-16B12. Consommation constructeur au point documenté : 220 L/min à 1.8 bar. La ligne constructeur associe la buse 1.6 mm et le chapeau B12 à un débit de produit de 155 mL/min et un jet de 275 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 1.6 mm.",
      "Chapeau : B12.",
      "Alimentation : gravité.",
      "Débit de produit au point de référence : 155 mL/min.",
      "Largeur du jet au point de référence : 275 mm.",
      "Consommation publiée dans son unité originale : 220 l/min, consommation d’air au point du tableau.",
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
      "value": "1.6 mm",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Chapeau",
      "value": "B12",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Débit de produit au point de référence",
      "value": "155 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "275 mm",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "220 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.18 MPa à l’entrée, gâchette ouverte",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-linked-document-56-p7",
      "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/KIWAMI/UM_03013200_T952-06_00_20220613.pdf#page=7",
      "sourceLabel": "Anest Iwata, notice constructeur, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 2fece4d822425274338472cfd117c6232ce63780f6c4563b69d0174ade560c02. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-linked-document-56-p7"
    ],
    "airflowLpm": [
      "october8-tools-linked-document-56-p7"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 1.6 mm et le chapeau B12 à un débit de produit de 155 mL/min et un jet de 275 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
