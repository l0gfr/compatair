import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-schneider-airsystems-wsl-125",
  "slug": "meuleuse-schneider-airsystems-wsl-125",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Schneider Airsystems WSL 125",
  "brand": "Schneider Airsystems",
  "model": "WSL 125",
  "mpn": "DGKD322770",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 6.3
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-winkelschleifer",
    "label": "WSL 125",
    "distinguishingAttributes": {
      "Vitesse publiée": "12.000 min⁻¹",
      "Masse": "2,0 kg",
      "Longueur": "22,9 cm",
      "Configuration": "disques jusqu’à 125 mm",
      "Pression de travail du tableau": "6,3 bar"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-schneider-airsystems-wsl-125.svg",
    "alt": "Repères techniques : Schneider Airsystems WSL 125",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems WSL 125. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. disques jusqu’à 125 mm ; vitesse publiée 12.000 min⁻¹ ; masse 2,0 kg.",
    "verifiedFacts": [
      "Vitesse publiée : 12.000 min⁻¹.",
      "Masse : 2,0 kg.",
      "Longueur : 22,9 cm.",
      "Configuration : disques jusqu’à 125 mm.",
      "Pression de travail du tableau : 6,3 bar.",
      "Besoin d’air du tableau : 11 L/s.",
      "Consommation publiée dans son unité originale : 11 L/s, Luftbedarf.",
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
      "label": "Vitesse publiée",
      "value": "12.000 min⁻¹",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    },
    {
      "label": "Masse",
      "value": "2,0 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    },
    {
      "label": "Longueur",
      "value": "22,9 cm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    },
    {
      "label": "Configuration",
      "value": "disques jusqu’à 125 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "6,3 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "11 L/s",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "11 L/s, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "6,3 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p230"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p230",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=230",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 230",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p230"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p230"
    ]
  },
  "notes": [
    "disques jusqu’à 125 mm ; vitesse publiée 12.000 min⁻¹ ; masse 2,0 kg.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
