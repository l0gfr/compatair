const product = {
  "id": "sullair-ls-200s-200",
  "slug": "sullair-ls-200s-200",
  "brand": "Sullair",
  "model": "LS-200S-200",
  "variant": {
    "familyId": "sullair-ls-200s-200",
    "label": "Compresseur single-stage à vis à vitesse fixe, configuration 50 Hz",
    "distinguishingAttributes": {
      "équipement": "Compresseur single-stage à vis à vitesse fixe, configuration 50 Hz",
      "pressionDeConfiguration": "12,066 bar",
      "cuve": "Non documentée",
      "fréquence": "50 Hz"
    }
  },
  "maxPressureBar": 12.066,
  "fadCurve": [
    {
      "pressureBar": 12.066,
      "litersPerMinute": 20529.712
    }
  ],
  "dutyCycle": 1,
  "powerKw": 149,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/sullair-ls-200s-200.svg",
    "alt": "Repères techniques : Sullair LS-200S-200",
    "sourceUrl": "https://europe.sullair.com/sites/default/files/2018-06/LIT%20Sullair%20Single-Stage%20Brochure_SAPSS200350201803-3_EN.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
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
      "value": "12,066 bar (175 psig publiés)",
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
      "label": "Air livré à 12,066 bar",
      "value": "20 529,712 L/min (725 cfm publiés)",
      "evidenceIds": [
        "october4c-sullair-single-stage-p8",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "149 kW",
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
    }
  ],
  "editorial": {
    "overview": "Sullair LS-200S-200. 20 529,712 L/min déclarés à 12,066 bar. Configuration constructeur : Compresseur single-stage à vis à vitesse fixe, configuration 50 Hz.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 12,066 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 20 529,712 L/min déclarés à 12,066 bar."
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
    }
  ],
  "fieldSources": {
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
