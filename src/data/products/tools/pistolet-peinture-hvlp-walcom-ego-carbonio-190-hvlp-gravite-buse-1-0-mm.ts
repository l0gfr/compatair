import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm",
  "slug": "pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Walcom Ego Carbonio 190 HVLP, gravité, buse 1.0 mm",
  "brand": "Walcom",
  "model": "Ego Carbonio 190 HVLP, gravité, buse 1.0 mm",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "confidence": "B",
  "variant": {
    "familyId": "walcom-ego-carbonio-190",
    "label": "Ego Carbonio 190 HVLP, gravité, buse 1.0 mm",
    "distinguishingAttributes": {
      "Buse déclarée": "1.0 mm",
      "Alimentation": "gravité",
      "Technologie de pulvérisation": "HVLP",
      "Masse du pistolet déclarée": "190 g",
      "Motif de référence fabricant": "7130**"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm.svg",
    "alt": "Repères techniques : Walcom Ego Carbonio 190 HVLP, gravité, buse 1.0 mm",
    "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Ego Carbonio 190 HVLP, gravité, buse de 1,0 mm : configuration de la famille 7130**. Le catalogue présente 160 L/min et 5 CFM pour la famille ; l’écart est conservé, sans choisir arbitrairement un débit dimensionnant ni fabriquer un suffixe de commande.",
    "verifiedFacts": [
      "Buse déclarée : 1.0 mm.",
      "Alimentation : gravité.",
      "Technologie de pulvérisation : HVLP.",
      "Masse du pistolet déclarée : 190 g.",
      "Motif de référence fabricant : 7130**.",
      "Consommation publiée dans son unité originale : 160 L/min.",
      "Pression dans la source : 2 bar à l’entrée, point de consommation."
    ],
    "limitations": [
      "Le débit est la déclaration constructeur pour cette famille au point de 2 bar ; le catalogue ne fournit pas un essai de consommation séparé pour chaque diamètre de buse.",
      "Le point documentaire est annoncé à 2 bar ; ses limites ne permettent pas ici un calcul de compatibilité conclusif.",
      "Motif de référence publié, suffixe de commande non observé : aucun MPN complet n’est créé.",
      "Une configuration physique par buse et alimentation ; les changements de godet, emballage ou manomètre ne sont pas comptés.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément.",
      "La relecture du voisin retire toute conclusion de dimensionnement fondée sur une unité normalisée, une pression de service ou un régime non qualifiés."
    ]
  },
  "specifications": [
    {
      "label": "Buse déclarée",
      "value": "1.0 mm",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p10"
      ]
    },
    {
      "label": "Alimentation",
      "value": "gravité",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p10"
      ]
    },
    {
      "label": "Technologie de pulvérisation",
      "value": "HVLP",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p10"
      ]
    },
    {
      "label": "Masse du pistolet déclarée",
      "value": "190 g",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p10"
      ]
    },
    {
      "label": "Motif de référence fabricant",
      "value": "7130**",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p10"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "160 L/min",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p10"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "2 bar à l’entrée, point de consommation",
      "evidenceIds": [
        "october7-tools-walcom-catalog2026-p10"
      ]
    },
    {
      "label": "Consommation documentaire, hors calcul",
      "value": "160 L/min et 5 CFM, écart non résolu",
      "evidenceIds": [
        "reserved-neighbor-20261025-pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walcom-catalog2026-p10",
      "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf#page=10",
      "sourceLabel": "Walcom, catalogue officiel WD16_26EN, page PDF 10",
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
    },
    {
      "id": "reserved-neighbor-20261025-pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm",
      "sourceUrl": "https://walmec.com/en/catalogues/catalogue_walcom/WD16_26EN.pdf#page=10",
      "sourceLabel": "Relecture du voisin pendant la correction des pages réservées, 25 octobre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-25",
      "confidence": "B",
      "notes": "Lecture ciblée, SHA-256 82e98909d06567bec6e49964a7a75545cdc5802f4366bd5607a89f8cc01f8376. Les données de régime, d’unité ou de pression non qualifiées ne sont pas promues en point de dimensionnement."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walcom-catalog2026-p10",
      "october7-tools-walcom-carbonio-instructions-p12"
    ],
    "editorial": [
      "reserved-neighbor-20261025-pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm"
    ],
    "demandExplanation": [
      "reserved-neighbor-20261025-pistolet-peinture-hvlp-walcom-ego-carbonio-190-hvlp-gravite-buse-1-0-mm"
    ]
  },
  "notes": [
    "Buse 1.0 mm et alimentation gravité, explicitement proposées dans la matrice fabricant ; une configuration par diamètre et circuit de produit, sans variante de godet ou de manomètre.",
    "Le débit est la déclaration constructeur pour cette famille au point de 2 bar ; le catalogue ne fournit pas un essai de consommation séparé pour chaque diamètre de buse.",
    "Le calcul est limité à 2 bar à l’entrée du pistolet. Il ne décrit pas la consommation sur toute la plage de réglage.",
    "Motif de référence publié, suffixe de commande non observé : aucun MPN complet n’est créé.",
    "Une configuration physique par buse et alimentation ; les changements de godet, emballage ou manomètre ne sont pas comptés.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ],
  "demandExplanation": "La ligne de famille publie 160 L/min et 5 CFM sans concordance démontrée. Ni le régime de mesure ni une consommation propre à la buse de 1,0 mm ne permettent un point de dimensionnement qualifié."
};

export default product;
