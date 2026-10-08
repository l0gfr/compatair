import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rolair-v2130k17",
  "slug": "rolair-v2130k17",
  "brand": "Rolair",
  "model": "V2130K17",
  "variant": {
    "familyId": "rolair-v2130k17",
    "label": "Stationnaire ; cuve 30 Gallons, Vertical ; phase Single",
    "distinguishingAttributes": {
      "équipement": "Stationnaire ; cuve 30 Gallons, Vertical ; phase Single",
      "pointDocumentaire": "6,895 bar",
      "cuve": "Non qualifiée en litres",
      "fréquence": "60 Hz",
      "phase": "single-phase"
    }
  },
  "maxPressureBar": 6.895,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.895,
      "litersPerMinute": 237.861
    }
  ],
  "phase": "single-phase",
  "mobility": "fixed",
  "oilType": "oil",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rolair-v2130k17.svg",
    "alt": "Repères techniques : Rolair V2130K17",
    "sourceUrl": "https://www.rolair.com/air-compressors/stationary-electric-air-compressors/15-3-hp-single-stage",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Stationnaire ; cuve 30 Gallons, Vertical ; phase Single",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,895 bar",
      "evidenceIds": [
        "october8-rolair-small-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,895 bar",
      "value": "237,861 L/min (8,4 cfm publiés)",
      "evidenceIds": [
        "october8-rolair-small-p1",
        "october8-rolair-faq-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Cuve et orientation publiées, gallons non normalisés",
      "value": "30 Gallons, Vertical",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Phase publiée",
      "value": "Single",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "2",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Régime moteur publié, tr/min",
      "value": "1740",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Déplacement publié, distinct du débit livré",
      "value": "12.5 @ 100 PSI",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Poids d’expédition publié, distinct de la masse en service",
      "value": "235 lb.",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "60 Hz",
      "evidenceIds": [
        "october8-rolair-small-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair V2130K17. 237,861 L/min déclarés à 6,895 bar. Configuration publiée : Stationnaire ; cuve 30 Gallons, Vertical ; phase Single.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 237,861 L/min déclarés à 6,895 bar.",
      "Plafond documentaire du point retenu : 6,895 bar.",
      "Phase électrique documentée : monophasée."
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
      "id": "october8-rolair-small-p1",
      "sourceUrl": "https://www.rolair.com/air-compressors/stationary-electric-air-compressors/15-3-hp-single-stage",
      "sourceLabel": "Rolair, 1.5 - 3 HP SINGLE-STAGE Stationary Electric Air Compressors, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 53955d32d2c64f8f26f664165f54602482602045a0a40e7f859678e15229406c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october8-rolair-small-p1"
    ],
    "maxPressureBar": [
      "october8-rolair-small-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-rolair-small-p1"
    ],
    "fadCurve": [
      "october8-rolair-small-p1",
      "october8-rolair-faq-p1",
      "october8-nist-conversions-p1"
    ],
    "oilType": [
      "october8-rolair-small-p1"
    ],
    "phase": [
      "october8-rolair-small-p1"
    ],
    "mobility": [
      "october8-rolair-small-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
