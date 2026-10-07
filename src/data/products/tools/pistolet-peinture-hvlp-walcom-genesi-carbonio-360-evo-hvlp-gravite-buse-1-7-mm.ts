import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-walcom-genesi-carbonio-360-evo-hvlp-gravite-buse-1-7-mm",
  "slug": "pistolet-peinture-hvlp-walcom-genesi-carbonio-360-evo-hvlp-gravite-buse-1-7-mm",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Walcom Genesi Carbonio 360 EVO HVLP, gravité, buse 1.7 mm",
  "brand": "Walcom",
  "model": "Genesi Carbonio 360 EVO HVLP, gravité, buse 1.7 mm",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.",
  "confidence": "B",
  "variant": {
    "familyId": "walcom-genesi-carbonio-360-evo",
    "label": "Genesi Carbonio 360 EVO HVLP, gravité, buse 1.7 mm",
    "distinguishingAttributes": {
      "Buse déclarée": "1.7 mm",
      "Alimentation": "gravité",
      "Technologie de pulvérisation": "HVLP",
      "Masse du pistolet déclarée": "340 g",
      "Motif de référence fabricant": "W0330**"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-walcom-genesi-carbonio-360-evo-hvlp-gravite-buse-1-7-mm.svg",
    "alt": "Repères techniques : Walcom Genesi Carbonio 360 EVO HVLP, gravité, buse 1.7 mm",
    "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walcom Genesi Carbonio 360 EVO HVLP, gravité, buse 1.7 mm. Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution. Buse 1.7 mm et alimentation gravité, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "verifiedFacts": [
      "Buse déclarée : 1.7 mm.",
      "Alimentation : gravité.",
      "Technologie de pulvérisation : HVLP.",
      "Masse du pistolet déclarée : 340 g.",
      "Motif de référence fabricant : W0330**.",
      "Consommation publiée dans son unité originale : 360 L/min.",
      "Pression dans la source : 2 bar à l’entrée, point de consommation."
    ],
    "limitations": [
      "Contradiction primaire : le catalogue WD16_26EN donne 360 L/min à 2 bar, la fiche italienne du fabricant donne 370 L/min à 2,0 bar. Aucun arbitrage silencieux entre ces versions.",
      "Consommation à 2 bar déclarée dans le catalogue, sans protocole de mesure identifié pour cette version exacte. La notice de la génération antérieure ne suffit pas à qualifier son régime.",
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
        "october7-tools-walcom-catalog2026-p7"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p7"
      ]
    },
    {
      "label": "Technologie de pulvérisation",
      "value": "HVLP",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p7"
      ]
    },
    {
      "label": "Masse du pistolet déclarée",
      "value": "340 g",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p7"
      ]
    },
    {
      "label": "Motif de référence fabricant",
      "value": "W0330**",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p7"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "360 L/min",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p7"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p7"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walcom-catalog2026-p7",
      "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf#page=7",
      "sourceLabel": "Walcom, catalogue officiel WD16_26EN, page PDF 7",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 82e98909d06567bec6e49964a7a75545cdc5802f4366bd5607a89f8cc01f8376. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walcom-italian-evo-hvlp",
      "sourceUrl": "https://walmec.com/it/products/spraygun-carbonio/genesi_carbonio_hvlp",
      "sourceLabel": "Walcom, fiche italienne Genesi Carbonio 360 EVO HVLP",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 418790bd08257b252bcc6cc6b88b0c9b279a959c29f1508fa25254a419827f9e. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walcom-catalog2026-p7",
      "october7-tools-walcom-italian-evo-hvlp"
    ],
    "demandExplanation": [
      "october7-tools-walcom-catalog2026-p7",
      "october7-tools-walcom-italian-evo-hvlp"
    ]
  },
  "notes": [
    "Buse 1.7 mm et alimentation gravité, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "Contradiction primaire : le catalogue WD16_26EN donne 360 L/min à 2 bar, la fiche italienne du fabricant donne 370 L/min à 2,0 bar. Aucun arbitrage silencieux entre ces versions.",
    "Consommation à 2 bar déclarée dans le catalogue, sans protocole de mesure identifié pour cette version exacte. La notice de la génération antérieure ne suffit pas à qualifier son régime.",
    "Le débit est la déclaration constructeur pour cette famille au point de 2 bar ; le catalogue ne fournit pas un essai de consommation séparé pour chaque diamètre de buse.",
    "Le calcul est limité à 2 bar à l’entrée du pistolet. Il ne décrit pas la consommation sur toute la plage de réglage.",
    "Motif de référence publié, suffixe de commande non observé : aucun MPN complet n’est créé.",
    "Une configuration physique par buse et alimentation ; les changements de godet, emballage ou manomètre ne sont pas comptés.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
