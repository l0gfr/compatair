import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-h15320k100",
  "slug": "rolair-h15320k100",
  "brand": "Rolair",
  "model": "H15320K100",
  "variant": {
    "familyId": "rolair-h15320k100",
    "label": "Stationnaire ; cuve 200 Gallons ; phase three",
    "distinguishingAttributes": {
      "équipement": "Stationnaire ; cuve 200 Gallons ; phase three",
      "pointDocumentaire": "12,066 bar",
      "cuve": "Non qualifiée en litres",
      "fréquence": "60 Hz",
      "phase": "three-phase"
    }
  },
  "maxPressureBar": 12.066,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.066,
      "litersPerMinute": 1339.387
    }
  ],
  "phase": "three-phase",
  "mobility": "fixed",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-h15320k100.svg",
    "alt": "Repères techniques : Rolair H15320K100",
    "sourceUrl": "https://www.rolair.com/air-compressors/stationary-electric-air-compressors/15-20-hp-two-stage-industrial",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Stationnaire ; cuve 200 Gallons ; phase three",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "12,066 bar",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 12,066 bar",
      "value": "1 339,387 L/min (47,3 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Cuve et orientation publiées, gallons non normalisés",
      "value": "200 Gallons",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Phase publiée",
      "value": "three",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "15",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1740",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "60.7 @ 175 PSI",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "1,395 lb.",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-15-20-hp-two-stage-industrial-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair H15320K100. 1 339,387 L/min déclarés à 12,066 bar. Configuration publiée : Stationnaire ; cuve 200 Gallons ; phase three.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 1 339,387 L/min déclarés à 12,066 bar.",
      "Plafond documentaire du point retenu : 12,066 bar.",
      "Phase électrique documentée : triphasée."
    ],
    "limitations": [
      "Le fabricant qualifie CFM Delivered comme débit effectivement livré. Les conditions atmosphériques et une conformité ISO1217 ne sont pas précisées pour cette ligne.",
      "Gallons ne précise pas le système US ou impérial : aucun volume en litres n’est calculé.",
      "Le manuel de famille conditionne le fonctionnement continu au montage à vitesse constante ; il ne qualifie pas le cycle de cette configuration exacte.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-rolair-15-20-hp-two-stage-industrial-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/stationary-electric-air-compressors/15-20-hp-two-stage-industrial",
      "sourceLabel": "Rolair, 15 - 20 HP TWO-STAGE INDUSTRIAL Stationary Electric Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 77b6e941a91825426bbd8aca1c860cedbdb11c4141d3a92a930d70a2f5cac7f8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october8-rolair-15-20-hp-two-stage-industrial-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-15-20-hp-two-stage-industrial-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-15-20-hp-two-stage-industrial-p1"
    ],
    "fadCurve": [
      "october8-rolair-15-20-hp-two-stage-industrial-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "oilType": [
      "october8-rolair-15-20-hp-two-stage-industrial-p1"
    ],
    "phase": [
      "october8-rolair-15-20-hp-two-stage-industrial-p1"
    ],
    "mobility": [
      "october8-rolair-15-20-hp-two-stage-industrial-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
