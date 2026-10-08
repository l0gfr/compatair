import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-jc10plus",
  "slug": "rolair-jc10plus",
  "brand": "Rolair",
  "model": "JC10PLUS",
  "variant": {
    "familyId": "rolair-jc10plus",
    "label": "JC10PLUS Hand Carry Air Compressors",
    "distinguishingAttributes": {
      "équipement": "JC10PLUS Hand Carry Air Compressors",
      "pointDocumentaire": "6,205 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 6.205,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.205,
      "litersPerMinute": 67.96
    }
  ],
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-jc10plus.svg",
    "alt": "Repères techniques : Rolair JC10PLUS",
    "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/jc10plus",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "JC10PLUS Hand Carry Air Compressors",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,205 bar",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,205 bar",
      "value": "67,96 L/min (2,4 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Cuve publiée, unité native",
      "value": "2.5 Gallons",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "1 HP",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1700",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "4.1 CFM",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "50 lb.",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Niveau sonore publié, conditions à confirmer",
      "value": "60 dBA",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-p1"
      ]
    },
    {
      "label": "Volume déclaré dans le tableau anglais, à confirmer",
      "value": "TANK CAPACITY 2.5 GALLON",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-spec-p1"
      ]
    },
    {
      "label": "Volume déclaré dans le tableau espagnol, à confirmer",
      "value": "CAPACIDAD DEL TANQUE 8,7 LITERS",
      "evidenceIds": [
        "october8-rolair-portable-jc10plus-spec-p2"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair JC10PLUS. 67,96 L/min déclarés à 6,205 bar. Configuration publiée : JC10PLUS Hand Carry Air Compressors.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 67,96 L/min déclarés à 6,205 bar.",
      "Plafond documentaire du point retenu : 6,205 bar."
    ],
    "limitations": [
      "La cuve est publiée en gallons sans identification US ou impériale ; aucun volume en litres n’est calculé.",
      "CFM Delivered désigne un débit effectivement livré à la pression indiquée ; les conditions atmosphériques et ISO1217 ne sont pas déclarées pour cette fiche.",
      "La pression du point de débit ne qualifie pas toute la plage de régulation ; une pression de coupure plus élevée ne donne aucun FAD supplémentaire.",
      "La fiche bilingue annonce 2,5 gallons en anglais et 8,7 litres en espagnol ; le volume numérique reste non qualifié.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Fréquence électrique de cette configuration non documentée.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-rolair-portable-jc10plus-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/hand-carry-air-compressors/jc10plus",
      "sourceLabel": "Rolair, JC10PLUS Hand Carry Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 133b38b1d0290ac6b16b3550c9a26bb2a671fb252ff74d1dc7bb8a7ff5016906 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "october8-rolair-portable-jc10plus-spec-p1",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/JC10PLUS%20Showroom%20Sheet_1.pdf#page=1",
      "sourceLabel": "Rolair, fiche bilingue JC10PLUS, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 6572af3c326c5df2624155df36a3188712e0c9a7d77b013d903902cfb178f719 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october8-rolair-portable-jc10plus-spec-p2",
      "sourceUrl": "https://www.rolair.com/sites/default/files/2025-02/JC10PLUS%20Showroom%20Sheet_1.pdf#page=2",
      "sourceLabel": "Rolair, fiche bilingue JC10PLUS, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 6572af3c326c5df2624155df36a3188712e0c9a7d77b013d903902cfb178f719 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-rolair-portable-jc10plus-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-portable-jc10plus-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-portable-jc10plus-p1"
    ],
    "fadCurve": [
      "october8-rolair-portable-jc10plus-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "oilType": [
      "october8-rolair-portable-jc10plus-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
