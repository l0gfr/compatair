import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-cartouche-schneider-airsystems-ktp-310",
  "slug": "pistolet-cartouche-schneider-airsystems-ktp-310",
  "categoryId": "pistolet-cartouche",
  "category": "pistolet-cartouche",
  "label": "Schneider Airsystems KTP 310",
  "brand": "Schneider Airsystems",
  "model": "KTP 310",
  "mpn": "DGKD040137",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "typical": 8
  },
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-kartuschenpistolen",
    "label": "KTP 310",
    "distinguishingAttributes": {
      "Longueur": "318 mm",
      "Masse": "1,04 kg",
      "Contenant et architecture": "cartouches plastique 310 mL, poignée centrale",
      "Pression de travail du tableau": "8 bar",
      "Besoin d’air du tableau": "100 L/min"
    }
  },
  "image": {
    "src": "/images/products/pistolet-cartouche-schneider-airsystems-ktp-310.svg",
    "alt": "Repères techniques : Schneider Airsystems KTP 310",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems KTP 310. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. cartouches plastique 310 mL, poignée centrale ; longueur 318 mm ; masse 1,04 kg.",
    "verifiedFacts": [
      "Longueur : 318 mm.",
      "Masse : 1,04 kg.",
      "Contenant et architecture : cartouches plastique 310 mL, poignée centrale.",
      "Pression de travail du tableau : 8 bar.",
      "Besoin d’air du tableau : 100 L/min.",
      "Consommation publiée dans son unité originale : 100 L/min, Luftbedarf.",
      "Pression dans la source : 8 bar, Arbeitsdruck."
    ],
    "limitations": [
      "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
      "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
      "Le volume total demandé dépend de la durée, de la commande ou du procédé ; la consommation nominale seule ne qualifie pas un usage.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Longueur",
      "value": "318 mm",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p256"
      ]
    },
    {
      "label": "Masse",
      "value": "1,04 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p256"
      ]
    },
    {
      "label": "Contenant et architecture",
      "value": "cartouches plastique 310 mL, poignée centrale",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p256"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "8 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p256"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "100 L/min",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p256"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "100 L/min, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p256"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "8 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p256"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p256",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=256",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 256",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p256"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p256"
    ]
  },
  "notes": [
    "cartouches plastique 310 mL, poignée centrale ; longueur 318 mm ; masse 1,04 kg.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "Le volume total demandé dépend de la durée, de la commande ou du procédé ; la consommation nominale seule ne qualifie pas un usage.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
