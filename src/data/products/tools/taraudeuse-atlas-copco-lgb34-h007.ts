// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8421031166",
  "slug": "taraudeuse-atlas-copco-lgb34-h007",
  "categoryId": "taraudeuse",
  "category": "Taraudeuse pneumatique",
  "label": "Taraudeuse pneumatique Atlas Copco LGB34 H007",
  "brand": "Atlas Copco",
  "model": "LGB34 H007",
  "mpn": "8421031166",
  "variant": {
    "familyId": "atlas-copco-11706931083",
    "label": "LGB34 H007",
    "distinguishingAttributes": {
      "Vitesse à vide en marche avant": "700 tr/min",
      "Vitesse à vide en marche arrière": "1400 tr/min",
      "Masse": "1,8 kg",
      "Longueur": "301 mm",
      "Diamètre": "45 mm",
      "Hauteur": "153 mm",
      "Capacité de taraudage": "10 mm",
      "Consommation à vide": "450 L/min (7.5 l/s)",
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
    "min": 450,
    "typical": 450,
    "max": 450
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce (norme de filetage non précisée) ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8421031166-technical.webp",
    "alt": "Atlas Copco LGB34 H007, référence 8421031166 : 450 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lgb34-h007-sku8421031166",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LGB34 H007, référence 8421031166, demande 450 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide en marche avant : 700 tr/min. Vitesse à vide en marche arrière : 1400 tr/min.",
    "verifiedFacts": [
      "Vitesse à vide en marche avant : 700 tr/min.",
      "Vitesse à vide en marche arrière : 1400 tr/min.",
      "Masse : 1,8 kg.",
      "Longueur : 301 mm.",
      "Consommation à vide : 450 L/min, convertis depuis 7.5 l/s.",
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
      "label": "Vitesse à vide en marche avant",
      "value": "700 tr/min",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Vitesse à vide en marche arrière",
      "value": "1400 tr/min",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1,8 kg",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "301 mm",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre",
      "value": "45 mm",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Hauteur",
      "value": "153 mm",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Capacité de taraudage",
      "value": "10 mm",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "450 L/min (7.5 l/s)",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8421031166-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8421031166-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8421031166-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/drilling-solutions/lgb34-h007-sku8421031166",
      "sourceLabel": "Atlas Copco, LGB34 H007, 8421031166",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8421031166-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=263",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 263 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8421031166 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8421031166-fiche-fabricant",
      "atlas-copco-8421031166-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8421031166-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8421031166-catalogue-uk",
      "atlas-copco-8421031166-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8421031166-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8421031166-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
