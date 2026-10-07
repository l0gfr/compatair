import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "atlas-copco-zt-200-vsd-plus",
  "slug": "atlas-copco-zt-200-vsd-plus",
  "brand": "Atlas Copco",
  "model": "ZT 200 VSD+",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-zt-200-vsd-plus",
    "label": "ZT 200 VSD+-10.4",
    "distinguishingAttributes": {
      "équipement": "ZT 200 VSD+-10.4",
      "pressionDeConfiguration": "10,342 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10.342,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 10.342,
      "litersPerMinute": 29036.092
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-zt-200-vsd-plus.svg",
    "alt": "Repères techniques : Atlas Copco ZT 200 VSD+",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/vsd-screw-z-series/ZT200%20VSD+%20-%2010.4%20bar%20-%20150%20psi.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco ZT 200 VSD+. 29 036,092 L/min déclarés à 10,342 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : ZT 200 VSD+-10.4.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10,342 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 29 036,092 L/min déclarés à 10,342 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
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
      "value": "ZT 200 VSD+-10.4",
      "evidenceIds": [
        "october5-atlas-cagi-120-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10,342 bar (150 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-120-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-120-p1"
      ]
    },
    {
      "label": "FAD maximal déclaré à 10,342 bar",
      "value": "29 036,092 L/min (1 025,4 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-120-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "4 Drive Motor Nominal Rating 134.1 & 134.1 hp",
      "evidenceIds": [
        "october5-atlas-cagi-120-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 10,342 bar",
      "value": "10 848,183 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-atlas-cagi-120-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-120-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-120-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/vsd-screw-z-series/ZT200%20VSD+%20-%2010.4%20bar%20-%20150%20psi.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, ZT 200 VSD+-10.4, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 6e381ece660f36bc53a99b28182321dcf616646ab0bc4458600cb56fc81006c1 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october5-atlas-cagi-120-p1"
    ],
    "model": [
      "october5-atlas-cagi-120-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-120-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-120-p1",
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
