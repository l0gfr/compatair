// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8434118000",
  "slug": "cle-a-chocs-atlas-copco-lms18-hr13",
  "categoryId": "cle-a-chocs",
  "category": "Clé à chocs pneumatique",
  "label": "Clé à chocs pneumatique Atlas Copco LMS18 HR13",
  "brand": "Atlas Copco",
  "model": "LMS18 HR13",
  "mpn": "8434118000",
  "variant": {
    "familyId": "atlas-copco-20530080395",
    "label": "LMS18 HR13",
    "distinguishingAttributes": {
      "Vitesse à vide": "8100 tr/min",
      "Couple maximal de la plage": "110 Nm",
      "Couple minimal de la plage": "10 Nm",
      "Couple maximal publié": "150 Nm",
      "Masse": "1,45 kg",
      "Longueur": "144 mm",
      "Dimension de sortie": "1/2\"",
      "Type de sortie": "Carré mâle",
      "Carré d’entraînement": "1/2 pouce",
      "Forme": "Poignée revolver",
      "Arrêt automatique": "Non",
      "Consommation publiée": "510 L/min (8.5 l/s)",
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
    "min": 510,
    "typical": 510,
    "max": 510
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce (norme de filetage non précisée) ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8434118000-technical.webp",
    "alt": "Atlas Copco LMS18 HR13, référence 8434118000 : 510 L/min publiée, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/lms18-hr13-sku8434118000",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LMS18 HR13, référence 8434118000, demande 510 L/min publiée selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 8100 tr/min. Couple maximal de la plage : 110 Nm.",
    "verifiedFacts": [
      "Vitesse à vide : 8100 tr/min.",
      "Couple maximal de la plage : 110 Nm.",
      "Couple minimal de la plage : 10 Nm.",
      "Couple maximal publié : 150 Nm.",
      "Consommation publiée : 510 L/min, convertis depuis 8.5 l/s.",
      "Flexible recommandé : 10 mm de diamètre intérieur."
    ],
    "limitations": [
      "La consommation publiée reste celle du fabricant. Aucun cycle de travail supposé ne la réduit dans le scénario de référence.",
      "La pression maximale admise de 7 bar n’est pas la pression de référence du débit. Aucune consommation à 7 bar n’est extrapolée.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse à vide",
      "value": "8100 tr/min",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal de la plage",
      "value": "110 Nm",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal de la plage",
      "value": "10 Nm",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal publié",
      "value": "150 Nm",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1,45 kg",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "144 mm",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Dimension de sortie",
      "value": "1/2\"",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Type de sortie",
      "value": "Carré mâle",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Carré d’entraînement",
      "value": "1/2 pouce",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Poignée revolver",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Arrêt automatique",
      "value": "Non",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation publiée",
      "value": "510 L/min (8.5 l/s)",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8434118000-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8434118000-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8434118000-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/lms18-hr13-sku8434118000",
      "sourceLabel": "Atlas Copco, LMS18 HR13, 8434118000",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8434118000-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=20",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 20 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8434118000 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8434118000-fiche-fabricant",
      "atlas-copco-8434118000-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8434118000-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8434118000-catalogue-uk",
      "atlas-copco-8434118000-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8434118000-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8434118000-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
