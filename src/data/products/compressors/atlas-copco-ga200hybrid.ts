import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "atlas-copco-ga200hybrid",
  "slug": "atlas-copco-ga200hybrid",
  "brand": "Atlas Copco",
  "model": "GA200Hybrid",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-ga200hybrid",
    "label": "GA200Hybrid-8.6",
    "distinguishingAttributes": {
      "équipement": "GA200Hybrid-8.6",
      "pressionDeConfiguration": "6,895 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 6.895,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 6.895,
      "litersPerMinute": 44094.989
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-ga200hybrid.svg",
    "alt": "Repères techniques : Atlas Copco GA200Hybrid",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/GA200%20Hybrid%20Air%20Cooled%20100PSI.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco GA200Hybrid. 44 094,989 L/min déclarés à 6,895 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : GA200Hybrid-8.6.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 6,895 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 44 094,989 L/min déclarés à 6,895 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Configuration du marché nord-américain publiée sur la fiche constructeur CAGI. ACFM mesuré selon ISO 1217 aux conditions d’admission ; aucun essai physique CompatAir ni vérification indépendante CAGI déduits.",
      "Puissance nominale du moteur publiée en hp ; aucune conversion silencieuse ni substitution par la consommation électrique totale du package. Cuve, fréquence et cycle de marche inconnus sur cette fiche.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "GA200Hybrid-8.6",
      "evidenceIds": [
        "october5-atlas-cagi-87-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "6,895 bar (100 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-87-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-87-p1"
      ]
    },
    {
      "label": "FAD maximal déclaré à 6,895 bar",
      "value": "44 094,989 L/min (1 557,2 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-87-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "4 Drive Motor Nominal Rating 177.0 & 120.7 hp",
      "evidenceIds": [
        "october5-atlas-cagi-87-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 6,895 bar",
      "value": "5 977,686 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-atlas-cagi-87-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-87-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-87-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/GA200%20Hybrid%20Air%20Cooled%20100PSI.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, GA200Hybrid-8.6, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 c9b6d7d8783ce66f2d0ba83b9aa04d86857203ec781b2a7ae3e8fd6b13e19086 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
    "maxPressureBasis": [
      "october5-atlas-cagi-87-p1"
    ],
    "model": [
      "october5-atlas-cagi-87-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-87-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-87-p1",
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
