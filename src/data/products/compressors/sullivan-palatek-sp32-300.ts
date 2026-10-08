import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "sullivan-palatek-sp32-300",
  "slug": "sullivan-palatek-sp32-300",
  "brand": "Sullivan-Palatek",
  "model": "SP32-300",
  "variant": {
    "familyId": "sullivan-palatek-sp32-300",
    "label": "Compresseur à vis électrique, vitesse fixe, SP32-300",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis électrique, vitesse fixe, SP32-300",
      "pointDocumentaire": "6,895 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 6.895,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.895,
      "litersPerMinute": 42192.098
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/sullivan-palatek-sp32-300.svg",
    "alt": "Repères techniques : Sullivan-Palatek SP32-300",
    "sourceUrl": "https://www.sullivan-palatek.com/product-detail/sp32-series-300-450-hp/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis électrique, vitesse fixe, SP32-300",
      "evidenceIds": [
        "october8-sullivan-sp32-series-300-450-hp-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "6,895 bar",
      "evidenceIds": [
        "october8-sullivan-sp32-series-300-450-hp-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 6,895 bar",
      "value": "42 192,098 L/min (1 490 cfm publiés)",
      "evidenceIds": [
        "october8-sullivan-sp32-series-300-450-hp-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-sullivan-sp32-series-300-450-hp-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "300",
      "evidenceIds": [
        "october8-sullivan-sp32-series-300-450-hp-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Sullivan-Palatek SP32-300. 42 192,098 L/min déclarés à 6,895 bar. Configuration publiée : Compresseur à vis électrique, vitesse fixe, SP32-300.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 42 192,098 L/min déclarés à 6,895 bar.",
      "Plafond documentaire du point retenu : 6,895 bar."
    ],
    "limitations": [
      "Un seul point constructeur est retenu. Les autres pressions de la famille ne deviennent pas une courbe mesurée sur cette configuration.",
      "La puissance moteur en hp ne renseigne pas la puissance absorbée totale ; aucune conversion kW n’est supposée.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Fréquence électrique de cette configuration non documentée.",
      "Cuve non qualifiée en litres : l’autonomie ne peut pas être conclue à partir de ce profil.",
      "Le point de pression ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "evidence": [
    {
      "id": "october8-sullivan-sp32-series-300-450-hp-p1",
      "sourceUrl": "https://www.sullivan-palatek.com/product-detail/sp32-series-300-450-hp/",
      "sourceLabel": "Sullivan-Palatek, SP32 SERIES, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 dcd433b3630525c908214018979aadbb669a31b30f9f708e9145a60c797e0384 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october8-sullivan-sp32-series-300-450-hp-p1"
    ],
    "maxPressureBar": [
      "october8-sullivan-sp32-series-300-450-hp-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-sullivan-sp32-series-300-450-hp-p1"
    ],
    "fadCurve": [
      "october8-sullivan-sp32-series-300-450-hp-p1",
      "october8-nist-conversions-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
