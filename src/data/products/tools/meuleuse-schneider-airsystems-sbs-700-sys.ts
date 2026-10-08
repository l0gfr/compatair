import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-schneider-airsystems-sbs-700-sys",
  "slug": "meuleuse-schneider-airsystems-sbs-700-sys",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Schneider Airsystems SBS 700 SYS",
  "brand": "Schneider Airsystems",
  "model": "SBS 700 SYS",
  "mpn": "DGKD322659",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-stabschleifer",
    "label": "SBS 700 SYS",
    "distinguishingAttributes": {
      "Vitesse publiée": "70.000 min⁻¹",
      "Masse": "0,23 kg",
      "Longueur": "13,0 cm",
      "Configuration": "mini-meuleuse, pinces 2,3 et 3 mm",
      "Pression de travail du tableau": "6,3 bar"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-schneider-airsystems-sbs-700-sys.svg",
    "alt": "Repères techniques : Schneider Airsystems SBS 700 SYS",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems SBS 700 SYS. Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution. mini-meuleuse, pinces 2,3 et 3 mm ; vitesse publiée 70.000 min⁻¹ ; masse 0,23 kg.",
    "verifiedFacts": [
      "Vitesse publiée : 70.000 min⁻¹.",
      "Masse : 0,23 kg.",
      "Longueur : 13,0 cm.",
      "Configuration : mini-meuleuse, pinces 2,3 et 3 mm.",
      "Pression de travail du tableau : 6,3 bar.",
      "Besoin d’air du tableau : 2,8 L/s.",
      "Consommation publiée dans son unité originale : 2,8 L/s, Luftbedarf.",
      "Pression dans la source : 6,3 bar, Arbeitsdruck."
    ],
    "limitations": [
      "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
      "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
      "Des valeurs ou codes divergent dans le même catalogue ; les deux passages sont conservés et aucune résolution silencieuse n’est effectuée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse publiée",
      "value": "70.000 min⁻¹",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    },
    {
      "label": "Masse",
      "value": "0,23 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    },
    {
      "label": "Longueur",
      "value": "13,0 cm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    },
    {
      "label": "Configuration",
      "value": "mini-meuleuse, pinces 2,3 et 3 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "6,3 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "2,8 L/s",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "2,8 L/s, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6,3 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p228"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p228",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=228",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 228",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october8-tools-schneider-catalog-2025-p206",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=206",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 206",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p228",
      "october8-tools-schneider-catalog-2025-p206"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p228",
      "october8-tools-schneider-catalog-2025-p206"
    ]
  },
  "notes": [
    "mini-meuleuse, pinces 2,3 et 3 mm ; vitesse publiée 70.000 min⁻¹ ; masse 0,23 kg.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "Des valeurs ou codes divergent dans le même catalogue ; les deux passages sont conservés et aucune résolution silencieuse n’est effectuée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
