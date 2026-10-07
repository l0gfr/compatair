import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-walcom-slim-halo-gravite-buse-2-5-mm",
  "slug": "pistolet-peinture-walcom-slim-halo-gravite-buse-2-5-mm",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Walcom Slim HALO, gravité, buse 2.5 mm",
  "brand": "Walcom",
  "model": "Slim HALO, gravité, buse 2.5 mm",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 255,
    "typical": 255,
    "max": 255
  },
  "confidence": "B",
  "variant": {
    "familyId": "walcom-slim",
    "label": "Slim HALO, gravité, buse 2.5 mm",
    "distinguishingAttributes": {
      "Buse déclarée": "2.5 mm",
      "Alimentation": "gravité",
      "Technologie de pulvérisation": "HALO",
      "Masse du pistolet déclarée": "535 g",
      "Motif de référence fabricant": "10068**"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-walcom-slim-halo-gravite-buse-2-5-mm.svg",
    "alt": "Repères techniques : Walcom Slim HALO, gravité, buse 2.5 mm",
    "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walcom Slim HALO, gravité, buse 2.5 mm. Consommation constructeur au point documenté : 255 L/min à 2 bar. Buse 2.5 mm et alimentation gravité, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "verifiedFacts": [
      "Buse déclarée : 2.5 mm.",
      "Alimentation : gravité.",
      "Technologie de pulvérisation : HALO.",
      "Masse du pistolet déclarée : 535 g.",
      "Motif de référence fabricant : 10068**.",
      "Consommation publiée dans son unité originale : 255 L/min.",
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
      "value": "2.5 mm",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p16"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p16"
      ]
    },
    {
      "label": "Technologie de pulvérisation",
      "value": "HALO",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p16"
      ]
    },
    {
      "label": "Masse du pistolet déclarée",
      "value": "535 g",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p16"
      ]
    },
    {
      "label": "Motif de référence fabricant",
      "value": "10068**",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p16"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "255 L/min",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p16"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p16"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walcom-catalog2026-p16",
      "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf#page=16",
      "sourceLabel": "Walcom, catalogue officiel WD16_26EN, page PDF 16",
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
      "october7-tools-walcom-catalog2026-p16",
      "october7-tools-walcom-carbonio-instructions-p12"
    ],
    "airflowLpm": [
      "october7-tools-walcom-catalog2026-p16",
      "october7-tools-walcom-carbonio-instructions-p12"
    ]
  },
  "notes": [
    "Buse 2.5 mm et alimentation gravité, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "Le débit est la déclaration constructeur pour cette famille au point de 2 bar ; le catalogue ne fournit pas un essai de consommation séparé pour chaque diamètre de buse.",
    "Le calcul est limité à 2 bar à l’entrée du pistolet. Il ne décrit pas la consommation sur toute la plage de réglage.",
    "Motif de référence publié, suffixe de commande non observé : aucun MPN complet n’est créé.",
    "Une configuration physique par buse et alimentation ; les changements de godet, emballage ou manomètre ne sont pas comptés.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
