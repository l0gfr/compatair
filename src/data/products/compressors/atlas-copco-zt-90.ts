const product = {
  "id": "atlas-copco-zt-90",
  "slug": "atlas-copco-zt-90",
  "brand": "Atlas Copco",
  "model": "ZT 90",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-zt-90",
    "label": "ZT 90 STD-8.6",
    "distinguishingAttributes": {
      "équipement": "ZT 90 STD-8.6",
      "pressionDeConfiguration": "8,598 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.598,
  "fadCurve": [
    {
      "pressureBar": 8.598,
      "litersPerMinute": 15523.294
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-zt-90.svg",
    "alt": "Repères techniques : Atlas Copco ZT 90",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/zt-series-cagi-/ZT90%20STD%20-%208.6%20bar%20-%20125%20psi1.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco ZT 90. 15 523,294 L/min déclarés à 8,598 bar. Configuration constructeur : ZT 90 STD-8.6.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,598 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 15 523,294 L/min déclarés à 8,598 bar."
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
      "value": "ZT 90 STD-8.6",
      "evidenceIds": [
        "october5-atlas-cagi-119-p1"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8,598 bar (124,7 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-119-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-119-p1"
      ]
    },
    {
      "label": "Air livré à 8,598 bar",
      "value": "15 523,294 L/min (548,2 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-119-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "6 Drive Motor Nominal Rating 120.7 hp",
      "evidenceIds": [
        "october5-atlas-cagi-119-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-119-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-119-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/zt-series-cagi-/ZT90%20STD%20-%208.6%20bar%20-%20125%20psi1.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, ZT 90 STD-8.6, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 48c751de9c415c9908dedbd00c589959ed6ffa90637dd15c70788951ec088664 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october5-atlas-cagi-119-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-119-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-119-p1",
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
