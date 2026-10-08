import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-3095k18",
  "slug": "rolair-3095k18",
  "brand": "Rolair",
  "model": "3095K18",
  "variant": {
    "familyId": "rolair-3095k18",
    "label": "3095K18 Wheeled Electric Air Compressors",
    "distinguishingAttributes": {
      "équipement": "3095K18 Wheeled Electric Air Compressors",
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
      "litersPerMinute": 353.961
    }
  ],
  "dutyCycle": 1,
  "voltage": "230 V",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-3095k18.svg",
    "alt": "Repères techniques : Rolair 3095K18",
    "sourceUrl": "https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/3095k18",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "3095K18 Wheeled Electric Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "353,961 L/min (12,5 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "9 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "3 HP",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1740",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "17.2 CFM",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "245 lb.",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "Unavailable",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    },
    {
      "label": "Cycle de service déclaré pour ce modèle",
      "value": "100 %",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-spec-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-3095k18-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair 3095K18. 353,961 L/min déclarés à 6,205 bar. Configuration publiée : 3095K18 Wheeled Electric Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 353,961 L/min déclarés à 6,205 bar.",
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
      "id": "october8-rolair-portable-3095k18-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/3095k18",
      "sourceLabel": "Rolair, 3095K18 Wheeled Electric Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 2bd448f3e889e5546f6a6cca7ae547d6428b815cf13962e5b5278273a7460ed9 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-3095k18-spec-p1",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/3095K18%20Spec%20Sheet%2010-15.pdf#page=1",
      "sourceLabel": "Rolair, fiche constructeur 3095K18, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 0ab86e21b08d630cbef21c7ff54528a01001f73428583170c86b6862b813528a de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-3095k18-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-3095k18-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-3095k18-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-3095k18-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "oilType": [
      "october8-rolair-portable-3095k18-p1"
    ],
    "dutyCycle": [
      "october8-rolair-portable-3095k18-spec-p1"
    ],
    "voltage": [
      "october8-rolair-portable-3095k18-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
