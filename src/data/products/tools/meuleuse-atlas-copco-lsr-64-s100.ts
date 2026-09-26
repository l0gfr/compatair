// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8423164055",
  "slug": "meuleuse-atlas-copco-lsr-64-s100",
  "categoryId": "meuleuse",
  "category": "Meuleuse pneumatique",
  "label": "Meuleuse pneumatique Atlas Copco LSR 64 S100",
  "brand": "Atlas Copco",
  "model": "LSR 64 S100",
  "mpn": "8423164055",
  "variant": {
    "familyId": "atlas-copco-6058867979",
    "label": "LSR 64 S100",
    "distinguishingAttributes": {
      "Vitesse maximale à vide": "10000 tr/min",
      "Puissance maximale": "2,9 kW",
      "Masse": "5,8 kg",
      "Longueur": "535 mm",
      "Forme": "Droit",
      "Filetage de broche": "5/8-11 UNC",
      "Longueur de broche": "55 mm",
      "Diamètre maximal de meule": "150 mm",
      "Consommation à vide": "1 560 L/min (26 l/s)",
      "Consommation à puissance maximale": "3 180 L/min (53 l/s)",
      "Pression maximale admise": "7 bar",
      "Pression de référence des performances": "6,3 bar"
    }
  },
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.3,
    "typical": 6.3,
    "max": 7
  },
  "airflowLpm": {
    "min": 3180,
    "typical": 3180,
    "max": 3180
  },
  "usagePattern": "continuous",
  "confidence": "A",
  "connectorSize": "Entrée 1/2 pouce BSP ; flexible intérieur 16 mm",
  "recommendedHose": {
    "innerDiameterMm": 16
  },
  "image": {
    "src": "/images/products/atlas-copco-8423164055-technical.webp",
    "alt": "Atlas Copco LSR 64 S100, référence 8423164055 : 3 180 L/min à puissance maximale, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/rough-grinding-and-cutting/lsr-64-s100-sku8423164055",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LSR 64 S100, référence 8423164055, demande 3 180 L/min à puissance maximale selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse maximale à vide : 10000 tr/min. Puissance maximale : 2,9 kW.",
    "verifiedFacts": [
      "Vitesse maximale à vide : 10000 tr/min.",
      "Puissance maximale : 2,9 kW.",
      "Masse : 5,8 kg.",
      "Longueur : 535 mm.",
      "Consommation à vide : 1 560 L/min, convertis depuis 26 l/s.",
      "Consommation à puissance maximale : 3 180 L/min, convertis depuis 53 l/s.",
      "Flexible recommandé : 16 mm de diamètre intérieur."
    ],
    "limitations": [
      "Le calcul conserve la plus élevée des consommations publiées pour les différentes phases. Il ne moyenne pas la marche à vide et le travail en charge.",
      "La pression maximale admise de 7 bar n’est pas la pression de référence du débit. Aucune consommation à 7 bar n’est extrapolée.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse maximale à vide",
      "value": "10000 tr/min",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance maximale",
      "value": "2,9 kW",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "5,8 kg",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "535 mm",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Filetage de broche",
      "value": "5/8-11 UNC",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur de broche",
      "value": "55 mm",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre maximal de meule",
      "value": "150 mm",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "1 560 L/min (26 l/s)",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à puissance maximale",
      "value": "3 180 L/min (53 l/s)",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8423164055-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423164055-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8423164055-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/rough-grinding-and-cutting/lsr-64-s100-sku8423164055",
      "sourceLabel": "Atlas Copco, LSR 64 S100, 8423164055",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8423164055-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=213",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 213 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8423164055 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8423164055-fiche-fabricant",
      "atlas-copco-8423164055-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8423164055-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8423164055-catalogue-uk",
      "atlas-copco-8423164055-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8423164055-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8423164055-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
