import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-unior-1508b",
  "slug": "soufflette-unior-1508b",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Unior 1508B",
  "brand": "Unior",
  "model": "1508B",
  "mpn": "617768",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "unior-1508b",
    "label": "1508B",
    "distinguishingAttributes": {
      "Longueur publiée (mm)": "420",
      "Largeur publiée (mm)": "150",
      "Diamètre publié (mm)": "6",
      "Masse publiée (g)": "178"
    }
  },
  "image": {
    "src": "/images/products/soufflette-unior-1508b.svg",
    "alt": "Repères techniques : Unior 1508B",
    "sourceUrl": "https://uniortools.com/eng/product/1508B-long-pneumatic-duster?fromcat=941807#62160",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Unior 1508B. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 1508B (617768) : Long pneumatic duster - 1508B. Longueur publiée (mm): 420; Largeur publiée (mm): 150; Diamètre publié (mm): 6.",
    "verifiedFacts": [
      "Longueur publiée (mm) : 420.",
      "Largeur publiée (mm) : 150.",
      "Diamètre publié (mm) : 6.",
      "Masse publiée (g) : 178.",
      "Consommation publiée dans son unité originale : air consumption 220 l/min.",
      "Pression dans la source : maximum air pressure: 10,9 Bar."
    ],
    "limitations": [
      "Le fabricant indique une consommation d’air sans préciser le régime de mesure : à vide, en charge ou moyenne de cycle. Aucun débit chargé ni facteur de conversion en demande de travail n’est déduit.",
      "La colonne Code est conservée comme MPN observé ; le modèle reste l’identifiant commercial séparé.",
      "La pression de 10.9 bar est uniquement un maximum publié. Aucun point de pression de fonctionnement ou de mesure n’est créé à partir de cette limite ; la compatibilité reste insufficient_data.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Longueur publiée (mm)",
      "value": "420",
      "evidenceIds": [
        "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
      ]
    },
    {
      "label": "Largeur publiée (mm)",
      "value": "150",
      "evidenceIds": [
        "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
      ]
    },
    {
      "label": "Diamètre publié (mm)",
      "value": "6",
      "evidenceIds": [
        "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
      ]
    },
    {
      "label": "Masse publiée (g)",
      "value": "178",
      "evidenceIds": [
        "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "air consumption 220 l/min",
      "evidenceIds": [
        "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "maximum air pressure: 10,9 Bar",
      "evidenceIds": [
        "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768",
      "sourceUrl": "https://uniortools.com/eng/product/1508B-long-pneumatic-duster?fromcat=941807#62160",
      "sourceLabel": "Unior, fiche fabricant Long pneumatic duster - 1508B, Fiche 1508B, Product features et tableau Code 617768",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 9eedfb637469e4d575bee00eb50ce32b6e27dfcc59ab90d176b4f1a9be15c9c1. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
    ],
    "demandExplanation": [
      "october7-tools-unior-product-26-fiche-1508b-product-features-et-tableau-code-617768"
    ]
  },
  "notes": [
    "1508B (617768) : Long pneumatic duster - 1508B. Longueur publiée (mm): 420; Largeur publiée (mm): 150; Diamètre publié (mm): 6.",
    "Le fabricant indique une consommation d’air sans préciser le régime de mesure : à vide, en charge ou moyenne de cycle. Aucun débit chargé ni facteur de conversion en demande de travail n’est déduit.",
    "La colonne Code est conservée comme MPN observé ; le modèle reste l’identifiant commercial séparé.",
    "La pression de 10.9 bar est uniquement un maximum publié. Aucun point de pression de fonctionnement ou de mesure n’est créé à partir de cette limite ; la compatibilité reste insufficient_data.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
