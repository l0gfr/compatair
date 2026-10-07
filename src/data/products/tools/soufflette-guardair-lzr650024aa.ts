import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-guardair-lzr650024aa",
  "slug": "soufflette-guardair-lzr650024aa",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Guardair LZR650024AA",
  "brand": "Guardair",
  "model": "LZR650024AA",
  "mpn": "LZR650024AA",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.894757,
    "typical": 6.894757,
    "max": 6.894757
  },
  "airflowLpm": {
    "min": 424.753,
    "typical": 424.753,
    "max": 424.753
  },
  "confidence": "B",
  "image": {
    "src": "/images/products/soufflette-guardair-lzr650024aa.svg",
    "alt": "Repères techniques : Guardair LZR650024AA",
    "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "guardair-lzr650024aa",
    "label": "Référence LZR650024AA",
    "distinguishingAttributes": {
      "reference": "LZR650024AA",
      "Description constructeur": "With 24\" Extension",
      "Entrée d’air FNPT": "1/4 in"
    }
  },
  "editorial": {
    "overview": "Guardair LZR650024AA. Demande au point documenté : 424,753 L/min à 6,895 bar.",
    "verifiedFacts": [
      "Description constructeur : With 24\" Extension.",
      "Entrée d’air FNPT : 1/4 in.",
      "Dimensions L × l × H : 27 x 0.9 x 5.1 in.",
      "Masse publiée : 0.7 lb."
    ],
    "limitations": [
      "Le point constructeur est utilisé sans facteur de marche implicite ; aucune consommation à une autre pression n’est calculée.",
      "Débit d’alimentation à 100 psi (conversion SI affichée en bar) ; aucun débit à une autre pression n’est extrapolé.",
      "La table actuelle donne Air Usage(cfm), distinct du débit d’air ambiant entraîné par le Venturi.",
      "Aucun facteur de marche ni équivalence en puissance moteur n’est introduit dans le verdict.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Description constructeur",
      "value": "With 24\" Extension",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p28"
      ]
    },
    {
      "label": "Entrée d’air FNPT",
      "value": "1/4 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p28"
      ]
    },
    {
      "label": "Dimensions L × l × H",
      "value": "27 x 0.9 x 5.1 in",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p28"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "0.7 lb",
      "evidenceIds": [
        "october4-tools-guardair-catalog-p28"
      ]
    },
    {
      "label": "Consommation dans son unité originale",
      "value": "15 cfm",
      "evidenceIds": [
        "october4-tools-guardair-tech-current-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Note: All parameters measured at 100 psi inlet pressure.",
      "evidenceIds": [
        "october4-tools-guardair-tech-current-p1"
      ]
    },
    {
      "label": "Pression convertie en unité SI",
      "value": "100 psi ≈ 6,895 bar ; unité originale conservée",
      "evidenceIds": [
        "october4-tools-guardair-tech-current-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-guardair-catalog-p28",
      "sourceUrl": "https://cdn.shopify.com/s/files/1/2656/7586/files/Guardair_2024-25_Cat_v3_RGB.pdf#page=28",
      "sourceLabel": "Guardair : Safety Air Guns & Pneumatic Vacuums, catalogue 2024/25, page PDF 28",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 4eeb040d12835bc8cf95ad4c3cc055ba111a75cb75b1ba5e234080072caea265. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-guardair-tech-current-p1",
      "sourceUrl": "https://guardair.com/pages/tech-specs",
      "sourceLabel": "Guardair : Technical Specifications, convention de débit à 100 psi",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 45840892b6ec53836101259f9092073451902713eb1124df48264f6bce9ff713. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-guardair-catalog-p28"
    ],
    "workingPressureBar": [
      "october4-tools-guardair-tech-current-p1"
    ],
    "airflowLpm": [
      "october4-tools-guardair-tech-current-p1"
    ]
  },
  "notes": [
    "Demande au point documenté : 424,753 L/min à 6,895 bar."
  ]
};

export default product;
