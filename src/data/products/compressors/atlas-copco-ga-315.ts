const product = {
  "id": "atlas-copco-ga-315",
  "slug": "atlas-copco-ga-315",
  "brand": "Atlas Copco",
  "model": "GA 315",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-ga-315",
    "label": "GA 315-6.9",
    "distinguishingAttributes": {
      "équipement": "GA 315-6.9",
      "pressionDeConfiguration": "7,398 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.398,
  "fadCurve": [
    {
      "pressureBar": 6.895,
      "litersPerMinute": 62546.245
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-ga-315.svg",
    "alt": "Repères techniques : Atlas Copco GA 315",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/ga-series-2024/GA315%20-%206.9%20bar%20-%20100%20psi.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco GA 315. 62 546,245 L/min déclarés à 6,895 bar. Configuration constructeur : GA 315-6.9.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,398 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 62 546,245 L/min déclarés à 6,895 bar."
    ],
    "limitations": [
      "Configuration du marché nord-américain publiée sur la fiche constructeur CAGI. ACFM mesuré selon ISO 1217 aux conditions d’admission ; aucun essai physique CompatAir ni vérification indépendante CAGI déduits.",
      "Puissance nominale du moteur publiée en hp ; aucune conversion silencieuse ni substitution par la consommation électrique totale du package. Cuve, fréquence et cycle de marche inconnus sur cette fiche.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "GA 315-6.9",
      "evidenceIds": [
        "october5-atlas-cagi-56-p1"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "7,398 bar (107,3 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-56-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-56-p1"
      ]
    },
    {
      "label": "Air livré à 6,895 bar",
      "value": "62 546,245 L/min (2 208,8 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-56-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "6 Drive Motor Nominal Rating 214.6 & 214.6 hp",
      "evidenceIds": [
        "october5-atlas-cagi-56-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-56-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-56-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/ga-series-2024/GA315%20-%206.9%20bar%20-%20100%20psi.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, GA 315-6.9, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 10f9f8a32e429130cc015ea5d62122ac2bf1302788f062731c36586176fa3292 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october5-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide to the SI, appendice B.8, facteurs de conversion, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 a66b8ada84af2d6f8ff8cb88ce6384f0bfe0af8583f166f6f6ffec0b26250180 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october5-atlas-cagi-56-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-56-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-56-p1",
      "october5-nist-conversions-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
