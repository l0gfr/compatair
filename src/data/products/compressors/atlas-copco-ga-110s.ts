const product = {
  "id": "atlas-copco-ga-110s",
  "slug": "atlas-copco-ga-110s",
  "brand": "Atlas Copco",
  "model": "GA 110s",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-ga-110s",
    "label": "GA 110s-6.9",
    "distinguishingAttributes": {
      "équipement": "GA 110s-6.9",
      "pressionDeConfiguration": "7,398 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7.398,
  "fadCurve": [
    {
      "pressureBar": 6.895,
      "litersPerMinute": 21750.168
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-ga-110s.svg",
    "alt": "Repères techniques : Atlas Copco GA 110s",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/ga-90-160-vsds/ga90-160/air-cooled/GA110A3-COOL_AIR-ENREC_N-FREQ_60HZ-HAT_N-PRESS_6.9BAR-100%20psig.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco GA 110s. 21 750,168 L/min déclarés à 6,895 bar. Configuration constructeur : GA 110s-6.9.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7,398 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 21 750,168 L/min déclarés à 6,895 bar."
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
      "value": "GA 110s-6.9",
      "evidenceIds": [
        "october5-atlas-cagi-50-p1"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "7,398 bar (107,3 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-50-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-50-p1"
      ]
    },
    {
      "label": "Air livré à 6,895 bar",
      "value": "21 750,168 L/min (768,1 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-50-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "6 Drive Motor Nominal Rating 147.5 hp",
      "evidenceIds": [
        "october5-atlas-cagi-50-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-50-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-50-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/ga-90-160-vsds/ga90-160/air-cooled/GA110A3-COOL_AIR-ENREC_N-FREQ_60HZ-HAT_N-PRESS_6.9BAR-100%20psig.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, GA 110s-6.9, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 e5bdefd7f7eaace13b8ad2f7b316643906a4536fb6c0d1a03d8d357ab3f02898 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october5-atlas-cagi-50-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-50-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-50-p1",
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
