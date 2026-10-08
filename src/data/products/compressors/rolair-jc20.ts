import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-jc20",
  "slug": "rolair-jc20",
  "brand": "Rolair",
  "model": "JC20",
  "variant": {
    "familyId": "rolair-jc20",
    "label": "JC20 Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "JC20 Hand Carry Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "11 L",
      "fréquence": "60 Hz"
    }
  },
  "tankLiters": 11,
  "maxPressureBar": 6.205,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 127.426
    }
  ],
  "voltage": "115 V",
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-jc20.svg",
    "alt": "Repères techniques : Rolair JC20",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/jc20",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "JC20 Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "127,426 L/min (4,5 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "11 L",
      "evidenceIds": [
        "october8-rolair-portable-jc20-spec-p2"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "3 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "2 HP",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1700",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "75 lb.",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "70 dBA",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-jc20-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair JC20. 127,426 L/min déclarés à 6,205 bar. Configuration publiée : JC20 Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 127,426 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar.",
      "Cuve documentée : 11 L."
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
      "id": "october8-rolair-portable-jc20-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/jc20",
      "sourceLabel": "Rolair, JC20 Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 fe75a8a2af1bb7f8cb9f91419cd1e4cdac215d6eb72f39d619437fc3d5961380 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-jc20-spec-p2",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/JC20%20Showroom%20Sheet_2.pdf#page=2",
      "sourceLabel": "Rolair, fiche bilingue JC20, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 2ee037bec05e13d2822f03d8dab5a14595dcb0fa7274ad32f67233e6e7fc04d6 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-jc20-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-jc20-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-jc20-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-jc20-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "tankLiters": [
      "october8-rolair-portable-jc20-spec-p2"
    ],
    "oilType": [
      "october8-rolair-portable-jc20-p1"
    ],
    "voltage": [
      "october8-rolair-portable-jc20-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
