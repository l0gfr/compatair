import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-gd5000pv5h",
  "slug": "rolair-gd5000pv5h",
  "brand": "Rolair",
  "model": "GD5000PV5H",
  "variant": {
    "familyId": "rolair-gd5000pv5h",
    "label": "GD5000PV5H Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "GD5000PV5H Hand Carry Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "18,9 L"
    }
  },
  "tankLiters": 18.9,
  "maxPressureBar": 6.205,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 130.257
    }
  ],
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-gd5000pv5h.svg",
    "alt": "Repères techniques : Rolair GD5000PV5H",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/gd5000pv5h",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "GD5000PV5H Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "130,257 L/min (4,6 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "18,9 L",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-spec-p2"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "5 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "163 cc (5.5 HP)",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "8.3 CFM",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "90 lb.",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "Unavailable",
      "evidenceIds": [
        "october8-rolair-portable-gd5000pv5h-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair GD5000PV5H. 130,257 L/min déclarés à 6,205 bar. Configuration publiée : GD5000PV5H Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 130,257 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar.",
      "Cuve documentée : 18,9 L."
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
      "id": "october8-rolair-portable-gd5000pv5h-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/gd5000pv5h",
      "sourceLabel": "Rolair, GD5000PV5H Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 6b50930de84ddf00dd487a7dff0a6cf6ad2ff260bd7673799726fb940d13d729 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-gd5000pv5h-spec-p2",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2026-10/PBN0487%20GD5000PV5H%20Showroom%20Sheet%20%28PBH%29.pdf#page=2",
      "sourceLabel": "Rolair, fiche bilingue GD5000PV5H, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 12ed09c445906dc4ba9d030fc1e137901ee33acbff5e9746f3bbd7a7cddc0f4a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-gd5000pv5h-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-gd5000pv5h-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-gd5000pv5h-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-gd5000pv5h-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "tankLiters": [
      "october8-rolair-portable-gd5000pv5h-spec-p2"
    ],
    "oilType": [
      "october8-rolair-portable-gd5000pv5h-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
