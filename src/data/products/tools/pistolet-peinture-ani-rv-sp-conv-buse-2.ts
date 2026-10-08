import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-ani-rv-sp-conv-buse-2",
  "slug": "pistolet-peinture-ani-rv-sp-conv-buse-2",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "ANI RV/SP CONV buse 2",
  "brand": "ANI",
  "model": "RV/SP CONV buse 2",
  "mpn": "AH080209",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2,
    "max": 6
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "ani-rv-sp",
    "label": "RV/SP CONV buse 2",
    "distinguishingAttributes": {
      "Buse": "2 mm",
      "Technologie": "CONV",
      "Alimentation": "pression externe"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-ani-rv-sp-conv-buse-2.svg",
    "alt": "Repères techniques : ANI RV/SP CONV buse 2",
    "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "ANI RV/SP CONV buse 2. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. Le code AH080209 désigne la buse de 2 mm de RV/SP, en technologie CONV avec alimentation pression externe.",
    "verifiedFacts": [
      "Buse : 2 mm.",
      "Technologie : CONV.",
      "Alimentation : pression externe.",
      "Consommation publiée dans son unité originale : Courbe de consommation publiée, aucun point numérique apparié importé.",
      "Pression dans la source : 2 à 6 bar, plage de service."
    ],
    "limitations": [
      "Édition 2020 actuellement liée par le fabricant ; disponibilité actuelle non établie.",
      "Les variantes de manomètre, les coffrets et les tailles de godet du même outil ne sont pas ajoutés comme références distinctes.",
      "Une plage ou une courbe de consommation ne définit pas ici un point numérique exact apparié à une pression. Aucun débit typique n’est fabriqué.",
      "La consommation du réservoir ou de la pompe d’alimentation externe éventuelle est à documenter séparément.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "2 mm",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p89"
      ]
    },
    {
      "label": "Technologie",
      "value": "CONV",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p89"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression externe",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p89"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Courbe de consommation publiée, aucun point numérique apparié importé",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p89"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 à 6 bar, plage de service",
      "evidenceIds": [
        "october8-tools-ani-technical-2020-p89"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-ani-technical-2020-p89",
      "sourceUrl": "https://www.ani.it/pdf/ani-officine-meccaniche-catalogo-prodotti-2020.pdf#page=89",
      "sourceLabel": "ANI, catalogue officiel édition 2020 actuellement lié par le fabricant, page PDF 89",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 12a27d19855f4601a5be44802f83642c43f4fe1828907915ff1589c1a197e9e9. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-ani-technical-2020-p89"
    ],
    "demandExplanation": [
      "october8-tools-ani-technical-2020-p89"
    ]
  },
  "notes": [
    "Le code AH080209 désigne la buse de 2 mm de RV/SP, en technologie CONV avec alimentation pression externe.",
    "Édition 2020 actuellement liée par le fabricant ; disponibilité actuelle non établie.",
    "Les variantes de manomètre, les coffrets et les tailles de godet du même outil ne sont pas ajoutés comme références distinctes.",
    "Une plage ou une courbe de consommation ne définit pas ici un point numérique exact apparié à une pression. Aucun débit typique n’est fabriqué.",
    "La consommation du réservoir ou de la pompe d’alimentation externe éventuelle est à documenter séparément.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
