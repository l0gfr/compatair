import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-taylor-pneumatic-t-7010an-3-8-x-13-belt-sander-t-7010an",
  "slug": "ponceuse-pneumatique-taylor-pneumatic-t-7010an-3-8-x-13-belt-sander-t-7010an",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "Taylor Pneumatic T-7010AN 3/8\" x 13\" Belt Sander (réf. T-7010AN)",
  "brand": "Taylor Pneumatic",
  "model": "T-7010AN 3/8\" x 13\" Belt Sander",
  "mpn": "T-7010AN",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-pneumatique-taylor-pneumatic-t-7010an-3-8-x-13-belt-sander-t-7010an.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7010AN 3/8\" x 13\" Belt Sander (réf. T-7010AN)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7010an-3-8-x-13-belt-sander",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7010an-3-8-x-13-belt-sander",
    "label": "Référence T-7010AN",
    "distinguishingAttributes": {
      "reference": "T-7010AN",
      "RPM": "16,000",
      "HP": ".37"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7010AN 3/8\" x 13\" Belt Sander (réf. T-7010AN). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "RPM : 16,000.",
      "HP : .37.",
      "Belt Size : 3/8\" x 13\".",
      "Average CFM : 5.",
      "Air Pressure : 90 PSI Max.",
      "Weight : 1.7 lbs.."
    ],
    "limitations": [
      "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
      "Les colonnes Average Air Cons. et Air Cons. @ Load sont distinguées dans la fiche, mais l’unité et le point de pression de mesure ne sont pas explicités.",
      "Air Pressure 90 PSI Max est un plafond de service ; il ne devient pas une pression de mesure par déduction.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "RPM",
      "value": "16,000",
      "evidenceIds": [
        "october4-tools-taylor-product-056-p1"
      ]
    },
    {
      "label": "HP",
      "value": ".37",
      "evidenceIds": [
        "october4-tools-taylor-product-056-p1"
      ]
    },
    {
      "label": "Belt Size",
      "value": "3/8\" x 13\"",
      "evidenceIds": [
        "october4-tools-taylor-product-056-p1"
      ]
    },
    {
      "label": "Average CFM",
      "value": "5",
      "evidenceIds": [
        "october4-tools-taylor-product-056-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-056-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "1.7 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-056-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-056-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-056-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7010an-3-8-x-13-belt-sander",
      "sourceLabel": "Taylor Pneumatic : T-7010AN 3/8\" x 13\" Belt Sander",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 35fcc0ffc94a87fa8b267aee5acdd70b28bbb707a647f83d89f1a6c998cfc6fe. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-056-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-056-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-056-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
