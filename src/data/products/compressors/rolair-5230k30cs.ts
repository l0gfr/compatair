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
  "voltage": "230 V / 60 Hz",
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
      "label": "Modèle",
      "value": "5230K30CS, portable électrique",
      "evidenceIds": [
        "rolair-5230k30cs-reserved-20261103-1"
      ]
    },
    {
      "label": "CFM Delivered",
      "value": "18,8 cfm à 90 psi",
      "evidenceIds": [
        "rolair-5230k30cs-reserved-20261103-1"
      ]
    },
    {
      "label": "CFM Displaced distinct",
      "value": "23,1 cfm",
      "evidenceIds": [
        "rolair-5230k30cs-reserved-20261103-1"
      ]
    },
    {
      "label": "Moteur",
      "value": "5 HP, 230 V / 60 Hz, 1 740 tr/min",
      "evidenceIds": [
        "rolair-5230k30cs-reserved-20261103-1"
      ]
    },
    {
      "label": "Stockage publié",
      "value": "9 gallons, définition non précisée",
      "evidenceIds": [
        "rolair-5230k30cs-reserved-20261103-1"
      ]
    },
    {
      "label": "Fonctionnement déclaré",
      "value": "Constant-run / constant speed avec déchargeur pilote",
      "evidenceIds": [
        "rolair-5230k30cs-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Rolair 5230K30CS. La 5230K30CS fournit 18,8 cfm à 90 psi ; le déplacement de 23,1 cfm reste séparé. Son fonctionnement à vitesse constante et son déchargeur permettent la régulation sans arrêter le moteur. La FAQ générale décrit des moteurs S1, pas un taux de marche chiffré du groupe ; le 100 % est retiré.",
    "verifiedFacts": [
      "Modèle : 5230K30CS, portable électrique.",
      "CFM Delivered : 18,8 cfm à 90 psi.",
      "CFM Displaced distinct : 23,1 cfm.",
      "Moteur : 5 HP, 230 V / 60 Hz, 1 740 tr/min.",
      "Stockage publié : 9 gallons, définition non précisée.",
      "Fonctionnement déclaré : Constant-run / constant speed avec déchargeur pilote."
    ],
    "limitations": [
      "Le débit livré à 90 psi est conservé, sans extrapolation au maximum du manomètre ou de la pompe.",
      "Constant-run et service S1 du moteur ne quantifient pas le taux de marche en charge du groupe."
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
    },
    {
      "id": "rolair-5230k30cs-reserved-20261103-1",
      "sourceUrl": "https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/5230k30cs",
      "sourceLabel": "Rolair : revue factuelle du 3 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 0cff1212bd530efe9f863f90d767d229bfd439c4bba8ffd2960248f6e9bc949f. La 5230K30CS fournit 18,8 cfm à 90 psi ; le déplacement de 23,1 cfm reste séparé. Son fonctionnement à vitesse constante et son déchargeur permettent la régulation sans arrêter le moteur. La FAQ générale décrit des moteurs S1, pas un taux de marche chiffré du groupe ; le 100 % est retiré."
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
    "voltage": [
      "rolair-5230k30cs-reserved-20261103-1"
    ],
    "editorial": [
      "rolair-5230k30cs-reserved-20261103-1"
    ],
    "specifications": [
      "rolair-5230k30cs-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
