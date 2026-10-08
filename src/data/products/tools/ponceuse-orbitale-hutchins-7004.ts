import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-hutchins-7004",
  "slug": "ponceuse-orbitale-hutchins-7004",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Hutchins 7004",
  "brand": "Hutchins",
  "model": "7004",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 6.205
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "hutchins-model-7004",
    "label": "7004",
    "distinguishingAttributes": {
      "Détail constructeur": "Air Consumption: 10.2 cfm @ 90 PSI"
    }
  },
  "image": {
    "src": "/images/products/ponceuse-orbitale-hutchins-7004.svg",
    "alt": "Repères techniques : Hutchins 7004",
    "sourceUrl": "https://hutchinsmfg.com/water-sanders/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hutchins 7004. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. ORBITAL ACTION ; 3 2/3\" X 7\" Pad ; RPM: 8500+.",
    "verifiedFacts": [
      "Détail constructeur : ORBITAL ACTION.",
      "Détail constructeur : 3 2/3\" X 7\" Pad.",
      "Détail constructeur : RPM: 8500+.",
      "Détail constructeur : Wt: 3lbs. 14oz..",
      "Détail constructeur : Air Consumption: 10.2 cfm @ 90 PSI.",
      "Détail constructeur : Noise Level: 76 dBa.",
      "Détail constructeur : 20' high-pressure hose connected to water source.",
      "Consommation publiée dans son unité originale : Air Consumption: 10.2 cfm @ 90 PSI.",
      "Pression dans la source : 90 PSI associé à la consommation publiée."
    ],
    "limitations": [
      "La consommation en CFM, lorsqu’elle est indiquée, ne précise pas les conditions de référence volumique ni le régime de charge. Elle reste native et ne devient pas un débit L/min dimensionnant.",
      "La pression associée à une consommation décrit le point publié. Elle ne démontre ni une pression maximale mécanique ni une plage de fonctionnement complète.",
      "Les différences de fixation PSA/Hook ou de largeur du seul plateau ne sont pas multipliées en références supplémentaires dans ce lot.",
      "Le site fabricant annonce la fermeture des nouvelles ventes et une suspension de fabrication, sans calendrier de reprise. Ces pages documentent des outils ; elles ne prouvent pas une disponibilité actuelle à l’achat.",
      "Les niveaux de bruit et les masses restent des données natives ; aucune distance de mesure, norme acoustique ou unité régionale de poids n’est ajoutée sans documentation.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Détail constructeur",
      "value": "ORBITAL ACTION",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "3 2/3\" X 7\" Pad",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "RPM: 8500+",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "Wt: 3lbs. 14oz.",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "Air Consumption: 10.2 cfm @ 90 PSI",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "Noise Level: 76 dBa",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "20' high-pressure hose connected to water source",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Air Consumption: 10.2 cfm @ 90 PSI",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "90 PSI associé à la consommation publiée",
      "evidenceIds": [
        "october8-tools-hutchins-water-fiche-technique-fabricant"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-hutchins-water-fiche-technique-fabricant",
      "sourceUrl": "https://hutchinsmfg.com/water-sanders/",
      "sourceLabel": "Hutchins, fiche technique fabricant, fiche technique fabricant",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 0320e1845687c167c9f8a84ccdc9f24835d8c679d1be588c3f67ff4209dd277a. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-hutchins-all",
      "sourceUrl": "https://hutchinsmfg.com/all-products/",
      "sourceLabel": "Hutchins, fiche technique fabricant",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 3105a9c1983d5b54ca87c2ffa77ddba2378c27f921b5aeeb0c5532ae458c22b0. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-hutchins-faq",
      "sourceUrl": "https://hutchinsmfg.com/faq/",
      "sourceLabel": "Hutchins, fiche technique fabricant",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 2ed7e30abf48623876f640395043a8aa16866a21e926378004ab69b550e83d20. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-hutchins-water-fiche-technique-fabricant",
      "october8-tools-hutchins-all",
      "october8-tools-hutchins-faq"
    ],
    "demandExplanation": [
      "october8-tools-hutchins-water-fiche-technique-fabricant",
      "october8-tools-hutchins-all",
      "october8-tools-hutchins-faq"
    ]
  },
  "notes": [
    "ORBITAL ACTION ; 3 2/3\" X 7\" Pad ; RPM: 8500+.",
    "La consommation en CFM, lorsqu’elle est indiquée, ne précise pas les conditions de référence volumique ni le régime de charge. Elle reste native et ne devient pas un débit L/min dimensionnant.",
    "La pression associée à une consommation décrit le point publié. Elle ne démontre ni une pression maximale mécanique ni une plage de fonctionnement complète.",
    "Les différences de fixation PSA/Hook ou de largeur du seul plateau ne sont pas multipliées en références supplémentaires dans ce lot.",
    "Le site fabricant annonce la fermeture des nouvelles ventes et une suspension de fabrication, sans calendrier de reprise. Ces pages documentent des outils ; elles ne prouvent pas une disponibilité actuelle à l’achat.",
    "Les niveaux de bruit et les masses restent des données natives ; aucune distance de mesure, norme acoustique ou unité régionale de poids n’est ajoutée sans documentation.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
