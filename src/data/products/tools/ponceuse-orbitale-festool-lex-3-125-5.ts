import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "ponceuse-orbitale-festool-lex-3-125-5",
  "slug": "ponceuse-orbitale-festool-lex-3-125-5",
  "categoryId": "ponceuse-orbitale",
  "category": "ponceuse-orbitale",
  "label": "Festool LEX 3 125/5",
  "brand": "Festool",
  "model": "LEX 3 125/5",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 5,
    "max": 6.2
  },
  "demandExplanation": "La notice distingue la consommation nominale sous 30 N à 6 bar du minimum d’alimentation 350 L/min à 6 bar. Ce seuil doit être appliqué comme besoin utilisateur ; le moteur ne le représente pas séparément et ne conclut pas à partir du seul débit nominal.",
  "confidence": "B",
  "image": {
    "src": "/images/products/ponceuse-orbitale-festool-lex-3-125-5.svg",
    "alt": "Repères techniques : Festool LEX 3 125/5",
    "sourceUrl": "https://media.cdn.festool.io/productmedia/Images/attachment/e6f839db-86e0-11ef-8a56-005056b3ad01.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "festool-lex-3-125-5",
    "label": "Modèle LEX 3 125/5, SKU non établi",
    "distinguishingAttributes": {
      "manufacturerModel": "LEX 3 125/5",
      "Course de ponçage": "5 mm",
      "Masse": "1,0 kg"
    }
  },
  "editorial": {
    "overview": "Festool LEX 3 125/5. La notice distingue la consommation nominale sous 30 N à 6 bar du minimum d’alimentation 350 L/min à 6 bar. Ce seuil doit être appliqué comme besoin utilisateur ; le moteur ne le représente pas séparément et ne conclut pas à partir du seul débit nominal.",
    "verifiedFacts": [
      "Course de ponçage : 5 mm.",
      "Masse : 1,0 kg.",
      "Alimentation conseillée : au moins 350 l/min à 6 bars.",
      "Diamètre intérieur minimal de conduite : 9 mm."
    ],
    "limitations": [
      "La notice distingue la consommation nominale sous 30 N à 6 bar du minimum d’alimentation 350 L/min à 6 bar. Ce seuil doit être appliqué comme besoin utilisateur ; le moteur ne le représente pas séparément et ne conclut pas à partir du seul débit nominal.",
      "La consommation nominale est mesurée sous 30 N à 6 bar ; le fabricant exige aussi une alimentation d’au moins350 L/min à 6 bar. Le moteur ne représente pas ce seuil indépendant : renseigner un besoin utilisateur conforme à ce minimum.",
      "La recommandation d’alimentation de 350 l/min à 6 bars est conservée séparément de la consommation nominale.",
      "Le système IAS, l’évacuation de l’air et l’aspiration restent nécessaires selon la configuration ; le seul débit ne décrit pas l’installation.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
    ]
  },
  "specifications": [
    {
      "label": "Course de ponçage",
      "value": "5 mm",
      "evidenceIds": [
        "october4-tools-shared-festool-lex3-manual-p25"
      ]
    },
    {
      "label": "Masse",
      "value": "1,0 kg",
      "evidenceIds": [
        "october4-tools-shared-festool-lex3-manual-p25"
      ]
    },
    {
      "label": "Alimentation conseillée",
      "value": "au moins 350 l/min à 6 bars",
      "evidenceIds": [
        "october4-tools-shared-festool-lex3-manual-p25"
      ]
    },
    {
      "label": "Diamètre intérieur minimal de conduite",
      "value": "9 mm",
      "evidenceIds": [
        "october4-tools-shared-festool-lex3-manual-p25"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "290 L/min",
      "evidenceIds": [
        "october4-tools-shared-festool-lex3-manual-p25"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "* pression d'entrée de 6 bars ; n0, charge 30N",
      "evidenceIds": [
        "october4-tools-shared-festool-lex3-manual-p25"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-shared-festool-lex3-manual-p25",
      "sourceUrl": "https://media.cdn.festool.io/productmedia/Images/attachment/e6f839db-86e0-11ef-8a56-005056b3ad01.pdf#page=25",
      "sourceLabel": "Festool : notice LEX 3, données en charge nominale, page PDF 25",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 01e9c1cbad9cf7673982e9583c5e836934e37630313c996337e230ab9c4062b6. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4-tools-shared-festool-lex3-manual-p25"
    ],
    "workingPressureBar": [
      "october4-tools-shared-festool-lex3-manual-p25"
    ],
    "demandExplanation": [
      "october4-tools-shared-festool-lex3-manual-p25"
    ]
  },
  "notes": [
    "La notice distingue la consommation nominale sous 30 N à 6 bar du minimum d’alimentation 350 L/min à 6 bar. Ce seuil doit être appliqué comme besoin utilisateur ; le moteur ne le représente pas séparément et ne conclut pas à partir du seul débit nominal."
  ]
};

export default product;
