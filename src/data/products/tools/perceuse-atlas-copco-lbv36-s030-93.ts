// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8421041452",
  "slug": "perceuse-atlas-copco-lbv36-s030-93",
  "categoryId": "perceuse",
  "category": "Perceuse pneumatique",
  "label": "Perceuse pneumatique Atlas Copco LBV36 S030-93",
  "brand": "Atlas Copco",
  "model": "LBV36 S030-93",
  "mpn": "8421041452",
  "variant": {
    "familyId": "atlas-copco-20540789771",
    "label": "LBV36 S030-93",
    "distinguishingAttributes": {
      "Vitesse à vide": "3000 tr/min",
      "Puissance": "510 W",
      "Masse": "1 kg",
      "Longueur": "252 mm",
      "Diamètre": "20 mm",
      "Hauteur": "43 mm",
      "Forme": "Renvoi d’angle",
      "Angle de tête": "90°",
      "Type de tête": "Standard",
      "Consommation à vide": "1 020 L/min (17 l/s)",
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
    "min": 1020,
    "typical": 1020,
    "max": 1020
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce (norme de filetage non précisée) ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8421041452-technical.webp",
    "alt": "Atlas Copco LBV36 S030-93, référence 8421041452 : 1 020 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbv36-s030-93-sku8421041452",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LBV36 S030-93, référence 8421041452, demande 1 020 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 3000 tr/min. Puissance : 510 W.",
    "verifiedFacts": [
      "Vitesse à vide : 3000 tr/min.",
      "Puissance : 510 W.",
      "Masse : 1 kg.",
      "Longueur : 252 mm.",
      "Consommation à vide : 1 020 L/min, convertis depuis 17 l/s.",
      "Flexible recommandé : 10 mm de diamètre intérieur."
    ],
    "limitations": [
      "La consommation à vide reste celle du fabricant. Aucun cycle de travail supposé ne la réduit dans le scénario de référence.",
      "La pression maximale admise de 7 bar n’est pas la pression de référence du débit. Aucune consommation à 7 bar n’est extrapolée.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse à vide",
      "value": "3000 tr/min",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance",
      "value": "510 W",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1 kg",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "252 mm",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre",
      "value": "20 mm",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Hauteur",
      "value": "43 mm",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Renvoi d’angle",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Angle de tête",
      "value": "90°",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Type de tête",
      "value": "Standard",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "1 020 L/min (17 l/s)",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8421041452-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8421041452-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8421041452-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbv36-s030-93-sku8421041452",
      "sourceLabel": "Atlas Copco, LBV36 S030-93, 8421041452",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8421041452-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=254",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 254 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8421041452 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8421041452-fiche-fabricant",
      "atlas-copco-8421041452-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8421041452-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8421041452-catalogue-uk",
      "atlas-copco-8421041452-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8421041452-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8421041452-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
