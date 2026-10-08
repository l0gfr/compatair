import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "scie-schneider-airsystems-ks-10",
  "slug": "scie-schneider-airsystems-ks-10",
  "categoryId": "scie",
  "category": "scie",
  "label": "Schneider Airsystems KS 10",
  "brand": "Schneider Airsystems",
  "model": "KS 10",
  "mpn": "DGKD322322",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 6.3
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-karosseriesage",
    "label": "KS 10",
    "distinguishingAttributes": {
      "Cadence publiée": "9.500 min⁻¹",
      "Course": "10 mm",
      "Épaisseur de coupe publiée": "3,1 mm",
      "Masse": "0,8 kg",
      "Pression de travail du tableau": "6,3 bar"
    }
  },
  "image": {
    "src": "/images/products/scie-schneider-airsystems-ks-10.svg",
    "alt": "Repères techniques : Schneider Airsystems KS 10",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems KS 10. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. scie de carrosserie, course 10 mm ; cadence publiée 9.500 min⁻¹ ; course 10 mm.",
    "verifiedFacts": [
      "Cadence publiée : 9.500 min⁻¹.",
      "Course : 10 mm.",
      "Épaisseur de coupe publiée : 3,1 mm.",
      "Masse : 0,8 kg.",
      "Pression de travail du tableau : 6,3 bar.",
      "Besoin d’air du tableau : 4 L/s.",
      "Consommation publiée dans son unité originale : 4 L/s, Luftbedarf.",
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
      "label": "Cadence publiée",
      "value": "9.500 min⁻¹",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    },
    {
      "label": "Course",
      "value": "10 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    },
    {
      "label": "Épaisseur de coupe publiée",
      "value": "3,1 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    },
    {
      "label": "Masse",
      "value": "0,8 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "6,3 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "4 L/s",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "4 L/s, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6,3 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p232"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p232",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=232",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 232",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p232"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p232"
    ]
  },
  "notes": [
    "scie de carrosserie, course 10 mm ; cadence publiée 9.500 min⁻¹ ; course 10 mm.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
