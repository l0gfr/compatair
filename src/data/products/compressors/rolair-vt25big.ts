import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-vt25big",
  "slug": "rolair-vt25big",
  "brand": "Rolair",
  "model": "VT25BIG",
  "variant": {
    "familyId": "rolair-vt25big",
    "label": "VT25BIG Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "VT25BIG Hand Carry Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "20 L",
      "fréquence": "60 Hz"
    }
  },
  "tankLiters": 20,
  "maxPressureBar": 6.205,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 184.059
    }
  ],
  "voltage": "115 V",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-vt25big.svg",
    "alt": "Repères techniques : Rolair VT25BIG",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/vt25big",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "VT25BIG Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "184,059 L/min (6,5 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "20 L",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-spec-p2"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "5.3 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "2.5 HP",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "3400 RPM",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "9.3 CFM",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "108 lb.",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "86 dBA",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-vt25big-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair VT25BIG. 184,059 L/min déclarés à 6,205 bar. Configuration publiée : VT25BIG Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 184,059 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar.",
      "Cuve documentée : 20 L."
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
      "id": "october8-rolair-portable-vt25big-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/vt25big",
      "sourceLabel": "Rolair, VT25BIG Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 051cb4aef3fa23092cd3b803eff43b56941d77bf2af6fdc904a39089f39ee790 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-vt25big-spec-p2",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-01/VT25BIG%20Showroom%20Sheet_1.pdf#page=2",
      "sourceLabel": "Rolair, fiche bilingue VT25BIG, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 23fc35b0e013234b0bea26f473fe33683099e2a360d08aedf6f0dec73d2b4e83 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-vt25big-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-vt25big-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-vt25big-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-vt25big-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "tankLiters": [
      "october8-rolair-portable-vt25big-spec-p2"
    ],
    "oilType": [
      "october8-rolair-portable-vt25big-p1"
    ],
    "voltage": [
      "october8-rolair-portable-vt25big-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
