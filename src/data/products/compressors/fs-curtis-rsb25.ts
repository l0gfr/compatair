import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "fs-curtis-rsb25",
  "slug": "fs-curtis-rsb25",
  "brand": "FS-Curtis",
  "model": "RSB25",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "fs-curtis-rsb25",
    "label": "RSB25",
    "distinguishingAttributes": {
      "équipement": "RSB25",
      "pressionDeConfiguration": "6,895 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 6.895,
  "fadCurve": [
    {
      "pressureBar": 6.895,
      "litersPerMinute": 3313.071
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/fs-curtis-rsb25.svg",
    "alt": "Repères techniques : FS-Curtis RSB25",
    "sourceUrl": "https://us.fscurtis.com/wp-content/uploads/page/65/rsb25-100_072021.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "FS-Curtis RSB25. 3 313,071 L/min déclarés à 6,895 bar. Configuration constructeur : RSB25.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 6,895 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 313,071 L/min déclarés à 6,895 bar."
    ],
    "limitations": [
      "La fiche indique ACFM aux conditions d’entrée, mesuré au raccord de sortie selon ISO 1217. La conversion d’unité conserve ces conditions ; il ne s’agit pas d’un volume standardisé universel.",
      "Fiche déclarative constructeur au format CAGI : aucune vérification indépendante de cette référence n’est affirmée par CompatAir.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "RSB25",
      "evidenceIds": [
        "october7-fsc-rsb25-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "6,895 bar (100 psig publiés)",
      "evidenceIds": [
        "october7-fsc-rsb25-p1",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-fsc-rsb25-p1"
      ]
    },
    {
      "label": "Air livré à 6,895 bar",
      "value": "3 313,071 L/min (117 cfm publiés)",
      "evidenceIds": [
        "october7-fsc-rsb25-p1",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance nominale du moteur, unité publiée",
      "value": "6 DriveMotorNominalRating 25 hp",
      "evidenceIds": [
        "october7-fsc-rsb25-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-fsc-rsb25-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-fsc-rsb25-p1",
      "sourceUrl": "https://us.fscurtis.com/wp-content/uploads/page/65/rsb25-100_072021.pdf#page=1",
      "sourceLabel": "FS-Curtis, fiche technique constructeur au format CAGI, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 3378e25a8a1544ca3dbbbb89a5962a6babd46403ce1bb37ccf29826fda39fb1c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october7-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, facteurs de conversion officiels, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 99092c3ae6a5030fdb6901f601cb87d99c07d62f31a164a4a0b6786847c5cc6c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-fsc-rsb25-p1"
    ],
    "maxPressureBar": [
      "october7-fsc-rsb25-p1",
      "october7-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october7-fsc-rsb25-p1"
    ],
    "fadCurve": [
      "october7-fsc-rsb25-p1",
      "october7-nist-conversions-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
