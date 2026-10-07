import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "meuleuse-unior-1516a",
  "slug": "meuleuse-unior-1516a",
  "categoryId": "meuleuse",
  "category": "meuleuse",
  "label": "Unior 1516A",
  "brand": "Unior",
  "model": "1516A",
  "mpn": "617732",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "unior-1516a",
    "label": "1516A",
    "distinguishingAttributes": {
      "Longueur publiée (mm)": "162",
      "Épaisseur publiée (mm)": "76",
      "Masse publiée (g)": "740",
      "Vitesse à vide déclarée": "20000 revolution per minutes"
    }
  },
  "image": {
    "src": "/images/products/meuleuse-unior-1516a.svg",
    "alt": "Repères techniques : Unior 1516A",
    "sourceUrl": "https://uniortools.com/eng/product/1516A-pneumatic-angle-die-grinder?fromcat=941803#62111",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Unior 1516A. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 1516A (617732) : Pneumatic angle die grinder - 1516A. Longueur publiée (mm): 162; Épaisseur publiée (mm): 76; Masse publiée (g): 740.",
    "verifiedFacts": [
      "Longueur publiée (mm) : 162.",
      "Épaisseur publiée (mm) : 76.",
      "Masse publiée (g) : 740.",
      "Vitesse à vide déclarée : 20000 revolution per minutes.",
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
      "value": "162",
      "evidenceIds": [
        "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
      ]
    },
    {
      "label": "Épaisseur publiée (mm)",
      "value": "76",
      "evidenceIds": [
        "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
      ]
    },
    {
      "label": "Masse publiée (g)",
      "value": "740",
      "evidenceIds": [
        "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
      ]
    },
    {
      "label": "Vitesse à vide déclarée",
      "value": "20000 revolution per minutes",
      "evidenceIds": [
        "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "air consumption 113 l/min",
      "evidenceIds": [
        "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "maximum air pressure: 6,2 Bar",
      "evidenceIds": [
        "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732",
      "sourceUrl": "https://uniortools.com/eng/product/1516A-pneumatic-angle-die-grinder?fromcat=941803#62111",
      "sourceLabel": "Unior, fiche fabricant Pneumatic angle die grinder - 1516A, Fiche 1516A, Product features et tableau Code 617732",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 846dbc47a7807a30d3b3d93cd796506dba57d5866254f0cf07d6aeee38a2c7b6. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
    ],
    "demandExplanation": [
      "october7-tools-unior-product-22-fiche-1516a-product-features-et-tableau-code-617732"
    ]
  },
  "notes": [
    "1516A (617732) : Pneumatic angle die grinder - 1516A. Longueur publiée (mm): 162; Épaisseur publiée (mm): 76; Masse publiée (g): 740.",
    "Le fabricant indique une consommation d’air sans préciser le régime de mesure : à vide, en charge ou moyenne de cycle. Aucun débit chargé ni facteur de conversion en demande de travail n’est déduit.",
    "La colonne Code est conservée comme MPN observé ; le modèle reste l’identifiant commercial séparé.",
    "La pression de 6.2 bar est uniquement un maximum publié. Aucun point de pression de fonctionnement ou de mesure n’est créé à partir de cette limite ; la compatibilité reste insufficient_data.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
