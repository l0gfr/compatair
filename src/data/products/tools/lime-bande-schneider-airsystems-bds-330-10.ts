import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "lime-bande-schneider-airsystems-bds-330-10",
  "slug": "lime-bande-schneider-airsystems-bds-330-10",
  "categoryId": "lime-bande",
  "category": "lime-bande",
  "label": "Schneider Airsystems BDS 330-10",
  "brand": "Schneider Airsystems",
  "model": "BDS 330-10",
  "mpn": "DGKD322740",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 6.3
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-bandschleifer",
    "label": "BDS 330-10",
    "distinguishingAttributes": {
      "Bande": "330 × 10 mm",
      "Vitesse publiée": "20.000 min⁻¹",
      "Masse": "0,85 kg",
      "Pression de travail du tableau": "6,3 bar",
      "Besoin d’air du tableau": "6,7 L/s"
    }
  },
  "image": {
    "src": "/images/products/lime-bande-schneider-airsystems-bds-330-10.svg",
    "alt": "Repères techniques : Schneider Airsystems BDS 330-10",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems BDS 330-10. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. bande étroite de 10 mm, longueur 330 mm ; bande 330 × 10 mm ; vitesse publiée 20.000 min⁻¹.",
    "verifiedFacts": [
      "Bande : 330 × 10 mm.",
      "Vitesse publiée : 20.000 min⁻¹.",
      "Masse : 0,85 kg.",
      "Pression de travail du tableau : 6,3 bar.",
      "Besoin d’air du tableau : 6,7 L/s.",
      "Consommation publiée dans son unité originale : 6,7 L/s, Luftbedarf.",
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
      "label": "Bande",
      "value": "330 × 10 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p231"
      ]
    },
    {
      "label": "Vitesse publiée",
      "value": "20.000 min⁻¹",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p231"
      ]
    },
    {
      "label": "Masse",
      "value": "0,85 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p231"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "6,3 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p231"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "6,7 L/s",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p231"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "6,7 L/s, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p231"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6,3 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p231"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p231",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=231",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 231",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p231"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p231"
    ]
  },
  "notes": [
    "bande étroite de 10 mm, longueur 330 mm ; bande 330 × 10 mm ; vitesse publiée 20.000 min⁻¹.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
