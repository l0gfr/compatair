import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-6820k17d",
  "slug": "rolair-6820k17d",
  "brand": "Rolair",
  "model": "6820K17D",
  "variant": {
    "familyId": "rolair-6820k17d",
    "label": "6820K17D Wheeled Electric Air Compressors",
    "distinguishingAttributes": {
      "équipement": "6820K17D Wheeled Electric Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "Non qualifiée en litres",
      "fréquence": "60 Hz"
    }
  },
  "maxPressureBar": 6.205,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 249.188
    }
  ],
  "voltage": "115/230 V",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-6820k17d.svg",
    "alt": "Repères techniques : Rolair 6820K17D",
    "sourceUrl": "https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/6820k17d",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "6820K17D Wheeled Electric Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "249,188 L/min (8,8 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "9 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "2 HP",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1740 RPM",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "12.5 CFM",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "185 lb.",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "Unavailable",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-6820k17d-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair 6820K17D. 249,188 L/min déclarés à 6,205 bar. Configuration publiée : 6820K17D Wheeled Electric Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 249,188 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar."
    ],
    "limitations": [
      "La cuve est publiée en gallons sans identification US ou impériale ; aucun volume en litres n’est calculé.",
      "CFM Delivered désigne un débit effectivement livré à la pression indiquée ; les conditions atmosphériques et ISO1217 ne sont pas déclarées pour cette fiche.",
      "La pression du point de débit ne qualifie pas toute la plage de régulation ; une pression de coupure plus élevée ne donne aucun FAD supplémentaire.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-rolair-portable-6820k17d-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/6820k17d",
      "sourceLabel": "Rolair, 6820K17D Wheeled Electric Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 214cc5aa1e30bb4846593b6c7b4626a670b85f0fe2120c0ae2968ed0125c3e4d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-rolair-faq-p1",
      "sourceUrl": "https://www.rolair.com/service-support/frequently-asked-questions",
      "sourceLabel": "Rolair, FAQ officielle : débit livré et déplacement, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 59f3fcbcfb574f923181d67887765b0745cabc25c0d0fad639ea42927fe2ade4 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST SP811 B.8, facteurs de conversion, référence institutionnelle",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 d27889a3ac6ba50e0bfacaf4e011378054cfc515d050082f4c8d0760f2c75e59 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-6820k17d-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-6820k17d-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-6820k17d-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-6820k17d-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "oilType": [
      "october8-rolair-portable-6820k17d-p1"
    ],
    "voltage": [
      "october8-rolair-portable-6820k17d-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
