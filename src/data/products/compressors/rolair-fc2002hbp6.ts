import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-fc2002hbp6",
  "slug": "rolair-fc2002hbp6",
  "brand": "Rolair",
  "model": "FC2002HBP6",
  "variant": {
    "familyId": "rolair-fc2002hbp6",
    "label": "FC2002HBP6 Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "FC2002HBP6 Hand Carry Air Compressors",
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
      "litersPerMinute": 116.099
    }
  ],
  "voltage": "115 V",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-fc2002hbp6.svg",
    "alt": "Repères techniques : Rolair FC2002HBP6",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/fc2002hbp6",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "FC2002HBP6 Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "116,099 L/min (4,1 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "20 L",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-spec-p2"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "5.3 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "2 HP",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "3400 RPM",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "8.7 CFM",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "63 lb.",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "79 dBA",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    },
    {
      "label": "Volume déclaré dans le tableau anglais",
      "value": "TANK CAPACITY 5.3 GALLONS",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-spec-p1"
      ]
    },
    {
      "label": "Volume dans le texte promotionnel, contradictoire",
      "value": "extra-large 6 gallon tank.",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-spec-p1"
      ]
    },
    {
      "label": "Volume dans le texte espagnol, contradictoire",
      "value": "6 galones (23 litros)",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-spec-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-portable-fc2002hbp6-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair FC2002HBP6. 116,099 L/min déclarés à 6,205 bar. Configuration publiée : FC2002HBP6 Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 116,099 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar.",
      "Cuve documentée : 20 L."
    ],
    "limitations": [
      "CFM Delivered désigne un débit effectivement livré à la pression indiquée ; les conditions atmosphériques et ISO1217 ne sont pas déclarées pour cette fiche.",
      "La pression du point de débit ne qualifie pas toute la plage de régulation ; une pression de coupure plus élevée ne donne aucun FAD supplémentaire.",
      "La fiche donne 20 L dans le tableau espagnol et 5,3 gallons dans le tableau anglais ; le texte promotionnel indique 6 gallons et 23 L. Le profil conserve les 20 L du tableau technique sans corriger le texte contradictoire.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-rolair-portable-fc2002hbp6-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/fc2002hbp6",
      "sourceLabel": "Rolair, FC2002HBP6 Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 3392b8c2dcf9372003c7cf5ec6bd84546d152d9f8ed37f3f9d2bf3751379df64 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-fc2002hbp6-spec-p2",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/FC2002HBP6%20Showroom%20Sheet.pdf#page=2",
      "sourceLabel": "Rolair, fiche bilingue FC2002HBP6, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 fe16ecd23146fdcc6dfe5a4e48e86c9e2bbb03bd71febb5ebd1b57c664273921 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-rolair-portable-fc2002hbp6-spec-p1",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/FC2002HBP6%20Showroom%20Sheet.pdf#page=1",
      "sourceLabel": "Rolair, fiche bilingue FC2002HBP6, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 fe16ecd23146fdcc6dfe5a4e48e86c9e2bbb03bd71febb5ebd1b57c664273921 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-fc2002hbp6-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-fc2002hbp6-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-fc2002hbp6-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-fc2002hbp6-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "tankLiters": [
      "october8-rolair-portable-fc2002hbp6-spec-p2"
    ],
    "oilType": [
      "october8-rolair-portable-fc2002hbp6-p1"
    ],
    "voltage": [
      "october8-rolair-portable-fc2002hbp6-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
