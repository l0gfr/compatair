// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8434168001",
  "slug": "cle-a-chocs-atlas-copco-lms68-hr25",
  "categoryId": "cle-a-chocs",
  "category": "Clé à chocs pneumatique",
  "label": "Clé à chocs pneumatique Atlas Copco LMS68 HR25",
  "brand": "Atlas Copco",
  "model": "LMS68 HR25",
  "mpn": "8434168001",
  "variant": {
    "familyId": "atlas-copco-20530080395",
    "label": "LMS68 HR25",
    "distinguishingAttributes": {
      "Vitesse à vide": "5000 tr/min",
      "Couple maximal de la plage": "1800 Nm",
      "Couple minimal de la plage": "600 Nm",
      "Couple maximal publié": "4450 Nm",
      "Masse": "9,8 kg",
      "Longueur": "252 mm",
      "Dimension de sortie": "1\"",
      "Type de sortie": "Carré mâle",
      "Carré d’entraînement": "1 pouce",
      "Forme": "Poignée revolver",
      "Arrêt automatique": "Non",
      "Consommation publiée": "1 680 L/min (28 l/s)",
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
    "min": 1680,
    "typical": 1680,
    "max": 1680
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/2 pouce (norme de filetage non précisée) ; flexible intérieur 16 mm",
  "recommendedHose": {
    "innerDiameterMm": 16
  },
  "image": {
    "src": "/images/products/atlas-copco-8434168001-technical.webp",
    "alt": "Atlas Copco LMS68 HR25, référence 8434168001 : 1 680 L/min publiée, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/lms68-hr25-sku8434168001",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LMS68 HR25, référence 8434168001, demande 1 680 L/min publiée selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 5000 tr/min. Couple maximal de la plage : 1800 Nm.",
    "verifiedFacts": [
      "Vitesse à vide : 5000 tr/min.",
      "Couple maximal de la plage : 1800 Nm.",
      "Couple minimal de la plage : 600 Nm.",
      "Couple maximal publié : 4450 Nm.",
      "Consommation publiée : 1 680 L/min, convertis depuis 28 l/s.",
      "Flexible recommandé : 16 mm de diamètre intérieur."
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
      "value": "5000 tr/min",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal de la plage",
      "value": "1800 Nm",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal de la plage",
      "value": "600 Nm",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal publié",
      "value": "4450 Nm",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "9,8 kg",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "252 mm",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Dimension de sortie",
      "value": "1\"",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Type de sortie",
      "value": "Carré mâle",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Carré d’entraînement",
      "value": "1 pouce",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Poignée revolver",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Arrêt automatique",
      "value": "Non",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation publiée",
      "value": "1 680 L/min (28 l/s)",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8434168001-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8434168001-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8434168001-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/lms68-hr25-sku8434168001",
      "sourceLabel": "Atlas Copco, LMS68 HR25, 8434168001",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8434168001-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=20",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 20 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8434168001 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8434168001-fiche-fabricant",
      "atlas-copco-8434168001-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8434168001-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8434168001-catalogue-uk",
      "atlas-copco-8434168001-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8434168001-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8434168001-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
