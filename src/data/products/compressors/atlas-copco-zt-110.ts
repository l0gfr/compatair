const product = {
  "id": "atlas-copco-zt-110",
  "slug": "atlas-copco-zt-110",
  "brand": "Atlas Copco",
  "model": "ZT 110",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-zt-110",
    "label": "ZT 110 STD-8.6",
    "distinguishingAttributes": {
      "équipement": "ZT 110 STD-8.6",
      "pressionDeConfiguration": "8,598 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.598,
  "fadCurve": [
    {
      "pressureBar": 8.598,
      "litersPerMinute": 19448.008
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-zt-110.svg",
    "alt": "Repères techniques : Atlas Copco ZT 110",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/zt-series-cagi-/ZT110%20STD%20-%208.6%20bar%20-%20125%20psi.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco ZT 110. 19 448,008 L/min déclarés à 8,598 bar. Configuration constructeur : ZT 110 STD-8.6.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,598 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 19 448,008 L/min déclarés à 8,598 bar."
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
      "value": "ZT 110 STD-8.6",
      "evidenceIds": [
        "october5-atlas-cagi-135-p1"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8,598 bar (124,7 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-135-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-135-p1"
      ]
    },
    {
      "label": "Air livré à 8,598 bar",
      "value": "19 448,008 L/min (686,8 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-135-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "6 Drive Motor Nominal Rating 150.0 hp",
      "evidenceIds": [
        "october5-atlas-cagi-135-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-135-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-135-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/zt-series-cagi-/ZT110%20STD%20-%208.6%20bar%20-%20125%20psi.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, ZT 110 STD-8.6, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 8225dbf32ee6da7b2e4e60147da579878f403e5e51ada0113c611d48f9803896 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october5-atlas-cagi-135-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-135-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-135-p1",
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
