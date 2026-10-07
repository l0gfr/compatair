import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-walther-pilot-pilot-i-1-2-rndjet-gc",
  "slug": "pistolet-peinture-walther-pilot-pilot-i-1-2-rndjet-gc",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Walther Pilot Pilot I 1.2 RndJet GC",
  "brand": "Walther Pilot",
  "model": "Pilot I 1.2 RndJet GC",
  "mpn": "V1010151123",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 30,
    "typical": 30,
    "max": 30
  },
  "confidence": "B",
  "variant": {
    "familyId": "walther-pilot-pilot-i",
    "label": "Pilot I 1.2 RndJet GC",
    "distinguishingAttributes": {
      "Buse produit": "1.2 mm",
      "Forme du jet": "jet rond",
      "Alimentation produit": "GC"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-walther-pilot-pilot-i-1-2-rndjet-gc.svg",
    "alt": "Repères techniques : Walther Pilot Pilot I 1.2 RndJet GC",
    "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walther Pilot Pilot I 1.2 RndJet GC. Consommation constructeur au point documenté : 30 L/min à 2 bar. Pilot I : buse 1.2 mm, jet rond, alimentation GC.",
    "verifiedFacts": [
      "Buse produit : 1.2 mm.",
      "Forme du jet : jet rond.",
      "Alimentation produit : GC.",
      "Consommation publiée dans son unité originale : 30 L/min, jet jet rond, tableau de la notice à 2 bar..",
      "Pression dans la source : Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.."
    ],
    "limitations": [
      "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
      "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse produit",
      "value": "1.2 mm",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p9"
      ]
    },
    {
      "label": "Forme du jet",
      "value": "jet rond",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p9"
      ]
    },
    {
      "label": "Alimentation produit",
      "value": "GC",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p9"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "30 L/min, jet jet rond, tableau de la notice à 2 bar.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p9"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p9"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walther-catalog2025-p9",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf#page=9",
      "sourceLabel": "Walther Pilot, catalogue produits constructeur2025/26, page PDF 9",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5d303e3323fcdad9eb74e212c5d647bcecfef28fee4a9b759dacc8129a4f8d8f. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-i-p15",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_I.pdf#page=15",
      "sourceLabel": "Walther Pilot, notice primaire pilot-i, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5ff19306d34deb7aea2e7870fdbe91bb490d288c93e6259e1e69c92876d0ccd0. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-i-p12",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_I.pdf#page=12",
      "sourceLabel": "Walther Pilot, notice primaire pilot-i, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5ff19306d34deb7aea2e7870fdbe91bb490d288c93e6259e1e69c92876d0ccd0. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walther-catalog2025-p9",
      "october7-tools-walther-manual-pilot-i-p15",
      "october7-tools-walther-manual-pilot-i-p12"
    ],
    "airflowLpm": [
      "october7-tools-walther-catalog2025-p9",
      "october7-tools-walther-manual-pilot-i-p15",
      "october7-tools-walther-manual-pilot-i-p12"
    ]
  },
  "notes": [
    "Pilot I : buse 1.2 mm, jet rond, alimentation GC.",
    "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
    "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
