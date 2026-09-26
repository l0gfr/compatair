// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8431027929",
  "slug": "visseuse-atlas-copco-ltv009-r07-42-sh",
  "categoryId": "visseuse",
  "category": "Visseuse pneumatique",
  "label": "Visseuse pneumatique Atlas Copco LTV009 R07-42-SH",
  "brand": "Atlas Copco",
  "model": "LTV009 R07-42-SH",
  "mpn": "8431027929",
  "variant": {
    "familyId": "atlas-copco-6522991499",
    "label": "LTV009 R07-42-SH",
    "distinguishingAttributes": {
      "Vitesse à vide": "500 tr/min",
      "Couple maximal de la plage": "7 Nm",
      "Couple minimal de la plage": "1,1 Nm",
      "Masse": "0,7 kg",
      "Longueur": "264 mm",
      "Forme": "Renvoi d’angle",
      "Arrêt automatique": "Oui",
      "Distance axe-bord de tête": "9 mm",
      "Hauteur de tête": "25 mm",
      "Consommation à vide": "360 L/min (6 l/s)",
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
    "min": 360,
    "typical": 360,
    "max": 360
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/8 pouce (norme de filetage non précisée) ; flexible intérieur 6 mm",
  "recommendedHose": {
    "innerDiameterMm": 6
  },
  "image": {
    "src": "/images/products/atlas-copco-8431027929-technical.webp",
    "alt": "Atlas Copco LTV009 R07-42-SH, référence 8431027929 : 360 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltv009-r07-42-sh-sku8431027929",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LTV009 R07-42-SH, référence 8431027929, demande 360 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 500 tr/min. Couple maximal de la plage : 7 Nm.",
    "verifiedFacts": [
      "Vitesse à vide : 500 tr/min.",
      "Couple maximal de la plage : 7 Nm.",
      "Couple minimal de la plage : 1,1 Nm.",
      "Masse : 0,7 kg.",
      "Consommation à vide : 360 L/min, convertis depuis 6 l/s.",
      "Flexible recommandé : 6 mm de diamètre intérieur."
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
      "value": "500 tr/min",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal de la plage",
      "value": "7 Nm",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal de la plage",
      "value": "1,1 Nm",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "0,7 kg",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "264 mm",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Renvoi d’angle",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Arrêt automatique",
      "value": "Oui",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Distance axe-bord de tête",
      "value": "9 mm",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Hauteur de tête",
      "value": "25 mm",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "360 L/min (6 l/s)",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8431027929-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8431027929-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8431027929-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltv009-r07-42-sh-sku8431027929",
      "sourceLabel": "Atlas Copco, LTV009 R07-42-SH, 8431027929",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8431027929-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=15",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 15 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8431027929 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8431027929-fiche-fabricant",
      "atlas-copco-8431027929-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8431027929-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8431027929-catalogue-uk",
      "atlas-copco-8431027929-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8431027929-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8431027929-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
