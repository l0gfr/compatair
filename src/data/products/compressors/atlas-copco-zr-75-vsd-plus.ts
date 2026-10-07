import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "atlas-copco-zr-75-vsd-plus",
  "slug": "atlas-copco-zr-75-vsd-plus",
  "brand": "Atlas Copco",
  "model": "ZR 75 VSD+",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "atlas-copco-zr-75-vsd-plus",
    "label": "ZR 75 VSD+-10.4",
    "distinguishingAttributes": {
      "équipement": "ZR 75 VSD+-10.4",
      "pressionDeConfiguration": "8,618 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.618,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 12530.203
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/atlas-copco-zr-75-vsd-plus.svg",
    "alt": "Repères techniques : Atlas Copco ZR 75 VSD+",
    "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/zr-series-vsd-(-)-/ZR75%20VSD%2b%20-%208.6%20bar%20-%20125%20psi.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Atlas Copco ZR 75 VSD+. 12 530,203 L/min déclarés à 8,618 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : ZR 75 VSD+-10.4.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,618 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 12 530,203 L/min déclarés à 8,618 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
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
      "value": "ZR 75 VSD+-10.4",
      "evidenceIds": [
        "october5-atlas-cagi-163-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8,618 bar (125 psig publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-163-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-atlas-cagi-163-p1"
      ]
    },
    {
      "label": "FAD maximal déclaré à 8,618 bar",
      "value": "12 530,203 L/min (442,5 cfm publiés)",
      "evidenceIds": [
        "october5-atlas-cagi-163-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Drive Motor Nominal Rating",
      "value": "4 Drive Motor Nominal Rating 53.6 & 53.6 hp",
      "evidenceIds": [
        "october5-atlas-cagi-163-p1"
      ]
    },
    {
      "label": "FAD minimal déclaré à 8,618 bar",
      "value": "4 694,933 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-atlas-cagi-163-p1",
        "october5-nist-conversions-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-atlas-cagi-163-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-atlas-cagi-163-p1",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/cagi-data-sheets/zr-series-vsd-(-)-/ZR75%20VSD%2b%20-%208.6%20bar%20-%20125%20psi.pdf#page=1",
      "sourceLabel": "Atlas Copco, fiche constructeur CAGI, ZR 75 VSD+-10.4, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 19ff6736ad787b69e661536bae6ba10c4849617acb05933d1b108a63fa043023 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october5-atlas-cagi-163-p1"
    ],
    "model": [
      "october5-atlas-cagi-163-p1"
    ],
    "maxPressureBar": [
      "october5-atlas-cagi-163-p1",
      "october5-nist-conversions-p1"
    ],
    "fadCurve": [
      "october5-atlas-cagi-163-p1",
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
