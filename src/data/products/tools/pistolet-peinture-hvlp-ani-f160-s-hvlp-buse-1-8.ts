import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-ani-f160-s-hvlp-buse-1-8",
  "slug": "pistolet-peinture-hvlp-ani-f160-s-hvlp-buse-1-8",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "ANI F160/S HVLP buse 1.8",
  "brand": "ANI",
  "model": "F160/S HVLP buse 1.8",
  "mpn": "AH1501043A",
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
    "familyId": "ani-f160-s",
    "label": "F160/S HVLP buse 1.8",
    "distinguishingAttributes": {
      "Buse": "1.8 mm",
      "Chapeau / technologie": "HVLP",
      "Alimentation": "gravité",
      "Point amont du montage de référence": "RP1 : 2.6 bar",
      "Pression interne du même essai": "TMD1 : 1.8 bar"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-ani-f160-s-hvlp-buse-1-8.svg",
    "alt": "Repères techniques : ANI F160/S HVLP buse 1.8",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI F160/S HVLP buse 1.8. Consommation constructeur au point documenté : 250 L/min à 2.6 bar. Montage de référence : RP1 amont 2.6 bar ; TMD1 interne 1.8 bar. La pression calculée est la lecture amont RP1 ; les pertes d’un autre montage ne sont pas établies. Buse de 1.8 mm, technologie HVLP, alimentation gravité. Cette combinaison est proposée par le fabricant sous le code AH1501043A.",
    "verifiedFacts": [
      "Buse : 1.8 mm.",
      "Chapeau / technologie : HVLP.",
      "Alimentation : gravité.",
      "Point amont du montage de référence : RP1 : 2.6 bar.",
      "Pression interne du même essai : TMD1 : 1.8 bar.",
      "Consommation publiée dans son unité originale : 250 l/min, consommation en travail.",
      "Pression dans la source : RP1 amont 2.6 bar ; TMD1 interne 1.8 bar."
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
      "value": "1.8 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p81"
      ]
    },
    {
      "label": "Chapeau / technologie",
      "value": "HVLP",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p81"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p81"
      ]
    },
    {
      "label": "Point amont du montage de référence",
      "value": "RP1 : 2.6 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p81"
      ]
    },
    {
      "label": "Pression interne du même essai",
      "value": "TMD1 : 1.8 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p81"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "250 l/min, consommation en travail",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p81"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "RP1 amont 2.6 bar ; TMD1 interne 1.8 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p81"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p81",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=81",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 81",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-linked-document-12-p2",
      "sourceUrl": "https://www.ani.it/wp-content/uploads/prodotti/istruzioni/verniciatura/ani-vicenza-chiampo-BY1501034-ed_7.pdf#page=2",
      "sourceLabel": "ANI, notice et paramètres de pulvérisation constructeur, page PDF 2",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 fc753e6763f780b241c269182b1d2908971c0a82b26566312b840b3c5adfa3c8. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p81",
      "october8-tools-linked-document-12-p2"
    ],
    "airflowLpm": [
      "october8-tools-ani-technical-2020-p81",
      "october8-tools-linked-document-12-p2"
    ]
  },
  "notes": [
    "Buse de 1.8 mm, technologie HVLP, alimentation gravité. Cette combinaison est proposée par le fabricant sous le code AH1501043A.",
    "Données de l’édition 2020 actuellement liée par le fabricant ; la continuité avec les ensembles TMD2 de 2026 n’est pas établie.",
    "Le verdict porte uniquement sur le montage constructeur avec lecture amont RP1, réglages et technologie décrits. Il ne garantit pas la pression à l’outil après un autre tuyau, raccord ou régulateur.",
    "La disponibilité actuelle de cette référence ancienne n’est pas établie.",
    "Les valeurs RP1 et TMD1 appartiennent à deux lieux différents du même essai. La lecture amont n’est pas présentée comme une pression interne mesurée au pistolet.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
