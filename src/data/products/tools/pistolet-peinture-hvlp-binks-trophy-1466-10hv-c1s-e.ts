import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e",
  "slug": "pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Binks Trophy 1466-10HV-C1S-E",
  "brand": "Binks",
  "model": "Trophy 1466-10HV-C1S-E",
  "mpn": "1466-10HV-C1S-E",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.",
  "confidence": "B",
  "variant": {
    "familyId": "binks-trophy-touch-up-gravity",
    "label": "Trophy 1466-10HV-C1S-E",
    "distinguishingAttributes": {
      "Code complet publié": "1466-10HV-C1S-E",
      "Matériau aiguille déclaré": "Stainless Steel",
      "Alimentation déclarée": "Gravity",
      "Famille de la brochure": "Trophy Touch-up, alimentation gravitaire"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e.svg",
    "alt": "Repères techniques : Binks Trophy 1466-10HV-C1S-E",
    "sourceUrl": "https://binks.canto.com/direct/document/i3mg70cimt4e11l20u5rmh4c7c/Bf-sTsAgB3FlX-e4tht1-rzsFxY/original?content-type=application%2Fpdf&name=Trophy+Man.+Guns+03-473-01.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "Binks Trophy 1466-10HV-C1S-E. Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD. 1466-10HV-C1S-E est un assemblage Touch-up à alimentation gravitaire, distinct du 1465 à pression/siphon.",
    "verifiedFacts": [
      "Code complet publié : 1466-10HV-C1S-E.",
      "Matériau aiguille déclaré : Stainless Steel.",
      "Alimentation déclarée : Gravity.",
      "Famille de la brochure : Trophy Touch-up, alimentation gravitaire.",
      "Consommation publiée dans son unité originale : La ligne complète de cet assemblage ne donne pas de consommation..",
      "Pression dans la source : Aucun point de pression apparié à la ligne complète de cet assemblage.."
    ],
    "limitations": [
      "Aucun débit ni pression n’est transféré depuis la famille 1465 à alimentation par pression/siphon.",
      "Le suffixe -E est publié littéralement dans la brochure ; aucune autre variante d’emballage n’est ajoutée.",
      "Le code de buse n’est pas décodé depuis une légende d’une autre famille.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Code complet publié",
      "value": "1466-10HV-C1S-E",
      "evidenceIds": [
        "october7-tools-binks-trophy-brochure-p5"
      ]
    },
    {
      "label": "Matériau aiguille déclaré",
      "value": "Stainless Steel",
      "evidenceIds": [
        "october7-tools-binks-trophy-brochure-p5"
      ]
    },
    {
      "label": "Alimentation déclarée",
      "value": "Gravity",
      "evidenceIds": [
        "october7-tools-binks-trophy-brochure-p5"
      ]
    },
    {
      "label": "Famille de la brochure",
      "value": "Trophy Touch-up, alimentation gravitaire",
      "evidenceIds": [
        "october7-tools-binks-trophy-brochure-p5"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "La ligne complète de cet assemblage ne donne pas de consommation.",
      "evidenceIds": [
        "october7-tools-binks-trophy-brochure-p5"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Aucun point de pression apparié à la ligne complète de cet assemblage.",
      "evidenceIds": [
        "october7-tools-binks-trophy-brochure-p5"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-binks-trophy-brochure-p5",
      "sourceUrl": "https://binks.canto.com/direct/document/i3mg70cimt4e11l20u5rmh4c7c/Bf-sTsAgB3FlX-e4tht1-rzsFxY/original?content-type=application%2Fpdf&name=Trophy+Man.+Guns+03-473-01.pdf#page=5",
      "sourceLabel": "Binks Trophy manufacturer brochure 03-473-01, page PDF 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 35d79cbb33d2f08edc4f6e119d4d820e45115ae2b8f9cde2f159fc157867cddd. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-binks-trophy-brochure-p5"
    ],
    "demandExplanation": [
      "october7-tools-binks-trophy-brochure-p5"
    ]
  },
  "notes": [
    "1466-10HV-C1S-E est un assemblage Touch-up à alimentation gravitaire, distinct du 1465 à pression/siphon.",
    "Aucun débit ni pression n’est transféré depuis la famille 1465 à alimentation par pression/siphon.",
    "Le suffixe -E est publié littéralement dans la brochure ; aucune autre variante d’emballage n’est ajoutée.",
    "Le code de buse n’est pas décodé depuis une légende d’une autre famille.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
