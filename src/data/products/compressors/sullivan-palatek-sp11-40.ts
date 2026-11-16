import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "sullivan-palatek-sp11-40",
  "slug": "sullivan-palatek-sp11-40",
  "brand": "Sullivan-Palatek",
  "model": "SP11-40",
  "variant": {
    "familyId": "sullivan-palatek-sp11-40",
    "label": "Compresseur à vis électrique, vitesse fixe, SP11-40",
    "distinguishingAttributes": {
      "équipement": "Compresseur à vis électrique, vitesse fixe, SP11-40",
      "pointDocumentaire": "8,618 bar",
      "cuve": "Non qualifiée en litres"
    }
  },
  "maxPressureBar": 8.618,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 4476.893
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/sullivan-palatek-sp11-40-technical-20261116-reviews.svg",
    "alt": "Repères techniques : Sullivan-Palatek SP11-40",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur à vis électrique, vitesse fixe, SP11-40",
      "evidenceIds": [
        "october8-sullivan-sp11-series-25-40hp-p1"
      ]
    },
    {
      "label": "Pression du point documentaire",
      "value": "8,618 bar",
      "evidenceIds": [
        "october8-sullivan-sp11-series-25-40hp-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Débit restitué déclaré à 8,618 bar",
      "value": "4 476,893 L/min (158,1 cfm publiés)",
      "evidenceIds": [
        "october8-sullivan-sp11-series-25-40hp-p1",
        "october8-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non qualifiée en litres",
      "evidenceIds": [
        "october8-sullivan-sp11-series-25-40hp-p1"
      ]
    },
    {
      "label": "Puissance moteur publiée, hp natifs",
      "value": "40",
      "evidenceIds": [
        "october8-sullivan-sp11-series-25-40hp-p1"
      ]
    }
  ],
  "editorial": {
    "overview": "Le SP11-40 fixe est déclaré à 158,1 cfm à 125 psig, environ 4 476,893 L/min à 8,618 bar après conversion conservée. Le SP11-40VFD publie 162,7 cfm au même point et permet une autre régulation ; le SP11-25 utilise une autre puissance. Les autres configurations de pression ne sont pas des points automatiquement disponibles sur ce groupe. La puissance reste en hp natifs et aucun réservoir optionnel n’est imposé.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 4 476,893 L/min déclarés à 8,618 bar.",
      "Plafond documentaire du point retenu : 8,618 bar."
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
      "id": "october8-sullivan-sp11-series-25-40hp-p1",
      "sourceUrl": "https://www.sullivan-palatek.com/product-detail/sp11-series-25-40hp/",
      "sourceLabel": "Sullivan-Palatek, SP11 SERIES, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 b27d5a436e1d7eeb6cfc0a75651c4d9db91c7185cb7f60a306ba3cd1b758014d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "id": "review:2026-11-16-reviews:sullivan-palatek-sp11-40:0",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "Sullivan-Palatek, document constructeur relu le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le SP11-40 fixe est déclaré à 158,1 cfm à 125 psig, environ 4 476,893 L/min à 8,618 bar après conversion conservée. Le SP11-40VFD publie 162,7 cfm au même point et permet une autre régulation ; le SP11-25 utilise une autre puissance. Les autres configurations de pression ne sont pas des points automatiquement disponibles sur ce groupe. La puissance reste en hp natifs et aucun réservoir optionnel n’est imposé. GET complet SHA-256 751228aea7ee7b2d83bb7af67071a1647374ae710e5d02c44f45cee1e59c4546. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    },
    {
      "id": "review:2026-11-16-reviews:sullivan-palatek-sp11-40:1",
      "sourceUrl": "https://www.sullivan-palatek.com/product-detail/sp11-series-25-40hp/",
      "sourceLabel": "Sullivan-Palatek, document constructeur relu le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Le SP11-40 fixe est déclaré à 158,1 cfm à 125 psig, environ 4 476,893 L/min à 8,618 bar après conversion conservée. Le SP11-40VFD publie 162,7 cfm au même point et permet une autre régulation ; le SP11-25 utilise une autre puissance. Les autres configurations de pression ne sont pas des points automatiquement disponibles sur ce groupe. La puissance reste en hp natifs et aucun réservoir optionnel n’est imposé. GET complet SHA-256 c841beacd63a6506ee81e6a93e2ddf3894ee227db1404fe29ce7f3c2812f06ad. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-sullivan-sp11-series-25-40hp-p1"
    ],
    "maxPressureBar": [
      "october8-sullivan-sp11-series-25-40hp-p1",
      "october8-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october8-sullivan-sp11-series-25-40hp-p1"
    ],
    "fadCurve": [
      "october8-sullivan-sp11-series-25-40hp-p1",
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
