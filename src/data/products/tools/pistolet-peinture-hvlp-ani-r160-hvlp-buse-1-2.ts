import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-ani-r160-hvlp-buse-1-2",
  "slug": "pistolet-peinture-hvlp-ani-r160-hvlp-buse-1-2",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ANI R160 HVLP buse 1.2",
  "brand": "ANI",
  "model": "R160 HVLP buse 1.2",
  "mpn": "AH1517010A",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.6,
    "typical": 2.6,
    "max": 2.6
  },
  "airflowLpm": {
    "min": 180,
    "typical": 180,
    "max": 180
  },
  "confidence": "B",
  "variant": {
    "familyId": "ani-r160",
    "label": "R160 HVLP buse 1.2",
    "distinguishingAttributes": {
      "Buse": "1.2 mm",
      "Technologie": "HVLP",
      "Alimentation": "gravité",
      "Point amont du montage": "RP1 : 2.6 bar",
      "Pression interne du même essai": "TMD1 : 1.8 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-ani-r160-hvlp-buse-1-2.svg",
    "alt": "Repères techniques : ANI R160 HVLP buse 1.2",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI R160 HVLP buse 1.2. Consommation constructeur au point documenté : 180 L/min à 2.6 bar. Montage de référence : RP1 amont 2.6 bar ; TMD1 interne 1.8 bar. La pression calculée est la lecture amont RP1 ; les pertes d’un autre montage ne sont pas établies. Le code AH1517010A désigne la buse de 1.2 mm de R160, en technologie HVLP avec alimentation gravité.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Technologie : HVLP.",
      "Alimentation : gravité.",
      "Point amont du montage : RP1 : 2.6 bar.",
      "Pression interne du même essai : TMD1 : 1.8 bar.",
      "Consommation publiée dans son unité originale : 180 l/min en travail.",
      "Pression dans la source : RP1 amont 2.6 bar ; TMD1 interne 1.8 bar."
    ],
    "limitations": [
      "Édition 2020 actuellement liée par le fabricant ; disponibilité actuelle non établie.",
      "Les variantes de manomètre, les coffrets et les tailles de godet du même outil ne sont pas ajoutés comme références distinctes.",
      "RP1 et TMD1 indiquent deux lieux différents du même montage ; la pression calculée est la lecture amont RP1. Aucun résultat n’est extrapolé à un autre raccordement.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.2 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p91"
      ]
    },
    {
      "label": "Technologie",
      "value": "HVLP",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p91"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p91"
      ]
    },
    {
      "label": "Point amont du montage",
      "value": "RP1 : 2.6 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p91"
      ]
    },
    {
      "label": "Pression interne du même essai",
      "value": "TMD1 : 1.8 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p91"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "180 l/min en travail",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p91"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "RP1 amont 2.6 bar ; TMD1 interne 1.8 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p91"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p91",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=91",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 91",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-ani-technical-2020-p90",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=90",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 90",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-linked-document-20-p1",
      "sourceUrl": "https://www.ani.it/wp-content/uploads/2018/05/ANI_Scheda_ventaglio_aerografi_2019_R160_R160_T.pdf#page=1",
      "sourceLabel": "ANI, notice et paramètres de pulvérisation constructeur, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 234c49e4f97c9b8888bf0d140ca2f907756f618b69df3899018337d4e2f1c206. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p91",
      "october8-tools-ani-technical-2020-p90",
      "october8-tools-linked-document-20-p1"
    ],
    "airflowLpm": [
      "october8-tools-ani-technical-2020-p91",
      "october8-tools-ani-technical-2020-p90",
      "october8-tools-linked-document-20-p1"
    ]
  },
  "notes": [
    "Le code AH1517010A désigne la buse de 1.2 mm de R160, en technologie HVLP avec alimentation gravité.",
    "Édition 2020 actuellement liée par le fabricant ; disponibilité actuelle non établie.",
    "Les variantes de manomètre, les coffrets et les tailles de godet du même outil ne sont pas ajoutés comme références distinctes.",
    "RP1 et TMD1 indiquent deux lieux différents du même montage ; la pression calculée est la lecture amont RP1. Aucun résultat n’est extrapolé à un autre raccordement.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
