import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "soufflette-unior-1508a",
  "slug": "soufflette-unior-1508a",
  "categoryId": "soufflette",
  "category": "soufflette",
  "label": "Unior 1508A",
  "brand": "Unior",
  "model": "1508A",
  "mpn": "617767",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "unior-1508a",
    "label": "1508A",
    "distinguishingAttributes": {
      "Longueur publiée (mm)": "260",
      "Largeur publiée (mm)": "135",
      "Diamètre publié (mm)": "6",
      "Masse publiée (g)": "153"
    }
  },
  "image": {
    "src": "/images/products/soufflette-unior-1508a.svg",
    "alt": "Repères techniques : Unior 1508A",
    "sourceUrl": "https://uniortools.com/eng/product/1508A-pneumatic-duster?fromcat=941807#62134",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Unior 1508A. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 1508A (617767) : Pneumatic duster - 1508A. Longueur publiée (mm): 260; Largeur publiée (mm): 135; Diamètre publié (mm): 6.",
    "verifiedFacts": [
      "Longueur publiée (mm) : 260.",
      "Largeur publiée (mm) : 135.",
      "Diamètre publié (mm) : 6.",
      "Masse publiée (g) : 153.",
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
      "value": "260",
      "evidenceIds": [
        "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
      ]
    },
    {
      "label": "Largeur publiée (mm)",
      "value": "135",
      "evidenceIds": [
        "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
      ]
    },
    {
      "label": "Diamètre publié (mm)",
      "value": "6",
      "evidenceIds": [
        "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
      ]
    },
    {
      "label": "Masse publiée (g)",
      "value": "153",
      "evidenceIds": [
        "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "air consumption 220 l/min",
      "evidenceIds": [
        "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "maximum air pressure: 10,9 Bar",
      "evidenceIds": [
        "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767",
      "sourceUrl": "https://uniortools.com/eng/product/1508A-pneumatic-duster?fromcat=941807#62134",
      "sourceLabel": "Unior, fiche fabricant Pneumatic duster - 1508A, Fiche 1508A, Product features et tableau Code 617767",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 641fc4aa1e367fb91ee503d98bd5ebdb3557003e16d79a930605bf15fd69fdd7. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
    ],
    "demandExplanation": [
      "october7-tools-unior-product-25-fiche-1508a-product-features-et-tableau-code-617767"
    ]
  },
  "notes": [
    "1508A (617767) : Pneumatic duster - 1508A. Longueur publiée (mm): 260; Largeur publiée (mm): 135; Diamètre publié (mm): 6.",
    "Le fabricant indique une consommation d’air sans préciser le régime de mesure : à vide, en charge ou moyenne de cycle. Aucun débit chargé ni facteur de conversion en demande de travail n’est déduit.",
    "La colonne Code est conservée comme MPN observé ; le modèle reste l’identifiant commercial séparé.",
    "La pression de 10.9 bar est uniquement un maximum publié. Aucun point de pression de fonctionnement ou de mesure n’est créé à partir de cette limite ; la compatibilité reste insufficient_data.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
