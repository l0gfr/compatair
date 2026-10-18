import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-gav-z3000",
  "slug": "pistolet-peinture-hvlp-gav-z3000",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "GAV Z3000",
  "brand": "GAV",
  "model": "Z3000",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-gav-z3000.svg",
    "alt": "Repères techniques : GAV Z3000",
    "sourceUrl": "https://gav.it/wp-content/uploads/GAV-Catalogue-2026_compressed.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "gav-z3000",
    "label": "Modèle Z3000, SKU non établi",
    "distinguishingAttributes": {
      "manufacturerModel": "Z3000",
      "Capacité du godet": "600 cc",
      "Pression de service publiée": "3 bar"
    }
  },
  "editorial": {
    "overview": "GAV Z3000 HVLP : pistolet gravitaire de 600 cm³ dont le catalogue publie 400 Nl/min à 3 bar. Le RECORD 2200 voisin est associé à une autre plage de consommation et de pression ; les chiffres ne constituent pas un essai comparatif au même point.",
    "verifiedFacts": [
      "Capacité du godet : 600 cc.",
      "Pression de service publiée : 3 bar."
    ],
    "limitations": [
      "Les conditions de référence du volume normalisé et le régime de pulvérisation ne sont pas détaillés ; aucun besoin FAD n’est déduit des 400 Nl/min.",
      "Les références de jeux de buses RZ désignent des accessoires ; elles ne remplacent pas l’identité du pistolet complet."
    ]
  },
  "specifications": [
    {
      "label": "Capacité du godet",
      "value": "600 cc",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p13"
      ]
    },
    {
      "label": "Pression de service publiée",
      "value": "3 bar",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p13"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "400 Nl/min",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p13"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "3 bar",
      "evidenceIds": [
        "october4-tools-gav-catalog-2026-p13"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-gav-catalog-2026-p13",
      "sourceUrl": "https://gav.it/wp-content/uploads/GAV-Catalogue-2026_compressed.pdf#page=13",
      "sourceLabel": "GAV : catalogue2026, caractéristiques des pistolets complets, page PDF 13",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 a45d88b0aa85921e49fa7dbbbce150d1795c6e31f74934683fca391d51030e1d. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4-tools-gav-catalog-2026-p13"
    ],
    "workingPressureBar": [
      "october4-tools-gav-catalog-2026-p13"
    ],
    "demandExplanation": [
      "october4-tools-gav-catalog-2026-p13"
    ]
  },
  "notes": [
    "Les caractéristiques de cette référence sont documentées ; la consommation avec régime, unité et pression utilisables reste insuffisante pour conclure."
  ]
};

export default product;
