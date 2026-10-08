import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-wider2-12g2p",
  "slug": "pistolet-peinture-anest-iwata-wider2-12g2p",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata WIDER2-12G2P",
  "brand": "Anest Iwata",
  "model": "WIDER2-12G2P",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-wider2",
    "label": "WIDER2-12G2P",
    "distinguishingAttributes": {
      "Buse": "1.2 mm",
      "Chapeau": "G2P",
      "Alimentation": "pression",
      "Débit de produit au point de référence": "500 mL/min",
      "Largeur du jet au point de référence": "400 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-wider2-12g2p.svg",
    "alt": "Repères techniques : Anest Iwata WIDER2-12G2P",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER2/UM_03011661_T950-06_02_20240711JE.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata WIDER2-12G2P. Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution. La ligne constructeur associe la buse 1.2 mm et le chapeau G2P à un débit de produit de 500 mL/min et un jet de 400 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Chapeau : G2P.",
      "Alimentation : pression.",
      "Débit de produit au point de référence : 500 mL/min.",
      "Largeur du jet au point de référence : 400 mm.",
      "Consommation publiée dans son unité originale : 500 l/min, consommation d’air au point du tableau.",
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
      "value": "1.2 mm",
      "evidenceIds": [
        "october8-tools-linked-document-51-p7"
      ]
    },
    {
      "label": "Chapeau",
      "value": "G2P",
      "evidenceIds": [
        "october8-tools-linked-document-51-p7"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression",
      "evidenceIds": [
        "october8-tools-linked-document-51-p7"
      ]
    },
    {
      "label": "Débit de produit au point de référence",
      "value": "500 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-51-p7"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "400 mm",
      "evidenceIds": [
        "october8-tools-linked-document-51-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "500 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-51-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.29 MPa (3.0 bar / 43 PSI dans la même cellule), entrée avec gâchette ouverte",
      "evidenceIds": [
        "october8-tools-linked-document-51-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-linked-document-51-p7",
      "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER2/UM_03011661_T950-06_02_20240711JE.pdf#page=7",
      "sourceLabel": "Anest Iwata, notice constructeur, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 71dc11052cc2d904ed0f2aa96601c918a0c2ece58ceb08e5ad6e98e3b92cbcf5. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-linked-document-51-p7"
    ],
    "demandExplanation": [
      "october8-tools-linked-document-51-p7"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 1.2 mm et le chapeau G2P à un débit de produit de 500 mL/min et un jet de 400 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les valeurs SI MPa et bar imprimées dans la même cellule sont discordantes : aucun point de consommation calculable n’est choisi entre elles. La résolution de cette contradiction exige une clarification fabricant.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
