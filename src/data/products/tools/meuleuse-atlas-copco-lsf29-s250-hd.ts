// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8423012727",
  "slug": "meuleuse-atlas-copco-lsf29-s250-hd",
  "categoryId": "meuleuse",
  "category": "Meuleuse pneumatique",
  "label": "Meuleuse pneumatique Atlas Copco LSF29 S250-HD",
  "brand": "Atlas Copco",
  "model": "LSF29 S250-HD",
  "mpn": "8423012727",
  "variant": {
    "familyId": "atlas-copco-20533767563",
    "label": "LSF29 S250-HD",
    "distinguishingAttributes": {
      "Vitesse maximale à vide": "25000 tr/min",
      "Puissance maximale": "1 kW",
      "Masse": "1,2 kg",
      "Longueur": "213 mm",
      "Forme": "Droit",
      "Pince": "6 mm",
      "Consommation à vide": "540 L/min (9 l/s)",
      "Consommation à puissance maximale": "1 320 L/min (22 l/s)",
      "Pression maximale admise": "6,3 bar",
      "Pression de référence des performances": "6,3 bar"
    }
  },
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.3,
    "typical": 6.3,
    "max": 6.3
  },
  "airflowLpm": {
    "min": 1320,
    "typical": 1320,
    "max": 1320
  },
  "usagePattern": "continuous",
  "confidence": "A",
  "connectorSize": "Entrée 3/8 pouce BSP ; 3/8 pouce NPT ; flexible intérieur 13 mm",
  "recommendedHose": {
    "innerDiameterMm": 13
  },
  "image": {
    "src": "/images/products/atlas-copco-8423012727-technical.webp",
    "alt": "Atlas Copco LSF29 S250-HD, référence 8423012727 : 1 320 L/min à puissance maximale, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsf29-s250-hd-sku8423012727",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LSF29 S250-HD, référence 8423012727, demande 1 320 L/min à puissance maximale selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse maximale à vide : 25000 tr/min. Puissance maximale : 1 kW.",
    "verifiedFacts": [
      "Vitesse maximale à vide : 25000 tr/min.",
      "Puissance maximale : 1 kW.",
      "Masse : 1,2 kg.",
      "Longueur : 213 mm.",
      "Consommation à vide : 540 L/min, convertis depuis 9 l/s.",
      "Consommation à puissance maximale : 1 320 L/min, convertis depuis 22 l/s.",
      "Flexible recommandé : 13 mm de diamètre intérieur."
    ],
    "limitations": [
      "Le calcul conserve la plus élevée des consommations publiées pour les différentes phases. Il ne moyenne pas la marche à vide et le travail en charge.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La fiche indique des filetages BSP et NPT. Confirmer le raccord de la variante livrée dans sa notice avant de choisir un adaptateur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse maximale à vide",
      "value": "25000 tr/min",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance maximale",
      "value": "1 kW",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1,2 kg",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "213 mm",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Pince",
      "value": "6 mm",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "540 L/min (9 l/s)",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à puissance maximale",
      "value": "1 320 L/min (22 l/s)",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423012727-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423012727-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8423012727-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsf29-s250-hd-sku8423012727",
      "sourceLabel": "Atlas Copco, LSF29 S250-HD, 8423012727",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8423012727-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=210",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 210 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8423012727 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8423012727-fiche-fabricant",
      "atlas-copco-8423012727-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8423012727-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8423012727-catalogue-uk",
      "atlas-copco-8423012727-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8423012727-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8423012727-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
