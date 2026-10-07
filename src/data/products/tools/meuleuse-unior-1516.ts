import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-unior-1516",
  "slug": "meuleuse-unior-1516",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Unior 1516",
  "brand": "Unior",
  "model": "1516",
  "mpn": "617731",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "unior-1516",
    "label": "1516",
    "distinguishingAttributes": {
      "Longueur publiée (mm)": "155",
      "Épaisseur publiée (mm)": "60",
      "Masse publiée (g)": "390",
      "Vitesse à vide déclarée": "25000 revolution per minutes"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-unior-1516.svg",
    "alt": "Repères techniques : Unior 1516",
    "sourceUrl": "https://uniortools.com/eng/product/1516-pneumatic-die-grinder?fromcat=941803#62085",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Unior 1516. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 1516 (617731) : Pneumatic die grinder - 1516. Longueur publiée (mm): 155; Épaisseur publiée (mm): 60; Masse publiée (g): 390.",
    "verifiedFacts": [
      "Longueur publiée (mm) : 155.",
      "Épaisseur publiée (mm) : 60.",
      "Masse publiée (g) : 390.",
      "Vitesse à vide déclarée : 25000 revolution per minutes.",
      "Consommation publiée dans son unité originale : air consumption 113 l/min.",
      "Pression dans la source : maximum air pressure: 6,2 Bar."
    ],
    "limitations": [
      "Le fabricant indique une consommation d’air sans préciser le régime de mesure : à vide, en charge ou moyenne de cycle. Aucun débit chargé ni facteur de conversion en demande de travail n’est déduit.",
      "La colonne Code est conservée comme MPN observé ; le modèle reste l’identifiant commercial séparé.",
      "La pression de 6.2 bar est uniquement un maximum publié. Aucun point de pression de fonctionnement ou de mesure n’est créé à partir de cette limite ; la compatibilité reste insufficient_data.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Longueur publiée (mm)",
      "value": "155",
      "evidenceIds": [
        "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
      ]
    },
    {
      "label": "Épaisseur publiée (mm)",
      "value": "60",
      "evidenceIds": [
        "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
      ]
    },
    {
      "label": "Masse publiée (g)",
      "value": "390",
      "evidenceIds": [
        "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
      ]
    },
    {
      "label": "Vitesse à vide déclarée",
      "value": "25000 revolution per minutes",
      "evidenceIds": [
        "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "air consumption 113 l/min",
      "evidenceIds": [
        "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "maximum air pressure: 6,2 Bar",
      "evidenceIds": [
        "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731",
      "sourceUrl": "https://uniortools.com/eng/product/1516-pneumatic-die-grinder?fromcat=941803#62085",
      "sourceLabel": "Unior, fiche fabricant Pneumatic die grinder - 1516, Fiche 1516, Product features et tableau Code 617731",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 42f6b445121ccca6ab0ffb8f7a8fea422afed8bf1250d7d99626e115f5ddf3f5. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
    ],
    "demandExplanation": [
      "october7-tools-unior-product-21-fiche-1516-product-features-et-tableau-code-617731"
    ]
  },
  "notes": [
    "1516 (617731) : Pneumatic die grinder - 1516. Longueur publiée (mm): 155; Épaisseur publiée (mm): 60; Masse publiée (g): 390.",
    "Le fabricant indique une consommation d’air sans préciser le régime de mesure : à vide, en charge ou moyenne de cycle. Aucun débit chargé ni facteur de conversion en demande de travail n’est déduit.",
    "La colonne Code est conservée comme MPN observé ; le modèle reste l’identifiant commercial séparé.",
    "La pression de 6.2 bar est uniquement un maximum publié. Aucun point de pression de fonctionnement ou de mesure n’est créé à partir de cette limite ; la compatibilité reste insufficient_data.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
