// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8431083046",
  "slug": "boulonneuse-atlas-copco-ltv69-n370-20",
  "categoryId": "boulonneuse",
  "category": "Boulonneuse pneumatique",
  "label": "Boulonneuse pneumatique Atlas Copco LTV69 N370-20",
  "brand": "Atlas Copco",
  "model": "LTV69 N370-20",
  "mpn": "8431083046",
  "variant": {
    "familyId": "atlas-copco-20534165259",
    "label": "LTV69 N370-20",
    "distinguishingAttributes": {
      "Vitesse à vide": "480 tr/min",
      "Couple maximal de la plage": "370 Nm",
      "Couple minimal de la plage": "140 Nm",
      "Couple maximal à 6,3 bar sur assemblage élastique": "370 Nm",
      "Couple minimal à 6,3 bar sur assemblage élastique": "190 Nm",
      "Masse": "7,1 kg",
      "Longueur": "619 mm",
      "Dimension de sortie": "3/4\"",
      "Type de sortie": "Carré mâle",
      "Carré d’entraînement": "3/4 pouce",
      "Forme": "Renvoi d’angle",
      "Réversible": "Non",
      "Arrêt automatique": "Oui",
      "Distance axe-bord de tête": "32,9 mm",
      "Hauteur de tête": "62 mm",
      "Consommation à vide": "1 200 L/min (20 l/s)",
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
    "min": 1200,
    "typical": 1200,
    "max": 1200
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/2 pouce (norme de filetage non précisée) ; flexible intérieur 13 mm",
  "recommendedHose": {
    "innerDiameterMm": 13
  },
  "image": {
    "src": "/images/products/atlas-copco-8431083046-technical.webp",
    "alt": "Atlas Copco LTV69 N370-20, référence 8431083046 : 1 200 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltv69-n370-20-sku8431083046",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LTV69 N370-20, référence 8431083046, demande 1 200 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 480 tr/min. Couple maximal de la plage : 370 Nm.",
    "verifiedFacts": [
      "Vitesse à vide : 480 tr/min.",
      "Couple maximal de la plage : 370 Nm.",
      "Couple minimal de la plage : 140 Nm.",
      "Couple maximal à 6,3 bar sur assemblage élastique : 370 Nm.",
      "Consommation à vide : 1 200 L/min, convertis depuis 20 l/s.",
      "Flexible recommandé : 13 mm de diamètre intérieur."
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
      "value": "480 tr/min",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal de la plage",
      "value": "370 Nm",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal de la plage",
      "value": "140 Nm",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal à 6,3 bar sur assemblage élastique",
      "value": "370 Nm",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal à 6,3 bar sur assemblage élastique",
      "value": "190 Nm",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "7,1 kg",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "619 mm",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Dimension de sortie",
      "value": "3/4\"",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Type de sortie",
      "value": "Carré mâle",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Carré d’entraînement",
      "value": "3/4 pouce",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Renvoi d’angle",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Réversible",
      "value": "Non",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Arrêt automatique",
      "value": "Oui",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Distance axe-bord de tête",
      "value": "32,9 mm",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Hauteur de tête",
      "value": "62 mm",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "1 200 L/min (20 l/s)",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8431083046-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8431083046-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8431083046-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltv69-n370-20-sku8431083046",
      "sourceLabel": "Atlas Copco, LTV69 N370-20, 8431083046",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8431083046-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=36",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 36 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8431083046 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8431083046-fiche-fabricant",
      "atlas-copco-8431083046-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8431083046-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8431083046-catalogue-uk",
      "atlas-copco-8431083046-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8431083046-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8431083046-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
