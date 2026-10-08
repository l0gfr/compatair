import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-hutchins-500",
  "slug": "ponceuse-orbitale-hutchins-500",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Hutchins 500",
  "brand": "Hutchins",
  "model": "500",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "hutchins-model-500",
    "label": "500",
    "distinguishingAttributes": {
      "Offset natif": "3/32\"",
      "Vitesse publiée": "12,000 RPM",
      "Consommation native de la fiche": "10.7 CFM",
      "Entrée d’air": "1/4\"",
      "Puissance native": ".25 horsepower"
    }
  },
  "image": {
    "src": "/images/products/ponceuse-orbitale-hutchins-500.svg",
    "alt": "Repères techniques : Hutchins 500",
    "sourceUrl": "https://hutchinsmfg.com/wp-content/uploads/2021/11/ProFinisher-500-600-Flyer-email-ver-FL03.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Hutchins 500. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. Model 500 : offset 3/32\", vitesse de 12,000 RPM et montage de moteur interchangeable publiés dans la fiche constructeur. La pression de la spécification 10.7 CFM n’est pas précisée.",
    "verifiedFacts": [
      "Offset natif : 3/32\".",
      "Vitesse publiée : 12,000 RPM.",
      "Consommation native de la fiche : 10.7 CFM.",
      "Entrée d’air : 1/4\".",
      "Puissance native : .25 horsepower.",
      "Consommation publiée dans son unité originale : 10.7 CFM, spécification commune de la fiche constructeur.",
      "Pression dans la source : Non publiée pour cette référence dans la source consultée."
    ],
    "limitations": [
      "La consommation en CFM, lorsqu’elle est indiquée, ne précise pas les conditions de référence volumique ni le régime de charge. Elle reste native et ne devient pas un débit L/min dimensionnant.",
      "La pression associée à une consommation décrit le point publié. Elle ne démontre ni une pression maximale mécanique ni une plage de fonctionnement complète.",
      "Les différences de fixation PSA/Hook ou de largeur du seul plateau ne sont pas multipliées en références supplémentaires dans ce lot.",
      "Le site fabricant annonce la fermeture des nouvelles ventes et une suspension de fabrication, sans calendrier de reprise. Ces pages documentent des outils ; elles ne prouvent pas une disponibilité actuelle à l’achat.",
      "Les niveaux de bruit et les masses restent des données natives ; aucune distance de mesure, norme acoustique ou unité régionale de poids n’est ajoutée sans documentation.",
      "Aucun couple propre débit/pression n’est publié dans cette fiche. Aucun chiffre d’un autre modèle ou système d’aspiration n’est transféré.",
      "La fiche indique 10.7 CFM dans ses spécifications communes, sans pression associée. Aucun point à 90 psi d’une autre série n’est emprunté.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Offset natif",
      "value": "3/32\"",
      "evidenceIds": [
        "october8-tools-hutchins-pro500600-p1"
      ]
    },
    {
      "label": "Vitesse publiée",
      "value": "12,000 RPM",
      "evidenceIds": [
        "october8-tools-hutchins-pro500600-p1"
      ]
    },
    {
      "label": "Consommation native de la fiche",
      "value": "10.7 CFM",
      "evidenceIds": [
        "october8-tools-hutchins-pro500600-p1"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "1/4\"",
      "evidenceIds": [
        "october8-tools-hutchins-pro500600-p1"
      ]
    },
    {
      "label": "Puissance native",
      "value": ".25 horsepower",
      "evidenceIds": [
        "october8-tools-hutchins-pro500600-p1"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "10.7 CFM, spécification commune de la fiche constructeur",
      "evidenceIds": [
        "october8-tools-hutchins-pro500600-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Non publiée pour cette référence dans la source consultée",
      "evidenceIds": [
        "october8-tools-hutchins-pro500600-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-hutchins-pro500600-p1",
      "sourceUrl": "https://hutchinsmfg.com/wp-content/uploads/2021/11/ProFinisher-500-600-Flyer-email-ver-FL03.pdf#page=1",
      "sourceLabel": "Hutchins, fiche technique fabricant, page PDF 1",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 ac45b61b1e840b1a95737e6e7d16d7c21da5a5cd362891f139d2856960f7cb09. Déclaration fabricant, sans essai physique CompatAir."
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
      "october8-tools-hutchins-pro500600-p1",
      "october8-tools-hutchins-all",
      "october8-tools-hutchins-faq"
    ],
    "demandExplanation": [
      "october8-tools-hutchins-pro500600-p1",
      "october8-tools-hutchins-all",
      "october8-tools-hutchins-faq"
    ]
  },
  "notes": [
    "Model 500 : offset 3/32\", vitesse de 12,000 RPM et montage de moteur interchangeable publiés dans la fiche constructeur. La pression de la spécification 10.7 CFM n’est pas précisée.",
    "La consommation en CFM, lorsqu’elle est indiquée, ne précise pas les conditions de référence volumique ni le régime de charge. Elle reste native et ne devient pas un débit L/min dimensionnant.",
    "La pression associée à une consommation décrit le point publié. Elle ne démontre ni une pression maximale mécanique ni une plage de fonctionnement complète.",
    "Les différences de fixation PSA/Hook ou de largeur du seul plateau ne sont pas multipliées en références supplémentaires dans ce lot.",
    "Le site fabricant annonce la fermeture des nouvelles ventes et une suspension de fabrication, sans calendrier de reprise. Ces pages documentent des outils ; elles ne prouvent pas une disponibilité actuelle à l’achat.",
    "Les niveaux de bruit et les masses restent des données natives ; aucune distance de mesure, norme acoustique ou unité régionale de poids n’est ajoutée sans documentation.",
    "Aucun couple propre débit/pression n’est publié dans cette fiche. Aucun chiffre d’un autre modèle ou système d’aspiration n’est transféré.",
    "La fiche indique 10.7 CFM dans ses spécifications communes, sans pression associée. Aucun point à 90 psi d’une autre série n’est emprunté.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
