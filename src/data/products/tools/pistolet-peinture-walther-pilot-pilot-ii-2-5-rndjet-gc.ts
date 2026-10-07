import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-walther-pilot-pilot-ii-2-5-rndjet-gc",
  "slug": "pistolet-peinture-walther-pilot-pilot-ii-2-5-rndjet-gc",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Walther Pilot Pilot II 2.5 RndJet GC",
  "brand": "Walther Pilot",
  "model": "Pilot II 2.5 RndJet GC",
  "mpn": "V1020151253",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 130,
    "typical": 130,
    "max": 130
  },
  "confidence": "B",
  "variant": {
    "familyId": "walther-pilot-pilot-ii",
    "label": "Pilot II 2.5 RndJet GC",
    "distinguishingAttributes": {
      "Buse produit": "2.5 mm",
      "Forme du jet": "jet rond",
      "Alimentation produit": "GC"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-walther-pilot-pilot-ii-2-5-rndjet-gc.svg",
    "alt": "Repères techniques : Walther Pilot Pilot II 2.5 RndJet GC",
    "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walther Pilot Pilot II 2.5 RndJet GC. Consommation constructeur au point documenté : 130 L/min à 2 bar. Pilot II : buse 2.5 mm, jet rond, alimentation GC.",
    "verifiedFacts": [
      "Buse produit : 2.5 mm.",
      "Forme du jet : jet rond.",
      "Alimentation produit : GC.",
      "Consommation publiée dans son unité originale : 130 L/min, jet jet rond, tableau de la notice à 2 bar..",
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
      "value": "2.5 mm",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p10"
      ]
    },
    {
      "label": "Forme du jet",
      "value": "jet rond",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p10"
      ]
    },
    {
      "label": "Alimentation produit",
      "value": "GC",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p10"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "130 L/min, jet jet rond, tableau de la notice à 2 bar.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p10"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p10"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walther-catalog2025-p10",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf#page=10",
      "sourceLabel": "Walther Pilot, catalogue produits constructeur2025/26, page PDF 10",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5d303e3323fcdad9eb74e212c5d647bcecfef28fee4a9b759dacc8129a4f8d8f. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-ii-p15",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_II.pdf#page=15",
      "sourceLabel": "Walther Pilot, notice primaire pilot-ii, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 aed3818813407866956be16d098fb54cb0f665975a9ce88144aec2c2a7fb8589. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-ii-p12",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_II.pdf#page=12",
      "sourceLabel": "Walther Pilot, notice primaire pilot-ii, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 aed3818813407866956be16d098fb54cb0f665975a9ce88144aec2c2a7fb8589. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walther-catalog2025-p10",
      "october7-tools-walther-manual-pilot-ii-p15",
      "october7-tools-walther-manual-pilot-ii-p12"
    ],
    "airflowLpm": [
      "october7-tools-walther-catalog2025-p10",
      "october7-tools-walther-manual-pilot-ii-p15",
      "october7-tools-walther-manual-pilot-ii-p12"
    ]
  },
  "notes": [
    "Pilot II : buse 2.5 mm, jet rond, alimentation GC.",
    "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
    "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
