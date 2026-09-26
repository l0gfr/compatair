// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8421021005",
  "slug": "perceuse-atlas-copco-lbb16-s022",
  "categoryId": "perceuse",
  "category": "Perceuse pneumatique",
  "label": "Perceuse pneumatique Atlas Copco LBB16 S022",
  "brand": "Atlas Copco",
  "model": "LBB16 S022",
  "mpn": "8421021005",
  "variant": {
    "familyId": "atlas-copco-11715548683",
    "label": "LBB16 S022",
    "distinguishingAttributes": {
      "Vitesse à vide": "2200 tr/min",
      "Puissance": "350 W",
      "Masse": "0,7 kg",
      "Longueur": "225 mm",
      "Diamètre": "39 mm",
      "Hauteur": "42 mm",
      "Forme": "Droit",
      "Capacité du mandrin": "10 mm",
      "Capacité minimale du mandrin": "0,8 mm",
      "Capacité maximale du mandrin": "10 mm",
      "Consommation à vide": "480 L/min (8 l/s)",
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
    "min": 480,
    "typical": 480,
    "max": 480
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce (norme de filetage non précisée) ; flexible intérieur 6,3 mm",
  "recommendedHose": {
    "innerDiameterMm": 6.3
  },
  "image": {
    "src": "/images/products/atlas-copco-8421021005-technical.webp",
    "alt": "Atlas Copco LBB16 S022, référence 8421021005 : 480 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbb16-s022-sku8421021005",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LBB16 S022, référence 8421021005, demande 480 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 2200 tr/min. Puissance : 350 W.",
    "verifiedFacts": [
      "Vitesse à vide : 2200 tr/min.",
      "Puissance : 350 W.",
      "Masse : 0,7 kg.",
      "Longueur : 225 mm.",
      "Consommation à vide : 480 L/min, convertis depuis 8 l/s.",
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
      "value": "2200 tr/min",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance",
      "value": "350 W",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "0,7 kg",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "225 mm",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre",
      "value": "39 mm",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Hauteur",
      "value": "42 mm",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Capacité du mandrin",
      "value": "10 mm",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Capacité minimale du mandrin",
      "value": "0,8 mm",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Capacité maximale du mandrin",
      "value": "10 mm",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "480 L/min (8 l/s)",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8421021005-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8421021005-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8421021005-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbb16-s022-sku8421021005",
      "sourceLabel": "Atlas Copco, LBB16 S022, 8421021005",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8421021005-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=252",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 252 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8421021005 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8421021005-fiche-fabricant",
      "atlas-copco-8421021005-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8421021005-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8421021005-catalogue-uk",
      "atlas-copco-8421021005-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8421021005-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8421021005-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
