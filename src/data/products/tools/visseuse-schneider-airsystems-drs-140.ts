import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-schneider-airsystems-drs-140",
  "slug": "visseuse-schneider-airsystems-drs-140",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Schneider Airsystems DRS 140",
  "brand": "Schneider Airsystems",
  "model": "DRS 140",
  "mpn": "DGKD322679",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 6.3
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-drehschrauber",
    "label": "DRS 140",
    "distinguishingAttributes": {
      "Emmanchement hexagonal": "1/4\"",
      "Couple maximal publié": "100 Nm",
      "Vitesse publiée": "11.500 min⁻¹",
      "Masse": "1 kg",
      "Pression de travail du tableau": "6,3 bar"
    }
  },
  "image": {
    "src": "/images/products/visseuse-schneider-airsystems-drs-140.svg",
    "alt": "Repères techniques : Schneider Airsystems DRS 140",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems DRS 140. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. forme pistolet, emmanchement 1/4\" ; emmanchement hexagonal 1/4\" ; couple maximal publié 100 Nm.",
    "verifiedFacts": [
      "Emmanchement hexagonal : 1/4\".",
      "Couple maximal publié : 100 Nm.",
      "Vitesse publiée : 11.500 min⁻¹.",
      "Masse : 1 kg.",
      "Pression de travail du tableau : 6,3 bar.",
      "Besoin d’air du tableau : 7 L/s.",
      "Consommation publiée dans son unité originale : 7 L/s, Luftbedarf.",
      "Pression dans la source : 6,3 bar, Arbeitsdruck."
    ],
    "limitations": [
      "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
      "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Emmanchement hexagonal",
      "value": "1/4\"",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    },
    {
      "label": "Couple maximal publié",
      "value": "100 Nm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    },
    {
      "label": "Vitesse publiée",
      "value": "11.500 min⁻¹",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    },
    {
      "label": "Masse",
      "value": "1 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "6,3 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "7 L/s",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "7 L/s, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6,3 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p224"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p224",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=224",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 224",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p224"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p224"
    ]
  },
  "notes": [
    "forme pistolet, emmanchement 1/4\" ; emmanchement hexagonal 1/4\" ; couple maximal publié 100 Nm.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
