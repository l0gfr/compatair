import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-hutchins-610",
  "slug": "ponceuse-orbitale-hutchins-610",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Hutchins 610",
  "brand": "Hutchins",
  "model": "610",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "hutchins-model-610",
    "label": "610",
    "distinguishingAttributes": {
      "Détail constructeur": "3/16\" Offset Random-Orbit Action Sander"
    }
  },
  "image": {
    "src": "/images/products/ponceuse-orbitale-hutchins-610.svg",
    "alt": "Repères techniques : Hutchins 610",
    "sourceUrl": "https://hutchinsmfg.com/random-orbital-sanders/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hutchins 610. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. the Model 610 is a Self-Generating Vacuum version of the same tool ; Its \"Venturi Driven\" exhaust creates suction drawing the sanding dust into the optional Dust collection bag (1350-4) ; 3/16\" Offset Random-Orbit Action Sander.",
    "verifiedFacts": [
      "Détail constructeur : the Model 610 is a Self-Generating Vacuum version of the same tool.",
      "Détail constructeur : Its \"Venturi Driven\" exhaust creates suction drawing the sanding dust into the optional Dust collection bag (1350-4).",
      "Détail constructeur : 3/16\" Offset Random-Orbit Action Sander.",
      "Consommation publiée dans son unité originale : Non publiée pour cette référence dans la source consultée.",
      "Pression dans la source : Non publiée pour cette référence dans la source consultée."
    ],
    "limitations": [
      "La consommation en CFM, lorsqu’elle est indiquée, ne précise pas les conditions de référence volumique ni le régime de charge. Elle reste native et ne devient pas un débit L/min dimensionnant.",
      "La pression associée à une consommation décrit le point publié. Elle ne démontre ni une pression maximale mécanique ni une plage de fonctionnement complète.",
      "Les différences de fixation PSA/Hook ou de largeur du seul plateau ne sont pas multipliées en références supplémentaires dans ce lot.",
      "Le site fabricant annonce la fermeture des nouvelles ventes et une suspension de fabrication, sans calendrier de reprise. Ces pages documentent des outils ; elles ne prouvent pas une disponibilité actuelle à l’achat.",
      "Les niveaux de bruit et les masses restent des données natives ; aucune distance de mesure, norme acoustique ou unité régionale de poids n’est ajoutée sans documentation.",
      "Aucun couple propre débit/pression n’est publié dans cette fiche. Aucun chiffre d’un autre modèle ou système d’aspiration n’est transféré.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Détail constructeur",
      "value": "the Model 610 is a Self-Generating Vacuum version of the same tool",
      "evidenceIds": [
        "october8-tools-hutchins-random-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "Its \"Venturi Driven\" exhaust creates suction drawing the sanding dust into the optional Dust collection bag (1350-4)",
      "evidenceIds": [
        "october8-tools-hutchins-random-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Détail constructeur",
      "value": "3/16\" Offset Random-Orbit Action Sander",
      "evidenceIds": [
        "october8-tools-hutchins-random-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "Non publiée pour cette référence dans la source consultée",
      "evidenceIds": [
        "october8-tools-hutchins-random-fiche-technique-fabricant"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Non publiée pour cette référence dans la source consultée",
      "evidenceIds": [
        "october8-tools-hutchins-random-fiche-technique-fabricant"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-hutchins-random-fiche-technique-fabricant",
      "sourceUrl": "https://hutchinsmfg.com/random-orbital-sanders/",
      "sourceLabel": "Hutchins, fiche technique fabricant, fiche technique fabricant",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 d81b00324bcd1f547d0bd51ca0d23d0410980c94a79f8f067e8af2a030ae0817. Déclaration fabricant, sans essai physique CompatAir."
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
      "october8-tools-hutchins-random-fiche-technique-fabricant",
      "october8-tools-hutchins-all",
      "october8-tools-hutchins-faq"
    ],
    "demandExplanation": [
      "october8-tools-hutchins-random-fiche-technique-fabricant",
      "october8-tools-hutchins-all",
      "october8-tools-hutchins-faq"
    ]
  },
  "notes": [
    "the Model 610 is a Self-Generating Vacuum version of the same tool ; Its \"Venturi Driven\" exhaust creates suction drawing the sanding dust into the optional Dust collection bag (1350-4) ; 3/16\" Offset Random-Orbit Action Sander.",
    "La consommation en CFM, lorsqu’elle est indiquée, ne précise pas les conditions de référence volumique ni le régime de charge. Elle reste native et ne devient pas un débit L/min dimensionnant.",
    "La pression associée à une consommation décrit le point publié. Elle ne démontre ni une pression maximale mécanique ni une plage de fonctionnement complète.",
    "Les différences de fixation PSA/Hook ou de largeur du seul plateau ne sont pas multipliées en références supplémentaires dans ce lot.",
    "Le site fabricant annonce la fermeture des nouvelles ventes et une suspension de fabrication, sans calendrier de reprise. Ces pages documentent des outils ; elles ne prouvent pas une disponibilité actuelle à l’achat.",
    "Les niveaux de bruit et les masses restent des données natives ; aucune distance de mesure, norme acoustique ou unité régionale de poids n’est ajoutée sans documentation.",
    "Aucun couple propre débit/pression n’est publié dans cette fiche. Aucun chiffre d’un autre modèle ou système d’aspiration n’est transféré.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
