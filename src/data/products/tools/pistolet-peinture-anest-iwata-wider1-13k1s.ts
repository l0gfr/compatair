import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-wider1-13k1s",
  "slug": "pistolet-peinture-anest-iwata-wider1-13k1s",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata WIDER1-13K1S",
  "brand": "Anest Iwata",
  "model": "WIDER1-13K1S",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-wider1",
    "label": "WIDER1-13K1S",
    "distinguishingAttributes": {
      "Buse": "1.3 mm",
      "Chapeau": "K1",
      "Alimentation": "succion",
      "Débit de produit au point de référence": "150 mL/min",
      "Largeur du jet au point de référence": "155 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-wider1-13k1s.svg",
    "alt": "Repères techniques : Anest Iwata WIDER1-13K1S",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER1/UM_03012691_T924-06_02_20240904JE.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata WIDER1-13K1S. Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution. La ligne constructeur associe la buse 1.3 mm et le chapeau K1 à un débit de produit de 150 mL/min et un jet de 155 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 1.3 mm.",
      "Chapeau : K1.",
      "Alimentation : succion.",
      "Débit de produit au point de référence : 150 mL/min.",
      "Largeur du jet au point de référence : 155 mm.",
      "Consommation publiée dans son unité originale : 145 l/min, consommation d’air au point du tableau.",
      "Pression dans la source : 0.24 MPa (2.5 bar / 36 PSI dans la même cellule), entrée avec gâchette ouverte."
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
      "value": "1.3 mm",
      "evidenceIds": [
        "october8-tools-linked-document-48-p7"
      ]
    },
    {
      "label": "Chapeau",
      "value": "K1",
      "evidenceIds": [
        "october8-tools-linked-document-48-p7"
      ]
    },
    {
      "label": "Alimentation",
      "value": "succion",
      "evidenceIds": [
        "october8-tools-linked-document-48-p7"
      ]
    },
    {
      "label": "Débit de produit au point de référence",
      "value": "150 mL/min",
      "evidenceIds": [
        "october8-tools-linked-document-48-p7"
      ]
    },
    {
      "label": "Largeur du jet au point de référence",
      "value": "155 mm",
      "evidenceIds": [
        "october8-tools-linked-document-48-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "145 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-48-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.24 MPa (2.5 bar / 36 PSI dans la même cellule), entrée avec gâchette ouverte",
      "evidenceIds": [
        "october8-tools-linked-document-48-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-linked-document-48-p7",
      "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/WIDER/WIDER1/UM_03012691_T924-06_02_20240904JE.pdf#page=7",
      "sourceLabel": "Anest Iwata, notice constructeur, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 99a451fd8f559271ee3996dffda0d399658b7523d14330864f92ff88572fe2a0. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-linked-document-48-p7"
    ],
    "demandExplanation": [
      "october8-tools-linked-document-48-p7"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 1.3 mm et le chapeau K1 à un débit de produit de 150 mL/min et un jet de 155 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les valeurs SI MPa et bar imprimées dans la même cellule sont discordantes : aucun point de consommation calculable n’est choisi entre elles. La résolution de cette contradiction exige une clarification fabricant.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
