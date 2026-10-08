import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-5230k30cs",
  "slug": "rolair-5230k30cs",
  "brand": "Rolair",
  "model": "5230K30CS",
  "variant": {
    "familyId": "rolair-5230k30cs",
    "label": "5230K30CS Wheeled Electric Air Compressors",
    "distinguishingAttributes": {
      "équipement": "5230K30CS Wheeled Electric Air Compressors",
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
      "litersPerMinute": 532.357
    }
  ],
  "dutyCycle": 1,
  "voltage": "230 V",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-5230k30cs.svg",
    "alt": "Repères techniques : Rolair 5230K30CS",
    "sourceUrl": "https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/5230k30cs",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "5230K30CS Wheeled Electric Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "532,357 L/min (18,8 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "9 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "5 HP",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1740 RPM",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "23.1 CFM",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "315 lb.",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "Unavailable",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    },
    {
      "label": "Cycle de service déclaré pour ce modèle",
      "value": "100 %",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-spec-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-5230k30cs-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair 5230K30CS. 532,357 L/min déclarés à 6,205 bar. Configuration publiée : 5230K30CS Wheeled Electric Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 532,357 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar."
    ],
    "limitations": [
      "La cuve est publiée en gallons sans identification US ou impériale ; aucun volume en litres n’est calculé.",
      "CFM Delivered désigne un débit effectivement livré à la pression indiquée ; les conditions atmosphériques et ISO1217 ne sont pas déclarées pour cette fiche.",
      "La pression du point de débit ne qualifie pas toute la plage de régulation ; une pression de coupure plus élevée ne donne aucun FAD supplémentaire.",
      "Le cycle 100 % provient de la fiche du modèle exact encore liée par le fabricant ; il ne documente ni les conditions thermiques du site ni un autre réglage de pression.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-rolair-portable-5230k30cs-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/5230k30cs",
      "sourceLabel": "Rolair, 5230K30CS Wheeled Electric Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 5e0c4715848c93c304ae0713850b28d4080293e79a6068d61908f0bc1db6f7a7 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-5230k30cs-spec-p1",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/5230K30CS%20Spec%20Sheet%2010-15.pdf#page=1",
      "sourceLabel": "Rolair, fiche constructeur 5230K30CS, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 5f223a682bec218a0063ecaf63a631449fb1a14d1f0eac2b3fe141849926f56d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-5230k30cs-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-5230k30cs-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-5230k30cs-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-5230k30cs-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "oilType": [
      "october8-rolair-portable-5230k30cs-p1"
    ],
    "dutyCycle": [
      "october8-rolair-portable-5230k30cs-spec-p1"
    ],
    "voltage": [
      "october8-rolair-portable-5230k30cs-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
