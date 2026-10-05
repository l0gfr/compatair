const product = {
  "id": "atlas-copco-gr-160",
  "slug": "atlas-copco-gr-160",
  "brand": "Atlas Copco",
  "model": "GR 160",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-gr-160",
    "label": "GR 160-13.8",
    "distinguishingAttributes": {
      "équipement": "GR 160-13.8",
      "pressionDeConfiguration": "13,803 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13.803,
  "fadCurve": [
    {
      "pressureBar": 13.79,
      "litersPerMinute": 20750.583
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-gr-160.svg",
    "alt": "Repères techniques : Atlas Copco GR 160",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/gr-series-2-24/GR160%20-%2013.8%20bar%20-%20200%20psi.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco GR 160. 20 750,583 L/min déclarés à 13,79 bar. Configuration constructeur : GR 160-13.8.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13,803 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 20 750,583 L/min déclarés à 13,79 bar."
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
      "value": "GR 160-13.8",
      "evidenceIds": [
        "october5-atlas-cagi-99-p1"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "13,803 bar (200,2 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-99-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-99-p1"
      ]
    },
    {
      "label": "Air livré à 13,79 bar",
      "value": "20 750,583 L/min (732,8 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-99-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "6 Drive Motor Nominal Rating 201.2 hp",
      "evidenceIds": [
        "october5-atlas-cagi-99-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-99-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-99-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/gr-series-2-24/GR160%20-%2013.8%20bar%20-%20200%20psi.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, GR 160-13.8, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 8e63db862fa84a637ac7ba686cd539734eada9c787acf40dc383830feb5d85eb de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october5-atlas-cagi-99-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-99-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-99-p1",
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
