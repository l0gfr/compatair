import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505",
  "slug": "pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505",
  "categoryId": "pistolet-peinture-hvlp",
  "category": "pistolet-peinture-hvlp",
  "label": "Sagola 3600 XPT HVLP buse 1.30 (réf. 10142505)",
  "brand": "Sagola",
  "model": "3600 XPT HVLP buse 1.30",
  "mpn": "10142505",
  "demandModel": "variable-volume",
  "workingPressureBar": {},
  "demandExplanation": "Le catalogue donne 360 L/min à 2 bar pour la configuration HVLP, tandis que la notice limite l’entrée HVLP à 1,8 bar. Ces sources publient des pressions incompatibles ; elles ne sont pas réconciliées. Aucun point de demande sous pression n’est retenu pour dimensionner le compresseur.",
  "confidence": "B",
  "image": {
    "src": "/images/products/pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505.svg",
    "alt": "Repères techniques : Sagola 3600 XPT HVLP buse 1.30 (réf. 10142505)",
    "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "variant": {
    "familyId": "sagola-3600-xpt-hvlp-buse-1-30",
    "label": "Référence 10142505",
    "distinguishingAttributes": {
      "reference": "10142505",
      "Buse": "1.30 mm",
      "Chapeau d’air": "HVLP"
    }
  },
  "editorial": {
    "overview": "3600 XPT HVLP 10142505 : le catalogue donne, pour la buse de 1,30 mm, 179 g/min de produit et un jet de 250 mm à une distance d’application de 15 à 18 cm. La version 1,40 mm 10142506 donne 161 g/min et 255 mm : une buse plus grande n’y signifie pas un débit de produit plus élevé. La contradiction entre 2 bar au catalogue et 1,8 bar maximum à la notice reste à faire confirmer.",
    "verifiedFacts": [
      "Buse : 1.30 mm.",
      "Chapeau d’air : HVLP.",
      "Maximum d’entrée HVLP dans la notice : 1.8 bar.",
      "Catalogue : 10142505, 1,30 mm, 179 g/min, jet 250 mm ; 10142506, 1,40 mm, 161 g/min, jet 255 mm.",
      "Les deux lignes HVLP indiquent une distance d’application de 15 à 18 cm ; ce tableau ne précise pas un résultat pour chaque peinture du marché."
    ],
    "limitations": [
      "Le catalogue et la notice donnent des pressions incompatibles pour ce chapeau. Aucun point de consommation n’est choisi entre ces sources.",
      "Le catalogue donne 360 L/min à 2 bar ; la notice liée impose 1,8 bar maximum avec le chapeau HVLP. Le point n’est pas arbitré entre ces deux sources.",
      "Aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué.",
      "Relecture du 25 octobre 2026 : catalogue page 29, consommation HVLP 360 L/min à 2 bar ; notice page 29, pression maximale d’entrée HVLP 1,8 bar. La contradiction reste visible et la pression de calcul est retirée."
    ]
  },
  "specifications": [
    {
      "label": "Buse",
      "value": "1.30 mm",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Chapeau d’air",
      "value": "HVLP",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Maximum d’entrée HVLP dans la notice",
      "value": "1.8 bar",
      "evidenceIds": [
        "october4-tools-sagola-3600-manual-p29"
      ]
    },
    {
      "label": "Consommation publiée, hors calcul",
      "value": "360 L/min",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "Air consumption at 2 bar (29 psi)",
      "evidenceIds": [
        "october4-tools-sagola-bodyshop-catalogue-p29"
      ]
    },
    {
      "label": "Débit de produit du tableau",
      "value": "179 g/min, configuration 10142505",
      "evidenceIds": [
        "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-1",
        "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-2"
      ]
    },
    {
      "label": "Jet et distance du tableau",
      "value": "250 mm ; application de 15 à 18 cm",
      "evidenceIds": [
        "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-1",
        "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-2"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october4-tools-sagola-bodyshop-catalogue-p29",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=29",
      "sourceLabel": "Sagola : catalogue Bodyshop Refinish 2026/27, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Aucun essai physique CompatAir."
    },
    {
      "id": "october4-tools-sagola-3600-manual-p29",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-3600-manual.pdf#page=29",
      "sourceLabel": "Sagola : notice 3600 XPT, fonctionnement et buses d’air, page PDF 29",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "Déclaration fabricant, réponse primaire SHA-256 1f19477b3497285d86a11b144b0ca4a5158ec0453424b5280545aed3f5013db8. Aucun essai physique CompatAir."
    },
    {
      "id": "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-1",
      "sourceUrl": "https://sagola.com/uploads/documentos/bodyshop-catalogue.pdf#page=29",
      "sourceLabel": "Relecture ciblée de la référence, des variantes et des pièces, 25 octobre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-25",
      "confidence": "B",
      "notes": "Document lu le 25 octobre 2026 ; réponse SHA-256 db4cc471805cb5bd9e9a64d16185447c9b5c66a95d4ebd8f3f8e520c41da59c6. Portée : identité, références de pièces et limites décrites dans la fiche. Aucun essai physique CompatAir."
    },
    {
      "id": "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-2",
      "sourceUrl": "https://sagola.com/uploads/manuales/pistola-sagola-3600-manual.pdf#page=29",
      "sourceLabel": "Relecture ciblée de la référence, des variantes et des pièces, 25 octobre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-25",
      "confidence": "B",
      "notes": "Document lu le 25 octobre 2026 ; réponse SHA-256 1f19477b3497285d86a11b144b0ca4a5158ec0453424b5280545aed3f5013db8. Portée : identité, références de pièces et limites décrites dans la fiche. Aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "mpn": [
      "october4-tools-sagola-bodyshop-catalogue-p29"
    ],
    "demandExplanation": [
      "october4-tools-sagola-bodyshop-catalogue-p29",
      "october4-tools-sagola-3600-manual-p29"
    ],
    "workingPressureBar": [
      "october4-tools-sagola-bodyshop-catalogue-p29"
    ],
    "editorial": [
      "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-1",
      "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-2"
    ],
    "specifications": [
      "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-1",
      "reserved-followup-20261025-pistolet-peinture-hvlp-sagola-3600-xpt-hvlp-buse-1-30-10142505-2"
    ]
  },
  "notes": [
    "Le catalogue et la notice donnent des pressions incompatibles pour ce chapeau. Aucun point de consommation n’est choisi entre ces sources."
  ]
};

export default product;
