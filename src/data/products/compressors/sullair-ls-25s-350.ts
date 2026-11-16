import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "sullair-ls-25s-350",
  "slug": "sullair-ls-25s-350",
  "brand": "Sullair",
  "model": "LS-25S-350",
  "variant": {
    "familyId": "sullair-ls-25s-350",
    "label": "Compresseur single-stage à vis à vitesse fixe, configuration 50 Hz",
    "distinguishingAttributes": {
      "équipement": "Compresseur single-stage à vis à vitesse fixe, configuration 50 Hz",
      "pressionDeConfiguration": "8,618 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 8.618,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 40719.622
    }
  ],
  "dutyCycle": 1,
  "powerKw": 261,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/sullair-ls-25s-350-technical-20261116-followup.svg",
    "alt": "Repères techniques : Sullair LS-25S-350",
    "sourceUrl": "https://europe.sullair.com/sites/default/files/2018-06/LIT%20Sullair%20Single-Stage%20Brochure_SAPSS200350201803-3_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur single-stage à vis à vitesse fixe, configuration 50 Hz",
      "evidenceIds": [
        "october4c-sullair-single-stage-p8"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8,618 bar (125 psig publiés)",
      "evidenceIds": [
        "october4c-sullair-single-stage-p8",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-sullair-single-stage-p8"
      ]
    },
    {
      "label": "Air livré à 8,618 bar",
      "value": "40 719,622 L/min (1 438 cfm publiés)",
      "evidenceIds": [
        "october4c-sullair-single-stage-p8",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "261 kW",
      "evidenceIds": [
        "october4c-sullair-single-stage-p8"
      ]
    },
    {
      "label": "Cycle de service déclaré",
      "value": "100 %",
      "evidenceIds": [
        "october4c-sullair-single-stage-p3"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "50 Hz",
      "evidenceIds": [
        "october4c-sullair-single-stage-p8"
      ]
    },
    {
      "label": "Point original",
      "value": "1438 acfm à125 psig ; colonne50 Hz fixe",
      "evidenceIds": [
        "review:2026-11-16-technical:sullair-ls-25s-350:0"
      ]
    },
    {
      "label": "Dimensions et masse",
      "value": "3911 × 1981 × 2184 mm ;5039 kg",
      "evidenceIds": [
        "review:2026-11-16-technical:sullair-ls-25s-350:0"
      ]
    },
    {
      "label": "Référence de mesure",
      "value": "CAGI/PNEUROP PN2CPTC2 ; ISO1217 annexe C",
      "evidenceIds": [
        "review:2026-11-16-technical:sullair-ls-25s-350:0"
      ]
    }
  ],
  "editorial": {
    "overview": "La LS-25S-350 fixe50 Hz publie1438 acfm à125 psig avec261 kW ; la LS-25S-300 à50 Hz publie1305 acfm à150 psig pour224 kW. Le choix doit conserver fréquence et pression propres à chaque ligne. La documentation du groupe prévoit un service continu.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,618 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 40 719,622 L/min déclarés à 8,618 bar.",
      "Point original : 1438 acfm à125 psig ; colonne50 Hz fixe.",
      "Dimensions et masse : 3911 × 1981 × 2184 mm ;5039 kg.",
      "Référence de mesure : CAGI/PNEUROP PN2CPTC2 ; ISO1217 annexe C."
    ],
    "limitations": [
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4c-sullair-single-stage-p8",
      "sourceUrl": "https://europe.sullair.com/sites/default/files/2018-06/LIT%20Sullair%20Single-Stage%20Brochure_SAPSS200350201803-3_EN.pdf#page=8",
      "sourceLabel": "Sullair, catalogue single stage, page PDF 8",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 8320fc427e9a475c0df0a55f3c7acfc927b00528f7da4464c2fb512220387f14 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide to the SI, appendix B.8, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 057d9641caab13e6632aa7f70eeb1b76d676ae3e131b3e6ed73b8bf6ca0c28c3 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-sullair-single-stage-p3",
      "sourceUrl": "https://europe.sullair.com/sites/default/files/2018-06/LIT%20Sullair%20Single-Stage%20Brochure_SAPSS200350201803-3_EN.pdf#page=3",
      "sourceLabel": "Sullair, catalogue single stage, page PDF 3",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 8320fc427e9a475c0df0a55f3c7acfc927b00528f7da4464c2fb512220387f14 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-technical:sullair-ls-25s-350:0",
      "sourceUrl": "https://europe.sullair.com/sites/default/files/2018-06/LIT%20Sullair%20Single-Stage%20Brochure_SAPSS200350201803-3_EN.pdf",
      "sourceLabel": "Sullair, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "La LS-25S-350 fixe50 Hz publie1438 acfm à125 psig avec261 kW ; la LS-25S-300 à50 Hz publie1305 acfm à150 psig pour224 kW. Le choix doit conserver fréquence et pression propres à chaque ligne. La documentation du groupe prévoit un service continu. GET complet SHA-256 8320fc427e9a475c0df0a55f3c7acfc927b00528f7da4464c2fb512220387f14. Pages PDF lues : 3, 8."
    },
    {
      "id": "review:2026-11-16-technical:sullair-ls-25s-350:1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "Sullair, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "La LS-25S-350 fixe50 Hz publie1438 acfm à125 psig avec261 kW ; la LS-25S-300 à50 Hz publie1305 acfm à150 psig pour224 kW. Le choix doit conserver fréquence et pression propres à chaque ligne. La documentation du groupe prévoit un service continu. GET complet SHA-256 751228aea7ee7b2d83bb7af67071a1647374ae710e5d02c44f45cee1e59c4546. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-sullair-single-stage-p8"
    ],
    "model": [
      "october4c-sullair-single-stage-p8"
    ],
    "maxPressureBar": [
      "october4c-sullair-single-stage-p8",
      "october4c-nist-conversions-p1"
    ],
    "fadCurve": [
      "october4c-sullair-single-stage-p8",
      "october4c-nist-conversions-p1"
    ],
    "powerKw": [
      "october4c-sullair-single-stage-p8"
    ],
    "dutyCycle": [
      "october4c-sullair-single-stage-p3"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
