import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-ani-black-s-wb-buse-1-2",
  "slug": "pistolet-peinture-ani-black-s-wb-buse-1-2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ANI BLACK/S WB buse 1.2",
  "brand": "ANI",
  "model": "BLACK/S WB buse 1.2",
  "mpn": "AH141741",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.8,
    "typical": 2.8,
    "max": 2.8
  },
  "airflowLpm": {
    "min": 270,
    "typical": 270,
    "max": 270
  },
  "confidence": "B",
  "variant": {
    "familyId": "ani-black-s",
    "label": "BLACK/S WB buse 1.2",
    "distinguishingAttributes": {
      "Buse": "1.2 mm",
      "Chapeau / technologie": "WB",
      "Alimentation": "gravité",
      "Point amont du montage de référence": "RP1 : 2.8 bar",
      "Pression interne du même essai": "TMD1 : 1.8 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-ani-black-s-wb-buse-1-2.svg",
    "alt": "Repères techniques : ANI BLACK/S WB buse 1.2",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI BLACK/S WB buse 1.2. Consommation constructeur au point documenté : 270 L/min à 2.8 bar. Montage de référence : RP1 amont 2.8 bar ; TMD1 interne 1.8 bar. La pression calculée est la lecture amont RP1 ; les pertes d’un autre montage ne sont pas établies. Buse de 1.2 mm, technologie WB, alimentation gravité. Cette combinaison est proposée par le fabricant sous le code AH141741.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Chapeau / technologie : WB.",
      "Alimentation : gravité.",
      "Point amont du montage de référence : RP1 : 2.8 bar.",
      "Pression interne du même essai : TMD1 : 1.8 bar.",
      "Consommation publiée dans son unité originale : 270 l/min, consommation en travail.",
      "Pression dans la source : RP1 amont 2.8 bar ; TMD1 interne 1.8 bar."
    ],
    "limitations": [
      "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
      "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
      "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
      "Les valeurs RP1 et TMD1 appartiennent à deux lieux différents du même essai. La lecture amont n’est pas présentée comme une pression interne mesurée au pistolet.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.2 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p77"
      ]
    },
    {
      "label": "Chapeau / technologie",
      "value": "WB",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p77"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p77"
      ]
    },
    {
      "label": "Point amont du montage de référence",
      "value": "RP1 : 2.8 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p77"
      ]
    },
    {
      "label": "Pression interne du même essai",
      "value": "TMD1 : 1.8 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p77"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "270 l/min, consommation en travail",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p77"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "RP1 amont 2.8 bar ; TMD1 interne 1.8 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p77"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p77",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=77",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 77",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-linked-document-7-p1",
      "sourceUrl": "https://www.ani.it/wp-content/uploads/2018/05/ANI_Scheda_ventaglio_aerografi_2019_BLACK.pdf#page=1",
      "sourceLabel": "ANI, notice et paramètres de pulvérisation constructeur, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 10974241d9b7cb2b78bf0a9023cee52f72fd0d910518d7e45f27bb670f0fd010. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p77",
      "october8-tools-linked-document-7-p1"
    ],
    "airflowLpm": [
      "october8-tools-ani-technical-2020-p77",
      "october8-tools-linked-document-7-p1"
    ]
  },
  "notes": [
    "Buse de 1.2 mm, technologie WB, alimentation gravité. Cette combinaison est proposée par le fabricant sous le code AH141741.",
    "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
    "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
    "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
    "Les valeurs RP1 et TMD1 appartiennent à deux lieux différents du même essai. La lecture amont n’est pas présentée comme une pression interne mesurée au pistolet.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
