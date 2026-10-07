import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-walcom-slim-xlight-halo-pression-produit-raccord-m-1-4-buse-1-1-mm",
  "slug": "pistolet-peinture-walcom-slim-xlight-halo-pression-produit-raccord-m-1-4-buse-1-1-mm",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Walcom Slim Xlight HALO, pression produit, raccord M 1/4, buse 1.1 mm",
  "brand": "Walcom",
  "model": "Slim Xlight HALO, pression produit, raccord M 1/4, buse 1.1 mm",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 260,
    "typical": 260,
    "max": 260
  },
  "confidence": "B",
  "variant": {
    "familyId": "walcom-slim-xlight",
    "label": "Slim Xlight HALO, pression produit, raccord M 1/4, buse 1.1 mm",
    "distinguishingAttributes": {
      "Buse déclarée": "1.1 mm",
      "Alimentation": "pression produit, raccord M 1/4",
      "Technologie de pulvérisation": "HALO",
      "Masse du pistolet déclarée": "455 g",
      "Motif de référence fabricant": "8280**"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-walcom-slim-xlight-halo-pression-produit-raccord-m-1-4-buse-1-1-mm.svg",
    "alt": "Repères techniques : Walcom Slim Xlight HALO, pression produit, raccord M 1/4, buse 1.1 mm",
    "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walcom Slim Xlight HALO, pression produit, raccord M 1/4, buse 1.1 mm. Consommation constructeur au point documenté : 260 L/min à 2 bar. Buse 1.1 mm et alimentation pression produit, raccord M 1/4, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "verifiedFacts": [
      "Buse déclarée : 1.1 mm.",
      "Alimentation : pression produit, raccord M 1/4.",
      "Technologie de pulvérisation : HALO.",
      "Masse du pistolet déclarée : 455 g.",
      "Motif de référence fabricant : 8280**.",
      "Consommation publiée dans son unité originale : 260 L/min.",
      "Pression dans la source : 2 bar à l’entrée, point de consommation."
    ],
    "limitations": [
      "Le profil concerne l’air du pistolet. Une pompe pneumatique ou un réservoir alimentant le produit ajoute une consommation à documenter séparément si le même compresseur l’alimente.",
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
      "value": "1.1 mm",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p14"
      ]
    },
    {
      "label": "Alimentation",
      "value": "pression produit, raccord M 1/4",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p14"
      ]
    },
    {
      "label": "Technologie de pulvérisation",
      "value": "HALO",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p14"
      ]
    },
    {
      "label": "Masse du pistolet déclarée",
      "value": "455 g",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p14"
      ]
    },
    {
      "label": "Motif de référence fabricant",
      "value": "8280**",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p14"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "260 L/min",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p14"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p14"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walcom-catalog2026-p14",
      "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf#page=14",
      "sourceLabel": "Walcom, catalogue officiel WD16_26EN, page PDF 14",
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
      "october7-tools-walcom-catalog2026-p14",
      "october7-tools-walcom-carbonio-instructions-p12"
    ],
    "airflowLpm": [
      "october7-tools-walcom-catalog2026-p14",
      "october7-tools-walcom-carbonio-instructions-p12"
    ]
  },
  "notes": [
    "Buse 1.1 mm et alimentation pression produit, raccord M 1/4, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "Le profil concerne l’air du pistolet. Une pompe pneumatique ou un réservoir alimentant le produit ajoute une consommation à documenter séparément si le même compresseur l’alimente.",
    "Le débit est la déclaration constructeur pour cette famille au point de 2 bar ; le catalogue ne fournit pas un essai de consommation séparé pour chaque diamètre de buse.",
    "Le calcul est limité à 2 bar à l’entrée du pistolet. Il ne décrit pas la consommation sur toute la plage de réglage.",
    "Motif de référence publié, suffixe de commande non observé : aucun MPN complet n’est créé.",
    "Une configuration physique par buse et alimentation ; les changements de godet, emballage ou manomètre ne sont pas comptés.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
