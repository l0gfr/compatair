// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8431026929",
  "slug": "visseuse-atlas-copco-lum22-hrx2",
  "categoryId": "visseuse",
  "category": "Visseuse pneumatique",
  "label": "Visseuse pneumatique Atlas Copco LUM22 HRX2",
  "brand": "Atlas Copco",
  "model": "LUM22 HRX2",
  "mpn": "8431026929",
  "variant": {
    "familyId": "atlas-copco-6696296459",
    "label": "LUM22 HRX2",
    "distinguishingAttributes": {
      "Vitesse à vide": "4500 tr/min",
      "Couple maximal de la plage": "2 Nm",
      "Couple minimal de la plage": "1,2 Nm",
      "Couple maximal sur assemblage élastique": "2 Nm",
      "Couple minimal sur assemblage élastique": "1,2 Nm",
      "Masse": "0,9 kg",
      "Longueur": "187 mm",
      "Dimension de sortie": "1/4\"",
      "Type de sortie": "Hexagonal femelle",
      "Forme": "Pistol balanced",
      "Arrêt automatique": "Oui",
      "Déclenchement": "Trigger lever",
      "Consommation à vide": "540 L/min (9 l/s)",
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
    "min": 540,
    "typical": 540,
    "max": 540
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce (norme de filetage non précisée) ; flexible intérieur 8 mm",
  "recommendedHose": {
    "innerDiameterMm": 8
  },
  "image": {
    "src": "/images/products/atlas-copco-8431026929-technical.webp",
    "alt": "Atlas Copco LUM22 HRX2, référence 8431026929 : 540 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/lum22-hrx2-sku8431026929",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LUM22 HRX2, référence 8431026929, demande 540 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 4500 tr/min. Couple maximal de la plage : 2 Nm.",
    "verifiedFacts": [
      "Vitesse à vide : 4500 tr/min.",
      "Couple maximal de la plage : 2 Nm.",
      "Couple minimal de la plage : 1,2 Nm.",
      "Couple maximal sur assemblage élastique : 2 Nm.",
      "Consommation à vide : 540 L/min, convertis depuis 9 l/s.",
      "Flexible recommandé : 8 mm de diamètre intérieur."
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
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal de la plage",
      "value": "2 Nm",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal de la plage",
      "value": "1,2 Nm",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal sur assemblage élastique",
      "value": "2 Nm",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal sur assemblage élastique",
      "value": "1,2 Nm",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "0,9 kg",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "187 mm",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Dimension de sortie",
      "value": "1/4\"",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Type de sortie",
      "value": "Hexagonal femelle",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Pistol balanced",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Arrêt automatique",
      "value": "Oui",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Déclenchement",
      "value": "Trigger lever",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "540 L/min (9 l/s)",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8431026929-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8431026929-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8431026929-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/lum22-hrx2-sku8431026929",
      "sourceLabel": "Atlas Copco, LUM22 HRX2, 8431026929",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8431026929-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=10",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 10 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8431026929 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8431026929-fiche-fabricant",
      "atlas-copco-8431026929-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8431026929-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8431026929-catalogue-uk",
      "atlas-copco-8431026929-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8431026929-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8431026929-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
