import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-wider3-13h2",
  "slug": "pistolet-peinture-anest-iwata-wider3-13h2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata WIDER3-13H2",
  "brand": "Anest Iwata",
  "model": "WIDER3-13H2",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.5,
    "typical": 2.5,
    "max": 2.5
  },
  "airflowLpm": {
    "min": 225,
    "typical": 225,
    "max": 225
  },
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-wider3",
    "label": "WIDER3-13H2",
    "distinguishingAttributes": {
      "Buse": "1.3 mm",
      "Chapeau": "WIDER1-H2",
      "Alimentation": "gravité",
      "Débit de produit au point de référence": "190 mL/min",
      "Largeur du jet au point de référence": "175 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-wider3-13h2.svg",
    "alt": "Repères techniques : Anest Iwata WIDER3-13H2",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER3/UM_03019141_T1074-01_01_20240705.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata WIDER3-13H2. Consommation constructeur au point documenté : 225 L/min à 2.5 bar. La ligne constructeur associe la buse 1.3 mm et le chapeau WIDER1-H2 à un débit de produit de 190 mL/min et un jet de 175 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 1.3 mm.",
      "Chapeau : WIDER1-H2.",
      "Alimentation : gravité.",
      "Débit de produit au point de référence : 190 mL/min.",
      "Largeur du jet au point de référence : 175 mm.",
      "Consommation publiée dans son unité originale : 225 l/min, consommation d’air au point du tableau.",
      "Pression dans la source : 0.25 MPa à l’entrée, gâchette ouverte."
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
        "october8-tools-linked-document-53-p9"
      ]
    },
    {
      "label": "Chapeau",
      "value": "WIDER1-H2",
      "evidenceIds": [
        "october8-tools-linked-document-53-p9"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-linked-document-53-p9"
      ]
    },
    {
      "label": "Débit de produit au point de référence",
      "value": "190 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-53-p9"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "175 mm",
      "evidenceIds": [
        "october8-tools-linked-document-53-p9"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "225 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-53-p9"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.25 MPa à l’entrée, gâchette ouverte",
      "evidenceIds": [
        "october8-tools-linked-document-53-p9"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-linked-document-53-p9",
      "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER3/UM_03019141_T1074-01_01_20240705.pdf#page=9",
      "sourceLabel": "Anest Iwata, notice constructeur, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 9a4636867e6f22ecaf1f9175f8085ecf0ddfcd559d33996138eb70674b535137. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-linked-document-53-p9"
    ],
    "airflowLpm": [
      "october8-tools-linked-document-53-p9"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 1.3 mm et le chapeau WIDER1-H2 à un débit de produit de 190 mL/min et un jet de 175 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
