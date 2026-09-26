// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8421011021",
  "slug": "perceuse-atlas-copco-lbv16-045-92",
  "categoryId": "perceuse",
  "category": "Perceuse pneumatique",
  "label": "Perceuse pneumatique Atlas Copco LBV16 045-92",
  "brand": "Atlas Copco",
  "model": "LBV16 045-92",
  "mpn": "8421011021",
  "variant": {
    "familyId": "atlas-copco-20540789771",
    "label": "LBV16 045-92",
    "distinguishingAttributes": {
      "Vitesse à vide": "4500 tr/min",
      "Puissance": "300 W",
      "Masse": "0,5 kg",
      "Longueur": "248 mm",
      "Diamètre": "17 mm",
      "Hauteur": "42 mm",
      "Forme": "Renvoi d’angle",
      "Angle de tête": "90°",
      "Type de tête": "Standard",
      "Consommation à vide": "522 L/min (8.7 l/s)",
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
    "min": 522,
    "typical": 522,
    "max": 522
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce (norme de filetage non précisée) ; flexible intérieur 6,3 mm",
  "recommendedHose": {
    "innerDiameterMm": 6.3
  },
  "image": {
    "src": "/images/products/atlas-copco-8421011021-technical.webp",
    "alt": "Atlas Copco LBV16 045-92, référence 8421011021 : 522 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbv16-045-92-sku8421011021",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LBV16 045-92, référence 8421011021, demande 522 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 4500 tr/min. Puissance : 300 W.",
    "verifiedFacts": [
      "Vitesse à vide : 4500 tr/min.",
      "Puissance : 300 W.",
      "Masse : 0,5 kg.",
      "Longueur : 248 mm.",
      "Consommation à vide : 522 L/min, convertis depuis 8.7 l/s.",
      "Flexible recommandé : 6,3 mm de diamètre intérieur."
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
      "value": "4500 tr/min",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance",
      "value": "300 W",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "0,5 kg",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "248 mm",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre",
      "value": "17 mm",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Hauteur",
      "value": "42 mm",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Renvoi d’angle",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Angle de tête",
      "value": "90°",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Type de tête",
      "value": "Standard",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "522 L/min (8.7 l/s)",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8421011021-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8421011021-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8421011021-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbv16-045-92-sku8421011021",
      "sourceLabel": "Atlas Copco, LBV16 045-92, 8421011021",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8421011021-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=254",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 254 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8421011021 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8421011021-fiche-fabricant",
      "atlas-copco-8421011021-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8421011021-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8421011021-catalogue-uk",
      "atlas-copco-8421011021-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8421011021-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8421011021-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
