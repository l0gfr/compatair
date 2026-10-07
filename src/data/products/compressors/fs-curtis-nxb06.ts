import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "fs-curtis-nxb06",
  "slug": "fs-curtis-nxb06",
  "brand": "FS-Curtis",
  "model": "NXB06",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "fs-curtis-nxb06",
    "label": "NXB06",
    "distinguishingAttributes": {
      "équipement": "NXB06",
      "pressionDeConfiguration": "8,618 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.618,
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 742.184
    }
  ],
  "dutyCycle": 1,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/fs-curtis-nxb06.svg",
    "alt": "Repères techniques : FS-Curtis NXB06",
    "sourceUrl": "https://us.fscurtis.com/wp-content/uploads/page/65/nxb06-125_072021.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "FS-Curtis NXB06. 742,184 L/min déclarés à 8,618 bar. Configuration constructeur : NXB06.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,618 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 742,184 L/min déclarés à 8,618 bar."
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
      "value": "NXB06",
      "evidenceIds": [
        "october7-fsc-nxb06-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8,618 bar (125 psig publiés)",
      "evidenceIds": [
        "october7-fsc-nxb06-p1",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-fsc-nxb06-p1"
      ]
    },
    {
      "label": "Air livré à 8,618 bar",
      "value": "742,184 L/min (26,21 cfm publiés)",
      "evidenceIds": [
        "october7-fsc-nxb06-p1",
        "october7-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance nominale du moteur, unité publiée",
      "value": "6 Drive Motor NominalRating 7.5 hp",
      "evidenceIds": [
        "october7-fsc-nxb06-p1"
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
        "october7-fsc-nxb06-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-fsc-nxb06-p1",
      "sourceUrl": "https://us.fscurtis.com/wp-content/uploads/page/65/nxb06-125_072021.pdf#page=1",
      "sourceLabel": "FS-Curtis, fiche technique constructeur au format CAGI, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 9b5ccf4a93dd0d049c4e35fbd9dac48f981fc50d40edf46b7ed897bac333924d de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
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
      "october7-fsc-nxb06-p1"
    ],
    "maxPressureBar": [
      "october7-fsc-nxb06-p1",
      "october7-nist-conversions-p1"
    ],
    "maxPressureBasis": [
      "october7-fsc-nxb06-p1"
    ],
    "fadCurve": [
      "october7-fsc-nxb06-p1",
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
