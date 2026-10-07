import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-walther-pilot-pilot-misch-n-0-8-fif",
  "slug": "pistolet-peinture-walther-pilot-pilot-misch-n-0-8-fif",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Walther Pilot Pilot Misch-N 0.8 FIF",
  "brand": "Walther Pilot",
  "model": "Pilot Misch-N 0.8 FIF",
  "mpn": "V2432000083",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 390,
    "typical": 390,
    "max": 390
  },
  "confidence": "B",
  "variant": {
    "familyId": "walther-pilot-pilot-misch-n",
    "label": "Pilot Misch-N 0.8 FIF",
    "distinguishingAttributes": {
      "Buse produit": "0.8 mm",
      "Forme du jet": "jet large",
      "Alimentation produit": "FIF",
      "Deux circuits produit": "Composants mélangés dans le jet, réglage de course des aiguilles"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-walther-pilot-pilot-misch-n-0-8-fif.svg",
    "alt": "Repères techniques : Walther Pilot Pilot Misch-N 0.8 FIF",
    "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walther Pilot Pilot Misch-N 0.8 FIF. Consommation constructeur au point documenté : 390 L/min à 2 bar. Pilot Misch-N : buse 0.8 mm, jet large, alimentation FIF.",
    "verifiedFacts": [
      "Buse produit : 0.8 mm.",
      "Forme du jet : jet large.",
      "Alimentation produit : FIF.",
      "Deux circuits produit : Composants mélangés dans le jet, réglage de course des aiguilles.",
      "Consommation publiée dans son unité originale : 390 L/min, jet jet large, tableau de la notice à 2 bar..",
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
      "value": "0.8 mm",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p18"
      ]
    },
    {
      "label": "Forme du jet",
      "value": "jet large",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p18"
      ]
    },
    {
      "label": "Alimentation produit",
      "value": "FIF",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p18"
      ]
    },
    {
      "label": "Deux circuits produit",
      "value": "Composants mélangés dans le jet, réglage de course des aiguilles",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p18"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "390 L/min, jet jet large, tableau de la notice à 2 bar.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p18"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p18"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walther-catalog2025-p18",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf#page=18",
      "sourceLabel": "Walther Pilot, catalogue produits constructeur2025/26, page PDF 18",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5d303e3323fcdad9eb74e212c5d647bcecfef28fee4a9b759dacc8129a4f8d8f. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-misch-n-p16",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_Misch_N.pdf#page=16",
      "sourceLabel": "Walther Pilot, notice primaire pilot-misch-n, page PDF 16",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 fbc35349b6c429bb892aec8ad8a19786317edf379afb3482f01a8d26ff446a3d. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-misch-n-p12",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_Misch_N.pdf#page=12",
      "sourceLabel": "Walther Pilot, notice primaire pilot-misch-n, page PDF 12",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 fbc35349b6c429bb892aec8ad8a19786317edf379afb3482f01a8d26ff446a3d. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walther-catalog2025-p18",
      "october7-tools-walther-manual-pilot-misch-n-p16",
      "october7-tools-walther-manual-pilot-misch-n-p12"
    ],
    "airflowLpm": [
      "october7-tools-walther-catalog2025-p18",
      "october7-tools-walther-manual-pilot-misch-n-p16",
      "october7-tools-walther-manual-pilot-misch-n-p12"
    ]
  },
  "notes": [
    "Pilot Misch-N : buse 0.8 mm, jet large, alimentation FIF.",
    "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
    "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
    "La consommation concerne l’atomisation du pistolet. Une pompe pneumatique ou un réservoir sous pression alimentant le produit ajoute une demande séparée si le même compresseur l’alimente.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
