import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-ani-gf-conv-buse-0-7",
  "slug": "pistolet-peinture-ani-gf-conv-buse-0-7",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ANI GF CONV buse 0.7",
  "brand": "ANI",
  "model": "GF CONV buse 0.7",
  "mpn": "AH1520003A",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 0.5,
    "max": 3.5
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "ani-gf",
    "label": "GF CONV buse 0.7",
    "distinguishingAttributes": {
      "Buse": "0.7 mm",
      "Technologie": "CONV",
      "Alimentation": "gravité"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-ani-gf-conv-buse-0-7.svg",
    "alt": "Repères techniques : ANI GF CONV buse 0.7",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI GF CONV buse 0.7. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. Le code AH1520003A désigne la buse de 0.7 mm de GF, en technologie CONV avec alimentation gravité.",
    "verifiedFacts": [
      "Buse : 0.7 mm.",
      "Technologie : CONV.",
      "Alimentation : gravité.",
      "Consommation publiée dans son unité originale : 20 à 73 l/min, plage publiée.",
      "Pression dans la source : 0,5 à 3,5 bar."
    ],
    "limitations": [
      "Édition 2020 actuellement liée par le fabricant ; disponibilité actuelle non établie.",
      "Les variantes de manomètre, les coffrets et les tailles de godet du même outil ne sont pas ajoutés comme références distinctes.",
      "Une plage ou une courbe de consommation ne définit pas ici un point numérique exact apparié à une pression. Aucun débit typique n’est fabriqué.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "0.7 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p93"
      ]
    },
    {
      "label": "Technologie",
      "value": "CONV",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p93"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p93"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "20 à 73 l/min, plage publiée",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p93"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "0,5 à 3,5 bar",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p93"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p93",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=93",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 93",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p93"
    ],
    "demandExplanation": [
      "october8-tools-ani-technical-2020-p93"
    ]
  },
  "notes": [
    "Le code AH1520003A désigne la buse de 0.7 mm de GF, en technologie CONV avec alimentation gravité.",
    "Édition 2020 actuellement liée par le fabricant ; disponibilité actuelle non établie.",
    "Les variantes de manomètre, les coffrets et les tailles de godet du même outil ne sont pas ajoutés comme références distinctes.",
    "Une plage ou une courbe de consommation ne définit pas ici un point numérique exact apparié à une pression. Aucun débit typique n’est fabriqué.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
