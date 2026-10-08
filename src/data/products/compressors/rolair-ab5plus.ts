import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-ab5plus",
  "slug": "rolair-ab5plus",
  "brand": "Rolair",
  "model": "AB5PLUS",
  "variant": {
    "familyId": "rolair-ab5plus",
    "label": "AB5PLUS Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "AB5PLUS Hand Carry Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "3,8 L",
      "fréquence": "60 Hz"
    }
  },
  "tankLiters": 3.8,
  "maxPressureBar": 6.205,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 28.317
    }
  ],
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-ab5plus.svg",
    "alt": "Repères techniques : Rolair AB5PLUS",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/ab5plus",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "AB5PLUS Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "28,317 L/min (1 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "3,8 L",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-spec-p2"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "1 Gallon",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "0.5 HP",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    },
    {
      "label": "Alimentation native publiée, tension à confirmer",
      "value": "114 Volt 60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1700",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "25 lb.",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "59",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-ab5plus-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair AB5PLUS. 28,317 L/min déclarés à 6,205 bar. Configuration publiée : AB5PLUS Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 28,317 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar.",
      "Cuve documentée : 3,8 L."
    ],
    "limitations": [
      "CFM Delivered désigne un débit effectivement livré à la pression indiquée ; les conditions atmosphériques et ISO1217 ne sont pas déclarées pour cette fiche.",
      "La pression du point de débit ne qualifie pas toute la plage de régulation ; une pression de coupure plus élevée ne donne aucun FAD supplémentaire.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-rolair-portable-ab5plus-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/ab5plus",
      "sourceLabel": "Rolair, AB5PLUS Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 83718c3e18e94b01236a4405f2ea604ffa1ee8d71501de3990398f9962e98cd5 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
    },
    {
      "id": "october8-rolair-portable-ab5plus-spec-p2",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/PBN0451%20AB5PLUS%20Showroom%20Sheet.pdf#page=2",
      "sourceLabel": "Rolair, fiche bilingue AB5PLUS, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 936515e4132153ada20a4626f86b815434194ee7ccf4698262df90e76e702ff8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-ab5plus-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-ab5plus-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-ab5plus-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-ab5plus-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "tankLiters": [
      "october8-rolair-portable-ab5plus-spec-p2"
    ],
    "oilType": [
      "october8-rolair-portable-ab5plus-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
