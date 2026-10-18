import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "sableuse-schneider-airsystems-ssp-strahlfix-staubfrei",
  "slug": "sableuse-schneider-airsystems-ssp-strahlfix-staubfrei",
  "categoryId": "sableuse",
  "category": "sableuse",
  "label": "Schneider Airsystems SSP-Strahlfix staubfrei",
  "brand": "Schneider Airsystems",
  "model": "SSP-Strahlfix staubfrei",
  "mpn": "DGKD030263",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-strahlpistolen",
    "label": "SSP-Strahlfix staubfrei",
    "distinguishingAttributes": {
      "Granulat maximal": "0,8 mm",
      "Diamètre de buse": "5 mm",
      "Masse": "0,9 kg",
      "Pression de travail du tableau": "6-8 bar",
      "Besoin d’air du tableau": "150 L/min"
    }
  },
  "image": {
    "src": "/images/products/sableuse-schneider-airsystems-ssp-strahlfix-staubfrei.svg",
    "alt": "Repères techniques : Schneider Airsystems SSP-Strahlfix staubfrei",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "SSP Strahlfix staubfrei DGKD030263 : pistolet de sablage avec sac de collecte et embouts, buse de 5 mm, grain maximal publié de 0,8 mm et masse de 0,9 kg. Le catalogue annonce 150 L/min pour 6 à 8 bar ; le SSP-SAV voisin publie 280 L/min à 7 bar avec un montage Venturi différent.",
    "verifiedFacts": [
      "Granulat maximal : 0,8 mm.",
      "Diamètre de buse : 5 mm.",
      "Masse : 0,9 kg.",
      "Pression de travail du tableau : 6-8 bar.",
      "Besoin d’air du tableau : 150 L/min.",
      "Consommation publiée dans son unité originale : 150 L/min, Luftbedarf.",
      "Pression dans la source : 6-8 bar, Arbeitsdruck."
    ],
    "limitations": [
      "Le régime et les points de mesure ne permettent pas d’en déduire un gain d’efficacité ou une consommation continue garantie.",
      "La collecte et la réutilisation des granulats ne garantissent pas l’absence de poussières ; les protections et l’air sec prescrits restent nécessaires."
    ]
  },
  "specifications": [
    {
      "label": "Granulat maximal",
      "value": "0,8 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Diamètre de buse",
      "value": "5 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Masse",
      "value": "0,9 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "6-8 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "150 L/min",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "150 L/min, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6-8 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p263",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=263",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 263",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p263"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p263"
    ]
  },
  "notes": [
    "buse 5 mm, sac de récupération et embouts ; granulat maximal 0,8 mm ; diamètre de buse 5 mm.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "La plage de pression est conservée telle que publiée ; aucun besoin d’air à sa borne supérieure ou inférieure n’est inventé.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
