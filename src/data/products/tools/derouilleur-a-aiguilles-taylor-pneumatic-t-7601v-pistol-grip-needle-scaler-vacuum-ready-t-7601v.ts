import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "derouilleur-a-aiguilles-taylor-pneumatic-t-7601v-pistol-grip-needle-scaler-vacuum-ready-t-7601v",
  "slug": "derouilleur-a-aiguilles-taylor-pneumatic-t-7601v-pistol-grip-needle-scaler-vacuum-ready-t-7601v",
  "categoryId": "derouilleur-a-aiguilles",
  "category": "derouilleur-a-aiguilles",
  "label": "Taylor Pneumatic T-7601V Pistol Grip Needle Scaler Vacuum Ready (réf. T-7601V)",
  "brand": "Taylor Pneumatic",
  "model": "T-7601V Pistol Grip Needle Scaler Vacuum Ready",
  "mpn": "T-7601V",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
  "confidence": "B",
  "image": {
    "src": "/images/products/derouilleur-a-aiguilles-taylor-pneumatic-t-7601v-pistol-grip-needle-scaler-vacuum-ready-t-7601v.svg",
    "alt": "Repères techniques : Taylor Pneumatic T-7601V Pistol Grip Needle Scaler Vacuum Ready (réf. T-7601V)",
    "sourceUrl": "https://taylorpneumatic.com/products/t-7601v-pistol-grip-needle-scaler-vacuum-ready",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "taylor-pneumatic-t-7601v-pistol-grip-needle-scaler-vacuum-ready",
    "label": "Référence T-7601V",
    "distinguishingAttributes": {
      "reference": "T-7601V",
      "Blows per Minute": "3000",
      "Needle Capacity": "19 x 3mm"
    }
  },
  "editorial": {
    "overview": "Taylor Pneumatic T-7601V Pistol Grip Needle Scaler Vacuum Ready (réf. T-7601V). La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure.",
    "verifiedFacts": [
      "Blows per Minute : 3000.",
      "Needle Capacity : 19 x 3mm.",
      "Length : 10\".",
      "Weight : 5.7 lbs..",
      "Air Pressure : 90 PSI MAX.",
      "Air Inlet : 1/4\" NPT."
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
      "label": "Blows per Minute",
      "value": "3000",
      "evidenceIds": [
        "october4-tools-taylor-product-098-p1"
      ]
    },
    {
      "label": "Needle Capacity",
      "value": "19 x 3mm",
      "evidenceIds": [
        "october4-tools-taylor-product-098-p1"
      ]
    },
    {
      "label": "Length",
      "value": "10\"",
      "evidenceIds": [
        "october4-tools-taylor-product-098-p1"
      ]
    },
    {
      "label": "Weight",
      "value": "5.7 lbs.",
      "evidenceIds": [
        "october4-tools-taylor-product-098-p1"
      ]
    },
    {
      "label": "Air Pressure",
      "value": "90 PSI MAX",
      "evidenceIds": [
        "october4-tools-taylor-product-098-p1"
      ]
    },
    {
      "label": "Air Inlet",
      "value": "1/4\" NPT",
      "evidenceIds": [
        "october4-tools-taylor-product-098-p1"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Pression associée à la consommation non indiquée.",
      "evidenceIds": [
        "october4-tools-taylor-product-098-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-taylor-product-098-p1",
      "sourceUrl": "https://taylorpneumatic.com/products/t-7601v-pistol-grip-needle-scaler-vacuum-ready",
      "sourceLabel": "Taylor Pneumatic : T-7601V Pistol Grip Needle Scaler Vacuum Ready",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 92ad60f80e1b0e864ba07e681518c7207a5c121b3025fc55a059c629b01c31a9. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-taylor-product-098-p1"
    ],
    "workingPressureBar": [
      "october4-tools-taylor-product-098-p1"
    ],
    "demandExplanation": [
      "october4-tools-taylor-product-098-p1"
    ]
  },
  "notes": [
    "La fiche distingue Average Air Cons. et Air Cons. @ Load, mais l’unité et la pression de mesure ne sont pas explicites. Le plafond 90 PSI ne devient pas un point de mesure."
  ]
};

export default product;
