import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-ani-f160-s-sp-h2-hps-buse-1-2",
  "slug": "pistolet-peinture-ani-f160-s-sp-h2-hps-buse-1-2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ANI F160/S-SP H2 HPS buse 1.2",
  "brand": "ANI",
  "model": "F160/S-SP H2 HPS buse 1.2",
  "mpn": "AH1501046A",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 5.5,
    "typical": 5.5,
    "max": 5.5
  },
  "airflowLpm": {
    "min": 440,
    "typical": 440,
    "max": 440
  },
  "confidence": "B",
  "variant": {
    "familyId": "ani-f160-s-sp-h2",
    "label": "F160/S-SP H2 HPS buse 1.2",
    "distinguishingAttributes": {
      "Buse": "1.2 mm",
      "Chapeau / technologie": "HPS",
      "Alimentation": "godet pressurisé intégré",
      "Point amont du montage de référence": "RP1 : 5.5 bar",
      "Mode retenu pour le calcul": "air chaud, système pneumatique H2"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-ani-f160-s-sp-h2-hps-buse-1-2.svg",
    "alt": "Repères techniques : ANI F160/S-SP H2 HPS buse 1.2",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI F160/S-SP H2 HPS buse 1.2. Consommation constructeur au point documenté : 440 L/min à 5.5 bar. Montage de référence : RP1 amont 5.5 bar. La pression calculée est la lecture amont RP1 ; les pertes d’un autre montage ne sont pas établies. Buse de 1.2 mm, technologie HPS, alimentation godet pressurisé intégré et chauffage pneumatique H2. Cette combinaison est proposée par le fabricant sous le code AH1501046A.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Chapeau / technologie : HPS.",
      "Alimentation : godet pressurisé intégré.",
      "Point amont du montage de référence : RP1 : 5.5 bar.",
      "Mode retenu pour le calcul : air chaud, système pneumatique H2.",
      "Consommation publiée dans son unité originale : 440 l/min, consommation en travail, air chaud H2.",
      "Pression dans la source : RP1 amont 5.5 bar."
    ],
    "limitations": [
      "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
      "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
      "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
      "Le besoin du mode air chaud est retenu ; le mode haut volume d’air possède un autre point et n’est pas une seconde référence produit.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.2 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p83"
      ]
    },
    {
      "label": "Chapeau / technologie",
      "value": "HPS",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p83"
      ]
    },
    {
      "label": "Alimentation",
      "value": "godet pressurisé intégré",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p83"
      ]
    },
    {
      "label": "Point amont du montage de référence",
      "value": "RP1 : 5.5 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p83"
      ]
    },
    {
      "label": "Mode retenu pour le calcul",
      "value": "air chaud, système pneumatique H2",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p83"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "440 l/min, consommation en travail, air chaud H2",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p83"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "RP1 amont 5.5 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p83"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p83",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=83",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 83",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p83"
    ],
    "airflowLpm": [
      "october8-tools-ani-technical-2020-p83"
    ]
  },
  "notes": [
    "Buse de 1.2 mm, technologie HPS, alimentation godet pressurisé intégré et chauffage pneumatique H2. Cette combinaison est proposée par le fabricant sous le code AH1501046A.",
    "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
    "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
    "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
    "Le besoin du mode air chaud est retenu ; le mode haut volume d’air possède un autre point et n’est pas une seconde référence produit.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
