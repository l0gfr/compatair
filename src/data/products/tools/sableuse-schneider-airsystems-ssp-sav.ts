import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "sableuse-schneider-airsystems-ssp-sav",
  "slug": "sableuse-schneider-airsystems-ssp-sav",
  "categoryId": "sableuse",
  "category": "sableuse",
  "label": "Schneider Airsystems SSP-SAV",
  "brand": "Schneider Airsystems",
  "model": "SSP-SAV",
  "mpn": "DGKD030025",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 7
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-strahlpistolen",
    "label": "SSP-SAV",
    "distinguishingAttributes": {
      "Granulat maximal": "0,8 mm",
      "Diamètre de buse": "5 mm",
      "Masse": "0,8 kg",
      "Pression de travail du tableau": "7 bar",
      "Besoin d’air du tableau": "280 L/min"
    }
  },
  "image": {
    "src": "/images/products/sableuse-schneider-airsystems-ssp-sav.svg",
    "alt": "Repères techniques : Schneider Airsystems SSP-SAV",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "La SSP-SAV DGKD030025 est le modèle à longue buse Venturi du tableau, avec une buse de 5 mm et un granulat maximal de 0,8 mm. La fiche publie 280 L/min à une pression de travail de 7 bar. La SSP-Strahlfix DGKD030030 annonce 150 L/min et 6 bar avec le même diamètre nominal et la même limite de grain ; la version staubfrei DGKD030263 ajoute des embouts et un sac de récupération, avec une plage de 6 à 8 bar. Ces valeurs ne constituent pas un test comparatif de rendement. La synthèse du catalogue indique aussi 4,7 L/s et une consommation moyenne de 282 L/min pour SSP-SAV. Cette moyenne n’est pas utilisée comme débit en action ; il faut faire qualifier le régime avant de dimensionner le compresseur.",
    "verifiedFacts": [
      "Granulat maximal : 0,8 mm.",
      "Diamètre de buse : 5 mm.",
      "Masse : 0,8 kg.",
      "Pression de travail du tableau : 7 bar.",
      "Besoin d’air du tableau : 280 L/min.",
      "Consommation publiée dans son unité originale : 280 L/min, Luftbedarf.",
      "Pression dans la source : 7 bar, Arbeitsdruck."
    ],
    "limitations": [
      "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
      "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
      "La synthèse p.207 donne 4,7 L/s et une moyenne de 282 L/min ; la fiche p.263 donne 280 L/min. La moyenne et son arrondi ne deviennent pas un point d’essai en charge.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément.",
      "Conserver variable-volume et insufficient_data tant que les conditions déterminantes ne sont pas établies.",
      "Ne pas interpoler un débit à une autre pression ni choisir arbitrairement entre 280 et 282.",
      "Le catalogue préconise un air aussi sec que possible et un séparateur d’eau pour réduire le risque de colmatage ; cela ne démontre pas une classe de pureté mesurée.",
      "Ne pas transformer l’intitulé staubfrei en garantie d’absence d’exposition ou de besoin de protection."
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
      "value": "0,8 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "7 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "280 L/min",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "280 L/min, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p263"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "7 bar, Arbeitsdruck",
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
    "buse 5 mm, buse Venturi ; granulat maximal 0,8 mm ; diamètre de buse 5 mm.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "La synthèse p.207 donne 4,7 L/s et une moyenne de 282 L/min ; la fiche p.263 donne 280 L/min. La moyenne et son arrondi ne deviennent pas un point d’essai en charge.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
