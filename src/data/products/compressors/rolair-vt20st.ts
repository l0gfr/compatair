import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-vt20st",
  "slug": "rolair-vt20st",
  "brand": "Rolair",
  "model": "VT20ST",
  "variant": {
    "familyId": "rolair-vt20st",
    "label": "VT20ST Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "VT20ST Hand Carry Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "16 L",
      "fréquence": "60 Hz"
    }
  },
  "tankLiters": 16,
  "maxPressureBar": 6.205,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 118.931
    }
  ],
  "voltage": "115 V",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-vt20st.svg",
    "alt": "Repères techniques : Rolair VT20ST",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/vt20st",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "VT20ST Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "118,931 L/min (4,2 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "16 L",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-spec-p2"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "4.2 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "2 HP",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1700 RPM",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "5.5 CFM",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "68 lb.",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "74 dBA",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-vt20st-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair VT20ST. 118,931 L/min déclarés à 6,205 bar. Configuration publiée : VT20ST Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 118,931 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar.",
      "Cuve documentée : 16 L."
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
      "id": "october8-rolair-portable-vt20st-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/vt20st",
      "sourceLabel": "Rolair, VT20ST Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 4ed0da3af54cd212a0761a5ceee34b11a87cb474fd92f12a1c42667e1f74ae0e de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-vt20st-spec-p2",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-01/VT20ST%20Showroom%20Sheet.pdf#page=2",
      "sourceLabel": "Rolair, fiche bilingue VT20ST, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 6ed6b4bceb137d3d8656dceff82284e6b658eb8ec5c1b2e436af531865f10158 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-vt20st-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-vt20st-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-vt20st-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-vt20st-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "tankLiters": [
      "october8-rolair-portable-vt20st-spec-p2"
    ],
    "oilType": [
      "october8-rolair-portable-vt20st-p1"
    ],
    "voltage": [
      "october8-rolair-portable-vt20st-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
