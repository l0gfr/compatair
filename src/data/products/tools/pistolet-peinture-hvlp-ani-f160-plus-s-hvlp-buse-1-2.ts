import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-ani-f160-plus-s-hvlp-buse-1-2",
  "slug": "pistolet-peinture-hvlp-ani-f160-plus-s-hvlp-buse-1-2",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ANI F160-PLUS/S HVLP buse 1.2",
  "brand": "ANI",
  "model": "F160-PLUS/S HVLP buse 1.2",
  "mpn": "AH1505011A",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2.6,
    "typical": 2.6,
    "max": 2.6
  },
  "airflowLpm": {
    "min": 250,
    "typical": 250,
    "max": 250
  },
  "confidence": "B",
  "variant": {
    "familyId": "ani-f160-plus-s",
    "label": "F160-PLUS/S HVLP buse 1.2",
    "distinguishingAttributes": {
      "Buse": "1.2 mm",
      "Chapeau / technologie": "HVLP",
      "Alimentation": "gravité",
      "Point amont du montage de référence": "RP1 : 2.6 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-ani-f160-plus-s-hvlp-buse-1-2.svg",
    "alt": "Repères techniques : ANI F160-PLUS/S HVLP buse 1.2",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI F160-PLUS/S HVLP buse 1.2. Consommation constructeur au point documenté : 250 L/min à 2.6 bar. Montage de référence : RP1 amont 2.6 bar. La pression calculée est la lecture amont RP1 ; les pertes d’un autre montage ne sont pas établies. Buse de 1.2 mm, technologie HVLP, alimentation gravité. Cette combinaison est proposée par le fabricant sous le code AH1505011A.",
    "verifiedFacts": [
      "Buse : 1.2 mm.",
      "Chapeau / technologie : HVLP.",
      "Alimentation : gravité.",
      "Point amont du montage de référence : RP1 : 2.6 bar.",
      "Consommation publiée dans son unité originale : 250 l/min, consommation en travail.",
      "Pression dans la source : RP1 amont 2.6 bar."
    ],
    "limitations": [
      "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
      "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
      "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.2 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p85"
      ]
    },
    {
      "label": "Chapeau / technologie",
      "value": "HVLP",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p85"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p85"
      ]
    },
    {
      "label": "Point amont du montage de référence",
      "value": "RP1 : 2.6 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p85"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "250 l/min, consommation en travail",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p85"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "RP1 amont 2.6 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p85"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p85",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=85",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 85",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p85"
    ],
    "airflowLpm": [
      "october8-tools-ani-technical-2020-p85"
    ]
  },
  "notes": [
    "Buse de 1.2 mm, technologie HVLP, alimentation gravité. Cette combinaison est proposée par le fabricant sous le code AH1505011A.",
    "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
    "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
    "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
