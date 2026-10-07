import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-walcom-slim-hvlp-aspiration-buse-1-7-mm",
  "slug": "pistolet-peinture-hvlp-walcom-slim-hvlp-aspiration-buse-1-7-mm",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Walcom Slim HVLP, aspiration, buse 1.7 mm",
  "brand": "Walcom",
  "model": "Slim HVLP, aspiration, buse 1.7 mm",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 280,
    "typical": 280,
    "max": 280
  },
  "confidence": "B",
  "variant": {
    "familyId": "walcom-slim",
    "label": "Slim HVLP, aspiration, buse 1.7 mm",
    "distinguishingAttributes": {
      "Buse déclarée": "1.7 mm",
      "Alimentation": "aspiration",
      "Technologie de pulvérisation": "HVLP",
      "Masse du pistolet déclarée": "535 g",
      "Motif de référence fabricant": "10070**"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-walcom-slim-hvlp-aspiration-buse-1-7-mm.svg",
    "alt": "Repères techniques : Walcom Slim HVLP, aspiration, buse 1.7 mm",
    "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walcom Slim HVLP, aspiration, buse 1.7 mm. Consommation constructeur au point documenté : 280 L/min à 2 bar. Buse 1.7 mm et alimentation aspiration, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "verifiedFacts": [
      "Buse déclarée : 1.7 mm.",
      "Alimentation : aspiration.",
      "Technologie de pulvérisation : HVLP.",
      "Masse du pistolet déclarée : 535 g.",
      "Motif de référence fabricant : 10070**.",
      "Consommation publiée dans son unité originale : 280 L/min.",
      "Pression dans la source : 2 bar à l’entrée, point de consommation."
    ],
    "limitations": [
      "Le débit est la déclaration constructeur pour cette famille au point de 2 bar ; le catalogue ne fournit pas un essai de consommation séparé pour chaque diamètre de buse.",
      "Le calcul est limité à 2 bar à l’entrée du pistolet. Il ne décrit pas la consommation sur toute la plage de réglage.",
      "Motif de référence publié, suffixe de commande non observé : aucun MPN complet n’est créé.",
      "Une configuration physique par buse et alimentation ; les changements de godet, emballage ou manomètre ne sont pas comptés.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse déclarée",
      "value": "1.7 mm",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p17"
      ]
    },
    {
      "label": "Alimentation",
      "value": "aspiration",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p17"
      ]
    },
    {
      "label": "Technologie de pulvérisation",
      "value": "HVLP",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p17"
      ]
    },
    {
      "label": "Masse du pistolet déclarée",
      "value": "535 g",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p17"
      ]
    },
    {
      "label": "Motif de référence fabricant",
      "value": "10070**",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p17"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "280 L/min",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p17"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p17"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walcom-catalog2026-p17",
      "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf#page=17",
      "sourceLabel": "Walcom, catalogue officiel WD16_26EN, page PDF 17",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 82e98909d06567bec6e49964a7a75545cdc5802f4366bd5607a89f8cc01f8376. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walcom-carbonio-instructions-p12",
      "sourceUrl": "https://walmec.com/en/products/spraygun-carbonio/genesi_carbonio_htebase/istruzioni_WI34_21_05_light.pdf#page=12",
      "sourceLabel": "Walcom, notice WI34_21_05 Light, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 71deea5a6923efd3168144af38bc9a0fb94a9ce2f11e5ff6ac336e7d6ef932eb. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walcom-catalog2026-p17",
      "october7-tools-walcom-carbonio-instructions-p12"
    ],
    "airflowLpm": [
      "october7-tools-walcom-catalog2026-p17",
      "october7-tools-walcom-carbonio-instructions-p12"
    ]
  },
  "notes": [
    "Buse 1.7 mm et alimentation aspiration, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "Le débit est la déclaration constructeur pour cette famille au point de 2 bar ; le catalogue ne fournit pas un essai de consommation séparé pour chaque diamètre de buse.",
    "Le calcul est limité à 2 bar à l’entrée du pistolet. Il ne décrit pas la consommation sur toute la plage de réglage.",
    "Motif de référence publié, suffixe de commande non observé : aucun MPN complet n’est créé.",
    "Une configuration physique par buse et alimentation ; les changements de godet, emballage ou manomètre ne sont pas comptés.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
