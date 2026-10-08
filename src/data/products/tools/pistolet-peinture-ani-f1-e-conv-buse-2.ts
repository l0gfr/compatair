import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-ani-f1-e-conv-buse-2",
  "slug": "pistolet-peinture-ani-f1-e-conv-buse-2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ANI F1/E CONV buse 2",
  "brand": "ANI",
  "model": "F1/E CONV buse 2",
  "mpn": "AH081608",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2,
    "max": 6
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "ani-f1-e",
    "label": "F1/E CONV buse 2",
    "distinguishingAttributes": {
      "Buse": "2 mm",
      "Technologie": "CONV",
      "Alimentation": "succion"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-ani-f1-e-conv-buse-2.svg",
    "alt": "Repères techniques : ANI F1/E CONV buse 2",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI F1/E CONV buse 2. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. Le code AH081608 désigne la buse de 2 mm de F1/E, en technologie CONV avec alimentation succion.",
    "verifiedFacts": [
      "Buse : 2 mm.",
      "Technologie : CONV.",
      "Alimentation : succion.",
      "Consommation publiée dans son unité originale : Courbe de consommation publiée, aucun point numérique apparié importé.",
      "Pression dans la source : 2 à 6 bar, plage de service."
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
      "value": "2 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p87"
      ]
    },
    {
      "label": "Technologie",
      "value": "CONV",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p87"
      ]
    },
    {
      "label": "Alimentation",
      "value": "succion",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p87"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Courbe de consommation publiée, aucun point numérique apparié importé",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p87"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 à 6 bar, plage de service",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p87"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p87",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=87",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 87",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p87"
    ],
    "demandExplanation": [
      "october8-tools-ani-technical-2020-p87"
    ]
  },
  "notes": [
    "Le code AH081608 désigne la buse de 2 mm de F1/E, en technologie CONV avec alimentation succion.",
    "Édition 2020 actuellement liée par le fabricant ; disponibilité actuelle non établie.",
    "Les variantes de manomètre, les coffrets et les tailles de godet du même outil ne sont pas ajoutés comme références distinctes.",
    "Une plage ou une courbe de consommation ne définit pas ici un point numérique exact apparié à une pression. Aucun débit typique n’est fabriqué.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
