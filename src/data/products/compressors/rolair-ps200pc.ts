import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-ps200pc",
  "slug": "rolair-ps200pc",
  "brand": "Rolair",
  "model": "PS200PC",
  "variant": {
    "familyId": "rolair-ps200pc",
    "label": "PS200PC Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "PS200PC Hand Carry Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 13.79,
  "maxPressureBasis": "explicit-maximum-working-pressure",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 113.267
    }
  ],
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-ps200pc.svg",
    "alt": "Repères techniques : Rolair PS200PC",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/ps200pc",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "PS200PC Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "13,79 bar",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "113,267 L/min (4 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "6 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "1.3 HP",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "44 lb.",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "74 dBA",
      "evidenceIds": [
        "october8-rolair-portable-ps200pc-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair PS200PC. 113,267 L/min déclarés à 6,205 bar. Configuration publiée : PS200PC Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 113,267 L/min déclarés à 6,205 bar.",
      "Maximum de travail publié : 13,79 bar."
    ],
    "limitations": [
      "La cuve est publiée en gallons sans identification US ou impériale ; aucun volume en litres n’est calculé.",
      "CFM Delivered désigne un débit effectivement livré à la pression indiquée ; les conditions atmosphériques et ISO1217 ne sont pas déclarées pour cette fiche.",
      "La pression du point de débit ne qualifie pas toute la plage de régulation ; une pression de coupure plus élevée ne donne aucun FAD supplémentaire.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Fréquence électrique de cette configuration non documentée.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october8-rolair-portable-ps200pc-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/ps200pc",
      "sourceLabel": "Rolair, PS200PC Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 1eee45bf1871f8a70337f419a6e450b2cf0ebd6acca2ef8a37e2ea36ccf1f1d7 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october8-rolair-portable-ps200pc-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-ps200pc-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-ps200pc-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-ps200pc-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "oilType": [
      "october8-rolair-portable-ps200pc-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
