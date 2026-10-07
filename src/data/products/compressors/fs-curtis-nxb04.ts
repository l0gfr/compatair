import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "fs-curtis-nxb04",
  "slug": "fs-curtis-nxb04",
  "brand": "FS-Curtis",
  "model": "NXB04",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "fs-curtis-nxb04",
    "label": "NXB04",
    "distinguishingAttributes": {
      "équipement": "NXB04",
      "pressionDeConfiguration": "10,342 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 10.342,
  "fadCurve": [
    {
      "pressureBar": 10.342,
      "litersPerMinute": 436.079
    }
  ],
  "dutyCycle": 1,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/fs-curtis-nxb04.svg",
    "alt": "Repères techniques : FS-Curtis NXB04",
    "sourceUrl": "https://us.fscurtis.com/wp-content/uploads/page/65/nxb04-150_072021.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "FS-Curtis NXB04. 436,079 L/min déclarés à 10,342 bar. Configuration constructeur : NXB04.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 10,342 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 436,079 L/min déclarés à 10,342 bar."
    ],
    "limitations": [
      "La fiche indique ACFM aux conditions d’entrée, mesuré au raccord de sortie selon ISO 1217. La conversion d’unité conserve ces conditions ; il ne s’agit pas d’un volume standardisé universel.",
      "Fiche déclarative constructeur au format CAGI : aucune vérification indépendante de cette référence n’est affirmée par CompatAir.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "NXB04",
      "evidenceIds": [
        "october7-fsc-nxb04-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "10,342 bar (150 psig publiés)",
      "evidenceIds": [
        "october7-fsc-nxb04-p1",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-fsc-nxb04-p1"
      ]
    },
    {
      "label": "Air livré à 10,342 bar",
      "value": "436,079 L/min (15,4 cfm publiés)",
      "evidenceIds": [
        "october7-fsc-nxb04-p1",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance nominale du moteur, unité publiée",
      "value": "6 DriveMotorNominalRating 5.5 hp",
      "evidenceIds": [
        "october7-fsc-nxb04-p1"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october7-fsc-nxb-page-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-fsc-nxb04-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-fsc-nxb04-p1",
      "sourceUrl": "https://us.fscurtis.com/wp-content/uploads/page/65/nxb04-150_072021.pdf#page=1",
      "sourceLabel": "FS-Curtis, fiche technique constructeur au format CAGI, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 cfdda7d48c77bf8e0fee514681e0d82e8a471b391c23fb282d55c14c32a8a4a1 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
    },
    {
      "id": "october7-fsc-nxb-page-p1",
      "sourceUrl": "https://us.fscurtis.com/product/nx-series-4-15kw-5-20hp/",
      "sourceLabel": "FS-Curtis, gamme NX 4–15 kW, page constructeur, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 b0be43311c4d86d4c354f3f1f204f91213651508c911cb7051b7e2b9b9b2ddb8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-fsc-nxb04-p1"
    ],
    "maxPressureBar": [
      "october7-fsc-nxb04-p1",
      "october7-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october7-fsc-nxb04-p1"
    ],
    "fadCurve": [
      "october7-fsc-nxb04-p1",
      "october7-nist-conversions-p1"
    ],
    "dutyCycle": [
      "october7-fsc-nxb-page-p1"
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
