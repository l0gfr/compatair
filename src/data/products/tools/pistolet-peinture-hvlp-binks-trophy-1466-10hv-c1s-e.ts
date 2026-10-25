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
  "demandExplanation": "Assemblage gravitaire Touch-up identifié ; le tableau de chapeaux C1/B1 porte un titre Full Size contradictoire. Une correspondance fabricant explicite de l’assemblage au point de consommation est requise avant calcul.",
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
    "overview": "Trophy 1466-10HV-C1S-E : assemblage gravitaire Touch-up HVLP à aiguille inox. Le 1466-10LV-B1S-E utilise le chapeau B1 LVMP ; le 1465-08HV-C1S-E est une alimentation sous pression, sans être le même assemblage gravitaire. Le code complet et le mode d’alimentation précèdent toute comparaison du débit. Le titre Full Size de la table C1/B1 reste une ambiguïté du document consulté.",
    "verifiedFacts": [
      "1466-10HV-C1S-E et 1466-10LV-B1S-E sont deux assemblages gravitaires Touch-up : HVLP/C1 et LVMP/B1. Le voisin automatique 1465-10HV-C1S n’est pas la ligne complète publiée dans cette édition ; il est remplacé par le 1466-10LV-B1S-E effectivement listé.",
      "La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies.",
      "Le document oppose 1466-10HV-C1S-E, gravité/HVLP, à 1466-10LV-B1S-E, gravité/LVMP, et à 1465-08HV-C1S-E, alimentation sous pression/HVLP."
    ],
    "limitations": [
      "La ligne de l’assemblage identifie le produit ; elle ne donne pas directement de consommation.",
      "Le tableau C1 indique 181 LPM à 1,4 bar et 6,5 SCFM à 20 psi ; le tableau B1 indique 220 LPM à 2 bar. Le titre Full Size contradictoire empêche ici de promouvoir automatiquement le point C1 en profil calculable du 1466.",
      "Une correspondance fabricant non ambiguë entre l’assemblage et le point de consommation reste à obtenir. Aucun diamètre de buse n’est déduit de la légende de l’autre famille."
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
    },
    {
      "label": "Autre alimentation, référence distincte",
      "value": "1465-08HV-C1S-E : Pressure, HVLP",
      "evidenceIds": [
        "reserved-followup-20261025-pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e-1"
      ]
    },
    {
      "label": "Chapeaux à distinguer",
      "value": "C1 HVLP ; B1 LVMP, association de l’assemblage au point d’air à confirmer",
      "evidenceIds": [
        "reserved-followup-20261025-pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e-1"
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
    },
    {
      "id": "review-20261025-pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e-s012",
      "sourceUrl": "https://binks.canto.com/direct/document/i3mg70cimt4e11l20u5rmh4c7c/Bf-sTsAgB3FlX-e4tht1-rzsFxY/original?content-type=application%2Fpdf&name=Trophy+Man.+Guns+03-473-01.pdf#page=5",
      "sourceLabel": "Relecture fabricant du 25 octobre 2026, s012, pages PDF 5",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-25",
      "confidence": "B",
      "notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:22.025748+00:00, SHA-256 35d79cbb33d2f08edc4f6e119d4d820e45115ae2b8f9cde2f159fc157867cddd. 1466-10HV-C1S-E et 1466-10LV-B1S-E sont deux assemblages gravitaires Touch-up : HVLP/C1 et LVMP/B1. Le voisin automatique 1465-10HV-C1S n’est pas la ligne complète publiée dans cette édition ; il est remplacé par le 1466-10LV-B1S-E effectivement listé. Limite : La ligne de l’assemblage identifie le produit ; elle ne donne pas directement de consommation."
    },
    {
      "id": "reserved-followup-20261025-pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e-1",
      "sourceUrl": "https://binks.canto.com/direct/document/i3mg70cimt4e11l20u5rmh4c7c/Bf-sTsAgB3FlX-e4tht1-rzsFxY/original?content-type=application%2Fpdf&name=Trophy+Man.+Guns+03-473-01.pdf#page=5",
      "sourceLabel": "Relecture ciblée de la référence, des variantes et des pièces, 25 octobre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-25",
      "confidence": "B",
      "notes": "Document lu le 25 octobre 2026 ; réponse SHA-256 35d79cbb33d2f08edc4f6e119d4d820e45115ae2b8f9cde2f159fc157867cddd. Portée : identité, références de pièces et limites décrites dans la fiche. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-binks-trophy-brochure-p5"
    ],
    "demandExplanation": [
      "october7-tools-binks-trophy-brochure-p5",
      "review-20261025-pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e-s012"
    ],
    "editorial": [
      "reserved-followup-20261025-pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e-1"
    ],
    "specifications": [
      "reserved-followup-20261025-pistolet-peinture-hvlp-binks-trophy-1466-10hv-c1s-e-1"
    ]
  },
  "notes": [
    "1466-10HV-C1S-E est un assemblage Touch-up à alimentation gravitaire, distinct du 1465 à pression/siphon.",
    "Aucun débit ni pression n’est transféré depuis la famille 1465 à alimentation par pression/siphon.",
    "Le suffixe -E est publié littéralement dans la brochure ; aucune autre variante d’emballage n’est ajoutée.",
    "Le code de buse n’est pas décodé depuis une légende d’une autre famille.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément.",
    "Relecture proposée du 25 octobre 2026 : La ligne de l’assemblage identifie le produit ; elle ne donne pas directement de consommation."
  ]
};

export default product;
