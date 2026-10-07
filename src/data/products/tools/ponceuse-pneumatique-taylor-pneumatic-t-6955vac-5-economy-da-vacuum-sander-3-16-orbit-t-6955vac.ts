import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-pneumatique-taylor-pneumatic-t-6955vac-5-economy-da-vacuum-sander-3-16-orbit-t-6955vac",
  "slug": "ponceuse-pneumatique-taylor-pneumatic-t-6955vac-5-economy-da-vacuum-sander-3-16-orbit-t-6955vac",
  "categoryId": "ponceuse-pneumatique",
  "category": "ponceuse-pneumatique",
  "label": "Taylor Pneumatic T-6955VAC 5\" Economy DA  Vacuum Sander 3/16\" Orbit (réf. T-6955VAC)",
  "brand": "Taylor Pneumatic",
  "model": "T-6955VAC 5\" Economy DA  Vacuum Sander 3/16\" Orbit",
  "mpn": "T-6955VAC",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-pneumatique-taylor-pneumatic-t-6955vac-5-economy-da-vacuum-sander-3-16-orbit-t-6955vac.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-6955VAC 5\" Economy DA  Vacuum Sander 3/16\" Orbit (réf. T-6955VAC)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-6955-5-economy-da-vacuum-sander-3-16-orbit",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-6955vac-5-economy-da-vacuum-sander-3-16-orbit",
    "label": "Référence T-6955VAC",
    "distinguishingAttributes": {
      "reference": "T-6955VAC",
      "Free Speed RPM": "11,000",
      "Pad Size inch": "5\""
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-6955VAC 5\" Economy DA  Vacuum Sander 3/16\" Orbit (réf. T-6955VAC). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Free Speed RPM : 11,000.",
      "Pad Size inch : 5\".",
      "Weight lbs. : 2.5.",
      "Orbit DIA. inch : 3/16\".",
      "Spindle Size : 5/16-24.",
      "Air Pressure : 90 PSI Max."
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
      "label": "Free Speed RPM",
      "value": "11,000",
      "evidenceIds": [
        "october4-tools-taylor-product-051-p1"
      ]
    },
    {
      "label": "Pad Size inch",
      "value": "5\"",
      "evidenceIds": [
        "october4-tools-taylor-product-051-p1"
      ]
    },
    {
      "label": "Weight lbs.",
      "value": "2.5",
      "evidenceIds": [
        "october4-tools-taylor-product-051-p1"
      ]
    },
    {
      "label": "Orbit DIA. inch",
      "value": "3/16\"",
      "evidenceIds": [
        "october4-tools-taylor-product-051-p1"
      ]
    },
    {
      "label": "Spindle Size",
      "value": "5/16-24",
      "evidenceIds": [
        "october4-tools-taylor-product-051-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI Max",
      "evidenceIds": [
        "october4-tools-taylor-product-051-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-051-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-051-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-6955-5-economy-da-vacuum-sander-3-16-orbit",
      "sourceLabel": "Taylor Pneumatic : T-6955VAC 5\" Economy DA  Vacuum Sander 3/16\" Orbit",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 f94731a102c72518e42256ba46827e658d794dc5afdbb86e3fdecefdbb759d24. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-051-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-051-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-051-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
