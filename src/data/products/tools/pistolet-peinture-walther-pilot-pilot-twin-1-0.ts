import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-walther-pilot-pilot-twin-1-0",
  "slug": "pistolet-peinture-walther-pilot-pilot-twin-1-0",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Walther Pilot Pilot Twin 1.0",
  "brand": "Walther Pilot",
  "model": "Pilot Twin 1.0",
  "mpn": "V1153100103",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 78,
    "typical": 78,
    "max": 78
  },
  "confidence": "B",
  "variant": {
    "familyId": "walther-pilot-pilot-twin",
    "label": "Pilot Twin 1.0",
    "distinguishingAttributes": {
      "Buse produit": "1.0 mm",
      "Forme du jet": "jet du Twin",
      "Alimentation produit": "FIF"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-walther-pilot-pilot-twin-1-0.svg",
    "alt": "Repères techniques : Walther Pilot Pilot Twin 1.0",
    "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walther Pilot Pilot Twin 1.0. Consommation constructeur au point documenté : 78 L/min à 2 bar. Pilot Twin : buse 1.0 mm, jet du Twin, alimentation FIF.",
    "verifiedFacts": [
      "Buse produit : 1.0 mm.",
      "Forme du jet : jet du Twin.",
      "Alimentation produit : FIF.",
      "Consommation publiée dans son unité originale : 78 L/min, jet jet du Twin, tableau de la notice à 2 bar..",
      "Pression dans la source : Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.."
    ],
    "limitations": [
      "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
      "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
      "La consommation concerne l’atomisation du pistolet. Une pompe pneumatique ou un réservoir sous pression alimentant le produit ajoute une demande séparée si le même compresseur l’alimente.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse produit",
      "value": "1.0 mm",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p19"
      ]
    },
    {
      "label": "Forme du jet",
      "value": "jet du Twin",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p19"
      ]
    },
    {
      "label": "Alimentation produit",
      "value": "FIF",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p19"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "78 L/min, jet jet du Twin, tableau de la notice à 2 bar.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p19"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p19"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walther-catalog2025-p19",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf#page=19",
      "sourceLabel": "Walther Pilot, catalogue produits constructeur2025/26, page PDF 19",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5d303e3323fcdad9eb74e212c5d647bcecfef28fee4a9b759dacc8129a4f8d8f. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-twin-p17",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_Twin.pdf#page=17",
      "sourceLabel": "Walther Pilot, notice primaire pilot-twin, page PDF 17",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 f403b62e0a0864f24b9bbb60b6fcd7e64ce330abcb2c87f48dd180e97d12e5f4. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-twin-p13",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_Twin.pdf#page=13",
      "sourceLabel": "Walther Pilot, notice primaire pilot-twin, page PDF 13",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 f403b62e0a0864f24b9bbb60b6fcd7e64ce330abcb2c87f48dd180e97d12e5f4. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walther-catalog2025-p19",
      "october7-tools-walther-manual-pilot-twin-p17",
      "october7-tools-walther-manual-pilot-twin-p13"
    ],
    "airflowLpm": [
      "october7-tools-walther-catalog2025-p19",
      "october7-tools-walther-manual-pilot-twin-p17",
      "october7-tools-walther-manual-pilot-twin-p13"
    ]
  },
  "notes": [
    "Pilot Twin : buse 1.0 mm, jet du Twin, alimentation FIF.",
    "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
    "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
    "La consommation concerne l’atomisation du pistolet. Une pompe pneumatique ou un réservoir sous pression alimentant le produit ajoute une demande séparée si le même compresseur l’alimente.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
