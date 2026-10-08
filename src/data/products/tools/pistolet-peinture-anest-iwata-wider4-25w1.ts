import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-wider4-25w1",
  "slug": "pistolet-peinture-anest-iwata-wider4-25w1",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata WIDER4-25W1",
  "brand": "Anest Iwata",
  "model": "WIDER4-25W1",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-wider4",
    "label": "WIDER4-25W1",
    "distinguishingAttributes": {
      "Buse": "2.5 mm",
      "Chapeau": "WIDER4-W1",
      "Alimentation": "gravité",
      "Débit de produit au point de référence": "555 mL/min",
      "Largeur du jet au point de référence": "380 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-wider4-25w1.svg",
    "alt": "Repères techniques : Anest Iwata WIDER4-25W1",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER4/UM_03017611_T1005-02_02_20240705.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata WIDER4-25W1. Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution. La ligne constructeur associe la buse 2.5 mm et le chapeau WIDER4-W1 à un débit de produit de 555 mL/min et un jet de 380 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 2.5 mm.",
      "Chapeau : WIDER4-W1.",
      "Alimentation : gravité.",
      "Débit de produit au point de référence : 555 mL/min.",
      "Largeur du jet au point de référence : 380 mm.",
      "Consommation publiée dans son unité originale : 360 l/min, consommation d’air au point du tableau.",
      "Pression dans la source : 0.29 MPa (3.0 bar / 43 PSI dans la même cellule), entrée avec gâchette ouverte."
    ],
    "limitations": [
      "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
      "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
      "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
      "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
      "Les valeurs SI MPa et bar imprimées dans la même cellule sont discordantes : aucun point de consommation calculable n’est choisi entre elles. La résolution de cette contradiction exige une clarification fabricant.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "2.5 mm",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Chapeau",
      "value": "WIDER4-W1",
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
      "value": "555 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "380 mm",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "360 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-54-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.29 MPa (3.0 bar / 43 PSI dans la même cellule), entrée avec gâchette ouverte",
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
    "demandExplanation": [
      "october8-tools-linked-document-54-p7"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 2.5 mm et le chapeau WIDER4-W1 à un débit de produit de 555 mL/min et un jet de 380 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les valeurs SI MPa et bar imprimées dans la même cellule sont discordantes : aucun point de consommation calculable n’est choisi entre elles. La résolution de cette contradiction exige une clarification fabricant.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
