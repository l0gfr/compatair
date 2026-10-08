import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-nettoyage-schneider-airsystems-spp-sm",
  "slug": "pistolet-nettoyage-schneider-airsystems-spp-sm",
  "categoryId": "pistolet-nettoyage",
  "category": "pistolet-nettoyage",
  "label": "Schneider Airsystems SPP-SM",
  "brand": "Schneider Airsystems",
  "model": "SPP-SM",
  "mpn": "DGKD040008",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "schneider-airsystems-spruhpistole",
    "label": "SPP-SM",
    "distinguishingAttributes": {
      "Volume du godet": "1 L",
      "Masse": "0,64 kg",
      "Configuration": "godet à succion de 1 L, corps et godet aluminium",
      "Pression de travail du tableau": "3-6 bar",
      "Besoin d’air du tableau": "120-220 L/min"
    }
  },
  "image": {
    "src": "/images/products/pistolet-nettoyage-schneider-airsystems-spp-sm.svg",
    "alt": "Repères techniques : Schneider Airsystems SPP-SM",
    "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Schneider Airsystems SPP-SM. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. godet à succion de 1 L, corps et godet aluminium ; volume du godet 1 L ; masse 0,64 kg.",
    "verifiedFacts": [
      "Volume du godet : 1 L.",
      "Masse : 0,64 kg.",
      "Configuration : godet à succion de 1 L, corps et godet aluminium.",
      "Pression de travail du tableau : 3-6 bar.",
      "Besoin d’air du tableau : 120-220 L/min.",
      "Consommation publiée dans son unité originale : 120-220 L/min, Luftbedarf.",
      "Pression dans la source : 3-6 bar, Arbeitsdruck."
    ],
    "limitations": [
      "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
      "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
      "La plage de pression est conservée telle que publiée ; aucun besoin d’air à sa borne supérieure ou inférieure n’est inventé.",
      "La plage de besoin d’air est conservée telle que publiée ; aucun point intermédiaire ou extrême ne reçoit une pression supposée.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Volume du godet",
      "value": "1 L",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p251"
      ]
    },
    {
      "label": "Masse",
      "value": "0,64 kg",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p251"
      ]
    },
    {
      "label": "Configuration",
      "value": "godet à succion de 1 L, corps et godet aluminium",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p251"
      ]
    },
    {
      "label": "Pression de travail du tableau",
      "value": "3-6 bar",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p251"
      ]
    },
    {
      "label": "Besoin d’air du tableau",
      "value": "120-220 L/min",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p251"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "120-220 L/min, Luftbedarf",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p251"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "3-6 bar, Arbeitsdruck",
      "evidenceIds": [
        "october8-tools-schneider-catalog-2025-p251"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october8-tools-schneider-catalog-2025-p251",
      "sourceUrl": "https://www.schneider-airsystems.de/content/dam/brands/schneider/documents/catalogs-brochures/Schneider%20airsystems-Gesamtkatalog-2025-DE-SCREEN.pdf#page=251",
      "sourceLabel": "Schneider Airsystems, catalogue constructeur 2025, page PDF 251",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 8a4c8bb35268578e1a95b9e81783a27d8a6ddc9339883f91bcf0e63aedcdf5b2. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october8-tools-schneider-catalog-2025-p251"
    ],
    "demandExplanation": [
      "october8-tools-schneider-catalog-2025-p251"
    ]
  },
  "notes": [
    "godet à succion de 1 L, corps et godet aluminium ; volume du godet 1 L ; masse 0,64 kg.",
    "Catalogue constructeur allemand 2025 reçu intégralement le 8 octobre 2026 ; aucune disponibilité commerciale ou essai physique CompatAir ne sont affirmés.",
    "Les états de référence du volume d’air et le régime de mesure ne sont pas explicitement qualifiés dans cette fiche. Verdict de compatibilité insuffisant tant que le besoin en action n’est pas établi.",
    "La plage de pression est conservée telle que publiée ; aucun besoin d’air à sa borne supérieure ou inférieure n’est inventé.",
    "La plage de besoin d’air est conservée telle que publiée ; aucun point intermédiaire ou extrême ne reçoit une pression supposée.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
