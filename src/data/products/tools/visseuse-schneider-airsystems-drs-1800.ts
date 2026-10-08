import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "visseuse-schneider-airsystems-drs-1800",
  "slug": "visseuse-schneider-airsystems-drs-1800",
  "categoryId": "visseuse",
  "category": "visseuse",
  "label": "Schneider Airsystems DRS 1800",
  "brand": "Schneider Airsystems",
  "model": "DRS 1800",
  "mpn": "DGKD322676",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 6
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-drehschrauber",
    "label": "DRS 1800",
    "distinguishingAttributes": {
      "Emmanchement hexagonal": "1/4\"",
      "Couple maximal publié": "1,6 Nm",
      "Vitesse publiée": "1.800 min⁻¹",
      "Masse": "0,5 kg",
      "Pression de travail du tableau": "6 bar"
    }
  },
  "image": {
    "src": "/images/products/visseuse-schneider-airsystems-drs-1800.svg",
    "alt": "Repères techniques : Schneider Airsystems DRS 1800",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems DRS 1800. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. forme droite, emmanchement 1/4\" ; emmanchement hexagonal 1/4\" ; couple maximal publié 1,6 Nm.",
    "verifiedFacts": [
      "Emmanchement hexagonal : 1/4\".",
      "Couple maximal publié : 1,6 Nm.",
      "Vitesse publiée : 1.800 min⁻¹.",
      "Masse : 0,5 kg.",
      "Pression de travail du tableau : 6 bar.",
      "Besoin d’air du tableau : 4,6 L/s.",
      "Consommation publiée dans son unité originale : 4,6 L/s, Luftbedarf.",
      "Pression dans la source : 6 bar, Arbeitsdruck."
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
        "october8-tools-schneider-catalog-2025-p223"
      ]
    },
    {
      "label": "Couple maximal publié",
      "value": "1,6 Nm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p223"
      ]
    },
    {
      "label": "Vitesse publiée",
      "value": "1.800 min⁻¹",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p223"
      ]
    },
    {
      "label": "Masse",
      "value": "0,5 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p223"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "6 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p223"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "4,6 L/s",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p223"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "4,6 L/s, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p223"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p223"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p223",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=223",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 223",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p223"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p223"
    ]
  },
  "notes": [
    "forme droite, emmanchement 1/4\" ; emmanchement hexagonal 1/4\" ; couple maximal publié 1,6 Nm.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
