import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-anest-iwata-kiwami1-14b2",
  "slug": "pistolet-peinture-anest-iwata-kiwami1-14b2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Anest Iwata KIWAMI1-14B2",
  "brand": "Anest Iwata",
  "model": "KIWAMI1-14B2",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.",
  "confidence": "B",
  "variant": {
    "familyId": "anest-iwata-kiwami1",
    "label": "KIWAMI1-14B2",
    "distinguishingAttributes": {
      "Buse": "1.4 mm",
      "Chapeau": "B2",
      "Alimentation": "gravité",
      "Débit de produit au point de référence": "200 mL/min",
      "Largeur du jet au point de référence": "275 mm"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-anest-iwata-kiwami1-14b2.svg",
    "alt": "Repères techniques : Anest Iwata KIWAMI1-14B2",
    "sourceUrl": "https://www.anest-iwata.co.jp/sites/products/files/pim/assets/CT/MANUAL/Spray_Guns/Manual_Spray_Guns/KIWAMI/UM_03013200_T952-06_00_20220613.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Anest Iwata KIWAMI1-14B2. Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution. La ligne constructeur associe la buse 1.4 mm et le chapeau B2 à un débit de produit de 200 mL/min et un jet de 275 mm au point de référence.",
    "verifiedFacts": [
      "Buse : 1.4 mm.",
      "Chapeau : B2.",
      "Alimentation : gravité.",
      "Débit de produit au point de référence : 200 mL/min.",
      "Largeur du jet au point de référence : 275 mm.",
      "Consommation publiée dans son unité originale : 230 l/min, consommation d’air au point du tableau.",
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
      "value": "1.4 mm",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Chapeau",
      "value": "B2",
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
      "value": "200 mL/min",
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
      "value": "230 l/min, consommation d’air au point du tableau",
      "evidenceIds": [
        "october8-tools-linked-document-56-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0.24 MPa (2.5 bar / 36 PSI dans la même cellule), entrée avec gâchette ouverte",
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
    "demandExplanation": [
      "october8-tools-linked-document-56-p7"
    ]
  },
  "notes": [
    "La ligne constructeur associe la buse 1.4 mm et le chapeau B2 à un débit de produit de 200 mL/min et un jet de 275 mm au point de référence.",
    "Le verdict porte sur le point de pulvérisation du tableau, pas sur toute la plage de réglage.",
    "Le débit de produit et la largeur du jet appartiennent aux conditions d’essai de la notice ; ils ne garantissent pas le résultat avec une autre viscosité.",
    "Une pompe ou un réservoir pressurisé externe doit être compté séparément s’il consomme de l’air.",
    "Notice constructeur destinée au marché japonais ; la disponibilité et la conformité de commercialisation en France ne sont pas établies.",
    "Les valeurs SI MPa et bar imprimées dans la même cellule sont discordantes : aucun point de consommation calculable n’est choisi entre elles. La résolution de cette contradiction exige une clarification fabricant.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
