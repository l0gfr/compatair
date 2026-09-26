// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8421040815",
  "slug": "perceuse-atlas-copco-lbb36-h013",
  "categoryId": "perceuse",
  "category": "Perceuse pneumatique",
  "label": "Perceuse pneumatique Atlas Copco LBB36 H013",
  "brand": "Atlas Copco",
  "model": "LBB36 H013",
  "mpn": "8421040815",
  "variant": {
    "familyId": "atlas-copco-20540513163",
    "label": "LBB36 H013",
    "distinguishingAttributes": {
      "Vitesse à vide": "1300 tr/min",
      "Puissance": "700 W",
      "Masse": "1,5 kg",
      "Longueur": "252 mm",
      "Diamètre": "42 mm",
      "Hauteur": "160 mm",
      "Forme": "Poignée revolver",
      "Capacité minimale du mandrin": "0,8 mm",
      "Capacité maximale du mandrin": "10 mm",
      "Consommation à vide": "990 L/min (16.5 l/s)",
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
    "min": 990,
    "typical": 990,
    "max": 990
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 3/8 pouce (norme de filetage non précisée) ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8421040815-technical.webp",
    "alt": "Atlas Copco LBB36 H013, référence 8421040815 : 990 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbb36-h013-sku8421040815",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LBB36 H013, référence 8421040815, demande 990 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 1300 tr/min. Puissance : 700 W.",
    "verifiedFacts": [
      "Vitesse à vide : 1300 tr/min.",
      "Puissance : 700 W.",
      "Masse : 1,5 kg.",
      "Longueur : 252 mm.",
      "Consommation à vide : 990 L/min, convertis depuis 16.5 l/s.",
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
      "value": "1300 tr/min",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance",
      "value": "700 W",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1,5 kg",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "252 mm",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre",
      "value": "42 mm",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Hauteur",
      "value": "160 mm",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Poignée revolver",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Capacité minimale du mandrin",
      "value": "0,8 mm",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Capacité maximale du mandrin",
      "value": "10 mm",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "990 L/min (16.5 l/s)",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8421040815-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8421040815-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8421040815-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lbb36-h013-sku8421040815",
      "sourceLabel": "Atlas Copco, LBB36 H013, 8421040815",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8421040815-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=248",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 248 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8421040815 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8421040815-fiche-fabricant",
      "atlas-copco-8421040815-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8421040815-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8421040815-catalogue-uk",
      "atlas-copco-8421040815-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8421040815-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8421040815-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
