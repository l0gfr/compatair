import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-walther-pilot-pilot-mini-mp-ea-huit-trous-0-5-mm-fif",
  "slug": "pistolet-peinture-walther-pilot-pilot-mini-mp-ea-huit-trous-0-5-mm-fif",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "Walther Pilot Pilot Mini MP EA huit trous 0.5 mm FIF",
  "brand": "Walther Pilot",
  "model": "Pilot Mini MP EA huit trous 0.5 mm FIF",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 2,
    "max": 2
  },
  "airflowLpm": {
    "min": 170,
    "typical": 170,
    "max": 170
  },
  "confidence": "B",
  "variant": {
    "familyId": "walther-pilot-pilot-mini",
    "label": "Pilot Mini MP EA huit trous 0.5 mm FIF",
    "distinguishingAttributes": {
      "Buse produit": "0.5 mm",
      "Forme du jet": "jet large",
      "Alimentation produit": "FIF",
      "Chapeau": "MP EA huit trous",
      "Masse nette de la version": "279 g"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-walther-pilot-pilot-mini-mp-ea-huit-trous-0-5-mm-fif.svg",
    "alt": "Repères techniques : Walther Pilot Pilot Mini MP EA huit trous 0.5 mm FIF",
    "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Walther Pilot Pilot Mini MP EA huit trous 0.5 mm FIF. Consommation constructeur au point documenté : 170 L/min à 2 bar. Pilot Mini : buse 0.5 mm, jet large, alimentation FIF.",
    "verifiedFacts": [
      "Buse produit : 0.5 mm.",
      "Forme du jet : jet large.",
      "Alimentation produit : FIF.",
      "Chapeau : MP EA huit trous.",
      "Masse nette de la version : 279 g.",
      "Consommation publiée dans son unité originale : 170 L/min, jet jet large, tableau de la notice à 2 bar..",
      "Pression dans la source : Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.."
    ],
    "limitations": [
      "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
      "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
      "La consommation concerne l’atomisation du pistolet. Une pompe pneumatique ou un réservoir sous pression alimentant le produit ajoute une demande séparée si le même compresseur l’alimente.",
      "Configuration proposée dans le configurateur du fabricant. Le code de commande complet reste absent ; aucun MPN n’est fabriqué à partir du motif.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Buse produit",
      "value": "0.5 mm",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p15"
      ]
    },
    {
      "label": "Forme du jet",
      "value": "jet large",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p15"
      ]
    },
    {
      "label": "Alimentation produit",
      "value": "FIF",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p15"
      ]
    },
    {
      "label": "Chapeau",
      "value": "MP EA huit trous",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p15"
      ]
    },
    {
      "label": "Masse nette de la version",
      "value": "279 g",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p15"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "170 L/min, jet jet large, tableau de la notice à 2 bar.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p15"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Atomising/input air pressure2 bar, tableau de la notice ; la pression produit demeure distincte.",
      "evidenceIds": [
        "october7-tools-walther-catalog2025-p15"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-walther-catalog2025-p15",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Katalog/BRO_Walther_Pilot_Product_Catalog_2025_26_EN.pdf#page=15",
      "sourceLabel": "Walther Pilot, catalogue produits constructeur2025/26, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 5d303e3323fcdad9eb74e212c5d647bcecfef28fee4a9b759dacc8129a4f8d8f. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-mini-p19",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_Mini.pdf#page=19",
      "sourceLabel": "Walther Pilot, notice primaire pilot-mini, page PDF 19",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8e65009af3aa3603acae1aa033ded041ecc047582efeeafce75ab102cdeb0db0. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-walther-manual-pilot-mini-p15",
      "sourceUrl": "https://walther-pilot.de/fileadmin/media/04_service/Downloads/Bedienungsanleitungen/Handpistolen/Betriebsanleitung_Operating_Manual_Pilot_Mini.pdf#page=15",
      "sourceLabel": "Walther Pilot, notice primaire pilot-mini, page PDF 15",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8e65009af3aa3603acae1aa033ded041ecc047582efeeafce75ab102cdeb0db0. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-walther-catalog2025-p15",
      "october7-tools-walther-manual-pilot-mini-p19",
      "october7-tools-walther-manual-pilot-mini-p15"
    ],
    "airflowLpm": [
      "october7-tools-walther-catalog2025-p15",
      "october7-tools-walther-manual-pilot-mini-p19",
      "october7-tools-walther-manual-pilot-mini-p15"
    ]
  },
  "notes": [
    "Pilot Mini : buse 0.5 mm, jet large, alimentation FIF.",
    "Le tableau de la notice donne une consommation d’atomisation au seul point 2 bar retenu. Les autres pressions et réglages du jet ne sont pas extrapolés.",
    "La valeur est déclarée pour la famille et le chapeau mentionnés ; il ne s’agit pas d’un essai physique CompatAir de chaque buse.",
    "La consommation concerne l’atomisation du pistolet. Une pompe pneumatique ou un réservoir sous pression alimentant le produit ajoute une demande séparée si le même compresseur l’alimente.",
    "Configuration proposée dans le configurateur du fabricant. Le code de commande complet reste absent ; aucun MPN n’est fabriqué à partir du motif.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
