import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-ani-black-s-h2-tmd1-wb-buse-1-2",
  "slug": "pistolet-peinture-ani-black-s-h2-tmd1-wb-buse-1-2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ANI BLACK/S H2 TMD1 WB buse 1.2",
  "brand": "ANI",
  "model": "BLACK/S H2 TMD1 WB buse 1.2",
  "mpn": "AH141710",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 5.5,
    "typical": 5.5,
    "max": 5.5
  },
  "airflowLpm": {
    "min": 470,
    "typical": 470,
    "max": 470
  },
  "confidence": "B",
  "variant": {
    "familyId": "ani-black-s-h2-tmd1",
    "label": "BLACK/S H2 TMD1 WB buse 1.2",
    "distinguishingAttributes": {
      "Buse": "1.2 mm",
      "Chapeau / technologie": "WB",
      "Alimentation": "gravité",
      "Point amont du montage de référence": "RP1 : 5.5 bar",
      "Pression interne du même essai": "TMD1 : 1.4 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-ani-black-s-h2-tmd1-wb-buse-1-2.svg",
    "alt": "Repères techniques : ANI BLACK/S H2 TMD1 WB buse 1.2",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI BLACK/S H2 TMD1 WB buse 1.2. Consommation constructeur au point documenté : 470 L/min à 5.5 bar. Montage de référence : RP1 amont 5.5 bar ; TMD1 interne 1.4 bar. La pression calculée est la lecture amont RP1 ; les pertes d’un autre montage ne sont pas établies. Buse de 1.2 mm, technologie WB, alimentation gravité et chauffage pneumatique H2. Cette combinaison est proposée par le fabricant sous le code AH141710.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Chapeau / technologie : WB.",
      "Alimentation : gravité.",
      "Point amont du montage de référence : RP1 : 5.5 bar.",
      "Pression interne du même essai : TMD1 : 1.4 bar.",
      "Mode retenu pour le calcul : air chaud, système pneumatique H2.",
      "Consommation publiée dans son unité originale : 470 l/min, consommation en travail, air chaud H2.",
      "Pression dans la source : RP1 amont 5.5 bar ; TMD1 interne 1.4 bar."
    ],
    "limitations": [
      "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
      "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
      "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
      "Les valeurs RP1 et TMD1 appartiennent à deux lieux différents du même essai. La lecture amont n’est pas présentée comme une pression interne mesurée au pistolet.",
      "Le besoin du mode air chaud est retenu ; le mode haut volume d’air possède un autre point et n’est pas une seconde référence produit.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.2 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    },
    {
      "label": "Chapeau / technologie",
      "value": "WB",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    },
    {
      "label": "Point amont du montage de référence",
      "value": "RP1 : 5.5 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    },
    {
      "label": "Pression interne du même essai",
      "value": "TMD1 : 1.4 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    },
    {
      "label": "Mode retenu pour le calcul",
      "value": "air chaud, système pneumatique H2",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "470 l/min, consommation en travail, air chaud H2",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "RP1 amont 5.5 bar ; TMD1 interne 1.4 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p76"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p76",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=76",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 76",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p76"
    ],
    "airflowLpm": [
      "october8-tools-ani-technical-2020-p76"
    ]
  },
  "notes": [
    "Buse de 1.2 mm, technologie WB, alimentation gravité et chauffage pneumatique H2. Cette combinaison est proposée par le fabricant sous le code AH141710.",
    "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
    "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
    "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
    "Les valeurs RP1 et TMD1 appartiennent à deux lieux différents du même essai. La lecture amont n’est pas présentée comme une pression interne mesurée au pistolet.",
    "Le besoin du mode air chaud est retenu ; le mode haut volume d’air possède un autre point et n’est pas une seconde référence produit.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
