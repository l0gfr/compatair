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
    "overview": "La SPP-SM DGKD040008 est une pulvérisatrice de liquides à godet à succion en aluminium de 1 L, de masse 0,64 kg. Le tableau publie une plage de travail de 3 à 6 bar et un besoin de 120 à 220 L/min, sans associer chaque débit à une pression. La synthèse donne séparément 2 L/s et une consommation moyenne de 120 L/min. Retenir uniquement 120 L/min pour annoncer qu’un petit compresseur suffit serait donc injustifié. Contrairement à la SSP-SAV, qui projette un abrasif avec une buse Venturi, cette fiche porte sur l’application de liquides ; les besoins de traitement et la compatibilité du produit pulvérisé doivent être vérifiés pour cet usage.",
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
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément.",
      "Pas de consommation qualifiée en action ni de correspondance pression-débit établie par ces pages.",
      "Conserver variable-volume et insufficient_data ; ne pas entrer 220 L/min comme consommation maximale mesurée sans justification.",
      "Les usages de désinfection ou de produits phytosanitaires cités par le fabricant ne valent pas validation de chaque substance ni de son usage réglementaire.",
      "Aucune disponibilité actuelle ou mesure physique CompatAir n’est affirmée."
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
